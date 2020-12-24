import React, {useContext} from 'react'
import SearchChannel from './searchChannel'
import Home from './Home'
import {Context} from '../Context/AuthContext'

export default function Conditional ({navigation}) {
    
    const { token } = useContext(Context)
    if(token == null) {
        return <Home navigation={navigation} />
    }else {
        return <SearchChannel navigation={navigation}/>
    }
}