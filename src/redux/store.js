import { configureStore } from "@reduxjs/toolkit";
import { recipesReducer } from "./recipes/slice.js";
import { ingredientsReducer } from "./ingredients/slice.js";
import { categoryReducer } from "./category/slice.js";
import { authReducer } from "./auth/slice.js";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const authPersistConfig = {
  key: "auth-data",
  version: 1,
  storage,
  whitelist: ["token", "user", "isLoggedIn"],
  blacklist: ["hasMore", "items", "favorites", "isRefreshing"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    ingredients: ingredientsReducer,
    category: categoryReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
