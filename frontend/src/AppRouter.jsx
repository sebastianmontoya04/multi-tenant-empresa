import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Register } from "../src/pages/Register"
import { IniciarSesion } from "../src/pages/IniciarSesion"
import { Dashboard } from "../src/pages/Dashboard"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/registro' element={<Register />} />
            <Route path='/iniciarSesion' element={<IniciarSesion />} />
        </Routes>
    )
}
