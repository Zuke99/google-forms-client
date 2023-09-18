import React from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import jwt_decode from "jwt-decode";
function GoogleAuth() {
  return (
    <div>
      Google AUTH
      <GoogleOAuthProvider clientId='947186499507-8akbhmfsnggvf1ju4nuom93grn8iaoil.apps.googleusercontent.com'>
        <GoogleLogin onSuccess={(credentialResponse) => {
            var decoded = jwt_decode(credentialResponse.credential);
            console.log(decoded)} 
        }/>
      </GoogleOAuthProvider>
    </div>
  )
}

export default GoogleAuth
