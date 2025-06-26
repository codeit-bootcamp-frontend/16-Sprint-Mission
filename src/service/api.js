const BASEURL = import.meta.env.VITE_API_BASE_URL;

export async function getProducts(queryStrings) {
  const { orderBy, page, pageSize } = queryStrings;

  const response = await fetch(
    `${BASEURL}/products?orderBy=${orderBy}&page=${page}&pageSize=${pageSize}`,
  );

  if (!response.ok) throw new Error('응답에 문제 있음');
  const result = await response.json();

  return result;
}

export async function getProductDetail(productId) {
  const response = await fetch(`${BASEURL}/products/${productId}`);

  if (!response.ok) throw new Error('응답에 문제 있음');
  const result = await response.json();
  return result;
}

export async function getProductComment(productId, cursor = 0) {
  const response = await fetch(
    `${BASEURL}/products/${productId}/comments?limit=3&cursor=${cursor}`,
  );

  if (!response.ok) throw new Error('응답에 문제 있음');
  const result = await response.json();

  return result;
}

// export async function getAuth(){
//   const responese
// }

export async function postComment({ productId, value, method }) {
  const result = await fetch(`${BASEURL}/products/${productId}/comments`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content: value }),
  });
}
