import gif from "../assets/dua.jpeg";
import { useNavigate } from "react-router-dom";
const Tiga = () => {
  const navigate = useNavigate();
  return (
    <div className="landing bg-[#ee97a6] font-medium text-black min-h-screen">
      <div className="body flex flex-col justify-center items-center min-h-screen">
        <img src={gif} alt="" className="w-[200px] rounded-lg mb-[30px] md:w-[200px] animate-fade-down" />
        <h2 className=" md:text-[22px] text-center font-semibold px-[20px] md:w-[800px] animate-fade-up">
          kamu masi inget juga ga sama waktu ini kita ke smb bandung bertiga sama gani, waktu ini adalah kali keduanya aku ada moment sama kamu berdua nunggu mall buka, lagi lagi aku merasakan ada rasa yang berbeda dari orang lain, tapi
          waktu itu aku masi diem aja dan ga banyak omong heheheh maaf ya..
        </h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] animate-jump mt-[30px] text-[#be185d]" onClick={() => navigate("/4")}>
          next
        </button>
      </div>
    </div>
  );
};

export default Tiga;
