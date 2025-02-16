import gif from "../assets/lima.jpeg";
import { useNavigate } from "react-router-dom";
const Enam = () => {
  const navigate = useNavigate();
  return (
    <div className="landing bg-[#fdd8f8] font-medium text-[#871464] min-h-screen">
      <div className="body flex flex-col justify-center items-center min-h-screen">
        <img src={gif} alt="" className="w-[200px] rounded-lg mb-[30px] md:w-[200px] animate-fade-down" />
        <h2 className=" md:text-[22px] text-center font-semibold px-[20px] md:w-[800px] animate-fade-up">
          setelah dufan terbitlah aku olahraga pagi bareng sama kamu farah, takdir menyatakan aku membawa tas kamu, kalo kamu sadari farah kan juga bawa tas tapi kamu yang aku bawain, dah mulai aneh gasih AHAHAHAHAHA
        </h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] animate-jump mt-[30px] text-[#be185d]" onClick={() => navigate("/7")}>
          next
        </button>
      </div>
    </div>
  );
};

export default Enam;
