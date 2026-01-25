import Header from "../components/Header";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="title">
        <Header />
        <h2>A Farmer's Friend</h2>
      </div>
      {/* <h1 class="title">🌾AgroSense,A Farmer Friend🌾</h1> */}
      <div className=" login-box">
        <h2>Login</h2>
        <form id="loginform">
          <div className="input-group">
            <label>Username</label>
            <input
              type="username"
              id="username"
              placeholder="Enter your username or Email"
            />
            <small className="error" id="usernameError" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              // {/*onkeyup="checkStrength()"*/}
            />
            <small className="error" id="passwordError"></small>
            {/* <span onClick={togglePassowrd()} /> */}
            <small id="strengthText" />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
          <p className="signup-text">
            Don't have an account? <a href="#">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
