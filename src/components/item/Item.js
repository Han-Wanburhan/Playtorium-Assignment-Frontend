import { useNavigate } from "react-router-dom";
const Item = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    // Call the onClick handler with the product as an argument
    console.log(e);
    localStorage.setItem("ID", e);
    localStorage.setItem("Category", product.CategoryID);
    navigate("/detail");
  };
  console.log(product);
  return (
    <div
      className="hover:border-2 border-[#5787B3] pb-5 w-64"
      onClick={() => handleClick(product.ID)}
    >
      <div className="h-full ">
        <div className="flex justify-center">
          <img src={product.image} className="h-52" alt="Xbox Controller" />
        </div>
        <div className="flex justify-center ">
          <div className="overflow-hidden w-11/12 flex flex-col justify-start bg-[#D9D9D9] h-20">
            <span className="ml-2 text-lg font-semibold w-full">
              {product.P_Name}
            </span>
            <span className="ml-2 mt-1 text-red-600 text-xl font-bold w-full h-20">
              {product.P_Price.toLocaleString()} THB
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
