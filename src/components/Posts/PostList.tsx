import { useEffect, useRef } from "react";
import { useStoreSelector } from "store";
import { Post } from "./Post";
import "./PostList.css";

export const PostList = () => {
  const posts = useStoreSelector((state) => state.posts.list);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current!.scrollTop = ref.current!.scrollHeight;
  }, [posts]);

  return (
    <div className="posts_container" ref={ref}>
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
