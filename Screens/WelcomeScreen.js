import React from 'react'
import {Text,View,TextInput, TouchableOpacity} from 'react-native'

export default class WelcomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
     userSignUp = (email,password)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((response)=>{
            return Alert.alert("User Added Successfully")
        })
        .catch(function(error){
            // handle errors here.
             var errorCode = error.code;
             var errorMessage = error.message;
             return Alert.alert(errorMessage)
        });
        db.collection('users').add({
            first_name:this.state.firstName,
            last_name:this.state.lastName,
            mobile_number:this.state.contact,
            username:this.state.emailId,
            address:this.state.address
        })
    }
    userLogin = (email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
            //return Alert.alert("Successfully Login")
            this.props.navigation.navigate('DonateBooks')
        })
        .catch((error)=>{
            // handle errors here.
             var errorCode = error.code;
             var errorMessage = error.message;
             return Alert.alert(errorMessage)
        });
    }
    render(){
        return(
            <View>
        <TextInput
        style={styles.formTextInput}
        placeholder={'email'}
        keyboardType={'email-address'}
        onChangeText={(text)=>{
        this.setState({
        emailId:text
        })
    }}/>
       <TextInput
        style={styles.formTextInput}
        placeholder={'password'}
        secureTextEntry={true}
        onChangeText={(text)=>{
        this.setState({
        password:text
        })
    }}/>
     <View>     
    <TouchableOpacity style={styles.button}>
    <Text>Sign Up</Text>
    </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity style={styles.button}>
    <Text>Login</Text>
    </TouchableOpacity>
    </View>
            </View>
        )
    }
}