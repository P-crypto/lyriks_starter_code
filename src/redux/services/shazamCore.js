import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Initialize the createAPI module a named export. It takes an object as its parameters.
export const shazamCoreAPI = createApi({
  // the first key is the reducerPath and its value is the API's name.
  reducerPath: "shazamCoreAPI",
  // the second key is the baseQuery and its value is the imported fetchBaseQuery module.
  baseQuery: fetchBaseQuery({
    // the module takes in an object as its parameters.
    // the first key is named baseUrl and it is the API's base url.
    baseUrl: "https://shazam-core.p.rapidapi.com/v1/",
    // the third key is named prepare headers. It is used to set the API's header keys and their respective values.
    // Its value is a function that takes headers as the parameter.
    prepareHeaders: (headers) => {
      // the function calls the headers.set method and binds the header keys to their respective values...
      headers.set(
        "X-RapidAPI-Key",
        "01e4fc9285msh0c72e8abae9e9d9p16a12djsn35a7958d827d"
      );
      // then returns headers
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreAPI;
