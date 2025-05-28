const BASEURL = import.meta.env.VITE_API_BASE_URL;

export async function getProducts(queryStrings) {
    const { orderBy, page, pageSize } = queryStrings;

    const response = await fetch(`${BASEURL}/products?orderBy=${orderBy}&page=${page}&pageSize=${pageSize}`);

    if (!response.ok) throw new Error("응답에 문제 있음");
    const result = await response.json();

    return result;
}
