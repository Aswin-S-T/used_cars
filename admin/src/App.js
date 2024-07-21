import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Dashboard/Home";
import Header from "./components/Header/Header";
import CustomerDetails from "./screens/CustomerDetails/CustomerDetails";
function App() {
  const [customer, setCustomer] = useState({
    id: 1,
    name: "John Doe",
    companyName: "Doe Industries",
    phone: "555-1234",
    email: "john.doe@example.com",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    country: "USA",
    notes: "Regular customer, prefers email communication.",
    logo: null, // You can add a URL to a logo image if available
  });
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/details"
          element={<CustomerDetails customer={customer} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
