import {Button, Input} from '@chakra-ui/react';
import {useState} from 'react';

function Login(){


    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        
    });

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

        <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14}>
            Login 
        </Button>
                       
    
    </>);
}
export default Login;