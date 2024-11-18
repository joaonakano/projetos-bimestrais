import axios from "axios"

const connection = "http://localhost:8000/api"

class AxiosInstance {
    constructor(connectionURL){
        // Se não houver instâncias existentes do axios, então é criada uma nova
        if(!AxiosInstance.instance) {
            AxiosInstance.instance = axios.create({
                baseURL: connectionURL,
                timeout: 10000,
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            })
        }
    }

    getInstance() {
        return AxiosInstance.instance
    }
}

const instance = new AxiosInstance(connection)
// Impede do objeto "instance" receber novas informações ou modificações
Object.freeze(instance)

export default instance.getInstance()