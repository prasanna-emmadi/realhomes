import { Box, Image, Text, Flex, HStack } from "@chakra-ui/react";
import { useContext } from "react";
import MainImage from "../assets/MainImage.jpg";
import BuyImage from "../assets/BuyImage.jpg";
import SellImage from "../assets/SellImage.jpg";
import React from "react";
import { Link } from "react-router-dom";
import PropertyListing from "./PropertyListing";
import SearchBar from "./components/SearchBar";
import { DataContext } from "../context/DataContext.js";

const Home1 = () => {
  const { searchOptions } = useContext(DataContext);
  return (
    <Box
      bg="gray.100"
      minHeight="600"
      marginX="5"
      marginY="2"
      padding="2"
      size="md"
    >
      <Flex direction="column" justifyContent="center">
        <Box>
          <Image src={MainImage} alt="Real Homes" />
        </Box>
        <Box
          zIndex={10}
          position="relative"
          marginTop={"-12"}
          marginBottom={"-16"}
        >
          <SearchBar />
        </Box>
        <HStack spacing={10}>
          <Box>
            <Link to="/buyhome">
              <Image
                boxSize="300px"
                objectFit="cover"
                src={BuyImage}
                alt="Buy"
              />
            </Link>
            <Text fontSize="xl">Buy a Home</Text>
          </Box>
          <Box>
            <Link to="/sellhome">
              <Image
                boxSize="300px"
                objectFit="cover"
                src={SellImage}
                alt="Sell"
              />
            </Link>
            <Text fontSize="xl">Sell Home</Text>
          </Box>
        </HStack>
        <PropertyListing columns={3} searchOptions={searchOptions} />
      </Flex>
    </Box>
  );
};

/*const Home = () => {
  const { searchOptions } = useContext(DataContext);

  return (
    <Grid
      templateAreas={`
                    "main main"
                    "search search"
                    "buy sell"
                    "list list"`}
      gridTemplateRows={" 600px 100px 400px 1fr"}
      gridTemplateColumns={"500px 500px"}
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="white.300" area={"main"}>
        <Box boxSize="1000px">
          <Image src={MainImage} alt="Real Homes" />
        </Box>
      </GridItem>
      <GridItem pl="2" bg="grey.300" area={"search"}>
        <Box
          zIndex={10}
          position="relative"
          marginTop={"-12"}
          marginBottom={"-16"}
        >
          <SearchBar />
        </Box>
      </GridItem>
      <GridItem pl="2" bg="white.300" area={"buy"}>
        <div className={styles.headtext}>
          <Box
            boxSize=""
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Link to="/buyhome">
              <Image
                boxSize="300px"
                objectFit="cover"
                src={BuyImage}
                alt="Buy"
              />
            </Link>
            <Text fontSize="xl">Buy a Home</Text>
          </Box>
        </div>
      </GridItem>
      <GridItem pl="2" bg="white.300" area={"sell"}>
        <div className={styles.headtext}>
          <Box
            boxSize=""
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Link to="/sellhome">
              <Image
                boxSize="300px"
                objectFit="cover"
                src={SellImage}
                alt="Sell"
              />
            </Link>
            <Text fontSize="xl">Sell a Home</Text>
          </Box>
        </div>
      </GridItem>
      <GridItem pl="2" bg="white.300" area={"list"}>
        <PropertyListing columns={3} searchOptions={searchOptions} />
      </GridItem>
    </Grid>
  );
};*/
export default Home1;
