import React, {useEffect, useState} from "react";
import silang from "../image/x.png";
import axios from "axios"
import { useParams } from "react-router-dom";

const menu = () => {
    window.location.replace("/menucoffee")
}

function Popup() {
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
            <div className="h-1/13">
                <div className="grid gap-2 grid-cols-2">
                    <div className="font-bold text-xl text-primary p-8">Detail Product</div>
                    <button className=" fixed p-8 right-12" onClick={() => menu()}>
                        <img src={silang} alt="" className="w-12 h-12" />
                    </button>
                </div>
            </div>
            <div className="h-11/13 overflow-y-auto">
                <div className="grid grid-rows-6 grid-cols-2 gap-4 p-24">
                    <div className="w-1/2 row-span-6 bg-[#D9D9D9] rounded-lg ml-14 items-center">

                    </div>
                    <div className="font-semibold text-xl text-primary">{detaiProd.name_prod}</div>
                    <div className="font-semibold text-xl text-primary">Description:{detaiProd.desc_prod}</div>
                    <div className="font-semibold text-xl text-primary">Price: {detaiProd.price_prod}</div>
                </div>
            </div>
        </div>
    )
}

export default Popup;