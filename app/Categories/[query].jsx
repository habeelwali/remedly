import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/searchInputs";
import TopSellingItem from "../../components/card";
import { Link, useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import getProductByCategory from "../../action/getProductByCategories";
import { useGlobalContext } from "../../context/GlobalProvider";

const FilterData = () => {
  const { setProductData, productdata} = useGlobalContext();
  const query = useLocalSearchParams();
  const { data: products, error: productsError } = useQuery({
    queryKey: ["productsCategories", query?.query],
    queryFn: () => getProductByCategory(query?.query),
  });

  useEffect(() => {
    setProductData(products?.categoryProductList[0]?.productdetail)
  }, [products])

  return (
    <SafeAreaView className="bg-white h-full text-white">
      <FlatList
        data={
          !products?.msg ? productdata : []
        }
        keyExtractor={(item) => item.id}
        numColumns={"2"}
        renderItem={({ item }) => (
          <View className="  flex-1  ">
            <TopSellingItem item={item} />
          </View>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 ">
            <Text className="font-pmedium text-sm text-gray-500">
              Search Result
            </Text>
            {/* <Text className="text-2xl font-bold text-white"></Text> */}
            <View className="mt-6 mb-8">
              <SearchInput initialQuery={""} />
            </View>

            <View className="w-full flex-1 flex-row justify-between pt-5 ">
              <Text className=" text-Black text-lg font-bold ">Medicine</Text>
              <Link href={`/filter/${query?.query}`} asChild>
                <Text className=" text-Black text-lg font-bold ">Filter</Text>
              </Link>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <View className="w-full items-center">
            <Text>{products?.msg}</Text>
          </View>
        )}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
      />
    </SafeAreaView>
  );
};

export default FilterData;
