import React, { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth" 
import { auth } from "../../Utils/Firebase"

import "./style.css"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")    
    
    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            await signInWithEmailAndPassword(auth, email, password)
            setError('')
            alert('Login feito com Sucesso!')
            window.location.href='/'
        } catch (err) {
            setError(err.message)
        }
    }
    
    return(
        <>
            <h2>Login Page</h2><br/>
            <form onSubmit={handleLogin}>
                <label >E-mail:</label><br/>
                <input type="text" placeholder="Digite seu e-mail" value={email} onChange={e => {setEmail(e.target.value)}} required></input><br/><br/>
                <label>Senha:</label><br/>
                <input type="password" placeholder="Digite sua senha" value={password} onChange={e => {setPassword(e.target.value)}} required></input><br/><br/>
                <div>
                    {error && <p>{error}</p>}
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    )
}