

const URL=`https://remedly.apparelstation.com/api/getcategoryproductsbysename`;

const getProductByCategory = async (query) => {
  console.log(">>>>", `${URL}/${query}`);
  const res = await fetch(`${URL}/${query}`);

  return res.json();
};

export default getProductByCategory;