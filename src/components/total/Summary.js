import React, { useState, useEffect } from "react";
import axios from "axios";
const Sum = ({ total }) => {
  const [totalshow, setTotalShow] = useState(total);
  const [selectedDiscount, setSelectedDiscount] = useState("");
  const [selectedOntopDiscount, setSelectedOntopDiscount] = useState("");
  const [coupondiscount, setCouPonDiscount] = useState(0);
  const [ontopdiscount, setOntopDiscount] = useState(0.0);
  const [setleted, setSelected] = useState(false);
  const CustomerID = parseInt(localStorage.getItem("CustomerID"));
  const [pointInput, setPointInput] = useState();
  const [specialdis, setSpacialDis] = useState(0);

  useEffect(() => {
    setTotalShow(total);
  }, [total]);

  const handleCouponDiscountChange = async (event) => {
    const selectedValue = event.target.value;
    setSelectedDiscount(selectedValue);

    if (selectedValue === "Dis50THB") {
      try {
        const data = {
          total: total,
          amount: 50,
        };

        const response = await axios.post(
          "http://127.0.0.1:8081/total/couponfixdis",
          data
        );
        console.log(response.data);

        setTotalShow(response.data.newTotal);
        setCouPonDiscount(response.data.discount);
      } catch (error) {
        alert("Error");
        console.error("Error fetching data:", error);
      }
    } else if (selectedValue === "Dis10Per") {
      try {
        const data = {
          total: total,
          precentage: 10,
        };

        const response = await axios.post(
          "http://127.0.0.1:8081/total/couponperdis",
          data
        );
        console.log(response.data);

        setTotalShow(response.data.newTotal);
        setCouPonDiscount(response.data.discount);
      } catch (error) {
        alert("Error");
        console.error("Error fetching data:", error);
      }
    } else if (selectedValue === "") {
      console.log(coupondiscount, ontopdiscount, specialdis);
      setCouPonDiscount(0);
    }
  };
  const handleOntopDiscountChange = async (event) => {
    const selectedValue = event.target.value;
    setSelectedOntopDiscount(selectedValue);
    if (selectedValue === "Dis15PerByCategory") {
      setSelected(false);
      setPointInput(0);
      try {
        const data = {
          customerid: CustomerID,
          precentage: 15,
          total: total,
          category: 1,
        };

        const response = await axios.post(
          "http://127.0.0.1:8081/total/ontopdisbycate",
          data
        );
        console.log(response.data);

        setTotalShow(response.data.newtotal);
        setOntopDiscount(response.data.discount);
      } catch (error) {
        alert("Error");
        console.error("Error fetching data:", error);
      }
    } else if (selectedValue === "DisByPoints") {
      setSelected(true);
    } else if (selectedValue === "") {
      setPointInput(0);
      setOntopDiscount(0);
      setSelected(false);
    }
  };

  const handleClickPoint = async () => {
    try {
      const data = {
        customerid: CustomerID,
        total: total,
        point: parseInt(pointInput), // แปลงค่า Point เป็นตัวเลข
      };

      const response = await axios.post(
        "http://127.0.0.1:8081/total/ontopdisbypoint",
        data
      );
      console.log(response.data);

      setTotalShow(response.data.newtotal);
      setOntopDiscount(response.data.discount);
    } catch (error) {
      alert("Max Value is 20% of total");
      console.error("Error fetching data:", error);
    }
  };
  const maxInputValue = (total / 100) * 20;
  const [seasonalChecked, setSeasonalChecked] = useState(false);

  const handleSeasonalChange = async () => {
    setSeasonalChecked(!seasonalChecked);

    // เรียก API หรือทำตามที่คุณต้องการ
    if (!seasonalChecked) {
      try {
        const data = {
          total: total,
          every: 300,
          discount: 40,
        };

        const response = await axios.post(
          "http://127.0.0.1:8081/total/seasonalcampaigns",
          data
        );
        console.log(response.data);

        setTotalShow(response.data.newtotal);
        setSpacialDis(response.data.discount);
      } catch (error) {
        alert("Max Value is 20% of total");
        console.error("Error fetching data:", error);
      }
    } else {
      setSpacialDis(0);
      setTotalShow(total);
    }
  };

  return (
    <div className="content flex justify-center mt-10  ">
      <div className="w-8/12 bg-white fixed bottom-0 ">
        <div className="w-full flex justify-end gap-10 h-16 items-center border-b-8 border-[#efefef] ">
          <label>
            <span className="text-xl font-medium ">Coupon</span>
            <select
              className="ml-2 w-40  rounded text-xl font-medium border-2 border-[#5787B3] bg-[#5787b332]"
              onChange={handleCouponDiscountChange}
              value={selectedDiscount}
            >
              <option value="">-</option>
              <option value="Dis50THB">Discount: 50 THB</option>
              <option value="Dis10Per">Discount: 10%</option>
            </select>
          </label>
          <label>
            <span className="text-xl font-medium">On top</span>
            <select
              className="ml-2 w-40  rounded text-xl font-medium border-2 border-[#5787B3] bg-[#5787b332]"
              onChange={handleOntopDiscountChange}
              value={selectedOntopDiscount}
            >
              <option value="">-</option>
              <option value="Dis15PerByCategory">
                Discount: 15% Off on Clothing
              </option>
              <option value="DisByPoints">Points</option>
            </select>
          </label>
          <label className="flex justify-center items-center">
            <span className="text-xl font-medium mr-2">Seasonal</span>
            <input
              className="mr-5 accent-[#5787b332] border-2 border-[#5787B3] w-6 h-6 rounded"
              type="checkbox"
              id="Seasonal"
              name="Seasonal"
              checked={seasonalChecked}
              onChange={handleSeasonalChange}
              value="Discount_at_every_xxx_THB"
            />
          </label>
        </div>
        <div className="w-full flex justify-end gap-10 h-16 items-center bg-white border-b-8 border-[#efefef]">
          <div className="w-4/12 flex justify-around">
            <label className="flex items-center">
              <span className="text-xl font-medium mr-2">Point</span>
              <div className="flex ">
                <input
                  className="mr-5 w-40 rounded text-xl font-medium border-2 border-[#5787B3] bg-[#5787b332] ps-2"
                  type="text"
                  id="pointInput"
                  disabled={setleted === false}
                  value={pointInput}
                  onChange={(e) => {
                    const inputValue = e.target.value.trim(); // ตัดช่องว่างทั้งหมด

                    if (
                      /^\d+$/.test(inputValue) &&
                      parseInt(inputValue, 10) <= maxInputValue
                    ) {
                      // ตรวจสอบว่าเป็นตัวเลขทั้งหมดและไม่เกิน maxInputValue
                      setPointInput(inputValue.replace(/^0+/, "")); // ลบ "0" ที่อยู่ข้างหน้า
                    } else {
                      // ถ้าไม่เป็นตัวเลขหรือเกิน maxInputValue
                      alert(
                        "Please enter a valid number less than or equal to " +
                          maxInputValue
                      );
                      setPointInput(0);
                    }
                  }}
                />

                <button
                  className="bg-[#5787B3] w-10 rounded text-white"
                  onClick={handleClickPoint}
                  disabled={setleted === false}
                ></button>
              </div>
            </label>
            <span className="text-xl font-medium">-{pointInput}฿</span>
          </div>
        </div>
        <div className="w-full flex justify-center bg-white">
          <div className="w-11/12 flex justify-between gap-10 h-20 items-center">
            <span className="text-xl font-medium">สินค้าทั้งหมด</span>
            <div className="flex items-center">
              <div className="w-7/12 mt-5">
                <span className="text-xl font-medium">
                  ราคารวม{" "}
                  {total - (coupondiscount + ontopdiscount + specialdis)}฿
                </span>
                <br />
                <span className="flex justify-center text-[#0000006d]">
                  ลด {coupondiscount + ontopdiscount + specialdis}฿
                </span>
              </div>
              <button className="bg-[#5787B3] w-40 h-10 rounded text-white"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sum;
