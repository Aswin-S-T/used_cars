import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Home.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ListIcon from "@mui/icons-material/List";
import HomeScreen from "../../components/Home/Home";
import Customers from "../Customers/Customers";
import AddVehicle from "../AddVehicle/AddVehicle";
import AddIcon from "@mui/icons-material/Add";
import ListVehicles from "../ListVehicles/ListVehicles";
function Home() {
  const [breadcrumb, setBreadcrumb] = useState("");

  return (
    <Tabs className="vertical-tabs">
      <TabList className="vertical-tablist">
        <Tab>
          <DashboardIcon className="icon_medium" /> Dashboard
        </Tab>
        <Tab>
          <PeopleIcon className="icon_medium" /> Customers
        </Tab>
        <Tab>
          <PeopleIcon className="icon_medium" /> All vechicles
        </Tab>
        <Tab>
          <AddIcon className="icon_medium" /> Add Items
        </Tab>
      </TabList>

      <div style={{ width: "100%" }}>
        <TabPanel>
          <HomeScreen />
        </TabPanel>
        <TabPanel>
          <Customers breadcrumb={breadcrumb} setBreadcrumb={setBreadcrumb} />
        </TabPanel>
        <TabPanel>
          <ListVehicles />
        </TabPanel>
        <TabPanel>
          <AddVehicle />
        </TabPanel>
      </div>
    </Tabs>
  );
}

export default Home;
