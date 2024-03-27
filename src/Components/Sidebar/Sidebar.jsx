import { Box, Flex, Link, Tooltip, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  InstagramLogo,
  InstagramMobileLogo,
} from "/Users/roshanop/Documents/YT_TUT_REACT/instagram clone/src/assets/Constants";

import { BiLogOut } from "react-icons/bi";
import useLogout from "../../Hooks/useLogout";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const { handleLogout, isLoggingOut } = useLogout();

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={0} w="full" height={"13vh"}>
        <Link
          to="/"
          as={RouterLink}
          pl={2}
          // height={"1vh"}
          display={{ base: "none", md: "block" }}
          cursor="pointer"
        >
          <InstagramLogo />
        </Link>

        <Link
          to="/"
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.200" }}
          w={10}
          cursor="pointer"
        >
          <InstagramMobileLogo />
        </Link>
      </Flex>

      <Flex direction={"column"} gap={5} cursor={"pointer"}>
        <SidebarItems />
      </Flex>
      {/* LOGOUT */}
      <Tooltip
        hasArrow
        label={"Logout"}
        placement="right"
        ml={1}
        // mb={8}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Flex
          onClick={handleLogout}
          alignItems={"center"}
          gap={1}
          // mb={2}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          mt={"500px"}
        >
          <BiLogOut size={25} />
          <Button
            display={{ base: "none", md: "block" }}
            variant={"ghost"}
            _hover={{ bg: "transparent" }}
            isLoading={isLoggingOut}
          >
            Log Out
          </Button>
        </Flex>
      </Tooltip>
    </Box>
  );
};
export default Sidebar;
