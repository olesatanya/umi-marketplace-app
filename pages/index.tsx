import React from 'react'
import {  Image, StyleSheet} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { Colors } from './Theme';

import Game_Home from './game/Home'
import Game_Details from './game/Details'
import Game_Details2 from './game/Details2'
import Game_View from './game/View'
import Game_Weapon from './game/Weapon'

import Market_Home from './market/Home'
import Wallet_Home from './wallet/Home'
import Profile_Home from './profile/Home'
import Chat_Home from './chat/Home'
import Stake_Home from './stake/Home';

const Tab = createMaterialBottomTabNavigator();
const GameStack = createStackNavigator();
const WalletStack = createStackNavigator();
const MarketStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const StakeStack = createStackNavigator();
const ChatStack = createStackNavigator();

const GameStackNavigator = () => {
	return (
			<GameStack.Navigator  screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} initialRouteName={'Purchase'}>
				<GameStack.Screen name="Home" component={Game_Home} />
				<GameStack.Screen name="Details" component={Game_Details} />
				<GameStack.Screen name="Details2" component={Game_Details2} />
				<GameStack.Screen name="View" component={Game_View} />
				<GameStack.Screen name="Weapon" component={Game_Weapon} />
			</GameStack.Navigator>
	)
}
const WalletStackNavigator = () => {
	return (
			<WalletStack.Navigator  screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} initialRouteName={'Details'}>
				<WalletStack.Screen name="Home" component={Wallet_Home} />
			</WalletStack.Navigator>
	)
}
const MarketStackNavigator = () => {
	return (
			<MarketStack.Navigator  screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} initialRouteName={'Details'}>
				<MarketStack.Screen name="Details" component={Market_Home} />
			</MarketStack.Navigator>
	)
}
const ProfileStackNavigator = () => {
	return (
			<ProfileStack.Navigator  screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} initialRouteName={'Details'}>
				<ProfileStack.Screen name="Details" component={Profile_Home} />
			</ProfileStack.Navigator>
	)
}
const ChatStackNavigator = () => {
	return (
			<ChatStack.Navigator  screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} initialRouteName={'Details'}>
				<ChatStack.Screen name="Details" component={Chat_Home} />
			</ChatStack.Navigator>
	)
}
const StakeStackNavigator = () => {
	return (
			<StakeStack.Navigator  screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} initialRouteName={'Details'}>
				<StakeStack.Screen name="Details" component={Stake_Home} />
			</StakeStack.Navigator>
	)
}

function Index() {
	return (
		<Tab.Navigator initialRouteName='Game' labeled={false}   activeColor= {Colors.Primary} inactiveColor= {Colors.Primary} barStyle={{ backgroundColor: "rgba(0, 0, 0, 0.9)"}} > 
			 <Tab.Screen
				name="Game"
				options={{   
					tabBarLabel:()=> null,
					tabBarIcon: ({focused, color}) => {
					return focused?	<Image style={{...styles.icon, width:'100%'}}  source= {require('../assets/mockup/menu1_1.png')}/> : <Image style={{...styles.icon}} source= {require('../assets/mockup/menu1.png')}/> 
					}
				}}
				component={GameStackNavigator}
			/>
			 <Tab.Screen
				name="Market"
				component={MarketStackNavigator}
				options={{   
					tabBarIcon: ({focused, color}) => {
						return focused?	<Image style={{...styles.icon}} source= {require('../assets/mockup/menu2_2.png')}/> : <Image style={{...styles.icon}} source= {require('../assets/mockup/menu2.png')}/> 
					}
				}}
			/>
			 <Tab.Screen
				name="Wallet"
				component={WalletStackNavigator}
				options={{   
					tabBarIcon: ({focused, color}) => {
						return focused?	<Image style={{...styles.icon}} source= {require('../assets/mockup/menu3_2.png')}/> : <Image style={{...styles.icon}} source= {require('../assets/mockup/menu3.png')}/> 
					}
				}}
			/>
			 <Tab.Screen
				name="Profile"
				component={ProfileStackNavigator}
				options={{   
					tabBarIcon: ({focused, color}) => {
						return focused?	<Image style={{...styles.icon}} source= {require('../assets/mockup/menu4_2.png')}/> : <Image style={{...styles.icon}} source= {require('../assets/mockup/menu4.png')}/> 
					}
				}}
			/>
			<Tab.Screen
			   name="Stake"
			   component={StakeStackNavigator}
			   options={{   
					tabBarIcon: ({focused, color}) => {
						return focused?	<Image style={{...styles.icon}} source= {require('../assets/mockup/menu5_2.png')}/> : <Image style={{...styles.icon}} source= {require('../assets/mockup/menu5.png')}/> 
					}
			   }}
		   	/>
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	icon: {
		width: 50,
		height: 55,
		padding: 0,
		margin: 0,
	}
})

export default Index