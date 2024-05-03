import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    Image,
    RefreshControl,
    Alert,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { images } from "../../constants";
  import SearchInput from "../../components/searchInputs";
import getAllTopCategories from "../../action/getAllTopCategories";
import { useQuery } from "@tanstack/react-query";
import Banner from "../../components/Banner";
import getBannner from "../../action/getBanner";
import Categories from "../../components/categories";
import ProductCard from "../../components/ProductCard";
import getProducts from "../../action/getproducts";
  const Home = () => {
  
    const { isPending:IstopCategoriespanding, isError:IstopCategoriesError, data:topCategories, error:topCategoriesError } = useQuery({
        queryKey: ['topCategories'],
        queryFn:() => getAllTopCategories(),
      })

      const {data:banner, error:banenrError } = useQuery({
        queryKey: ['banner'],
        queryFn:() => getBannner(),
        
      })

      
      const {data:products, error:productsError } = useQuery({
        queryKey: ['products'],
        queryFn:() => getProducts(),
        
      })

      
    
    return (
      <SafeAreaView className="bg-white h-full">
        <FlatList
          ListHeaderComponent={() => (
            <View>
          
            <View className="my-6 px-4 space-y-6">
              <View className="justify-between items-start flex-row mb-6">
                <View>
                  <Text className="font-pmedium text-sm text-gray-400">
                    Welcome Back
                  </Text>
                  <Text className="text-2xl font-bold text-black">Habeel</Text>
                </View>
  
                <View>
                  <Image
                    source={images.logoSmall}
                    resizeMode="contain"
                    className="w-9 h-10"
                  />
                </View>
              </View> 
            
               <SearchInput />
                 
            </View>
               <Banner data={banner}/>
              <View className="w-full flex-1 items-center pt-5 pb-3">
                <Text className=" text-black text-lg font-pregular mb-3">
                  Shope by Categories
                </Text>
                <Text className=" text-gray-400  font-pregular mb-3">
                  The best quailty products are waiting for you
                </Text>
                <Categories posts={topCategories ?? []} />
              </View>

              <View className="w-full flex-1 items-center pt-0 pb-8">
                <Text className=" text-black text-lg font-pregular mb-3">
                Top Selling Products
                </Text>
                <Text className=" text-gray-400  font-pregular mb-3">
                  The best quailty products are waiting for you
                </Text>
                <ProductCard data={products ?? []} />
              </View>

              <View className="w-full flex-1 items-center pt-0 pb-8">
                <Text className=" text-black text-lg font-pregular mb-3">
                Feature Products
                </Text>
                <Text className=" text-gray-400  font-pregular mb-3">
                Our Featured Products
                </Text>
                <ProductCard data={products ?? []} />
              </View>
            </View>
         
          )}
        //   ListEmptyComponent={() => (
        //     <View>
        //       <Text>No Data Found</Text>
        //     </View>
        //     <EmptyState
        //       title="No videos Found"
        //       subTitle="No videos created yet"
        //     />
        //   )}
        //   refreshControl={
        //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        //   }
        />
      </SafeAreaView>
    );
  };
  
  export default Home;