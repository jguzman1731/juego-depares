import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; // 6.2.2

export default class Card extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		
		

		let CardSource = FontAwesome;
		let icon_name = 'circle';
		let icon_color = '#FFFFFF';
		
		
		if(this.props.is_open){
			CardSource = this.props.src;
			icon_name = this.props.name;
			icon_color = this.props.color;
		}
		
		return (
			<View style={styles.card}>
				<TouchableHighlight onPress={this.props.clickCard} activeOpacity={0.75}  underlayColor={"transparent"} >
					<CardSource 
						name={icon_name} 
						size={55} 
						color={icon_color} 
					/>
				</TouchableHighlight>		
			</View>
		);
	}

	

}


const styles = StyleSheet.create({
	card: {
		flex: 1,
		alignItems: 'center'
	},
	card_text: {
		fontSize: 50,
		fontWeight: 'bold'
	}
});