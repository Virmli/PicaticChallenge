/**
 * Created by maksym on 2017-05-30.
 */
define(['angular'], angular => angular.module('loginController', [])
    .controller('loginController', function loginController(AUTH, $scope, coreConfig) {
        const vm = angular.extend(this, {
            AUTH,
        });

        vm.login = () => {
            AUTH.login(vm.accessKey)
                .then((res) => {
                    $scope.isSending = false;
                    vm.loggedIn = true;
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
    }));
