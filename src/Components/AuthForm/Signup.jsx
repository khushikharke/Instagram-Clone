import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { InputGroup,Input, InputRightElement, Button, Alert, AlertIcon } from "@chakra-ui/react";
import userSignUpWithEmailAndPassword from '../../Hooks/userSignUpWithEmailAndPassword';
// import {userSignUpWithEmailAndPassword} from "../../Hooks/userSignUpWithEmailAndPassword.jsx";
import {useState} from 'react';
import React from 'react';

function Signup(){
    const [inputs, setInputs] = useState({
        fullName:'',
        username:'',
        email: '',
        password: '',
        // confirmPassword: ''
    });
    const [showPassword,setShowPassword] = useState(false);
    const {loading, error, signup} = userSignUpWithEmailAndPassword();
        return (<>
        <Input
            type="email"
            fontSize={14}
            placeholder="Email"
            value={inputs.email}
            size={"sm"}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            
        />
        <Input
            type="text"
            placeholder="Username"
            fontSize={14}
            value={inputs.username}
            size={"sm"}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            
        />
        <Input
            type="text"
            placeholder="Full Name"
            fontSize={14}
            value={inputs.fullName}
            size={"sm"}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            
        />

        <Input 
            type = "password"
            placeholder="Password"
            fontSize={14}
            value={inputs.password}
            size={"sm"}
            onChange={(e)=> setInputs({...inputs, password: e.target.value})}>
        </Input>

        <InputGroup >
            <Input 
            type = {showPassword ? "text" : "password"}
            placeholder="Password"
            fontSize={14}
            value={inputs.password}
            size={"sm"}
            onChange={(e)=> setInputs({...inputs, password: e.target.value})}>
            </Input>

      

        <InputRightElement h="full">
            <Button variant ={"ghost"}  size ={"sm"} onClick={()=>{
                setShowPassword(!showPassword);
            }}>
                {showPassword ?<ViewIcon/> : <ViewOffIcon/>}

            </Button>


        </InputRightElement>
        </InputGroup>

        {error && (

            <Alert status="error" fontSize={13} p={2} borderRadius={4}>
                <AlertIcon fontSize={12}/>
                {error.message}
            </Alert>
        )}

        <Button  w={"full"} colorScheme="blue" size={'sm'} fontSize={14} 
            isLoading ={loading}
        
        
        onClick={()=>{
            signup(inputs)
        }}>
            Sign Up
        </Button>


    
    </>);
}
export default Signup;