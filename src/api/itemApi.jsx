import axios from "axios";

const BASE_URL = 'https://panda-market-api.vercel.app';

async function fetchItems(params) {
  const res = await axios.get(`${BASE_URL}/products`, {params});
  return res.data;
}

export default fetchItems;
