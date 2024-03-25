import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from '../../firebase/firebase';
import Navbar from "../../Components/Navbar/Navbar";

function PageLayout({children}){
    //  instead of adding the Sidebar component to every page, we can add it only once to the pagelayout component and wrap the childeren with it. This way , we can have a sidebar on every page except the Authpage.

    const {pathname} = useLocation();
    const [user, loading] = useAuthState(auth);
    const canRenderSidebar = pathname !== "/auth" && user;
    const canRenderNavbar = !user && !loading && pathname !== "/auth";
    const checkingUserIsAuth = !user && loading;
    if( checkingUserIsAuth){
        return <PageLayoutSpinner/>;

    }
    return(
        <Flex flexDirection={canRenderNavbar ? "column" : "row"}>
             {/* sidebar on left */}
            {canRenderSidebar ? (
                <Box w={{base:"70px", md: "240px"}}>
                    <Sidebar/>
                </Box>
            ):null}
            {/* navbar on profile page */}
            {canRenderNavbar ? <Navbar/> : null};
           
            
            {/* page content on right */}
            <Box flex={1} w={{base:"calc(100%-70px)" , md: "calc(100%-240px)"}} mx={"auto"}>
                {children}
            </Box>
        </Flex>



    );

};
export default PageLayout;

const PageLayoutSpinner = () =>{
    return (
        <Flex flexDir={"column"} h="100vh" alignItems={"center"} justifyContent={"center"}>
            <Spinner size= "xl"/>
        </Flex>
    )
};
