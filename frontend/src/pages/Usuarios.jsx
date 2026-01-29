import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { 
  UserPlus, 
  ShieldCheck, 
  UserCircle2, 
  MoreVertical, 
  ShieldAlert, 
  AtSign,
  Key
} from 'lucide-react';

export const Usuarios = () => {
  const usuarios = [
    { id: 1, nombre: "Admin Principal", email: "admin@romentech.com", rol: "Administrador", estado: "Activo", iniciales: "AP" },
    { id: 2, nombre: "Andrés Técnico", email: "andres.t@romentech.com", rol: "Operario", estado: "Activo", iniciales: "AT" },
    { id: 3, nombre: "Beatriz Soporte", email: "b.soporte@romentech.com", rol: "Operario", estado: "Inactivo", iniciales: "BS" },
    { id: 4, nombre: "Carlos Jefe", email: "carlos.j@romentech.com", rol: "Administrador", estado: "Activo", iniciales: "CJ" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar activePage="usuarios" />

      <main className="flex-grow p-8 mt-15">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Gestión de Equipo</h1>
              <p className="text-gray-500 mt-1">Controla quién tiene acceso y qué permisos tienen.</p>
            </div>
            <button className="flex items-center justify-center gap-2 bg-[#2b5aed] text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
              <UserPlus size={20} />
              Crear usuario
            </button>
          </div>

          {/* Grid de Usuarios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {usuarios.map((user) => (
              <div key={user.id} className="bg-white rounded-[2rem] border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all flex items-start justify-between group">
                <div className="flex gap-4">
                  {/* Avatar con iniciales */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg shadow-inner ${
                    user.rol === 'Administrador' ? 'bg-indigo-100 text-indigo-600' : 'bg-blue-50 text-blue-500'
                  }`}>
                    {user.iniciales}
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-800">{user.nombre}</h3>
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-tighter ${
                        user.estado === 'Activo' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {user.estado}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <AtSign size={14} />
                      {user.email}
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      {user.rol === 'Administrador' ? (
                        <div className="flex items-center gap-1 text-xs font-bold text-indigo-500 bg-indigo-50 px-2 py-1 rounded-lg">
                          <ShieldCheck size={14} /> {user.rol}
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-xs font-bold text-blue-400 bg-blue-50 px-2 py-1 rounded-lg">
                          <UserCircle2 size={14} /> {user.rol}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Acciones Rápidas */}
                <div className="flex flex-col gap-2">
                   <button className="p-2 text-gray-300 hover:text-gray-600 transition-colors">
                      <MoreVertical size={20} />
                   </button>
                   <button className="p-2 text-gray-300 hover:text-[#2b5aed] transition-colors" title="Reiniciar Contraseña">
                      <Key size={18} />
                   </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sección de Seguridad / Info */}
          <div className="bg-white rounded-[2rem] p-8 border border-gray-100 flex flex-col md:flex-row items-center gap-6">
             <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center shrink-0">
                <ShieldAlert size={32} />
             </div>
             <div>
                <h4 className="text-lg font-bold text-gray-800">Consejo de Seguridad</h4>
                <p className="text-gray-500 text-sm">
                  Los administradores pueden ver todos los trabajos y facturación. Los operarios solo ven las tareas asignadas y el historial de sus propios trabajos. Asegúrate de asignar los roles correctamente.
                </p>
             </div>
             <button className="whitespace-nowrap bg-gray-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-800 transition-all">
                Auditar Logs
             </button>
          </div>

        </div>
      </main>
    </div>
  );
};