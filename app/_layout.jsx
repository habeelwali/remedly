import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const RootLayout = () => {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <Stack>
                <Stack.Screen
                    name='index'
                    options={{ headerShown: false }}
                />
                {/* <Stack.Screen
                    name='(auth)'
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='(tabs)'
                    options={{ headerShown: false }}
                /> */}
                <Stack.Screen
                    name='Categories/[query]'
                    options={{ headerShown: false }}
                />
            </Stack>
        </QueryClientProvider>

    )
}

export default RootLayout

const styles = StyleSheet.create({})