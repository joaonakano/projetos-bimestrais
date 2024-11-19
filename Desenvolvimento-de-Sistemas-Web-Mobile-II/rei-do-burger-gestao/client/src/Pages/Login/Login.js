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
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>E-mail:</label>
                <input 
                    type="text" 
                    placeholder="Digite seu e-mail" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    required 
                />
                <label>Senha:</label>
                <input 
                    type="password" 
                    placeholder="Digite sua senha" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    required 
                />
                {error && <p className="error-message">{error}</p>}
                <button type="submit">Login</button>
            </form>
            <a href="/signin" className="link">Não tem uma conta? Registre-se</a>
        </div>
    )
}