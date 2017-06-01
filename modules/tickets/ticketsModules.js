/**
 * Created by maksym on 2017-05-31.
 */
define([
    'angular',
    './ticketsRoutes',
    './ticketsConfig',
    './controllers/ticketsController',
    './factories/ticketsFactory',
], angular => angular.module('ticketsModules', [
    // CONFIG ----------------------------------------------------------------------------------
    'ticketsRoutes', 'ticketsConfig',

    // FACTORIES -------------------------------------------------------------------------------
    'ticketsFactory',

    // CONTROLLERS -----------------------------------------------------------------------------
    'ticketsController',
]));
