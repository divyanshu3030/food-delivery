import React, { useContext, useState } from 'react';
import Nav from '../components/Nav';
import categories from '../Category';
import Card from '../components/Card';
import { food_items } from '../food.js';
import { dataContext } from '../context/UserContext.jsx';
import { RxCross2 } from 'react-icons/rx';
import Card2 from '../components/Card2.jsx';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


function Home() {

  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

  function filter(categories) {
    if (categories.toLowerCase() === "all") {
      setCate(food_items);
    }
    else {
      const newList = food_items.filter((item) => (item.food_category.toLowerCase() === categories.toLowerCase()));
      setCate(newList);
    }
  }

  let items = useSelector(state => state.cart);

  let subtotal = items.reduce((total, item) => total + item.qty * item.price, 0)
  let deliveryFee = 20;
  let taxes = subtotal * 1 / 100;
  let total = subtotal + deliveryFee + taxes;


  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      {!input ? <div className="flex flex-wrap justify-center items-center gap-6 w-full">
        {categories.map((item) => (
          <div key={item.id} className="w-28 h-28 bg-white flex flex-col gap-2 justify-center items-center text-[15px] text-gray600 font-semibold rounded-xl shadow-xl
           hover:bg-green-200 cursor-pointer transition-all duration-300 ease-in-out" onClick={() => filter(item.name)}>
            {item.image}
            {item.name}
          </div>
        ))}
      </div> : null}

      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
        {cate.length>1?cate.map((item) => (
          <Card key={item.id} name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
        ))
        : <div className="text-center text-2xl text-green-600 font-semibold pt-8">No Dish Found!!</div>}
        
      </div>

      <div className={`w-full h-full fixed top-0 right-0 bg-white shadow-xl rounded-l-xl p-6 md:w-[40vw] transition-all duration-500 ${showCart ? "translate-x-0" : "translate-x-full"} 
      flex flex-col items-center overflow-auto`}>
        <header className="w-full flex justify-between items-center ">
          <span className="text-[20px] font-semibold text-green-500">Order Items</span>
          <RxCross2 className="w-8 h-8 text-green-400 text-[18px] font-semibold cursor-pointer hover:text-green-700 transition-transform hover:translate-y-0.5"
            onClick={() => setShowCart(false)} />

        </header>

        {items.length > 0 ? <>

          <div className="w=full mt-9 flex flex-col gap-8">
            {items.map((item) => (
              <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
            ))}
          </div>

          <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8">
            <div className="w-full flex justify-between items-center">
              <span className="text-xl text-gray-600 font-semibold">Subtotal</span>
              <span className="text-green-500 font-semibold text-lg">Rs {subtotal}/-</span>
            </div>

            <div className="w-full flex justify-between items-center">
              <span className="text-xl text-gray-600 font-semibold">Delivery Fee</span>
              <span className="text-green-500 font-semibold text-lg">Rs {deliveryFee}/-</span>
            </div>

            <div className="w-full flex justify-between items-center">
              <span className="text-xl text-gray-600 font-semibold">Taxes</span>
              <span className="text-green-500 font-semibold text-lg">Rs {taxes}/-</span>
            </div>
          </div>

          <div className="w-full flex justify-between items-center p-8">
            <span className="text-2xl text-gray-600 font-semibold">Total</span>
            <span className="text-green-500 font-semibold text-xl">Rs {total}/-</span>
          </div>

          <button className="w-[85%] p-3 bg-green-500 text-white rounded-lg hover:bg-green-400 transition-all cursor-pointer" 
          onClick={() => {toast.success("Order placed..")}}>Place Order</button>
        </>:<div className="text-center text-2xl text-green-500 font-semibold pt-8">Empty Card...</div>}


      </div>


    </div>
  );
}

export default Home;
