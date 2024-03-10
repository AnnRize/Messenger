import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import usersStore from "./usersStore";
import postsStore from "./postsStore";

export const store = configureStore({
  reducer: {
    users: usersStore,
    posts: postsStore,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useStoreDispatch: () => AppDispatch = useDispatch;
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
