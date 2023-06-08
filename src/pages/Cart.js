import React from "react";
import plus from "../image/plus.png";
import minus from "../image/minus.png";

function cart() {
    return (
        <div className="h-screen bg-primary">
            <div className="h-1/13">
                <div className="font-bold text-xl text-white p-8">Detail Items</div>
            </div>
            <div className="h-7/13 overflow-y-auto">
                <div className="grid gap-2 grid-cols-3 p-8">
                    <div className="w-24 h-24 bg-[#D9D9D9] rounded-lg">

                    </div>
                    <div className="grid gap-2 grid-rows-2">
                        <div className="font-bold text-lg text-white font-inter">
                            menu
                        </div>
                        <div className="grid gap-2 grid-cols-9 place-items-center">
                            <button className="text-center text-white">
                                <img src={minus} alt="" className="" />
                            </button>
                            <div className="text-center text-white font-bold">1</div>
                            <button className="text-center text-white">
                                <img src={plus} alt="" className="" />
                            </button>
                        </div>
                    </div>
                    <div className="text-center text-[#FF8A00] font-inter">
                        Rp.HARGA
                    </div>
                </div>

            </div>
            <div className="fixed inset-x-0 bottom-2">
                <div className="h-4/13 pl-8">
                    <div className="grid gap-2 grid-cols-2">
                        <div className=" fixed bottom-20 left-12 text-left">
                            <div className="font-semibold text-sm text-white">Item</div>
                            <div className="font-semibold text-sm text-white">Subtotal</div>
                            <div className="font-semibold text-sm text-white">Tax (10%)</div>
                            <div className="font-bold text-xl text-white">Total</div>
                        </div>
                        <div className="fixed bottom-20 right-12 text-right">
                            <div className="font-semibold text-sm text-white">1</div>
                            <div className="font-semibold text-sm text-white">Rp. 40.000</div>
                            <div className="font-semibold text-sm text-white">Rp. 4.000</div>
                            <div className="font-bold text-xl text-white">Rp. 44.000</div>
                        </div>
                    </div>
                </div>
                <div className="h-1/13 font-bold text-xl text-white p-8">
                    Please pay at the cashier
                </div>
            </div>
        </div>
    )
}

export default cart;