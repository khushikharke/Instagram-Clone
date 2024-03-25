import { Container, Flex } from "@chakra-ui/react";
import React  from "react";
import ProfileTabs from "../../../Components/ProfilePage/ProfileTabs";
import ProfilePosts from "../../../Components/ProfilePage/ProfilePosts";
import ProfileHeader from "../../../Components/ProfilePage/ProfileHeader";
function ProfilePage(){
    return(
        <Container maxW="container.lg" py={5}>
            <Flex py={10}
            px={4}
            pl={{base:4, md:10}}
            w={"full"}
            mx={"auto"}
            flexDirection={"column"}>
                <ProfileHeader/>
            </Flex>

            <Flex
                px={{base:2,sm:4}}
                maxW={"full"}
                mx={"auto"}
                borderTop={"1px solid"}
                borderColor={"whiteAlpha.500"}
                direction={"column"}
            >
                <ProfileTabs/>
                <ProfilePosts/>
            </Flex>
        </Container>

    )
    
}
export default ProfilePage;