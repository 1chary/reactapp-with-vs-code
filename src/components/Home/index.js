import {useEffect} from "react"
import { FaHome } from "react-icons/fa";
import "./index.css"



const Home = () => {
  
  useEffect(() => {
    const fetchAllTheMovies = async () => {
      const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=3ebbee02535b2c5e2a5646788e3b6384&language=en-US&page=1');
      const data = await response.json()
      console.log(data)
    }
    
    fetchAllTheMovies()
  })

  return (
    <div>
      <FaHome />
      <h1>Hi</h1>
    </div>
  )
}

export default Home