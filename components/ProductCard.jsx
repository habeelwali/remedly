import { FlatList, View } from 'react-native'
import React from 'react'
import TopSellingItem from './card';


const ProductCard = ({ data }) => {
    console.log("data", data);
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TopSellingItem item={item} />
                )}
                horizontal
            />

        </View>
    )
}

export default ProductCard

