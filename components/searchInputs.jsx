import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { router, usePathname } from "expo-router";
const SearchInput = ({initialQuery}) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || '');
 
  return (
    <View className="border-2 border-black-200 rounded-2xl w-full h-16 px-0 bg-whiterounded-md focus:border-secondary flex-row items-center space-x-4">
      <TextInput
        className="flex-1 text-white  p-5  font-pregular text-base"
        value={query}
        placeholder="search for more video"
        placeholderTextColor="#CDCDE0"
        onChangeText={(e)=> setQuery(e)}
       
      />
      
        <TouchableOpacity onPress={() => {
          if(!query){
            return Alert.alert('Missing Query', "Please input something to search results accross database")
          }

          if(pathname.startsWith('/search')) router.setParams({query})
          else router.push(`/search/${query}`)

        }}>
          <View className="bg-black w-full p-5  h-full items-center  justify-center rounded-br-xl rounded-tr-xl">
          <Image
            source={icons.search}
            className="w-6 h-6  "
            resizeMode="contain"
          />
          </View>
         
        </TouchableOpacity>
    
    </View>
  );
};

export default SearchInput;