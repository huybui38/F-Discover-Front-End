import firebase, { FacebookAuthProvider } from './index'

export const PopupFacebookLogin = () => {
    return firebase.auth().signInWithPopup(FacebookAuthProvider)
    // .then((result) => {
    //     // callback(result)
    //     var credential = result.credential
    //     var token = credential.accessToken
    //     var user = result.user
    // })
    // .catch((error) => {
    //     var errorCode = error.code
    //     var errorMessage = error.message
    //     var email = error.email
    //     var credential = error.credential
    //     // ...
    // })
}
