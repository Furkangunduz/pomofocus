import React from 'react';
import {View, Text} from 'react-native';

const TaskCounter = ({TaskCount}) => {
	return (
		<View className='justify-center items-center mt-5 space-y-2'>
			<Text className='text-white'>#{TaskCount}</Text>
			<Text className='text-white'>Time to focus!</Text>
		</View>
	);
};

export default TaskCounter;
