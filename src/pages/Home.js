import React from "react";

function Home() {
    const start = () => {
        window.location.replace("/login")
    }
    return (
        <div className="h-screen bg-bgHome">
            <div className="h-1/2">
                <p className="bg-slate-100/60 px-center p-8 py-16 font-bold font-inter text-xl text-center text-[#6B2121]"> Welcome to Our Coffee Shop</p>
            </div>
            <div className="h-1/2">
                <div className=" p-8">
                    <p className="bg-slate-100/60 px-center rounded-lg p-12 font-bold text-xl text-center text-[#6B2121]">
                        Our coffee products are guaranteed to be 100% natural from gardening to processing into coffee beans.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-4 place-items-center">
                    <button className="mt-20 absolute w-60 h-10 px-center bg-[#302929] text-[#FF8A00] rounded-full focus:ring ring-black" onClick={()=> start()}>Get Started</button>
                </div>

            </div>
        </div>
    )
}

export default Home;