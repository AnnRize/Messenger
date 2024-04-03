import { changeCurrent, useStoreDispatch, useStoreSelector } from "store";
import { IUser } from "types";
import "./User.css";

interface UserProps {
  user: IUser;
}

export const User = ({ user }: UserProps) => {
  const currentUser = useStoreSelector((state) => state.users.current);
  const dispatch = useStoreDispatch();
  return (
    <button
      key={user.id}
      onClick={() => dispatch(changeCurrent(user.id))}
      className={`user ${currentUser.id===user.id && "active"}`}
    >
      <img className="user_avatar" src={user.avatar} alt="" />
      <p>{user.name}</p>
    </button>
  );
};
