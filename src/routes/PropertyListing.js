import { useContext, useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Property from "./components/Property";
import { DataContext } from "../context/DataContext.js";
import PropertiesOnMap from "./components/PropertiesOnMap";

const Properties = (props) => {
  const { columns, properties } = props;
  return (
    <SimpleGrid columns={columns} spacing={15}>
      {properties.map((property, index) => {
        const path = `/property/${index}`;
        return (
          <Link to={path} key={path}>
            <Property property={property} />
          </Link>
        );
      })}
    </SimpleGrid>
  );
};

const PropertyListing = (props) => {
  const { properties } = useContext(DataContext);
  const [displayProperties, setDisplayProperties] = useState(properties);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
  // Use logical or operator if props.columns are not present 4 columns are chosen
  // if props.columns are present then given then given columns are used for the layout.
  const columns = props.columns || 4;

  useEffect(() => {
    if (props.searchOptions && props.searchOptions.length > 0) {
      const searchOptions = props.searchOptions;
      const filteredProperties = properties.filter((property) => {
        const index = searchOptions.findIndex((searchOption) => {
          if (
            property.city === searchOption ||
            property.yearOfConstruction === searchOption ||
            property.type === searchOption ||
            property.size === searchOption
          ) {
            return true;
          }
          return false;
        });
        return index !== -1;
      });
      setDisplayProperties(filteredProperties);
    } else if (properties.length > 0) {
      setDisplayProperties(properties);
    }
  }, [props.searchOptions, properties, setDisplayProperties]);

  if (!displayProperties) {
    return <div>Properties not ready yet</div>;
  }

  return (
    <div>
      <PropertiesOnMap properties={displayProperties} />
      <Properties columns={columns} properties={displayProperties} />
    </div>
  );
};
export default PropertyListing;
