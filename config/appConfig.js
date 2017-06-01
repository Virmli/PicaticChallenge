/**
 * Created by maksym on 2017-05-29.
 */
define(['angular'], angular => angular.module('appConfig', [])
    .constant('appConfig', {
        defaultPage: '/',
        defaultUrl: 'https://api.picatic.com/v2/',
        paging: 100,
    }));
