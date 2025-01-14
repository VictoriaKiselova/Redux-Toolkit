import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "locale",
  initialState: {
    lang: "uk",
  },
  reducers: {
    changeLang: {
      reducer: (state, action) => {
        state.lang = action.payload.lang;
      },
      prepare: newLang => {
        return {
          payload: {
            id: crypto.randomUUID(),
            lang: newLang,
          },
        };
      },
    },
  },
});

export default slice.reducer;
export const { changeLang } = slice.actions;

// export const changeLang = newLang => {
//   return {
//     type: "locale/changeLang",
//     payload: newLang,
//   };
// };
// export const localeReducer = (state = { lang: "uk" }, action) => {
//   switch (action.type) {
//     case "locale/changeLang":
//       return {
//         ...state,
//         lang: action.payload,
//       };
//     default:
//       return state;
//   }
// };
