import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
    const [ordersList, setOrdersList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/get/all')
            .then((res) => {
                setOrdersList(res.data)
            })
    }, [])
    
    return(
    <>
        <h1>Pedidos</h1>    
    
    </>
    )
}