import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

class Header extends Component{
	render() {
		return (
			<View style={{flexDirection:"row"}}>
				<Text style={styles.header_text}>{this.props.name}</Text>
			</View>
		);
	}

}


const styles = StyleSheet.create({
	
	header_text: {
		fontWeight: 'bold',
		fontSize: 35,
		textAlign: 'left',
		color: '#EEEEEE',
		paddingTop: 48,
		paddingHorizontal: 35,
		
	},
	boton1: {
		alignItems: 'center',
		backgroundColor: '#F7F5F2',
		padding: 8,
		height:55,
		width: 55,
		borderRadius: 55,
		marginTop: 55,
		marginLeft: 85,
		
	  },
});


export default Header;