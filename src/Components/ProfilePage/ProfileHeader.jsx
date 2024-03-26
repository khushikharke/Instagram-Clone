import { Avatar, AvatarGroup, Button, Container, Flex, Text, VStack, useDisclosure } from "@chakra-ui/react";
import React  from "react";
import useUserProfileStore from "../../store/userProfileStore";
import UseAuthStore from "../../store/authStore";
import EditProfile from "./EditProfile";


function ProfileHeader(){
    const {userProfile} = useUserProfileStore();
    const authUser = UseAuthStore(state=>state.user);

    const visitingOwnProfileAuth = authUser && authUser.username === userProfile.username;
    const visitingOtherProfileAuth = authUser && authUser.username !== userProfile.username;

    const {isOpen, onOpen, onClose} = useDisclosure();

    
    
    return(
    <Flex gap={{base:4, sm:10}} py={10} direction ={{base:"column", sm:"row"}}>
        <AvatarGroup size={{base:"xl", md:"2xl"}} justifySelf={"center"} alignItems={"flex-start"} mx={"auto"}>
            <Avatar  src={userProfile.profilePicURL} alt=" as a programmer logo"/>
        </AvatarGroup>

        <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
            {/*  first vstack element is name and edit button */}
            <Flex gap={4} direction={{base:"center", sm:"flex-start"}}
            alignItems={"center"}
            w={"full"}>
                <Text fontSize={{base:"sm",md:"lg"}}> {userProfile.username}</Text>
                {visitingOwnProfileAuth && (
                    <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                    <Button
                        bg={"white"}
                        color={"black"}
                        _hover={{bg:"whiteAlpha.800"}}
                        size={{base:"xs",md:"sm"}}
                        onClick={onOpen}>
                            Edit Profile
                    </Button>
                </Flex> )}

                {visitingOtherProfileAuth && 
                    <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                    <Button
                        bg={"blue.500"}
                        color={"white"}
                        _hover={{bg:"blue.600"}}
                        size={{base:"xs",md:"sm"}}>
                            Follow
                        </Button>
                </Flex> }
                
            </Flex>

            {/*  sec vstack element is posts followers and following */}
            <Flex alignItems={"center"} gap={{base:2,sm:4}}>
                <Text  fontSize={{base:"xs", md:"sm"}}>
                    <Text as="span" fontWeight={"bold"} mr={1}>
                        {userProfile.posts.length}
                    </Text>
                    Posts
                </Text>

                <Text fontSize={{base:"xs", md:"sm"}}>
                    <Text as="span" fontWeight={"bold"} mr={1}>
                        {userProfile.followers.length}
                    </Text>
                    Followers
                </Text>

                <Text fontSize={{base:"xs", md:"sm"}}>
                    <Text as="span" fontWeight={"bold"} mr={1}>
                        {userProfile.following.length}
                    </Text>
                    Following
                </Text>
            </Flex>

            {/* 3rd element of vstack is as a programmer  */}
            <Flex alignItems={"center"} gap={4}>
                <Text fontSize={"sm"} fontWeight={"bold"} > {userProfile.fullName}</Text>
            </Flex>
            <Text fontSize={"sm"} > {userProfile.bio}</Text>





        </VStack>
        {isOpen && <EditProfile isOpen={isOpen} onClose={onClose}/>}
           
    </Flex>
    
    
    
    );
}
export default ProfileHeader;