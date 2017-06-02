/**
 * Created by maksym on 2017-05-29.
 * Config file for all files inside core folder.
 */
define(['angular'], angular => angular.module('coreConfig', [])
    .constant('coreConfig', {
        baseUrl: 'modules/core/',
        debugEnabled: false,
    }));
