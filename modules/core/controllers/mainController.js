/**
 * Created by maksym on 2017-05-29.
 */
define(['angular'], angular => angular.module('mainController', [])
    .config(($logProvider, coreConfig) => {
        $logProvider.debugEnabled(coreConfig.debugEnabled);
    })
    .controller('mainController', function mainController(AUTH, $location, $rootScope, appConfig, $mdSidenav) {
        /** ************************************************************************************
         * SET UP VARIABLES
         */
        const main = Object.assign(this, {
            AUTH,
        });

        main.currentPath = $location.path();

        /** ************************************************************************************
         * HELPER FUNCTIONS
         */
        main.toggleSidenav = (id) => {
            $mdSidenav(id).toggle();
        };

        main.goTo = (url) => {
            $location.path(url);
            $mdSidenav('left').close();
        };

        main.logout = () => {
            window.location.reload(true);
        };
    }));
