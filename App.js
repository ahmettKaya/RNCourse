import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
	const [goals, setGoals] = useState([])

	const deleteGoalHandler = (goal) => {
		setGoals(currentGoals => 
			currentGoals.filter(val => val !== goal)
		)
	}

	return (
		<View style={styles.appContainer}>
			<GoalInput
				onAddGoal={(goalText) => {
					if (goalText != '') {
						setGoals(currentGoals => [...currentGoals, goalText])
					}
				}}
			/>
			<ScrollView showsVerticalScrollIndicator={false}>
				{goals.map((goal, index) => 
					<GoalItem
						goalText={goal}
						key={index}
						onDeleteGoal={e => deleteGoalHandler(goal)}
					/>
				)}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		backgroundColor: 'gray',
		paddingTop: '20%',
		paddingHorizontal: '10%',
		height: '100%'
	}
});
