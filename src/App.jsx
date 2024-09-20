import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Otp from "./pages/auth/Otp";
import EnterOtp from "./pages/auth/EnterOtp";
import ResetPassword from "./pages/auth/ResetPassword";
import Landing from "./pages/inner/Landing";
import Plans from "./pages/inner/Plans";
import Touch from "./pages/inner/Touch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="forgotpassword" element={<ForgotPassword />} />
      <Route path="otp" element={<Otp />} />
      <Route path="enterotp" element={<EnterOtp />} />
      <Route path="resetpassword" element={<ResetPassword />} />
      <Route path="/" element={<Landing />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/touch" element={<Touch />} />
    </Routes>
  );
}

export default App;
