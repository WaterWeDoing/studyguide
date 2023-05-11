import "./App.css";
import NavBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import Strings from "./Strings";
import Integers from "./Integers";
import Loops from "./Loops";
import Sql from "./Sql";
import Home from "./Home";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/Welcome" element={<Home />} />
          <Route path="/Strings" element={<Strings />} />
          <Route path="/Integers" element={<Integers />} />
          <Route path="/Loops" element={<Loops />} />
          <Route path="/Sql" element={<Sql />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
