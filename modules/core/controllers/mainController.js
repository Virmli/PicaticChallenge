/**
 * Created by maksym on 2017-05-29.
 */
define(['angular'], angular => angular.module('mainController', [])
    .config(($logProvider, coreConfig) => {
        $logProvider.debugEnabled(coreConfig.debugEnabled);
    })
    .controller('mainController', function mainController(AUTH, TICKETS, $location, $rootScope, appConfig, $mdSidenav, $cookies) {
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

        /**
         * Go to function handles page redirection when user click on a menu item.
         * In our case its only one page 'tickets'. But in future its easy to customize
         * different page support if each menu Item have its personal page.
         * @param url
         * @param id
         */
        main.goTo = (url, id) => {
            $location.path(url);
            // call tickets.
            TICKETS.tickets.eventTickets(id);
            $mdSidenav('left').close();
        };

        /**
         * Logout function imitates simple user logout functionality.
         */
        main.logout = () => {
            $location.path('/');
            $cookies.remove('token');
            window.location.reload(true);
        };
    }));
