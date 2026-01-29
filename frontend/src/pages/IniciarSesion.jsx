import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import "../index.css"
import { Link, useNavigate } from 'react-router-dom'
import API_URL from '@/api/fetch'
import axios from 'axios'

export const IniciarSesion = () => {
    const navigate = useNavigate()
    const [email_empresa, setEmail_empresa] = useState('ikatech@gmail.com')
    const [password_admin, setPassword_admin] = useState('ikatech1')

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            navigate("/dashboardHome", { replace: true })
        }
    }, [navigate])
    
    const handleForm = async (e) => {
        e.preventDefault()
        const datosEmpresa = {
            email_empresa: email_empresa.trim(),
            password_admin: password_admin.trim()
        }
        try {
            const { data } = await axios.post(`${API_URL}/api/iniciarSesion`, datosEmpresa)
            Swal.fire({
                title: "Inicio de sesion exitoso",
                icon: "success",
                draggable: true
            })
            setEmail_empresa('')
            setPassword_admin('')
            localStorage.setItem('token', data.token)
            navigate('/dashboardHome', { replace: true })
        } catch (error) {
            Swal.fire({
                title: "Error al iniciar sesion",
                icon: "error",
                text: error.response?.data?.mensaje || "Credenciales incorrectas",
                draggable: true
            })
        }
    }
    
    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
                <div className="text-center mb-10">
                    <img src="logoAzul.png" alt="" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        ¡Ingresa para gestionar tu empresa!
                    </h2>
                    <p className="text-gray-500 mt-2">
                        “Ayudamos a las empresas a organizar, controlar y centralizar su operación sin depender de Excel ni WhatsApp.”
                    </p>

                </div>

                <form className="space-y-5" onSubmit={handleForm}>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Correo electrónico</label>
                        <input
                            type="email"
                            placeholder="correo@ejemplo.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2b5aed] focus:border-transparent outline-none transition-all bg-gray-50"
                            value={email_empresa}
                            onChange={(e) => setEmail_empresa(e.target.value)}
                        />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-semibold text-gray-700">Contraseña</label>
                            <a href="#" className="text-xs text-[#2b5aed] hover:underline">¿Olvidaste tu contraseña?</a>
                        </div>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2b5aed] focus:border-transparent outline-none transition-all bg-gray-50"
                            value={password_admin}
                            onChange={(e) => setPassword_admin(e.target.value)}
                        />
                    </div>

                    <button className="w-full py-4 bg-[#2b5aed] text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95">
                        Iniciar Sesión
                    </button>
                </form>

                {/* Footer del Card */}
                <div className="mt-8 text-center border-t pt-6 border-gray-50">
                    <p className="text-gray-600">
                        ¿Aún no tienes cuenta?
                        <button
                            className="ml-2 text-[#2b5aed] font-bold hover:underline"
                        >
                            <Link to="/registro">Regístrate aquí</Link>
                        </button>
                    </p>
                </div>
            </div>

            {/* Botón para volver a la Home */}
            <button className="mt-8 text-gray-400 hover:text-gray-600 flex items-center gap-2 transition-colors">
                <Link to="/">← Volver a la página principal</Link>
            </button>
        </div>
    )
}
