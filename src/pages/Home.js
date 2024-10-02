import React, { useState, useEffect } from "react";
import axios from "axios";

//components
import { Container, Button, Row, Col } from "react-bootstrap";
import TransactionList from "../Components/TransactionList";
import AddTransaction from "../Components/AddTransaction";

function Home() {
  const [show, setShow] = useState(false);
  const [list, setList] = useState([]);

  const handleModal = (e) => {
    setShow((pre) => !pre);
  };

  const getTransaction = async () => {
    try {
      for (let index = 0; index < row; index++) {
        console.log(index);
      }
      let data = await axios.get("http://localhost:5004/transaction");

      setList(data.data);
    } catch (error) {
      setList([]);
    }
  };

  useEffect(() => {
    getTransaction();
  }, []);

  return (
    <Container className="mt-3">
      <h3>Interview task</h3>
      <Row className="justify-content-end">
        <Col sm={2} className="my-2">
          <Button variant="primary" onClick={handleModal}>
            Add Transaction
          </Button>
        </Col>
      </Row>

      <AddTransaction
        show={show}
        handleModal={handleModal}
        callBack={getTransaction}
      />
      <TransactionList list={list} />
    </Container>
  );
}

export default Home;
