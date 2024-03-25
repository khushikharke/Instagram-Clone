import { Flex,Avatar, Box, Text,Image, Button,Link } from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
function SuggestedHeader (){
    return(
    <Flex 
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"full"}>
        <Flex alignItems={"center"} gap={2}>
            <Avatar name = "as a programmer" size={"lg"} src="/profilepic.png"/>
            <Text fontSize={12} fontWeight={"bold"}>
                asaprogrammer_
            </Text>
        </Flex>
        <Flex>
        <Link
            as={RouterLink} 
            to ={"/auth"} 
            fontSize={14}
            fontWeight={"medium"}
            color={"blue.400"}
            style={{textDecoration:"none"}}
            cursor={"pointer"}>
            Logout
         </Link>
        </Flex>
        

    </Flex>);
}
export default SuggestedHeader;