import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Modal from "react-bootstrap/Modal";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setShow(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      axios
        .post("/api/Authentication/login", {
          email: email,
          password: password,
        })
        .then((acc) => {
          console.log(acc.data);
          localStorage.setItem("jwt", JSON.stringify(acc.data));
          router.push("/");
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoCreateAccount = () => {};

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
          <label htmlFor="exampleInputEmail1" className="mt-2">
            Enter Password
          </label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control"
            placeholder="Enter Password"
          />
        </div>
        {isLoading ? (
          <div style={{ textAlign: "center", marginTop: 30 }}>
            <button
              type="submit"
              style={{ width: "20%" }}
              className="btn btn-secondary"
            >
              Loading...
            </button>
          </div>
        ) : (
          <div style={{ textAlign: "center", marginTop: 30 }}>
            <button
              type="submit"
              style={{ width: "20%" }}
              className="btn btn-primary"
            >
              Login
            </button>
          </div>
        )}
      </form>

      <h6
        onClick={() => router.push("/Register")}
        style={{ textAlign: "right", marginTop: 10, cursor: "pointer" }}
      >
        Create Account
      </h6>
    </div>
  );
};

export default Login;
