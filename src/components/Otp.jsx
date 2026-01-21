import { useRef, useState } from "react";
import { Button } from "../elements/Button";
import { useNavigate } from "react-router-dom";

function Otp() {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);;

    return(
        <div className="flex flex-col ">
            <div className="flex flex-row  justify-center">
                <SubOtp reference={ref1} onDone={() => {
                    ref2.current.focus();
                }} goBack={() => {
                    ref1.current.focus();
                }} />

                <SubOtp reference={ref2} onDone={() => {
                    ref3.current.focus();
                }} goBack={() => {
                    ref1.current.focus();
                }} />

                <SubOtp reference={ref3} onDone={() => {
                    ref4.current.focus();
                }} goBack={() => {
                    ref2.current.focus();
                }} />

                <SubOtp reference={ref4} onDone={() => {
                    ref5.current.focus();
                }} goBack={() => {
                    ref3.current.focus();
                }} />

                <SubOtp reference={ref5} onDone={() => {
                    ref6.current.focus();
                }} goBack={() => {
                    ref4.current.focus();
                }} />

                <SubOtp reference={ref6} onDone={() => {
                    setDisabled(false);
                }} goBack={() => {
                    ref5.current.focus();
                }} />
            </div>

            <Button disabled={disabled} onClick={ () => { 
                if(!disabled){
                    navigate("/dashboard");
                }
            }} >
                Verify
            </Button>
            
        </div>
    )
}

function SubOtp({ reference, onDone, goBack }){

    const [inputBoxValue, setInputBoxValue] = useState("");

    return(
        <div>
            <input ref={reference} onKeyUp={(e) => {
                if(e.key == "Backspace") goBack();
            }}
            onChange={(e) => {
                const val = e.target.value; //input value
                
                if(Number.isInteger(Number(val))){
                    setInputBoxValue(val);
                    onDone();
                }
                
            }} value={inputBoxValue} type="text" inputMode="numeric" 
            className="m-1 h-[50px] w-[40px] rounded-2xl bg-blue-500 outline-none text-white text-center " />
        </div>
    )
}

export default Otp;