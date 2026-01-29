import React from 'react'
import { Header } from '../components/Header'

export const Dashboard = () => {
  const textoProblemas = [
    "Todo en WhatsApp",
    "No sabes en que van los trabajos",
    "La informacion se pierde",
    "Muchos registros en excel"];
  const textoSoluciones = [
    "Clientes organizados",
    "Trabajos organizados",
    "Tareas asignadas",
    "Evidencias guardadas"];
  const beneficios = ["Más orden", "Menos estrés", "Más control", "Empresa profesional"]

  return (
    <div className="font-sans text-gray-900 bg-[#f8fafc] overflow-x-hidden">
      <Header />

      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Círculos decorativos de fondo */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
            Organiza tu empresa <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300">
              sin Excel ni WhatsApp
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-2xl mx-auto">
            La plataforma todo-en-uno para empresas de servicios que buscan profesionalismo y control total.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#2b5aed] text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all hover:scale-105">
              Contactanos
            </button>

          </div>
        </div>
      </section>

      {/* SECCIÓN 2: Problemas (Tarjetas con Hover Rojo) */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">¿Cansado del caos?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {textoProblemas.map((text, i) => (
              <div
                key={i}
                style={{ animationDelay: `${i * 100}ms` }}
                className="group animate-fade-in-up border border-gray-100 rounded-2xl p-8 bg-white shadow-sm hover:shadow-2xl hover:border-red-100 transition-all duration-500 transform hover:-translate-y-4"
              >
                <p className="text-center font-bold text-gray-700 mb-8 h-12 flex items-center justify-center group-hover:text-red-600 transition-colors">"{text}"</p>
                <div className="flex justify-center">
                  <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-500 group-hover:rotate-[360deg] transition-all duration-700">
                    <span className="text-red-500 group-hover:text-white text-2xl font-bold">✕</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: Solución (Tarjetas con Glow Verde) */}
      <section className="py-24 bg-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">La solución que tu equipo merece</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {textoSoluciones.map((text, i) => (
              <div 
                key={i} 
                style={{ animationDelay: `${i * 100}ms` }}
                className="group animate-fade-in-up border border-white rounded-2xl p-8 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-2xl hover:shadow-green-100 transition-all duration-500"
              >
                <p className="text-center font-bold text-gray-800 mb-8 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">{text}</p>
                <div className="flex justify-center">
                  <div className="bg-green-500 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-green-200 group-hover:scale-125 group-hover:rotate-12 transition-all">
                    <span className="text-2xl font-bold">✓</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: Pasos y Beneficios (Estilo Checklist moderno) */}
      <section className="py-24 bg-[#2b5aed] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-4xl font-extrabold tracking-tight">Todo en un mismo lugar</h2>
              <div className="space-y-6">
                {["Registra tu empresa", "Crea un trabajo", "Asigna tareas", "Controla todo"].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 text-xl bg-white/10 p-4 rounded-xl hover:bg-white/20 hover:translate-x-4 transition-all cursor-default">
                    <span className="font-black text-blue-300 text-2xl opacity-50">{i + 1}.</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white text-gray-900 rounded-[2.5rem] p-10 shadow-2xl self-center transform hover:scale-[1.02] transition-transform duration-500">
              <h2 className="text-3xl font-bold mb-8 border-b pb-4 border-gray-100 flex items-center gap-2">
                Beneficios <span className="text-sm bg-blue-100 text-blue-600 py-1 px-3 rounded-full animate-pulse">Pro</span>
              </h2>
              <ul className="space-y-6">
                {beneficios.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium group">
                    <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-sm group-hover:bg-[#2b5aed] group-hover:text-white transition-colors">
                      ★
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
