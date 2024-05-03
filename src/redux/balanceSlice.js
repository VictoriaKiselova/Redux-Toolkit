import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "balance",
  initialState: {
    value: 100,
  },
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
    },
  },
});
export const { deposit, withdraw } = slice.actions;
export default slice.reducer;

// export const deposit = createAction("balance/deposit");
// export const withdraw = createAction("balance/withdraw");

// export const balanceReducer = createReducer({ value: 100 }, builder => {
//   builder
//     .addCase(deposit, (state, action) => {
//       state.value += action.payload;
//     })
//     .addCase(withdraw, (state, action) => {
//       state.value -= action.payload;
//     });
// });
