import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const youtubeApi = createApi({
  reducerPath: "youtubeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube138.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        process.env.YT_APIKEY
      );
      headers.set("X-RapidAPI-Host", "youtube138.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: (arg) => `/search/?q=${arg}`,
    }),
    relatedVideo: builder.query({
      query: (arg) => `/video/related-contents/?id=${arg}`,
    }),
    videoDetails: builder.query({
      query: (arg) => `/video/details/?id=${arg}`,
    }),
  }),
});

export const { useGetVideosQuery, useRelatedVideoQuery, useVideoDetailsQuery } =
  youtubeApi;
