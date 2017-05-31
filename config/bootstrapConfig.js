/**
 * Created by maksym on 2017-05-29.
 */
/**
* DESCRIPTION
* Bootstraps angular onto the window.document node
* Rarely will require modification
*/
define([
    'require',
    'angular',
    '../PicaticChallenge',
], (require, angular) => {
    require(['domReady!'], (document) => {
        angular.bootstrap(document, ['PicaticChallenge']);
    });
});
