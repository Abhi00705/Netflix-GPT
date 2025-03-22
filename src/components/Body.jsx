import React, {  useEffect, useState } from 'react'

import {auth} from "../utils/firebase"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import useFetch_API from "../hooks/useFetch_API"
import MainContainer from "./mainContainer";
import SecondaryContainer from './secondaryContainer';

const Body = () => {

const navigate = useNavigate();
const dispatch = useDispatch();



//checking logged in status
useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // https://firebase.google.com/docs/reference/js/auth.user
      dispatch(addUser({ email: user.email, uid: user.uid, displayName: user.displayName, photoURL: user.photoURL }));
    } else {
      // User is signed out
      dispatch(removeUser());
      navigate("/login");
    }
  });
}, [dispatch, navigate]);

// Fetching API
useFetch_API();


  return (
    <div>
      <Header />
      <MainContainer/>  
      <SecondaryContainer/>

    </div>
  )
}

export default Body