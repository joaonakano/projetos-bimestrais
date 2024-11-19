import React, { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../Utils/Firebase"

import "./style.css"

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSignin = async (e) => {
        e.preventDefault()

        try {
            await createUserWithEmailAndPassword(auth, email, password)
            setError('')
            alert('Usuário criado com sucesso!')
            window.location.href="/"
        } catch (err) {
            setError(err.message)
        }
    }   
    
    return(
        <div className="register-container">
            <h2>Registrar</h2>
            <form onSubmit={handleSignin}>
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
                <button type="submit">Registrar</button>
            </form>
            <p>Se tiver uma conta, faça o <a href="/login" className="link">login</a></p>
        </div>
    )
}