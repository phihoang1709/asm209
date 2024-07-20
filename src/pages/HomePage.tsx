import Header from "../components/Header"
import Footer from "../components/Footer"
const HomePage = () => {
  return (
    <div className='min-w-full'>
      <Header />
      <main className="w-full h-[80vh] bg-cover bg-[#B5DCB0] bg-[url('/assets/banner.svg')]" >
        <div className=" *:ml-24 pt-48 *:my-4">
          <p className="w-[50%] text-[#505F4E] text-6xl font-bold">Wir kümmern uns um Ihre
            schöner Garten und Haus</p>
          <p className="w-[30%]">Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s,</p>
          <button className="w-[12%] border-[#505F4E] border-2 text-[#505F4E] px-4 py-2">Lern mehr</button>
        </div>
      </main>
      <section>
        <div className="my-10">
          <p className="text-2xl font-bold text-[#505F4E] mx-20 my-10">Best sellers</p>
          <div className="grid grid-cols-4 gap-20 mx-20">

            <div className="flex flex-col">
              <img className="h-60" src="/assets/product1.svg" alt="" />
              <p className="font-bold">Growbox</p>
              <div className="flex justify-between items-center">
                <p >Dress</p>
                <p>$ 963.85</p>
              </div>
            </div>

            <div className="flex flex-col">
              <img className="h-60" src="/assets/product1.svg" alt="" />
              <p className="font-bold">Growbox</p>
              <div className="flex justify-between items-center">
                <p >Dress</p>
                <p>$ 963.85</p>
              </div>
            </div>

            <div className="flex flex-col">
              <img className="h-60" src="/assets/product1.svg" alt="" />
              <p className="font-bold">Growbox</p>
              <div className="flex justify-between items-center">
                <p >Dress</p>
                <p>$ 963.85</p>
              </div>
            </div>

            <div className="flex flex-col">
              <img className="h-60" src="/assets/product1.svg" alt="" />
              <p className="font-bold">Growbox</p>
              <div className="flex justify-between items-center">
                <p >Dress</p>
                <p>$ 963.85</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      <div className="bg-gray-100 flex items-center justify-center h-[88vh]">
        <div className="grid grid-cols-4 grid-rows-2 gap-4 w-full max-w-screen-lg p-4 mt-2 h-[80vh]">
          <div className="col-span-2 row-span-2 bg-red-500 bg-[url('/assets/sell1.svg')] bg-cover">
            <p className="bg-white opacity-50 text-xl p-3 mt-5 font-bold">Garten Spaten</p>
          </div>
          <div className="col-span-1 row-span-1 bg-green-500 bg-cover bg-[url('/assets/sell2.svg')]">
            <p className="bg-white opacity-50 text-xl p-3 mt-2 font-bold">Garten Spaten</p>
          </div>
          <div className="col-span-1 row-span-1 bg-blue-500 bg-cover bg-[url('/assets/sell3.svg')]">
            <p className="bg-white opacity-50 text-xl p-3 mt-2 font-bold">Garten Spaten</p>
          </div>
          <div className="col-span-1 row-span-1 bg-yellow-500 bg-cover bg-[url('/assets/sell4.svg')]">
            <p className="bg-white opacity-50 text-xl p-3 mt-2 font-bold">Garten Spaten</p>
          </div>
          <div className="col-span-1 row-span-1 bg-purple-500 bg-cover bg-[url('/assets/sell5.svg')]">
            <p className="bg-white opacity-50 text-xl p-3 mt-2 font-bold">Garten Spaten</p>
          </div>
        </div>
      </div>

      <section>
        <div className="bg-gray-100 flex items-center justify-center h-[88vh]">
          <div className="grid grid-cols-4 grid-rows-2 gap-4 w-full max-w-screen-lg mt-2  *:col-span-1 *:row-span-1 *:h-80">
            <div className="bg-[url('/assets/cate1.svg')] bg-cover">
              <p className="text-white ml-[50%] text-md p-1 mt-1 font-bold">Garten Spaten</p>
              <p className="text-white ml-[50%] text-sm pl-1">30 items</p>
            </div>
            <div className="bg-[url('/assets/cate2.svg')] bg-cover">
              <p className="text-white ml-[50%] text-md p-1 mt-1 font-bold">Garten Spaten</p>
              <p className="text-white ml-[50%] text-sm pl-1">30 items</p>
            </div>
            <div className="bg-[url('/assets/cate3.svg')] bg-cover">
              <p className="text-white ml-[50%] text-md p-1 mt-1 font-bold">Garten Spaten</p>
              <p className="text-white ml-[50%] text-sm pl-1">30 items</p>
            </div>
            <div className="bg-[url('/assets/cate4.svg')] bg-cover">
              <p className="text-white ml-[50%] text-md p-1 mt-1 font-bold">Garten Spaten</p>
              <p className="text-white ml-[50%] text-sm pl-1">30 items</p>
            </div>
            <div className="bg-[url('/assets/cate5.svg')] bg-cover">
              <p className="text-white ml-[50%] text-md p-1 mt-1 font-bold">Garten Spaten</p>
              <p className="text-white ml-[50%] text-sm pl-1">30 items</p>
            </div>
            <div className="bg-[url('/assets/cate6.svg')] bg-cover">
              <p className="text-white ml-[50%] text-md p-1 mt-1 font-bold">Garten Spaten</p>
              <p className="text-white ml-[50%] text-sm pl-1">30 items</p>
            </div>
            <div className="bg-[url('/assets/cate7.svg')] bg-cover">
              <p className="text-white ml-[50%] text-md p-1 mt-1 font-bold">Garten Spaten</p>
              <p className="text-white ml-[50%] text-sm pl-1">30 items</p>
            </div>
            <div className="bg-[url('/assets/cate8.svg')] bg-cover">
              <p className="text-white ml-[50%] text-md p-1 mt-1 font-bold">Garten Spaten</p>
              <p className="text-white ml-[50%] text-sm pl-1">30 items</p>
            </div>

          </div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center">
      <div className="*:text-2xl *:font-bold  text-[#505F4E] flex flex-row">
        <p>Etwas abonnieren</p>
        <p>*</p>
      </div>
      <div className="*:text-2xl *:font-bold  text-[#505F4E] flex flex-row">
        <p>_</p>
        <p>Etwas abonnieren</p>
      </div>
      <div className="flex">
        <p>Get weekly update about our product on your email, no spam guaranteed we promise ✌️</p>
        <div>
          <input type="text" placeholder="youremail123@gmail.com" />
          <button className="bg-[#656C66] text-white font-bold">ABONNIEREN</button>
        </div>
      </div>
      </div>
      <section>

      </section>
      <Footer />
    </div>
  )
}

export default HomePage