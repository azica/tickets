import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { currencySymbols } from 'shared/constants';

const useConverterPrice = (price: number, rates: Rates | undefined): string => {
    console.log("trigger")
    const [searchParams] = useSearchParams();
    const defaultCurrencyCode = 'RUB';
    const [currencyCode, setCurrencyCode] = useState<string>(searchParams.get('currency') || defaultCurrencyCode);

    useEffect(() => {
        setCurrencyCode(searchParams.get('currency') || defaultCurrencyCode);
    }, [searchParams, defaultCurrencyCode]);

    const convertCurrency = (amount: number, fromCurrency: string, toCurrency: string): number => {
        if (!rates) {
            console.error('Rates not available.');
            return amount;
        }

        const fromRate = fromCurrency === 'USD' ? 1 : rates[fromCurrency] || 1;
        const toRate = toCurrency === 'USD' ? 1 : rates[toCurrency] || 1;

        const amountInUSD = amount / fromRate;
        const convertedAmount = amountInUSD * toRate;

        return convertedAmount;
    };

    const convertedAmount = convertCurrency(price, 'RUB', currencyCode);

    return `${convertedAmount.toFixed(2)} ${currencySymbols[currencyCode]}`;
};

export default useConverterPrice;
