// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import CartItem from "../components/CartItem";

// const Cart = () => {
//   const { cart } = useSelector((state) => state);
//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect(() => {
//     setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
//   }, [cart]);

//   return (
//     <div>
//       {
//         cart.length > 0 ?
//           (
//             <div className="flex gap-16 max-w-6xl p-6 mx-auto flex-wrap lg:flex-nowrap">

//               {/* Left Section: Cart Items */}
//               <div className="lg:w-[70%]">
//                 {
//                   cart.map((item, index) => (
//                     <CartItem key={item.id} item={item} itemIndex={index} />
//                   ))
//                 }
//               </div>

//               {/* Right Section: Summary */}
//               <div className="md:w-[30%] w-full flex flex-col justify-between mt-10">
//                 <div className="flex flex-col gap-6">
//                   <div>
//                     <p className="text-xl text-[#166534] uppercase font-[600]">Your Cart</p>
//                     <p className="text-5xl font-[600] text-[#15803d] uppercase mb-4">Summary</p>
//                     <p className="font-[600] text-xl text-slate-700">
//                       Total Items: <span className="font-normal">{cart.length}</span>
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-slate-700 text-xl font-[600] mb-3">
//                       Total Amount:
//                       <span className="font-bold ml-2 text-black">${totalAmount.toFixed(2)}</span>
//                     </p>
//                     <button className="text-lg w-full py-2.5 rounded-lg font-bold text-white bg-[#15803d]
//                       border-2 border-[#15803d] hover:bg-white hover:text-[#15803d] transition-all duration-300 ease-in">
//                       CheckOut Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )
//           :
//           (
//             <div className="w-screen h-[calc(100vh-80px)] flex flex-col gap-6 justify-center items-center">
//               <h1 className="font-[600] text-xl">Your Cart is Empty!</h1>
//               <Link to={"/"}>
//                 <button className="bg-[#16a34a] text-white text-md uppercase font-[600] py-3 px-10 rounded-md
//                   border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] ease-in transition-all duration-300">
//                   Shop Now
//                 </button>
//               </Link>
//             </div>
//           )
//       }
//     </div>
//   );
// };

// export default Cart;
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {
        cart.length > 0 ?
          (
            <div className="flex gap-16 max-w-6xl p-6 mx-auto flex-wrap lg:flex-nowrap min-h-[80vh]">

              {/* Left Section: Cart Items */}
              <div className="lg:w-[70%]">
                {
                  cart.map((item, index) => (
                    <CartItem key={item.id} item={item} itemIndex={index} />
                  ))
                }
              </div>

              {/* Right Section: Summary Centered */}
              <div className="md:w-[30%] w-full flex items-center">
                <div className="flex flex-col gap-6 w-full">
                  <div>
                    <p className="text-xl text-[#166534] uppercase font-[600]">Your Cart</p>
                    <p className="text-5xl font-[600] text-[#15803d] uppercase mb-4">Summary</p>
                    <p className="font-[600] text-xl text-slate-700">
                      Total Items: <span className="font-normal">{cart.length}</span>
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-700 text-xl font-[600] mb-3">
                      Total Amount:
                      <span className="font-bold ml-2 text-black">${totalAmount.toFixed(2)}</span>
                    </p>
                    <button className="text-lg w-full py-2.5 rounded-lg font-bold text-white bg-[#15803d]
                      border-2 border-[#15803d] hover:bg-white hover:text-[#15803d] transition-all duration-300 ease-in">
                      CheckOut Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
          :
          (
            <div className="w-screen h-[calc(100vh-80px)] flex flex-col gap-6 justify-center items-center">
              <h1 className="font-[600] text-xl">Your Cart is Empty!</h1>
              <Link to={"/"}>
                <button className="bg-[#16a34a] text-white text-md uppercase font-[600] py-3 px-10 rounded-md
                  border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] ease-in transition-all duration-300">
                  Shop Now
                </button>
              </Link>
            </div>
          )
      }
    </div>
  );
};

export default Cart;
