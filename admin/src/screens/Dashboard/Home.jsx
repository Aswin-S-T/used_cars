import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Home.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ListIcon from "@mui/icons-material/List";
import HomeScreen from "../../components/Home/Home";
import Customers from "../Customers/Customers";

function Home() {
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
          <ListIcon className="icon_medium" /> All Items
        </Tab>
      </TabList>

      <div style={{ width: "100%" }}>
        <TabPanel>
          <HomeScreen />
        </TabPanel>
        <TabPanel>
          <Customers />
        </TabPanel>
        <TabPanel>
          <h2>Content for Tab 3</h2>
          <p>Some content for Tab 3.</p>
        </TabPanel>
      </div>
    </Tabs>
  );
}

export default Home;
