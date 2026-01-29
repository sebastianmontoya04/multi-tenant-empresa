import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Clock, Users, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

export const DashboardHome = () => {
  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar activePage="inicio" />
      {/* Reutilizamos el Sidebar indicando que estamos en 'inicio' */}

      {/* Contenido de la Página */}
      <main className="flex-grow p-8 mt-15">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Header de bienvenida */}
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Panel de Control</h1>
              <p className="text-gray-500 mt-1">Bienvenido, aquí tienes el resumen de hoy.</p>
            </div>
            <div className="text-sm font-medium text-gray-400 bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">
              29 de Enero, 2026
            </div>
          </div>

          {/* Grid de KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Trabajos Activos" value="14" color="bg-blue-500" icon={<Clock />} trend="+2" />
            <StatCard title="Clientes Totales" value="128" color="bg-purple-500" icon={<Users />} trend="+5" />
            <StatCard title="Tareas para Hoy" value="32" color="bg-green-500" icon={<CheckCircle2 />} trend="+8" />
            <StatCard title="Urgencias" value="2" color="bg-red-500" icon={<AlertCircle />} trend="0" />
          </div>

          {/* Sección de detalles inferior */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            {/* Actividad Reciente */}
            <div className="lg:col-span-2 bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-6">Próximos Trabajos</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-[#f8fafc] rounded-2xl hover:bg-gray-100 transition-all border border-transparent hover:border-blue-100 group">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 font-bold italic">
                        #{1024 + i}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">Mantenimiento Sede Principal</p>
                        <p className="text-xs text-gray-400 font-medium">Cliente: Banco Global • 2:00 PM</p>
                      </div>
                    </div>
                    <ArrowUpRight className="text-gray-300 group-hover:text-[#2b5aed] transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* Banner de Acción */}
            <div className="bg-[#2b5aed] rounded-[2rem] p-8 text-white flex flex-col justify-between shadow-xl shadow-blue-100">
              <div>
                <h3 className="text-2xl font-bold mb-4 leading-tight">Optimiza tu tiempo hoy</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Has completado el 75% de las tareas semanales. ¡Buen ritmo! Revisa las evidencias pendientes para cerrar el mes.
                </p>
              </div>
              <button className="w-full py-4 bg-white text-[#2b5aed] rounded-2xl font-bold text-sm hover:bg-blue-50 transition-all shadow-lg">
                Ver Reportes
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

// Componente pequeño interno para las tarjetas
const StatCard = ({ title, value, color, icon, trend }) => (
  <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm group hover:border-[#2b5aed] transition-all duration-300">
    <div className="flex justify-between items-center mb-4">
      <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">
        {trend} este mes
      </span>
    </div>
    <p className="text-gray-400 text-sm font-semibold">{title}</p>
    <h3 className="text-3xl font-black text-gray-800 mt-1">{value}</h3>
  </div>
);