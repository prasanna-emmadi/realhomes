import { useState, useEffect, useContext } from "react";
import { CUIAutoComplete } from "chakra-ui-autocomplete";
import { DataContext } from "../../context/DataContext.js";
import { capitalizeFirstLettr } from "../../utils/StringUtil.js";

const SearchBar = () => {
  const { properties, setSearchOptions } = useContext(DataContext);
  const [pickerItems, setPickerItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    if (properties.length > 0) {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
      const citySet = new Set();
      const yearOfConstructionSet = new Set();
      const houseTypeSet = new Set();
      const sizeSet = new Set();

      properties.forEach((property) => {
        if (!citySet.has(property.city)) {
          citySet.add(property.city);
        }
        if (!yearOfConstructionSet.has(property.yearOfConstruction)) {
          yearOfConstructionSet.add(property.yearOfConstruction);
        }

        if (!houseTypeSet.has(property.type)) {
          houseTypeSet.add(property.type);
        }

        if (!sizeSet.has(property.size)) {
          sizeSet.add(property.size);
        }
      });

      // https://www.techiedelight.com/convert-a-set-to-an-array-in-javascript/
      const cityArray = Array.from(citySet);

      const cityPickerItems = cityArray.map((city) => {
        return {
          value: city,
          label: capitalizeFirstLettr(city),
        };
      });

      const houseTypeArray = Array.from(houseTypeSet);
      const houseTypePickerItems = houseTypeArray.map((houseType) => {
        return {
          value: houseType,
          label: capitalizeFirstLettr(houseType),
        };
      });

      const yearOfConstructionArray = Array.from(yearOfConstructionSet);
      const yearOfConstructionPickerItems = yearOfConstructionArray.map(
        (yearOfConstruction) => {
          return {
            value: yearOfConstruction,
            label: yearOfConstruction,
          };
        }
      );

      const sizeArray = Array.from(yearOfConstructionSet);
      const sizePickerItems = sizeArray.map((size) => {
        return {
          value: size,
          label: size,
        };
      });

      const pickerItems = [
        ...cityPickerItems,
        ...houseTypePickerItems,
        ...yearOfConstructionPickerItems,
        ...sizePickerItems,
      ];

      setPickerItems(pickerItems);
    }
  }, [pickerItems, setPickerItems, properties]);

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
      const selectedOptions = selectedItems.map((item) => {
        return item.value;
      });

      setSearchOptions(selectedOptions);
    }
  };

  return (
    <CUIAutoComplete
      placeholder="Type a Location"
      items={pickerItems}
      selectedItems={selectedItems}
      onSelectedItemsChange={(changes) =>
        handleSelectedItemsChange(changes.selectedItems)
      }
      tagStyleProps={{
        rounded: "full",
        pt: 1,
        pb: 2,
        px: 2,
        fontSize: "small",
      }}
      disableCreateItem={true}
    />
  );
};

export default SearchBar;
