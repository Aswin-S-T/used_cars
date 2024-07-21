import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import AddCustomer from "../AddCustomer/AddCustomer";
function Customers({ breadcrumb, setBreadcrumb }) {
  const [view, setView] = useState("list");

  useEffect(() => {
    if (view === "add") {
      setBreadcrumb(" > Add Customer");
    } else {
      setBreadcrumb("");
    }
  }, [view, setBreadcrumb]);

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
          <h4
            style={{ textAlign: "left", cursor: "pointer" }}
            onClick={() => setView("list")}
          >
            All Customers {breadcrumb}
          </h4>
        </div>
        <div>
          {view === "list" && (
            <button className="primary" onClick={() => setView("add")}>
              Add customer
            </button>
          )}
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        {view === "list" && <Table />}
        {view === "add" && <AddCustomer />}
      </div>
    </Container>
  );
}

export default Customers;
