import gif from "../assets/sebelas.jpeg";
import { useNavigate } from "react-router-dom";
const Duabelas = () => {
  const navigate = useNavigate();
  return (
    <div className="landing bg-[#ee97a6] font-medium text-black min-h-screen">
      <div className="body flex flex-col justify-center items-center min-h-screen">
        <img src={gif} alt="" className="w-[200px] rounded-lg mb-[30px] md:w-[200px] animate-fade-down" />
        <h2 className=" md:text-[22px] text-center font-semibold px-[20px] md:w-[800px] animate-fade-up">ini aku baper pas bisa solat bareng kamu di jardin, itu pun ke jardin ko bisa2nya kamu mau ikut akuu gitu</h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] mt-[30px] text-[#be185d] animate-jump" onClick={() => navigate("/13")}>
          next
        </button>
      </div>
    </div>
  );
};

export default Duabelas;
