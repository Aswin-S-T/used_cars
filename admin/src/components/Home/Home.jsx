import { Container } from "@mui/material";
import React from "react";
import Card from "../Card/Card";
import LineGraph from "../LineGraph/LineGraph";
import FolderList from "../List/FolderList";

function HomeScreen() {
  return (
    <Container>
      <div className="container">
        <h3 className="row">
          Hi, Welcome Back <p style={{ fontSize: "20px" }}>&#9995;</p>,{" "}
        </h3>
        <div>
          <Card />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}>
        <LineGraph />
        <FolderList />
      </div>
    </Container>
  );
}

export default HomeScreen;
