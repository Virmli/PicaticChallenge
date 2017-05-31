/**
 * Created by maksym on 2017-05-29.
 */
define(['angular'], angular => angular.module('appConfig', [])
    .constant('appConfig', {
        defaultPage: '/',
        getPage(path) {
            let pageFound;
            Object.keys(this.pages).some((categoryKey) => {
                const category = this.pages[categoryKey];
                return Object.keys(category).some((pageKey) => {
                    const page = category[pageKey];
                    if (page.url === path) {
                        pageFound = page;
                        return true;
                    }
                    return false;
                });
            });
            return pageFound;
        },
        pages: {
            navSite: {
                navMap: {
                    url: '/map',
                    icon: 'f279',
                },
            },
        },
    }));
