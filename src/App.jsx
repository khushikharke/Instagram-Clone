import React from 'react';
import {auth} from '../src/firebase/firebase'
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/HomePage/AuthPage/AuthPage';
import PageLayout from './Layouts/PageLayout/PageLayout';
import ProfilePage from './pages/HomePage/ProfilePage/ProfilePage';
import { Navigate,Route,Routes } from 'react-router-dom';
import UseAuthStore from './store/authStore';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const[authUser] = useAuthState(auth);

  return(
    <PageLayout>
      <Routes>
        <Route path = '/' element={authUser ? <HomePage/> : <Navigate to ="/auth" />}/>
        <Route path='/auth' element={!authUser ? <AuthPage/> : <Navigate to="/" />}/>
        <Route path='/:username' element={<ProfilePage/>}/>
      </Routes>
    </PageLayout>
  );
}


export default App;
