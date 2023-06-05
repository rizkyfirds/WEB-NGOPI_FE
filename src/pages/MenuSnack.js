import React from "react";
import user from "../image/user_putih.png";
import search from "../image/search.png";
import home from "../image/home.png";
import cart from "../image/cart.png";
import wishlist from "../image/wishlist.png";
function MenuCoffee() {
    return (
        <div className="h-screen bg-primary">
            <div className="h-1/13">
                <div className="flex">
                    <div className="w-4/5"></div>
                    <div className="w-1/5">
                        <img src={user} alt="" className="w-10 h-10 p-1 m-4" />
                    </div>
                </div>
            </div>
            <div className="h-3/13">
                <div className="h-2/3">
                    <div className="w-1/2">
                        <p className="font-inter font-bold text-xl text-white ml-8">
                            Find The Best Coffee For You
                        </p>
                    </div>
                    <div className="w-1/2"></div>
                </div>
                <div className="h-1/3 m-4">
                    <div className="flex">
                        <div className="w-1/6"></div>
                        <div className="flex w-4/6 bg-[#564848] rounded-lg mt-8">
                            <img src={search} alt="" className="w-4 h-4 ml-2 mt-2 mb-2"/>
                            <input type="text" className="grow text-white px-4 py-1 font-medium text-sm bg-transparent" placeholder="Find your coffee"/>
                        </div>
                        <div className="w-1/6"></div>
                    </div>
                </div>
            </div>
            <div className="h-8/13">
                <div className="h-1/10">
                    <div className="flex">
                        <button className="w-1/4 text-center text-xs text-white text-bold">Coffee</button>
                        <p className="w-1/4 text-center text-xs text-[#FF8A00] text-bold">Snack</p>
                        <button className="w-1/4 text-center text-xs text-white text-bold">Main Course</button>
                        <button className="w-1/4 text-center text-xs text-white text-bold">Others</button>
                    </div>
                </div>
                <div className="h-9/10">
                    <div className="flex">
                        <div className="grid gap-4 grid-cols-2 m-4">
                            <div className="w-40 h-52 bg-[#D9D9D9] rounded-lg"></div>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1/13">
                <div className="flex bg-[#000000]">
                    <div className="w-1/3">
                        <div className="flex justify-center ">
                            <img src={home} alt="" className="w-10 h-10 p-1 m-4" />
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="flex justify-center ">
                            <img src={cart} alt="" className="w-10 h-10 p-1 m-4" />
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="flex justify-center ">
                            <img src={wishlist} alt="" className="w-10 h-10 p-1 m-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MenuCoffee;