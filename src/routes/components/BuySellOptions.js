import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "../Home.module.css";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import BuyImage from "../../assets/BuyImage.jpg";
import SellImage from "../../assets/SellImage.jpg";

const BuySellOptions = () => {
  return (
    <SimpleGrid columns={2}>
      <div className={styles.headtext}>
        <Box
          boxSize=""
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Link to="/buyhome">
            <Image boxSize="300px" objectFit="cover" src={BuyImage} alt="Buy" />
          </Link>
          <Text fontSize="xl">Buy a Home</Text>
        </Box>
      </div>

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
    </SimpleGrid>
  );
};
export default BuySellOptions;
