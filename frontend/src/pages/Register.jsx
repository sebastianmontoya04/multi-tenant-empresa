import React from 'react'
import "../index.css"

export const Register = () => {
    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2b5aed] rounded-2xl mb-4 shadow-lg shadow-blue-200">
                        <span className="text-white text-2xl font-bold">{":)"}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                        Crea tu cuenta
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Empieza a organizar tu negocio hoy mismo
                    </p>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre de la empresa</label>
                        <input
                            type="text"
                            placeholder="Ej. Romentech Solutions"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2b5aed] focus:border-transparent outline-none transition-all bg-gray-50"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre de el administrador</label>
                        <input
                            type="text"
                            placeholder="Ej. sebastian montoya"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2b5aed] focus:border-transparent outline-none transition-all bg-gray-50"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Correo electrónico</label>
                        <input
                            type="email"
                            placeholder="correo@ejemplo.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2b5aed] focus:border-transparent outline-none transition-all bg-gray-50"
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
                        />
                    </div>

                    <button className="w-full py-4 bg-[#2b5aed] text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95">
                        Registrar Empresa
                    </button>
                </form>

                {/* Footer del Card */}
                <div className="mt-8 text-center border-t pt-6 border-gray-50">
                    <p className="text-gray-600">
                        ¿Ya eres parte de nosotros?
                        <button

                            className="ml-2 text-[#2b5aed] font-bold hover:underline"
                        >
                            Inicia sesión
                        </button>
                    </p>
                </div>
            </div>

            {/* Botón para volver a la Home */}
            <button className="mt-8 text-gray-400 hover:text-gray-600 flex items-center gap-2 transition-colors">
                <span>←</span> Volver a la página principal
            </button>
        </div>
    )
}
