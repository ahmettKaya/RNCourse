import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View , Keyboard } from 'react-native';

export default function GoalInput(props) {
	const [goalText, setGoalText] = useState('')

    return (
        <View style={styles.goalContainer}>
            <TextInput
                style={styles.goalInput}
                placeholder='Enter your goal...'
                onChangeText={text => setGoalText(text)}
                value={goalText}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={ () => {
					props.onAddGoal(goalText)
					setGoalText('')
					Keyboard.dismiss()
				}}
            >
                <Text style={styles.buttonText}>Add Goal</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
	goalContainer: {
		flexDirection: 'row', 
		marginBottom: '5%', 
		justifyContent: 'space-between'
	},
	goalInput: {
		width: '70%',
		borderWidth: 2,
		borderRadius: 5,
		borderColor: 'black',
		backgroundColor: 'white',
		padding: 5,
		fontSize: 24
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'black',
		borderRadius: 5
	},
	buttonText: {
		fontSize: 24,
		color: 'white',
		padding: 7
	}
});