import { MdOutlineShoppingCart } from "react-icons/md";
const Ncp = () => {
  return (
    <div className="content mt-4 flex justify-center">
      <div className="flex   w-10/12 h-full  justify-center">
        <div className="flex w-10/12  h-full items-center mr-6">
          <MdOutlineShoppingCart className="text-blue-500 text-xl" />
          <span className="text-blue-500 text-xl flex">
            ClickCart <p className=" mx-2 text-black">{">"}</p> Category{" "}
            <p className=" mx-2 text-black">{">"}</p> NameProduct
          </span>
        </div>
      </div>
    </div>
  );
};
export default Ncp;
