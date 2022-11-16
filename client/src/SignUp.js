import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  };

  const userForm = JSON.stringify({
    username: username,
    firstname: firstname,
    lastname: lastname,
    phoneNumber: phoneNumber,
    password: password,
  });

  const CREATE_API = "http://localhost:8080/create";
  const navigate = useNavigate();

  const createNewUser = async () => {
    try {
      console.log(userForm);
      const res = await axios.post(CREATE_API, userForm, axiosConfig);
      console.log(res);
      navigate("/list");
      // await setUserId(res.data.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createNewUser();
  };

  return (
    <div className="App">
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">firstname</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="firstname"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">lastname</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="lastname"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">phone number</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">username</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              autoComplete="on"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
