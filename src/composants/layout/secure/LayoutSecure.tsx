import SideBarSecure from "./header/sideBar/SideBarSecure";
import HeaderSecure from "./header/HeaderSecure";
import { Outlet } from "react-router-dom";

export default function LayoutSecure(){
    return (
      
<div>
       <>
        <SideBarSecure/>
        <div className="overlay " id="overlay"></div> 
        <div className="content">
          <HeaderSecure/>
            <Outlet/>
        </div>
        </>
        </div>
   
    )
}