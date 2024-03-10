import axios from "axios";
import { IPost } from "types";

const messengerAPI = axios.create({
  baseURL: "http://localhost:4200/",
});

export const postService = {
  async getPosts() {
    const res = await messengerAPI.get<IPost[]>("posts");
    return res.data;
  },

  async addPost(text: string, userId: number) {
    const message = {
      text: text,
      userId: userId,
    };

    const res = await messengerAPI.post("posts", message);
    return res.status;
  },
};
