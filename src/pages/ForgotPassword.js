import {React, useState} from "react";
import email from "../image/email.png";
import user from "../image/user_putih.png";
import axios from "axios"

function ForgotPassword() {
    const [name, setName] = useState("")
    const [Email, setEmail] = useState("")

    const handleName = (inputName) => {
        setName(inputName)
    }

    const handleEmail = (inputEmail) => {
        setEmail(inputEmail)
    }

    const next = () => {
        const requestingData = {
            nama: name,
            email : Email,
        }
        axios({
            method: "GET",
            url: "http://localhost:3000/users/forgotpassword",
            data: requestingData
        }).then((result) =>{
            console.log(result.data.rows)
            // if (result.data.status === true){
            //     localStorage.setItem("userID", result.data.user_ID)//masih undefined
            //     window.location.replace("/changepassword")
            // }
        })
    }
    return (
        <div className="h-screen bg-primary">
            <div className="h-1/2 "></div>
            <div className="h-1/2 ">
                <div className="w-center">
                    <p className="text-center text-xs underline underline-offset-8 text-white font-bold">Forgot Password</p>
                </div>
                <div className="w-center p-12 mt-4">
                    <div className="flex">
                        <img src={user} alt="" className="w-4 h-4 ml-8 mt-2"/>
                        <input type="text" className="grow text-white px-10 py-1 underline underline-offset-4 text-bold bg-transparent" placeholder="Name" required onChange={(event)=>handleName(event.target.value)}/>
                    </div>
                    <div className="flex">
                        <img src={email} alt="" className="w-4 h-4 ml-8 mt-2"/>
                        <input type="text" className="grow text-white px-10 py-1 underline underline-offset-4 text-bold bg-transparent" placeholder="Email Address" required onChange={(event)=>handleEmail(event.target.value)}/>
                    </div>
                </div>
                <button className="mt-4 absolute w-116px h-36px left-1/3 right-1/3 bg-[#DFD8D0] text-black rounded-full focus:ring ring-black" onClick={()=> next()}>Next</button>
            </div>
        </div>

    )
}
export default ForgotPassword