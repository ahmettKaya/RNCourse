import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, Modal } from 'react-native';

export default function GoalInput(props) {
	const [goalText, setGoalText] = useState('')

	return (
		<Modal
			visible={props.visibility}
			transparent={true}
			animationType="slide"
		>
			<View style={[styles.goalContainer, styles.shadowEffect]}>
				<TextInput
					style={styles.goalInput}
					placeholder='Enter your goal...'
					onChangeText={text => setGoalText(text)}
					value={goalText}
					autoFocus={true}
				/>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => {
							if (goalText != '') {
								props.onAddGoal(goalText)
								setGoalText('')
								Keyboard.dismiss()
							}
						}}
					>
						<Text style={styles.buttonText}>Add</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={() => {
							props.onCancel()
							setGoalText('')
							Keyboard.dismiss()
						}}
					>
						<Text style={styles.buttonText}>Cancel</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	goalContainer: {
		marginTop: '100%',
		marginHorizontal: '5%',
		padding: '5%',
		backgroundColor: 'gray',
		borderRadius: 20
	},
	goalInput: {
		alignItems: 'stretch',
		borderWidth: 2,
		borderRadius: 5,
		borderColor: 'black',
		backgroundColor: 'white',
		padding: 5,
		fontSize: 24,
		marginBottom: 8
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'black',
		borderRadius: 10,
		width: '48%'
	},
	buttonText: {
		fontSize: 24,
		color: 'white',
		padding: 10
	},
	shadowEffect: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.5,
		shadowRadius: 10
	}
});