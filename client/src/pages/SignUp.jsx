import { Link } from "react-router-dom"
function SignUp() {
    return (
      <div className="bg-white flex flex-col items-center justify-center h-[100vh] w-[100vw]">  
          <div className="flex items-center select-none justify-center mt-10">
              <img className="w-[30px] h-[30px]" src="/icons/chatAppLogo.png" alt="app logo" />
              <p className="  ml-2 text-[#]  font-extrabold text-[40px]">Live Chat</p> 
          </div>
          <div className=" flex flex-col   items-center justify-center h-screen w-screen ">
      
              <div className=" flex justify-between border-1 border-slate-300 rounded-xl gap-8 md:gap-20  shadow-lg p-6 mt-[-100px] md:w-[900px]">
              
                  <img className="h-fit w-[300px] hidden sm:inline my-auto " src="/icons/SignIn.gif" alt="SignIn Image" />
                  <form  className="flex flex-col h-[500px] w-[300px] sm:h-auto sm:w-auto gap-2 text-2xl p-auto md:pr-10">
                      <div className="mx-auto mb-6 ">
                          <p className ="text-xl  font-bold  ">Sign Up</p> 
                      </div>
                      <label className="" >Name</label>
                      <input required  className="border-2 rounded-md h-[60px] p-4 " spellCheck="false" placeholder="johndoe@gmail.com" type="text" />
                      <label className="" >Email</label>
                      <input required  className="border-2 rounded-md h-[60px] p-4 " spellCheck="false" placeholder="johndoe@gmail.com" type="email" />
                      
                      <label className="" >Password</label>
                      <input required  className="border-2 rounded-md h-[60px] p-4  font-thin" placeholder="Enter your password" type="password" />
                      
                      <button type="submit" className="border-2 rounded-md  py-2   flex items-center justify-center  bg-[#046cff] hover:bg-[#0057b3] text-white">Sign Up</button>
  
                      <div className="flex items-center justify-between mt-4">
                          <p className=" text-lg">Already have an account ? </p>
                          <Link className="mt-[-4px]" to="/"><span className=" text-lg text-blue-600 " href="/">Sign In</span></Link>
                          
                      </div>
                  </form>      
              </div>         
          </div>
      </div>
    )
}
  
export default SignUp