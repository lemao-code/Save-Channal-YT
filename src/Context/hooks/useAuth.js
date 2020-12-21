import React, {useState, useEffect} from 'react'
import AsyncStorageStatic from '@react-native-async-storage/async-storage'

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [visibleRegister, setVisibleRegister] = useState("none")
    const [visibleLogin, setVisibleLogin] = useState("none")
    const [token, setToken] = useState('')

    useEffect(() => {
        async function getToken () {
            const getToken = await AsyncStorageStatic.getItem('token')
            setToken(getToken)
            console.log(token)
        }
        getToken()
    }, [])


    function handleModalVisible () {
        setModalVisible(true)
    }
    function handleNotModalVisible () {
        setModalVisible(false)
    }

    function handleVisibleRegister () {
        setVisibleRegister("flex")
    }

    function handleNotVisibleRegister () {
        setVisibleRegister("none")
    }

    function handleVisibleLogin () {
        setVisibleLogin("flex")
    }

    function handleNotVisibleLogin () {
        setVisibleLogin("none")
    }

    function handleAuthenticated () {
        setAuthenticated(true)
    }
    return {modalVisible, handleModalVisible, handleNotModalVisible, handleVisibleRegister, handleNotVisibleRegister, handleVisibleLogin, handleNotVisibleLogin, 
            handleAuthenticated, visibleLogin, visibleRegister, authenticated, token }
}