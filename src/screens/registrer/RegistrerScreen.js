import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView} from 'react-native';
import ButtonStyles from '../../shared/styles/ButtonStyles';
import RegistrerStyles from './RegistrerStyles';
import firebase from '../../../database/firebase';

const RegistrerScreen  = ({navigation}) =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");

    const goLogin = () =>{        
        navigation.navigate("Login");
    }
    
           

    const addNewUser = async () => {
        if(name == "" || name == null){
            Alert.alert("notice","you must complete all fields")
        }else if( email == "" || email == null){
            Alert.alert("notice","you must complete the email, contact and password fields")
        }else if( contact == "" || contact == null){
            Alert.alert("notice","you must complete the contact and password fields")
        }else if( password == "" || password == null){
            Alert.alert("notice","you must complete the password fields")
        }else{
            await firebase.db.collection('user').add({
                userName: name, 
                userEmail: email,
                userContact: contact,
                userPassword: password,
            })
            navigation.navigate("Users");
        }
    }

    return(
        <KeyboardAvoidingView style={RegistrerStyles.container}>
            <View style={RegistrerStyles.header}>
                <Text style={RegistrerStyles.title}>Registrer</Text>
                <Text style={RegistrerStyles.subtitle}>Green House</Text>
            </View>
            <View style={RegistrerStyles.body}>
                <TextInput style={RegistrerStyles.input} placeholder="Name" onChangeText={(text)=>setName(text)}></TextInput>
                <TextInput style={RegistrerStyles.input} placeholder="Email" onChangeText={(text)=>setEmail(text)}></TextInput>
                <TextInput style={RegistrerStyles.input} placeholder="Contact" onChangeText={(text)=>setContact(text)} keyboardType="number-pad"></TextInput>
                <TextInput style={RegistrerStyles.input} placeholder="Password" secureTextEntry={true} onChangeText={(text)=>setPassword(text)}></TextInput>
                
                <TouchableOpacity onPress={addNewUser}>
                    <View style={ButtonStyles.large}>
                        <Text style={RegistrerStyles.textButton}>Registrer</Text>
                    </View>
                </TouchableOpacity>
                <View style={RegistrerStyles.option}>
                    <Text>Don't have account?</Text>
                    <TouchableOpacity onPress={goLogin}>
                        <Text style={RegistrerStyles.registrer}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </KeyboardAvoidingView>
    )

}

export default RegistrerScreen