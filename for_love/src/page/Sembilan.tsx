import gif from "../assets/delapan.jpeg";
import { useNavigate } from "react-router-dom";
const Sembilan = () => {
  const navigate = useNavigate();
  return (
    <div className="landing bg-[#fdd8f8] font-medium text-[#871464] min-h-screen">
      <div className="body flex flex-col justify-center items-center min-h-screen">
        <img src={gif} alt="" className="w-[200px] rounded-lg mb-[30px] md:w-[200px] animate-fade-down" />
        <h2 className=" md:text-[22px] text-center font-semibold px-[20px] md:w-[800px] animate-fade-up">
          nah mulai dari sini nih aku sudah merasakan namanya suka sama kamu tpi masih ga yakin, kamu terlalu baik buat aku yang kea gini, kali ke2 juga kamu aku bonceng ya disitu aku seneng tau bisa ada waktu be2 sama kamu ngobrol asik
        </h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] animate-jump mt-[30px] text-[#be185d]" onClick={() => navigate("/10")}>
          next
        </button>
      </div>
    </div>
  );
};

export default Sembilan;
