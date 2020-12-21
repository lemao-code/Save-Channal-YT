import React from 'react'
import {Text, View, Image, StyleSheet} from 'react-native'


export default function ListChannels ({channels}) {
    console.log(channels.data.items)
  return (
      <View>
          {channels.data.items.map((element,i) => {
              return (
                  <View key={i}>
                      <Text style={{color: "black", fontSize: 24}}>{element.snippet.title}</Text>
                      <Image style={styles.img} source={{
                          uri: element.snippet.thumbnails.default.url
                      }} />
                    </View>
              )
          })}
      </View>
  )
}

const styles = StyleSheet.create({
    img: {
        width: 96,
        height: 96,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10
        
    }
})
