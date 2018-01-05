import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCLvAr27VW5_Gd4mL4KmW-7pkOYyW3JT5E",
    authDomain: "kiteflex-ce13a.firebaseapp.com",
    databaseURL: "https://kiteflex-ce13a.firebaseio.com",
    projectId: "kiteflex-ce13a",
    storageBucket: "kiteflex-ce13a.appspot.com",
    messagingSenderId: "1085283107517"
};

export default firebaseApp = firebase.initializeApp(config);