import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import sessionReducer from "../features/session/sessionSlice";
import booksReducer from "../features/books/booksSlice";
import cartReducer from "../features/cart/cartSlice";
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
const persistConfig = {
  key: "root",
  storage,
};
const reducer = combineReducers({
  session: sessionReducer,
  books: booksReducer,
  cart: cartReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
