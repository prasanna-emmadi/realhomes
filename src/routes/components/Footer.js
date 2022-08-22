import { SimpleGrid, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#44444B",
        color: "white",
        width: "1200px",
      }}
    >
      <SimpleGrid columns={3} spacing={15}>
        <div>
          <Text fontSize="2xl" fontWeight="bold">
            Real Homes
          </Text>
          <Text fontSize="xl">Find your dream home</Text>
        </div>
        <div>
          <Text fontSize="xl" fontWeight="bold">
            You can find from us
          </Text>
          <Text fontSize="xl">Housing</Text>
          <Text fontSize="xl">Rental Property</Text>
          <Text fontSize="xl">Garage and Wearhourses</Text>
        </div>
        <div>
          <Text fontSize="xl" fontWeight="bold">
            Tips
          </Text>
          <Text fontSize="xl">Housing tips</Text>
          <Text fontSize="xl">Decoration tips</Text>
        </div>
      </SimpleGrid>
    </footer>
  );
};

export default Footer;
