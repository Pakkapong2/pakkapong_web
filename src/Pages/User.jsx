import React from "react";
import { useState, useEffect } from "react";
import UserService from "../Services/user.service";
import Layout from '../components/Layout';
const User = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = () => {
    UserService.get()
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <Layout>
      <h1>User</h1>
      <hr />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} {user.email}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default User;
