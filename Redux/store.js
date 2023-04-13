import { configureStore } from "@reduxjs/toolkit";
import { youtubeApi } from "./features/youtubApi";
import sidebarSlice from "./features/sidebarSlice";
import activeSidebar from "./features/changeContentSlice";
import fetchSideData from "./features/fetchSideData";
export const store = configureStore({
  reducer: {
    [youtubeApi.reducerPath]: youtubeApi.reducer,
    sidebar: sidebarSlice,
    activeSidebar,
    fetchSideData
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(youtubeApi.middleware),
});
