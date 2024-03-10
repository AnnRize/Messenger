import { useStoreSelector } from "store";
import { User } from "./User";
import "./UserList.css";

export const UserList = () => {
  const users = useStoreSelector((state) => state.users.list);

  return (
    <div className="users_container">
      {users?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};
