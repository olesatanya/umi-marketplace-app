import React from "react";
import { StyleSheet,  TouchableOpacity, View ,Modal, Text} from "react-native";  
import {LineChart} from "react-native-chart-kit";
  
import { Colors, w, h, gstyle} from '../Theme'; 

interface ModalProps {
    type?: number
    onClose?: Function
}

interface ModalStatus {
    type: number
}


const data = {
	labels: ["", "", "", "", "", ""],
	datasets: [
	  {
		data: [20, 45, 28, 80, 99, 43],
		color: (opacity = 1) => Colors.Black,
		strokeWidth: 2 // optional
	  }
	]
  };

  const chartConfig = {
	backgroundGradientFrom: Colors.Light,
	backgroundGradientFromOpacity: 0,
	backgroundGradientTo: Colors.Light,
	backgroundGradientToOpacity: 0.5,
	color: (opacity = 1) => Colors.Black,
	strokeWidth: 1
  };

const DetailsModal = ({type=1, onClose}:ModalProps) => {
	const modalType = type;
    const [status, setStatus] = React.useState<ModalStatus>({
        type:1
    })
	const updateStatus = (params:{[key:string]:string|number|boolean}) => setStatus({...status, ...params});

    return (
       <>
            <Modal style = {{height : '100%'}} animationType="fade" visible={true} transparent={true} onRequestClose={() => onClose && onClose()}>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={{...styles.justify}}>
                            <Text style={{...styles.title}}>Detail2</Text>
                            <TouchableOpacity activeOpacity={0.9} style={styles.closeBtn} onPress={() => {onClose?onClose():null}}><Text style={{textAlign:'center'}}>&times;</Text></TouchableOpacity>
                        </View>
                        <Text style={{...gstyle.t2, textAlign:'right', marginTop:20}}>
							300.23 UMI
						</Text>
                        <Text style={{...gstyle.t0, textAlign:'center', marginTop:20}}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						</Text>
						<LineChart
							data={data}
							width={w('90%')}
							height={150}
							verticalLabelRotation={20}
							chartConfig={chartConfig}
							bezier
							withVerticalLabels={false}
							withHorizontalLabels={false}
							withInnerLines={false}
							style={{marginTop:20}}
							/>
                        <Text style={{...gstyle.t0, textAlign:'center', marginTop:20}}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip .</Text>
                        <Text style={{...gstyle.t, color:Colors.Red, textAlign:'center', marginTop: 20}}>Filterに記載されている要素</Text>
                        <Text style={{...gstyle.t, color:Colors.Red, textAlign:'center'}}>取引遷移</Text>
                        <Text style={{...gstyle.t0, textAlign:'center', marginTop:20}}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip .</Text>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({ 
	title: {
		color:Colors.Black,
		...gstyle.t3
	},
	text: {
		color: Colors.Light, 
		...gstyle.t3,
		margin:10
	},
	modal: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
        backgroundColor: Colors.Light
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
	modalContent: {
        width: w('90%'),
        borderRadius: 5,
        color: Colors.Black,      
        backgroundColor: Colors.Light,
        padding: 20,
        paddingTop: 25
	},
	closeBtn: {
        width:'10%',
        color: Colors.Black,
        backgroundColor: Colors.LightDark,
        borderRadius: 3,
        borderColor: Colors.Grey,
        borderWidth:1,
        paddingTop:0,
        paddingBottom:0,
        ...gstyle.t1,
        marginLeft:'auto'
	},
	justify: {
		display: 'flex',
		alignContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems:	'center',
		justifyContent: 'space-between'
	}
});
export default DetailsModal;