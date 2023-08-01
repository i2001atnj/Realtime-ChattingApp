import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Searchbar() {
  return (
    <View style={styles.Searchbar}>
        <TouchableOpacity style={styles.SearchButton}>
            <Image source={require('../../assets/searchVector.png')}/>
        </TouchableOpacity>
        <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: 500}}>Home</Text>
        <TouchableOpacity>
            <Image source={require('../../assets/profilePhoto.png')} style={{height: 40, width: 40}}/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    Searchbar: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: '5.5%'
    },
    SearchButton: {
        backgroundColor: '#0A1832',
        height: 44,
        width: 44,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 50
    }
})