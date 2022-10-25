import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [UnameOrEmail, setUnameOrEmail] = useState("");
  const [password, setpassword] = useState("");

  const user = {
    email: "sri@man.com",
    username: "sri_man",
    password: "sriman",
  };
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();

    if (UnameOrEmail === user.email || UnameOrEmail === user.username) {
      if (password === user.password) {
        navigate("/admin/designs/create");
        console.log("User Loged In");
      } else {
        alert("wrong password");
      }
    } else {
      alert("please check you username/Email or password");
    }
  };
  return (
    <div>
      <div className="bg-gray-800 h-screen py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl  px-4 md:px-8 mx-auto">
          <h2 className="text-white  text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
            Admin Login
          </h2>
          <form
            onSubmit={handlesubmit}
            className="max-w-lg  bg-gradient-to-r from-slate-900 bg-gradient-to-tl from-red-600 to-blue-400 to-blue-900 border rounded-lg mx-auto"
          >
            <div className="form-group flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label
                  htmlFor="Email or UserName"
                  className="inline-block mt-5 text-black text-sm sm:text-base mb-2"
                >
                  Email or username :
                </label>
                <input
                  className=" Input w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  type="text"
                  placeholder="email or username"
                  required
                  value={UnameOrEmail}
                  onChange={(e) => setUnameOrEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="Password"
                  className="inline-block text-black text-sm sm:text-base mb-2"
                >
                  Password :
                </label>
                <input
                  className="Input w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  type="Password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 ml-36 text-center text-white w-40 text-lg font-semibold border rounded hover:dark:text-black  dark:border-gray-100"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
