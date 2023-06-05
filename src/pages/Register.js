import React, { useState } from "react";
import email from "../image/email.png";
import pass from "../image/password.png";
import name from "../image/user_putih.png";
import axios from "axios"

function Register() {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Pass, setPass] = useState("")

    const handleName = (inputName) => {
        setName(inputName)
    }

    const handleEmail = (inputEmail) => {
        setEmail(inputEmail)
    }

    const handlePass = (inputPass) => {
        setPass(inputPass)
    }

    const userRegistrer = () => {
        const requestingData = {
            nama: Name,
            pass : Pass,
            email: Email,
        }
        axios({
            method: "POST",
            url:"http://localhost:3000/users",
            data: requestingData
        }).then((result)=> {
            console.log(result.data)
            if(result.data.registered){
                alert("register success")
                window.location.replace("/login")
            }else{
                alert("gagal mendaftar, ada yg salah")
            }
        })
    } 

    const signIn =() => {
        window.location.replace("/login")
    }

    return (
        <div className="h-screen bg-primary">
            <div className="h-1/2 "></div>
            <div className="h-1/2 ">
                <div className="flex">
                    <div className="w-1/2">
                        <button href=""  className="absolute w-1/2 text-center text-xs text-white" onClick={()=> signIn()}>Sign In</button>
                    </div>
                    <div className="w-1/2">
                        <p className="text-center underline underline-offset-8 text-xs text-white font-bold">Sign Up</p>
                    </div>
                </div>
                <div className="flex m-8">
                    <img src={name} alt="" className="w-4 h-4 ml-8 mt-2"/>
                    <input type="text" className="grow text-white px-10 py-1 underline underline-offset-4 bg-transparent" placeholder="Name" required onChange={(event)=>handleName(event.target.value)}/>
                </div>
                <div className="flex m-8">
                    <img src={email} alt="" className="w-4 h-4 ml-8 mt-2"/>
                    <input type="text" className="grow text-white px-10 py-1 underline underline-offset-4 bg-transparent" placeholder="Email Address" required onChange={(event)=>handleEmail(event.target.value)}/>
                </div>
                <div className="flex m-8">
                    <img src={pass} alt="" className="w-4 h-4 ml-8 mt-2"/>
                    <input type="password" className="grow text-white px-10 py-1 underline underline-offset-4 bg-transparent" placeholder="Password" required onChange={(event)=>handlePass(event.target.value)}/>
                </div>
                <button className="m-4 absolute w-116px h-36px left-1/3 right-1/3 bg-[#DFD8D0] text-black rounded-full focus:ring ring-black font-bold" onClick={()=> userRegistrer()}>Sign Up</button>
            </div>
        </div>

    )
}
export default Register