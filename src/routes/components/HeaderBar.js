import { Box, Flex, HStack, Spacer, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CreateRoutes = ({ routeItems, routeElement }) => {
  return (
    <HStack spacing={4}>
      {routeItems.map((item, idx) => (
        <Box key={idx} data-testid={item.label}>
          <Link to={item.href}>{item.label}</Link>
        </Box>
      ))}
      {routeElement}
    </HStack>
  );
};

const HeaderBar = () => {
  const [admin, setAdmin] = useState(false);

  const onAdminChange = (e) => {
    setAdmin(!admin);
  };

  const adminButton = (
    <Box>
      <Button onClick={onAdminChange} data-testid="Admin">
        Admin
      </Button>
    </Box>
  );

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
          <Text data-testid="title">RealHomes</Text>
        </Box>
        <Spacer />
        <CreateRoutes routeItems={NAV_ITEMS} routeElement={adminButton} />
        {admin ? (
          <CreateRoutes routeItems={ADMIN_ITEMS} routeElement={null} />
        ) : null}
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
