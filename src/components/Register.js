import React, {useState, useEffect} from 'react'
import {Keyboard, Text} from 'react-native'
import { ContainerRegister, Input, Title, ButtonSignUp} from './style'
import getRealm from '../services/realm'
import uniqueId from 'react-native-unique-id'
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
    async function saveUser(name,pass) {
        const data = {
            name: name,
            pass: pass,
            id: "8"
        }
        try {
            const realm = await getRealm()
            realm.write(() => {
                realm.create('user',data)
        })
        setName("")
        setPass("")
        alert("Conta criada com sucesso!")
        Keyboard.dismiss()
        }catch(err) {
            alert(err)
        }
    }
    return (
        <ContainerRegister  box={box} src={visible}>
            <Title>Create new user</Title>
            <Input value={name} onChangeText={text => setName(text)} placeholder="Name user" placeholderTextColor={"black"}/>
            <Input value={pass} onChangeText={text => setPass(text)} secureTextEntry={true} placeholder="Password" placeholderTextColor={"black"}/>
            <ButtonSignUp onPress={() => saveUser(name,pass)}><Text style={{color: "white", fontSize: 20}}>Sign Up</Text></ButtonSignUp>
        </ContainerRegister>
    )
}