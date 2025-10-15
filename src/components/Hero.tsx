function Hero() {
  return (
    <section id="inicio" className="pt-20 pb-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start justify-start">
          <div className="text-white mb-8 md:mb-0 max-w-xl">
            <h1 className="text-7xl md:text-8xl font-bold mb-12 tracking-tight">
              H<span className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white mx-2">
                <span className="text-4xl md:text-5xl">⊕</span>
              </span>MIN+
            </h1>
            <p className="text-3xl md:text-4xl mb-12 font-light leading-relaxed">
              Sua jornada para o<br />
              Bem-estar começa aqui!
            </p>
            <button className="bg-white/90 backdrop-blur-sm text-blue-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-white transition-all hover:shadow-lg transform hover:-translate-y-0.5">
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
