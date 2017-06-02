/**
 * Created by maksym on 2017-05-29.
 * DESCRIPTION
 * This is where we can link our bower_components dependencies that would have normally gone to
 * index.html
 */
require.config({
    paths: {
        domReady: '../bower_components/requirejs-domready/domReady',
        angular: '../bower_components/angular/angular.min',
        'angular-animate': '../bower_components/angular-animate/angular-animate.min',
        'angular-aria': '../bower_components/angular-aria/angular-aria.min',
        'angular-material': '../bower_components/angular-material/angular-material.min',
        'angular-route': '../bower_components/angular-route/angular-route.min',
        'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize.min',
        'angular-translate': '../bower_components/angular-translate/angular-translate.min',
        'angular-dynamic-locale': '../bower_components/angular-dynamic-locale/angular-dynamic-locale',
        'angular-material-data-table': '../bower_components/angular-material-data-table/dist/md-data-table.min',

    },
    shim: {
        angular: {
            exports: 'angular',
        },
        'angular-animate': {
            deps: ['angular'],
        },
        'angular-aria': {
            deps: ['angular'],
        },
        'angular-material': {
            deps: ['angular', 'angular-animate', 'angular-aria'],
        },
        'angular-route': {
            deps: ['angular'],
        },
        'angular-translate': {
            deps: ['angular'],
        },
        'angular-sanitize': {
            deps: ['angular'],
        },
        'angular-material-data-table': {
            deps: ['angular'],
        },
    },
    deps: ['./bootstrapConfig'],
});
