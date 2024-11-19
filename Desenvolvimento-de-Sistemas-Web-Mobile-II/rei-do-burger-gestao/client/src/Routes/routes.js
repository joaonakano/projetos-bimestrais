import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavigationProvider } from "../Utils/NavigationContext.js"

import Home from "../Pages/Home/Home.js"
import AddOrderForm from "../Pages/AddOrderForm/AddOrderForm.js"
import Update from "../Pages/Update/Update.js"
import Login from "../Pages/Login/Login.js"
import Register from "../Pages/Register/Register.js"

export default function RoutesApp() {
    return(
        <BrowserRouter>
            <NavigationProvider>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/add" element={<AddOrderForm />}/>
                    <Route path="/update/:id" element={<Update />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/signin" element={<Register />}/>
                </Routes>
            </NavigationProvider>
        </BrowserRouter>
    )
}