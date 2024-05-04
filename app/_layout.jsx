import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Stack, useNavigation } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import SearchInput from "../components/searchInputs";
import Ionicons from "@expo/vector-icons/Ionicons";
import GlobalProvider from "../context/GlobalProvider";
const RootLayout = () => {
  const queryClient = new QueryClient();
  const nevigation = useNavigation();
  return (
    <QueryClientProvider client={queryClient}>
         <GlobalProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        {/* <Stack.Screen
                    name='Home'
                    options={{ headerShown: false }}
                /> */}
        <Stack.Screen
          name="Categories/[query]"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="products/[query]"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="filter/[filter]"
          options={{
            presentation: "modal",
            headerTitle: "Filter",
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => nevigation.goBack()}>
                <Ionicons name="close-outline" size={28} color="grey" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
      </GlobalProvider>
    </QueryClientProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
