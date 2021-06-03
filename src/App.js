import { useState } from 'react'

import './App.css'
import { signInWithGoogleRedirect, auth } from './services/firebase'

function App() {
    const onClick = (e) => {
        signInWithGoogleRedirect()
    }
    let [tok, set] = useState('')
    auth.getRedirectResult()
        .then((result) => {
            if (result.credential) {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken
                set(token)
                // ...
            }
            // The signed-in user info.
            var user = result.user
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code
            var errorMessage = error.message
            // The email of the user's account used.
            var email = error.email
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential
            // ...
        })

    return (
        <div className="App">
            <button onClick={onClick}> Login with google</button>
            {tok}
        </div>
    )
}

export default App
