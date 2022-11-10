import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';

import Header from './components/Header';
import Body from './components/Body';
import TaskCounter from './components/TaskCounter';

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
      <View className="flex-1 bg-red-400 px-2" >
        <Header />
        <Body />
        <TaskCounter TaskCount={1} />
        {/* Tasks */}
      </View>
    </SafeAreaView>)
}


const style = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})