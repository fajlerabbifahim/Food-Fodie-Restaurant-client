import React from "react";
import useAuth from "../../Hooks/useAuth";
import Lottie from "lottie-react";
import registerLottieData from "../../assets/Lottie-Files/register.json";
import { Link } from "react-router-dom";

function Register() {
  const { registerUser } = useAuth();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    registerUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  return (
    <div>
      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            {/* Left Section */}
            <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
              <Lottie animationData={registerLottieData}></Lottie>
            </div>

            {/* Right Section */}
            <form
              onSubmit={handleRegister}
              className="w-full md:w-1/2 py-10 px-5 md:px-10"
            >
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">Register</h1>
                <p>Fill in your information to Register</p>
              </div>
              <div>
                {/* Name Field */}
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">Name</label>
                    <div className="flex">
                      <input
                        name="name"
                        type="text"
                        className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                </div>
                {/* Email Field */}
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">Email</label>
                    <div className="flex">
                      <input
                        name="email"
                        type="email"
                        className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
                {/* Password Field */}
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <input
                        name="password"
                        type="password"
                        className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>
                {/* Submit Button */}
                <div className="flex -mx-3">
                  <div className="w-full px-3">
                    <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                      REGISTER NOW
                    </button>
                    <p className="text-center mt-2">
                      Already Have An Account{" "}
                      <strong>
                        <Link to="/login">Login</Link>
                      </strong>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
