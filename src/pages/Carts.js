import CartHeader from "../components/header/CartHeader";
import ItemInCart from "../components/itemInCart/ItemInCart";
import Sum from "../components/total/Summary";
const Carts = () => {
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
          <div className="flex justify-center ">
            <ItemInCart />
          </div>
          <div className="flex justify-center ">
            <ItemInCart />
          </div>
          <div className="flex justify-center ">
            <ItemInCart />
          </div>
          <div className="flex justify-center ">
            <ItemInCart />
          </div>
          <div className="flex justify-center ">
            <ItemInCart />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-8/12 h-60 "></div>
      </div>
      <Sum />
    </div>
  );
};

export default Carts;
