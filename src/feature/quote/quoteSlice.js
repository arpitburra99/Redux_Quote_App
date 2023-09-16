import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
  name: "quotes",
  initialState: {
    quoteData: null,
    isLoading: false,
    isError: false,
    isSuccess: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.isLoading = false;
        state.quoteData = action.payload;
        state.isSuccess = true;
      })
      .addCase(fetchQuote.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.quoteData = null;
      });
  }
});

export default quoteSlice.reducer;

export const fetchQuote = createAsyncThunk("FETCH/QUOTES", async () => {
  const response = await fetch("https://quotable.io/random");
  const data = await response.json();
  return data;
});