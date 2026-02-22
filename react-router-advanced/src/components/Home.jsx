import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to the Home Page</h1>

      <p>This is a public page.</p>

      <nav style={{ marginTop: "20px" }}>
        <Link to="/login">Go to Login</Link>
        <br />
        <Link to="/post/1">View Sample Post</Link>
        <br />
        <Link to="/profile">Go to Profile (Protected)</Link>
      </nav>
    </div>
  );
}

export default Home;