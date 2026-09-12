import React from 'react';
import image1 from "../assets/image1.avif";
import { MdDeleteForever } from 'react-icons/md';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

function Card2({name,id,price,image,qty}) {
    let dispatch=useDispatch()
    return (
        <div className="w-full h-30 p-2 shadow-lg flex justify-between">
            <div className="w-[80%] h-full flex gap-5">
                <div className="w-[50%] h-full overflow-hidden rounded-lg">
                    <img src={image} alt="" className="object-cover"/>
                </div>

                <div className="w-[80%] h-full flex flex-col gap-2">
                    <div className="font-bold text-lg text-gray-600">{name}</div>

                    <div className="w-24 h-9 bg-gray-400 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2
                     border-green-400 text-xl ">
                        <button className="w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200" onClick={() => qty>1?dispatch((DecrementQty(id))):1}>-</button>
                        <span className="w-[40%] h-full bg-slate-100 flex justify-center items-center text-green-400">{qty}</span>
                        <button className="w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200" onClick={()=> dispatch(IncrementQty(id))}>+</button>
                    </div>
                </div>

            </div>


            <div className="flex flex-col justify-start items-end gap-8">
                <span className="text-xl text-green-400 font-semibold">Rs- {price}</span>
                <MdDeleteForever className="text-red-400 text-xl w-7 h-7 cursor-pointer" onClick={() => dispatch(RemoveItem(id))}/>
            </div>
        </div>
    )
}

export default Card2;