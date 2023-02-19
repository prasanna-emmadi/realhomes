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

const Home = () => {
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
          <Image src={MainImage} alt="Real Homes" data-testid="MainImage" />
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

export default Home;
