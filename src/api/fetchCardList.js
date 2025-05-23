export default async function fetchLists(quantity) {
  try {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/products?pageSize=${quantity}`)
    const data = await res.json();
    return data.list;
  } catch (err) {
    console.error(err)
  }
}
