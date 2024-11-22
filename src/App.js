import React from "react";
import Home from "./pages/Home";
import Alltasks from "./pages/Alltasks";
import Importanttasks from "./pages/Importanttasks";
import Completedtasks from "./pages/Completedtasks";
import Incompletedtasks from "./pages/Incompletedtasks";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="bg-rect-purple border-rect-purple text-white h-screen p-2 relative">
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route index element={<Alltasks />}/>
          <Route/>
          
        </Routes>
      </Router> */}
       <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route index element={<Alltasks />} />
          <Route  path="/Importanttasks" element={<Importanttasks />} />
          <Route  path="/Completedtasks" element={<Completedtasks />} />
          <Route  path="/Incompletedtasks" element={<Incompletedtasks />} />
          <Route  path="/Settings" element={<Settings />} />
        </Route>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/Login" element={<Login />}/>
      </Routes>
    </Router>
    </div>
  );
};

export default App;

