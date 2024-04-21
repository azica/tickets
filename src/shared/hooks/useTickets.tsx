import { useEffect, useState } from 'react';
import ticketsData from 'assets/data/tickets.json';

const useTickets = (query: string | null) => {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchTickets = async (query: string | null) => {
        if (!query) {
            setTickets(ticketsData.tickets);
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1000));

            const stops = query.split(',').map(stop => parseInt(stop.trim(), 10));
            const filteredTickets = ticketsData.tickets.filter(ticket => stops.includes(ticket.stops));

            setTickets(filteredTickets);
            setLoading(false);
            setError(null);
        } catch (error) {
            setError('Failed to fetch tickets.');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTickets(query);
    }, [query]);

    return { tickets, loading, error };
};

export default useTickets;
