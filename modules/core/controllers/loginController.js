/**
 * Created by maksym on 2017-05-30.
 * Login controller creates a simple login authentication in order
 * not to store API key inside the project.
 */
define(['angular'], angular => angular.module('loginController', [])
    .controller('loginController', function loginController(AUTH, $scope, $cookies) {
        const vm = angular.extend(this, {
            AUTH,
        });


        /**
         * Simple cookie implementation to remove login
         * dialog if user reload page.
         */
        if ($cookies.get('token') !== undefined) {
            AUTH.login($cookies.get('token'))
                .then((res) => {
                    vm.loggedIn = true;
                    AUTH.pages(res.id);
                });
        }
        /**
         * Simple login function which accepts API key from the user
         * and if we able to make https call we allow user to use our dashboard.
         */
        vm.login = () => {
            AUTH.login(vm.accessKey)
                .then((res) => {
                    $scope.isSending = false;
                    vm.loggedIn = true;
                    $cookies.put('token', vm.accessKey);
                    AUTH.pages(res.id);
                })
                .catch((err) => {
                    console.log('Error', err);
                });
        };
    }));
