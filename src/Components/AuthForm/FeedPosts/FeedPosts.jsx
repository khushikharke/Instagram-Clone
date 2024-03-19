import { Container, Skeleton, SkeletonCircle, VStack,Flex,Box} from '@chakra-ui/react';
import React from 'react';
import {useState, useEffect} from'react';
import FeedPost from './FeedPost';
const FeedPosts = ()=>{
    const [isLoading , setIsLoading] = useState(true);
    useEffect (()=>{
        setTimeout(() => {
            setIsLoading(false);
        },200);

    },[]);
  
    return(<>
        <Container maxW={"conatainer.sm"} py={10} px={2}>
            {isLoading && 
            [0,1,2,3].map((_,idx) => (
                <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
                    <Flex gap='2'>
                    <SkeletonCircle size='10'/>
                    <VStack gap={2} alignItems={"flex-start"}>
                        <Skeleton height={"10px"} w={"200px"}/>
                        <Skeleton height={"10px"} w={"200px"}/>

                    </VStack>
                    </Flex>
                    <Skeleton w={"full"}>
                        <Box h={"500px"}>
                            Contents wrapped
                        </Box>
                    
                    </Skeleton> 
                    
                </VStack>
            ))}

            {!isLoading && (
                <>
                <FeedPost img ='/img1.png' username="Anna" avatar='/img1.png' />
                <FeedPost  img ='/img2.png' username="John" avatar='/img2.png'/>
                <FeedPost img ='/img3.png' username="Tru" avatar='/img3.png'/>
                <FeedPost img ='/img4.png' username="Lilly" avatar='/img4.png'/>    
                </>
            )}
        </Container>
    
    </>); 
}
export default FeedPosts;