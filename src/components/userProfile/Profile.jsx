import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utils/AuthProvider";

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <section className="dark:bg-gray-800 flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-10 dark:bg-gray-700 lg:my-36 mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold text-white">
            <img
              className="rounded-full h-16 border"
              src={user?.photoURL}
              alt=""
            />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold">{user?.displayName}</h2>
          <p className="dark:text-slate-400 hover:underline text-gray-600">
            {user?.email}
          </p>
          <Link
            to={"/resetPassword"}
            href="#"
            className="dark:text-green-600 text-blue-500 hover:underline mt-2 inline-block"
          >
            Reset password?
          </Link>
        </div>
        <div className="flex justify-around mt-6">
          <Link
            to={"/"}
            className="bg-blue-500 border-none text-white px-4 btn btn-sm py-2 rounded-md hover:bg-blue-600"
          >
            Home
          </Link>
          <Link
            to="/userSetting"
            className="bg-gray-800 border-slate-400 text-white px-4 py-2 rounded btn btn-sm hover:bg-gray-900"
          >
            Setting
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Profile;
