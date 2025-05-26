/** 
 * params: quantity, page, orderBy
*/
export default async function fetchLists(quantity, page, orderBy) {
  try {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/products?page=${page}&pageSize=${quantity}&orderBy=${orderBy}`)
    const data = await res.json();
    return { totalCount: data.totalCount, list: data.list };
  } catch (err) {
    console.error(err)
  }
}
