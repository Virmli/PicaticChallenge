/**
 * Created by maksym on 2017-05-31.
 */
define(['angular'], angular => angular.module('ticketsFactory', [])
/**
 * TICKETS FACTORY provides abstracted way for controllers to access specific API.
 * Also handles data storage for use throughout the project.
 */
    .factory('TICKETS', ($location, appConfig, $log, $http) => {
        const apiObj = {
            get: {
                tickets: eventId => $http.get(`${appConfig.defaultUrl}ticket_price?filter[event_id]=${eventId}&page[limit]=${appConfig.paging}&page[offset]=0`),
            },
            patch: {
                ticket: ticketObj => $http.patch(`${appConfig.defaultUrl}ticket_price/${ticketObj.data.id}`, ticketObj),
            },
        };
        const tickets = {};

        tickets.eventTickets = id => apiObj.get.tickets(id)
            .then((res) => {
                tickets.ticketList = res.data.data;
            });

        return {
            apiObj,
            tickets,
        };
    }));
