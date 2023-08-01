import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function OnboardingScreen({navigation}) {
  return (
    <SafeAreaView style={styles.OnboardingScreen}>
      <View style={styles.Header}>
        <Image source={require('../assets/logo.png')}/>
        <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: 'bold'}}>Chatbox</Text>
      </View>
      <View style={{paddingHorizontal: '6%'}}>
        <Text style={{fontSize: 68, color: '#FFFFFF'}}>Connect</Text>
        <Text style={{fontSize: 68, color: '#FFFFFF'}}>friends</Text>
        <Text style={{fontSize: 68, color: '#FFFFFF', fontWeight: '600'}}>easily &</Text>
        <Text style={{fontSize: 68, color: '#FFFFFF', fontWeight: '600'}}>quick</Text>
        <Text style={{fontSize: 16, fontWeight: '500', color: '#B9C1BE', marginTop: 16}}>Our chat app is the perfect way to stay connected with friends and family.</Text>
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
      <View style={{width: '100%', paddingHorizontal: '6%'}}>
        <TouchableOpacity style={styles.SignUpWithMailButton} onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={{fontSize: 16, fontWeight: 500, color: '#000000'}}>SIGN UP WITH MAIL</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: '#B9C1BE'}}>Existing account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#FFFFFF', marginLeft: 10}}>Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  OnboardingScreen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0A1832',
    gap: '45%'
  },
  Header: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 6,
    width: '100%',
    paddingHorizontal: '6%'
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
  SignUpWithMailButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
  }
})