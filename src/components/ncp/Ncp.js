import { MdOutlineShoppingCart } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
const Ncp = () => {
  const ID = localStorage.getItem("ID");
  const CategoryID = localStorage.getItem("Category");
  const [name, setName] = useState("");
  const [cate, setCate] = useState("");
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8081/getallcategory/${ID}`
        );
        setName(response.data.product[0].P_Name);
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
          `http://127.0.0.1:8081/getcate/${CategoryID}`
        );
        setCate(response.data.product.C_Name);
        console.log(response.data.product);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  return (
    <div className="content mt-4 flex justify-center">
      <div className="flex   w-10/12 h-full  justify-center">
        <div className="flex w-10/12  h-full items-center mr-6">
          <MdOutlineShoppingCart className="text-blue-500 text-xl" />
          <span className="text-blue-500 text-xl flex">
            ClickCart <p className=" mx-2 text-black">{">"}</p> {cate}
            <p className=" mx-2 text-black">{">"}</p> {name}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Ncp;
