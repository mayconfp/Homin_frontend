function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-end">
          <div className="flex items-center space-x-8">
            <a href="#inicio" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
              Início
            </a>
            <a href="#especialistas" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
              Especialistas
            </a>
            <a href="#sobre" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
              Sobre
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
