import React,{useState , useEffect}  from "react";
import {useAuth} from "../contextApi/contextApi";
import axios from "axios"

const OTPverify = () => {

const {setVerified, email} = useAuth();
const [code, setCode] = useState("");
const [error, setError] =useState(null)
const [loading, setLoading] =useState()

  const sendCode = async (e) => {
            e.preventDefault();
            try{
        const res = await axios.post(
          "http://localhost:8000/api/v1/users/verify-email",
          {
          email: email,
          code: code,
        }
        );
         console.log("this is code from user ::", code)
         setVerified(true)}
         catch (error){
          setError(error)
         }
      }

  return (
    <div className="p-10 text-white inset-0 bg-gradient-to-r from-blue-900/90 via-orange-400/80 to-blue-900/90 ">
      <h1 className="text-4xl text-center font-bold">OTP Verfication</h1>
      <div className="flex flex-col items-center mt-10">
        <div>
          <h1 className="text-xl font-semibold" type="Email" placeholder="" >
            {email}
          </h1>
        </div>
       <form onSubmit={sendCode}>
         <div className="mt-4">
          <div className="text-red-500 text-sm">{error}</div>
          <label htmlFor="" className="block text-lg font-semibold mb-3">
            Enter OTP Code
          </label>
          <input  type="text" placeholder="------" name="code" value={code} onChange={(e)=> setCode(e.target.value)} className="px-2 py-3 text-lg  border-2 border-[rgb(245,137,27)] focus:outline-none" minLength="6" maxLength="6" />
        </div>
         <button type="submit" className="text-3xl  bg-[rgba(245,136,27,0.7)] hover:bg-[rgb(245,137,27)] cursor-pointer text-white rounded-2xl mt-10 min-w-xs font-semibold px-4 py-2  text-center">
        Verify
      </button>
       </form>
      </div>
     
    </div>
  );
};

export default OTPverify;
