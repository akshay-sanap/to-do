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
import MyFeed from "./MyComponets/Home/MyFeed";
import AlbumDetails from "./MyComponets/Home/AlbumDetails";

function App() {
  return (
    <BrowserRouter>
      <div id="to-do">
        <Navbar />
        <div className="container col-12 main-content">
          <Routes>
            <Route path="/" element={<OpeningPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/todos" element={<MyToDoList />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/posts" element={<MyPosts />} />
            <Route path="/albums" element={<MyAlbum />} />
            <Route path="/myfeed" element={<MyFeed />} />

            <Route path="/albums/:albumId" element={<AlbumDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
