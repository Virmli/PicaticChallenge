/**
 * Created by maksym on 2017-05-29.
 */
define(['angular'], angular => angular.module('mainController', [])
    .config(($logProvider, coreConfig) => {
        $logProvider.debugEnabled(coreConfig.debugEnabled);
    })
    .controller('mainController', function mainController(AUTH, TICKETS, $location, $rootScope, appConfig, $mdSidenav) {
        /** ************************************************************************************
         * SET UP VARIABLES
         */
        const main = Object.assign(this, {
            AUTH,
            TICKETS,
        });

        main.currentPath = $location.path();

        /** ************************************************************************************
         * HELPER FUNCTIONS
         */
        main.toggleSidenav = (id) => {
            $mdSidenav(id).toggle();
        };

        main.goTo = (url, id) => {
            $location.path(url);
            // call tickets.
            TICKETS.tickets.eventTickets(id);
            $mdSidenav('left').close();
        };

        main.logout = () => {
            $location.path('/');
            window.location.reload(true);
        };
    }));
