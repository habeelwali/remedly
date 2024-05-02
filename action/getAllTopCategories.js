

const URL=`https://remedly.apparelstation.com/api/getalltopcategories`;

const getAllTopCategories = async () => {
  const res = await fetch(`${URL}`);

  return res.json();
};

export default getAllTopCategories;