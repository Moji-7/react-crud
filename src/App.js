import "./App.css";
import Create from "./components/create";
import List from "./components/list";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Outlet,
} from "react-router-dom";
import New from "./components/campaigns/New";
import { Alert } from "./components/campaigns/Alert";
import Counter from "./components/counter/Counter";
import Color from "./components/counter/color/Color";
import { ColorRenderer } from "./components/counter/color/ColorRenderer";
import { ThemeComponent } from "./components/counter/darkmode/ThemeComponent";
import { useEffect, useState } from "react";
import getWeather from "./components/counter/darkmode/useTheme";
import axios from "axios";
import { Users } from "./components/counter/apiCall/Users";
import { RegisterUser } from "./components/counter/formValidation/RegisterUser";
import { Scorekeeper } from "./components/scorePersist/Scorekeeper";
import WindowEvent from "./components/WindowEvent/WindowEvent";
import Colors from "./components/colorPixels/Colors";
import { Calculator } from "./components/calculator/Calculator";
import { Focus } from "./components/focusRef/Focus";
import { Dashboard } from "./components/shopping/Dashboard";
import { MyDropdown } from "./components/dropDown/MyDropdown";


function App() {
  //const [mode, handleMode] = useTheme("dark");
  const [mode, setMode] = useState("dark");
  const [city, setCity] = useState("berlin");

  const handleMode = (mode) => {
    setMode((prev) => setMode(mode));
  };
  const [state, setState] = useState("");
  const [themeClass, setThemeClass] = useState("");
  const handleChild = (e) => {
    setState(e);
    setThemeClass(e);
  };

  return (
    <div className={themeClass}>
      <header className="App-header">
        <ThemeComponent stateChanger={(e) => handleChild(e)} />

        <div className={mode}>mode:{mode}</div>
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
              <li>
                <Link to="/campaigns/New">Campaign</Link>
              </li>
              <li>
                <Link to="/campaigns/Alert">alert</Link>
              </li>
              <li>
                <Link to="/counter/Counter">counter</Link>
              </li>
              <li>
                <Link to="/color/Color">color</Link>
              </li>
              <li>
                <Link to="/users/">users</Link>
              </li>
              <li>
                <Link to="/registerUser/">register user</Link>
              </li>
              <li>
                <Link to="/scoreKeeper/">score keeper</Link>
              </li>
              <li>
                <Link to="/windowEvent/">window event</Link>
              </li>
              <li>
                <Link to="/colors/">coloring</Link>
              </li>
              <li>
                <Link to="/calculator/">calculator</Link>
              </li>
              <li>
                <Link to="/searchFocus/">focus search</Link>
              </li>
              <li>
                <Link to="/dropdown/">drop down</Link>
              </li>
              <li>
                <Link to="/shopping/">shopping card</Link>
              </li>
            </ul>
          </nav>

          <Outlet />

          <Routes>
            <Route path="/create" index element={<Create />} />
            <Route path="/list" index element={<List />} />
            <Route path="/campaigns/New" index element={<New />} />
            <Route path="/campaigns/Alert" index element={<Alert />} />
            <Route path="/Counter/Counter" index element={<Counter />} />
            <Route path="/color/Color" index element={<ColorRenderer />} />
            <Route path="/users/" index element={<Users />} />
            <Route path="/registerUser/" index element={<RegisterUser />} />
            <Route path="/scoreKeeper/" index element={<Scorekeeper />} />
            <Route path="/windowEvent/" index element={<WindowEvent />} />
            <Route path="/colors/" index element={<Colors />} />
            <Route path="/calculator/" index element={<Calculator />} />
            <Route path="/searchFocus/" index element={<Focus />} />
            <Route path="/dropdown/" index element={<MyDropdown />} />
            <Route path="/shopping/" index element={<Dashboard />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
