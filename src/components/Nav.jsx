import React, { useContext, useEffect } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { IoFastFoodOutline, IoSearch } from 'react-icons/io5';
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

function Nav() {

  let { input, setInput, cate, setCate, showCart, setShowCart } = useContext(dataContext);

  useEffect(() => {
    let newList = food_items.filter((item) => item.food_name.includes(input) || item.food_name.toLowerCase().includes(input));
    setCate(newList);
  }, [input])

  let items = useSelector(state=>state.cart)

  return (
    <div className="w-full h-25 flex justify-between items-center px-5 md:px-8">
      <div className="w-15 h-15 bg-white 
      flex justify-center items-center
      rounded-md shadow-xl">
        <IoFastFoodOutline className="w-7.5 h-7.5 text-green-500" />
      </div>

      <form action="" className="w-[45%] h-14 flex justify-start items-center gap-5 px-5 bg-white rounded-md shadow-md md:w-[65%]" onSubmit={(e) => e.preventDefault()}>
        <IoSearch className="w-4 h-4 text-green-500 md:w-6 md:h-6" />
        <input type="text" placeholder="Search Items..." className="w-full outline-none text-[15px] md:text-[18px]"
          onChange={(e) => setInput(e.target.value)} value={input} />
      </form>

      <div className="w-15 h-15 bg-white 
      flex justify-center items-center
      rounded-md shadow-xl relative cursor-pointer"
        onClick={() => 
          setShowCart(true)
        }>
        <span className="absolute top-0 right-2 text-green-500 font-bold text-[18px]">{items.length}</span>
        <FiShoppingBag className="w-7.5 h-7.5 text-green-500" />
      </div>
    </div>
  )
}

export default Nav;
