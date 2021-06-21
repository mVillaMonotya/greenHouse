import React, {useState, useEffect} from 'react';
import {ScrollView, Button} from 'react-native';
import UserStyles from './UserStyles';
import firebase from '../../database/firebase';
import { ListItem, Avatar } from 'react-native-elements';


const UsersScreen = ({navigation}) => {

    const [users, setUsers ] = useState([])

    useEffect(() => {
        firebase.db.collection('user').onSnapshot(querySnapshot => {
            const reUsers = [];

            querySnapshot.docs.forEach((doc) => {
                const {userName, userEmail, userContact, userPassword} = doc.data()
                reUsers.push({
                    id: doc.id,
                    userName,
                    userEmail,
                    userContact,
                    userPassword
                })
            });
            setUsers(reUsers)
            setLoading(false)            
        })
    }, [])

    const goBack = () =>{
        navigation.navigate("Login")
    }
    const[loading, setLoading] = useState(true)
    

    return(
        <ScrollView style={UserStyles.container}>
            <Button title="back" onPress={goBack}/>
            {
                users.map(user => {
                    return (
                        <ListItem
                          key={user.id}
                          bottomDivider
                          onPress={() => navigation.navigate('UserDetails', {userkey: user.id})}>
                            <ListItem.Chevron/>
                            <Avatar rounded source={{uri:'https://reactnativeelements.com/img/avatar/avatar--photo.jpg',}}/>
                            <ListItem.Content>
                                <ListItem.Title>{user.userName}</ListItem.Title>
                                <ListItem.Subtitle>{user.userEmail}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                      );
                })
            }
        </ScrollView>

    );
};


export default UsersScreen;

