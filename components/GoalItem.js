import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function GoalItem(props) {
	return (
		<Pressable
			onPress={props.onDeleteGoal}
			style={({pressed}) => pressed && styles.pressed}
		>
			<View style={styles.listItemContainer}>
				<Text style={styles.listItemText}>{props.goalText}</Text>
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	listItemContainer: {
		backgroundColor: 'black',
		height: 50,
		borderRadius: 20,
		justifyContent: 'center',
		marginBottom: '2%'
	},
	listItemText: {
		color: 'white',
		fontSize: 24,
		padding: 10
	},
	pressed: {
		opacity: 0.5
	}
});