export const getProducts = async ({ order = 'recent', page = 1, pageSize = 10 }) => {
    const query = `page=${page}&pageSize=${pageSize}&orderBy=${order}`;

    console.log('API 요청 URL 쿼리:', `https://panda-market-api.vercel.app/products?${query}`);

    const response = await fetch(`https://panda-market-api.vercel.app/products?${query}`);
    if (!response.ok) {
        throw new Error('상품을 불러오는데 실패했습니다');
    }
    const body = await response.json();
    console.log('🔥 API 응답:', body);
    return body;
};
