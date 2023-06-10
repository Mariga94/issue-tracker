import React, { useState } from "react";
import { Link } from "react-router-dom";

interface LoginFormState {
  email: "";
  password: "";
}
const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormState>({
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
            Login
          </button>

          <div className="form_state">
            <p>Don't have an account ?</p>
            <Link to="/register">register</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
