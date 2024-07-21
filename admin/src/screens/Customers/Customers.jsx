import { Container } from "@mui/material";
import React from "react";
import Table from "../../components/Table/Table";

function Customers() {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "50px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h4 style={{ textAlign: "left" }}>All Customers</h4>
        </div>
        <div>
          <button className="primary">Add customer</button>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Table />
      </div>
    </Container>
  );
}

export default Customers;
