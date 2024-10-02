import axios from "axios";
import { useState } from "react";
import { FormLabel, Row, Form, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddTransaction({ show, handleModal, callBack }) {
  const [fields, setFields] = useState({
    amount: 0,
    description: "",
    type: "credit",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFields((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await axios.post("http://localhost:5004/transaction/add", fields);

      setFields({
        amount: 0,
        description: "",
        type: "credit",
      });
      handleModal(e);
      callBack();
    } catch (error) {}
  };

  return (
    <>
      <Modal show={show} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Transaction</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Row>
              <Col sm={12}>
                <FormLabel>Type</FormLabel>

                <Form.Select
                  aria-label="Default select example"
                  name="type"
                  value={fields.type}
                  onChange={handleChange}
                >
                  <option value="credit">Credit</option>
                  <option value="debit">Debit</option>
                </Form.Select>
              </Col>
              <Col sm={12}>
                <FormLabel>Amount</FormLabel>

                <Form.Control
                  type="Number"
                  value={fields.amount}
                  name={"amount"}
                  onChange={handleChange}
                  required
                />
              </Col>

              <Col sm={12}>
                <FormLabel>Description</FormLabel>

                <Form.Control
                  type="text"
                  value={fields.description}
                  name={"description"}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" variant="secondary" onClick={handleModal}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleSubmit}>
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddTransaction;
