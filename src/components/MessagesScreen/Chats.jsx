import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { CHATS } from '../../data/chats'

export default function Chats() {
    let onlineStatus = require('../../assets/online.png')
    let offlineStatus = require('../../assets/offline.png')
    return (
        <View style={styles.Chats}>
            <TouchableOpacity style={styles.ChatsHeader}>
                <Image style={{height: 5, width: 50}} source={require('../../assets/rectangle.png')}/>
            </TouchableOpacity>
            <ScrollView>
                {CHATS.map((chat) => (
                    <TouchableOpacity key={chat.id} style={styles.Chat}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12}}>
                            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                                <Image source={chat.contactPhoto}/>
                                <Image style={{position: 'absolute', left: '80%'}} source={chat.online ? onlineStatus : offlineStatus} />
                            </View>
                            <View>
                                <Text style={{color: '#FFFFFF', fontWeight: 600, fontSize: 20}}>{chat.contactName}</Text>
                                <Text style={{color: '#797C7B', fontWeight: 300}}>{chat.lastMessage}</Text>
                            </View>
                        </View>
                        <View style={{alignItems: 'center', gap: 5}}>
                            <Text style={{color: '#797C7B', fontWeight: 300}}>{chat.lastMessageDate}</Text>
                            { 
                            !chat.read ?
                                <View style={styles.NewMessageIndicator}>
                                    <Text>{chat.newMessages}</Text>
                                </View>
                                :
                                <></>
                            }
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
  )
}

const styles = StyleSheet.create({

    Chats: {
        backgroundColor: '#0A1832',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        flex: 1,
        
    },
    ChatsHeader: {
        paddingTop: 20,
        paddingHorizontal: 30,
        width: '100%',
        alignItems: 'center',
    },
    Chat: {
        paddingVertical: 5,
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingVertical: 20,
        alignItems: 'center'
    },
    NewMessageIndicator: {
        backgroundColor: '#02FF3A',
        width: 21,
        height: 21,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})