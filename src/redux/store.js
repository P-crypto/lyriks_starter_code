import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { shazamCoreAPI } from "./services/shazamCore";

import playerReducer from "./features/playerSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [shazamCoreAPI.reducerPath]: shazamCoreAPI.reducer,
    player: playerReducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreAPI.middleware),
});
