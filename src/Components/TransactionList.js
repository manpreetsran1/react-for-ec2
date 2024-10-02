import React from "react";
//components
import Table from "react-bootstrap/Table";

function TransactionList({ list }) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Description</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.length > 0 &&
            list.map((data, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{data.date}</td>
                <td>{data.description}</td>
                <td>{data.credit}</td>
                <td>{data.debit}</td>
                <td>{data.runningBalance}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default TransactionList;
