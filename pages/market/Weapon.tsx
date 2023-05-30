import React  from 'react';
import {View,  Text, StyleSheet, ScrollView, Image,  TouchableOpacity, ImageBackground, Modal} from 'react-native';
import { Colors, w, h, gstyle} from '../Theme'; 
import Layout from '../Layout';
import SettingModal from './SettingsModal'


const MarketWeapon = ({ navigation }:any) => {  
	const gameid = 1;
	interface Props {
		showModal: boolean
		modalType: number
		showDetailModal: boolean
	}
	const [status, setStatus] = React.useState<Props>({ 
		showModal: false,
		modalType: 1,
		showDetailModal: false
	});
	const updateStatus = (params:{[key:string]:string|number|boolean}) => setStatus({...status, ...params});

	const goHomePage = ()=> {
		navigation?.navigate('View')
	}
	const goDetails2Page = ()=> {
		updateStatus({showDetailModal: true})
	}
	
	const showSettingModal = ()=> {
		updateStatus({modalType:1, showModal: true})
	}
	const showLeaseModal = ()=> {
		updateStatus({modalType:2, showModal: true})
	}
	function handleChange(e) {
		// This won't work because the event object gets reused.
		e.persist();
		setTimeout(() => {
		//   console.log(e.target.value); // Too late!
		}, 100);
	  }
	return (
		<Layout>
			<View style={{width:'100%',  height:'100%'}}>	
				<View style={{...styles.justify, paddingLeft:'3%', paddingTop:'5%'}}>
					<TouchableOpacity activeOpacity={0.9} onPress={event => goHomePage()}>	
						<Image source={require('../../assets/mockup/backspace.png')} resizeMode="contain" style={{width:8}}/>
					</TouchableOpacity>
					<View style={{...styles.justify, padding:5}}>
						<Image source={require('../../assets/mockup/umi.png')} style={{...styles.umiImg}}/>
						<Text style={{...styles.umiText}}>9.453UMI</Text>
					</View>
				</View>
				<ScrollView style={{padding:'3%'}}>
					<TouchableOpacity activeOpacity={0.9} onPress={event => goHomePage()}>	
						<View style={{...styles.weaponBoxType}}>	
							<ImageBackground  source={require('../../assets/mockup/back5.png')} resizeMode="cover" style={{width:'100%', height:'100%'}}>
								<Text style={{...styles.weaponBoxTypeText}}>PURCHASE</Text>
							</ImageBackground>
						</View>
						<Image source={require('../../assets/mockup/weapon1.webp')}  style={{...styles.weaponImg}} />
					</TouchableOpacity>
					<View style={{marginBottom:'15%'}}>
						<Text style={{...styles.title}}>Detail</Text>
						<Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </Text>
						<Text style={{...styles.title, marginLeft:'auto'}}>300.23UMI</Text>
						<TouchableOpacity activeOpacity={0.9} onPress={event => goDetails2Page()} style={{...styles.playBtn}}>	
							<Text style={{textAlign: 'center'}}>Detail 2</Text>
						</TouchableOpacity>
						<View style={{...styles.justify}}>
							<TouchableOpacity activeOpacity={0.9} onPress={event => showSettingModal()} style={{...styles.playBtn}}>	
								<Text style={{textAlign: 'center'}}>Sell Setting</Text>
							</TouchableOpacity>
							<TouchableOpacity activeOpacity={0.9} onPress={event => showLeaseModal()} style={{...styles.playBtn}}>	
								<Text style={{textAlign: 'center'}}>Lease Setting</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
				{
					status.showModal? (
						<SettingModal type={status.modalType} onClose={()=>{updateStatus({showModal: false}); }}/>
					):(
						null
					)
				}
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
	playBtn: {
		backgroundColor: Colors.Grey,
		paddingTop: w('1%'),
		paddingBottom: w('1%'),
		borderRadius: 2,
		margin: w('3%'),
		width: '40%',
		textAlignVertical:'center',
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	weaponImg: {
		width: w('94%'),
		height: w('94%'),
		borderColor: Colors.Grey,
		borderWidth: 1
	},
	justify: {
		display: 'flex',
		alignContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems:	'center',
		justifyContent: 'space-between'
	},
	weaponBoxType:{
		marginLeft:'auto',
		width:'30%',
		height:'5%'
	},
	weaponBoxTypeText: {
		color: Colors.Light,
		...gstyle.t,
		textAlign: 'center',
		fontWeight: 'bold',
		paddingTop:1
	},
})
export default MarketWeapon 