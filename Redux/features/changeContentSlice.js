import { createSlice } from "@reduxjs/toolkit";
const sidebarItemChange = createSlice({
  name: "sidebarItemChange",
  initialState: "New",
  reducers: {
    changeSidebar: (state, action) => {
      return state = action.payload;
    },
  },
});
export const {changeSidebar} = sidebarItemChange.actions;
export default sidebarItemChange.reducer;
