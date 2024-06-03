import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: "info",
  initialState: {
    showinfo: false,
  },
  reducers: {
    showInformation: (state) => {
      state.showinfo = !state.showinfo;
    },
  },
});

export const { showInformation } = infoSlice.actions;

export default infoSlice.reducer;
