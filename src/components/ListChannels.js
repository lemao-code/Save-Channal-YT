import React, {useState, useContext , useEffect} from 'react'
import {Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { ContainerList } from './style'




export default function ListChannels ({channels}) {
    // const totalResults = channels.data.pageInfo.resultsPerPage
    const totalResults = 50
    const [perPage, setPerPage ] = useState(10)
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(Math.ceil(totalResults/perPage))
    const [nextButton, setNextButton] = useState("flex")
    const [previousButton, setPreviousButton] = useState("none")

    useEffect(() => {
        if(page > 1 ) {
            setPreviousButton("flex")
        }else {
            setPreviousButton("none")
        }
       if(page == totalPage) {
        setNextButton("none")
       }else {
           setNextButton("flex")
       }
       
    }, [page])

    const controls = {
        next () {
            setPage((prevState) => prevState + 1)
            
        },
        prev () {
            setPage((prevState) => prevState - 1 )
            
            
        }
        
    }


    const renderItem = ({item}) => {
        return (
            <ContainerList  >
                 {/* <Image style={styles.img} source={{ uri: element.snippet.thumbnails.default.url }} /> */}
                 <Image style={styles.img} />
                <Text style={{color: "black", fontSize: 20, marginLeft: 20, marginTop: 15}}>{item.name }</Text>             
            </ContainerList>
        )
    }

    const list = {
        update() {
            let _page = page - 1
            let start = _page * perPage
            let end = _page + perPage
            // const paginatedItems = channels.data.items.slice(start,end)
            const paginatedItems = channels.slice(start,end)
            // console.log("////////////////////////////////////////////////////////////")
            // console.log(paginatedItems)
            // list.create(paginatedItems)
            return  (
                <View >
                   <FlatList data={paginatedItems} renderItem={renderItem} keyExtractor={(item) => item.id} />
                </View>
            )
        }
    }
    return (
        <ScrollView >
              <View style={{paddingBottom: 250,borderBottomColor: "black", borderBottomWidth: 2}}>
              {list.update()}
            <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                
                <TouchableOpacity style={{display: `${previousButton}`}}  onPress={() => controls.prev()}>
                    <Text style={{fontSize: 20, color: "red"}}> Previous </Text>
                </TouchableOpacity>
                <Text style={{color: "black", fontSize: 30, marginLeft: 20, marginRight: 20 , borderBottomColor: "black", borderBottomWidth: 1}}>{page}</Text>
                <TouchableOpacity  style={{display: `${nextButton}`}} onPress={() => controls.next()}>
                    <Text style={{fontSize: 20, color: "green"}}>Next</Text>
                </TouchableOpacity>
            </View>
            <View ><Text style={{marginLeft: 5, marginTop: 10, fontSize: 20}}>Total de paginas {totalPage}</Text></View>
            </View>
            
        </ScrollView>
    )
    }


const styles = StyleSheet.create({
    img: {
        width: 56,
        height: 56,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 5
        
    }
})
