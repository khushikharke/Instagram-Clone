import useFollowUser from "../../Hooks/useFollowUser";
import { Flex, Avatar, Button, VStack, Box } from "@chakra-ui/react";
import UseAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

function SuggestedUser({ user, setUser }) {
  const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(user.uid);
  const authUser = UseAuthStore((state) => state.user);

  const onFollowUser = async () => {
    await handleFollowUser();
    setUser({
      ...user,
      followers: isFollowing
        ? user.followers.filter((follower) => follower.uid !== authUser.uid)
        : [...user.followers, authUser],
    });
  };
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`/${user.username}`}>
          <Avatar src={user.profilePicURL} size={"md"} />
        </Link>

        <VStack spacing={2} alignItems={"self-start"}>
          <Link to={`/${user.username}`}>
            <Box fontSize={12} fontWeight={"bold"}>
              {user.fullName}
            </Box>
          </Link>
          <Box fontSize={12} color={"gray.500"}>
            {user.followers.length} followers
          </Box>
        </VStack>
      </Flex>

      {authUser.uid !== user.uid && (
        <Button
          fontSize={13}
          bg={"transparent"}
          p={0}
          h={"max-content"}
          fontWeight={"medium"}
          color="blue.500"
          cursor={"pointer"}
          _hover={{ color: "white" }}
          onClick={onFollowUser}
          isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow" : " follow"}
        </Button>
      )}
    </Flex>
  );
}

export default SuggestedUser;
