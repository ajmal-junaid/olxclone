/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useContext } from "react";

import Logo from "../../olx-logo.png";
import { FirebaseContext } from "../../store/Context";
import { useHistory } from "react-router-dom";

import "./Signup.css";

export default function Signup() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firebase);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        //console.log(result.user.uid+"--------------------")
        result.user.updateProfile({ displayName: username }).then(() => {
          firebase
            .firestore()
            .collection("users")
            .add({
              id: result.user.uid,
              username: username,
              phone: phone,
            })
            .then(() => {
              history.push("/login");
            });
        });
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img
          width="300px"
          height="200px"
          src={Logo}
          className="text-center w-100"
        ></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input w-100"
            type="text"
            id="fname"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname" className="mt-4">
            Email
          </label>
          <br />
          <input
            className="input w-100"
            type="email"
            id="fname"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname" className="mt-4">
            Phone
          </label>
          <br />
          <input
            className="input w-100"
            type="number"
            id="lname"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname" className="mt-4">
            Password
          </label>
          <br />
          <input
            className="input w-100"
            type="password"
            id="lname"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a className="mt-2" onClick={()=>history.push('/login')}>Login</a>
      </div>
    </div>
  );
}
