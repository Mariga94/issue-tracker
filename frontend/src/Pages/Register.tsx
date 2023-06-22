import React, { useEffect, useState } from "react";
import "./Register.css";
import { useNavigate, Link } from "react-router-dom";
import newRequest from "../config/newRequest";
import { AxiosError } from "axios";

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

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setIsLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await newRequest.post("/auth/register", { ...formData });
      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        password: "",
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error: unknown) {
      setError((error as any)?.response?.data);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    let errorTimeout: ReturnType<typeof setTimeout>;
    let successTimeout: ReturnType<typeof setTimeout>;

    if (error) {
      errorTimeout = setTimeout(() => {
        setError("");
      }, 10000);
    }

    if (success) {
      successTimeout = setTimeout(() => {
        setSuccess(false);
      }, 1000);
    }

    return () => {
      clearTimeout(errorTimeout);
      clearTimeout(successTimeout);
    };
  }, [error, success]);

  return (
    <div className="register">
      <div className="register__form-title">
        <h2 className="register__form-title-text">Issue Tracker</h2>
      </div>
      <form className="register__form" onSubmit={handleSubmit}>
        {error && <p className="error-message message">{error}</p>}
        {success && (
          <p className="success-message message">Registration successful!</p>
        )}
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
            {isLoading ? "Signing Up..." : "Sign Up"}
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
