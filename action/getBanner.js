

const URL=`https://remedly.apparelstation.com/api/getactivebanner`;

const getBannner = async () => {
  const res = await fetch(`${URL}`);

  return res.json();
};

export default getBannner;