import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";

const GoogleSignin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin();
    navigate("/");
  };
  return (
    <div className="card-body pt-0">
      <div className="divider">OR</div>
      <button
        onClick={handleGoogleLogin}
        className="btn border-black bg-black text-white hover:bg-slate-800 flex items-center justify-center gap-2"
      >
        <FaGoogle />
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleSignin;
