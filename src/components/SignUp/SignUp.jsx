import React, { useContext } from "react";
import ContinueWithGoogle from "./ContinueWithGoogle";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/AuthProvider";
import toast from "react-hot-toast";

const validPasswordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

const SignUp = () => {
  const { signUp, profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photo = event.target.photo.value;
    const password = event.target.password.value;

    try {
      if (!validPasswordRegex.test(password)) {
        toast.error(
          "Password must be at least 6 characters long, include at least one uppercase letter, and one lowercase letter."
        );
        return;
      }

      const result = await signUp(email, password);
      if (result) {
        await profileUpdate({ displayName: name, photoURL: photo });
        navigate("/");
        return toast.success("User sign-up successful");
      } else {
        throw new Error("Failed to sign up");
      }
    } catch (error) {
      toast.error("Sign-up failed");
      console.error(error.message);
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
      <div className="dark:bg-gray-800 w-full max-w-md bg-white shadow-lg rounded-lg p-6 sm:p-8 md:mr-8">
        <h1 className="text-2xl font-bold text-green-500 mb-4 text-center md:text-left">
          Registration
        </h1>
        <p className="dark:text-slate-400 text-gray-600 mb-6 text-center md:text-left">
          Register a new account and explore a world of possibilities. Your
          journey begins here.
        </p>

        <form onSubmit={handleSignUp}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="dark:text-slate-300 block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className="dark:text-slate-300 dark:bg-gray-700 w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="dark:text-slate-300 block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="dark:bg-gray-700 dark:text-slate-300 w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Photo URL Input */}
          <div className="mb-4">
            <label className="dark:text-slate-300 block text-sm font-medium text-gray-700 mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="dark:bg-gray-700 w-full px-3 py-2 dark:text-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-transparent"
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
              className="dark:bg-gray-700 w-full px-3 py-2 rounded-md shadow-sm dark:text-slate-300 focus:outline-none focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Register Button */}
          <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-4">
          <p className="dark:text-slate-400 text-sm">
            Already have an account?{" "}
            <Link
              to={"/auth/singIn"}
              className="text-green-500 hover:underline"
            >
              Sign in here
            </Link>
          </p>
          <div className="relative flex items-center mt-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">Or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <ContinueWithGoogle />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
