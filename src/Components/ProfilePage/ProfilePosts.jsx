import { Text, Grid, Skeleton, VStack, Box, Flex } from "@chakra-ui/react";

import ProfilePost from "./ProfilePost";
import useGetUserPosts from "../../Hooks/useGetUserPosts";
function ProfilePosts() {
  const { isLoading, posts } = useGetUserPosts();
  const noPostsFound = !isLoading && posts.length === 0;
  if (noPostsFound) return <NoPostsFound />;
  return (
    <Grid
      templateColumns={{
        //  columns on screen
        sm: "repeat(1,fr)",
        md: "repeat(3,1fr)",
      }}
      //  between grids gap
      gap={1}
      //   for between columns
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2].map((_, idx) => (
          <VStack key={idx} alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h="300px">contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          {posts.map((post) => (
            <ProfilePost post={post} key={post.id} />
          ))}
        </>
      )}
    </Grid>
  );
}
export default ProfilePosts;

const NoPostsFound = () => {
  return (
    <Flex flexDir={"column"} textAlign={"center"} mx={"auto"} mt={10}>
      <Text fontSize={"2xl"}> No posts found </Text>
    </Flex>
  );
};
