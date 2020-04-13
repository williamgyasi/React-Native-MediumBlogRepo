import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
    TextInput,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import {Button,Icon} from 'native-base'

export default Login =()=>{
    //..
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


    async function LoginUser(){
        await firebase
        .auth()
        .signInWithEmailAndPassword(email.trim(),password)
        .then((user)=>{
            alert('WELCOME')
        })
        .catch((error)=>{
            alert(error)
        })

    }


    return(
        <View style={styles.container}>
            <View style={{
                padding:10,
                
            }}>
            <Text style={{
                fontSize:50,
                textAlign:'center',
                fontWeight:'200'
            }}>
                Login 
            </Text>
            </View>
            

            <View style={styles.forms}>
                <TextInput
                placeholder={'Email'}
                inlineImageLeft={"account"}
                keyboardType="default"
                //..
                onChangeText={(text)=>setEmail(text)}
                value={email}
                style={styles.textinput}>

                </TextInput>

                <TextInput
                placeholder={'Password'}
                secureTextEntry
                inlineImageLeft={"account"}
                keyboardType="default"
                // ...
                onChangeText={(text)=>setPassword(text)}
                value={password}

                style={styles.textinput}>
                </TextInput>
            </View>

            {/* //.. */}

           <Button 
           onPress={()=>LoginUser()}
           style={{
               borderRadius:20,
               padding:10,
               marginTop:30,
               justifyContent:'center',
               backgroundColor:'green'
           }}>
               <Text style={{
                   textAlign:'center',
                   color:'white',
                   fontSize:25,

               }}>
                   LOGIN
               </Text>

           </Button>
        </View>

    )
}

const styles =StyleSheet.create({
    container:{
        padding:20,
        marginVertical:110
    },
    forms:{
        flexDirection:'column',
        
    },
    textinput:{
            fontSize:20,
            fontWeight:'300',
            borderColor:'green',
            borderWidth:3,
            borderRadius:15,
            padding:10,
            marginTop:20,
    }
})