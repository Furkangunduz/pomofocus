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
          <Text className="font-bold text-2xl">PomoFocus</Text>

          <View className="flex-row items-center space-x-3">
            <TouchableOpacity className="px-3 py-1 bg-white/60  rounded">
              <Text>Report</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-3 py-1 bg-white/60 rounded">
              <Text>Settings</Text>
            </TouchableOpacity>
            <Image className="w-6 h-6 rounded-full " source={{ uri: "https://lh3.googleusercontent.com/a-/AFdZucofl7oK5B_YJNJTNPimD_7iESDbCr3y0mB6EbKqRw=s96-c" }} />
          </View>
        </View>
        {/* Body */}

      </View>

    </SafeAreaView>)
}


const style = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})