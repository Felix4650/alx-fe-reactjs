import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    navigate("/profile");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login Page</h1>

      <p>This is a simulated login.</p>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;