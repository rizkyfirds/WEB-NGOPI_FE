import React from "react";

function cart() {
    return (
        <div className="h-screen bg-primary">
            <div className="h-1/13">
                <div className="font-bold text-xl text-white p-4">Detail Items</div>
            </div>
            <div className="h-7/13 overflow-y-auto">
                <div className="grid gap-2 grid-cols-3 p-4">
                    <div className="w-24 h-24 bg-[#D9D9D9] rounded-lg">

                    </div>
                    <div className="grid gap-2 grid-rows-2">
                        <div className="font-bold text-lg text-white font-inter">
                            es kopi
                        </div>
                        <div className="grid gap-2 grid-cols-3 place-content-center">
                            <button className="text-center">-</button>
                            <div className="text-center">1</div>
                            <button className="text-center">+</button>
                        </div>
                    </div>
                    <div className="text-center text-[#FF8A00] font-inter">
                        Rp.100000000
                    </div>
                </div>

            </div>
            <div className="h-4/13">
                cc
            </div>
            <div className="h-1/13">
                ff
            </div>
        </div>
    )
}

export default cart;