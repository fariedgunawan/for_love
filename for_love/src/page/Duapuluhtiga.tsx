import gif from "../assets/tenor.gif";
import { useNavigate } from "react-router-dom";
import "../page/balon.css";
const Duapuluhtiga = () => {
  const navigate = useNavigate();
  return (
    <div className="landing bg-[#ee97a6] font-medium text-black min-h-screen relative overflow-hidden">
      {/* Animasi Balon */}
      <div className="balloon"></div>
      <div className="balloon"></div>
      <div className="balloon"></div>
      <div className="balloon"></div>
      <div className="balloon"></div>

      {/* Animasi Love */}
      <div className="love"></div>
      <div className="love"></div>
      <div className="love"></div>
      <div className="love"></div>
      <div className="love"></div>

      <div className="body flex flex-col justify-center items-center min-h-screen">
        <img src={gif} alt="" className="w-[300px] rounded-lg mb-[30px] md:w-[300px] animate-fade-down" />
        <h2 className="md:text-[22px] text-center font-semibold px-[20px] md:w-[800px] animate-fade-up">aku sayang bgt sama kamu.... selalu ada di diri aku yaa aku cuman gamau kehilangan kamu love you sayang</h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] mt-[30px] text-[#be185d] animate-jump" onClick={() => navigate("/24")}>
          nih buat kamu
        </button>
      </div>
    </div>
  );
};

export default Duapuluhtiga;
