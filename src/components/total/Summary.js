const Sum = () => {
  return (
    <div className="content flex justify-center mt-10  ">
      <div className="w-8/12 bg-white fixed bottom-0 ">
        <div className="w-full flex justify-end gap-10 h-16 items-center border-b-8 border-[#efefef] ">
          <label>
            <span className="text-xl font-medium ">Coupon</span>
            <select className="ml-2 w-40  rounded text-xl font-medium border-2 border-[#5787B3] bg-[#5787b332]">
              <option value="">-</option>
              <option value="Dis50THB">Discount: 50 THB</option>
              <option value="Dis10Per">Discount: 10%</option>
            </select>
          </label>
          <label>
            <span className="text-xl font-medium">On top</span>
            <select className="ml-2 w-40  rounded text-xl font-medium border-2 border-[#5787B3] bg-[#5787b332]">
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
              value="Discount_at_every_xxx_THB"
            />
          </label>
        </div>
        <div className="w-full flex justify-end gap-10 h-16 items-center bg-white border-b-8 border-[#efefef]">
          <div className="w-4/12 flex justify-around">
            <label>
              <span className="text-xl font-medium mr-2">Point</span>
              <input
                className="mr-5 w-40  rounded text-xl font-medium border-2 border-[#5787B3] bg-[#5787b332]"
                type="text"
                id="Seasonal"
                name="Seasonal"
              />
            </label>
            <span className="text-xl font-medium">-XXX฿</span>
          </div>
        </div>
        <div className="w-full flex justify-center bg-white">
          <div className="w-11/12 flex justify-between gap-10 h-20 items-center">
            <span className="text-xl font-medium">สินค้าทั้งหมด</span>
            <div className="flex items-center">
              <div className="w-7/12 mt-5">
                <span className="text-xl font-medium">ราคารวม 25,000฿</span>
                <br />
                <span className="flex justify-center text-[#0000006d]">
                  ลด 2,500฿
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
