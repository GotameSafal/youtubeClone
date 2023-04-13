import { createSlice } from "@reduxjs/toolkit";

const toggleSidebar = createSlice({
  name: "toggleSidebar",
  initialState: false,
  reducers: {
    openSidebar: (state) => {
      return (state = true);
    },
    closeSidebar: (state) => {
      return (state = false);
    },
  },
});
export const { openSidebar, closeSidebar } = toggleSidebar.actions;
export default toggleSidebar.reducer;
