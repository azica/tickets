import { MONTH_NAMES_RU, WEEKDAY_NAMES_RU } from "shared/constants";
import { parse, format } from 'date-fns';

export const declinationOfNumber = <T>(number: number, wordForms: T[]) => {
    const n = Math.abs(number) % 100;
    const n1 = n % 10;

    if (n > 10 && n < 20) {
        return wordForms[2];
    }
    if (n1 > 1 && n1 < 5) {
        return wordForms[1];
    }
    if (n1 === 1) {
        return wordForms[0];
    }
    return wordForms[2];
};



export const formatDateString = (dateString: string): string => {
    const parts = dateString.split(".");

    if (parts.length !== 3) {
        throw new Error("Invalid date string format");
    }

    const day = parts[0];
    const monthIndex = parseInt(parts[1], 10) - 1;
    const year = `20${parts[2]}`;

    const monthName = MONTH_NAMES_RU[monthIndex];
    const date = `${day} ${monthName} ${year}`;

    const formattedDate = new Date(Number(year), monthIndex, parseInt(day, 10));
    const weekdayIndex = formattedDate.getDay();
    const weekdayName = WEEKDAY_NAMES_RU[weekdayIndex];

    return `${date}, ${weekdayName}`;
};

export const getTotalFlightTime = (data: FlightData): string => {
    const { departure_date, departure_time, arrival_date, arrival_time } = data;

    const departureDateTimeString = `${departure_date} ${departure_time}`;
    const arrivalDateTimeString = `${arrival_date} ${arrival_time}`;

    const departureDateTime = parse(departureDateTimeString, 'dd.MM.yy HH:mm', new Date());
    const arrivalDateTime = parse(arrivalDateTimeString, 'dd.MM.yy HH:mm', new Date());

    const timeDifferenceMs = arrivalDateTime.getTime() - departureDateTime.getTime();

    if (timeDifferenceMs <= 0) {
        return '0 ч. 0 мин.';
    }

    const totalMinutes = Math.floor(timeDifferenceMs / (1000 * 60));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    let formattedResult = '';

    if (hours > 0) {
        formattedResult += `${hours}ч.`;
    }

    if (minutes > 0) {
        if (formattedResult.length > 0) {
            formattedResult += ' ';
        }
        formattedResult += `${minutes} мин.`;
    }

    return formattedResult;
}
