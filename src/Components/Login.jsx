import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";



export default function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password })
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="username" value={username} onChange={(e) => setUserName(e.target.value)} />
            &nbsp;
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}