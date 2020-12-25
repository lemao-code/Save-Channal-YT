import React, {useState, useEffect} from 'react'
import AsyncStorageStatic from '@react-native-async-storage/async-storage'
import getRealm from '../../services/realm'

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [visibleRegister, setVisibleRegister] = useState("none")
    const [visibleLogin, setVisibleLogin] = useState("none")
    const [headerVisible, setHeaderVisible] = useState(true)
    const [token, setToken] = useState('')

    useEffect(() => {
        async function getToken () {
            const getToken = await AsyncStorageStatic.getItem('token')
            setToken(getToken)
        }
        getToken()
    }, [])

    function searchVisibleHeader () {
        setHeaderVisible(false)
    }
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

    async function saveFav (name,imgUrl, idChannel) {
    
        try {
            const realm = await getRealm()
            realm.write(() => {
            realm.create('fav', {
                name: name,
                idChannel: idChannel,
                img: imgUrl
            })
            })
            alert(`Channel: ${name} added in favourites`)
        }catch(err) {
            return alert(`Error ao salvar canal favoritos ${err}`)
        }

    }

    async function deleteFav (idChannel) {
        try{
            const realm = await getRealm()
            const fav = realm.objects('fav').filtered(`idChannel = "${idChannel}"`)
            realm.write(() =>{
                realm.delete(fav)
            })
            alert("Favorito deletado")
        }catch(err) {
            return alert(`Erro ao deletar favorito : ${err}`)
        }
    }
    return {modalVisible, handleModalVisible, handleNotModalVisible, handleVisibleRegister, handleNotVisibleRegister, handleVisibleLogin, handleNotVisibleLogin, 
            handleAuthenticated, searchVisibleHeader, saveFav, deleteFav, headerVisible ,visibleLogin, visibleRegister, authenticated, token }
}