import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { 
  User, 
  Mail, 
  Building2, 
  Camera, 
  ShieldCheck, 
  Bell, 
  Globe,
  Save
} from 'lucide-react';

export const MiPerfil = () => {
  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar activePage="perfil" />

      <main className="flex-grow p-8 mt-15">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Mi Perfil</h1>
            <p className="text-gray-500 mt-1">Configura tu información personal y los ajustes de tu cuenta.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Columna Izquierda: Foto y Roles */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm text-center">
                <div className="relative inline-block">
                  <div className="w-32 h-32 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-[2rem] flex items-center justify-center text-white text-4xl font-black shadow-xl shadow-blue-100 mb-6">
                    AD
                  </div>
                  <button className="absolute bottom-4 right-0 p-2 bg-white rounded-xl shadow-lg border border-gray-100 text-[#2b5aed] hover:scale-110 transition-transform">
                    <Camera size={18} />
                  </button>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Admin Usuario</h3>
                <p className="text-sm text-gray-400 font-medium">Administrador Principal</p>
                <div className="mt-6 pt-6 border-t border-gray-50 flex justify-center gap-4">
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-800">154</p>
                    <p className="text-[10px] uppercase font-black text-gray-400">Trabajos</p>
                  </div>
                  <div className="w-px h-8 bg-gray-100"></div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-800">98%</p>
                    <p className="text-[10px] uppercase font-black text-gray-400">Éxito</p>
                  </div>
                </div>
              </div>

              {/* Ajustes Rápidos */}
              <div className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm space-y-2">
                <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 font-semibold text-sm">
                  <div className="flex items-center gap-3"><Bell size={18}/> Notificaciones</div>
                  <div className="w-10 h-5 bg-green-500 rounded-full relative"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div></div>
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 font-semibold text-sm">
                  <div className="flex items-center gap-3"><Globe size={18}/> Idioma</div>
                  <span className="text-xs text-gray-400">Español</span>
                </button>
              </div>
            </div>

            {/* Columna Derecha: Formulario de Datos */}
            <div className="lg:col-span-2 space-y-8">
              {/* Información Personal */}
              <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm">
                <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <User size={20} className="text-[#2b5aed]"/> Información Personal
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase ml-1">Nombre Completo</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18}/>
                      <input type="text" defaultValue="Admin Usuario" className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2b5aed] outline-none transition-all font-medium text-gray-700"/>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase ml-1">Correo Electrónico</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18}/>
                      <input type="email" defaultValue="admin@romentech.com" className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2b5aed] outline-none transition-all font-medium text-gray-700"/>
                    </div>
                  </div>
                </div>
              </div>

              {/* Información de la Empresa */}
              <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm">
                <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Building2 size={20} className="text-[#2b5aed]"/> Datos de Empresa
                </h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase ml-1">Nombre de la Empresa</label>
                    <input type="text" defaultValue="Romentech Solutions S.A.S" className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2b5aed] outline-none transition-all font-medium text-gray-700"/>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase ml-1">NIT / Identificación</label>
                      <input type="text" defaultValue="900.123.456-7" className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2b5aed] outline-none transition-all font-medium text-gray-700"/>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase ml-1">Ciudad</label>
                      <input type="text" defaultValue="Bogotá, Colombia" className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2b5aed] outline-none transition-all font-medium text-gray-700"/>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón Guardar */}
              <div className="flex justify-end">
                <button className="flex items-center gap-2 bg-[#2b5aed] text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all hover:-translate-y-1">
                  <Save size={20}/> Guardar Cambios
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};