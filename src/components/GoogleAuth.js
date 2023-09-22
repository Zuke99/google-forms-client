import React from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import jwt_decode from "jwt-decode";
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../features/user/UserSlice';
import { useNavigate } from 'react-router-dom';
import { Box, useToast } from '@chakra-ui/react';
function GoogleAuth() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const googleButtonClick = (data) => {
      dispatch(setUserDetails(data))
      toast({
        position: 'top',
        render: () => (
          <Box color='white' p={3} bg='green.500'>
            LogIn Success
          </Box>
        ),
      })
      navigate("/home");

  }
  return (
    <div>
      <h1 className='border font-extrabold text-3xl'>Google AUTH</h1>
      <GoogleOAuthProvider clientId='947186499507-8akbhmfsnggvf1ju4nuom93grn8iaoil.apps.googleusercontent.com'>
        <GoogleLogin onSuccess={(credentialResponse) => {
            var decoded = jwt_decode(credentialResponse.credential);
            googleButtonClick(decoded);
            console.log(decoded)} 
        }/>
      </GoogleOAuthProvider>
    </div>
  )
}

export default GoogleAuth
