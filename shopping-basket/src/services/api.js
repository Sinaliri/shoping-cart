import axios from "axios";

const Base_Url = "https://fakeStoreapi.com";
const getProducts = async () => {
  const response = await axios.get(`${Base_Url}/products`);
  return response.data;
};
export { getProducts };
