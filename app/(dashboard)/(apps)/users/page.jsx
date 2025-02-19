import { getUsers } from "@/config/user-config";
import { getContacts } from "../chat/chat-config";
import ViewUsers from "./view-users";

const UserPage = async () => {
  const users = await getUsers();
  const contacts = await getContacts();

  return (
    <>
      <ViewUsers contacts={contacts} users={users} />
    </>
  );
};

export default UserPage;
