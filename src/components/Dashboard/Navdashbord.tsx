import { Link } from "react-router-dom";

const Navdashbord = () => {
  return (
    <div className="admin bg-white">
      <div className="top-nav grid grid-cols-2">
        <div className="py-2">
          <p className="text-3xl font-bold italic">Manager Products</p>
        </div>
        <div className="py-2">
          <ul className="flex float-right space-x-10">
            <li className="text-4xl group relative">
              <Link className="hover:text-gray-700" to="">
                <i className="fa-solid fa-bars"></i>
              </Link>
              <div className="absolute hidden group-hover:block w-44 bg-black text-white border-2 rounded border-black border-solid text-center">
                <ul></ul>
              </div>
            </li>
            <li className="text-4xl">
              <Link className="hover:text-gray-700" to="">
                <i className="fa-solid fa-circle-half-stroke"></i>
              </Link>
            </li>
            <li className="text-white w-32 group relative">
              <img
                src="https://picsum.photos/2150/200"
                className="w-10 ml-10 h-10 rounded-3xl hover:cursor-pointer"
                alt=""
              />
              <div className="absolute hidden group-hover:block w-32 bg-black text-white border-2 rounded border-black border-solid text-center right-0">
                <ul>
                  <li className="my-2 font-bold text-base">
                    <Link
                      className="hover:border-b-2 hover:border-solid hover:border-white"
                      to="/admin/category"
                    >
                      Category
                    </Link>
                  </li>
                  <li className="my-2 font-bold text-base">
                    <Link
                      className="hover:border-b-2 hover:border-solid hover:border-white"
                      to="/admin/product"
                    >
                      Product
                    </Link>
                  </li>
                  <li className="my-2 font-bold text-base">
                    <Link
                      className="hover:border-b-2 hover:border-solid hover:border-white"
                      to="/"
                    >
                      Thoát
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navdashbord;
