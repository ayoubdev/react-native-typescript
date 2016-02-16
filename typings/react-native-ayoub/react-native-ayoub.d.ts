//On le déclare en tant que namespace afin de dissocier les définition pour du React pure
//et les définitions pour du React Native. Les deux namespaces auront le même nom (React)
//pour obtenir une définition globale mixée entre celles de react et celles de react-native.
//On aurait très bien pu faire les mettre sous un même declare namespace mais dans un soucis de clarté
//et pour une meilleure maintenance (dans le cas où on dissociera dans 2 fichiers d.ts différents), il est
//mieux de faire un appel dupliqué à declare namespace React:

//REACT.JS API:
/// <reference path="../react/react.d.ts" />

//Pour plus de détails d.ts JSX: https://github.com/Microsoft/TypeScript/wiki/JSX
declare namespace __React {
	//PROPERTIES:
	//Définition propriétés <View/>:
	interface ViewProps {
		accessibilityLabel?:string,
		accessible?:boolean,
		onAccessibilityTap?:()=>void
	}

	//COMPONENTS:
	class Text extends Component<any, any> {
	}

	class View extends Component<ViewProps, any> {
	}

	/*
	//class View extends Component<ViewProps, any> équivalent à:
	class View extends Component<any, any> {
		props: {
			testprop:string
		}
		render():JSX.Element;
	}
	*/
}

declare namespace JSX {
	/*
	//Les éléments intrinsèques permettent de définir rapidement des
	//éléments dom, vues... n'étant pas des composants
	//(par exemple, balises HTML pour react.js (cf. react.d.ts))
	//Les éléments intrisèques sont émis comme string par React (React.createElement("div"))
	//contre React.createElement(MyComponent) pour un composant
	//cf. https://github.com/Microsoft/TypeScript/wiki/JSX#type-checking
	interface IntrinsicElements {
		toto: { bar?: boolean }
	}
	*/

	/*
	//JSX.ElementAttributesProperty permet de spécifier le nom de l'objet
	//qui sera utilisé comme référence pour vérifier le type des propriétés d'un
	//composant [ElementAttributesProperty ne doit renseigner qu'un
	//seul nom de stockage des propriétés] (ici, ce sera "props" mais comme déjà défini dans react.d.ts,
	//inutile de le répéter (sinon duplicate entry error)):
	interface ElementAttributesProperty {
		props: Object;
	}
	*/
}

declare module 'react-native' {
	import React = __React;

	export class Component<P, S> extends React.Component<P,S> {
	}
	export class Text extends React.Text {
	}
	export class View extends React.View {
	}
	export var PropTypes:React.ReactPropTypes;

	export default React;
}

/*
 //exemple d.ts avec modules:
 declare module Module1 {
 function toto(): string;

 class Blabla {
 constructor();
 haha(): void;
 }
 }

 declare module Module2 {
 function tata(): string;

 class Bloblo {
 constructor();
 haha(): void;
 }
 }

 declare module "example-module" {
 //export default que si un seul élément à exporter sur tout le fichier:
 //export default Module1;
 export {Module1, Module2};
 }*/

//EXEMPLE CONCRET DTS POUR UN MODULE JS:
//Pour le module JS suivant:
/*
 class ClassJS {
 createString() {
 return "Ayoub Example Module";
 }
 }

 export default ClassJS;
 */
//Nous avons définit nos déclaration typescript de cette manière:
/*
 declare namespace ExampleNamespace {
 interface Example {
 createString(): void;
 }

 interface ExampleFactory {
 new(): Example;
 (numberToString: number): Example;
 }

 export var ClassJS: ExampleFactory;
 }

 declare module 'example-module' {
 import ClassJS = ExampleNamespace.ClassJS;
 export default ClassJS;
 }
 */
/*
 //Example d'utilisation en TS pour générer le bon JS depuis example-module module nodejs:
 import ClassJS from 'example-module';

 var w = ClassJS(32);
 var y = new ClassJS("blabla");
 w.createString();
 y.createString();
 */
