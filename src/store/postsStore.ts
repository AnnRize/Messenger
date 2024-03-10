import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postService } from "api";
import { IPost } from "types";

// types
export interface IPostState {
  list: IPost[];
  loading: boolean;
}

// states
const initialState: IPostState = {
  list: [],
  loading: false,
};

export const getPosts = createAsyncThunk("getPosts", async () => {
  return await postService.getPosts();
});

export const addPosts = createAsyncThunk<number, { text: string; id: number }>(
  "addPosts",
  async ({ text, id }, thunkApi) => {
    const res = await postService.addPost(text, id);
    await thunkApi.dispatch(getPosts());
    return res;
  }
);

const postsStore = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });
    builder.addCase(getPosts.pending, (state /* action */) => {
      state.loading = true;
    });

    builder.addCase(addPosts.fulfilled, (state /* action */) => {
      state.loading = false;
    });
    builder.addCase(addPosts.pending, (state /* action */) => {
      state.loading = true;
    });
  },
});

// export const {  } = postsStore.actions;
export default postsStore.reducer;
