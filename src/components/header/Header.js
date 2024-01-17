import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-center items-end w-full h-28 bg-[#57B3A3]  ">
      <div className="flex w-4/5 h-4/5 justify-evenly">
        <div
          className="logo flex h-4/5 bg-[#5787B3] items-center px-2 rounded cursor-pointer"
          onClick={handleClick}
        >
          <MdOutlineShoppingCart className="text-white text-5xl" />
          <p className="text-white text-5xl">ClickCart</p>
        </div>
        <div className="nonlogo w-7/12 h-full">
          <div className="serach mt-4">
            <div className="top  bg-white w-full h-11 flex rounded">
              <input className="w-11/12 h-full rounded" />
              <div className=" w-1/12 flex justify-center items-center">
                <button className="bg-[#5787B3] w-10/12 h-5/6 flex justify-center rounded">
                  <IoSearch className="h-full text-5xl text-white" />
                </button>
              </div>
            </div>
            <div className="flex bottum  w-full justify-around text-xl text-white">
              <span>Clothes</span>
              <span>Beauty</span>
              <span>Health</span>
              <span>Accessories</span>
              <span>Home</span>
              <span>Gadgets</span>
              <span>Travel</span>
              <span>Other</span>
            </div>
          </div>
        </div>
        <div className="h-full">
          <div className="top  bg-white  h-11 flex rounded mt-4">
            <div
              className=" w-full  flex justify-center items-center"
              onClick={() => navigate("/cart")}
            >
              <button className="bg-[#5787B3] w-full h-full flex justify-center rounded">
                <MdOutlineShoppingCart className="h-full text-5xl text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
