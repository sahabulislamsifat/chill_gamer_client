import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../utils/AuthProvider";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const { resetPassword, user } = useContext(AuthContext);

  const handlePasswordReset = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    try {
      await resetPassword(email);
      toast.success("reset password success");
    } catch (error) {
      toast.error("password reset fail");
    }
  };
  return (
    <div className="h-screen">
      <div className="w-[400px] dark:bg-gray-700 mt-52 lg:w-[500px] mx-auto px-10 text-gray-600 bg-white rounded-md shadow-lg">
        <h1 className="dark:text-slate-300 text-center pt-12 font-semibold text-2xl">
          Reset Password
        </h1>
        <p className="text-xl my-3 dark:text-slate-400">Email</p>
        <div>
          <form onSubmit={handlePasswordReset} action="">
            <label className="dark:bg-gray-600 dark:text-slate-400 input input-bordered flex items-center gap-2">
              <input
                name="email"
                type="text"
                className="grow"
                placeholder="Daisy"
                defaultValue={user?.email}
              />
            </label>
            <button className="btn hover:text-black btn-sm lg:btn-md my-8 border-none bg-green-700 mx-auto flex px-16 text-white">
              Send Reset Email
            </button>
            <div className="flex justify-center">
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                className="btn-xs lg:btn-sm bg-slate-50 btn mb-5"
              >
                Open Gmail
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
