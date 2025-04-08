import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./MyComponets/Navbar";
import SignUp from "./MyComponets/Account/SignUp";
import LogIn from "./MyComponets/Account/LogIn"; // Make sure this is correctly imported

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container col-12">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
