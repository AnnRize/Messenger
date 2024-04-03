import { useState } from "react";
import { addPosts, useStoreDispatch, useStoreSelector } from "store";
import "./AddPost.css";

export const AddPost = () => {
  const [text, setText] = useState("");
  const dispatch = useStoreDispatch();
  const currentUser = useStoreSelector((state) => state.users.current);
  const { loading } = useStoreSelector((state) => state.posts);

  const addPost = async () => {
    await dispatch(addPosts({ text, id: currentUser.id }));
    setText("");
  };

  return (
    <div className="add_post_container">
      <img
        className="add_post_avatar"
        src={currentUser.avatar}
        alt=""
      />
      <input
        value={text}
        className="post_input"
        type="text"
        placeholder="Введите сообщение..."
        onChange={(e) => setText(e.target.value)}
      />
      <button
        disabled={!text || loading}
        className="add_post"
        onClick={addPost}
      >
        Отправить
      </button>
    </div>
  );
};
