import logo from "./logo.svg";
import "./App.css";
import Create from "./components/create";
import  List from "./components/list";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Outlet,
} from "react-router-dom";


function App() {
  return (
    <div className="App ">
      <header className="App-header">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/create">create</Link>
              </li>
              <li>
                <Link to="/list">List</Link>
              </li>
              <li>
                <Link to="/update">Contact</Link>
              </li>
            </ul>
          </nav>

          <Outlet />

          <Routes>
      
              <Route path="/create" index element={<Create />} />
              <Route path="/list" index element={<List />} />

          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
