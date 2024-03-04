import { useNavigate } from "react-router-dom";
import usedata from "../assets/Validation.json"

const Login = () => {
  const navigate = useNavigate();
  const navigateclick = () => {
    navigate("/SignUp");

  };

  return (
    <div className="login-page">
      <div className="main-text">
        <h1 className="heading">facebook</h1>
        <p className="paragraph-maintext">
          Facebook helps you connect and share
        </p>
        <p className="paragraph-maintext">with the people in your life.</p>
      </div>
      <div>
        <form className="form-text">
          <input
            type="text"
            className="box-width"
            placeholder="Email address or phone number"
            id="email"
            
          />
          <br />
          <br />
          <input
            type="password"
            className="box-width"
            placeholder="Password"
            id="pass" 
          />
          <br />
          <br />
          <input type="submit"  className="submit" value="Log in" />
          <br />
          <br />
          <a className="forgotten-account-link" href="/forgotpassword">
            Forgotten password?
          </a>
          <div className="create-account-main">
            <div className="button-newaccount">
              <button className="button-last" onClick={navigateclick}>
                Create new account
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
