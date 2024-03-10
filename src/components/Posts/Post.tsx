import { useStoreSelector } from "store";
import { IPost } from "types";
import "./Post.css";

interface PostProps {
  post: IPost;
}

export const Post = ({ post }: PostProps) => {
  const users = useStoreSelector((state) => state.users.list);
  const currentUser = useStoreSelector((state) => state.users.current);

  const postUser = (userId: number) => {
    return users.find((user) => user.id == userId);
  };

  return (
    <div
      key={post.id}
      className={`post ${post.userId == currentUser.id ? "current_user" : ""}`}
    >
      <p className="post_text">{post.text}</p>
      <img className="post_avatar" src={postUser(post.userId)?.avatar} />
    </div>
  );
};
