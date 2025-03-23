import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../utils/AuthProvider";
import { Link } from "react-router-dom";

const UserSetting = () => {
  const { user, profileUpdate, setUser, auth } = useContext(AuthContext);

  const updateProfile = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;

    const data = {
      displayName: name,
      photoURL: photo,
    };
    try {
      await profileUpdate(data);
      const newData = { ...auth.currentUser };
      setUser(newData);

      return toast.success("successfully updated profile");
    } catch (error) {
      toast.error("error update");
    }
  };

  return (
    <div className="dark:bg-gray-800 flex items-center justify-center min-h-screen bg-gray-100">
      <div className="dark:bg-gray-700 bg-white rounded-lg shadow-md w-80 p-6 text-center">
        <img
          src={user?.photoURL}
          alt="Profile"
          className="w-16 h-16 border border-slate-400 rounded-full mx-auto mb-4 bg-gray-300"
        />
        <h3 className="text-lg font-medium mb-2">{user?.displayName}</h3>
        <p className="dark:text-slate-400 text-sm text-gray-500 mb-4">
          {user?.email}
        </p>
        <form onSubmit={updateProfile} action="">
          <input
            name="name"
            type="text"
            placeholder={user?.displayName}
            defaultValue={user?.displayName}
            className="dark:bg-gray-600 w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-transparent"
          />
          <input
            name="photo"
            type="text"
            placeholder={user?.photoURL}
            defaultValue={user?.photoURL}
            className=" dark:bg-gray-600 my-4 w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-transparent"
          />
          <div className="flex justify-between">
            <Link
              to={"/"}
              className="w-[48%] bg-blue-500 btn btn-sm border-none text-white py-2 rounded-md text-sm hover:bg-blue-600"
            >
              Home
            </Link>
            <button
              type="submit"
              className="w-[48%] bg-gray-800 text-white py-2 rounded-md text-sm hover:bg-gray-900 btn btn-sm border-none "
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSetting;
