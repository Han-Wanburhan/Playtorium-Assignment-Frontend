import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CartHeader = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-center items-end w-full h-32 bg-white border-b-4 ">
      <div className="flex w-8/12 h-4/5 justify-evenly">
        <div className="flex gap-2 item">
          <div
            className="logo flex h-4/5 bg-[#5787B3] items-center px-2 rounded cursor-pointer"
            onClick={handleClick}
          >
            <MdOutlineShoppingCart className="text-white text-5xl" />
            <p className="text-white text-5xl">ClickCart</p>
          </div>
          <div className="h-4/5 w-2 bg-[#5787B3] rounded"></div>
          <span className="flex h-4/5 text-[#5787B3] text-5xl font-medium items-center">
            รถเข็น
          </span>
        </div>
        <div className="nonlogo w-7/12 h-full">
          <div className="serach mt-4">
            <div className="top border-[#5787B3] border-2  w-full h-11 flex rounded">
              <input className="w-11/12 h-full rounded" />
              <div className=" w-1/12 flex justify-center items-center">
                <button className="bg-[#5787B3] w-10/12 h-5/6 flex justify-center rounded">
                  <IoSearch className="h-full text-5xl text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartHeader;
