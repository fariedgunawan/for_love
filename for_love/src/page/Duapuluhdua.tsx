import { useNavigate } from "react-router-dom";
const Duapuluhdua = () => {
  const navigate = useNavigate();
  return (
    <div className="landing bg-[#ee97a6] font-medium text-black min-h-screen">
      <div className="body flex flex-col justify-center items-center min-h-screen">
        <h2 className=" md:text-[22px] text-center font-semibold px-[20px] md:w-[800px] animate-fade-up">
          jangan tinggalin aku ya... aku dah susah kalo ga sama kamu... merasa hampa dan ga punya siapa siapa lagi buat aku cerita kalo ga ada kamu
        </h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] mt-[30px] text-[#be185d] animate-jump" onClick={() => navigate("/23")}>
          next
        </button>
      </div>
    </div>
  );
};

export default Duapuluhdua;
