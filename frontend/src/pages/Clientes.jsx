import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Plus, Search, MoreVertical, Mail, Phone, ExternalLink } from 'lucide-react';

export const Clientes = () => {
  // Datos de ejemplo para visualizar la tabla
  const clientes = [
    { id: 1, nombre: "Juan Pérez", empresa: "Constructora Horizonte", email: "juan@horizonte.com", tel: "+57 300 123 4567", estado: "Activo" },
    { id: 2, nombre: "María García", empresa: "Logística Global", email: "m.garcia@logistics.co", tel: "+57 310 987 6543", estado: "Inactivo" },
    { id: 3, nombre: "Carlos Ruiz", empresa: "Inversiones Delta", email: "carlos@delta.com", tel: "+57 315 555 0192", estado: "Activo" },
    { id: 4, nombre: "Ana Martínez", empresa: "Textiles S.A.", email: "ana.m@textiles.com", tel: "+57 320 444 8899", estado: "Activo" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar activePage="clientes" />

      <main className="flex-grow p-8 mt-15">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Header de la sección */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Directorio de Clientes</h1>
              <p className="text-gray-500 mt-1">Gestiona la información y el contacto de tus clientes.</p>
            </div>
            
            <button className="flex items-center justify-center gap-2 bg-[#2b5aed] text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95">
              <Plus size={20} />
              Nuevo Cliente
            </button>
          </div>

          {/* Barra de Búsqueda y Filtros */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Buscar por nombre, empresa o email..." 
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#2b5aed] outline-none transition-all"
              />
            </div>
            <select className="px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 outline-none focus:ring-2 focus:ring-[#2b5aed]">
              <option>Todos los estados</option>
              <option>Activos</option>
              <option>Inactivos</option>
            </select>
          </div>

          {/* Tabla de Clientes */}
          <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="px-6 py-5 text-sm font-bold text-gray-400 uppercase tracking-wider">Cliente</th>
                    <th className="px-6 py-5 text-sm font-bold text-gray-400 uppercase tracking-wider">Empresa</th>
                    <th className="px-6 py-5 text-sm font-bold text-gray-400 uppercase tracking-wider">Contacto</th>
                    <th className="px-6 py-5 text-sm font-bold text-gray-400 uppercase tracking-wider">Estado</th>
                    <th className="px-6 py-5 text-sm font-bold text-gray-400 uppercase tracking-wider text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {clientes.map((cliente) => (
                    <tr key={cliente.id} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#2b5aed]/10 text-[#2b5aed] rounded-full flex items-center justify-center font-bold text-sm">
                            {cliente.nombre.charAt(0)}{cliente.nombre.split(' ')[1]?.charAt(0)}
                          </div>
                          <p className="font-bold text-gray-800">{cliente.nombre}</p>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-gray-600 font-medium">
                        {cliente.empresa}
                      </td>
                      <td className="px-6 py-5 space-y-1">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Mail size={14} className="text-gray-400" /> {cliente.email}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Phone size={14} className="text-gray-400" /> {cliente.tel}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          cliente.estado === 'Activo' 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          {cliente.estado}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex justify-end gap-2">
                          <button className="p-2 text-gray-400 hover:text-[#2b5aed] hover:bg-blue-50 rounded-lg transition-all">
                            <ExternalLink size={18} />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg transition-all">
                            <MoreVertical size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Paginación simple */}
            <div className="p-6 border-t border-gray-50 flex items-center justify-between">
              <p className="text-sm text-gray-400 font-medium">Mostrando 4 clientes de 128</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold text-gray-400 hover:bg-gray-50">Anterior</button>
                <button className="px-4 py-2 bg-[#2b5aed] rounded-xl text-sm font-bold text-white shadow-md shadow-blue-100">Siguiente</button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};