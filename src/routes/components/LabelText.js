import { Text } from "@chakra-ui/react";
const LabelText = (props) => {
  const { forId, labelText, labelValue } = props;
  return (
    <label for={forId} style={{ display: "flex", margin: "0rem 0rem" }}>
      <Text fontWeight="bold" fontSize="2xl">
        <pre>{labelText}: </pre>
      </Text>
      <Text fontSize="2xl"> {labelValue}</Text>
    </label>
  );
};

export default LabelText;
