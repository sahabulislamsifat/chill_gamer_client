import React, { useContext, useState } from "react";
import ContinueWithGoogle from "../SignUp/ContinueWithGoogle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/AuthProvider";
import toast from "react-hot-toast";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleSignIn = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      await signIn(email, password);
      setKeepLoggedIn(true);
      const redirectPath = location.state?.form || "/";
      navigate(redirectPath);
      toast.success("Welcome Back");
    } catch (error) {
      toast.error("Sign-in failed");
      console.error("Sign-in error:", error.message);
    }
  };

  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
      data-aos-offset="0"
      className="dark:bg-gray-800 min-h-screen bg-gray-50 flex flex-col md:flex-row items-center justify-center p-4"
    >
      {/* Form Section */}
      <div className="dark:bg-gray-800 dark:border-slate-800 border w-full max-w-md bg-white shadow-lg rounded-lg p-6 sm:p-8 md:mr-8">
        <h1 className="text-2xl font-bold text-green-500 mb-4 text-center md:text-left">
          Sign In
        </h1>
        <p className="dark:text-slate-400 text-gray-600 mb-6 text-center md:text-left">
          Sign in to your account and explore a world of possibilities. Your
          journey begins here.
        </p>

        <form onSubmit={handleSignIn}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="dark:text-slate-300 block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="dark:text-slate-300 dark:bg-gray-700 w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-transparent"
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label className="dark:text-slate-300 block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="dark:bg-gray-700 w-full dark:text-slate-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-transparent"
            />
          </div>
          {/* Keep Logged In & Forget Password */}
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-green-500 border-gray-300 rounded"
                checked={keepLoggedIn}
                onChange={() => setKeepLoggedIn(!keepLoggedIn)}
              />
              <span className="dark:text-slate-300 ml-2 text-gray-700">
                Keep me logged in
              </span>
            </label>
            <Link
              to={"/resetPassword"}
              className="text-sm text-green-500 hover:underline"
            >
              Forget password?
            </Link>
          </div>

          {/* Sign-In Button */}
          <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
            Sign In
          </button>
        </form>

        {/* Register & Google Sign-In */}
        <div className="text-center mt-6">
          <p className="dark:text-slate-400 text-sm">
            Don’t have an account?{" "}
            <Link
              to={"/auth/singUp"}
              className="text-green-500 hover:underline"
            >
              Register here
            </Link>
          </p>
          <div className=" relative flex items-center mt-4">
            <div className=" flex-grow border-t border-gray-300"></div>
            <span className=" mx-4 text-gray-500">Or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <ContinueWithGoogle />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
