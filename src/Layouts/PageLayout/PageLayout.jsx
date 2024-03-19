import { Box, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../Components/AuthForm/Sidebar/Sidebar";

function PageLayout({children}){
    //  instead of adding the Sidebar component to every page, we can add it only once to the pagelayout component and wrap the childeren with it. This way , we can have a sidebar on every page except the Authpage.

    const {pathname} = useLocation();
    return(
        <Flex>
             {/* sidebar on left */}
            {pathname !== '/auth' ? (
                <Box w={{base:"70px", md: "240px"}}>
                    <Sidebar/>
                </Box>
            ):null}
           
            
            {/* page content on right */}
            <Box flex={1} w={{base:"calc(100%-70px)" , md: "calc(100%-240px)"}}>
                {children}
            </Box>
        </Flex>



    );

};
export default PageLayout;