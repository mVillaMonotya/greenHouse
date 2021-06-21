import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import ButtonStyles from '../../shared/styles/ButtonStyles';
import LoginStyles from './LoginStyles';

const LoginScreen  = ({navigation}) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const goRegist = () =>{        
        navigation.navigate("Registrer");
    }

    const validation = () => {
        if(email == "admin.123@gmail.com" && password == "123.admin"){
            navigation.navigate("Users");
        }else(alert("Cuenta no encontrada"))
    }

    return(
        <KeyboardAvoidingView style={LoginStyles.container}>
            <View style={LoginStyles.header}>
                <Image style={LoginStyles.logo} source={require('../../shared/img/account.png')}/>
                <Text style={LoginStyles.title}>Login</Text>
                <Text style={LoginStyles.subtitle}>Green House</Text>
            </View>
            <View style={LoginStyles.body}>
                <TextInput style={LoginStyles.input} placeholder="Email" onChangeText={(text)=>setEmail(text)}></TextInput>
                <TextInput style={LoginStyles.input} placeholder="Password" secureTextEntry={true}  onChangeText={(text)=>setPassword(text)}></TextInput>
                <TouchableOpacity style={LoginStyles.recovery}>
                    <Text>Forgot your password?</Text>
                </TouchableOpacity>
                
                <TouchableOpacity  onPress={validation}>
                    <View style={ButtonStyles.large}>
                        <Text style={LoginStyles.textButton}>Login</Text>
                    </View>
                </TouchableOpacity>
                <View style={LoginStyles.option}>
                    <Text>Don't have account?</Text>
                    <TouchableOpacity onPress={goRegist}>
                        <Text style={LoginStyles.registrer}> Registrer</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </KeyboardAvoidingView>
    )

}

export default LoginScreen