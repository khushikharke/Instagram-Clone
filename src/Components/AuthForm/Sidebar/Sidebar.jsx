import {Avatar, Box,Flex,Link, Tooltip} from '@chakra-ui/react';
import {Link as RouterLink} from 'react-router-dom';
import {InstagramLogo,SearchLogo,NotificationsLogo, CreatePostLogo, InstagramMobileLogo } from '../../../assets/Constants';
import {AiFillHome} from 'react-icons/ai';
function Sidebar(){
    const SidebarItems =[
            {
                icon:<AiFillHome size={25}/>,
                text:"Home",
                link:"/",
            },
            {
                icon :<SearchLogo/>,
                text:"Search",

            },
            {
                icon:<NotificationsLogo/>,
                text:"Notification",
            },
            {
                icon:<CreatePostLogo/>,
                text:"Create",
            },
            {
                icon:<Avatar size={"sm"} name="Burak Orkmez" src="/profilepic.png"/>,
                text:"Profile",
                link:"/asaprogrammer",
            },
    ];
    return(
        
        <Box height = {"100vh"}
            borderRight ={"1px solid"}
            borderColor={"whiteAlpha.300"}
            py={8}
            position={"sticky"}
            top={0}
            left={0}
            px={{base:2, md:4}}
        >


        <Flex direction ={"column"} gap={0} w="full" height={"13vh"}>

            <Link 
                to="/" 
                as ={RouterLink} 
                pl={2}
                // height={"1vh"}
                display={{base:"none", md:"block"}} 
                cursor="pointer">

                <InstagramLogo/>

            </Link>
            
            <Link 
                to="/"
                as={RouterLink} 
                p={2} 
                display={{base:"block" , md:"none"}}
                borderRadius={6}
                _hover={{bg:"whiteAlpha.200"}} 
                w={10}
                cursor="pointer">

                <InstagramMobileLogo/>
            </Link>
        </Flex>

        <Flex direction={"column"} gap={5} cursor={"pointer"}>
				{SidebarItems.map((item, index) => (
                    <Tooltip
                    key ={index}
                    hasArrow
                    label={item.text}
                    placement='right'
                    ml={1}
                    // mb={8}
                    openDelay={500}
                    display={{base:"block", md:"none"}}
                    >
                        <Link
                        display = {"flex"}
                        top={item.link || null}
                        as={RouterLink}
                        alignItems={"center"}
                        gap={1}
                        // mb={2}
                        _hover={{bg:"whiteAlpha.400"}}
                        borderRadius={6}
                        p={2}
                        w={{base:10, md:"full"}}
                        >
                            {item.icon}
                            <Box display={{base:"none",md:"block"}} >
                              {item.text}
                            </Box>
                        </Link>
                    </Tooltip>
                ))}
		</Flex>

        </Box>
    );
   
}
export default Sidebar;