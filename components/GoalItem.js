import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

export default function GoalItem(props) {
	return (
		<Pressable
			onPress={props.onDeleteGoal}
			style={({pressed}) => pressed && styles.pressed}
		>
			<View style={styles.listItemContainer}>
				<Image source={require('../assets/goalWhite.png')} style={styles.imageStyle}/>
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
		marginBottom: '2%',
		flexDirection: 'row',
		alignItems: 'center'
	},
	listItemText: {
		color: 'white',
		fontSize: 24,
		padding: 10
	},
	pressed: {
		opacity: 0.5
	},
	imageStyle: {
		width: 21,
		height: 20,
		marginLeft: 15
	}
});