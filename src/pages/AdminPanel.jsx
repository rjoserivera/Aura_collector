import mockData from '../data/mockData.json';

export default function AdminPanel() {
  return (
    <div className="py-12 px-6 max-w-6xl mx-auto flex gap-8">
      {/* Panel lateral Administrativo */}
      <div className="w-64 bg-glass border border-bronze p-6 hidden md:block shadow-[0_0_15px_rgba(212,175,55,0.1)]">
        <h3 className="font-display text-brand-primary mb-6 text-xl">MENÚ PANEL</h3>
        <p className="text-brand-text">Opciones de admin (bronce y texto claro)</p>
      </div>
      
      {/* Contenido Principal Admin */}
      <div className="flex-1 bg-glass p-8 border border-brand-muted relative">
        <h2 className="text-3xl font-display font-bold text-brand-primary mb-6">ÁREA DE GESTIÓN</h2>
        <p className="text-brand-text mb-8">Espacio para la carga de datos del panel de administración.</p>
        
        <div className="p-4 border border-brand-primary border-dashed text-brand-accent text-center">
          + Agregar Nuevo Registro (Acento cyan)
        </div>
        
        <div className="mt-8">
           <h3 className="text-brand-text font-bold mb-4">Datos JSON Actuales:</h3>
           <pre className="text-brand-text bg-black/50 p-4 border border-brand-muted overflow-auto">
             {JSON.stringify(mockData, null, 2)}
           </pre>
        </div>
      </div>
    </div>
  );
}
