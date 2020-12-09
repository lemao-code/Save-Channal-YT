import React, {useState, useEffect} from 'react'
import {Keyboard, Text, TouchableOpacity} from 'react-native'
import { ContainerRegister, Input, Title, ButtonSignUp} from './style'


export default function Register ({visible}) {
    const [box, setBox] = useState(-100)
    const [name, setName] = useState('')
    const [pass,setPass] = useState('') 
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
        <ContainerRegister  box={box} src={visible}>
            <Title>Create new user</Title>
            <Input value={name} onChangeText={text => setName(text)} placeholder="Name user" placeholderTextColor={"black"}/>
            <Input value={pass} onChangeText={text => setPass(text)}s ecureTextEntry={true} placeholder="Password" placeholderTextColor={"black"}/>
            <ButtonSignUp><Text style={{color: "white", fontSize: 20}}>Sign Up</Text></ButtonSignUp>
        </ContainerRegister>
    )
}