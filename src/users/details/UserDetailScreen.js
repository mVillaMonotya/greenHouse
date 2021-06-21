import React, {useState, useEffect} from 'react';
import {View, Text, Alert, TextInput, ScrollView, ActivityIndicator, Button} from 'react-native';
import firebase from '../../../database/firebase';
import UserDetailStyles from './UserDetailStyles';

const UserDetailScreen = ({navigation, route}) =>{

    const[userDe, setUser] = useState({
        id: "",
        name: "",
        email: "",
        contact: "",
        password:""
    })

    const[loading, setLoading] = useState(true)

    const getUserById = async (id) =>{
        const dbRef = firebase.db.collection('user').doc(id);
        const doc = await dbRef.get();
        const user = doc.data();
        setUser({
            ...user,
            id: doc.id
        })
        setLoading(false)
    }

    useEffect(() => {
        getUserById(route.params.userkey)
        
    }, [])

    const handleChangeText = (name, value) => {
        setUser({...userDe, [name]: value })
    }
    
    if(loading){
        return(
            <View>
                <ActivityIndicator size="large"/>
            </View>
        )
    }

    const deletUser = async () =>{
        const dbRef = firebase.db.collection('user').doc(route.params.userkey);
        await dbRef.delete();
        navigation.navigate("Users")
        
    }

    
    const openConfirmationAlert = () => {
        
        Alert.alert(
          "Removing the User",
          "Are you sure?",
          [
            { text: "Yes", onPress: () => deleteUser() },
            { text: "No", onPress: () => console.log("canceled") },
          ],
          {
            cancelable: true,
          }
        );
      };
    


    return(
        <View style={UserDetailStyles.container}>
            <ScrollView style={UserDetailStyles.container}>
                <View style={UserDetailStyles.inputGroup}>
                    <TextInput value={userDe.userName} placeholder="name" placeholderTextColor="white" onChangeText={(value) => handleChangeText("name", value)}></TextInput>
                </View>
                <View style={UserDetailStyles.inputGroup}>
                    <TextInput value={userDe.userEmail} placeholder="Email" placeholderTextColor="white"></TextInput>
                </View>
                <View style={UserDetailStyles.inputGroup}>
                    <TextInput value={userDe.userContact} placeholder="Contact" placeholderTextColor="white"></TextInput>
                </View>
                <View style={UserDetailStyles.inputGroup}>
                    <TextInput value={userDe.userPassword} placeholder="password" placeholderTextColor="white"></TextInput>
                </View>
                <View>
                    <Button title="Update User"/>
                </View>
                <View>
                    <Button onPress={deletUser} color="red" title="Delet User"/>
                </View>
            </ScrollView>
        </View>
    )
}




export default UserDetailScreen;
