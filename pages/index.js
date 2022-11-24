import React, { useState, useEffect } from "react";
import BettingButton from "../components/Win/BettingButton.jsx";
import Header from "../components/Win/Header.jsx";
import Parity from "../components/Win/Parity.jsx";
import Table from "../components/Win/Table.jsx";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";

const index = () => {
  const [show, setShow] = useState(false);

  const router = useRouter();

  const handleClose = () => {
    console.log("closed");

    router.push("/Login");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("jwt");

      if (!data) {
        setShow(true);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear("jwt");
    router.reload();
  };

  return (
    <div>
      {typeof window !== "undefined" && localStorage.getItem("jwt") ? (
        <div
          onClick={handleLogout}
          style={{
            position: "absolute",
            right: 20,
            backgroundColor: "red",
            padding: 10,
            borderRadius: 200,
            height: 70,
            bottom: 50,
            cursor: "pointer",
          }}
        >
          <h6 style={{ color: "white", fontWeight: "bold", marginTop: 13 }}>
            Logout
          </h6>
        </div>
      ) : (
        <></>
      )}

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
      >
        <Modal.Header>
          <Modal.Title>You Are Not Logged In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You are not logged in. Please login or create account here.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
      <Header />
      <Parity />
      <BettingButton />
      <Table />
    </div>
  );
};

export default index;
