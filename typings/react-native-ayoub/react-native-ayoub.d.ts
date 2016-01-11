//On le déclare en tant que namespace afin de dissocier les définition pour du React pure
//et les définitions pour du React Native. Les deux namespaces auront le même nom (React)
//pour obtenir une définition globale mixée entre celles de react et celles de react-native.
//On aurait très bien pu faire les mettre sous un même declare namespace mais dans un soucis de clarté
//et pour une meilleure maintenance (dans le cas où on dissociera dans 2 fichiers d.ts différents), il est
//mieux de faire un appel dupliqué à declare namespace React:
declare namespace React {
    /*
        REACT API:
     */
    //?: <=> paramètre optionnel:
    export class Component<P, S> implements ComponentLifecycle<P, S> {
        constructor(props?: P, context?: any);
        setState(f: (prevState: S, props: P) => S, callback?: () => any): void;
        setState(state: S, callback?: () => any): void;
        forceUpdate(callBack?: () => any): void;
        render(): JSX.Element;
        props: P;
        state: S;
        context: {};
        refs: {
            [key: string]: Component<any, any>
        };
    }

    export interface ComponentLifecycle<P, S> {
        getInitialState?(): S;
        componentWillMount?(): void;
        componentDidMount?(): void;
        componentWillReceiveProps?(nextProps: P): void;
        shouldComponentUpdate?(nextProps: P, nextState: S): boolean;
        componentWillUpdate?(nextProps: P, nextState: S): void;
        componentDidUpdate?(prevProps: P, prevState: S): void;
        componentWillUnmount?(): void;
    }

    interface Props<T> {
        key?: string | number;
        ref?: string | ((component: T) => any);
    }

    interface ReactElement<P extends Props<any>> {
        type: string;
        props: P;
        key: string | number;
        ref: string | ((component: Component<P, any> | Element) => any);
    }
}

//Définition pour React Native
declare namespace React {
    //Text test:
    export interface TextProperties<T> extends Props<T> {
        numberOfLines?: number
        onPress?: () => void
        testID?: string
    }
    export class Text extends Component<any, any> {
        render(): JSX.ElementClass;
    }

    export class View extends Component<any, any> {
        render(): JSX.ElementClass;
    }
}

//cf. https://github.com/Microsoft/TypeScript/wiki/JSX
declare namespace JSX {
    import ReactNamespace = React;

    //Element définit le type de notre composant JSX
    interface Element extends ReactNamespace.Component<any, any> { }
    //ElementClass définit l'instance, l'objet de notre composant JSX, on étend Component,
    //pour que ElementClass ait un constructeur...
    interface ElementClass extends ReactNamespace.Component<any, any> {
        render(): JSX.Element;
    }
    interface ElementAttributesProperty { props: {}; }

    interface IntrinsicAttributes {
        key?: string | number;
    }

    interface IntrinsicClassAttributes<T> {
        ref?: string | ((classInstance: T) => void);
    }

    interface IntrinsicElements {
        //a: React.HTMLProps<HTMLAnchorElement>;
        Text: ReactNamespace.TextProperties<any>;
        //Text: {toto?:string};
    }
}



declare module 'react-native' {
    //import React = ReactNamespace;
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
 return "Ayoub ADIB Example Module";
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
