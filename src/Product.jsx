import { useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [Size, setSize] = useState("L");

  const [count, setCount] = useState(1);

  const [amount, setAmount] = useState(196.0);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const handleCountPlus = () => {
    setCount(count + 1);
    setAmount(amount + 196.0);
  };

  const handleCountMinus = () => {
    if (count > 1) {
      setCount(count - 1);
      setAmount(amount - 196.0);
    }
  };

  return (
    <div className="relative h-screen">
      <div className="relative h-1/2">
        <img
          src="/arrow.png"
          alt="arrow icons"
          className="z-1 absolute top-5 left-5"
          width={30}
        />
        <img
          src="/cart.jpg"
          alt="cart icons"
          className="z-1 absolute top-5 right-5 rounded-full"
          width={30}
        />
        <img
          src="/love.jpg"
          alt="love icon"
          className="z-1 absolute bottom-20 right-5 rounded-full"
          width={30}
        />
        <img src="/model.jpg" alt="model " width={500}  />
      </div>

      <div className="w-full p-4 flex flex-col items-between justify-between  h-1/2 bg-white absolute bottom-0 rounded-t-3xl ">
        <div className="flex items-center  justify-between ">
          <div className="">
            <h1 className="text-base font-semibold">Roller Rabbit</h1>
            <span className="text-xs text-[#666666]">Vado Odelle Dress</span>
            <div className="flex items-center gap-1">
              <img src="/star.png" alt="star icon " width={10} />
              <img src="/star.png" alt="star icon " width={10} />
              <img src="/star.png" alt="star icon " width={10} />
              <img src="/star.png" alt="star icon " width={10} />
              <img src="/star.png" alt="star icon " width={10} />
              <h1 className="text-xs my-2">(320 Review)</h1>
            </div>
          </div>

          <div className="flex flex-col ">
            <div className="flex justify-center gap-4 p-2 rounded-3xl px-4 bg-[#EEEEEE]">
              <button onClick={() => handleCountMinus()}> - </button>
              <span>{count}</span>
              <button onClick={() => handleCountPlus()}>+</button>
            </div>

            <h1 className="text-xs my-2 font-semibold">Avaliable in stok</h1>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-semibold   ">Size</h1>

          <div className="flex gap-2">
            {sizes.map((size, index) => (
              <button
                key={index}
                onClick={() => setSize(size)}
                className={`border border-[#EEEEEE] rounded-3xl w-10 h-10 ${
                  Size === size ? "bg-black text-white" : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="font-semibold mt-3 mb-1 text-base">Description</h1>
          <p className="text-[#666666] text-sm">
            Get a little lift from these Sam Edelman sandals featuring ruched
            straps and leather lace-up ties, while a braided jute sole makes a
            fresh statement for summer.
          </p>
        </div>

        <div className="flex items-center   w-full  justify-between my-5 mb-0">
          <div>
            <h4 className="text-xs">Total Price</h4>
            <span className="font-bold text-lg">${amount}</span>
          </div>

          <Link to="/payment">
            <button className="bg-black flex items-center gap-2 p-3 text-white px-7 rounded-full text-sm">
              <img src="/bag-icon.png" alt="bag icon" width={12} height={12} />
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
