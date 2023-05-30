import React from "react";
import { ImageBackground, View, Text } from "react-native"; 
import Spinner from 'react-native-loading-spinner-overlay';
import theme, { Colors, DefaultButton} from './Theme'; 
import useStore from '../useStore';

const Layout = (props:any) => {
	
	const {loading} = useStore();
	return (
		<View style={{backgroundColor: Colors.Light}}>
			{props.children}
			<Spinner visible = {loading} />
		</View>
	)
}

export default Layout;