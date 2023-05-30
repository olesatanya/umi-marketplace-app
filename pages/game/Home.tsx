import React  from 'react';
import {View,  Text, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity, ImageBackground} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { Colors, gstyle} from '../Theme'; 
import Layout from '../Layout';


const Game = ({ navigation }:any) => {  
	const flexImage = [
		{ id: '1', image: require('../../assets/mockup/mobile1.webp') },
		{ id: '2', image: require('../../assets/mockup/mobile2.webp') },
		{ id: '3', image: require('../../assets/mockup/mobile3.webp') },
		{ id: '4', image: require('../../assets/mockup/mobile4.webp') },
		{ id: '5', image: require('../../assets/mockup/mobile2.webp') },
		{ id: '6', image: require('../../assets/mockup/mobile3.webp') }
	]

	const [status, setStatus] = React.useState({
		slider1: [
			require('../../assets/mockup/item1.webp'),
			require('../../assets/mockup/item2.webp'),
			require('../../assets/mockup/item3.webp'),
			require('../../assets/mockup/item4.webp'),
			require('../../assets/mockup/item5.webp'),
			require('../../assets/mockup/item6.webp')
		], 
		slider2: [
			require('../../assets/mockup/item6.webp'),
			require('../../assets/mockup/item5.webp'),
			require('../../assets/mockup/item4.webp'),
			require('../../assets/mockup/item3.webp'),
			require('../../assets/mockup/item2.webp'),
			require('../../assets/mockup/item1.webp')
		],
		slider3: [
			require('../../assets/mockup/mobile1.webp'),
			require('../../assets/mockup/mobile2.webp'),
			require('../../assets/mockup/mobile3.webp'),
			require('../../assets/mockup/mobile4.webp')
		],
		indexSelected:1
	});

	const goViewPage = (index)=> {
		navigation?.navigate('View')
	}
	return (
		<Layout>
			<ImageBackground source={require('../../assets/mockup/back1.webp')} resizeMode="cover" style={{width:'100%',  height:'100%'}}>
				<ScrollView style={{padding:'2%', paddingTop:'5%'}}>	
					<View style={{...styles.justify}}>
						<Text style={{...styles.title}}>Game</Text>
						<View style={{...styles.justify, padding:5}}>
							<Image source={require('../../assets/mockup/umi.png')} style={{...styles.umiImg}}/>
							<Text style={{...styles.umiText}}>9.453UMI</Text>
						</View>
					</View>
					<SliderBox autoplay={true} autoplayDelay={500} circleLoop={true} resizeMethod={'resize'} resizeMode={'cover'} imageLoadingColor="#2196F3" ImageComponentStyle={{borderRadius: 0, width: '100%'}} dotColor="rgba(255,255,255,0.6)" inactiveDotColor="rgba(255,255,255,0.3)" images={status.slider1}
					onCurrentImagePressed={index => goViewPage(index)} sliderBoxHeight={170}/>
					<ImageBackground source={require('../../assets/mockup/line.png')} resizeMode='contain' style={{width:'100%', paddingLeft:'2%'}}>
						<Text style={{...styles.text}}>Playing Game</Text>
					</ImageBackground>
					<SliderBox autoplay={true} autoplayDelay={500} circleLoop={true} resizeMethod={'resize'} resizeMode={'cover'} imageLoadingColor="#2196F3" ImageComponentStyle={{borderRadius: 0, width: '100%'}} dotColor="rgba(255,255,255,0.6)" inactiveDotColor="rgba(255,255,255,0.3)" images={status.slider2}
					onCurrentImagePressed={index => goViewPage(index)} sliderBoxHeight={170}/>
					<ImageBackground source={require('../../assets/mockup/line.png')} resizeMode='contain' style={{width:'100%', paddingLeft:'2%'}}>
						<Text style={{...styles.text}}>Recommended Games</Text>
					</ImageBackground>
					<FlatList
						horizontal={true}
						data={flexImage}
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={{
							paddingHorizontal: 3
						}}
						keyExtractor={item => item.id}
						style={{marginBottom:'10%'}}
						renderItem={({ item, index }) => (
							<TouchableOpacity activeOpacity={0.9} onPress={index => goViewPage(index)}>
								<Image
									style={{...styles.recommendImage}}
									source={item.image}
								/>
							</TouchableOpacity>
						)}
					/>
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
	title: {
		color:Colors.Primary,
		...gstyle.t2
	},
	text: {
		color: Colors.Light, 
		...gstyle.t3,
		margin:10
	},
	recommendImage: {
		width: 80,
		height: 120,
		marginRight: 15,
		borderRadius:3,
		borderWidth:  1
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
export default Game