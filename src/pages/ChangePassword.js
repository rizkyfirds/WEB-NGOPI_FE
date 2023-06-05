import {React,useState} from "react";
import pass from "../image/password.png";
import axios from "axios"

function ChangePassword() {
    const [NEWPass, setNewPass] = useState("")
    const [Pass, setPass] = useState("")

    const handleNewPass = (inputNewPass) => {
        setNewPass(inputNewPass)
    }

    const handlePass = (inputPass) => {
        setPass(inputPass)
    }
    const ChangePASS = () => {
        const requestingData = {
            pass: Pass,
            newpass : NEWPass,
            id: localStorage.getItem("userID")
        }
        axios({
            method: "PUT",
            url:"http://localhost:3000/users/changepassword",
            data: requestingData
        }).then((result)=> {
            if(result.status){
                alert("user updated")
                window.location.replace("/login")
            }else{
                alert("user fail updated")
            }
        })
    }

    return (
        <div className="h-screen bg-primary">
            <div className="h-1/2 "></div>
            <div className="h-1/2 ">
                <div className="w-center">
                    <p className="text-center text-xs underline underline-offset-8 text-white text-bold">Forgot Password</p>
                </div>
                <div className="flex mt-8">
                    <img src={pass} alt="" className="w-4 h-4 ml-8 mt-2"/>
                    <input type="text" className="grow text-white px-10 py-1 underline underline-offset-4 text-bold bg-transparent" placeholder="Old Password" required onChange={(event)=>handlePass(event.target.value)}/>
                </div>
                <div className="flex mt-4">
                    <img src={pass} alt="" className="w-4 h-4 ml-8 mt-2"/>
                    <input type="text" className="grow text-white px-10 py-1 underline underline-offset-4 text-bold bg-transparent" placeholder="New Password" required onChange={(event)=>handleNewPass(event.target.value)}/>
                </div>
                <button className="mt-28 absolute w-116px h-36px left-1/3 right-1/3 bg-[#DFD8D0] text-black rounded-full focus:ring ring-black" onClick={()=> ChangePASS()}>Confirm</button>
            </div>
        </div>
    )
}
export default ChangePassword