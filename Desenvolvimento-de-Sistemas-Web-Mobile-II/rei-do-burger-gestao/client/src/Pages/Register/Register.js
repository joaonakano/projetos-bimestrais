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
        <>
            <h2>Signin Page</h2><br/>
            <form onSubmit={handleSignin}>
                <label>E-mail:</label><br/>
                <input type="text" placeholder="Digite seu e-mail" value={email} onChange={e => setEmail(e.target.value)} required/><br/><br/>
                <label>Senha:</label><br/>
                <input type="password" placeholder="Digite sua senha" value={password} onChange={e => setPassword(e.target.value)} required/><br/><br/>
                <div>
                    {error && <p>{error}</p>}
                </div>
                <button type="submit">Registrar</button>
            </form>
        </>
    )
}