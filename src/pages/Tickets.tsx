import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetchTicketsQuery } from "store/services/ticket.query";
import { Container } from "./style";
import { TicketCard } from "components/TicketCard";
import Skeleton from "components/Skeleton/Skeleton";

export const Tickets = () => {
    const [searchParams] = useSearchParams();
    const [queryString, setQueryString] = useState<string>(searchParams.get("stops") || "");
    const [isLoading, setIsLoading] = useState(true);
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const fetchedTickets = useFetchTicketsQuery({ query: queryString });

    useEffect(() => {
        const stopsParam = searchParams.get("stops") || "";
        setQueryString(stopsParam);
    }, [searchParams]);

    useEffect(() => {
        if (fetchedTickets.isSuccess && fetchedTickets.data) {
            setTickets(fetchedTickets.data as Ticket[]);

            setTimeout(() => {
                setIsLoading(false)
            }, 250)
        }
    }, [fetchedTickets]);

    return (
        <Container>
            {isLoading ? (
                Array.from({ length: 4 }).map((_, idx) => <Skeleton key={idx} />)
            ) : (
                tickets.map((ticket, idx) => <TicketCard key={idx} {...ticket} />)
            )}
        </Container>
    );
};

export default Tickets;
