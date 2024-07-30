import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Products = () => {
  const [cate, setCate] = useState([]);
  const [product, setProduct] = useState([])

  useEffect(() => {
    (
      async () => {
        const res = await fetch("http://localhost:3000/categories");
        const data = await res.json();
        setCate(data)
      }
    )();
    (
      async () => {
        const res = await fetch("http://localhost:3000/products");
        const data = await res.json();
        setProduct(data)
      }
    )();
  }, [])

  return (
    <div>
      <Header />
      <div className="grid-cols-4 grid my-10 px-32 *:w-[193px] *:h-[62px] *:bg-[#D2E8CD] *:border-[#D2E8CD]">
        <div className="flex items-center border p-1 rounded border-solid">
          <img
            src="https://s3-alpha-sig.figma.com/img/6fa7/b347/5b76c1d26283f8d9b3a6fc2486e7eee7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nb0h-3tqA9BKJCBUNbFw5ZJ3SaEtoLc5uqaqSWEqutOWDLZEIFQWYm7fU8YT03ZSUmFB-rUzxYJBD4YrdWmzt6ZKJf4GFTGpz5UUVUQxiom6FeY5jm4kbeBRXGwug3E4nvrp-lcakME-JDq-bldwJmt-0XmGEFlxyy6bXu9NuCOdZscW0VWsMZISdhfqAsVlAPPl~~p1Jaex7HGYzeoR24lf62TYhgmvxm0Y-Fvb3Uz7-~WnsBbfpHi3kq5K~neiCjP4unpQ8uZ5O8QZyMKY0bddE~OSSvG3ukjkqFrq21fqwEIoX1abWqPljrdxCA7Nn90xpcW8Q3ECcH4NWMe-bA__"
            className="w-[55px] h-[45px]"
            alt="image1"
          />
          <p className="font-open-sans font-semibold text-[15px] leading-3 ml-2">
            Eckige Töpfe
          </p>
        </div>
        <div className="flex items-center border p-1 rounded border-solid">
          <img
            src="https://s3-alpha-sig.figma.com/img/4d17/0130/079158577da92fd350711d8a2e2a3084?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O0r0MOupRiEU9XbnUjLPPKO2UZIgwlbHS-1hMBUi-i91cXnqC1yl5GDUwl0z3FZ-zaCr8P9IbzpCe37laqIbttw7IrxmAv0SuUjcm8bHdfwC44cGEWLXusuZS8kJRjwrz1CYV0b0p3VO3FJbYOmRu8GFz2RUGfEM9ex17DrfHxqBVl5F94oT4ZbP5w7c~R7GO6CTQiC2Y~pEbmY~spL-MlV1ap-N2FIKP4oIO7NQuqvGkrRMUSF53OAmQdXzetcCt86bAc799Or4-Tcy15I3XbPCyCj9XB1fzRH4eFdC3W0zAf4ZiAAct-vbIL3qEWQCnsTr1mwnheNBt7hXvCwgOQ__"
            className="w-[55px] h-[45px]"
            alt="image1"
          />
          <p className="font-open-sans font-semibold text-[15px] leading-3 ml-2">
            Eckige Töpfe
          </p>
        </div>
        <div className="flex items-center border p-1 rounded border-solid">
          <img
            src="https://s3-alpha-sig.figma.com/img/6ed8/446b/87521eab28ce35a5759cdf0c1cda7721?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DNYGJ6R755KBG-NLxlNZZnvLY~dYuAvet1ANqA8-Jlk3kH9Q2mqUpRGjxz-c-TIsd3gf81xJ46rfxSoXMJjJR4F9gbwU1y9GqC8rock0HV5VWR9HXE~F4Bzym2kFO3eCJq9kfDQcLq8UDCCvJ9hraBTLOo7dRXDnvgZwsio0khXxEZc8Sr0bmFaLgde-QRF3IhCPbo97XX~emr1zgKCZiNIcVo2f8oqyx7eNwW~mM00ZHGnGYkm44uTcCuYywcKm4NDI7iWwADqz5MKpnTkB60SYiND7Nx9Yx8zUz6V9pCJMUEQbcrJk8d~0WdjP4czl8gUI8aoWKwDIl1-B5g30Ng__"
            className="w-[55px] h-[45px]"
            alt="image1"
          />
          <p className="font-open-sans font-semibold text-[15px] leading-3 ml-2">
            Eckige Töpfe
          </p>
        </div>
        <div className="flex items-center border p-1 rounded border-solid">
          <img
            src="https://s3-alpha-sig.figma.com/img/4f45/17b2/385a06c70b9d7c23da7ee4af13388189?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CFbwj-iGNe5UyOlgzBQDGco6IN-Xg6tHJb2Rja4zx7fw8yB7oi8AGgJhMOlUtpZp5ytYk1GSFkwSEgUQHPf6~1derOQ03K23~Opp9AODSbaFIbE5c8STnnEjJfSfg4XjKI-RWgrk2dTetceWMDpMK~nH2el4s7TYku1zI6sIHt5zi3uCub1hlLpOVQz7E3trVEjGHCShJfOLrAu0sLWnL0Vvask~FPxrU4xE4NWyY0apQAG5m2FkFGlEBz2YlDZ0r7A1rPqYgoiYE-~bqEjup488Aa2o8kkUirOtUEo8lVrjbFQlCZ0ArGbrTWrFxk3SvI4rrwLzXIX194Yn7OQJ2w__"
            className="w-[55px] h-[45px]"
            alt="image1"
          />
          <p className="font-open-sans font-semibold text-[15px] leading-3 ml-2">
            Eckige Töpfe
          </p>
        </div>
      </div>
      <div className="px-20 pt-10">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2 border border-gray-300 rounded px-2">
            <span className="font-inter font-normal text-[18px] leading-6">
              Sort By :
            </span>
            <select name="" id="" className="border-none focus:outline-none" onChange={(e: any) => {
              console.log(e.target.value);
              const p = product.filter((event: any) => event.category !== e.target.value)
              setProduct(p)

            }}>
              {
                cate?.map((c: any, index) => (
                  <option key={index} value={c.name}>{c.name}</option>
                ))
              }
            </select>
            <img
              src="https://s3-alpha-sig.figma.com/img/91a4/227b/d87c630df4c7bade8ba042d82938cd35?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lcFuePLDj2TfP-SM2XKwCjzgsqKPTLkgMzGVHt4P1OMAquQIyS5VzxTHZOgGw3ReKQwUHw10iBB-sW5eGBXMvIjuzKQlFUZvVK3H7lQFdHpIgFkPK3atm~1NwHXo62jroT9P61pnBtZ9Le7wc7pniKicueEV859-3zAqZUecygkVoYsmES~MEIblq~JEZ01AjiV-aQhRoE7N6RcNIQlMzuBQVqGQDqS4QmC3ZD5YbahW7YZTYCDV-xaHfwMvcVX00RkgCMfQ4GnRrR41MTlXS0ZZZyNbIKCuYz-Yq5KNb-3zCK84tYIN~lrgw23d82OHANqgzKInumoTw4oJTwbC0Q__"
              alt="down arrow"
              className="w-4 h-4"
            />
          </div>
          <div className="flex items-center space-x-2 border border-gray-300 rounded px-2">
            <span className="font-inter font-normal text-[18px] leading-6">
              Show :
            </span>
            <input
              type="text"
              placeholder="Default"
              className="border-none focus:outline-none"
            />
            <img
              src="../../image/down.png"
              alt="down arrow"
              className="w-4 h-4"
            />
          </div>
        </div>
        {/* sell */}
        <div className="flex">
          <div className="w-4/6  p-4">
            <div className="grid grid-cols-3 gap-4">
              {
                product?.map((p: any, index: number) => (
                  <div key={index} className="relative">
                    <div className="w-[200px] m-auto">
                      <img
                        className="w-[200px] h-[200px] m-auto rounded"
                        src={p.image}
                        alt="Product"
                      />
                      <p className="font-iner font-semibold text-[17px] leading-6">
                        {p.name}
                      </p>
                      <p>
                        <span className="">{p.price}</span>
                        <span className="line-through ml-2 opacity-45">$45.00</span>
                      </p>
                    </div>
                    <div className="flex justify-center space-x-2 absolute inset-0 opacity-0 hover:opacity-100 items-center bg-white bg-opacity-5">
                      <img
                        src="../../image/GitDiff.png"
                        alt="GitDiff"
                        className="w-[35px] h-[30px] border bg-white p-1 rounded"
                      />
                      <img
                        src="../../image/Tote.png"
                        alt="Tote"
                        className="w-[35px] h-[30px] border p-1  bg-[#4E7C32] text-white rounded"
                      />
                      <img
                        src="../../image/Heart.png"
                        alt="Heart"
                        className="w-[35px] h-[30px] border bg-white p-1 rounded"
                      />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="w-2/6   p-4">
            <legend className="font-baloo font-normal text-2xl leading-10 mb-6">
              Kategorien
            </legend>
            <div className="mb-4 ml-3 text-[13px]">
              <input
                type="checkbox"
                id="option1"
                className="mr-2 w-[13px] h-[13px] "
              />
              <label className="font-sans font-normal text-[15px]">
                Eckige Töpfe
              </label>
            </div>
            <div className="mb-4 ml-3 text-[13px]">
              <input
                type="checkbox"
                id="option2"
                className="mr-2 w-[13px] h-[13px] "
              />
              <label className="font-sans font-normal text-[15px]">
                Eckige Töpfe
              </label>
            </div>
            <div className="mb-4 ml-3 text-[13px]">
              <input
                type="checkbox"
                id="option3"
                className="mr-2 w-[13px] h-[13px] "
              />
              <label className="font-sans font-normal text-[15px]">
                Eckige Töpfe
              </label>
            </div>
            <div className="mb-6 ml-3 text-[13px]">
              <input
                type="checkbox"
                id="option4"
                className="mr-2 w-[13px] h-[13px] "
              />
              <label className="font-sans font-normal text-[15px]">
                Eckige Töpfe
              </label>
            </div>
            <div className="relative mt-6 w-[213px] h-[262px]">
              <img
                src="../../image/tải xuống.jpg"
                alt="Plant"
                className="w-[213px] h-[262px] object-cover opacity-50 rounded"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
                <p className="font-inter font-semibold text-[19px] leading-7 mb-20 text-center">
                  Grow your own favourite plant
                </p>
                <button className="flex items-center  text-white px-4 py-2 rounded">
                  Shop Now
                  <img
                    src="../../image/ArrowCircleRight.png"
                    alt="Arrow"
                    className="ml-2 w-4 h-4"
                  />
                </button>
              </div>
            </div>
            <div>
              <p className="ml-2 mt-10 font-inter font-semibold text-[17px] leading-5">
                Filter By Price
              </p>
              <img src="../../image/price_renge.png" alt="" />
              <p className="font-inter font-normal text-[15px] leading-5 opacity-90 ml-2">
                From $0 to $8000 <span className="ml-16">Filter</span>
              </p>
            </div>
            <div>
              <p className="ml-2 mt-10 font-inter font-semibold text-[17px] leading-5">
                Filter By Size
              </p>
              <img src="../../image/price_renge.png" alt="" />
              <p className="font-inter font-normal text-[15px] leading-5 opacity-90 ml-2">
                2 mm by 50<span className="ml-28">Filter</span>
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 mt-12 max-w-4xl mx-auto">
          <div className="mb-8 ">
            <legend className="text-[40px] font-baloo font-semibold leading-10 text-[#505f4e]">
              Etwas abonnieren*
            </legend>
            <legend className="text-[40px] font-baloo font-semibold leading-10 text-[#505f4e]">
              _ Unser Newsletter
            </legend>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 text-center md:text-left">
              <p className="text-gray-600">
                Get weekly updates about our product in your email. No spam
                guaranteed—we promise ✌️
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative flex items-center">
                <img
                  src="../../image/email.png"
                  alt="Email Icon"
                  className="absolute left-3"
                />
                <input
                  type="text"
                  placeholder="youremail123@gmail.com"
                  className="pl-12 py-2 border border-gray-300 rounded w-full md:w-auto"
                />
              </div>
              <button className="bg-[#656C66] text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                ABONNIEREN
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
