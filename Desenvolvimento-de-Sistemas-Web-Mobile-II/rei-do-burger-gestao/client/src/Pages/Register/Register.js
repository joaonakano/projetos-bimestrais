import "./style.css"

export default function Register() {
    return(
        <>
            <h2>Signin Page</h2><br/>
            <form>
                <label>E-mail:</label><br/>
                <input type="text" placeholder="Digite seu e-mail" required/><br/><br/>
                <label>Senha:</label><br/>
                <input type="password" placeholder="Digite sua senha" required/><br/><br/>
                <button type="submit">Registrar</button>
            </form>
        </>
    )
}