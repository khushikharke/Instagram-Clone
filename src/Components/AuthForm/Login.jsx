import {Alert, AlertIcon,Button, Input} from '@chakra-ui/react';
import {useState} from 'react';
// import {Alert, AlertIcon} from '@chakra-ui/react';
import useLogin from '../../Hooks/useLogin';

function Login(){


    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });
    const {loading,error,login} = useLogin();

    return (<>
        <Input
         type="email"
         placeholder="Email"
         value={inputs.email}
         size={"sm"}
         fontSize={14}
         onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
         
        />
        <Input
            type="password"
            placeholder="Password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            size={"sm"}
            fontSize={14}
           
        />

            {error && (

            <Alert status="error" fontSize={13} p={2} borderRadius={4}>
                <AlertIcon fontSize={12}/>
                {error.message}
            </Alert>
            )}

        <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14}
        isLoading={loading}
        onClick={() => login(inputs)}>
            Log in 
        </Button>
                       
    
    </>);
}
export default Login;