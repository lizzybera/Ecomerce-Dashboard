import {BsDoorClosed, BsDoorOpen, BsHouseExclamationFill, BsCartDashFill} from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { changeToggle } from "../../global/GlobalState"

const Sider = () => {
    const dispatch = useDispatch()
    const toggle = useSelector((state : any) => state.toggle)

    const onChange = () =>{
        dispatch(changeToggle(!toggle))
    }
  return (
    <div className={`w-[${
        toggle ? "160px" : "80px"
    }] fixed bg-slate-700 h-[100vh] text-white py-3 px-5  duration-300 transition-all`}>
        <div className="flex justify-between items-center">
            <div className="text-[25px] italic">SN</div>
            {toggle && <div>ShopNet</div>}
        </div>

        <br />

{/* toggle icon */}
        {
            !toggle ? <BsDoorClosed  className="text-[30px] absolute right-0 cursor-pointer hover:text-red-500"
            onClick={onChange}
            /> : <BsDoorOpen  className="text-[30px] absolute right-0 cursor-pointer hover:text-red-500"
            onClick={onChange}
            />
        }

        <br />
        <br />
        <br />

        <div className="w-full hover :bg-slate-500 flex justify-center items-center text-[15px]">
            <div className="w-[60%] flex justify-between items-center hover:text-red-500  font-[500] cursor-pointer text-[15px]">
            <BsHouseExclamationFill />
            {toggle && <div className="mt-1 hover:ml-2">Home</div>}
            </div>
        </div>

<br />

        <div className="w-full hover :bg-slate-500 flex justify-center items-center text-[15px]">
            <div className="w-[60%] flex justify-between items-center hover:text-red-500  font-[500] cursor-pointer text-[15px] relative">
            <BsCartDashFill />
            <div className="w-[18px] h-[18px] text-white flex justify-center items-center rounded-[50%] bg-red-500 text-[12px] absolute bottom-3 left-2 hover:text-white">1</div>
            {toggle && <div className="mt-1 hover:ml-2">Cart</div>}
            </div>
        </div>
    </div>
  )
}

export default Sider