import ticketsData from "assets/data/tickets.json";

interface ErrorResponse {
    message: string;
    status: number;
}

export const TicketService = {
    fetchTickets: async ({ query }: { query: string | null }): Promise<Ticket[] | { error: ErrorResponse }> => {
        try {
            if (!query || query === "all") {
                return ticketsData.tickets;
            }
            console.log(query)
            const stops = query.split(",");
            const filteredTickets = ticketsData.tickets.filter((ticket: Ticket) => {

                return stops.includes(ticket.stops.toString());
            });

            return filteredTickets;
        } catch (error) {
            return {
                error: {
                    message: "Failed to fetch tickets.",
                    status: 400
                }
            };
        }
    }
};
