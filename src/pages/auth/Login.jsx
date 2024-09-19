import React, { useState, useEffect } from "react";
import CommonLayout from "../../layout/CommonLayout";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <CommonLayout>
      <div className="bg-white flex-1 w-full">
        <div className="item_container">Login</div>
      </div>
    </CommonLayout>
  );
};

export default Login;
