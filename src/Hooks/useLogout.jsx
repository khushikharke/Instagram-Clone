import React from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import {auth} from '../firebase/firebase';
import useShowToast from './useShowToast';
import UseAuthStore from '../store/authStore';
function useLogout(){
    const[signOut, isLoggingOut, error] = useSignOut(auth);
    const showToast = useShowToast();
    const logoutUser  = UseAuthStore((state)=> state.logout);

    const handleLogout = async ()=>{
        try{
            await signOut();
            localStorage.removeItem("user-info");
            logoutUser();
        }
        catch(error){
            showToast("Error", error.message, "error");
        }
    };
   return {handleLogout, isLoggingOut, error};
}
export default useLogout;