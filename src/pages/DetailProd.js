import React, {useEffect, useState} from "react";
import silang from "../image/x_white.png";
import plus from "../image/plus.png";
import minus from "../image/minus.png";
import axios from "axios"
import { useParams } from "react-router-dom";

const menu = () => {
    window.location.replace("/menucoffee")
}

function DetailProd() {
    const params = useParams();
    const [detaiProd, seDetailtProd] = useState([])
    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:3000/product/detailprod/${params.id}`,
        }).then((result) => {
            seDetailtProd(result.data.rows[0])
        })
    }, [])

    return (
        <div className="h-screen bg-white">
            <div className="h-1/13 bg-primary">
                <div className="grid gap-2 grid-cols-2">
                    <div className="font-bold text-xl text-white p-8">Detail Product</div>
                    <button className=" fixed right-12 p-6" onClick={() => menu()}>
                        <img src={silang} alt="" className="w-10 h-10 " />
                    </button>
                </div>
            </div>
            <div className="h-11/13 overflow-y-auto">
                <div className="grid grid-rows-6 grid-cols-2 gap-4 p-24 ">
                    <div className="w-1/2 row-span-6 bg-[#D9D9D9] rounded-lg ml-14 ">

                    </div>
                    <div className="font-semibold text-xl text-primary">{detaiProd.name_prod}</div>
                    <div className="font-semibold text-xl text-primary">Description:{detaiProd.desc_prod}</div>
                    <div className="font-semibold text-xl text-primary">Price: Rp.{detaiProd.price_prod}</div>
                    <div className="grid gap-2 grid-cols-9 place-items-center">
                            <button className="text-center text-white">
                                <img src={minus} alt="" className="" />
                            </button>
                            <div className="text-center text-primary font-bold">1</div>
                            <button className="text-center text-white">
                                <img src={plus} alt="" className="" />
                            </button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProd;