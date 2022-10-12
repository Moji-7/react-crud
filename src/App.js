import logo from "./logo.svg";
import "./App.css";
import Create from "./components/create";
import { BrowserRouter as Router, Route,Link,Routes,Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App ">
      <header className="App-header">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/create">Home</Link>
              </li>
              <li>
                <Link to="/list">Blogs</Link>
              </li>
              <li>
                <Link to="/update">Contact</Link>
              </li>
            </ul>
          </nav>

          <Outlet />

          <Routes>
            <Route path="/create" element={<Create />}>
              <Route index element={<Create />} />
            </Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
