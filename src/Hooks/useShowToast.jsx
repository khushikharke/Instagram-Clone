import { useToast } from '@chakra-ui/react';
// for error handling we use toast
import React, { useCallback } from 'react'
const useShowToast=()=>{
    const toast = useToast();
    //  usecallback used to prevent infi loop , toast is a function and also it caches the func
    const showToast = useCallback((title, description, status) =>{
        toast({
            title:title,
            description:description,
            status:status,
            duration:3000,
            isClosable:true,
        });
    },[toast]);
    return showToast;
};
export default useShowToast;