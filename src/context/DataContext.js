import { createContext, useState, useEffect } from "react";
import db from "./db";

export const DataContext = createContext({});

// option
// { cities, yearOfConstruction, type }

const DataContextProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(-1);
  const [profiles, setProfiles] = useState([]);
  const [searchOptions, setSearchOptions] = useState({});

  useEffect(() => {
    const fetchProperties = async () => {
      if (properties.length === 0) {
        try {
          const dbProperties = await db.getProperties();
          setProperties(dbProperties.data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchProperties();
  }, [properties, setProperties]);

  const doSetProperties = async (newProperties) => {
    try {
      await db.setProperties(newProperties);
      setProperties(newProperties);
    } catch (error) {
      console.error(error);
    }
  };

  const addProperty = async (newProperty) => {
    try {
      const res = await db.addProperty(newProperty);
      const newProperties = [...properties, res.data];
      setProperties(newProperties);
    } catch (error) {
      console.error(error);
    }
  };

  const editProperty = async (id, edittedProperty) => {
    try {
      await db.editProperty(id, edittedProperty);
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
      const index = properties.findIndex((property) => {
        return property.id === id;
      });

      if (index !== -1) {
        const newProperties = properties.map((property, pindex) => {
          if (pindex === index) {
            return {
              ...property,
              edittedProperty,
            };
          } else {
            return property;
          }
        });
        setProperties(newProperties);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProperty = async (id) => {
    try {
      await db.deleteProperty(id);
      const index = properties.findIndex((property) => {
        return property.id === id;
      });
      if (index !== -1) {
        // https://stackoverflow.com/questions/47023975/what-is-the-cleanest-way-to-remove-an-element-from-an-immutable-array-in-js
        const newProperties = [
          ...properties.slice(0, index),
          ...properties.slice(index + 1),
        ];
        setProperties(newProperties);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        properties,
        setProperties: doSetProperties,
        profiles,
        setProfiles,
        db,
        addProperty,
        deleteProperty,
        editProperty,
        selectedProperty,
        setSelectedProperty,
        searchOptions,
        setSearchOptions,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
