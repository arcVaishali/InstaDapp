import React from "react";
import { useState, useEffect } from "react";
import "./signlogin.css";
import { Link } from "react-router-dom";

// ========================
// AUTHORISATION
// ========================
const Signup = () => {
  const [text, setText] = useState({
    userName: "",
    email: "",
    password: "",
  });

  // ========================
  // =========SIGNUP=========
  // ========================
  const signUP = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userName", text.userName);
    formData.append("email", text.email);
    formData.append("password", text.password);
    const url = "https://localhost:3001/auth/signup";
    const options = {
      method: "POST",
      body: formData,
    };
    try {
      const response = await fetch(url, options);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  // ========================
  // ========================
  // ========================
  const handleChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };
  return (
    <div id="signup" className="boxer">
      <div className="contain">
        <form
          className="form-boxer"
          action="/"
          method="POST"
          enctype="multipart/form-data"
        >
          {/* ======================= */}
          {/* USERNAME? */}
          {/* ======================= */}
          <div className="fields">
            <label for="userName">Enter username</label>
            <input
              type="text"
              id="userName"
              placeholder="username"
              value={text.userName}
              onChange={handleChange}
              name="userName"
              required
            />
          </div>

          {/* ======================= */}
          {/* EMAIL? */}
          {/* ======================= */}
          <div className="fields">
            <label for="email">Enter email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={text.email}
              onChange={handleChange}
              placeholder="email@gmail.com"
              required
            />
          </div>

          {/* ======================= */}
          {/* PASSWORD? */}
          {/* ======================= */}
          <div className="fields">
            <label for="password">Enter password</label>
            <input
              type="text"
              id="password"
              name="name"
              value={text.password}
              onChange={handleChange}
              placeholder="password"
              required
            />
          </div>

          {/* OTHER FIELDS--?? */}

          {/* <div className="field">
              <label for="caption">Info2</label>
                  <input type="text" name="caption" />
             </div> */}
        </form>
        <button type="submit" onClick={signUP} className="submit-button">
          <Link  to="">
            Submit
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Signup;
