import { signOut } from "firebase/auth"
import { auth } from "../../../Utils/Firebase"
import { useNavigation } from "../../../Utils/NavigationContext"
import "./style.css"

export default function Logout() {
    const navigate = useNavigation()

    const handleLogout = async () => {
        try {
            await signOut(auth)
            console.log('Deslogamento com sucesso')
            navigate("/signin")
        } catch (err) {
            console.error('Erro ao deslogar:', err)
        }
    }
    
    return <button onClick={handleLogout}>Logout</button>
}