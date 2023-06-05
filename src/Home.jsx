import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#FFFFFF max-w-sm  scroll-smooth z-0">
      <div className="flex items-center px-3 justify-between   my-5  mb-2 ">
        <img src="/menu.jpg" alt="menu" className="w-11 h-11" width={"40"} />
        <div className="bg-[#DDDDDD] rounded-full ">
          <img src="/avatar.png" alt="avatar" className="" width={"50"} />
        </div>
      </div>

      <div className="  px-3 font-Poppins">
        <h1 className="font-bold text-2xl   text-black">Welcome,</h1>
        <span className="text-[#666666] text-2xl font-semibold">
          Our Fashion App
        </span>
      </div>

      <div className="flex  items-center justify-between px-3 my-5 mb-0 w-full   ">
        <div className="relative  ">
          <img
            src="/search.png"
            alt="search"
            width={15}
            className="absolute top-3.5 left-4  "
          />
          <input
            type="text"
            className="border bg-[#F3F4F5] placeholder:text-sm placeholder:text-[#AAAAAA]  rounded-3xl p-2 pr-0 pl-10 font-Poppins font-light"
            placeholder="Search..."
          />
        </div>
        <img src="/filtter.jpg" alt="filter" width={50} className="" />
      </div>

      <div className="p-4 flex  overflow-auto gap-5">
        <Link to="/product">
          <div className="bg-[url('/bag.png')]  bg-cover min-w-[240px]  rounded-2xl px-3 py-5  ">
            <div className="text-2xl leading-6 font-bold font-Poppins">
              50% Off
            </div>
            <div className="text-sm my-1">on everything today</div>
            <div className="text-xs text-[#666666] font-semibold mt-2 mb-1.5 ">
              With code:FSCREATION
            </div>
            <button className="p-2 mt-1 rounded-3xl px-4 text-white text-[10px] font-semibold bg-black">
              Get Now
            </button>
          </div>
        </Link>
        <div className="bg-[url('/bag.png')] min-w-[240px] bg-cover w-60  rounded-2xl px-3 py-5  ">
          <div className="text-2xl leading-6 font-bold font-Poppins">
            75% Off
          </div>
          <div className="text-sm my-1">on everything today</div>
          <div className="text-xs text-[#666666] font-semibold mt-2 mb-1.5 ">
            With code:FSCREATION
          </div>
          <button className="p-2 mt-1 rounded-3xl px-4 text-white text-[10px] font-semibold bg-black">
            Get Now
          </button>
        </div>
      </div>

      <div className="px-4 py-2 pt-0 my-3">
        <div className="flex justify-between items-center">
          <h2 className="text-black text-xl font-bold"> New Arrivals</h2>
          <h2 className="text-sm font-semibold text-[#666666]"> View All</h2>
        </div>
      </div>

      <div className="px-4 z-0 pb-20">
        <div className="grid grid-cols-2 gap-4">
          <Link to="/product">
            <div>
              <img
                src="/purse.jpg"
                alt="purse"
                width={200}
                className="rounded-2xl"
              />
              <div className="text-[11px] flex flex-col items-center">
                <h1 className="font-semibold text-black">The Marc Jacobs</h1>
                <span>Travel Tote</span>
                <span className="text-black font-semibold">$195.00</span>
              </div>
            </div>
          </Link>

          <Link to="/product">
            <div>
              <img
                src="/shoe.jpg"
                alt="purse"
                width={200}
                className="rounded-2xl"
              />
              <div className="text-[11px] flex flex-col items-center">
                <h1 className="font-semibold text-black">Axel Arigato</h1>
                <span>Clean 90 Triple Sneakers</span>
                <span className="text-black font-semibold">$245.00</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
