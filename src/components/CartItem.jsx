import { toast } from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed from Cart");
  };

  return (
    <div
      className="flex flex-col w-[450px] mt-6 justify-center items-center gap-16 h-[180px] 
                 rounded-[30px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] 
                 cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
    >
      <div className="flex gap-8 mt-8 h-[200px] w-[400px]">
        <div>
          <img src={item.image} className="mt-4 h-[120px]" alt={item.title} />
        </div>
        <div className="h-[180px]">
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 cursor-pointer">
            {item.title}
          </h1>
          <p className="w-40 text-gray-500 font-normal text-[12px] text-left">
            {item.description.split(" ").slice(0, 10).join(" ") + "..."}
          </p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div
              onClick={removeFromCart}
              className="text-2xl hover:scale-110 transition-transform duration-200"
            >
              <FcDeleteDatabase />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
