import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, toggle }){

    return(
        isOpen ? 
            <div className="flex flex-col w-85 bg-white h-full hidden md:block z-1 shadow-xl">
    
                {/*logo, menu closer and img*/}
                <div className="mt-3 px-6 flex items-center place-content-between">
    
                    <Link to="/dashboard" className="text-md text-white w-34 flex bg-blue-700 h-10 justify-center items-center rounded-lg">
    
                        <span className='material-symbols-outlined text-green-200 pr-2 text-md!'>
                            desktop_windows
                        </span>
                        Webinar<span className='text-green-400'>.gg</span>
                    </Link>
    
                    <div className="bg-blue-50 p-1 rounded-xl hover:text-lg opacity-50 hover:opacity-100 cursor-pointer" onClick={toggle}>
                        <i class="fa-solid fa-xmark"></i>
                    </div>

                    <div className="">
                        <img src="../images/aman.png" alt="aman" className="h-14 w-13 rounded-xl"/>
                    </div>
                </div>
                
                <sideBarCloser />
                
                {/*menu*/}
                <div className="px-5 mt-8 text-lg">
                    <SideBarItems label={"Home"} icon="fa-house" />
                    <SideBarItems label={"Webinars"} icon="fa-users" />
                    <SideBarItems label={"Billing"} icon="fa-credit-card" />
                    <SideBarItems label={"User Management"} icon="fa-users-gear" />
                    <SideBarItems label={"Settings"} icon="fa-gear" />
                </div>
            </div>

        : <div></div>
    )
}

//Reusing SideBarItems Component
function SideBarItems({label, icon}) {
    return(
        <div className="flex items-center place-content-between px-5 py-2 rounded-lg mt-2 opacity-60 hover:bg-blue-50 hover:opacity-100">
            { label } 
            <i className={`fa-solid ${icon}`}></i>
        </div>
    )
}

export default Sidebar;

//before "md size" make screen "block", after that screen will be "default hidden"
//hidden md:block   for responcive sidebar