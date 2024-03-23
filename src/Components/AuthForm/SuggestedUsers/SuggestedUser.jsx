import {useState} from'react';
import React from 'react';
import {Flex, Avatar, Button, VStack,Box } from '@chakra-ui/react';

function SuggestedUser({followers, name, avatar}){
    const [isFollowed, setIsFollowed] = useState(false);
    return (
        <Flex justifyContent ={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar src={avatar}  size={"md"}/>
            <VStack spacing ={2} alignItems={"self-start"}>
                <Box fontSize={12} fontWeight={"bold"}>
                    {name}
                </Box>
                <Box fontSize={12} color={"gray.500"}>
                    {followers} followers
                </Box>
            </VStack>
               
            </Flex>

            <Button
            fontSize={13}
            bg={"transparent"}
            p={0}
            h={"max-content"}
            fontWeight={"medium"}
            color="blue.500"
            cursor={"pointer"}
            _hover={{color:"white"}}
            onClick={()=> setIsFollowed(!isFollowed)}>
                {isFollowed? "Unfollow" : " follow"}

            </Button>
           
            
        
        </Flex>
    )
}
    
    

export default SuggestedUser;