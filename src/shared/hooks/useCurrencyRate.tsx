import { useEffect, useState } from 'react';// Assuming you have a 'types' file containing the 'Rates' type
import { exchangeApiUrl } from 'shared/constants';

let cachedRates: Rates | undefined;

export const useCurrencyRate = (): [Rates | undefined, boolean] => {
    const [rates, setRates] = useState<Rates | undefined>(cachedRates);
    const [loading, setLoading] = useState<boolean>(!rates);

    const fetchRates = async () => {
        try {
            const response = await fetch(exchangeApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            if (data && data.conversion_rates) {
                const fetchedRates = data.conversion_rates;
                setRates(fetchedRates);
                cachedRates = fetchedRates; // Cache the rates globally
            } else {
                throw new Error('Invalid response format');
            }
        } catch (error) {
            console.error('Error fetching exchange rates:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!rates) {
            fetchRates();
        }
    }, [rates]);

    return [rates, loading];
};
