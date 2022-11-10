import {View, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';
const Counter = () => {
	const [counter, setCounter] = useState();

	return (
		<View className='justify-center items-center'>
			<Text className='text-[100px] font-bold text-center text-white mt-5'>25:00</Text>
			<TouchableOpacity className='px-3 py-1 bg-white rounded mt-5'>
				<Text className='text-[25px] font-bold text-center px-10 text-red-400'>Start</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Counter;
