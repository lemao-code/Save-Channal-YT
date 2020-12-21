import React, { useState, useContext } from 'react'
import { Text, View,TouchableOpacity, Modal} from 'react-native'
import {Container, Button} from './style'
import ComponentModal from './ComponentModal'
import {Context} from '../Context/AuthContext'
import Icon from 'react-native-vector-icons/AntDesign'

export default function Home ({navigation}) {
    const {modalVisible, handleModalVisible, handleNotModalVisible, visibleRegister, visibleLogin, handleVisibleLogin, handleVisibleRegister, handleNotVisibleLogin, 
            handleNotVisibleRegister, token} = useContext(Context)
    const [buttonVisible, setButtonVisible] = useState("flex")

   return (
    <Container>
        <Button onPress={() => {
            setButtonVisible("none")
            handleModalVisible()
            handleVisibleLogin()}} 
            src={buttonVisible} >
            <Text style={{fontWeight: "bold", color: "black", fontSize: 25}}>
                Sign In
            </Text>
        </Button>

        <Button src={buttonVisible} onPress={() => {
            setButtonVisible("none")
            handleModalVisible()
            handleVisibleRegister()}}>
            <Text style={{fontWeight: "bold", color: "black", fontSize: 25}}>
                Sign Up
            </Text>
        </Button>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        alert("Modal has been closed.");}}>
            <View style={{
                width: "100%",
                position: "absolute",
                marginTop: 150,
                marginLeft: 20,
            }}>
            <TouchableOpacity onPress={() =>{
                setButtonVisible("flex")
                handleNotModalVisible()
                handleNotVisibleRegister()
                handleNotVisibleLogin()
            }} style={{width: 100,height: 60}}>
                <Icon name="arrowleft" size={30} color="white" />
            </TouchableOpacity>
            </View>
            <ComponentModal navigation={navigation} visibleRegister={visibleRegister} visibleLogin={visibleLogin}/>

        </Modal>
    </Container>
   )
   
}