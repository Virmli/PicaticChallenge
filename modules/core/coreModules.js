/**
 * Created by maksym on 2017-05-29.
 */
define([
    'angular',
    './controllers/mainController',
    './controllers/loginController',
    './factories/authFactory',
    './coreRoutes',
    './coreConfig',
], angular => angular.module('coreModules', [
    // CONFIG ----------------------------------------------------------------------------------
    'coreRoutes',

    // FACTORIES -------------------------------------------------------------------------------
    'authFactory',
    // CONTROLLERS -----------------------------------------------------------------------------
    'mainController', 'loginController',
]));
