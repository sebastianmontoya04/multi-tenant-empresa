import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importamos useLocation para detectar la ruta actual
import { LayoutDashboard, Users, Briefcase, CheckSquare, Image as ImageIcon, UserCircle, BarChart3, Menu, X, LogOut } from 'lucide-react';

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Esto nos dice en qué URL estamos

    const menuItems = [
        { id: 'inicio', label: 'Inicio', icon: <LayoutDashboard size={20} />, link: '/dashboardHome' },
        { id: 'clientes', label: 'Clientes', icon: <Users size={20} />, link: '/clientes' },
        { id: 'trabajos', label: 'Trabajos', icon: <Briefcase size={20} />, link: '/trabajos' },
        { id: 'tareas', label: 'Tareas', icon: <CheckSquare size={20} />, link: '/tareas' },
        { id: 'usuarios', label: 'Usuarios', icon: <Users size={20} />, link: '/usuarios' },
        { id: 'evidencias', label: 'Evidencias', icon: <ImageIcon size={20} />, link: '/evidencias' },
        { id: 'reportes', label: 'Reportes', icon: <BarChart3 size={20} />, link: '/reportes' },
        { id: 'perfil', label: 'Mi perfil', icon: <UserCircle size={20} />, link: '/miperfil' },
    ];

    return (
        <>
            {/* Botón Hamburguesa Móvil */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-[110] p-2 bg-[#2b5aed] text-white rounded-lg"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[100] lg:hidden backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed lg:sticky top-0 left-0 z-[105] h-screen bg-white border-r border-gray-100 transition-all duration-300
                ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0 lg:w-64'}
            `}>
                <div className="p-6 flex items-center gap-3">
                    <img src="logoAzul.png" alt="Logo" />
                </div>

                <nav className="flex-grow px-4 space-y-2 mt-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.link}
                            onClick={() => setIsOpen(false)} // Cierra el menú en móvil
                            className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all ${
                                // Comparamos la URL actual con el link del item
                                location.pathname === item.link
                                    ? 'bg-[#2b5aed] text-white shadow-lg shadow-blue-100'
                                    : 'text-gray-500 hover:bg-gray-50'
                                }`}
                        >
                            {item.icon}
                            <span className="font-semibold text-sm">{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-50">
                    <button className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-red-500 hover:bg-red-50 transition-colors">
                        <LogOut size={20} />
                        <span className="font-semibold text-sm">Salir</span>
                    </button>
                </div>
            </aside>
        </>
    );
};