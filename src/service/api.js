const BASEURL = import.meta.env.VITE_API_BASE_URL;

export async function getProducts(queryStrings) {
    const {orderBy, page, pageSize} = queryStrings;

    try{
        const response = await fetch(`${BASEURL}/products?orderBy=${orderBy}&page=${page}&pageSize=${pageSize}`);
        const result = await response.json();
        return result;
    }
    catch(err){
        throw err
    }    
}
