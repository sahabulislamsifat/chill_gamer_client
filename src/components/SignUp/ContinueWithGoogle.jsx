import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/AuthProvider";
import toast from "react-hot-toast";

const ContinueWithGoogle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { continueWithGoogle } = useContext(AuthContext);

  const handleGoogle = async () => {
    try {
      await continueWithGoogle();
      const redirectPath = location.state?.form || "/";
      navigate(redirectPath);
      toast.success("User signed in successfully");
    } catch (error) {
      toast.error("Sign-in failed");
      console.error("Google sign-in error:", error.message);
    }
  };

  return (
    <div>
      <button
        onClick={handleGoogle}
        className="dark:bg-gray-700 dark:text-slate-300 flex items-center justify-center bg-gray-100 border-none border-gray-300 py-2 px-4 rounded-md w-full mb-4 hover:bg-gray-200"
      >
        <img
          src="https://loodibee.com/wp-content/uploads/Google-Symbol.png"
          alt="Google Logo"
          className="w-5 h-5 mr-2"
        />
        Continue with Google
      </button>
    </div>
  );
};

export default ContinueWithGoogle;
