

const URL=`https://remedly.apparelstation.com/api/searchfilter/category`;

const searchFilter = async (query) => {
  console.log("qqqq>>>>", `${URL}/${query}`);
  const res = await fetch(`${URL}/${query}`);

  return res.json();
};

export default searchFilter;