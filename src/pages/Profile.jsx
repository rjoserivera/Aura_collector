import mockData from '../data/mockData.json';

export default function Profile() {
  // Los datos los leemos del JSON local por el momento
  const items = mockData.items;

  return (
    <div className="py-12 px-6 max-w-6xl mx-auto">
      {/* Contenedor principal del perfil con colores definidos */}
      <div className="bg-glass border border-bronze p-8 mb-12 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
        <h2 className="text-4xl font-display font-bold text-brand-primary text-glow">PERFIL DEL COLECCIONISTA</h2>
        <p className="text-brand-text mt-2 text-lg">Espacio principal (Colores: bronce primario, texto claro, fondo tipo cristal)</p>
      </div>

      {/* Título de sección */}
      <h3 className="text-2xl font-display text-brand-accent mb-6">VITRINA (Acento mágico cyan)</h3>
      
      {/* Contenedor de la grilla de artículos */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-glass border border-brand-muted hover:border-brand-primary transition-all p-4">
            <h4 className="font-display text-brand-primary font-bold">{item.name}</h4>
            <p className="text-brand-text">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
