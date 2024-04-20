import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TicketService } from "services/TicketService";
import { baseApiUrl } from "shared/constants";

export const ticketApi = createApi({
  reducerPath: "ticketApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseApiUrl,
  }),
  tagTypes: ["Ticket"],
  endpoints: (builder) => ({
    fetchTickets: builder.query<Ticket[] | { error: ErrorResponse }, { query: string | null }>({
      queryFn: async ({ query }) => {
        try {
          const res = await TicketService.fetchTickets({ query });
          return { data: res };
        } catch (error: any) {
          return {
            error: error.response.data.errors,
          };
        }
      },
      providesTags: ["Ticket"],
    }),
  }),
});

export const {
  useFetchTicketsQuery,
} = ticketApi;
