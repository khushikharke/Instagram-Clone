import { useToast } from '@chakra-ui/react';
// for error handling we use toast
import React from 'react'
const useShowToast=()=>{
    const toast = useToast();
    
    const showToast = (title, description, status) =>{
        toast({
            title:title,
            description:description,
            status:status,
            duration:3000,
            isClosable:true,
        });

    };
    return showToast;
};
export default useShowToast;