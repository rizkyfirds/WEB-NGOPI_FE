import React from "react";
import logo from "../image/LOGO.png";

function Home() {
    const start = () => {
        window.location.replace("/login")
    }
    return (
        <div className="h-screen bg-bgHome">
            <div className="h-1/2">
                <img src={logo} alt="" className="m-auto h-3/4 pt-12" />
            </div>
            <div className="h-1/2">
                <div className=" p-8">
                    <div className="bg-[#DFD8D0]/80 px-center rounded-lg p-12 font-bold text-xl text-center text-[#451a03]">
                        <p>Welcome to Our Coffee Shop</p>
                        Our coffee products are guaranteed to be 100% natural from gardening to processing into coffee beans.
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 place-items-center">
                    <button className="mt-20 absolute w-60 h-10 px-center bg-[#DFD8D0] text-black font-bold rounded-full focus:ring ring-black" onClick={() => start()}>Get Started</button>
                </div>

            </div>
        </div>
    )
}

export default Home;