import { View, Text, Image } from 'react-native'
import React from 'react' 

 const TopSellingItem = ({ item }) => {
    
    return (
        <View className=" w-auto  h-50 p-1 ">
            <View className=" border-2  p-3  rounded-md bg-white border-gray-50" >
                <View className=" p-2 border-2 border-black-100 w-20 rounded-full text-center items-center mb-2" ><Text className="text-black ">20%</Text></View>
                <Image
                    source={{ uri: item.imageUrl }}
                    resizeMode='contain'
                    className='w-[200px] min-h-[155px] '
                />  
                <View className='mt-5 gap-1'>
                    <Text className="text-black font-bold text-md">{item.name}</Text>
                    <Text className=" text-gray-500 ">{item?.categoryTitle}</Text>
                    <Text className=" text-black font-psemibold text-md">Rs.{item?.price}</Text>
                </View>
            </View>
        </View>
    )

}

export default TopSellingItem

