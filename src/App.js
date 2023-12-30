import DisplayEmployees from "./screens/DisplayEmployees";
import Employees from "./screens/Employees";
import { Route,Routes,BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Employees/>} path="/employees"/>
          <Route element={<DisplayEmployees/>} path="/displayemployees"/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
