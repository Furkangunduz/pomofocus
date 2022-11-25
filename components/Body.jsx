import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Counter from './Counter';

const Body = () => {
	return (
		<View className='h-[35%] mt-5 '>
			<View className='flex-row justify-center items-center pt-2 space-x-4 '>
				<TouchableOpacity className='px-2 py-1 bg-black/10 rounded text-white p-2'>
					<Text className='text-white font-bold '>Pomodoro</Text>
				</TouchableOpacity>
				<TouchableOpacity className='px-2 py-1 bg-black/10 rounded text-white p-2  '>
					<Text className='text-white font-bold '>Short Break</Text>
				</TouchableOpacity>
				<TouchableOpacity className='px-2 py-1 bg-black/10 rounded text-white p-2 '>
					<Text className='text-white font-bold '>Long Break</Text>
				</TouchableOpacity>
			</View>

			<Counter />
		</View>
	);
};

export default Body;
