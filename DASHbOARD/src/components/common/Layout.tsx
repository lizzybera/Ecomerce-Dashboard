import { useSelector } from "react-redux"
import HomePage from "../../pages/HomePage"
import Sider from "../static/Sider"


const Layout = () => {
  const toggle = useSelector((state : any) => state.toggle)
  return (
    <div className="flex">
      <Sider />
      <div className="w-[100vw] flex justify-end">
        <div className={`w-[${
          !toggle ? "calc(100vw-80px)" : "calc(100vw-160px)"
        }] pl-2 duration-300 transition-all`}>
      <HomePage />
        </div>
      </div>
    </div>
  )
}

export default Layout