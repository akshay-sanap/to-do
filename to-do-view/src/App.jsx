import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import MyToDoList from "./MyComponets/MyToDoList";
import Navbar from "./MyComponets/Navbar";
import Header from "./MyComponets/Header";

function App() {
  return (
    <>
      <Navbar />
      <div className="container col-12">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MyToDoList />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
