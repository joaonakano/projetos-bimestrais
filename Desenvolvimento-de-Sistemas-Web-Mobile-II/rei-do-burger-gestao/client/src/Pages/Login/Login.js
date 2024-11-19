import React, { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth" 
import { auth } from "../../Utils/Firebase"

import axiosInstance from "../../Utils/AxiosInstance"

import "./style.css"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")    
    
    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const idToken = await userCredential.user.getIdToken()
            
            await axiosInstance.post("/login", { idToken }, { withCredentials: true})

            setError('')
            alert('Login feito com Sucesso!')
            window.location.href='/'
        } catch (err) {
            setError("O Login falhou: " + err.message)
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
                    <p>Se não tiver uma conta, <a href="/signin">crie uma</a></p>
                </div>
                <div>
                    {error && <p>{error}</p>}
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    )
}