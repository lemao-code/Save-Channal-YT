import React, {createContext, useState} from 'react'
import useAuth from './hooks/useAuth'

const Context = React.createContext()


function AuthProvider({children}) {
    const {modalVisible, handleModalVisible, handleNotModalVisible, handleVisibleLogin, handleNotVisibleLogin, handleVisibleRegister, handleNotVisibleRegister, visibleLogin, visibleRegister} = useAuth()
    return (
        <Context.Provider value={{modalVisible, handleModalVisible, handleNotModalVisible, handleVisibleLogin, handleNotVisibleLogin, handleVisibleRegister, handleNotVisibleRegister, visibleLogin, visibleRegister}}>
            {children}
        </Context.Provider>
    )
}

export {Context, AuthProvider}