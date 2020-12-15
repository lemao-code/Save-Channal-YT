import React from 'react'
import { Keyboard, TouchableWithoutFeedback, TouchableOpacity, View} from 'react-native'
import { ModalContainer } from './style'
import Register from './Register'
import Login from './Login'


export default function ComponentModal ({visibleRegister, visibleLogin, navigation}) {
    return  (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ModalContainer >
            <Register navigation={navigation} visible={visibleRegister} />
            <Login navigation={navigation} visible={visibleLogin} />
        </ModalContainer>
        </TouchableWithoutFeedback>
    )
}