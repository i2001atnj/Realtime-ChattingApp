import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Header, Stories, Chats } from '../components/components'

export default function MessagesScreen() {
  return (
    <SafeAreaView style={styles.MessagesScreen}>
      <Header/>
      <Stories/>
      <Chats/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  MessagesScreen: {
    flex: 1,
    backgroundColor: '#24786D',
    width: '100%',
    gap: '35%'
  },
})