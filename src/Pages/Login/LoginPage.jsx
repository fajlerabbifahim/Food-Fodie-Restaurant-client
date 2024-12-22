import Lottie from "lottie-react";
import React from "react";
import registerLottieData from "../../assets/Lottie-Files/register.json";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

function LoginPage() {
  const { login } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((res) => console.log(res.user))
      .catch((e) => console.log(e.message));
  };

  return (
    <div>
      {" "}
      <header className="w-11/12 mx-auto">
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto">
        <div className="min-w-screen min-h-screen bg-[#FFF8E1] flex items-center justify-center px-5 py-2">
          <div
            className="bg-gray-100 text-gray-500 rounded-md shadow-xl w-full overflow-hidden"
            style={{ maxWidth: "1000px" }}
          >
            <div className="md:flex w-full">
              {/* Left Section */}
              <div className="hidden md:block w-1/2 bg-[#FFF8E1]  px-10">
                <Lottie animationData={registerLottieData}></Lottie>
              </div>

              {/* Right Section */}
              <form
                onSubmit={handleLogin}
                className="w-full md:w-1/2 py-10 px-5 md:px-10"
              >
                <div className="text-center mb-10">
                  <h1 className="font-bold text-3xl text-gray-900">Login</h1>
                  <p>Enter your information to continue</p>
                </div>
                <div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 ">
                      <label className="text-xs font-semibold px-1">
                        Email
                      </label>
                      <div className="flex">
                        <input
                          name="email"
                          type="email"
                          className="w-full pl-10 pr-3 py-2 rounded-sm border-2 border-gray-200 outline-none focus:border-[#FFC107]"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 ">
                      <label className="text-xs font-semibold px-1">
                        Password
                      </label>
                      <div className="flex">
                        <input
                          name="password"
                          type="password"
                          className="w-full pl-10 pr-3 py-2 rounded-sm border-2 border-gray-200 outline-none focus:border-[#FFC107]"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3">
                      <button className="block w-full max-w-xs mx-auto bg-[#FF5722] hover:bg-[#E64A19]  text-white rounded-sm px-3 py-3 font-semibold">
                        Login
                      </button>
                      <p className="text-center mt-2">
                        Don't Have An Account{" "}
                        <strong className="hover:underline">
                          <Link to="/register">Register</Link>
                        </strong>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default LoginPage;
