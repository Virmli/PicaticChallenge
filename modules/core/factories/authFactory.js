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
                user: () => $http.get(`${appConfig.defaultUrl}user/me`),
                // TODO: pagination?
                allEvents: userId => $http.get(`${appConfig.defaultUrl}event?filter[user_id]=${userId}&page[limit]=${appConfig.paging}&page[offset]=0`),
            },
        };

        const auth = {};

        function filterMenu(pages) {
            const constructedMenu = [
                {
                    url: '/tickets',
                    menu: [],
                    category: 'Live',
                },
                {
                    url: '/tickets',
                    menu: [],
                    category: 'Draft',
                },
                {
                    url: '/tickets',
                    menu: [],
                    category: 'Close',
                },
            ];
            pages.forEach((page) => {
                if (page.attributes.status === 'active') {
                    constructedMenu[0].menu.push(page);
                } else if (page.attributes.status === 'draft') {
                    constructedMenu[1].menu.push(page);
                } else {
                    constructedMenu[2].menu.push(page);
                }
            });

            return constructedMenu;
        }
        /**
         * Logs in the user.
         * @param token
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
                    auth.userId = result.data.id;
                    auth.user = result.data.data;
                    $log.debug('authenticate');
                    return result.data.data;
                });
        };

        auth.pages = userId => apiObj.get.allEvents(userId)
                .then((result) => {
                    if (result.data.data.length > 0) {
                        auth.menu = filterMenu(result.data.data);
                    }
                });


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

