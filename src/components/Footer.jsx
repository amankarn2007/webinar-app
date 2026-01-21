import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer className="w-full h-40 bg-gray-800 text-white">

            <div className="max-w-6xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="col-span-1">
                        <div className="text-2xl font-normal mb-4">
                            <span className='material-symbols-outlined text-green-400 inline-block align-middle mr-2'>desktop_windows</span> 
                            <span className='text-green-400'>Webinar</span>.gg
                        </div>
                        <p className="text-gray-400 text-sm">
                            Your leading platform for hosting webinars and online events in India.
                        </p>
                        <p className="text-gray-500 text-sm mt-4">
                            &copy; 2026 Webinar.gg. All rights reserved.
                        </p>
                    </div>


                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4 text-green-400">Company</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <Link to="/about" className="hover:text-white transition duration-300">Know about us</Link>
                            </li>
                            <li>
                                <Link to="/terms" className="hover:text-white transition duration-300">terms & conditions</Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="hover:text-white transition duration-300">privacy terms</Link>
                            </li>
                        </ul>
                    </div>


                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4 text-green-400">connect with us</h3>
                        <p className="text-gray-400 mb-4">
                            support@webinar.gg
                        </p>
                    </div>
                </div>


                <div className="mt-3 pt-6 border-t border-gray-700 text-center text-gray-500 text-sm">
                    Prouudly maded in Bihar, India
                </div>

            </div>
        </footer>
    )
}

export default Footer;