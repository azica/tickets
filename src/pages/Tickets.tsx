// components/Tickets.tsx
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from './style';
import { TicketCard } from 'components/TicketCard';
import Skeleton from 'components/Skeleton/Skeleton';
import useTickets from 'shared/hooks/useTickets';

const Tickets = () => {
    const [searchParams] = useSearchParams();
    const [queryString, setQueryString] = useState<string>(searchParams.get('stops') || '');
    const { tickets, loading, error } = useTickets(queryString);

    useEffect(() => {
        const stopsParam = searchParams.get('stops') || '';
        setQueryString(stopsParam);
    }, [searchParams]);

    return (
        <Container>
            {loading ? (
                Array.from({ length: 4 }).map((_, idx) => <Skeleton key={idx} />)
            ) : (
                tickets.map((ticket, idx) => <TicketCard key={idx} {...ticket} />)
            )}
        </Container>
    );
};

export default Tickets;
