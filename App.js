    import { StatusBar } from 'expo-status-bar';
    import React, { useState } from 'react';
    import { StyleSheet, Text, View } from 'react-native';
    import NotesScreenComponent from './src/NotesScreenComponent';
    import firebase from 'firebase';
    import LoginScreenComponent from './src/LoginScreenComponent';
    
    export default function App() {
      const [userLoggedIn, setUserLoggedIn] = useState(false)
      
      if(firebase.apps.length === 0){
        var firebaseConfig = {
      apiKey: " ",
      authDomain: "appproject-6859.firebaseapp.com",
      databaseURL: "https://appproject-6859.firebaseio.com",
      projectId: "appproject-6859",
      storageBucket: "appproject-6859.appspot.com",
      messagingSenderId: "889210224612",
      appId: "1:889210224612:web:8bfc1a8b2534ccccdcd1f1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
      }
    
      firebase.auth().onAuthStateChanged((user) => {
        if(user === null) {
          setUserLoggedIn(false)
        } else {
          setUserLoggedIn(true)
        }
      })
    
      if(userLoggedIn) {
        return (
          <View style={styles.container}>
            <NotesScreenComponent/>
          </View>
        );
      } else {
        return (
          <View style={styles.container}>
            <LoginScreenComponent/>
          </View>
        );
      }
    
    
      return (
        <View style={styles.container}>
          {/* <NotesScreenComponent/> */}
          <LoginScreenComponent/>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });