import { Box, Image, Badge } from "@chakra-ui/react";

/*
  "address": "",
    "city": "sfs",
    "yearOfConstruction": "1998",
    "type": "",
    "description": "",
*/

const Property = (props) => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    rooms: 3,
    baths: 2,
    address: "Haapalehdo 1",
    city: "oulu",
    size: 100,
    yearofconstruction: 1998,
    type: "Row house",
    description: "2 room row house",
    title: "Modern home in city centerof Oulu",

    formattedPrice: "$190,000.00",
    reviewCount: 34,
    rating: 4,
    ...props.property,
  };

  const size_price = `${property.size} sqmt,     ${property.formattedPrice}`;
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.rooms} rooms &bull; {property.baths} baths ;
            {property.address}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box>
          {size_price}
          <Box as="span" color="gray.600" fontSize="sm">
            euros
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Property;
