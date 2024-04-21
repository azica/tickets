export const baseApiUrl = process.env.REACT_APP_API_URL;
export const exchangeApiUrl = process.env.REACT_APP_EXCHANGE_API_URL || "https://v6.exchangerate-api.com/v6/e4f39e068106fda8d1eea528/latest/USD";

export const MONTH_NAMES_RU: string[] = [
    "янв", "фев", "мар", "апр", "май", "июн",
    "июл", "авг", "сен", "окт", "ноя", "дек"
];

export const WEEKDAY_NAMES_RU: string[] = [
    "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
];

export const currencySymbols: { [key: string]: string } = {
    USD: '$',
    RUB: '₽',
    EUR: '€'
};