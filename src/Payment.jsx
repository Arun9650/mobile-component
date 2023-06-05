import { Link } from "react-router-dom";
const Payment = () => {
  return (
    <div className="flex     h-screen bg-[#fdf3f9] items-center justify-center   ">
      <div className=" w-full p-3">
        <div className="mb-2">
          <label
            htmlFor="card Number"
            className="block  text-sm font-medium text-gray-900"
          >
            Card Number
          </label>
          <input
            type="number"
            id="card Number"
            className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="4242 4242 4242 4242 "
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="card Number"
            className="block  text-sm font-medium text-gray-900"
          >
            Name on Card
          </label>
          <input
            type="text"
            id="card Number"
            className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="John"
            required
          />
        </div>

        <div className="flex items-center mb-2 gap-3 justify-between">
          <div className="w-1/2">
            <label
              htmlFor="card Number"
              className="block  text-sm font-medium text-gray-900"
            >
              Expiration date
            </label>
            <input
              type="month"
              id="card Number"
              className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="05"
              value="2021-05"
              required
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="card Number"
              className="block  text-sm font-medium text-gray-900"
            >
              Security code
            </label>
            <input
              type="number"
              id="card Number"
              className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="123"
              required
            />
          </div>
        </div>

        <div>
          <Link to="/Process">
            <button className="w-full  p-2 rounded-lg bg-[#bf477f] font-medium text-[#EEEEEE]   ">
              Pay now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
