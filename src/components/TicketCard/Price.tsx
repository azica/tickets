import { useQuery } from 'react-query';
import axios from 'axios';
import { exchangeApiUrl } from 'shared/constants';
import useConverterPrice from 'shared/hooks/useConverter';

const Price = ({ price }: { price: number }) => {

    const { data: fetchedRates, isSuccess } = useQuery<Rates>('rates', async () => {
        const response = await axios.get<{ conversion_rates: Rates }>(exchangeApiUrl);
        return response.data.conversion_rates;
    });

    const currentPrice = useConverterPrice(price, fetchedRates);
    return <span>{currentPrice}</span>;
};

export default Price;
