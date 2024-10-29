function App() {
  return (
    <body>
      <div className="background-image">
      <header className="bg-slate-950  bg-opacity-50" >
        <nav className="flex justify-between">
          <div className="p-4">logo</div>
          <div className="p-4">
            <ul className="flex justify-center space-x-16 mr-10">
              <li><a href="#acceuil" className="text-slate-50">Accueil</a></li>
              <li><a href="#Profil"className="text-slate-50">Profil</a></li>
              <li><a href="#Parcours"className="text-slate-50">Parcours</a></li>
              <li><a href="#Projets"className="text-slate-50">Projets</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <div >
        <div className="p-4">
          <h1 className="text-3xl font-bold text-center mt-52 text-slate-50">Hamid Bennacef</h1>
          <h2 className="text-center mt-5 text-slate-50">Développeur full stack</h2>
          <div className="text-center mt-5">
            <a href="#about" className="text-center text-slate-50 bg-green-300 rounded py-3 px-5">
              Qui suis-je ?
            </a>
          </div>
        </div>
      </div>
      </div>
    </body>
  );
}

export default App;