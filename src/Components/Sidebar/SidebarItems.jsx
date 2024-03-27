import React from "react";
import Home from "./Home";
import Notifications from "./Notifications";
import CreatePost from "./CreatePost";
import Search from "./Search";
import ProfileLink from "./ProfileLink";

function SidebarItems() {
  return (
    <>
      <Home />
      <Search />
      <Notifications />
      <CreatePost />
      <ProfileLink />
    </>
  );
}
export default SidebarItems;
