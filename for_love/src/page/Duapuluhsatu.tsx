import { useNavigate } from "react-router-dom";
const Duapuluhsatu = () => {
  const navigate = useNavigate();
  return (
    <div className="landing bg-[#ee97a6] font-medium text-black min-h-screen">
      <div className="body flex flex-col justify-center items-center min-h-screen">
        <h2 className=" md:text-[22px] text-center font-semibold px-[20px] md:w-[800px] animate-fade-up">
          maaf ya sayang kalo aku belom menjadi cowo yang kamu mau, maaf juga kalo masih belom bisa nurutin semua kemauan kamu, maaf juga kalo aku pernah ngecewain kamu selama ini sayang.. tolong evaluasi aku kalo misal aku dah bukan yang
          kamu mau selama ini... aku berusaha menjadi yang terbaik buat kamu dan selalu mengusahakan apa yang kamu inginin meskipun banyak hal yang harus aku pikirin.
        </h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] mt-[30px] text-[#be185d] animate-jump" onClick={() => navigate("/22")}>
          next
        </button>
      </div>
    </div>
  );
};

export default Duapuluhsatu;
