/**
 * Created by maksym on 2017-05-31.
 */
define(['angular'], angular => angular.module('authFactory', [])
/** ********************************************************************************************
 * AUTH FACTORY
 * Manages the logging in and out of user. Stores the user token for use throughout the project.
 */
    .factory('AUTH', ($location, appConfig, $log, $http) => {
        const apiObj = {
            get: {
                user: () => $http.get('https://api.picatic.com/v2/user/me'),
            },
        };

        const auth = {};

        /**
         * Logs in the user.
         * @param userId
         * @param password
         */
        auth.login = (token) => {
            auth.token = null;
            // set authorization headers.
            $http.defaults.headers.common.Authorization = `Bearer ${token}`;

            return apiObj.get.user()
                .then((result) => {
                    if (result.data.id === null) {
                        return false;
                    }
                    auth.token = token;
                    auth.user = result.data.data;
                    $log.debug('authenticate');
                    return result.data.data;
                });
        };

        return auth;
    }));

// angular.module('todoService', [])
//
// // super simple service
// // each function returns a promise object
//     .factory('Todos', ['$http', function ($http) {
//         return {
//             get() {
//                 return $http.get('/api/todos');
//             },
//             create(todoData) {
//                 return $http.post('/api/todos', todoData);
//             },
//             delete(id) {
//                 return $http.delete(`/api/todos/${id}`);
//             },
//             put(id, todoData) {
//                 return $http.put(`/api/todos/${id}`, todoData);
//             },
//         };
//     }]);

