import {BsBasket2Fill} from "react-icons/bs"

const CartPage = () => {
  return (
    <div className='w-full flex justify-center items-center my-4'>
        {/*  */}
        <div className="w-[90%]">
        <div className="text-[18px] text-red-600 mb-4">Your Cart</div>

        <div className="flex justify-between text-slate-500 font-bold">
            <div> Pics</div>
            <div className="ml-5"> Name</div>
            <div> Price</div>
            <div> Qty</div>
            <div>Delete</div>
        </div>

        <div>
        <hr className="h-[2px] bg-slate-300 w-full mt-3"/>
        <div className="w-[100%] flex items-center justify-between">
                <img src="" alt="pics" className="w-[100px] h-[100px] mt-2 border" />
                <div className="text-red-500 font-bold text-[18px]">Emerald Ring</div>
                <div>6000</div>
                <div className="w-[120px] h-[40px] border flex justify-between items-center px-3 rounded-md text-slate-700">
                    <div className="cursor-pointer">-</div>
                    <div>5</div>
                    <div className="cursor-pointer">+</div>
                </div>
                <div  className=" w-[70px] h-[50px] flex justify-end items-center">
                <BsBasket2Fill className="text-red-500 cursor-pointer"/>
                </div>
        </div>
        </div>


        </div>

    </div>
  )
}

export default CartPage