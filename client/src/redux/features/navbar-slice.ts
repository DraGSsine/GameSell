import { createSlice } from "@reduxjs/toolkit";
import { ToggleBarsTypes } from "@/types/types";

const initialState:boolean = false

export const ToggleBars = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggle: (state) => {
      return state = !state;
    },
  },
});

export const { toggle } = ToggleBars.actions;
export default ToggleBars.reducer;
