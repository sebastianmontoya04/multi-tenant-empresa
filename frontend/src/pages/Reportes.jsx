import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { FileText, Download, Eye, Share2, Search, Calendar } from 'lucide-react';

export const Reportes = () => {
  const reportes = [
    { id: 1, nombre: "Mantenimiento_Sede_Norte.pdf", cliente: "Banco Global", fecha: "28 Ene, 2026", tamano: "2.4 MB" },
    { id: 2, nombre: "Instalacion_Redes_Delta.pdf", cliente: "Inversiones Delta", fecha: "25 Ene, 2026", tamano: "1.8 MB" },
    { id: 3, nombre: "Reparacion_AA_Horizonte.pdf", cliente: "Constructora Horizonte", fecha: "22 Ene, 2026", tamano: "3.1 MB" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar />

      <main className="flex-grow p-8 mt-15">
        <div className="max-w-6xl mx-auto space-y-8">
          
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Reportes de Servicio</h1>
            <p className="text-gray-500 mt-1">Consulta y descarga los informes técnicos automáticos.</p>
          </div>

          {/* Listado de Reportes */}
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Documentos Recientes</span>
              <button className="text-[#2b5aed] text-sm font-bold hover:underline">Ver Todo</button>
            </div>
            <div className="divide-y divide-gray-50">
              {reportes.map((doc) => (
                <div key={doc.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-gray-50/50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center shadow-sm">
                      <FileText size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{doc.nombre}</h4>
                      <p className="text-xs text-gray-400 font-medium">Cliente: {doc.cliente} • {doc.fecha}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#2b5aed] text-white rounded-xl text-xs font-bold shadow-md shadow-blue-100 hover:bg-blue-700">
                      <Download size={16} /> Descargar
                    </button>
                    <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-xl transition-all">
                      <Eye size={18} />
                    </button>
                    <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-xl transition-all">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Banner Informativo */}
          <div className="bg-indigo-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
             <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">¿Necesitas un reporte personalizado?</h3>
                <p className="text-indigo-200 max-w-md text-sm">Puedes filtrar por técnico o fecha para generar un informe consolidado de productividad mensual.</p>
                <button className="mt-6 bg-white text-indigo-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-colors">
                  Configurar Reporte
                </button>
             </div>
             <FileText className="absolute -right-10 -bottom-10 text-indigo-800 size-64 rotate-12 opacity-50" />
          </div>

        </div>
      </main>
    </div>
  );
};