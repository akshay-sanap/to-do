import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./MyComponets/Navbar/Navbar";
import SignUp from "./MyComponets/Account/SignUp";
import LogIn from "./MyComponets/Account/LogIn";
import HomePage from "./MyComponets/Home/HomePage";
import MyToDoList from "./MyComponets/Home/MyToDoList";
import UserList from "./MyComponets/Home/UserList";
import OpeningPage from "./MyComponets/OpeningPage/OpeningPage";
import MyPosts from "./MyComponets/Home/MyPosts";
import MyAlbum from "./MyComponets/Home/MyAlbum";
import MyPhotos from "./MyComponets/Home/MyPhotos";
import Footer from "./MyComponets/HeaderFooter/Footer";

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
          <Route path="/posts" element={<MyPosts />} />
          <Route path="/albums" element={<MyAlbum />} />
          <Route path="/albums/:albumId" element={<MyPhotos />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
