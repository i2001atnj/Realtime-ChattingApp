import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Searchbar, Stories } from '../components/components'

export default function MessagesScreen() {
  return (
    <SafeAreaView style={styles.MessagesScreen}>
      <Searchbar/>
      <Stories/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  MessagesScreen: {
    flex: 1,
    backgroundColor: '#24786D',
    alignItems: 'center',
    width: '100%',
  },
})