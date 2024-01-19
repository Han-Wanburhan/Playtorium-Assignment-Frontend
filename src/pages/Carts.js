import CartHeader from "../components/header/CartHeader";
import ItemInCart from "../components/itemInCart/ItemInCart";
import Sum from "../components/total/Summary";
import axios from "axios";
import { useEffect, useState } from "react";
const Carts = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const CustomerID = parseInt(localStorage.getItem("CustomerID"));

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const userid = CustomerID;
        const response = await axios.get(
          `http://127.0.0.1:8081/getallincart/${userid}`
        );
        // console.log(response.data.cart_items);
        setCartItems(response.data.cart_items);

        let temporaryTotal = 0;

        response.data.cart_items.forEach((cartItem, index) => {
          const totalcountbyitem = cartItem.Quantity * cartItem.Product.P_Price;
          temporaryTotal += totalcountbyitem;
        });
        setTotal(temporaryTotal);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  return (
    <div className="font-NotoThai">
      <CartHeader />
      <div className="content flex justify-center mt-10 flex-col">
        <div className="flex justify-center">
          <div className="w-8/12 bg-white flex">
            <div className="w-6/12 h-16 flex items-center">
              <span className="ml-10 text-xl font-medium">สินค้า</span>
            </div>

            <div className="w-4/12 h-16 flex items-center justify-between  ml-4">
              <span className=" text-xl font-medium">ราคาต่อชิ้น</span>
              <span className=" text-xl font-medium">จำนวน</span>
              <span className=" text-xl font-medium">ราคารวม</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-8/12 h-6 "></div>
        </div>
        <div className="content flex justify-center  flex-col">
          {cartItems.map((cartItem) => (
            <div className="flex justify-center ">
              <ItemInCart key={cartItem.id} cartItem={cartItem} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-8/12 h-60 "></div>
      </div>
      <Sum total={total} />
    </div>
  );
};

export default Carts;
