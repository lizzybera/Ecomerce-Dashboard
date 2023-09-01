import pix from "../../assets/blog-post2-1.jpg"
// import Typ

const HeroPage = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center text-white bg-cover bg-no-repeat bg-center bg-slate-600"
     style={{backgroundImage : `url(${pix})`, backgroundAttachment : "fixed"}}
     >

        {/* card */}
        <div className="w-full h-[100%] flex items-center justify-center bg-slate-300 bg-opacity-5 ">
            <div className="text-red-500 font-bold text-[20px] z-10">
                    {/* <Typewriter
                    options={{loop : true}}

                    /> */}
            </div>
        </div>
        {/* logo */}
        {/* <div className="w-[87%] flex justify-between items-center">


        </div> */}


    </div>
  )
}

export default HeroPage