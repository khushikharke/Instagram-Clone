import { Flex,Avatar, Text, Button } from "@chakra-ui/react";
import {Link} from 'react-router-dom';
import useLogout from "../../Hooks/useLogout";
import UseAuthStore from "../../store/authStore";

function SuggestedHeader (){
   const {handleLogout, isLoggingOut} =  useLogout();
   const authUser = UseAuthStore((state)=>state.user);
   if(!authUser) return null;
   
    return(
    <Flex 
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"full"}>
        <Flex alignItems={"center"} gap={2}>
            <Link to ={`${authUser.username}`}>
                <Avatar size={"lg"} src={authUser.profilePicURL} />
            </Link>
            <Link to ={`${authUser.username}`}>
                <Text fontSize={12} fontWeight={"bold"}>
                    {authUser.username}
                </Text>
            </Link>
        </Flex>
        <Flex>
        <Button
            size={"xs"}
            backgroung ={"trasparent"}
            _hover={{background:"transparent"}}
        
            fontSize={14}
            fontWeight={"medium"}
            color={"blue.400"}
            isLoading = {isLoggingOut}
            onClick={handleLogout}
            // style={{textDecoration:"none"}}
            cursor={"pointer"}>
            Log out
         </Button>
        </Flex>
        

    </Flex>);
}
export default SuggestedHeader;