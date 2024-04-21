import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCurrencyRate } from './useCurrencyRate';
import { currencySymbols } from 'shared/constants';

const useConverter = (price: number): string => {
    const [searchParams] = useSearchParams();
    const defaultCurrencyCode = 'RUB';
    const [currencyCode, setCurrencyCode] = useState<string>(searchParams.get('currency') || defaultCurrencyCode);

    useEffect(() => {
        setCurrencyCode(searchParams.get('currency') || defaultCurrencyCode);
    }, [searchParams, defaultCurrencyCode]);

    const [rates, loading] = useCurrencyRate();

    const convertCurrency = (amount: number, fromCurrency: string, toCurrency: string): number => {
        if (!rates || loading) {
            console.error('Currency rates not available or still loading.');
            return amount; // Return original amount if rates are not available or still loading
        }

        const fromRate = fromCurrency === 'USD' ? 1 : rates[fromCurrency];
        const toRate = toCurrency === 'USD' ? 1 : rates[toCurrency];

        const amountInUSD = amount / fromRate;
        const convertedAmount = amountInUSD * toRate;

        return convertedAmount;
    };

    const convertedAmount = convertCurrency(price, 'RUB', currencyCode);

    return `${convertedAmount.toFixed(2)} ${currencySymbols[currencyCode]}`;
};

export default useConverter;
