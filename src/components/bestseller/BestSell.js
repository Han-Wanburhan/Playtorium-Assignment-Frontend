import Item from "../item/Item";
const BestSeller = () => {
  return (
    <div className="content mt-4 flex justify-center">
      <div className="flex justify-center  w-10/12 h-full  ">
        <div className="flex w-10/12  h-full justify-evenly  flex-col">
          <div className="banner w-full h-60 flex justify-center items-center bg-[#57B3A3]">
            {/* <image src="" /> */}
            <span className="text-9xl ">BANNER</span>
          </div>
          <div className="top-sell w-full h-full ">
            <div className="h-20 flex justify-between items-center mt-4 bg-white ">
              <span className="text-xl ml-16 text-[#FF0000]">
                ขายดีประจำสัปดาห์
              </span>
              <span className="text-xl mr-16 text-[#FF0000]">ดูทั้งหมด»</span>
            </div>
            <div className="h-3"></div>
            <div className="items flex justify-around bg-white ">
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BestSeller;
