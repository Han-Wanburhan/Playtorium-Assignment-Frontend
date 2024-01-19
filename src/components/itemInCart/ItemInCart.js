import { useState, useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";

const ItemInCart = ({ cartItem }) => {
  const [instock, setInstock] = useState(0);
  const [count, setCount] = useState(1);
  const [countitem, setCountItem] = useState(1);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    // เมื่อ cartItem.Quantity เปลี่ยนแปลง
    // ให้เรียก setCountItem ด้วยค่าใหม่
    setCountItem(cartItem.Quantity);
    setCount(cartItem.Quantity);
    setInstock(cartItem.Product.P_In_Stock);
    setPrice(cartItem.Product.P_Price * cartItem.Quantity);
  }, []);

  const handleClickAdd = async (value) => {
    console.log(value, count);
    const CustomerID = parseInt(localStorage.getItem("CustomerID"));
    try {
      const data = {
        customer_id: CustomerID,
        product_id: value,
        quantity: count,
      };

      const response = await axios.post(
        `http://127.0.0.1:8081/addtocart`,
        data
      );
      // You can handle the response data here
      console.log(response.data);
      setCountItem(response.data.cart_item.Quantity);
      setPrice(response.data.cart_item.Quantity * cartItem.Product.P_Price);
    } catch (error) {
      alert("Error");
      console.error("Error fetching data:", error);
    }
  };

  const handleCount = (e) => {
    console.log(count);
    if (e.target.value === "-") {
      if (count > 1) {
        setCount(count - 1);
      }
    } else {
      if (count < instock) {
        setCount(count + 1);
      }
    }

    handleClickAdd(cartItem.Product.ID);
  };
  return (
    <div
      className="w-8/12 bg-white flex border-b-8 border-[#efefef]  "
      key={cartItem.Product.ID}
    >
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
            value={countitem}
          />
          <input
            type="submit"
            className="w-10 h-10  font-extrabold rounded-md bg-[#D9D9D9] hover:border-2 border-[#5787B3]"
            value={"+"}
            onClick={handleCount}
          />
        </div>
        <span className=" text-2xl font-medium">{price.toLocaleString()}฿</span>
      </div>
      <div className="w-2/12 flex justify-center items-center">
        <FaRegTrashAlt className="text-5xl text-[#FF0000]" />
      </div>
    </div>
  );
};

export default ItemInCart;
