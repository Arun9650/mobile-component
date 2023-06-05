const BottomNav = () => {
  return (
    <div className="z-10 max-w-sm  fixed bottom-0 border  w-full  px-5 flex items-center justify-between p-4 bg-[#FFFFFF] rounded-t-3xl  shadow-3xl  ">
      <button className="flex items-center  rounded-2xl bg-[#EEEEEE]">
        <img src="/home.png" alt="home icon" width={20} />
        <span className="text-[11px] font-semibold p-1 pr-2 pt-1">Home</span>
      </button>

      <img src="/cart.png" alt="cart icon" width={15} />
      <img src="/notification.png" alt="cart icon" width={12} />
      <img src="/profile.png" alt="cart icon" width={12} />
    </div>
  );
};

export default BottomNav;
