import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react' 
import { router } from 'expo-router'

 const TopSellingItem = ({ item }) => {
    
    return (
        <View className=" w-auto  flex-1  p-1 ">
             <TouchableOpacity onPress={() => { router.push(`/products/osnate-d-tablets-30s`) }}>
            <View className=" border-2   p-3 rounded-md bg-white border-gray-100" >
                <View className="  p-1 border-2 border-black-100 w-20 rounded-full text-center items-center mb-2 w" ><Text className="text-black ">20%</Text></View>
               <View className="w-full ">
               <Image
                    source={{ uri: item.imageUrl }}
                    resizeMode='contain'
                    className='w-100 h-[100px]   '
                />  
               </View>
               
                <View className='mt-5 gap-1'>
                    <Text  numberOfLines={1} className="text-black font-bold text-xs truncate  ">{item.name}</Text>
                    <Text className=" text-gray-500 ">{item?.categoryTitle}</Text>
                    <Text className=" text-black font-psemibold text-md">Rs.{item?.price}</Text>
                </View>
            </View>
            </TouchableOpacity>
        </View>
    )

}

export default TopSellingItem

