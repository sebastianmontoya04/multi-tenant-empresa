import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Camera, Image as ImageIcon, CheckCircle2, MoreHorizontal, Filter } from 'lucide-react';

export const Evidencias = () => {
  const fotos = [
    { id: 1, img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400", titulo: "Tablero Eléctrico", trabajo: "TR-102", tipo: "Antes" },
    { id: 2, img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=400", titulo: "Limpieza Ductos", trabajo: "TR-103", tipo: "Después" },
    { id: 3, img: "https://images.unsplash.com/photo-1621905231291-0074d1f21d94?auto=format&fit=crop&w=400", titulo: "Conexiones Finales", trabajo: "TR-102", tipo: "Después" },
    { id: 4, img: "https://images.unsplash.com/photo-1599933023848-ca288219446c?auto=format&fit=crop&w=400", titulo: "Firma de Entrega", trabajo: "TR-104", tipo: "Registro" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar /> {/* Ya no necesita props, usa useLocation internamente */}

      <main className="flex-grow p-8 mt-15">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Evidencias Fotográficas</h1>
              <p className="text-gray-500 mt-1">Registro visual de los trabajos realizados en campo.</p>
            </div>
            <button className="flex items-center justify-center gap-2 bg-[#2b5aed] text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
              <Camera size={20} />
              Subir Nueva Evidencia
            </button>
          </div>

          {/* Grid de Fotos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {fotos.map((foto) => (
              <div key={foto.id} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm group hover:shadow-xl transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img src={foto.img} alt={foto.titulo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                      foto.tipo === 'Antes' ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'
                    }`}>
                      {foto.tipo}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-800 text-sm truncate">{foto.titulo}</h3>
                    <button className="text-gray-300 hover:text-gray-600"><MoreHorizontal size={18}/></button>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-400 bg-gray-50 p-2 rounded-xl">
                    <ImageIcon size={14}/> {foto.trabajo}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
};
// const menuItems = [
//         { id: 'inicio', label: 'Inicio', icon: <LayoutDashboard size={20} />, link: '/dashboardHome' },
//         { id: 'clientes', label: 'Clientes', icon: <Users size={20} />, link: '/clientes' },
//         { id: 'trabajos', label: 'Trabajos', icon: <Briefcase size={20} />, link: '/trabajos' },
//         { id: 'tareas', label: 'Tareas', icon: <CheckSquare size={20} />, link: '/tareas' },
//         { id: 'usuarios', label: 'Usuarios', icon: <Users size={20} />, link: '/usuarios' },
//         { id: 'evidencias', label: 'Evidencias', icon: <ImageIcon size={20} />, link: '/evidencias' },
//         { id: 'reportes', label: 'Reportes', icon: <BarChart3 size={20} />, link: '/reportes' },
//         { id: 'perfil', label: 'Mi perfil', icon: <UserCircle size={20} />, link: '/miperfil' },
//     ];