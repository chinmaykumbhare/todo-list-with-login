import './App.css';
import AddTask from './components/AddTask';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login';
import {Redirect} from 'react-router-dom'
import Register from './components/Register';

function App() {

  document.body.style.zoom = "150%";

  const logout = () => {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("name");
    window.location.reload();
  }

  return (
    <>
    <div className="App">
      <Router>
      <h3>Todo List App</h3>
      {sessionStorage.getItem("name") && <h5>Hello, {sessionStorage.getItem("name")}</h5>}
      {sessionStorage.getItem("isLoggedIn") && <button style={{width: "auto"}} onClick={logout}>Logout</button>}
      <hr/>
      {(sessionStorage.getItem("isLoggedIn") === true) ? null : <Redirect to="/login"></Redirect>}
      <Route path="/" exact component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route path="/todo" component={AddTask}/>
      </Router>
    </div>
    </>
  );
}

export default App;