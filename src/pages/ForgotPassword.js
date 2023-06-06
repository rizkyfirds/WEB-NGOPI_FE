import { React, useState } from "react";
import emaill from "../image/email.png";
import user from "../image/user_putih.png";
import logo from "../image/LOGO.png";
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
        //const setProdList = useState([])
        //console.log(name, Email)
        const requestingData = {
            nama: name,
            email: Email
        }
        axios({
            method: "POST",
            url: "http://localhost:3000/users/forgotpassword",
            data: requestingData
        }).then((result) => {
            if (result.data.status === true) {
                /* eslint-disable no-unused-expressions */
                localStorage.setItem("userID", result.data.rows[0].user_ID)//masih undefined
                window.location.replace("/changepassword")
            }
        })
    }
    return (
        <div className="h-screen bg-bgHome">
            <div className="h-1/2 ">
                <img src={logo} alt="" className="m-auto h-3/4 pt-8" />
            </div>
            <div className="h-1/2 ">
                <div className="grid grid-cols-4 gap-4">
                    <div></div>
                    <div className="col-span-2">
                        <div className="w-center p-8 bg-[#451a03]/80 rounded-xl">
                            <div className="w-center">
                                <p className="text-center text-xs underline underline-offset-8 text-white font-bold pb-8">Forgot Password</p>
                            </div>
                            <div className="flex">
                                <img src={user} alt="" className="w-4 h-4 ml-8 mt-2" />
                                <input type="text" className="grow text-white px-10 py-1 underline underline-offset-4 text-bold bg-transparent" placeholder="Name" required onChange={(event) => handleName(event.target.value)} />
                            </div>
                            <div className="flex">
                                <img src={emaill} alt="" className="w-4 h-4 ml-8 mt-2" />
                                <input type="text" className="grow text-white px-10 py-1 underline underline-offset-4 text-bold bg-transparent" placeholder="Email Address" required onChange={(event) => handleEmail(event.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>

                <button className="mt-4 absolute w-116px h-36px left-1/3 right-1/3 bg-[#DFD8D0] font-semibold text-black rounded-full focus:ring ring-black" onClick={() => next()}>Next</button>
            </div>
        </div>

    )
}
export default ForgotPassword