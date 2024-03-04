const Forgottenpassword = () => {
  return (
    <div>
      <header className="header-forgotpass">
        <h1>facebook</h1>
        <form className="form-forgotpass">
          <input
            type="text"
            className="pass-form1"
            placeholder="Email or phone"
          />
          <input type="password" className="pass-form2" placeholder="Password" />
          <input className="login-btn" type="submit" value="Log in" />
          <a className="forgotten-account-link"   href="#">
            Forgotten account?
          </a>
        </form>
      </header>
      <div className="main">
        <div>
          <div className="containermain-forgotpass">
            <div className="container-forgotpass">
              <h3>Find Your Account</h3>
              <div className="container-forgotpass-border"></div>
              <p>
                Please enter your email address or mobile number to search for
                your account.
              </p>
              <form>
                <input
                  type="text"
                  className="textbox-forgotpass"
                  placeholder="Email address or mobile number"
                />
              </form>
              <div className="buttonmain">
                <button className="button1-forgotpass">Cancel</button>
                <button className="button-forgotpass">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgottenpassword;
