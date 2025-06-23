import { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      }).catch(err => {
        setLoading(false);
        alert("Error fetching users");
      });
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="p-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map(user => (
          <div key={user.id} className="bg-white shadow p-4 rounded">
            <h3 className="font-bold">{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
