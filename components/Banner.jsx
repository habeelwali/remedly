import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const RenderItem = (item) =>{
    console.log("bannerIttem >>", item.item);
    return (
        <View className="mb-3">
            <Image source={{url: item?.item?.image_Name}}  className="w-[395px] h-[150px]" resizeMode='contain'/>
        </View>
    )
}
const Banner = ({data}) => {
    console.log("banner",data);
  return (
    <View>
      <FlatList
      data={data?.listBanner}
      renderItem={({item})=> (
        <RenderItem  item={item} />
        )}
      
      keyExtractor={(item)=>item.id}
      horizontal={true}
      pagingEnabled={false}
      />

    </View>
  )
}

export default Banner

const styles = StyleSheet.create({})