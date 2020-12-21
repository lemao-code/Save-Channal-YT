import React from 'react'
import {AuthProvider} from './Context/AuthContext'
import Routes from './routes'
export default function App () {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    )
}