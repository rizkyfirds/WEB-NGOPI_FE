import { React, useState } from "react";
import pass from "../image/password.png";
import logo from "../image/LOGO.png";
import axios from "axios"

function ChangePassword() {
    const [NEWPass, setNewPass] = useState("")
    const [ConfPass, setConfPass] = useState("")

    const handleNewPass = (inputNewPass) => {
        setNewPass(inputNewPass)
    }

    const handleConfPass = (inputConfPass) => {
        setConfPass(inputConfPass)
    }
    const ChangePASS = () => {
        console.log(localStorage.getItem("userID"))
        if (ConfPass === NEWPass) {
            const requestingData = {
                newpass: NEWPass,
                id: localStorage.getItem("userID")
            }
            axios({
                method: "PUT",
                url: "http://localhost:3000/users/changepassword",
                data: requestingData
            }).then((result) => {
                if (result.status) {
                    alert("user updated")
                    window.location.replace("/login")
                } else {
                    alert("user fail updated")
                }
            })
        } else {
            alert("Data Invalid")
        }

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
                                <p className="text-center text-xs underline underline-offset-8 text-white font-bold">Forgot Password</p>
                            </div>
                            <div className="flex mt-8">
                                <img src={pass} alt="" className="w-4 h-4 ml-8 mt-2" />
                                <input type="password" className="grow text-white px-10 py-1 underline underline-offset-4 text-bold bg-transparent" placeholder="New Password" required onChange={(event) => handleNewPass(event.target.value)} />
                            </div>
                            <div className="flex mt-4">
                                <img src={pass} alt="" className="w-4 h-4 ml-8 mt-2" />
                                <input type="password" className="grow text-white px-10 py-1 underline underline-offset-4 text-bold bg-transparent" placeholder="Confirm Password" required onChange={(event) => handleConfPass(event.target.value)} />
                            </div>
                            <button className="mt-28 absolute w-116px h-36px left-1/3 right-1/3 bg-[#DFD8D0] text-black rounded-full focus:ring ring-black" onClick={() => ChangePASS()}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChangePassword