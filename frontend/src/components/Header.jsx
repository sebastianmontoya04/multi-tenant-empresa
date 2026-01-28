import React from 'react'

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#2b5aed] text-white shadow-md">
            <div className="flex items-center gap-2">
                <img src="logoSaas.png" alt="imagen de logo" className='w-40' />
            </div>
            <div className="space-x-4 text-sm font-medium">
                <a href="/iniciarSesion" className="hover:underline">Login</a>
                <span>|</span>
                <a href="/registro" className="hover:underline">Registro</a>
            </div>
        </header>
    )
}
