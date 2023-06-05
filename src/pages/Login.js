import React, { useState } from "react";
import email from "../image/email.png";
import pass from "../image/password.png";
import axios from "axios"

function Login() {
    const [Email, setEmail] = useState("")
    const [Pass, setPass] = useState("")

    const handleEmail = (inputEmail) => {
        setEmail(inputEmail)
    }

    const handlePass = (inputPass) => {
        setPass(inputPass)
    }

    const userLogin = () => {
        const requestingData = {
            email: Email,
            pass : Pass
        }
        axios({
            method: "POST",
            url:"http://localhost:3000/users/login",
            data: requestingData
        }).then((result)=> {
            if(result.data){
                alert("login success")
                localStorage.setItem("nama", result.data.userData[0].nama)
                localStorage.setItem("userID", result.data.userData[0].user_ID)
                // console.log(localStorage)
                window.location.replace("/MenuCoffee")
            }else{
                alert("gagal login, data yang anda masukkan salah")
            }
        })
    }
    
    const signUp = () => {
        window.location.replace("/register")
    }

    const forgotPass = () => {
        window.location.replace("/forgotpassword")
    }

    return (
        <div className="h-screen bg-primary">
            <div className="h-1/2 "></div>
            <div className="h-1/2 ">
                <div className="flex">
                    <div className="w-1/2">
                        <p className="text-center text-xs underline underline-offset-8 text-white font-bold">Sign In</p>
                    </div>
                    <div className="w-1/2">
                        <button className="absolute w-1/2 text-center text-xs text-white"onClick={()=> signUp()} >Sign Up</button>
                    </div>
                </div>
                <div className="flex mt-8">
                    <img src={email} alt="" className="w-4 h-4 ml-8 mt-2"/>
                    <input type="text" className="grow text-white px-10 py-1 underline underline-offset-4 text-bold bg-transparent" placeholder="Email Address"  required onChange={(event)=>handleEmail(event.target.value)}/>
                </div>
                <div className="flex mt-4">
                    <img src={pass} alt="" className="w-4 h-4 ml-8 mt-2"/>
                    <input type="password" className="grow text-white px-10 py-1 underline underline-offset-4 text-bold bg-transparent" placeholder="Password"required onChange={(event)=>handlePass(event.target.value)}/>
                </div>
                <button className="mt-24 absolute w-116px h-36px left-1/3 right-1/3 bg-[#DFD8D0] text-black rounded-full focus:ring ring-black" onClick={()=> userLogin()}>Sign In</button>
                <button className='mt-36 absolute w-102px h-15px left-1/4 right-1/4 text-center underline italic text-white' onClick={()=> forgotPass()}>Forgot The Password</button>
            </div>
        </div>

    )
}
export default Login