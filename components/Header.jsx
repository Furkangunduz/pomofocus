import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Header = () => {
	return (
		<View className='flex-row justify-between pt-4 px-2'>
			<Text className='font-bold text-2xl text-white'>PomoFocus</Text>
			<View className='flex-row items-center space-x-3'>
				<TouchableOpacity className='px-3 py-1 bg-white/20  rounded'>
					<Text className='text-white font-bold'>Report</Text>
				</TouchableOpacity>
				<TouchableOpacity className='px-3 py-1 bg-white/20 rounded'>
					<Text className='text-white font-bold'>Settings</Text>
				</TouchableOpacity>
				<Image
					className='w-6 h-6 rounded-full '
					source={{ uri: 'https://lh3.googleusercontent.com/a-/AFdZucofl7oK5B_YJNJTNPimD_7iESDbCr3y0mB6EbKqRw=s96-c' }}
				/>
			</View>
		</View>
	);
};
export default Header;
