import '../App.css'
import { Link } from 'react-router-dom';

function Header() {
    return(
        <nav className='w-full h-20 bg-gray-800 flex justify-between items-center'>
            <div>
                <Link to="/" className="text-3xl font-normal mb-4 px-8">
                    <span className='material-symbols-outlined text-green-200 px-4 text-3xl!'>desktop_windows
                    </span> 
                    <span className='text-green-400'>Webinar</span>.gg
                </Link>
            </div>

            <div className='w-1/4 flex gap-5 justify-evenly'>
                <div className='rounded-2xl h-10 px-5 py-2 text-center bg-gray-100'>
                    <Link to={"/"}>
                        About us
                    </Link>
                </div>
                <div  className='rounded-2xl h-10 px-5 py-2 text-center bg-gray-100'>
                    <Link to={"/login"}>
                        Login
                    </Link>
                </div>
            </div>

        </nav>
    )
}

export default Header;