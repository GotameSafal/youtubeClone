import { createSlice } from "@reduxjs/toolkit";
const fetchSideData = createSlice({
  name: "fetchSideData",
  initialState: "All",
  reducers: {
    fetchSingleData: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { fetchSingleData } = fetchSideData.actions;
export default fetchSideData.reducer;
