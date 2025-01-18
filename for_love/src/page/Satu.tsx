import gif from "../assets/cool-fun.gif";
import { useNavigate } from "react-router-dom";
const satu = () => {
  const navigate = useNavigate();

  return (
    <div className="landing bg-[#ee97a6] font-medium text-black min-h-screen">
      <div className="body flex flex-col justify-center items-center min-h-screen">
        <img src={gif} alt="" className="w-[150px] rounded-lg mb-[30px] md:w-[200px] animate-fade-down" />
        <h2 className=" md:text-[22px] text-center font-semibold px-[20px] md:w-[800px] animate-fade-up">gimana kabar kamu sayang? aku berharap kesehatan selalu membersamai kamu, dan semoga kamu diberi kesenangan terus yaa</h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] animate-jump mt-[30px] text-[#be185d]" onClick={() => navigate("/2")}>
          next
        </button>
      </div>
    </div>
  );
};

export default satu;
