import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./MyComponets/Navbar";
import SignUp from "./MyComponets/Account/SignUp";
import LogIn from "./MyComponets/Account/LogIn";
import HomePage from "./MyComponets/Home/HomePage";
import MyToDoList from "./MyComponets/Home/MyToDoList";
import UserList from "./MyComponets/Home/UserList";
import OpeningPage from "./MyComponets/OpeningPage/OpeningPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container col-12">
        <Routes>
          <Route path="/" element={<OpeningPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/todos" element={<MyToDoList />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
