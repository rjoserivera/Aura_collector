import logo from '../assets/img/logo.png';

export default function Navbar() {
  return (
    <nav className="bg-glass sticky top-0 z-50 px-6 py-4 flex justify-between items-center shadow-lg">
      <a href="#inicio" className="flex items-center gap-3 text-brand-primary hover:text-brand-accent transition-colors">
        <img src={logo} alt="Austral Collector" className="w-10 h-10 object-cover rounded-sm border border-brand-primary/40" />
        <span className="font-display font-bold text-2xl tracking-widest text-glow">AUSTRAL</span>
      </a>
      <div className="flex gap-6 items-center">
        <a href="#inicio" className="text-brand-text hover:text-brand-primary transition-colors uppercase text-sm tracking-wider">Inicio</a>
        <a href="#colecciones" className="text-brand-text hover:text-brand-primary transition-colors uppercase text-sm tracking-wider">Colecciones</a>
        <a href="#contacto" className="px-4 py-2 border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-secondary transition-all uppercase text-sm tracking-wider">Contacto</a>
      </div>
    </nav>
  );
}
