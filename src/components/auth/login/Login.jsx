import React, { useState } from "react";
import { loginRequest, saveAccessToken } from '../services/AuthService';
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { findMe, mapUserInfo } from "../services/UserService";
import './Login.css';
import * as userRepo from "../components/UserRepository";


export default function Login() {

  const { setUser } = useAuth();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }


    function handleSubmit(event) {
      event.preventDefault();
      loginRequest(formData)
      .then(response => {
        saveAccessToken(response.data.access_token);

        // ✅ fetch user info and update context
        findMe().then(res => {
          const info = mapUserInfo(res.data);
          setUser(info);
          userRepo.save(info);
          navigate("/dashboard");
        });
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 400) {
            const errMsg = error.response.data.error_description || "Invalid username or password";
            alert(errMsg);
          } else {
            alert("Login failed: " + error.response.status);
          }
        } else {
          alert("Network error: " + error.message);
        }
      });
  }


  // .catch(error => console.log("Login Error", error));


    return (
         <main>
      <section id="login-section" className="dsc-container">
        <div className="dsc-login-form-container">
          <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="dsc-form-controls-container">
              <div>
                <input 
                    className="dsc-form-control dsc-input-error" 
                    type="text" 
                    placeholder="Email" 
                    name="username" 
                    value={formData.username} 
                    onChange={handleChange}/>
                <div className="dsc-form-error"></div>
              </div>
              <div>
                <input 
                    className="dsc-form-control" 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange}/>
              </div>
            </div>

            <div className="dsc-login-form-buttons dsc-mt20">
              <button type="submit" className="dsc-btn dsc-btn-blue">Enter</button>
            </div>
          </form>
        </div>
      </section>
    </main>
    );
}