import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../Pages/Home/Home.js"
import AddOrderForm from "../Pages/AddOrderForm/AddOrderForm.js"
export default function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/add" element={<AddOrderForm />}/>
            </Routes>
        </BrowserRouter>
    )
}