/**
 * Created by maksym on 2017-05-31.
 * In this file we provide routes for all pages which will be handled inside tickets folder.
 */
define(['angular'], angular => angular.module('ticketsRoutes', ['ngRoute', 'ticketsConfig'])
    .config(($routeProvider, ticketsConfig) => {
        $routeProvider
            .when('/tickets', {
                templateUrl: `${ticketsConfig.baseUrl}views/ticket-view.html`,
                controller: 'ticketsController as vm',
            });
    }));
