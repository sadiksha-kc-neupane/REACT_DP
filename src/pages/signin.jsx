import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center p-12">
        {/* Author: FormBold Team */}
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form>
            <div className="mb-5">
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5 pt-3">
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Password
              </label>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="password"
                      name="password"
                      id="email"
                      placeholder="Enter your password"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5"></div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5"></div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5"></div>
                </div>
              </div>
            </div>
            <div>
              <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      <Link to="/forgotPassword">Forgot Password</Link>
    </>
  );
}

export default Signin;
