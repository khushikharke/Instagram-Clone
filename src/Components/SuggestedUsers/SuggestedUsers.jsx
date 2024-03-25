import React from'react';
import SuggestedUser from './SuggestedUser';
import { VStack,Flex,Text,Box, Link} from '@chakra-ui/react';

import SuggestedHeader from './SuggestedHeader';
function SuggestedUsers(){
    return(<VStack py={8} px={6} gap={4}>
        <SuggestedHeader/>
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                suggested for you
            </Text>

            <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>
                see all 
            </Text>
        </Flex>

            <SuggestedUser name="Zendaya" followers={"33M"} avatar= 'https:// bit.ly/dan-abramov'/>
            <SuggestedUser name="BradMondo" followers={"11M"} avatar= 'https:// bit.ly/dan-abramov'/>
            <SuggestedUser name="ReginaGeorge" followers={"1.9M"} avatar= 'https:// bit.ly/dan-abramov'/>
            
            
            <Box fontSize={12}
                color={"gray.500"}
                mt={5}
                >
             © 2024 Built By{""}

                <Link href="https:// www.youtube.com/@asaprogrammer_" target = '_blank' color="blue.500" fontSize={14}>
                    As a Programmer
                </Link>
            </Box>
        </VStack>)
}
export default SuggestedUsers; 