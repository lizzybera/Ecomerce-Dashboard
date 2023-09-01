import { BsCartDashFill, BsEyeglasses } from "react-icons/bs"

const HomePage = () => {
  return (
    <div className="flex justify-center py-5 flex-wrap">
      {/* card */}
      <div className="w-[250px] h-[300px] bg-slate-100 rounded-[10px] relative m-5">
        {/* image */}
        <img src="" alt="pics" className="w-full h-[200px] bg-slate-600 object-cover rounded-t-[10px]"/>
        {/* icons */}
        <div className="absolute bottom-[110px] flex justify-center w-[100%] text-[20px] text-white cursor-pointer opacity-0 hover:opacity-100 duration-300 transition-all">
          <BsCartDashFill  className="hover:text-red-500 mr-5"/>
          <BsEyeglasses  className="hover:text-red-500 text-[20px]"/>
        </div>

        {/* down */}
          <div className="flex justify-center text-[15px] font-bold italic">
            <div className="mr-5">star</div>
            <div>Review</div>
          </div>

          <br />

          <div className="w-full justify-center flex text-red-500 font-bold">Posh clothes</div>

          <div className="w-full justify-center flex text-slate-500" >
            <div className="line-through mr-3">old Price</div>
            <div className=" font-bold">New Price</div>
          </div>

      </div>



      
    </div>
  )
}

export default HomePage