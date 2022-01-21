import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { toggle : true };

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: { value: initialStateValue },
  reducers: {
    toggle: (state, action) => {
      state.value = !state.value;
    },
  },
});

export const { toggle} = sidebarSlice.actions;

export default sidebarSlice.reducer;
