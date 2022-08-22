import "./App.css";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import PropertyListing from "./routes/PropertyListing";
import AddEdit from "./routes/AddEdit";
import AdminList from "./routes/AdminList";
import BuyHome from "./routes/BuyHome";
import SellHome from "./routes/SellHome";
import { useState } from "react";
import Home from "./routes/Home";
import { Grid, GridItem } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import DataContextProvider from "./context/DataContext";
import PropertyView from "./routes/PropertyView";
import Footer from "./routes/components/Footer";

function App() {
  const [admin, setAdmin] = useState(false);

  const onAdminChange = (e) => {
    const value = e.target.checked;
    setAdmin(value);
  };

  return (
    <ChakraProvider>
      <>
        <div className="App">
          <header className="App-header">
            <Router>
              <Grid
                templateAreas={`"header"
                  
            `}
                gridTemplateRows={"250px "}
                gridTemplateColumns={"1200px"}
                h="120px"
                gap="1"
                color="blackAlpha.700"
                fontWeight="bold"
              >
                <GridItem pl="2" bg="white.300" area={"header"}>
                  <nav>
                    <li className={styles.title}>RealHomes</li>

                    <li className={styles.home}>
                      <Link to="/">Home</Link>
                    </li>
                    <li className={styles.home}>
                      <Link to="/all">Property listing</Link>
                    </li>
                    {admin ? (
                      <li className={styles.home}>
                        <Link to="/addproperty">Add Property</Link>
                        <Link to="/adminList">Admin List</Link>
                        <li className={styles.button}></li>
                      </li>
                    ) : null}
                    <li>
                      <li className={styles.home}>Admin</li>
                      <li className={styles.button}></li>
                      <Switch id="isAdmin" onChange={onAdminChange} />
                    </li>
                  </nav>
                </GridItem>
              </Grid>
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
            </Router>
          </header>
        </div>
      </>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
