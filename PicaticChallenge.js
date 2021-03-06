/**
 * Created by maksym on 2017-05-29.
 */
/** ************************************************************************************************
 * DESCRIPTION
 * This is where we load Picatic Challenge
 */

define([
    // EXTERNAL DEPENDENCIES -----------------------------------------------------------------------
    'angular', 'angular-animate', 'angular-aria', 'angular-material', 'angular-messages',
    'angular-route', 'angular-sanitize', 'angular-translate', 'angular-material-data-table',
    'angular-cookies',

    // CONFIG --------------------------------------------------------------------------------------
    '../config/appConfig',

    // MODULES -------------------------------------------------------------------------------------
    '../modules/core/coreModules',
    '../modules/tickets/ticketsModules',
    // '../modules/user/userModules',
    // Add a module using '../modules/[module folder name]/[module file name]' then add the module
    // name to the dependencies in the return statement below
], angular => angular.module('PicaticChallenge', [
    // EXTERNAL DEPENDENCIES -------------------------------------------------------------------
    'ngRoute', 'ngMaterial', 'ngMessages', 'ngSanitize', 'ngAnimate', 'md.data.table', 'ngCookies',

    // CONFIG ----------------------------------------------------------------------------------
    'appConfig',

    // MODULES ---------------------------------------------------------------------------------
    'coreModules', 'ticketsModules',
]));
