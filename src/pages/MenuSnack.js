import React, { useState } from "react";
import user from "../image/user_putih.png";
import search from "../image/search.png";
import home from "../image/home.png";
import cart from "../image/cart.png";
import wishlist from "../image/wishlist.png";
import logo from "../image/LOGO.png";
import axios from "axios"
import { useEffect } from "react";

function MenuCoffee() {

    const [listProd, setProdList] = useState([])
    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:3000/product/snack"
        }).then((result) => {
            setProdList(result.data.dataProd)
        })
    }, [])
    const coffee = () => {
        window.location.replace("/MenuCoffee")
    }
    const maincourse = () => {
        window.location.replace("/MenuMainCourse")
    }
    const menuothers = () => {
        window.location.replace("/MenuOthers")
    }
    const Menucart = () => {
        window.location.replace("/Cart")
    }
    const DetailProd = (id)=> {
        window.location.replace(`/detailitems/${id}`)
    }
    return (
        <div className="min-h-screen bg-primary">
            <div className="h-1/13">
                <div className="flex">
                    <div className="w-4/5">
                        <img src={logo} alt="" className="w-20 h-20 m-6" />
                    </div>
                    <div className="w-1/5 grid grid-cols-3 gap-2 ">
                        <div>
                            <img src={user} alt="" className="w-10 h-10 m-4 mt-8" />
                        </div>
                        <div className="col-span-2 m-auto text-center text-xl text-white font-bold">
                            <h3 >{localStorage.getItem("nama")}</h3>
                        </div>
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
                            <img src={search} alt="" className="w-4 h-4 ml-2 mt-2 mb-2" />
                            <input type="text" className="grow text-white px-4 py-1 font-medium text-sm bg-transparent" placeholder="Find your coffee" />
                        </div>
                        <div className="w-1/6"></div>
                    </div>
                </div>
            </div>
            <div className="h-8/13">
                <div className="h-1/10">
                    <div className="flex">
                        <button className="w-1/4 text-center text-xs text-white text-bold" onClick={() => coffee()}>Coffee</button>
                        <p className="w-1/4 text-center text-xs text-[#FF8A00] text-bold" >Snack</p>
                        <button className="w-1/4 text-center text-xs text-white text-bold" onClick={() => maincourse()}>Main Course</button>
                        <button className="w-1/4 text-center text-xs text-white text-bold" onClick={() => menuothers()}>Others</button>
                    </div>
                </div>
                <div className="h-9/10">
                    <div className="grid gap-8 grid-cols-4 p-8">
                        {listProd.map((value, i) => {
                            const { product_id, name_prod, desc_prod, price_prod, pict_prod } = value
                            return (
                                <div className="place-content-center">
                                    <div className="w-40 h-52 bg-[#D9D9D9] rounded-lg m-2 place-items-center" onClick={() => DetailProd(product_id)}>
                                        {/* <  img src={URL.createObjectURL(pict_prod)} /> */}
                                    </div>
                                    <p className="text-white font-semibold">- {name_prod}</p>
                                    <p className="text-white">{desc_prod}</p>
                                    <p className="text-[#FF8A00]">Rp. {price_prod}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="fixed inset-x-0 bottom-0 h-1/13">
                <div className="bg-[#000000]">
                <div className="grid gap-4 grid-cols-3 place-items-center">
                        <div>
                            <div className=" ">
                                <img src={home} alt="" className="w-10 h-10 p-1 m-4" />
                            </div>
                        </div>
                        <div>
                            <button onClick={() => Menucart()}>
                                <img src={cart} alt="" className="w-10 h-10 p-1 m-4" />
                            </button>
                        </div>
                        <div >
                            <div className=" ">
                                <img src={wishlist} alt="" className="w-10 h-10 p-1 m-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MenuCoffee;