import { useState } from "react";
import { motion } from "framer-motion";
import home from "../Images/home.gif";
import { registerUser, loginUser } from "../api/authApi";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const response = await registerUser({
      username,
      name,
      email,
      password,
    });
    if (response.status === 201) {
      alert("User created successfully!");
    } else {
      alert(response.data.message)
      alert("Error creating user!");
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    const response = loginUser({
      email,
      password,
    })
    console.log(response);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      // localStorage.setItem("username", response.data.user.username);

      alert("Login successful!");
    } else {
      // alert(response.data.message)
      alert("Error logging in!");
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="relative w-[48rem] h-[500px] perspective-1000">
        <motion.div
          className="absolute w-full h-full bg-[#141327] rounded-2xl shadow-lg flex"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isLogin ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front - Signup */}
          <div
            className="absolute w-full h-full flex flex-row items-center justify-between px-12"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="w-1/2 absolute">
            {/* Signup Form */}
            <div className="w-[280px] relative left-[20px] flex flex-col items-center">
              <h2 className="text-white text-2xl mb-4 font-semibold">
                Sign Up
              </h2>
              <form onSubmit={handleRegisterSubmit}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 mb-2 rounded bg-gray-700 text-white outline-none"
                />
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 mb-2 rounded bg-gray-700 text-white outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 mb-2 rounded bg-gray-700 text-white outline-none"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 mb-4 rounded bg-gray-700 text-white outline-none"
                />
                <button className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  Sign Up
                </button>
              </form>
              <p
                className="text-gray-400 mt-4 cursor-pointer hover:text-gray-300"
                onClick={() => setIsLogin(true)}
              >
                Already have an account?{" "}
                <span className="text-blue-400">Login</span>
              </p>
            </div>
            </div>
            {/* Signup Image */}
            <div className="w-[400px] flex items-center justify-center h-full">
              <div className="relative left-[325px] bg-blue-600 items-center justify-center h-full ml-[50px] rounded-lg shadow-lg flex flex-col">
                <img
                  src={home}
                  alt="Signup"
                  className="h-[60%] w-[400px] justify-center items-center rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Back - Login */}
          <div
            className="absolute w-full h-full flex flex-row items-center justify-between px-12"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
            >
            <div className="grid grid-flow-col items-center justify-between h-full w-full">
            {/* Login Image */}
            <div className="absoulute w-[450px] flex items-center justify-center h-full">
              <div className="relative right-[87px] bg-purple-600 items-center justify-center h-full rounded-lg shadow-lg flex flex-col w-[370px]">
                <img
                  src={home}
                  alt="Signup"
                  className="h-[60%] w-full justify-center items-center rounded-lg shadow-lg"
                />
              </div>
            </div>
            {/* Login Form */}
            <div className="w-[280px] relative right-[65px] flex flex-col items-center outline-none">
              <h2 className="text-white text-2xl mb-4 font-semibold">Login</h2>
              <form>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 mb-2 rounded bg-gray-700 text-white outline-none"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 mb-4 rounded bg-gray-700 text-white outline-none"
                />
                <button className="w-full p-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition" onClick={handleLoginSubmit}>
                  Login
                </button>
                <p
                  className="text-gray-400 mt-4 cursor-pointer hover:text-gray-300"
                  onClick={() => setIsLogin(false)}
                >
                  Don&apos;t have an account?{" "}
                  <span className="text-purple-400">Sign Up</span>
                </p>
              </form>
            </div>
            </div>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
}

