import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/searchInputs'
import TopSellingItem from '../../components/card'
import { useLocalSearchParams } from 'expo-router'
import { useQuery } from '@tanstack/react-query'
import getProductByCategory from '../../action/getProductByCategories'

const FilterData = () => {
  const query  = useLocalSearchParams();
  const {data:products, error:productsError } = useQuery({
    queryKey: ['productsCategories'],
    queryFn:() => getProductByCategory(query?.query),
    
  })


 
  console.log("products", products?.categoryProductList);
  return (
    <SafeAreaView className="bg-primary h-full text-white">
      <FlatList
      data={products?.categoryProductList}
      keyExtractor={(item) => item.id}
      numColumns={"2"}
      renderItem={({item})=>(
        <View className="  flex-1  ">
          
          <TopSellingItem item={item}/>
          
         
        </View>
      )}

      

      ListHeaderComponent={() => (
        <View className="my-6 px-4 ">
          <Text className="font-pmedium text-sm text-gray-100">
            Search Result
          </Text>
          {/* <Text className="text-2xl font-bold text-white"></Text> */}
          <View className="mt-6 mb-8">
          <SearchInput initialQuery={""} />
          </View>
          
        </View>
      )}
      />
    </SafeAreaView>
  )
}

export default FilterData