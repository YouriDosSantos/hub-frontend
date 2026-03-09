import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//import ".Register.css";

export default function RegisterUser() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState ({
        name: "",
        email: "",
        password: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();

         console.log("Submitting registration form...", formData);

        axios.post("http://localhost:8080/api/users/register-user", formData)
            .then (() => {
                alert("Account created succesfully. Please log in.");
                navigate("/login");
            })
            .catch(error => {
                if(error.response?.data?.message) {
                    alert(error.response.data.message);
                } else {
                    alert("Registration failed.");
                }
            });
    }

    return (
        <main>
            <section id="register-section" className="dsc-container">
                <div className="dsc-login-form-container">
                    <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
                        <h2>Create Account</h2>

                        <div className="dsc-form-controls-container">
                            <div>
                                <input
                                    className="dsc-form-control"
                                    type="text"
                                    placeholder="Full Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <input
                                    className="dsc-form-control"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <input
                                    className="dsc-form-control"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="dsc-login-form-buttons dsc-mt20">
                            <button type="submit" className="dsc-btn dsc-btn-blue">Register</button>
                        </div>

                        <div className="dsc-mt20">
                            <span>Already have an Account? </span>
                            <a href="/login" className="dsc-link">Login here</a>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}