var gulp = require('gulp');
var gulpts = require('gulp-typescript');
//minimist permet de gérer lesguments en ligne de
//commande à partir d'une liste de commandes connues que l'on renseigne:
var minimist = require('minimist');

//Création du projet build/watch typescript module gulp:
var tsProject = gulpts.createProject('tsconfig.json');
//Récupération des arguments cmd:
var listOptions = {
	string: 'rootDir',
	default: {rootDir: '.'}
};
var options = minimist(process.argv.slice(2), listOptions);
//console.log(process.argv);
//console.log(options.rootDir);

//Définition des tâches:
//Build:
gulp.task('ts:build', function() {
	var tsResult = tsProject.src() // instead of gulp.src(...)
		.pipe(gulpts(tsProject));

	return tsResult.js.pipe(gulp.dest(options.rootDir));
});
//Watch si changement:
gulp.task('ts:watch', ['ts:build'], function() {
	gulp.watch(options.rootDir+'/**/*.ts', ['ts:build']);
	gulp.watch(options.rootDir+'/**/*.tsx', ['ts:build']);
});

//Tâche par défaut
gulp.task('default', ['ts:build']);
