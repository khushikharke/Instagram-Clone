import React from 'react';
import useShowToast from './useShowToast';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import UseAuthStore from '../store/authStore';
function useLogin(){
    const showToast = useShowToast();
    const [
        signInWithEmailAndPassword,
        loading,
        error,
    ]= useSignInWithEmailAndPassword(auth);
    const loginUser = UseAuthStore(auth);

    const login = async (inputs)=>{
        if(!inputs.email || !inputs.password){
            return showToast("Error","please fill required fields","error");
        }
        try{
            const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password);
            if(userCred){
                const docRef = doc(firestore, "users", "userCred.user.uid");
                const docSnap= await(docRef);
                localStorage.setItem("user-info",JSON.stringify(docSnap.data()));
                loginUser(docSnap.data());
            } 

        }
        catch(error){
            showToast("Error",error.message,"error");
        }
    }
    return {loading, error,login};
}
export default useLogin;