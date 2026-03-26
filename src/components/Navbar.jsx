import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-glass sticky top-0 z-50 px-6 py-4 flex justify-between items-center shadow-lg">
      <Link to="/" className="flex items-center gap-2 text-brand-primary hover:text-brand-accent transition-colors">
        <Compass className="w-8 h-8" />
        <span className="font-display font-bold text-2xl tracking-widest text-glow">AUSTRAL</span>
      </Link>
      <div className="flex gap-6 items-center">
        <Link to="/" className="text-brand-text hover:text-brand-primary transition-colors uppercase text-sm tracking-wider">Inicio</Link>
        <Link to="/login" className="text-brand-text hover:text-brand-primary transition-colors uppercase text-sm tracking-wider">Entrar</Link>
        <Link to="/registro" className="px-4 py-2 border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-secondary transition-all uppercase text-sm tracking-wider">Registro</Link>
      </div>
    </nav>
  );
}
