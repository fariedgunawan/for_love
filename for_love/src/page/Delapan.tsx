import gif from "../assets/tujuh.jpeg";
import { useNavigate } from "react-router-dom";
const Delapan = () => {
  const navigate = useNavigate();
  return (
    <div className="landing bg-gradient-to-tr from-[#be185d] via-[#f472b6] to-[#fbcfe8] text-white min-h-screen">
      <div className="body flex flex-col justify-center items-center min-h-screen">
        <img src={gif} alt="" className="w-[150px] rounded-lg mb-[30px] md:w-[200px]" />
        <h2 className=" md:text-[22px] text-center font-semibold px-[20px] md:w-[800px]">dari sini aku sedih kamu ga lolos seleksi tentor dan galau aja gitu kamu ga bisa bareng aku buat ngajar anak2</h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] mt-[30px] text-[#be185d]" onClick={() => navigate("/9")}>
          next
        </button>
      </div>
    </div>
  );
};

export default Delapan;
