

const Header = () => {
  return (
    // container
    <div className="w-full h-[70px] fixed z-20 flex justify-center items-center bg-slate-700 text-white">
        {/* logo */}
        <div className="w-[87%] flex justify-between items-center">
        <div className="flex justify-between items-center hover:text-red-500 cursor-pointer">
            <div className="text-[25px] italic mr-3">SN</div>
             <div>ShopNet</div>
        </div>

        {/* navs */}
        <div className="flex w-[220px]  justify-between ">
            <div className="cursor-pointer hover:text-red-500">DashBoard</div>
            <div className="cursor-pointer hover:text-red-500">Cart</div>
            <div className="cursor-pointer hover:text-red-500">About</div>
        </div>

        <button className="w-[100px] h-[40px] flex justify-center items-center bg-slate-500 rounded-md cursor-pointer hover:bg-red-500 duration-300 transition-all ">
            Sign-In
        </button>


        </div>


    </div>
  )
}

export default Header