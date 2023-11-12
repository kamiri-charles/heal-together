import { HashRouter as Router, Routes,  Route, Navigate } from 'react-router-dom';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import 'boxicons/css/boxicons.min.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Navigate to='/get-started' /> } />
          <Route path="/get-started" element={ <Welcome /> } />
          <Route path="/sign-in" element={ <SignIn /> } />
          <Route path="/sign-up" element={ <SignUp /> } />
          <Route path="/dashboard" element={ <Dashboard /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
