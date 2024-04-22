import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom'; // Assuming you are using React Router
import { useQuery } from 'react-query';
import axios from 'axios';
import useConverterPrice from 'shared/hooks/useConverter';
import { TicketCard } from 'components/TicketCard';
import Skeleton from 'components/Skeleton/Skeleton';
import { Container } from './style';
import useTickets from 'shared/hooks/useTickets';
import { exchangeApiUrl } from 'shared/constants';

const Tickets = () => {
    const [searchParams] = useSearchParams();
    const defaultCurrencyCode = 'RUB';
    const [currencyCode, setCurrencyCode] = useState<string>(searchParams.get('currency') || defaultCurrencyCode);
    const [queryString, setQueryString] = useState<string>(searchParams.get('stops') || '');

    const { tickets, loading, error } = useTickets(queryString);

    const { data: fetchedRates, refetch: refetchRates } = useQuery<Rates>({
        queryKey: 'rates',
        queryFn: async () => {
            const response = await axios.get<{ conversion_rates: Rates }>(exchangeApiUrl);
            return response.data.conversion_rates;
        },
        enabled: false,
    });

    useEffect(() => {
        const fetchRates = async () => {
            if (currencyCode && !fetchedRates) {
                await refetchRates();
            }
        };
        fetchRates();
    }, [currencyCode, fetchedRates, refetchRates]);

    useEffect(() => {
        const stopsParam = searchParams.get('stops') || '';
        setQueryString(stopsParam);
    }, [searchParams]);

    useEffect(() => {
        setCurrencyCode(searchParams.get('currency') || defaultCurrencyCode);
    }, [searchParams, defaultCurrencyCode]);

    const convertedPrice: Ticket[] = useConverterPrice(tickets, fetchedRates, 'RUB', currencyCode);

    return (
        <Container>
            {loading ? (
                Array.from({ length: 4 }).map((_, idx) => <Skeleton key={idx} />)
            ) : (
                convertedPrice.map((ticket, idx) => <TicketCard key={idx} {...ticket} />)
            )}
        </Container>
    );
};

export default Tickets;
