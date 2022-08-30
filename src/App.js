import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Createevent from './components/Createevent';
import Home from './components/Home';
import Eventstate from './Event-context/Eventstate';
import Preview from './components/Preview';

function App() {
  return (
    <>
      <Eventstate>
        <Router>
        <Routes>
              <Route exact path="/create-event-app" element={<Home />}></Route>
              <Route exact path="/createevent" element={<Createevent/>}></Route>
              <Route exact path="/preview" element={<Preview/>}></Route>
            </Routes>
        </Router>
      </Eventstate>
    </>
  );
}

export default App;
