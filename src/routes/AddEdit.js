import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext.js";
import { Input, Button, Select, Textarea } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";

import "../components/style/addProperty.css";
import { useParams } from "react-router-dom";

const AddEdit = () => {
  const { addProperty } = useContext(DataContext);
  const { properties, editProperty } = useContext(DataContext);
  const [errors, setErrors] = useState({});
  const [property, setProperty] = useState({
    //default value
    id: 0,
    address: "",
    city: "",
    yearOfConstruction: 2020,
    type: "apartment",
    rooms: 2,
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
    console.log(property);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(property));

    const updateProperty = async () => {
      console.log();
      setSubmitted(true);

      setProperty(property);
      console.log(property);
      await editProperty(property.id, property);
    };

    const createProperty = async () => {
      setSubmitted(true);
      await addProperty(property);
    };
    id ? updateProperty() : createProperty();
  };

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0) {
    }
  }, [errors]);

  const validate = (values) => {
    const err = {};
    if (!values.address) {
      err.address = "Address is required!";
    } else if (values.address.length < 3) {
      err.address = "Address is not correct!";
    }
    if (!values.city) {
      err.city = "Please provide the city";
    }
    if (values.description.length < 15) {
      err.description = "Too short description!";
    }
    console.log(err);
    return err;
  };

  useEffect(() => {
    const loadProperty = () => {
      const index = parseInt(id);
      if (properties.length > 0 && properties.length > index) {
        setProperty(properties[index]);
      }
    };

    loadProperty();
  }, [id, properties]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        {submitted && Object.keys(errors).length === 0 ? (
          <div className="message-success">Success</div>
        ) : null}
        <div className="formContainer">
          <div className="formHeading">
            <h3>{id ? "Property Updating form" : "Property Adding form"}</h3>
          </div>
          <div className="formInputs">
            <FormControl onSubmit={handleSubmit}>
              <div className="item">
                <FormLabel>Address</FormLabel>
                <Input
                  id="address"
                  name="address"
                  value={id ? property.address : null}
                  width="18em"
                  placeholder="Street Adress"
                  onChange={handleChange}
                />
              </div>
              <p className="err">{errors.address}</p>

              <div className="item">
                <FormLabel>City</FormLabel>
                <Input
                  id="city"
                  name="city"
                  value={id ? property.city : null}
                  width="18em"
                  placeholder="Name of City"
                  onChange={handleChange}
                />
              </div>
              <p className="err">{errors.city}</p>

              <div className="item">
                <FormLabel>Year of Construction</FormLabel>
                <Input
                  type="number"
                  name="yearOfConst"
                  value={id ? property.yearOfConstruction : null}
                  id="yearOfConst"
                  width="18em"
                  placeholder="Construction year"
                  onChange={handleChange}
                />
              </div>

              <div className="item">
                <FormLabel htmlFor="type">Type</FormLabel>
                <Select
                  id="type"
                  width="18em"
                  placeholder="Select the type of Property"
                >
                  <option value="row-house" name="">
                    Row House
                  </option>
                  <option value="terraced-house" name="">
                    Terraced House
                  </option>
                  <option value="detached-house" name="">
                    Detached House
                  </option>
                  <option value="apartment" name="">
                    Apartment
                  </option>
                </Select>
              </div>

              <div className="item">
                <FormLabel>Room</FormLabel>
                <Input
                  id="room"
                  type="number"
                  name="room"
                  value={id ? property.rooms : null}
                  width="18em"
                  placeholder="Street Adress"
                />
              </div>

              <div className="item">
                <FormLabel>Description</FormLabel>
                <Textarea
                  width="20em"
                  name="description"
                  value={id ? property.description : null}
                  placeholder="Describe your property..."
                  onChange={handleChange}
                />
              </div>
              <p className="err">{errors.description}</p>
              <Button mt={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            </FormControl>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddEdit;
