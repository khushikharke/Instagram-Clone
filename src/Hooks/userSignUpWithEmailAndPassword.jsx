import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {collection,doc, query, setDoc,where,getDocs} from 'firebase/firestore';
// import { uerySnapshot } from 'firebase/firestore';
import {auth,firestore} from '../firebase/firebase';
import React from 'react';
import useShowToast from './useShowToast';
import UseAuthStore from '../store/authStore';

const userSignUpWithEmailAndPassword= () =>{
    const [
        createUserWithEmailAndPassword,
        loading,,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const showToast = useShowToast();
      const loginUser = UseAuthStore(state => state.login);
    //   const logoutUser = UseAuthStore(state => state.logout);

    

    const signup = async(inputs)=>{
        if(!inputs.email || !inputs.password || !inputs.username|| !inputs.fullName){
            showToast("Error","please fill all the fields","error");
            //  without use of showToast as using hook useShowToast we will do this instead
            // toast({
            //     title:"Error",
            //     description:"please fill all the required fields",
            //     status:"error",
            //     duration : 9000,
            //     isClosable:true,
            // })
            return;
        } 
        const userRef = collection (firestore, "users");
        const q = query(userRef, where("username", "==" , inputs.username));
        const querySnapshot = await getDocs(q);


        if(!querySnapshot.empty ){
            showToast("Error","Username already exists","error");
            return;
        }

        //  khushi.kharke@gmail.com an accnt exists
        // johndoe and johndoe 
        try{
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if(!newUser && error ){
                showToast("Error",error.message,"error");
                return;
            }
            if(newUser){
                const userDoc ={
                    uid:newUser.user.uid,
                    email: inputs.email,
                    username:inputs.username,
                    fullName: inputs.fullName,
                    bio:" ",
                    profilePicURL:" ",
                    followers:[],
                    following:[],
                    posts:[],
                    createdAt: Date.now(),
                };

                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
                localStorage.setItem("user-info", JSON.stringify(userDoc));

                loginUser(userDoc);

            }
        }
        catch(error){
            showToast("Error",error.message,"error");
            return; 
        }
    };
    return {loading, error, signup};
    

    

};
export default userSignUpWithEmailAndPassword;