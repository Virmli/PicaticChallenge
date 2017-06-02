/**
 * Created by maksym on 2017-05-31.
 * Config file for all files inside tickets folder.
 */
define(['angular'], angular => angular.module('ticketsConfig', [])
    .constant('ticketsConfig', {
        baseUrl: 'modules/tickets/',
        // add more configuration if needed.
    }));
