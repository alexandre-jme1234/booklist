import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tableBook: [],
  };

  export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
      setTableReadBook: (state, action) => {
        state.tableBook = action.payload;
        console.log('store', state.tableBook)
      },

    }});
  
  export const { setTableReadBook } =
  bookSlice.actions;
  export default bookSlice.reducer;
  