import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

export default function LoginScreen({navigation}) {
  return (
    <SafeAreaView style={styles.LoginScreen}>
      <View style={{width: '100%', paddingHorizontal: '6%'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/backVector.png')}/>
        </TouchableOpacity>
      </View>
      <View style={{width: '100%', paddingHorizontal: '6%', alignItems: 'center', gap: 19}}>
        <Text style={{color: '#FFFFFF', fontSize: 18, fontWeight: 600}}>Log in to Chatbox</Text>
        <Text style={{color: '#797C7B', textAlign: 'center', fontWeight: 500}}>Welcome back! Sign in using your social account or email to continue us</Text>
      </View>
      <View style={{flexDirection: 'row', gap: 22}}>
        <TouchableOpacity style={styles.RoundedButton}>
          <Image source={require('../assets/facebookLogo.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.RoundedButton}>
          <Image source={require('../assets/googleLogo.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.RoundedButton}>
          <Image source={require('../assets/appleLogo.png')}/>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', gap: 15, width: '100%', paddingHorizontal: '6%', alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../assets/divider.png')} style={{width: '40%'}}/>
        <Text style={{fontSize: 15, fontWeight: 500, color: '#D6E4E0'}}>OR</Text>
        <Image source={require('../assets/divider.png')} style={{width: '40%'}}/>
      </View>
      <View style={{width: '100%', gap: 30, paddingHorizontal: '6%'}}>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#595E5C', gap: 16}}>
          <Text style={{color: '#5EBAAE', fontWeight: 500}}>Your email</Text>
          <TextInput style={styles.Input}/>
        </View>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#595E5C', gap: 16}}>
          <Text style={{color: '#5EBAAE', fontWeight: 500}}>Password</Text>
          <TextInput style={styles.Input}/>
        </View>
      </View>
      <View style={{width: '100%', paddingHorizontal: '6%', gap: 16, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeStack')} style={{width: '100%', backgroundColor: '#24786D', paddingVertical: 16, justifyContent: 'center', alignItems: 'center', borderRadius: 15}}>
          <Text style={{fontSize: 16, fontWeight: 600, color: '#FFFFFF'}}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color: '#5EBAAE', fontWeight: 500}}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  LoginScreen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0A1832',
    gap: '65%'
  },
  RoundedButton: {
    backgroundColor: '#000000',
    borderColor: '#A8B0AF',
    borderWidth: 1,
    borderRadius: 100,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Input: {
    fontSize: 16, 
    color: '#FFFFFF', 
    marginBottom: 12, 
    width: '100%'
  }
})