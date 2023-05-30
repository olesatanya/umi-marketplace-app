import React  from 'react';
import {View,  Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import { Colors, w, h, gstyle} from '../Theme'; 
import Layout from '../Layout';


const Game_Details = ({ navigation }:any) => {  
	const gameid = 1;
	const goHomePage = ()=> {
		navigation?.navigate('View')
	}
	const goDetailsPage = ()=> {
		navigation?.navigate('Details')
	}
	
	const goWeaponPage = (index)=> {
		navigation?.navigate('Weapon')
	}
	return (
		<Layout>
			<View style={{width:'100%',  height:'100%'}}>	
				<View style={{...styles.justify, paddingLeft:'2%', paddingTop:'5%'}}>
					<TouchableOpacity activeOpacity={0.9} onPress={index => goHomePage()}>	
						<Image source={require('../../assets/mockup/backspace.png')} resizeMode="contain" style={{width:8}}/>
					</TouchableOpacity>
					<View style={{...styles.justify, padding:5}}>
						<Image source={require('../../assets/mockup/umi.png')} style={{...styles.umiImg}}/>
						<Text style={{...styles.umiText}}>9.453UMI</Text>
					</View>
				</View>
				<ScrollView>
					<TouchableOpacity style={{position:'relative'}} activeOpacity={0.9} onPress={index => goHomePage()}>	
						<Image source={require('../../assets/mockup/item1.webp')} style={{width:'100%', height:h('30%')}} />
						<Text style={{...styles.status}}>SHARE</Text>
					</TouchableOpacity>
					<View>
						<TouchableOpacity activeOpacity={0.9} onPress={index => goHomePage()} style={{...styles.playBtn}}>	
							<Text style={{textAlign: 'center'}}>Play</Text>
						</TouchableOpacity>
					</View>
					<View style={{backgroundColor:Colors.LightDark, padding:'5%'}}>
						<Text style={{...styles.title}}>Game explantion</Text>
						<Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
						<Text style={{...styles.title}}>Campaign</Text>
						<Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
					</View>
				</ScrollView>
			</View>
		</Layout>
  	)
}
const styles = StyleSheet.create({
	umiImg: {
		width:20,
		height:20,
		margin:3
	},
	umiText: {
		color: Colors.Sixth,
		...gstyle.t0
	},
	title: {
		...gstyle.t3,
		fontWeight: 'bold',
		paddingTop:'3%'
	},
	status: {
		position: 'absolute',
		bottom: '10%',
		right: '10%',
		backgroundColor: Colors.Light,
		paddingLeft: w('5%'),
		paddingRight: w('5%'),
		paddingTop: w('1%'),
		paddingBottom: w('1%'),
		borderRadius: 2
	},
	playBtn: {
		backgroundColor: Colors.Grey,
		paddingTop: w('1%'),
		paddingBottom: w('1%'),
		borderRadius: 2,
		margin: w('3%'),
		width: '50%',
		textAlignVertical:'center',
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	justify: {
		display: 'flex',
		alignContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems:	'center',
		justifyContent: 'space-between'
	}
})
export default Game_Details 