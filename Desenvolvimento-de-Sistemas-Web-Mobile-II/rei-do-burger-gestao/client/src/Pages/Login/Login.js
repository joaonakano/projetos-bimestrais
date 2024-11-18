import "./style.css"

export default function Login() {
    return(
        <>
            <h2>Login Page</h2><br/>
            <form>
                <label >E-mail:</label><br/>
                <input type="text" placeholder="Digite seu e-mail" required></input><br/><br/>
                <label>Senha:</label><br/>
                <input type="password" placeholder="Digite sua senha" required></input><br/><br/>
                <button type="submit">Login</button>
            </form>
        </>
    )
}