/**
 * Created by maksym on 2017-05-29.
 * In this file we provide routes for all pages which will be handled inside core folder.
 */

define(['angular'], angular => angular.module('coreRoutes', ['ngRoute', 'appConfig', 'coreConfig'])
    .config(($routeProvider, $locationProvider, appConfig, coreConfig) => {
        $routeProvider
            .when('/', {
                templateUrl: `${coreConfig.baseUrl}views/no-events.html`,
            })
            .otherwise({
                resolveRedirectTo: `${coreConfig.baseUrl}views/no-events.html`,
            });

        $locationProvider.html5Mode(false);
    })
    .directive('loginOverlay', coreConfig => ({
        restrict: 'E',
        templateUrl: `${coreConfig.baseUrl}views/login-view.html`,
        controller: 'loginController as vm',
    })));
