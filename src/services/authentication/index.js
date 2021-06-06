// Firebase App (the core Firebase SDK) is always required and must be listed first
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics'
import firebase from 'firebase/app'
// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'

import { popupCenter } from '../../utils/popup'
import { generateZaloURL } from '../../utils/zaloUtils'

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    apiKey: 'AIzaSyBFFWsN16ggfmyWzzQdv4r_MKRgTYeZBgI',
    authDomain: 'ithd-fpt.firebaseapp.com',
    projectId: 'ithd-fpt',
    storageBucket: 'ithd-fpt.appspot.com',
    messagingSenderId: '341711463073',
    appId: '1:341711463073:web:2a3a6397be4be1208706e0',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider()
export const FirebaseAuth = firebase.auth()
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
    let newWindow = popupCenter(params)
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
