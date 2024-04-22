import { FC } from "react";

declare global {
    type Routes = {
        path: string;
        id: number;
        element: JSX.Element;
        children?: {
            path: string;
            id: number;
            element: JSX.Element;
        }[];
    }

    type Ticket = {
        origin: string;
        origin_name: string;
        destination: string;
        destination_name: string;
        departure_date: string;
        departure_time: string;
        arrival_date: string;
        arrival_time: string;
        carrier: string;
        stops: number;
        price: number | string;
    }

    type ErrorResponse = {
        status: number;
        message: string;
    };

    type FlightData = {
        departure_date: string;
        departure_time: string;
        arrival_date: string;
        arrival_time: string;
    }

    type Rates = { [currencyCode: string]: number };

}