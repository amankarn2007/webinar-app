import { useState } from 'react'
import '../App.css'
import Otp from '../components/Otp'
import { Button } from '../elements/Button'
import { Input } from '../elements/Input'


function Login() {
  const [step, setStep] = useState(1);
  const [disabled, setDisabled] = useState(true);

  return (
    <div className='h-screen w-full bg-blue-700 flex justify-center items-center'>
      <div className='flex flex-col w-1/3 items-center text-center text-white'>

        { step === 1 && 
        <div className='w-full'>
          <h2 className="text-3xl font-normal mb-4 mr-6">
            <span className='material-symbols-outlined text-green-200 px-4 text-3xl!'>desktop_windows</span> 
            <span className='text-green-400'>Webinar</span>.gg
          </h2>
          <h3 className='text-2xl font-medium mb-4 mt-15'>Verify Your Age</h3>
          <p className='text-[#dec3c3] mt-20'>Please confirm your birth year. This data will not be stored.</p> 


          <div className='flex flex-col px-20 mt-4 gap-5 w-full'>
            <Input type="text" placeholder={"Your Birth Year"} onDone={(value) => {
              if(value.length >= 4 && value >= 1900 && value <= 2026){
                setDisabled(false);
              } else {
                setDisabled(true);
              }
              //console.log(value);
            }} />

            <Button disabled={disabled} onClick={() => {setStep(2), setDisabled(true)}} >Continue</Button>
          </div>
        </div>
        }

        { step === 2 && 
        <div className='w-full'>
          <h2 className="text-3xl font-normal mb-4 mr-6">
            <span className='material-symbols-outlined text-green-200 px-4 text-3xl!'>desktop_windows</span> 
            <span className='text-green-400'>Webinar</span>.gg
          </h2>

          <h3 className='text-2xl font-medium mb-4 mt-15'>Let's Get Started</h3>

          <div className='flex flex-col px-20 mt-20 gap-5 w-full'>
            <Input type="email" placeholder={"Email"} onDone={(value) => {
              let emailValue = value;
              if(validateEmail(emailValue)){ //if emailValue is coorect
                setDisabled(false);
              } else {
                setDisabled(true);
              }
            }} />

            <Button disabled={disabled} onClick={() => {setStep(3), setDisabled(true)}} >Continue</Button>
          </div>
        </div>
        }

        { step === 3 && 
          <div>
            <h2 className="text-3xl font-normal mb-4 mr-6">
              <span className='material-symbols-outlined text-green-200 px-4 text-3xl!'>desktop_windows</span> 
              <span className='text-green-400'>Webinar</span>.gg
            </h2>

            <h3 className='text-2xl font-medium mb-4 mt-15'>Check Your Email For A Code</h3>
            <p className='text-[#dec3c3] mt-20'>Please enter the varification code sent to your email id</p>

            <div className='flex flex-col px-4 mt-4 gap-5 w-full'>
              <Otp />
            </div>

          </div>
        }

      </div>
    </div>
  )
}

export default Login

function validateEmail(email) {
  // A robust basic regex pattern for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email); // Returns true or false
}