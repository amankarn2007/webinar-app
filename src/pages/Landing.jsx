import '../App.css'
import Footer from '../components/Footer';
import Header from '../components/Header';


function Landing() {
  return(
    <div className='min-h-screen w-full bg-blue-400 flex flex-col justify-between'>
      <Header />
      <main className='grow flex items-center justify-center p-4 bg-blue-800'>
        <Main />
      </main>
      <Footer />
    </div>
  )
}

export default Landing;

function Main(){
  return(
    <div className='w-full'>
      <img src="../images/freepik__talk__15085.png" alt="banner" className='w-full h-fit object-contain contrast-125 brightness-110' />
    </div>
  )
}