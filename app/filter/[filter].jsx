import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import searchFilter from "../../action/searchFilter";
import { useQuery } from "@tanstack/react-query";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useGlobalContext } from "../../context/GlobalProvider";
import getDataByFilter from "../../action/getDatabyFilter";

const CategoriesCard = ({ item, setCategories }) => {
  return (
    <View className="bg-white p-2 m-2 rounded-md">
      <Text className="text-black text-lg font-semibold">{item?.title}</Text>

      {item?.filterDetail?.map((item) => (
        <View className="p-2">
          <View className="w-full flex-1 flex-row justify-between">
            <View>
              <BouncyCheckbox
                size={25}
                fillColor="black"
                unFillColor="#FFFFFF"
                text={item?.name}
                iconStyle={{ borderColor: "black", borderRadius: "4px" }}
                innerIconStyle={{ borderWidth: 2, borderRadius: "4px" }}
                textStyle={{ fontFamily: "JosefinSans-Regular" }}
                onPress={(isChecked) => setCategories(item?.name)}
              />
              {/* <Text className="text-black text-sm  font-semibold">
     {item?.name}
   </Text> */}
            </View>
            <Text className="text-black text-sm  font-semibold">
              ({item?.productCount})
            </Text>
          </View>
        </View>
      ))}
      {/* <FlatList
        data={item?.filterDetail || []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          
        )}
        horizontal={false}
      /> */}
    </View>
  );
};

const Filter = () => {
  const { setCategories, categories, setProductData } = useGlobalContext();
  const navigation = useNavigation();
  const query = useLocalSearchParams();
  console.log(">>>>", query?.filter);
  const { data: filterdata, error: filterdataError } = useQuery({
    queryKey: ["filterdata", query?.filter],
    queryFn: () => searchFilter(query?.filter),
  });

  const handleCheckboxChange = async (checked, value) => {
    console.log("ggg", checked, value);

    // // If checkbox is checked, add its value to the array of checked checkboxes
    // If checkbox is unchecked, remove its value from the array of checked checkboxes

    const payload = {
      Type: "category",
      SEName: "medicine",
      CategoryFilter: "",
      BrandFilter: "asian-continental",
    };
    if (checked) {
      setCategories((prevChecked) => [...prevChecked, value]);
      const data = await getDataByFilter(payload);
      setProductData(data?.categoryProductList);
    } else {
      setCategories((prevChecked) =>
        prevChecked.filter((item) => item !== value)
      );
    }
  };

  console.log("itembbb", categories);
  return (
    <View className=" flex-1">
      <FlatList
        data={filterdata || []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-white p-2 m-2 rounded-md">
            <Text className="text-black text-lg font-semibold">
              {item?.title}
            </Text>

            {item?.filterDetail?.map((item) => (
              <View className="p-2">
                <View className="w-full flex-1 flex-row justify-between">
                  <View>
                    <BouncyCheckbox
                      size={25}
                      fillColor="black"
                      unFillColor="#FFFFFF"
                      text={item?.name}
                      iconStyle={{ borderColor: "black", borderRadius: "4px" }}
                      innerIconStyle={{ borderWidth: 2, borderRadius: "4px" }}
                      textStyle={{ fontFamily: "JosefinSans-Regular" }}
                      onPress={(isChecked) =>
                        handleCheckboxChange(isChecked, item?.name)
                      }
                    />
                    {/* <Text className="text-black text-sm  font-semibold">
         {item?.name}
       </Text> */}
                  </View>
                  <Text className="text-black text-sm  font-semibold">
                    ({item?.productCount})
                  </Text>
                </View>
              </View>
            ))}
            {/* <FlatList
            data={item?.filterDetail || []}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              
            )}
            horizontal={false}
          /> */}
          </View>
        )}
        // <View>
        //   <Text className="text-black font-bold text-sm">{ item?.item?.title}</Text>
        // </View>

        horizontal={false}
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
