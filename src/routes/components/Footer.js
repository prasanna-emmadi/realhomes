import { Box, Flex, Spacer, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer data-testid="footer">
      <Box backgroundColor={"#44444B"} color="white">
        <Flex>
          <VStack>
            <Text fontSize="2xl" fontWeight="bold">
              Real Homes
            </Text>
            <Text fontSize="xl">Find your dream home</Text>
          </VStack>
          <Spacer />
          <VStack>
            <Text fontSize="xl" fontWeight="bold">
              You can find from us
            </Text>
            <Text fontSize="xl">Housing</Text>
            <Text fontSize="xl">Rental Property</Text>
            <Text fontSize="xl">Garage and Wearhourses</Text>
          </VStack>
          <Spacer />
          <VStack>
            <Text fontSize="xl" fontWeight="bold">
              Tips
            </Text>
            <Text fontSize="xl">Housing tips</Text>
            <Text fontSize="xl">Decoration tips</Text>
          </VStack>
        </Flex>
      </Box>
    </footer>
  );
};

export default Footer;
