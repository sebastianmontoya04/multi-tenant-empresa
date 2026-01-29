import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { 
  Plus, 
  Search, 
  CheckCircle2, 
  Circle, 
  Flag, 
  Tag, 
  Calendar as CalendarIcon,
  Filter
} from 'lucide-react';

export const Tareas = () => {
  const tareas = [
    { id: 1, texto: "Comprar cables UTP Categoría 6", trabajo: "TR-102", prioridad: "Alta", fecha: "Hoy", completada: false },
    { id: 2, texto: "Instalar ductería en zona norte", trabajo: "TR-102", prioridad: "Media", fecha: "Mañana", completada: false },
    { id: 3, texto: "Pruebas de conectividad", trabajo: "TR-103", prioridad: "Alta", fecha: "Hoy", completada: true },
    { id: 4, texto: "Limpieza de área de trabajo", trabajo: "TR-104", prioridad: "Baja", fecha: "30 Ene", completada: false },
  ];

  const getPrioridadColor = (p) => {
    if (p === 'Alta') return 'text-red-500 bg-red-50';
    if (p === 'Media') return 'text-orange-500 bg-orange-50';
    return 'text-blue-500 bg-blue-50';
  };

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar activePage="tareas" />

      <main className="flex-grow p-8 mt-15">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Mis Tareas</h1>
              <p className="text-gray-500 mt-1">Organiza el paso a paso de tus proyectos.</p>
            </div>
            <button className="flex items-center justify-center gap-2 bg-[#2b5aed] text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
              <Plus size={20} />
              Nueva Tarea
            </button>
          </div>

          {/* Barra de herramientas */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
             <div className="relative flex-grow w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Buscar tarea..." 
                  className="w-full pl-11 pr-4 py-3 rounded-2xl border border-gray-100 bg-white shadow-sm focus:ring-2 focus:ring-[#2b5aed] outline-none transition-all"
                />
             </div>
             <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 rounded-2xl text-gray-600 font-semibold hover:bg-gray-50 transition-all shadow-sm">
                <Filter size={18} />
                Filtros
             </button>
          </div>

          {/* Lista de Tareas */}
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden p-4">
            <div className="divide-y divide-gray-50">
              {tareas.map((tarea) => (
                <div 
                  key={tarea.id} 
                  className={`group flex items-center justify-between p-5 transition-all hover:bg-gray-50/80 rounded-2xl ${tarea.completada ? 'opacity-60' : ''}`}
                >
                  <div className="flex items-center gap-5 flex-grow">
                    {/* Checkbox Dinámico */}
                    <button className={`transition-transform active:scale-90 ${tarea.completada ? 'text-green-500' : 'text-gray-300 group-hover:text-[#2b5aed]'}`}>
                      {tarea.completada ? <CheckCircle2 size={28} /> : <Circle size={28} />}
                    </button>

                    <div className="space-y-1">
                      <p className={`font-bold text-gray-800 transition-all ${tarea.completada ? 'line-through text-gray-400' : 'text-[15px]'}`}>
                        {tarea.texto}
                      </p>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="flex items-center gap-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded-md">
                          <Tag size={12} /> {tarea.trabajo}
                        </span>
                        <span className={`flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ${getPrioridadColor(tarea.prioridad)}`}>
                          <Flag size={12} /> {tarea.prioridad}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          <CalendarIcon size={12} /> {tarea.fecha}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Botón de edición oculto que aparece en hover */}
                  <button className="opacity-0 group-hover:opacity-100 p-2 text-gray-300 hover:text-gray-600 transition-all">
                    <Plus className="rotate-45" size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Resumen de productividad */}
          <div className="bg-indigo-50 rounded-3xl p-6 border border-indigo-100 flex items-center justify-between">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm">
                   <CheckCircle2 size={24} />
                </div>
                <div>
                   <p className="text-sm font-bold text-indigo-900">Has completado 12 tareas esta semana</p>
                   <p className="text-xs text-indigo-500 font-medium">¡Sigue así! Estás un 15% arriba de tu promedio.</p>
                </div>
             </div>
             <div className="hidden sm:block">
                <div className="w-24 h-2 bg-indigo-200 rounded-full overflow-hidden">
                   <div className="w-[70%] h-full bg-indigo-600 rounded-full"></div>
                </div>
             </div>
          </div>

        </div>
      </main>
    </div>
  );
};