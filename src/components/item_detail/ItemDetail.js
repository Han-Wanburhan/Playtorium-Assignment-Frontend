import { MdAddShoppingCart } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const ItemDetail = () => {
  const ID = localStorage.getItem("ID");
  const [url, setUrl] = useState("");
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [url3, setUrl3] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [detail, setDetail] = useState("");
  const [instock, setInstock] = useState(0);
  const [count, setCount] = useState(1);
  const handleClick = (e) => {
    setUrl(e.target.src);
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
  };

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8081/getallcategory/${ID}`
        );
        // console.log(response.data.product[0]);
        setName(response.data.product[0].P_Name);
        setDetail(response.data.product[0].P_Detail);
        setPrice(response.data.product[0].P_Price);
        setInstock(response.data.product[0].P_In_Stock);
        localStorage.setItem("Category", response.data.product[0].CategoryID);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8081/getimage/${ID}`
        );
        console.log(response.data.product[0].Image);
        setUrl(response.data.product[0].Image);
        setUrl1(response.data.product[0].Image);
        setUrl2(response.data.product[1].Image);
        setUrl3(response.data.product[2].Image);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  const handleClickAdd = async () => {
    const CustomerID = parseInt(localStorage.getItem("CustomerID"));
    try {
      const ProductID = parseInt(ID);
      const data = {
        customer_id: CustomerID,
        product_id: ProductID,
        quantity: count,
      };

      const response = await axios.post(
        `http://127.0.0.1:8081/addtocart`,
        data
      );
      // You can handle the response data here
      alert("Add to cart success!");
    } catch (error) {
      alert("Error");
      console.error("Error fetching data:", error);
    }
  };

  const countChange = (e) => {
    const reg = /^[0-9\b]+$/;
    if (e.target.value === "" || reg.test(e.target.value)) {
      if (Number(e.target.value) > instock) {
        setCount(instock);
      } else {
        setCount(Number(e.target.value));
      }
    }
  };

  return (
    <div className="content mt-4 flex justify-center ">
      <div className="flex   w-10/12 h-full  justify-center ">
        <div className="flex w-10/12  h-full items-center bg-white pb-20">
          <div className="left w-2/5 ml-2">
            <div className="top">
              <img className="w-full h-full" src={url} alt="" />
            </div>
            <div className="bottom">
              <div className="w-1/5 flex gap-4">
                <img
                  className="hover:border-2 border-[#5787B3]"
                  src={url1}
                  alt=""
                  onClick={handleClick}
                />
                <img
                  className="hover:border-2 border-[#5787B3]"
                  src={url2}
                  alt=""
                  onClick={handleClick}
                />
                <img
                  className="hover:border-2 border-[#5787B3]"
                  src={url3}
                  alt=""
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
          <div className="right w-3/5 h-full ps-10 pe-20">
            <div className="top">
              <div className="name ">
                <span className="text-6xl font-semibold">{name}</span>
              </div>
              <div className="price mt-6">
                <span className="text-5xl font-medium text-[#FF0000]">
                  {price.toLocaleString()} THB
                </span>
              </div>
              <div className="more-detail mt-4">
                <span className="text-3xl  font-semibold">
                  รายละเอียดสินค้า
                </span>
              </div>
              <div className="more-detail mt-2 h-48 overflow-auto">
                <span className="text-xl font-normal ">{detail}</span>
              </div>
            </div>
            <div className="bottom mt-6">
              <div className="flex gap-2">
                <span className="text-2xl">จำนวน</span>
                <input
                  type="submit"
                  className="w-10 h-10  font-extrabold rounded-md bg-[#D9D9D9] hover:border-2 border-[#5787B3]"
                  value={"-"}
                  onClick={handleCount}
                />
                <input
                  type="text"
                  className="w-10 h-10 border-2 rounded-md bg-[#D9D9D9] text-center font-semibold text-2xl"
                  value={count}
                  //   onChange={(e) => setCount(Number(e.target.value))}
                  onChange={countChange}
                />
                <input
                  type="submit"
                  className="w-10 h-10  font-extrabold rounded-md bg-[#D9D9D9] hover:border-2 border-[#5787B3]"
                  value={"+"}
                  onClick={handleCount}
                />
                <span className="text-2xl text-[#828282]">
                  {` ทั้งหมด ${instock} ชิ้น `}
                </span>
              </div>
              <div className="w-3/4 mt-16 flex flex-row gap-10">
                <button
                  type="submit"
                  className="w-5/12 h-12 border-2 border-[#ff4c4c] rounded-md bg-[#ff4c4c49] flex justify-center items-center"
                  onClick={handleClickAdd}
                >
                  <MdAddShoppingCart className="text-3xl font-semibold" />
                  <span className="text-lg ">เพิ่มไปยังรถเข็น</span>
                </button>

                <button
                  type="submit"
                  className="w-5/12 h-12 border-2  rounded-md bg-[#FF0000]"
                  value={"ซื้อสินค้า"}
                >
                  <span className="text-lg  text-white">ซื้อสินค้า</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
