import { MdAddShoppingCart } from "react-icons/md";
import { useState } from "react";
const ItemDetail = () => {
  const [url, setUrl] = useState(
    "https://media-cdn.bnn.in.th/268708/Microsoft-Xbox-Controller-USB-C-Cable-Black-1.jpg"
  );
  const [count, setCount] = useState(0);
  const handleClick = (e) => {
    setUrl(e.target.src);
  };

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
    <div className="content mt-4 flex justify-center ">
      <div className="flex   w-10/12 h-full  justify-center ">
        <div className="flex w-10/12  h-full items-center bg-white pb-20">
          <div className="left w-2/5 ml-2">
            <div className="top">
              <img src={url} alt="" />
            </div>
            <div className="bottom">
              <div className="w-1/5 flex gap-4">
                <img
                  className="hover:border-2 border-[#5787B3]"
                  src="https://media-cdn.bnn.in.th/268708/Microsoft-Xbox-Controller-USB-C-Cable-Black-1.jpg"
                  alt=""
                  onClick={handleClick}
                />
                <img
                  className="hover:border-2 border-[#5787B3]"
                  src="https://media-cdn.bnn.in.th/268710/Microsoft-Xbox-Controller-USB-C-Cable-Black-3-square_medium.jpg"
                  alt=""
                  onClick={handleClick}
                />
                <img
                  className="hover:border-2 border-[#5787B3]"
                  src="https://media-cdn.bnn.in.th/268711/Microsoft-Xbox-Controller-USB-C-Cable-Black-4-square_medium.jpg"
                  alt=""
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
          <div className="right w-3/5 h-full ps-10 pe-20">
            <div className="top">
              <div className="name ">
                <span className="text-6xl font-semibold">
                  Microsoft Xbox Wireless Controller
                </span>
              </div>
              <div className="price mt-6">
                <span className="text-5xl font-medium text-[#FF0000]">
                  2,500 THB
                </span>
              </div>
              <div className="more-detail mt-4">
                <span className="text-3xl  font-semibold">
                  รายละเอียดสินค้า
                </span>
              </div>
              <div className="more-detail mt-2 h-48 overflow-auto">
                <span className="text-xl font-normal ">
                  สัมผัสกับการออกแบบที่ทันสมัยของ Xbox Wireless Controller
                  พื้นผิวดีไซน์การออกแบบทรงเรขาคณิต
                  เพื่อเพิ่มความสะดวกสบายขณะใช้งานระหว่างการเล่นเกม
                  ไม่ว่าจะเป็นเล่นแบบไร้สายหรือใช้สาย USB-C ขนาด 9 นิ้วที่ให้มา
                  จับภาพและแชร์ภาพได้อย่างง่ายดายด้วยปุ่มแชร์
                  สามารถเล่นเกมที่ชื่นชอบบน PC, Adroid, IOS ผ่าน Bluetooth
                  เพื่อประสบการณ์การเล่นเกมที่ดีที่สุด
                </span>
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
                  {" ทั้งหมด xx ชิ้น "}
                </span>
              </div>
              <div className="w-3/4 mt-16 flex flex-row gap-10">
                <button
                  type="submit"
                  className="w-5/12 h-12 border-2 border-[#ff4c4c] rounded-md bg-[#ff4c4c49] flex justify-center items-center"
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
