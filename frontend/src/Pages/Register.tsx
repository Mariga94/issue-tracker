import React, { useState } from "react";
import "./Register.css";
import { RiUserLine, RiMailLine, RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
interface RegisterFormState {
  fullName: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormState>({
    fullName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="register">
      <div className="register__form-title">
        <h2 className="register__form-title-text">Issue Tracker</h2>
      </div>
      <form onSubmit={handleSubmit} className="register__form">
        <div className="register__form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            className="register__form-group-input"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="register__form-group">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@site.com"
            className="register__form-group-input"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="register__form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Minimum 8 characters"
            className="register__form-group-input"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="register__form-group">
          <button type="submit" className="register__form-button">
            Sign Up
          </button>

          <div className="form_state">
            <p>Already have an account ?</p>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
