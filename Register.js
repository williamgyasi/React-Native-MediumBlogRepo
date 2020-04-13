import React,{useState,useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
    TextInput,
} from 'react-native';
import {Button,Icon} from 'native-base'

export default Register =({navigation})=>{
    const firestore_ref=firestore().collection('Users')
    //..
    const [fullname,setFullName]=useState('')
    const [displayname,setDisplayName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')

    //..
    async function RegisterUser(){
        await firebase
        .auth()
        .createUserWithEmailAndPassword(email.trim(),password)
        .then((loggeduser)=>{
            const userdata=firestore_ref.doc(loggeduser.user.uid)
            userdata.set({
                name:fullname,
                email:email,
                phonenumber:phoneNumber
            }).then(()=>{
                alert('sucesss')
                
            })
        })
        .catch((error)=>{
            alert(error)
        })

    }

     

    return(
        <View style={styles.container}>
            <View style={{
                padding:10,
              
                marginLeft:50,
            }}>
            <Text style={{
                fontSize:50,
                textAlign:'center',
                fontWeight:'200'
            }}>
Register            </Text>
            </View>
            
            <View style={styles.forms}>
            <TextInput
                placeholder={'Full Name'}
                inlineImageLeft={"account"}
                keyboardType="default"
                //..
                onChangeText={(text)=>setFullName(text)}
                value={fullname}
                style={styles.textinput}>
                </TextInput>
                
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
                inlineImageLeft={"account"}
                secureTextEntry
                //...
                onChangeText={(text)=>setPassword(text)}
                value={password}
                keyboardType="default"
                style={styles.textinput}>
                </TextInput>

                <TextInput
                placeholder={'Phone Number'}
                inlineImageLeft={"account"}
                keyboardType="numeric"
                //..
                onChangeText={(text)=>setPhoneNumber(text)}
                value={phoneNumber}
                style={styles.textinput}>
                </TextInput>

                {/* //.. */}
                <Button
                onPress={()=>RegisterUser()}
                style={{
                    borderRadius:20,
                    padding:10,
                    marginTop:30,
                    justifyContent:'center',
                    backgroundColor:'green'
                }}
           >
               <Text style={{
                   textAlign:'center',
                   color:'white',
                   fontSize:25,

               }}>
                   Sign Up
               </Text>

           </Button>
            </View>
           
        </View>

    )
}

const styles =StyleSheet.create({
    container:{
        padding:20,
        flex:1,
        marginVertical:110
    },
    forms:{
        flexDirection:'column',
        flex:1,
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