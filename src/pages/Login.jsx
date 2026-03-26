export default function Login() {
  return (
    <div className="flex justify-center items-center py-20 px-4">
      {/* Caja central del login conservando la estética glass y borde bronce */}
      <div className="bg-glass p-8 md:p-12 border-bronze border max-w-md w-full text-center shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <h2 className="text-3xl font-display font-bold text-brand-primary mb-6 text-glow">
          INICIO DE SESIÓN
        </h2>
        <div className="text-brand-text mb-4">
          Aquí irán los inputs de login.
        </div>
        
        {/* Botón base */}
        <button className="px-6 py-3 bg-brand-primary text-brand-secondary font-bold uppercase hover:bg-brand-accent transition-colors w-full">
          Entrar
        </button>
      </div>
    </div>
  );
}
