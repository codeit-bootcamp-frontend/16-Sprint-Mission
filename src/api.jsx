export async function getProducts({
  order = "favoriteCount",
  offset = 0,
  limit,
}) {
  const query = `order=${order}&offset=${offset}&pageSize=${limit}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const body = await response.json();
  return body;
}

