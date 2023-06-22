import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../config/newRequest";

interface LoginFormState {
  email: string;
  password: string;
}
const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormState>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setIsLoading(true);
    try {
      await newRequest.post("/auth/login", { ...formData }).then((response) => {
        const { data } = response;
        console.log(data);
        const { email, _id } = data;
        const userData = {
          email: email,
          _id: _id,
        };
        localStorage.setItem("userData", JSON.stringify(userData));
      });
      setSuccess(true);
      setIsLoading(false);
      setTimeout(() => {
        navigate("/projects");
      }, 2000);
    } catch (error: unknown) {
      if ((error as any)?.response) {
        setError((error as any)?.response?.data);
      } else if ((error as any).request) {
        setError("Check your network connection");
      } else {
        setError(`An error occured ${(error as any).message}`);
      }
      setIsLoading(false);
    }
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
      }, 10000);
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
      <form onSubmit={handleSubmit} className="register__form">
        {error && <p className="error-message message">{error}</p>}
        {success && (
          <p className="success-message message">Login successful!</p>
        )}
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
            {isLoading ? "Signing In..." : "Sign In"}
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
