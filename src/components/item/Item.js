const Item = () => {
  return (
    <div className="hover:border-2 border-[#5787B3] pb-5 ">
      <div className="h-full ">
        <div className="flex justify-center">
          <img
            src="https://media-cdn.bnn.in.th/268708/Microsoft-Xbox-Controller-USB-C-Cable-Black-1.jpg"
            className="h-52"
            alt="Xbox Controller"
          />
        </div>
        <div className="flex justify-center ">
          <div className="overflow-hidden w-11/12 flex flex-col justify-start bg-[#D9D9D9]">
            <span className="ml-2 text-lg font-semibold">
              Microsoft Xbox Wireless Controller
            </span>
            <span className="ml-2 mt-1 text-red-600 text-xl font-bold">
              2,500 THB
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
