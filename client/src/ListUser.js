import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export const ListUser = () => {
  const GET_API = "http://localhost:8080/get";
  const [data, setData] = useState([]);
  const getUsers = useRef({});

  getUsers.current = async () => {
    try {
      const res = await axios.get(GET_API);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers.current();
  }, []);

  return (
    <>
      <h3 class="list-header">listUser</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">firstname</th>
            <th scope="col">lastname</th>
            <th scope="col">username</th>
            <th scope="col">phone number</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.username}</td>
                <td>{user.phoneNumber}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
