

const URL=`https://remedly.apparelstation.com/api/client-product-feature`;

const getProducts = async () => {
  const res = await fetch(`${URL}`);

  return res.json();
};

export default getProducts;