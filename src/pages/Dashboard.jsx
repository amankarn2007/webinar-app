import { useState } from 'react';
import '../App.css'
import ActionCard from '../components/ActionCard';
import CalenderView from '../components/CalenderView';
import Sidebar from '../components/Sidebar';
import ProfileCard from '../components/UserProfileCard';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  function sidebarToggle() {
    setSidebarOpen(!sidebarOpen);
  }

  return(
    <div className='h-screen w-full bg-pink-200 flex'>
      <Sidebar isOpen={sidebarOpen} toggle={sidebarToggle} />
      
      <main className='flex-1' //flex-1 = full width lelo
        style={{
          backgroundImage: "url('/images/cover.jpg')",
          backgroundSize: '100% 300px' // Image ko sirf top 300px tak rakha
        }} >

          {/*agar sidebar open nahi hai tabhi menu icon dikhao*/}
          { !sidebarOpen &&
            <button className='fixed h-10 w-10 top-6 left-6 z-1 p-2 bg-white rounded-lg hover:bg-blue-50 cursor-pointer overflow-hidden' onClick={sidebarToggle}>
              <i className="fa-solid fa-bars hover:text-lg"></i>
            </button>
          }

          <Main />
      </main>
    </div>
  )
}

export default Dashboard;


function Main() {
  return(
    <div className='mt-36 h-4/5 w-full bg-white'>

      {/*Greeting section*/}
      <div className='w-full flex flex-col items-center'>
        <p>Friday, 23 January</p>
        <h1 className="text-3xl font-bold">Good morning, Aman! 👋</h1>
      </div>

      {/*content(grid)*/}
      <div className='grid grid-cols-12 gap-6 px-15'>

        <div className='col-span-3 -mt-25'>
          <ProfileCard />
        </div>

        <div className='col-span-6'>
          <CalenderView />
        </div>

        <div className='col-span-3'>
          <ActionCard />
        </div>
      </div>

    </div>
  )
}