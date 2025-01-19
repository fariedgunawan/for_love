import gif from "../assets/tujuh.jpeg";
import { useNavigate } from "react-router-dom";
const Delapan = () => {
  const navigate = useNavigate();
  return (
    <div className="landing bg-[#fdd8f8] font-medium text-[#871464] min-h-screen">
      <div className="body flex flex-col justify-center items-center min-h-screen">
        <img src={gif} alt="" className="w-[250px] rounded-lg mb-[30px] md:w-[200px] animate-fade-down" />
        <h2 className=" md:text-[22px] text-center font-semibold px-[20px] md:w-[800px] animate-fade-up">dari sini aku sedih kamu ga lolos seleksi tentor dan galau aja gitu kamu ga bisa bareng aku buat ngajar anak2</h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] mt-[30px] text-[#be185d] animate-jump" onClick={() => navigate("/9")}>
          next
        </button>
      </div>
    </div>
  );
};

export default Delapan;
