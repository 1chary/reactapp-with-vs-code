import { useState } from "react"


const Home = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const submitDetails = async (event) => {
        event.preventDefault()
        const userDetails = {username,password}
        console.log(username)
        console.log(password)
        const api = "https://my-node-file.onrender.com/login"
        const options = {
            body: JSON.stringify(userDetails),
            method: 'POST',
        }
        const response = await fetch(api,options)
        const data = await response.json()
        console.log(data)
    }

    return (
        <form onSubmit={submitDetails}>
            <input type = "text" placeholder="enter your username" onChange={(event) => setUsername(event.target.value)} value = {username}/>
            <input type = "password" placeholder="enter your password" onChange={(event) => setPassword(event.target.value)} value = {password} />
            <button type = "submit">submit</button>
        </form>
    )
}   

export default Home