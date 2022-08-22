import { Box } from "@chakra-ui/react";

const CommonCenterBox = (props) => {
  <Box boxSize="" display="flex" alignItems="center" justifyContent="center">
    {props.children}
  </Box>;
};

export default CommonCenterBox;
