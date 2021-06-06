// Firebase App (the core Firebase SDK) is always required and must be listed first
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics'
import firebase from 'firebase/app'
// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'

import { generateZaloURL } from '../../utils/zaloUtils'

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    apiKey: 'AIzaSyDgc54glN2diPUF3gYEDqwTUiw2v8x0nBk',
    authDomain: 'fap-project-ce70c.firebaseapp.com',
    databaseURL: 'https://fap-project-ce70c.firebaseio.com',
    projectId: 'fap-project-ce70c',
    storageBucket: 'fap-project-ce70c.appspot.com',
    messagingSenderId: '122493379410',
    appId: '1:122493379410:web:5037af6b55317b7a5b108b',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider()

export const PopupFacebookLogin = () => {
    return firebase.auth().signInWithPopup(FacebookAuthProvider)
}
export const PopupGoogleLogin = () => {
    return firebase.auth().signInWithPopup(GoogleAuthProvider)
}

//zalo section
export const zaloLogin = (callback) => {
    const params = {
        url: generateZaloURL(),
        title: 'Đăng nhập Zalo',
        w: 550,
        h: 650,
    }
    let newWindow = postMessage(params)
    newWindow.addEventListener(
        'login',
        ({ detail }) => {
            //zalo login success
            callback(detail)
            newWindow.close()
        },
        false
    )
}
export default firebase
