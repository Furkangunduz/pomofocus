import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import useInterval from '../hooks/useInterval';

const DefaultPomo = 25 * 60;

const Counter = () => {
	const [timeStart, setTimeStart] = useState(0);
	const [pomo, setPomo] = useState(DefaultPomo);
	const [timeLeft, setTimeLeft] = useState(pomo);
	const [isStarted, setIsStarted] = useState(false);
	const [displayTime, setDisplayTime] = useState(0);

	const calcualteDiff = () => {
		const now = new Date().getTime();
		const diff = (((now - timeStart) / 1000) | 0);
		setTimeLeft(pomo - diff)
		setDisplayTime(timeLeft);
		if (diff <= 0) {
			timeStart = Date.now() + 1000;
		}
	};

	const startTimer = () => {
		setTimeStart(new Date().getTime());
		setIsStarted(true);
	};

	const stopTimer = () => {
		setIsStarted(false);
	};

	const HandlePress = () => {
		if (isStarted) {
			stopTimer();
		} else {
			startTimer();
		}
	};

	useInterval(
		() => {
			calcualteDiff();
		},
		isStarted ? 1000 : null
	);

	const timeFormatter = (time) => {
		let minutes = (time / 60) | 0;
		let seconds = (time % 60) | 0;
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		return `${minutes}:${seconds}`;
	};

	return (
		<View>
			<View className='justify-center items-center'>
				<Text className='text-[100px] font-bold text-center text-white mt-5 p-5 border-black/20 border-2 rounded-xl'>{isStarted ? timeFormatter(displayTime) : timeFormatter(displayTime || pomo)}</Text>
			</View>
			<TouchableOpacity onPress={() => HandlePress()} className='px-3 py-1 bg-white rounded mt-5'>
				<Text className='text-[25px] font-bold text-center px-10 text-red-400'>{isStarted ? 'Stop' : 'Start'}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Counter;
