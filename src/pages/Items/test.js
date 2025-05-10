const getItems = async () => {
  const response = await fetch(
    'https://panda-market-api.vercel.app/products?page=1&pageSize=1'
  );
  const body = await response.json();
  return body;
};

const consoleResult = async () => {
  const result = await getItems();
  console.log(result);
};

consoleResult();
console.log('Finished!');
