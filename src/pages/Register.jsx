export default function Register() {
  return (
    <div className="flex justify-center items-center py-20 px-4">
      <div className="bg-glass p-8 md:p-12 border-bronze border max-w-md w-full text-center">
        <h2 className="text-3xl font-display font-bold text-brand-primary mb-6 text-glow">
          NUEVO FORJADOR
        </h2>
        <form className="flex flex-col gap-4 text-left">
          <div>
            <label className="block text-brand-text text-sm mb-2 uppercase tracking-wide">Alias</label>
            <input type="text" className="w-full bg-black/50 border border-brand-muted p-3 text-brand-text focus:border-brand-primary focus:outline-none transition-colors" placeholder="Coleccionista_01" />
          </div>
          <div>
            <label className="block text-brand-text text-sm mb-2 uppercase tracking-wide">Grimorio (Email)</label>
            <input type="email" className="w-full bg-black/50 border border-brand-muted p-3 text-brand-text focus:border-brand-primary focus:outline-none transition-colors" placeholder="tu@email.com" />
          </div>
          <div>
            <label className="block text-brand-text text-sm mb-2 uppercase tracking-wide">Palabra de Paso</label>
            <input type="password" className="w-full bg-black/50 border border-brand-muted p-3 text-brand-text focus:border-brand-primary focus:outline-none transition-colors" placeholder="••••••••" />
          </div>
          <button type="button" className="mt-4 px-6 py-3 bg-brand-primary text-brand-secondary font-bold uppercase tracking-wider hover:bg-brand-accent transition-colors">
            Forjar Cuenta
          </button>
        </form>
      </div>
    </div>
  );
}
