import { useEffect, useState } from "react";
import { getUsers, createUser } from "./api";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleAdd = async () => {
    await createUser({ name: "John", email: "john@test.com" });
    loadUsers();
  };

  return (
    <div>
      <button onClick={handleAdd}>Add User</button>

      {users.map((u) => (
        <p key={u._id}>{u.name}</p>
      ))}
    </div>
  );
}

export default App;