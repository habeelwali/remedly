import { View, Text, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable'
import { icons } from '../constants'
import { router } from 'expo-router'

const zoomIn = {
    0: {
        scale: 0.9
    },
    1: {
        scale: 1
    }
}

const zoomOut = {
    0: {
        scale: 1
    },
    1: {
        scale: 0.9
    }
}
const TrendingItem = ({ activeItem, item }) => {

    return (
        <Animatable.View
            className="mr-5"
            animation={activeItem === item.id ? zoomIn : zoomOut}
            duration={500}
        >
            <TouchableOpacity onPress={() => { router.push(`/Categories/${item.categorySEName}`) }}>
                <View>
                    <Image source={{ url: item?.imageURL }} className="w-52 h-52 rounded-md my-5 overflow-hidden shadow-sm shadow-black/40 relative"
                        resizeMode="contain" />
                    <Text className="text-black absolute  bottom-[50px] left-[55px] w-[100px] items-center text-center ">{item.categoryName}</Text>
                </View>
            </TouchableOpacity>
        </Animatable.View>
    )
}

export default function Categories({ posts }) {
    const [activeItem, setActiveItem] = useState(posts[0])

    const viewableItemChanged = ({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveItem(viewableItems[0].key)
        }
    }
    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TrendingItem activeItem={activeItem} item={item} />
            )}
            onViewableItemsChanged={viewableItemChanged}
            viewabilityConfig={{
                itemVisiblePercentThreshold: 70
            }
            }
            contentOffset={{ x: 170 }}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    )
}