import { currencySymbols } from 'shared/constants';

const convertCurrency = (amount: number, fromCurrency: string, toCurrency: string, rates: Rates): number => {

    const fromRate = fromCurrency === 'USD' ? 1 : rates[fromCurrency] || 1;
    const toRate = toCurrency === 'USD' ? 1 : rates[toCurrency] || 1;

    const amountInUSD = amount / fromRate;
    const convertedAmount = amountInUSD * toRate;

    return convertedAmount;
};

const formatPrice = (amount: number): string => {
    return amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
const useConverterPrice = (tickets: Ticket[], rates: Rates | undefined, fromCurrency: string, toCurrency: string): Ticket[] => {
    if (!rates) {
        return tickets;
    }
    return tickets.map((ticket) => {
        const { price } = ticket;

        const convertedPrice = convertCurrency(Number(price), fromCurrency, toCurrency, rates);
        const formattedPrice = formatPrice(convertedPrice);

        return {
            ...ticket,
            price: `${formattedPrice}${currencySymbols[toCurrency]}`,
        };
    });
};

export default useConverterPrice;
