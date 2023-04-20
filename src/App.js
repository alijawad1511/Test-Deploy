import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import SecondScreen from './components/SecondScreen';

function App() {
  return (
    <>
      <Router basename='/Test-Deploy'>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/foods' element={<SecondScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
