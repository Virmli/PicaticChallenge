/**
 * Created by maksym on 2017-05-31.
 * This controller provides functionality for ticket page. It has all necessary methods.
 *
 */
define(['angular'], angular => angular.module('ticketsController', [])
    .controller('ticketsController', function ticketsController(AUTH, TICKETS, $mdDialog, $document, $scope, ticketsConfig) {
        // Pass dependencies to view model on HTML side
        const vm = Object.assign(this, {
            AUTH,
            TICKETS,
            ticketsConfig,
        });

        // Ticket status array.
        vm.ticketStatus = ['open', 'hidden', 'closed'];

        /**
         * Edit ticket function enters inline editing mode inside ticket table.
         * @param ticket
         */
        vm.editTicket = (ticket) => {
            // This copy functionality needed when user
            // clicks edit and changes ticket data and then uses
            // the cancel button to get the old data
            vm.copy = angular.copy(vm.TICKETS.tickets.ticketList);
            ticket.editMode = true;
        };

        /**
         * Save ticket function provides user with ability to update single
         * ticket information, and save it into Data Base.
         * @param ticket
         */
        vm.saveTicket = (ticket) => {
            // constructing new object for DB call.
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

            // call Ticket factory to update
            // ticket with new attributes.
            TICKETS.apiObj.patch.ticket(data);

            // exit editing mode.
            delete ticket.editMode;
        };

        /**
         * Cancel ticket function exit inline editing mode without
         * saving changes to Data Base.
         * @param ticket
         */
        vm.cancelTicket = (ticket) => {
            delete ticket.editMode;
            // returning old data if user decided to cancel his changes.
            vm.TICKETS.tickets.ticketList = vm.copy;
        };
    }));
