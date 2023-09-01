// import pix from "../../assets/dummy Image.png"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../../Api/AuthApi"

const Register = () => {
  const navigate = useNavigate()


  const model = yup.object({
    name : yup.string().required(),
    email : yup.string().required(),
    password : yup.string().required(),
    confirm : yup.string().oneOf([yup.ref("password")]),
  })

  const { 
    handleSubmit, register, formState : {errors} } = useForm({
    resolver : yupResolver(model)
  })

  const onhandleSubmit = handleSubmit((data : any)=>{
    const {email, password, name} = data

    registerUser({email, password, name}).then(()=>{
      navigate("/sign-in")
      
    })

  })

  return (
    // container
    <div className="flex justify-center align-middle w-full h-[100vh]">
      {/* main */}
      <div className="flex flex-col align-center justify-center">
        {/* form */}
        <form className="w-[400px] px-6  py-1 border flex flex-col justify-center align-middle" 
        onSubmit={onhandleSubmit}
        >
          
          {/* title */}
          <div className="text-[20px] flex justify-center align-middle text-slate-600 font-[700]">Register</div>

          {/* inPuts */}
{/* name */}
          <div>
            <div className="text-red-500 pt-3">name</div>
            <input className="border border-slate-600 w-[100%] rounded-[20px] h-[40px] px-3" placeholder="please enter your name"  {...register("name")}/>
            {errors.name?.message && <div className="text-rose-600 text-[12px] text-right">error</div>}
          </div>
{/* email */}
          <div>
            <div className="text-red-500 pt-3">email</div>
            <input className="border w-[100%] border-slate-600 rounded-[20px] h-[40px] px-3" placeholder="please enter your email" {...register("email")}/>
            {errors.email?.message && <div className="text-rose-600 text-[12px] text-right">error</div>}
          </div>
{/* password */}
          <div>
            <div className="text-red-500 pt-3">password</div>
            <input className="border w-[100%] border-slate-600 rounded-[20px] h-[40px] px-3" placeholder="please enter your password" {...register("password")} />
            {errors.password?.message && <div className="text-rose-600 text-[12px] text-right">error</div>}
          </div>
{/* confirm */}
          <div>
            <div className="text-red-500 pt-3">confirm password</div>
            <input className="border w-[100%] border-slate-600 rounded-[20px] h-[40px] px-3" placeholder="please confirm your password" {...register("confirm")} />
            {errors.confirm?.message && <div className="text-rose-600 text-[12px] text-right">error</div>}
          </div>

          {/* button */}
          <button className="w-[100%] h-[40px] bg-slate-500 my-[20px] hover:cursor-pointer font-[500] text-slate-800 hover: duration-[300ms] transition-all hover:bg-orange-400" type="submit">Sign Up</button>

          {/* navigate to sign-in */}
          <hr />
          <div className="flex justify-center w-[100%] font-[500] mt-2 no-underline">don't have an Account</div>
          <Link to="/sign-in" >
          <div className="text-slate-600 flex justify-center w-[100%] font-[700] text-[20px] hover : cursor-pointer mt-2 transition-all hover : duration-[300ms]">sign-in</div>
          </Link >

        </form>
      </div>
    </div>
  )
}

export default Register