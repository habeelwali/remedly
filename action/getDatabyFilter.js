
const URL = `https://remedly.apparelstation.com/api/productlisting/`;

const getDataByFilter = async (payload) => {
  console.log("payload", payload);

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Add any additional headers if required
    },
    body: JSON.stringify(payload), // Convert payload to JSON string
  };

  try {
    const res = await fetch(URL, requestOptions);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    console.log(">>>>", data);
    return data;
  } catch (error) {
    console.error('There was a problem with the POST request:', error);
    throw error; // Rethrow the error to handle it outside
  }
};

export default getDataByFilter;
