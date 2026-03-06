import Header from "../components/Header";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Outer Container */}
      <div className="w-150 p-4 space-y-4">
        {/* Top Box */}
        <Header page="Login" />

        {/* Bottom Section Wrapper */}
        <div className="flex items-center justify-center border-4 border-blue-600 gap-4 p-4">
          {/* Two Columns */}
          <div className="flex-1 flex items-center justify-center h-64">
            <p>Add a relevant image here</p>
          </div>

          <div className="flex-1 border-4 border-black bg-gray-300">
            <h2 className="text-center p-4">Login</h2>
            <form id="loginform">
              <div className="p-4">
                <label className="block">Username</label>
                <input
                  className="w-60"
                  placeholder="Enter your username or Email"
                />
                <small className="error" id="usernameError" />
              </div>
              <div className="p-4">
                <label className="block">Password</label>
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
              <button className="p-4">Submit</button>
              <p className="p-4">
                Don't have an account? <a href="#">Register</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
