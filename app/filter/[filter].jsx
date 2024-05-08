import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import searchFilter from "../../action/searchFilter";
import { useQuery } from "@tanstack/react-query";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useGlobalContext } from "../../context/GlobalProvider";
import getDataByFilter from "../../action/getDatabyFilter";
import filterCategories from "../../assets/filter.json";
// const CategoriesCard = ({ item, setCategories }) => {
//   return (
//     <View className="bg-white p-2 m-2 rounded-md">
//       <Text className="text-black text-lg font-semibold">{item?.title}</Text>

//       {item?.filterDetail?.map((item,index) => (
//         <View className="p-2">
//           <View className="w-full flex-1 flex-row justify-between">
//             <View>
//               <BouncyCheckbox
//                 size={25}
//                 fillColor="black"
//                 unFillColor="#FFFFFF"
//                 text={item?.name}
//                 isChecked={'true'}
//                 iconStyle={{ borderColor: "black", borderRadius: "4px" }}
//                 innerIconStyle={{ borderWidth: 2, borderRadius: "4px" }}
//                 textStyle={{ fontFamily: "JosefinSans-Regular" }}
//                 onPress={(isChecked) => setCategories(item?.name)}
//               />
//               {/* <Text className="text-black text-sm  font-semibold">
//      {item?.name}
//    </Text> */}
//             </View>
//             <Text className="text-black text-sm  font-semibold">
//               ({item?.productCount})
//             </Text>
//           </View>
//         </View>
//       ))}
//       {/* <FlatList
//         data={item?.filterDetail || []}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (

//         )}
//         horizontal={false}
//       /> */}
//     </View>
//   );
// };

// const renderItem = ({ item, index }) => (

// );

const Filter = () => {
  const { setCategories, categories, setProductData, setBrands, brands } =
    useGlobalContext();
  const navigation = useNavigation();
  const query = useLocalSearchParams();
  console.log(">>>>", query?.filter);
  const { data: filterdata, error: filterdataError } = useQuery({
    queryKey: ["filterdatas", query?.filter],
    queryFn: () => searchFilter(query?.filter),
    staleTime:                   Infinity,
    cacheTime:                   Infinity,
  });
  // console.log("filterdata", filterdata);

  const handleCheckboxChange = async () => {
    
    const filteredCategoriesData = categories.filter(item => item.checked === true).map((item)=>item.seName);
    const filteredBrandData = brands.filter(item => item.checked === true).map((item)=>item.seName);
    const categoriesToString = filteredCategoriesData.join(',');
    const brndsToString = filteredBrandData.join(',');
    const payload = {
      Type: "category",
      SEName:"medicine",
      CategoryFilter: categoriesToString,
      BrandFilter: brndsToString,
    };
    console.log("filter>>", payload);
      const data = await getDataByFilter(payload);
      if(data){
       console.log("data?.categoryProductList", data?.categoryProductList);
        setProductData(data?.categoryProductList);
      }
  };

  useEffect(() => {
    if (filterdata) {
      setCategories(filterdata[0]?.filterDetail);
      setBrands(filterdata[1]?.filterDetail);
    } else {
      setCategories([]);
      setBrands([]);
    }
  }, [filterdata]);
  return (
    <View className="flex-1 m-3">
      <FlatList
        className="mt-0 mb-0"
        data={categories || []}
        renderItem={({ item }) => <View></View>}
        ListHeaderComponent={
          <View>
            <View className=" bg-white mb-2 mt-2">
              <Text className="text-2xl font-bold ml-2 mb-3">Categories</Text>
              {categories?.map((item, index) => (
                <View className="  w-full flex flex-row justify-between p-2">
                  <Text>{item?.name}({item.productCount})</Text>
                  <BouncyCheckbox
                    isChecked={categories[index].checked}
                    fillColor="black"
                    unfillColor="#fff"
                    disableBuiltInState
                    iconStyle={{
                      borderColor: "black",
                      borderRadius: 4,
                      borderWidth: 2,
                    }}
                    innerIconStyle={{ borderColor: "black", borderRadius: 4 }}
                    onPress={() => {
                      const isChecked = categories[index].checked;
                      const updatedItems = categories.map((item) => {
                        if (item.name === categories[index].name) {
                          item.checked = !isChecked;
                        }
                        return item;
                      });
                      setCategories(updatedItems);
                      handleCheckboxChange()
                    }}
                  />
                </View>
              ))}
            </View>
            <View className="bg-white rounded-md">
              <Text className="text-2xl font-bold ml-2 mb-3">Brands</Text>
              {brands.map((item, index) => (
                <View className="w-full flex flex-row justify-between p-2.5">
                  <Text className>{item?.name} ({item.productCount})</Text>
                  <BouncyCheckbox
                    isChecked={brands[index].checked}
                    fillColor="black"
                    unfillColor="#fff"
                    disableBuiltInState
                    iconStyle={{
                      borderColor: "black",
                      borderRadius: 4,
                      borderWidth: 2,
                    }}
                    innerIconStyle={{ borderColor: "black", borderRadius: 4 }}
                    onPress={() => {
                      const isChecked = brands[index].checked;
                      const updatedItems = brands.map((item) => {
                        if (item.name === brands[index].name) {
                          item.checked = !isChecked;
                        }
                        return item;
                      });
                      setBrands(updatedItems);
                      handleCheckboxChange()
                    }}
                  />
                </View>
              ))}
            </View>
          </View>
        }
      />

      <Text>Filter</Text>

      <View className=" absolute bottom-0 left-0 right-0 h-24 bg-white p-3 shadow-lg shadow-slate-500">
        <TouchableOpacity
          // onPress={() => navigation.goBack()}
          className="bg-emerald-700 p-3 items-center  rounded-md "
        >
          <Text className="text-white text-lg font-bold ">Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Filter;
