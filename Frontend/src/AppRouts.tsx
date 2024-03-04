import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Forgottenpassword from "./pages/Forgottenpassword";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const AppRouts = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgotpassword" element={<Forgottenpassword />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/" element={<Navigate to="/login" />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouts;
