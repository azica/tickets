import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [] as Ticket[],
};

const TicketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
  },
});

export default TicketSlice.reducer;
