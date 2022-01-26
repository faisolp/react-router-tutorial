import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import './test01.css';
import Dashboard from "./Dashboard"
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
          <Link to="/" activeClassName="active" end>
            Home
          </Link>
          </li>
          <li>
            <Link to="dashboard" activeClassName="active">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="about" activeClassName="active">
              About
            </Link>
          </li>
          <li>
            <Link to="auth" activeClassName="active">Auth</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        {/* Define all the routes */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="dashboard/*" element={<Dashboard />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export const Auth = () => {
   //let navigate = useNavigate();
    function handleClick() {
        
        //navigate('/auth/login')
      }
    return(
    <div>
        <h1>Auth</h1>
        <nav>
            <ul>
            
                <li>
                    <Link to="/auth/login">login</Link>
                </li>
            </ul>
        </nav>
        <div>
            <button onClick={handleClick}>login</button>
        </div>
        <div className="main">
            <Routes >
                    <Route path="/auth/login" element={<Login />}/>
                    
            </Routes>
        </div>
    </div>)
           
        
}
  export const Login = () => {
    return <div>You are in Login page</div>
  }
export const Home = () => {
  return <div>You are in Home page</div>
}
export const About = () => {
  return <div>This is the page where you put details about yourself</div>
}
export const NotFound = () => {
  return <div>This is a 404 page</div>
}

export default App