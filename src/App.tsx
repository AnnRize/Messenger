import { useEffect } from "react";
import { AddPost, PostList, UserList } from "./components";
import { getPosts, getUsers, useStoreDispatch } from "./store";
import "./App.css";

const App = () => {
  const dispatch = useStoreDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="container">
      <UserList />
      <div className="messenger">
        <PostList />
        <AddPost />
      </div>
    </div>
  );
};

export default App;
