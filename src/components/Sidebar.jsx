import { Link } from "react-router-dom";

function Sidebar(){

    return(
        <div className="flex flex-col w-88 bg-white h-full">
            {/*logo and img*/}
            <div className="mt-3 px-6 flex items-center place-content-between">

                <Link to="/dashboard" className="text-md text-white w-34 flex bg-blue-700 h-10 justify-center items-center rounded-lg">

                    <span className='material-symbols-outlined text-green-200 pr-2 text-md!'>
                        desktop_windows
                    </span>
                    Webinar<span className='text-green-400'>.gg</span>
                </Link>

                <div className="">
                    <img src="../images/aman.png" alt="aman" className="h-14 w-13 rounded-xl"/>
                </div>
            </div>

            {/*menu*/}
            <div className="px-5 mt-10 text-lg">

                <div className="flex items-center place-content-between px-5 py-2 rounded-lg opacity-60 hover:bg-blue-50 hover:opacity-100">
                    Home <i class="fa-solid fa-house"></i>
                </div>
                <div className="flex items-center place-content-between px-5 py-2 rounded-lg mt-2 opacity-60 hover:bg-blue-50 hover:opacity-100">
                    Webinars <i class="fa-solid fa-users"></i>
                </div>
                <div className="flex items-center place-content-between px-5 py-2 rounded-lg mt-2 opacity-60 hover:bg-blue-50 hover:opacity-100">
                    Billing <i class="fa-regular fa-credit-card"></i>
                </div>
                <div className="flex items-center place-content-between px-5 py-2 rounded-lg mt-2 opacity-60 hover:bg-blue-50 hover:opacity-100">
                    User Management <i class="fa-solid fa-users-gear"></i>
                </div>
                <div className="flex items-center place-content-between px-5 py-2 rounded-lg mt-2 opacity-60 hover:bg-blue-50 hover:opacity-100">
                    Settings <i class="fa-solid fa-gear"></i>
                </div>

                <div></div>
            </div>
        </div>
    )
}

export default Sidebar;