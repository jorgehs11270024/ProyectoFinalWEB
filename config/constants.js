import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAGtvgUE2ra68E3IfhHMTugYo2eJgq1rSw",
    authDomain: "tiendas-d6c6d.firebaseapp.com",
    databaseURL: "https://tiendas-d6c6d.firebaseio.com",
    
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

