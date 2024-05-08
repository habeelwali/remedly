import { createContext, useContext, useEffect, useState } from "react";


const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [productdata, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([])

//   useEffect(() => {
//     getCurrentUser()
//       .then((res) => {
//         if (res) {
//           setIsLoggedIn(true);
//           setUser(res);
//         } else {
//           setIsLoggedIn(false);
//           setUser(null);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, []);

console.log("productdata>>>>");

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading,
        setProductData,
        productdata,
        setCategories,
        categories,
        brands, 
        setBrands
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;