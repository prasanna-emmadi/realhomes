import "./App.css";
import { Routes, Route } from "react-router-dom";
import PropertyListing from "./routes/PropertyListing";
import AddEdit from "./routes/AddEdit";
import AdminList from "./routes/AdminList";
import BuyHome from "./routes/BuyHome";
import SellHome from "./routes/SellHome";
import { useState } from "react";
import Home from "./routes/Home";
import DataContextProvider from "./context/DataContext";
import PropertyView from "./routes/PropertyView";
import Footer from "./routes/components/Footer";
import { Box } from "@chakra-ui/react";
import HeaderBar from "./routes/components/HeaderBar";

function App() {
  const [admin, setAdmin] = useState(false);

  const onAdminChange = (e) => {
    const value = e.target.checked;
    setAdmin(value);
  };

  return (
    <div className="App">
      <Box height="100vh" backgroundPosition="center" backgroundRepeat="fill">
        <HeaderBar admin={admin} />
        <DataContextProvider>
          <Routes>
            <Route path="/all" element={<PropertyListing />} />
            <Route path="/addproperty/" element={<AddEdit />} />
            <Route path="/properties/:id" element={<AddEdit />} />
            <Route path="/adminList/" element={<AdminList />} />
            <Route path="/buyhome" element={<BuyHome />} />
            <Route path="/sellhome" element={<SellHome />} />
            <Route path="/property/:id" element={<PropertyView />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </DataContextProvider>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
