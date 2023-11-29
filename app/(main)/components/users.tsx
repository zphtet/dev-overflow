import User from "@/database/models/user.model";
import UserCard from "./user-card";

const Users = async () => {
  const users = await User.find({});
  return (
    <div className="flex flex-wrap gap-5 sm:justify-start flex-col sm:flex-row items-center justify-between ">
      {users.map((user) => {
        return <UserCard key={user._id} data={user} />;
      })}
    </div>
  );
};

export default Users;
