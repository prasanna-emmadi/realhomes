import axios from "axios";

const url = "http://localhost:4000/properties";

const data = {
  saveData: async (property) => {
    const res = await axios.post(url, property);
    return res;
  },
  getProperties: async () => {
    const res = await axios.get(url);
    return res;
  },
  setProperties: async (newProperties) => {
    const res = await axios.post(url, newProperties);
    return res;
  },
  editProperty: async (index, edittedProperty) => {
    const res = await axios.put(`${url}/${index}`, edittedProperty);
    return res;
  },
  deleteProperty: async (index) => {
    const res = await axios.delete(`${url}/${index}`);
    return res;
  },
  addProperty: async (property) => {
    const res = await axios.post(url, property);
    return res;
  },
};

export default data;
