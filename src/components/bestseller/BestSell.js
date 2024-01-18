import React, { useEffect, useState } from "react";
import Item from "../item/Item";
import axios from "axios";

const BestSeller = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8081/getallcategory"
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className="content mt-4 flex justify-center">
      <div className="flex justify-center w-10/12 h-full">
        <div className="flex w-10/12 h-full justify-evenly flex-col">
          <div className="banner w-full h-60 flex justify-center items-center bg-[#57B3A3]">
            {/* <image src="" /> */}
            <span className="text-9xl ">BANNER</span>
          </div>
          <div className="top-sell w-full h-full">
            <div className="h-20 flex justify-between items-center mt-4 bg-white ">
              <span className="text-xl ml-16 text-[#FF0000]">
                ขายดีประจำสัปดาห์
              </span>
              <span className="text-xl mr-16 text-[#FF0000]">ดูทั้งหมด»</span>
            </div>
            <div className="h-3"></div>
            <div>
              <div className="flex flex-col items-center w-full bg-white">
                <div className="grid grid-cols-5 gap-4">
                  {/* Mapping through products and rendering Item component */}
                  {products.map((product) => (
                    <Item key={product.ID} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
