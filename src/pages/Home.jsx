import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-primary text-glow mb-6">
        EL SANTUARIO DE TUS COLECCIONES
      </h1>
      <p className="max-w-2xl text-lg text-brand-text mb-12">
        Descubre un espacio donde las figuras, juguetes y reliquias vintage de Chile encuentran su vitrina digital definitiva. Únete a la comunidad con estética dark fantasy y steampunk.
      </p>
      
      <div className="flex gap-4">
        <Link to="/registro" className="px-8 py-4 bg-brand-primary text-brand-secondary font-bold uppercase tracking-wider hover:bg-brand-accent transition-colors border border-brand-primary">
          Forjar Cuenta
        </Link>
        <Link to="/perfil/demo" className="px-8 py-4 border border-brand-primary text-brand-primary font-bold uppercase tracking-wider hover:bg-glass transition-colors">
          Explorar Reliquias
        </Link>
      </div>
    </div>
  );
}
