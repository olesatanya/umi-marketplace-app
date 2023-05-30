import React  from 'react';
import {View,  Text, StyleSheet, ScrollView, Image, TextInput,FlatList, TouchableOpacity, ImageBackground} from 'react-native';
import { Colors, w, h, gstyle} from '../Theme'; 
import Layout from '../Layout';


const Game_View = ({ navigation }:any) => {  
	const gameid = 1;
	
	const filterType = [
		{ id: 'All'},
		{ id: 'PURCHASE'},
		{ id: 'GET'},
		{ id: 'ON SELLING'},
		{ id: 'ON LEASE' }
	]

	const goHomePage = ()=> {
		navigation?.navigate('Home')
	}
	const goDetailsPage = ()=> {
		navigation?.navigate('Details')
	}
	
	const goWeaponPage = (index)=> {
		navigation?.navigate('Weapon')
	}
	return (
		<Layout>
			<ImageBackground source={require('../../assets/mockup/back1.webp')} resizeMode="stretch" style={{width:'100%',  height:'100%'}}>	
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
					<TouchableOpacity style={{position:'relative'}} activeOpacity={0.9} onPress={index => goDetailsPage()}>	
						<Image source={require('../../assets/mockup/item1.webp')} style={{width:'100%', height:h('30%')}} />
						<Text style={{...styles.status}}>Status</Text>
					</TouchableOpacity>
					<View style={{padding: '3%'}}>
						<View style={{...styles.justify}}>
							<View style={{...styles.searchBar, ...styles.justify}}>
								<Image source={require('../../assets/mockup/search.png')} resizeMode="contain" style={{width:20, height:20}}/>
								<TextInput style={{...styles.searchInput}} placeholder="Search"></TextInput>
							</View>
							<TouchableOpacity style={{...styles.filterBtn, backgroundColor:Colors.Light}}>	
								<Text style={{textAlign:'center'}}>Filter</Text>
							</TouchableOpacity>
						</View>
						<FlatList
							horizontal={true}
							data={filterType}
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={{
								paddingHorizontal: 0
							}}
							keyExtractor={item => item.id}        
							renderItem={({ item, index }) => (
								<TouchableOpacity activeOpacity={0.9} onPress={index => ()=>{}} style={{marginRight: w('5%')}}>
									<ImageBackground source={require('../../assets/mockup/btn_back.png')} resizeMode="stretch" style={{...styles.filterBtn, width:'100%'}}>	
										<Text style={{color: Colors.Light, textAlign:'center'}}>{item.id}</Text>
									</ImageBackground>
								</TouchableOpacity>
							)}
						/>
						<View style={{...styles.row, marginBottom:'5%'}}>
							<TouchableOpacity style={{...styles.weaponBox}} activeOpacity={0.9} onPress={index => goWeaponPage(index)}>	
								<View style={{...styles.weaponBoxType}}>
									<ImageBackground  source={require('../../assets/mockup/back5.png')} resizeMode="cover" style={{width:'100%', height:'100%'}}>
										<Text style={{...styles.weaponBoxTypeText}}>PURCHASE</Text>
									</ImageBackground>
								</View>
								<Image source={require('../../assets/mockup/weapon2.webp')} resizeMode="contain" style={{width:'100%', height:'95%'}}/>
								<View style={{...styles.justify, justifyContent:'center', position:'absolute', bottom:'1%', alignSelf:'center'}}>
									<Image source={require('../../assets/mockup/umi.png')} style={{width:16, height:16}}/>
									<Text style={{...styles.priceText}}>3453.45</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={{...styles.weaponBox}} activeOpacity={0.9} onPress={index => goWeaponPage(index)}>	
								<View style={{...styles.weaponBoxType}}>
									<ImageBackground  source={require('../../assets/mockup/back3.png')} resizeMode="cover" style={{width:'100%', height:'100%'}}>
										<Text style={{...styles.weaponBoxTypeText}}>GET</Text>
									</ImageBackground>
								</View>
								<Image source={require('../../assets/mockup/weapon3.webp')} resizeMode="contain" style={{width:'100%', height:'95%'}}/>
								<View style={{...styles.justify, justifyContent:'center', position:'absolute', bottom:'1%', alignSelf:'center'}}>
									<Image source={require('../../assets/mockup/umi.png')} style={{width:16, height:16}}/>
									<Text style={{...styles.priceText}}>3453.45</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={{...styles.weaponBox}} activeOpacity={0.9} onPress={index => goWeaponPage(index)}>	
								<View style={{...styles.weaponBoxType}}>
									<ImageBackground  source={require('../../assets/mockup/back6.png')} resizeMode="cover" style={{width:'100%', height:'100%'}}>
										<Text style={{...styles.weaponBoxTypeText}}>SELL</Text>
									</ImageBackground>
								</View>
								<Image source={require('../../assets/mockup/weapon2.webp')} resizeMode="contain" style={{width:'100%', height:'95%'}}/>
								<View style={{...styles.justify, justifyContent:'center', position:'absolute', bottom:'1%', alignSelf:'center'}}>
									<Image source={require('../../assets/mockup/umi.png')} style={{width:16, height:16}}/>
									<Text style={{...styles.priceText}}>3453.45</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={{...styles.weaponBox}} activeOpacity={0.9} onPress={index => goWeaponPage(index)}>	
								<View style={{...styles.weaponBoxType}}>
									<ImageBackground  source={require('../../assets/mockup/back2.png')} resizeMode="cover" style={{width:'100%', height:'100%'}}>
										<Text style={{...styles.weaponBoxTypeText}}>RENTINg</Text>
									</ImageBackground>
								</View>
								<Image source={require('../../assets/mockup/weapon1.webp')} resizeMode="contain" style={{width:'100%', height:'95%'}}/>
								<View style={{...styles.justify, justifyContent:'center', position:'absolute', bottom:'1%', alignSelf:'center'}}>
									<Image source={require('../../assets/mockup/umi.png')} style={{width:16, height:16}}/>
									<Text style={{...styles.priceText}}>3453.45</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={{...styles.weaponBox}} activeOpacity={0.9} onPress={index => goWeaponPage(index)}>	
								<View style={{...styles.weaponBoxType}}>
									<ImageBackground  source={require('../../assets/mockup/back5.png')} resizeMode="cover" style={{width:'100%', height:'100%'}}>
										<Text style={{...styles.weaponBoxTypeText}}>PURCHASE</Text>
									</ImageBackground>
								</View>
								<Image source={require('../../assets/mockup/weapon2.webp')} resizeMode="contain" style={{width:'100%', height:'95%'}}/>
								<View style={{...styles.justify, justifyContent:'center', position:'absolute', bottom:'1%', alignSelf:'center'}}>
									<Image source={require('../../assets/mockup/umi.png')} style={{width:16, height:16}}/>
									<Text style={{...styles.priceText}}>3453.45</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={{...styles.weaponBox}} activeOpacity={0.9} onPress={index => goWeaponPage(index)}>	
								<View style={{...styles.weaponBoxType}}>
									<ImageBackground  source={require('../../assets/mockup/back3.png')} resizeMode="cover" style={{width:'100%', height:'100%'}}>
										<Text style={{...styles.weaponBoxTypeText}}>GET</Text>
									</ImageBackground>
								</View>
								<Image source={require('../../assets/mockup/weapon3.webp')} resizeMode="contain" style={{width:'100%', height:'95%'}}/>
								<View style={{...styles.justify, justifyContent:'center', position:'absolute', bottom:'1%', alignSelf:'center'}}>
									<Image source={require('../../assets/mockup/umi.png')} style={{width:16, height:16}}/>
									<Text style={{...styles.priceText}}>3453.45</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={{...styles.weaponBox}} activeOpacity={0.9} onPress={index => goWeaponPage(index)}>	
								<View style={{...styles.weaponBoxType}}>
									<ImageBackground  source={require('../../assets/mockup/back6.png')} resizeMode="cover" style={{width:'100%', height:'100%'}}>
										<Text style={{...styles.weaponBoxTypeText}}>SELL</Text>
									</ImageBackground>
								</View>
								<Image source={require('../../assets/mockup/weapon2.webp')} resizeMode="contain" style={{width:'100%', height:'95%'}}/>
								<View style={{...styles.justify, justifyContent:'center', position:'absolute', bottom:'1%', alignSelf:'center'}}>
									<Image source={require('../../assets/mockup/umi.png')} style={{width:16, height:16}}/>
									<Text style={{...styles.priceText}}>3453.45</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={{...styles.weaponBox}} activeOpacity={0.9} onPress={index => goWeaponPage(index)}>	
								<View style={{...styles.weaponBoxType}}>
									<ImageBackground  source={require('../../assets/mockup/back5.png')} resizeMode="cover" style={{width:'100%', height:'100%'}}>
										<Text style={{...styles.weaponBoxTypeText}}>PURCHASE</Text>
									</ImageBackground>
								</View>
								<Image source={require('../../assets/mockup/weapon2.webp')} resizeMode="contain" style={{width:'100%', height:'95%'}}/>
								<View style={{...styles.justify, justifyContent:'center', position:'absolute', bottom:'1%', alignSelf:'center'}}>
									<Image source={require('../../assets/mockup/umi.png')} style={{width:16, height:16}}/>
									<Text style={{...styles.priceText}}>3453.45</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={{...styles.weaponBox}} activeOpacity={0.9} onPress={index => goWeaponPage(index)}>	
								<View style={{...styles.weaponBoxType}}>
									<ImageBackground  source={require('../../assets/mockup/back3.png')} resizeMode="cover" style={{width:'100%', height:'100%'}}>
										<Text style={{...styles.weaponBoxTypeText}}>GET</Text>
									</ImageBackground>
								</View>
								<Image source={require('../../assets/mockup/weapon3.webp')} resizeMode="contain" style={{width:'100%', height:'95%'}}/>
								<View style={{...styles.justify, justifyContent:'center', position:'absolute', bottom:'1%', alignSelf:'center'}}>
									<Image source={require('../../assets/mockup/umi.png')} style={{width:16, height:16}}/>
									<Text style={{...styles.priceText}}>3453.45</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={{...styles.weaponBox}} activeOpacity={0.9} onPress={index => goWeaponPage(index)}>	
								<View style={{...styles.weaponBoxType}}>
									<ImageBackground  source={require('../../assets/mockup/back6.png')} resizeMode="cover" style={{width:'100%', height:'100%'}}>
										<Text style={{...styles.weaponBoxTypeText}}>SELL</Text>
									</ImageBackground>
								</View>
								<Image source={require('../../assets/mockup/weapon2.webp')} resizeMode="contain" style={{width:'100%', height:'95%'}}/>
								<View style={{...styles.justify, justifyContent:'center', position:'absolute', bottom:'1%', alignSelf:'center'}}>
									<Image source={require('../../assets/mockup/umi.png')} style={{width:16, height:16}}/>
									<Text style={{...styles.priceText}}>3453.45</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={{...styles.weaponBox}} activeOpacity={0.9} onPress={index => goWeaponPage(index)}>	
								<View style={{...styles.weaponBoxType}}>
									<ImageBackground  source={require('../../assets/mockup/back4.png')} resizeMode="cover" style={{width:'100%', height:'100%'}}>
										<Text style={{...styles.weaponBoxTypeText}}>SELL</Text>
									</ImageBackground>
								</View>
								<Image source={require('../../assets/mockup/weapon2.webp')} resizeMode="contain" style={{width:'100%', height:'95%'}}/>
								<View style={{...styles.justify, justifyContent:'center', position:'absolute', bottom:'1%', alignSelf:'center'}}>
									<Image source={require('../../assets/mockup/umi.png')} style={{width:16, height:16}}/>
									<Text style={{...styles.priceText}}>3453.45</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={{...styles.weaponBox}} activeOpacity={0.9} onPress={index => goWeaponPage(index)}>	
								<View style={{...styles.weaponBoxType}}>
									<ImageBackground  source={require('../../assets/mockup/back5.png')} resizeMode="cover" style={{width:'100%', height:'100%'}}>
										<Text style={{...styles.weaponBoxTypeText}}>PURCHASE</Text>
									</ImageBackground>
								</View>
								<Image source={require('../../assets/mockup/weapon2.webp')} resizeMode="contain" style={{width:'100%', height:'95%'}}/>
								<View style={{...styles.justify, justifyContent:'center', position:'absolute', bottom:'1%', alignSelf:'center'}}>
									<Image source={require('../../assets/mockup/umi.png')} style={{width:16, height:16}}/>
									<Text style={{...styles.priceText}}>3453.45</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={{...styles.weaponBox}} activeOpacity={0.9} onPress={index => goWeaponPage(index)}>	
								<View style={{...styles.weaponBoxType}}>
									<ImageBackground  source={require('../../assets/mockup/back3.png')} resizeMode="cover" style={{width:'100%', height:'100%'}}>
										<Text style={{...styles.weaponBoxTypeText}}>GET</Text>
									</ImageBackground>
								</View>
								<Image source={require('../../assets/mockup/weapon3.webp')} resizeMode="contain" style={{width:'100%', height:'95%'}}/>
								<View style={{...styles.justify, justifyContent:'center', position:'absolute', bottom:'1%', alignSelf:'center'}}>
									<Image source={require('../../assets/mockup/umi.png')} style={{width:16, height:16}}/>
									<Text style={{...styles.priceText}}>3453.45</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={{...styles.weaponBox}} activeOpacity={0.9} onPress={index => goWeaponPage(index)}>	
								<View style={{...styles.weaponBoxType}}>
									<ImageBackground  source={require('../../assets/mockup/back6.png')} resizeMode="cover" style={{width:'100%', height:'100%'}}>
										<Text style={{...styles.weaponBoxTypeText}}>SELL</Text>
									</ImageBackground>
								</View>
								<Image source={require('../../assets/mockup/weapon2.webp')} resizeMode="contain" style={{width:'100%', height:'95%'}}/>
								<View style={{...styles.justify, justifyContent:'center', position:'absolute', bottom:'1%', alignSelf:'center'}}>
									<Image source={require('../../assets/mockup/umi.png')} style={{width:16, height:16}}/>
									<Text style={{...styles.priceText}}>3453.45</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</ImageBackground>
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
	priceText: {
		...gstyle.t,
		color: Colors.Black,
		marginLeft: '3%'
	},
	weaponBox: {
		width: w('29%'),
		height: w('29%'),
		backgroundColor: Colors.Light,
		position: 'relative',
		borderRadius:2,
		marginTop: w('3%'),
		padding: 0,
		textAlign: 'center'
	},
	weaponBoxTypeText: {
		color: Colors.Light,
		...gstyle.t0,
		textAlign: 'center',
		textAlignVertical:'center',
		fontWeight: 'bold',
		paddingTop:1
	},
	weaponBoxType:{
		position: 'absolute',
		left: 0,
		top: 0,
		width:'70%',
		height:'15%'
	},
	searchBar: {
		borderRadius: 2,
		backgroundColor: '#cccccc',
		padding:w('1%')
	},
	searchInput: {
		borderRadius: 2,
		backgroundColor: Colors.Light,
		width: w('35%'),
		paddingLeft:w('3%')
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
	filterBtn: {
		paddingLeft: 'auto',
		paddingRight: 'auto',
		paddingTop: w('1%'),
		paddingBottom: w('1%'),
		minWidth:w('20%'),
		borderRadius: 2,
		margin: w('1%')
	},
	justify: {
		display: 'flex',
		alignContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems:	'center',
		justifyContent: 'space-between'
	},
	row: {
		display: 'flex',
		alignContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent:'space-between'
	}
})
export default Game_View 