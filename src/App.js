import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from "./components/Home"

const App = () => (
 
      <Routes>
        <Route exact path = "/" element = {<Home/>}/>
      </Routes>
   
)

export default App;
