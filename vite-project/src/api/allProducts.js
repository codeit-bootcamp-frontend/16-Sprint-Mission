import { fetchData } from "./index";

export async function getAllProducts() {
  return await fetchData("products", {
    page: 1,
    pageSize: 10,
    orderBy: "recent",
  });
}
