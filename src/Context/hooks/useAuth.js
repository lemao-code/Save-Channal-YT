import React, {useState} from 'react'


export default function useAuth() {
    const [modalVisible, setModalVisible] = useState(false)
    const [visibleRegister, setVisibleRegister] = useState("none")
    const [visibleLogin, setVisibleLogin] = useState("none")
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
    return {modalVisible, handleModalVisible, handleNotModalVisible, handleVisibleRegister, handleNotVisibleRegister, handleVisibleLogin, handleNotVisibleLogin, 
            visibleLogin, visibleRegister }
}