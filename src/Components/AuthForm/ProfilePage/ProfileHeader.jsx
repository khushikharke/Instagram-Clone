import { Avatar, AvatarGroup, Button, Container, Flex, Text, VStack } from "@chakra-ui/react";
import React  from "react";
function ProfileHeader(){
    return(
    <Flex gap={{base:4, sm:10}} py={10} direction ={{base:"column", sm:"row"}}>
        <AvatarGroup size={{base:"xl", md:"2xl"}} justifySelf={"center"} alignItems={"flex-start"} mx={"auto"}>
            <Avatar name="as a programmer" src='/profilepic.png' alt=" as a programmer logo"/>
        </AvatarGroup>

        <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
            {/*  first vstack element is name and edit button */}
            <Flex gap={4} direction={{base:"center", sm:"flex-start"}}
            alignItems={"center"}
            w={"full"}>
                <Text fontSize={{base:"sm",md:"lg"}}> as a programer</Text>
                <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                    <Button
                        bg={"white"}
                        color={"black"}
                        _hover={{bg:"whiteAlpha.800"}}
                        size={{base:"xs",md:"sm"}}>
                            Edit Profile
                        </Button>
                </Flex>
            </Flex>

            {/*  sec vstack element is posts followers and following */}
            <Flex alignItems={"center"} gap={{base:2,sm:4}}>
                <Text  fontSize={{base:"xs", md:"sm"}}>
                    <Text as="span" fontWeight={"bold"} mr={1}>
                        4
                    </Text>
                    Posts
                </Text>

                <Text fontSize={{base:"xs", md:"sm"}}>
                    <Text as="span" fontWeight={"bold"} mr={1}>
                        149
                    </Text>
                    Followers
                </Text>

                <Text fontSize={{base:"xs", md:"sm"}}>
                    <Text as="span" fontWeight={"bold"} mr={1}>
                        175
                    </Text>
                    Following
                </Text>
            </Flex>

            {/* 3rd element of vstack is as a programmer  */}
            <Flex alignItems={"center"} gap={4}>
                <Text fontSize={"sm"} fontWeight={"bold"} > as a programmer</Text>
            </Flex>
            <Text fontSize={"sm"} > Tutorials to level up your skills as a developer .</Text>





        </VStack>
           
    </Flex>
    
    
    
    );
}
export default ProfileHeader;