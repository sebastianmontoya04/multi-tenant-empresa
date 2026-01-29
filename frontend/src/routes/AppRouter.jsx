import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Register } from "../pages/Register"
import { IniciarSesion } from "../pages/IniciarSesion"
import { Dashboard } from "../pages/Dashboard"
import { DashboardHome } from "../pages/DashboardHome"
import { Clientes } from "../pages/Clientes"
import { Trabajos } from "../pages/Trabajos"
import { Tareas } from "../pages/Tareas"
import { Usuarios } from "../pages/Usuarios"
import { ProtectedRoutes } from '../components/ProtectedRoutes'
import { MiPerfil } from '@/pages/MiPerfil'
import { Evidencias } from '@/pages/Evidencias'
import { Reportes } from '@/pages/Reportes'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/registro' element={<Register />} />
            <Route path='/iniciarSesion' element={<IniciarSesion />} />
            <Route path='/dashboardHome'
                element={
                    <ProtectedRoutes>
                        <DashboardHome />
                    </ProtectedRoutes>
                }
            />
            <Route path='/clientes'
                element={
                    <ProtectedRoutes>
                        <Clientes />
                    </ProtectedRoutes>
                }
            />
            <Route path='/trabajos'
                element={
                    <ProtectedRoutes>
                        <Trabajos />
                    </ProtectedRoutes>
                }
            />
            <Route path='/tareas'
                element={
                    <ProtectedRoutes>
                        <Tareas />
                    </ProtectedRoutes>
                }
            />
            <Route path='/usuarios'
                element={
                    <ProtectedRoutes>
                        <Usuarios />
                    </ProtectedRoutes>
                }
            />
            <Route path='/evidencias'
                element={
                    <ProtectedRoutes>
                        <Evidencias />
                    </ProtectedRoutes>
                }
            />
            <Route path='/reportes'
                element={
                    <ProtectedRoutes>
                        <Reportes />
                    </ProtectedRoutes>
                }
            />
            <Route path='/miperfil'
                element={
                    <ProtectedRoutes>
                        <MiPerfil />
                    </ProtectedRoutes>
                }
            />
        </Routes>
    )
}   
