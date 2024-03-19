import React from 'react';
import { Container,Flex,Box } from '@chakra-ui/react';
import FeedPosts from '../../Components/AuthForm/FeedPosts/FeedPosts';
function HomePage(){

    return(

    <Container maxW={"container.lg"}> 
        <Flex gap={20}>
            {/* left hand side o f remaining homepage */}
            <Box flex={2} py={10} border={"1px solid blue"}>
                <FeedPosts/>
            </Box>
            {/*  right hand side of remaining homepage */}
            <Box flex={3} mr={20} display={{base:"none" , md:"block"}} maxW={"300px"}
                border={"1px solid red"}
            >
                suggested users
            </Box>

        </Flex>

    </Container>
    );
}
export default HomePage;
