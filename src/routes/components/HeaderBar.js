import { Box, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CreateRoutes = ({ routeItems }) => {
  return (
    <HStack spacing={4}>
      {routeItems.map((item, idx) => (
        <Box key={idx}>
          <Link to={item.href}>{item.label}</Link>
        </Box>
      ))}
    </HStack>
  );
};

const HeaderBar = (props) => {
  return (
    <Box>
      <Flex
        bg={"white"}
        color={"gray.600"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.200"}
        align={"center"}
      >
        <Box>
          <Text>RealHomes</Text>
        </Box>
        <Spacer />
        <CreateRoutes routeItems={NAV_ITEMS} />
        {props.admin ? <CreateRoutes routeItems={ADMIN_ITEMS} /> : null}
      </Flex>
    </Box>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
    adminRoute: false,
  },
  {
    label: "Properties",
    href: "/all",
    adminRoute: false,
  },
];

const ADMIN_ITEMS = [
  {
    label: "Add Property",
    href: "/addproperty",
  },
  {
    label: "Admin List",
    href: "/adminList",
  },
];

export default HeaderBar;
