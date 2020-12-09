import React, { useState} from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import {Container, Button} from './style'
import ComponentModal from './ComponentModal'
import { Modal } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export default function Home () {
    const [modalVisible, setModalVisible] = useState(false)
    const [visibleRegister, setVisibleRegister] = useState("none")
    const [visibleLogin, setVisibleLogin] = useState("none")
    const [buttonVisible, setButtonVisible] = useState("flex")


    return (
        <Container>
            <Button onPress={() => {
                setButtonVisible("none")
                setModalVisible(true)
                setVisibleLogin("flex")}} 
                src={buttonVisible} >
                <Text style={{fontWeight: "bold", color: "black", fontSize: 25}}>
                    Sign In
                </Text>
            </Button>

            <Button src={buttonVisible} onPress={() => {
                setButtonVisible("none")
                setModalVisible(true)
                setVisibleRegister("flex")}}>

                <Text style={{fontWeight: "bold", color: "black", fontSize: 25}}>
                    Sign Up
                </Text>
            </Button>
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}>
                    <View style={{
                width: "100%",
                position: "absolute",
                marginTop: 150,
                marginLeft: 20,
            }}>
                <TouchableOpacity onPress={() =>{
                    setButtonVisible("flex")
                     setModalVisible(false)
                     setVisibleLogin("none")
                     setVisibleRegister("none")
                }} style={{width: 100,height: 60}}>
                    <Icon name="arrowleft" size={30} color="white" />
                </TouchableOpacity>
            </View>
               <ComponentModal visibleRegister={visibleRegister} visibleLogin={visibleLogin}/>

            </Modal>
        </Container>
    )
}