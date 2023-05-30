import React  from 'react';
import {View, TouchableOpacity, Text, StyleSheet, TextInput} from 'react-native';
import  { Colors, w } from '../Theme'; 
import Layout from '../Layout';

const Stake = ({ navigation }:any) => {  
	
	return (
		<Layout>
			<View >
				<View style = {styles.homepanel}> 
					<Text style={{color:Colors.Black, fontSize:30, marginTop:15}}>Stake</Text>
				</View>
			</View>
		</Layout>
  	)
}
const styles = StyleSheet.create({
	homepanel : {
		color:'#111'
	}
})
export default Stake