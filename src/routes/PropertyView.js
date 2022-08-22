import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SimpleGrid, Box, Image, Text, Spacer } from "@chakra-ui/react";
import { DataContext } from "../context/DataContext.js";
import LabelText from "./components/LabelText.js";
import Map from "./components/Map";
import { getPositionInfo } from "../utils/propertyUtil.js";

const InnerPropertyView = (props) => {
  const { property } = props;
  return (
    <SimpleGrid columns={1} spacing={15}>
      <Box
        maxW="xl"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Image src={property.imageUrl} alt={property.imageAlt} />
      </Box>

      <section>
        <>
          <Text fontSize="4xl" fontWeight="bold">
            Description
          </Text>
          <Text fontSize="2xl">{property.description}</Text>
        </>
        <Spacer />
        <>
          <Text fontSize="4xl" fontWeight="bold">
            Details
          </Text>

          <LabelText
            forId="address"
            labelText="Address"
            labelValue={property.address}
          />
          <LabelText forId="city" labelText="City" labelValue={property.city} />
          <LabelText
            forId="Year of construction"
            labelText="Year of construction"
            labelValue={property.yearofconstruction}
          />
          <LabelText forId="type" labelText="Type" labelValue={property.type} />
          <LabelText
            forId="rooms"
            labelText="Rooms"
            labelValue={property.rooms}
          />
          <LabelText forId="size" labelText="Size" labelValue={property.size} />
          <LabelText
            forId="price"
            labelText="Price"
            labelValue={property.formattedPrice}
          />
        </>
      </section>
    </SimpleGrid>
  );
};

const getPositionInfos = (property) => {
  let positionInfos = [];
  const positionInfo = getPositionInfo(property);
  if (positionInfo) {
    positionInfos.push(positionInfo);
  }
  return positionInfos;
};

const PropertyView = () => {
  const { properties, selectedProperty, setSelectedProperty } =
    useContext(DataContext);
  const { id } = useParams();

  useEffect(() => {
    const index = parseInt(id);
    if (properties.length > index && selectedProperty !== index) {
      setSelectedProperty(index);
    }
  }, [id, setSelectedProperty, selectedProperty, properties]);

  if (selectedProperty === -1) {
    return <div>Selected property not available</div>;
  }

  const property = {
    ...properties[selectedProperty],
    size: 100,
    formattedPrice: 200000,
    imageUrl: "https://bit.ly/2Z4KKcF",
  };

  const positionInfos = getPositionInfos(property);

  return (
    <div>
      <InnerPropertyView property={property} />
      {positionInfos.length > 0 ? <Map positionInfos={positionInfos} /> : null}
    </div>
  );
};

export default PropertyView;
