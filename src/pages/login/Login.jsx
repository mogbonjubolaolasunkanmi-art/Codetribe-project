import { Eye } from "lucide-react";
import codeTribe from "../../assets/codetribe-logo.jpg";
import flowerpot from "../../assets/green-flower-pot.png";
import "./Login.css";

const Login = () => {
  return (
    <div className="auth-section">
      <div className="auth-card">
        <div className="form-side">
          <div className="logo">
            <img src={codeTribe} alt="logo" />
          </div>
          <div>
            <div>
              <h1>
                {/* {Signup ? "Create your account" : "Welcome back!"} */}
                Welcome back!
              </h1>
              <p>Login to continue your habit journey</p>
            </div>
            <form action="sign-up">
              {/* <div className="form-group">
                <label htmlFor="Full name">Full name</label>
                <input type="text" placeholder="Enter your full name" />
              </div> */}
              <div className="form-group">
                <label htmlFor="Email address">Email address</label>
                <input type="email" placeholder="Enter your email address" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-container">
                  <input type="password" placeholder="Create a password" />
                  <Eye className="eye-icon" />
                </div>
                <div className="login-options">
                  <label className="remember">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <a href="#">Forgot password?</a>
                </div>
              </div>
              <button className="signup-btn">Sign up</button>
              <p className="cont">Or continue with</p>
              {/* <div className="google-btn">
                <img src="./googleicon.png" alt="googlelogo" />
                <p>Continue with google</p>
              </div> */}
              <button className="google-btn">
                <img src="./googleicon.png" alt="googlelogo" />
                Continue with google
              </button>
              <p className="cont-2">
                Already have an account? <span>Log in</span>
              </p>
            </form>
          </div>
        </div>
        <div className="flower-side">
          <div>
            <img src={flowerpot} alt="pot" />
          </div>
          <h1>
            Better habits <br />
            starts here.
          </h1>
          <p>Track your progress,stay motivated and build the life you want.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
