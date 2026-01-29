import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { 
  Plus, 
  Filter, 
  Calendar, 
  User, 
  CheckCircle2, 
  Clock, 
  MoreHorizontal,
  ChevronRight
} from 'lucide-react';

export const Trabajos = () => {
  const trabajos = [
    { 
      id: "TR-102", 
      titulo: "Instalación Red Eléctrica", 
      cliente: "Inversiones Delta", 
      progreso: 75, 
      fecha: "20 Ene - 02 Feb", 
      prioridad: "Alta", 
      estado: "En Proceso" 
    },
    { 
      id: "TR-103", 
      titulo: "Mantenimiento Aire Acondicionado", 
      cliente: "Constructora Horizonte", 
      progreso: 100, 
      fecha: "15 Ene - 25 Ene", 
      prioridad: "Media", 
      estado: "Completado" 
    },
    { 
      id: "TR-104", 
      titulo: "Reparación Sistema Hidráulico", 
      cliente: "Logística Global", 
      progreso: 10, 
      fecha: "28 Ene - 10 Feb", 
      prioridad: "Baja", 
      estado: "Pendiente" 
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar activePage="trabajos" />

      <main className="flex-grow p-8 mt-15">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Header de Trabajos */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Gestión de Trabajos</h1>
              <p className="text-gray-500 mt-1">Sigue el estado y progreso de cada proyecto activo.</p>
            </div>
            
            <button className="flex items-center justify-center gap-2 bg-[#2b5aed] text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
              <Plus size={20} />
              Crear Trabajo
            </button>
          </div>

          {/* Filtros de Estado */}
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {["Todos", "Pendientes", "En Proceso", "Completados"].map((filtro, i) => (
              <button 
                key={i} 
                className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  i === 0 ? 'bg-[#2b5aed] text-white shadow-md' : 'bg-white text-gray-500 border border-gray-100 hover:bg-gray-50'
                }`}
              >
                {filtro}
              </button>
            ))}
          </div>

          {/* Grid de Trabajos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {trabajos.map((trabajo) => (
              <div key={trabajo.id} className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 p-6 flex flex-col justify-between group">
                
                <div className="space-y-4">
                  {/* Badge de ID y Menú */}
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                      {trabajo.id}
                    </span>
                    <button className="text-gray-300 hover:text-gray-500">
                      <MoreHorizontal size={20} />
                    </button>
                  </div>

                  {/* Título y Cliente */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#2b5aed] transition-colors">
                      {trabajo.titulo}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">{trabajo.cliente}</p>
                  </div>

                  {/* Barra de Progreso */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-gray-400">Progreso</span>
                      <span className="text-[#2b5aed]">{trabajo.progreso}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-1000 ${trabajo.progreso === 100 ? 'bg-green-500' : 'bg-[#2b5aed]'}`}
                        style={{ width: `${trabajo.progreso}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Footer de la Tarjeta */}
                <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-gray-400">
                    <div className="flex items-center gap-1 text-xs font-medium">
                      <Calendar size={14} />
                      {trabajo.fecha.split(' - ')[1]}
                    </div>
                    <div className={`flex items-center gap-1 text-xs font-bold ${
                      trabajo.estado === 'Completado' ? 'text-green-500' : 'text-orange-500'
                    }`}>
                      {trabajo.estado === 'Completado' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                      {trabajo.estado}
                    </div>
                  </div>
                  
                  <button className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center group-hover:bg-[#2b5aed] group-hover:text-white transition-all shadow-sm">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
};