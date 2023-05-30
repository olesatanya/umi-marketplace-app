import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View ,Modal, Text} from "react-native";  
import { Colors, w, h, gstyle} from '../Theme'; 

interface ModalProps {
    type?: number
    onClose?: Function
}

interface ModalStatus {
    type: number
	error: string
    showConfirmModal: boolean
}

const SettingModal = ({type=1, onClose}:ModalProps) => {
	const modalType = type;
    const [status, setStatus] = React.useState<ModalStatus>({
        type:1,
		error: '',
        showConfirmModal: false
    })
	const updateStatus = (params:{[key:string]:string|number|boolean}) => setStatus({...status, ...params});

    const startSelling  = ()=> {updateStatus({showConfirmModal: true})}
    const startLeasing  = ()=> {updateStatus({showConfirmModal: true})}
    const stopSelling   = ()=> {updateStatus({showConfirmModal: true})}
    const stopLeasing   = ()=> {updateStatus({showConfirmModal: true})}

    const confirm = () => {
        updateStatus({showConfirmModal: false});
    }

    const clickEvents = {
        "a1": startSelling,
        "a2": startLeasing,
        "a3": stopSelling,
        "a4": stopLeasing,
    }

    const btnTitles = {
        "a1": "Sell Confirm", 
        "a2": "Lease Confirm", 
        "a3": "Stop Selling", 
        "a4": "Stop Lease"
    }
    const titles = {
        "a1": "Sell",
        "a2": "Lease",
        "a3": "Sell",
        "a4": "Lease"
    }

    return (
       <>
            <Modal style = {{height : '100%'}} animationType="fade" visible={true} transparent={true} onRequestClose={() => onClose && onClose()}>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={{...styles.justify}}>
                            <Text style={{...styles.title}}>{titles['a'+modalType]} Settings</Text>
                            <TouchableOpacity activeOpacity={0.9} style={styles.closeBtn} onPress={() => {onClose?onClose():null}}><Text style={{textAlign:'center'}}>&times;</Text></TouchableOpacity>
                        </View>
                        <Text style={{...gstyle.t0, textAlign:'center', marginTop:20}}>Average price in the market</Text>
                        <Text style={{...styles.title, textAlign:'center', marginTop:10}}>288.34 ~ 345.45 UMI</Text>
                        <Text style={{...gstyle.t0, textAlign:'center', marginTop:10, marginBottom: 20}}>{titles['a'+modalType]} Price</Text>
                        <View style={{width:'60%', borderBottomColor:Colors.LightDark, borderWidth:1, marginLeft: 'auto', marginRight:'auto'}}></View>
                        <Text style={{...gstyle.t, color:Colors.Red, textAlign:'center', marginTop: 20}}>設定項目</Text>
                        <Text style={{...gstyle.t, color:Colors.Red, textAlign:'center'}}>価格設定</Text>
                        <Text style={{...gstyle.t, color:Colors.Red, textAlign:'center'}}>出品参考価格など</Text>
                        <View style={{...styles.justify}}>
                            <TouchableOpacity activeOpacity={0.9} style={{...styles.playBtn, marginTop:20}} onPress={() => {clickEvents['a'+modalType]()}}>
                                <Text style={{textAlign:'center'}}>{btnTitles['a'+modalType]}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            {
                status.showConfirmModal?(
                    <Modal style = {{height : '100%'}} animationType="fade" visible={true} transparent={true} onRequestClose={() => onClose && onClose()}>
                        <View style={styles.modal}>
                            <View style={{...styles.modalContent, flexDirection:'column', justifyContent:'center', borderColor:Colors.Grey, borderRadius:5, borderWidth:1, margin:10}}>
                                <Text style={{textAlign:'center', ...gstyle.t3, color:Colors.Black}}>{btnTitles['a'+modalType]}</Text>
                                <Text style={{...gstyle.t, color:Colors.Red, textAlign:'center', marginTop:20}}>Sellをやめました</Text>
                                <Text style={{...gstyle.t, color:Colors.Red, textAlign:'center'}}>Marketから取り下げます</Text>
                                <View style={{...styles.justify}}>
                                    <TouchableOpacity activeOpacity={0.9} style={{...styles.playBtn, marginTop:20}} onPress={() => {confirm()}}>
                                        <Text style={{textAlign:'center'}}>OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                ):(
                    null
                )
            }
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
        padding: 10,
        paddingTop: 25
	},
	closeBtn: {
		// position: 'absolute',
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
export default SettingModal;