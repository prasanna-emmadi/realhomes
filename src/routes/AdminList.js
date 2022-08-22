import { Box } from "@chakra-ui/react";
import {
  Image,
  Badge,
  SimpleGrid,
  Button,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";

const AdminList = () => {
  const { properties, deleteProperty } = useContext(DataContext);

  // delete properties
  const doDeleteProperty = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteProperty(id);
    }
  };

  const propertyList = properties.map((property) => (
    <div>
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqTqEGs-j6lfbh3ut_o-F0kUnb-uyAnNDWrzzpiMyP70G7_1E-XRgbG7VaJc6PA4lN7kM&usqp=CAU"
            alt="MainImage"
          />
          <Badge rounded="full" px="2" variantColor="teal">
            {property.address}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          ></Box>
          <p>
            <b>Address</b>: {property.address}
            <br></br>
            <b>Rooms</b>: {property.rooms} <br></br>
            <b>Type</b>: {property.type}
          </p>
          <Wrap spacing={4}>
            <WrapItem>
              <Button colorScheme="blue">
                <Link key={property.id} to={`/properties/${property.id}`}>
                  Edit
                </Link>
              </Button>
              <Button
                colorScheme="red"
                onClick={() => doDeleteProperty(property.id)}
              >
                Delete
              </Button>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
    </div>
  ));
  return (
    <div>
      <SimpleGrid columns={[2, null, 3]} spacing={2}>
        {propertyList}
      </SimpleGrid>
      <div></div>
    </div>
  );
};

export default AdminList;
