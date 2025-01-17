import gif from "../assets/empat.jpeg";
import { useNavigate } from "react-router-dom";
const Lima = () => {
  const navigate = useNavigate();
  return (
    <div className="landing bg-gradient-to-tr from-[#be185d] via-[#f472b6] to-[#fbcfe8] text-white min-h-screen">
      <div className="body flex flex-col justify-center items-center min-h-screen">
        <img src={gif} alt="" className="w-[250px] rounded-lg mb-[30px] md:w-[400px]" />
        <h2 className=" md:text-[22px] text-center font-semibold px-[20px] md:w-[800px]">
          oiya dimoment ini juga gatau kenapa badan ku selalu reflek kalo kamu ada apa apa pas mo turun dari kapal gatau kenapa aku doang yang merasa kalo kamu jatoh ato apa pen cepet nolongin ato nangkep
        </h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] mt-[30px] text-[#be185d]" onClick={() => navigate("/6")}>
          next
        </button>
      </div>
    </div>
  );
};

export default Lima;
