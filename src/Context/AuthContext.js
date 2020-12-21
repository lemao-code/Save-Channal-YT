import React, {createContext} from 'react'
import useAuth from './hooks/useAuth'

const Context = createContext()


function AuthProvider({children}) {
    const {modalVisible, handleModalVisible, handleNotModalVisible, handleVisibleLogin, handleNotVisibleLogin, handleVisibleRegister, handleNotVisibleRegister, 
            handleAuthenticated, authenticated, visibleLogin, visibleRegister, token} = useAuth()
    return (
        <Context.Provider value={{modalVisible, authenticated, token, handleAuthenticated, handleModalVisible, handleNotModalVisible, handleVisibleLogin, handleNotVisibleLogin, handleVisibleRegister, handleNotVisibleRegister, visibleLogin, visibleRegister}}>
            {children}
        </Context.Provider>
    )
}

export {Context, AuthProvider}