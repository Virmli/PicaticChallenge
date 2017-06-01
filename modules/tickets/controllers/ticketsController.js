/**
 * Created by maksym on 2017-05-31.
 */
define(['angular'], angular => angular.module('ticketsController', [])
    .controller('ticketsController', function ticketsController(AUTH, TICKETS, $mdDialog, $document, $scope, ticketsConfig) {
        // Pass dependencies to view model on HTML side
        const vm = Object.assign(this, {
            AUTH,
            TICKETS,
            ticketsConfig,
        });

        vm.ticketStatus = ['open', 'hidden', 'closed'];

        vm.editTicket = (ticket) => {
            ticket.editMode = true;
        };
        vm.saveTicket = (ticket) => {
            const data = {
                data: {
                    attributes: {
                        name: ticket.attributes.name,
                        quantity: ticket.attributes.quantity,
                        price: ticket.attributes.price,
                        status: ticket.attributes.status,
                    },
                    id: ticket.id,
                    type: ticket.type,
                },
            };
            TICKETS.apiObj.patch.ticket(data);
            delete ticket.editMode;
        };

        vm.cancelTicket = (ticket) => {
            delete ticket.editMode
            // TODO:logic to return previous valuse.
        };

    }));
