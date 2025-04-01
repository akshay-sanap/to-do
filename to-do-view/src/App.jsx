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
import AddTodo from "./MyComponets/AddTodo";

function App() {
  return (
    <>
      <Navbar />
      <div className="container   mt-5">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header /> <MyToDoList />
                </>
              }
            />
            <Route path="/" element={<></>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
