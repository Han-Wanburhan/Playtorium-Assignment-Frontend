import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
const ItemInCart = ({ cartItem }) => {
  const [count, setCount] = useState(0);

  const handleCount = (e) => {
    console.log(count);
    if (e.target.value === "-") {
      if (count > 0) {
        setCount(count - 1);
      }
    } else {
      if (count < 99) {
        setCount(count + 1);
      }
    }
  };

  const countChange = (e) => {
    const reg = /^[0-9\b]+$/;
    if (e.target.value === "" || reg.test(e.target.value)) {
      setCount(Number(e.target.value));
    }
  };
  return (
    <div className="w-8/12 bg-white flex border-b-8 border-[#efefef]  ">
      <div className="w-6/12  flex items-center">
        <div className="flex h-56">
          <div className="flex items-center gap-2 ">
            <img className="w-48 h-48" src={cartItem.Product.image} alt="" />
            <span className="text-3xl">{cartItem.Product.P_Name}</span>
          </div>
        </div>
      </div>
      <div className="w-4/12  flex  justify-between ml-10 items-center">
        <span className=" text-2xl font-medium">
          {cartItem.Product.P_Price.toLocaleString()}฿
        </span>
        <div className="flex gap-3">
          <input
            type="submit"
            className="w-10 h-10  font-extrabold rounded-md bg-[#D9D9D9] hover:border-2 border-[#5787B3]"
            value={"-"}
            onClick={handleCount}
          />
          <input
            type="text"
            className="w-10 h-10 border-2 rounded-md bg-[#D9D9D9] text-center font-semibold text-2xl"
            value={cartItem.Quantity}
            //   onChange={(e) => setCount(Number(e.target.value))}
            onChange={countChange}
          />
          <input
            type="submit"
            className="w-10 h-10  font-extrabold rounded-md bg-[#D9D9D9] hover:border-2 border-[#5787B3]"
            value={"+"}
            onClick={handleCount}
          />
        </div>
        <span className=" text-2xl font-medium">
          {(cartItem.Product.P_Price * cartItem.Quantity).toLocaleString()}฿
        </span>
      </div>
      <div className="w-2/12 flex justify-center items-center">
        <FaRegTrashAlt className="text-5xl text-[#FF0000]" />
      </div>
    </div>
  );
};

export default ItemInCart;
