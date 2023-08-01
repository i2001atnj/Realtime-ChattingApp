import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

export default function SignUpScreen({navigation}) {
  return (
    <SafeAreaView style={styles.SignUpScreen}>
      <View style={{width: '100%', paddingHorizontal: '6%'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={{height: 24, width: 24}} source={require('../assets/backVector.png')}/>
        </TouchableOpacity>
      </View>
      <View style={{width: '100%', alignItems: 'center', paddingHorizontal: '6%', gap: 18}}>
        <Text style={{color: '#FFFFFF', fontSize: 18, fontWeight: 600}}>Sign up with Email</Text>
        <Text style={{color: '#797C7B', textAlign: 'center', fontWeight: 500}}>Get chatting with friends and family today by signing up for our chat app!</Text>
      </View>
      <View style={{width: '100%', gap: 30, paddingHorizontal: '6%'}}>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#595E5C', gap: 16}}>
          <Text style={{color: '#5EBAAE', fontWeight: 500}}>Your name</Text>
          <TextInput style={styles.Input}/>
        </View>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#595E5C', gap: 16}}>
          <Text style={{color: '#5EBAAE', fontWeight: 500}}>Your email</Text>
          <TextInput style={styles.Input}/>
        </View>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#595E5C', gap: 16}}>
          <Text style={{color: '#5EBAAE', fontWeight: 500}}>Password</Text>
          <TextInput style={styles.Input}/>
        </View>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#595E5C', gap: 16}}>
          <Text style={{color: '#5EBAAE', fontWeight: 500}}>Confirm Password</Text>
          <TextInput style={styles.Input}/>
        </View>
      </View>
      <View style={{width: '100%', paddingHorizontal: '6%'}}>
        <TouchableOpacity style={{width: '100%', backgroundColor: '#24786D', paddingVertical: 16, justifyContent: 'center', alignItems: 'center', borderRadius: 15}}>
          <Text style={{fontSize: 16, fontWeight: 600, color: '#FFFFFF'}}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SignUpScreen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0A1832',
    gap: '65%'
  },
  Input: {
    fontSize: 16, 
    color: '#FFFFFF', 
    marginBottom: 12, 
    width: '100%'
  }
})