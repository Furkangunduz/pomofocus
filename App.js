import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Pomodoro', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={style.AndroidSafeArea} >
      <View className="flex-1  bg-red-400 px-2" >
        {/* Header */}
        <View className="flex-row justify-between pt-4 px-2">
          <Text className="font-bold text-2xl text-white">PomoFocus</Text>

          <View className="flex-row items-center space-x-3">
            <TouchableOpacity className="px-3 py-1 bg-white/20  rounded">
              <Text className="text-white font-bold">Report</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-3 py-1 bg-white/20 rounded">
              <Text className="text-white font-bold">Settings</Text>
            </TouchableOpacity>
            <Image className="w-6 h-6 rounded-full " source={{ uri: "https://lh3.googleusercontent.com/a-/AFdZucofl7oK5B_YJNJTNPimD_7iESDbCr3y0mB6EbKqRw=s96-c" }} />
          </View>
        </View>
        {/* Body */}
        <View className="h-[35%] mt-5 bg-white/25 rounded-lg">
          <View className="flex-row justify-center items-center pt-2 space-x-4 " >
            <TouchableOpacity className="px-2 py-1 bg-black/10 rounded text-white p-2">
              <Text className="text-white font-bold ">Pomodoro</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-2 py-1 bg-black/10 rounded text-white p-2  ">
              <Text className="text-white font-bold ">Short Break</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-2 py-1 bg-black/10 rounded text-white p-2 ">
              <Text className="text-white font-bold ">Long Break</Text>
            </TouchableOpacity>
          </View>

          {/* Counter */}
          <View className="justify-center items-center">
            <Text className="text-[100px] font-bold text-center text-white mt-5">25:00</Text>
            <TouchableOpacity className="px-3 py-1 bg-white rounded mt-5">
              <Text className="text-[25px] font-bold text-center px-10 text-red-400">Start</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Task Counter */}
        <View className="justify-center items-center mt-5 space-y-2">
          <Text className="text-white">
            #1
          </Text>
          <Text className="text-white">
            Time to focus!
          </Text>
        </View>


      </View>

    </SafeAreaView>)
}


const style = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})