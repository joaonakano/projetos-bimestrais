import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../Pages/Home/Home.js"
import AddOrderForm from "../Pages/AddOrderForm/AddOrderForm.js"
import Update from "../Pages/Update/Update.js"
export default function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/add" element={<AddOrderForm />}/>
                <Route path="/update/:id" element={<Update />}/>
            </Routes>
        </BrowserRouter>
    )
}