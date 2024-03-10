import { changeCurrent, useStoreDispatch } from "store";
import { IUser } from "types";
import "./User.css";

interface UserProps {
  user: IUser;
}

export const User = ({ user }: UserProps) => {
  const dispatch = useStoreDispatch();
  return (
    <button
      key={user.id}
      onClick={() => dispatch(changeCurrent(user.id))}
      className="user"
    >
      <img className="user_avatar" src={user.avatar} alt="" />
      <p>{user.name}</p>
    </button>
  );
};
