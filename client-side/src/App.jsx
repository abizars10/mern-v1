import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const endpoint = "http://localhost:3001/api/users";
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    setUsers(data);
    console.log(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <h1>TESTING</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>National</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.position}</td>
              <td>{user.national}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
