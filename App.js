import { useState } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
	const [goals, setGoals] = useState([])
	const [modalVisibility, setModalVisibility] = useState(false)

	const deleteGoalHandler = (goal) => {
		setGoals(currentGoals =>
			currentGoals.filter(val => val !== goal)
		)
	}

	return (
		<View style={styles.appContainer}>
			<ScrollView showsVerticalScrollIndicator={false}>
				{goals.map((goal, index) =>
					<GoalItem
						goalText={goal}
						key={index}
						onDeleteGoal={e => deleteGoalHandler(goal)}
					/>
				)}
			</ScrollView>
			<TouchableOpacity
				style={styles.button}
				onPress={() => setModalVisibility(true)}
			>
				<Text style={styles.buttonText}>Add Goal</Text>
			</TouchableOpacity>
			<GoalInput
				visibility={modalVisibility}
				onAddGoal={(goalText) => {
					setGoals(currentGoals => [...currentGoals, goalText])
					setModalVisibility(false)
				}}
				onCancel={() => setModalVisibility(false)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		backgroundColor: 'gray',
		paddingTop: '20%',
		paddingHorizontal: '10%',
		height: '100%'
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'black',
		borderRadius: 10,
		paddingVertical: 10,
		marginBottom: 30,
		marginTop: 16
	},
	buttonText: {
		fontSize: 24,
		color: 'white',
		padding: 10
	}
});
