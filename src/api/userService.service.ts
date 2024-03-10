import axios from "axios";
import { IUser } from "types";

const messengerAPI = axios.create({
  baseURL: "http://localhost:4200/",
});

export const userService = {
  async getUsers() {
    const res = await messengerAPI.get<IUser[]>("users");
    return res.data;
  },
};
