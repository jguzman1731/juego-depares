import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Score extends Component {
	
	render() {
		return (
			<View style={styles.score_container}>
				<Text style={styles.punt}>Puntuación</Text>
				<Text style={styles.score}>{this.props.score}</Text>
			</View>
		);
	}

}


const styles = StyleSheet.create({
	score_container: {
		flex: 1,
		alignItems: 'center',
		//paddingTop: 20,
		paddingBottom: 82,
		//backgroundColor: '#000000'
	},
	score: {
		fontSize: 50,
		fontWeight: 'bold',
		paddingBottom: 200,
		color: '#6A5495' 
	},
	punt: {
       color: '#6A5495',
	   fontSize: 22 
	}
});