import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "api";
import { IUser } from "types";

// types
export interface IUserState {
  current: IUser;
  list: IUser[];
}

// states
const initialCurrent: IUser = {
  name: "",
  avatar: "",
  id: 0,
};

const initialState: IUserState = {
  current: initialCurrent,
  list: [],
};

export const getUsers = createAsyncThunk("getUsers", async () => {
  return await userService.getUsers();
});

const usersStore = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    changeCurrent: (state, action: PayloadAction<number>) => {
      state.current =
        state.list.find((user) => user.id === action.payload) || initialCurrent;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.list = action.payload;
      state.current = action.payload[0];
    });
  },
});
export const { changeCurrent } = usersStore.actions;
export default usersStore.reducer;
