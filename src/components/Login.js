import React,{useEffect, useState} from 'react'
import {Keyboard, Text, TouchableOpacity} from 'react-native'
import { ContainerLogin, Input, Title, ButtonSignUp} from './style'

export default function Login ({visible}) {
    const [box, setBox] = useState(-100)
    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow)
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide)
        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow)
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide)
          }
    }, [])
    const _keyboardDidShow = () => {
        setBox(-320)
    }
    const _keyboardDidHide = () => {
       setBox(-100)
      }
    return (
        <ContainerLogin box={box} src={visible}>
            <Title>Welcome</Title>
            <Input placeholder="Name user" placeholderTextColor={"black"}/>
            <Input secureTextEntry={true} placeholder="Password" placeholderTextColor={"black"}/>
            <ButtonSignUp><Text style={{color: "white", fontSize: 20}}>Sign In</Text></ButtonSignUp>
        </ContainerLogin>
    )
}