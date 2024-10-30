function App() {
  return (
    <body>
      <div className="background-image">
        <header className="bg-slate-950 bg-opacity-50">
          <nav className="flex justify-between">
            <div className="p-4">logo</div>
            <div className="p-4">
              <ul className="flex justify-center space-x-16 mr-10">
                <li><a href="#acceuil" className="text-slate-50">Accueil</a></li>
                <li><a href="#Profil" className="text-slate-50">Profil</a></li>
                <li><a href="#Parcours" className="text-slate-50">Parcours</a></li>
                <li><a href="#Projets" className="text-slate-50">Projets</a></li>
              </ul>
            </div>
          </nav>
        </header>

        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-3xl font-bold text-slate-50">Hamid Bennacef</h1>
          <h2 className="text-slate-50 mt-5">Développeur full stack</h2>
          <div className="mt-5">
            <a href="#about" className="text-center text-slate-50 bg-green-300 rounded py-3 px-5">
              Qui suis-je ?
            </a>
          </div>
        </div>
      </div>

      <div className="gap-2 h-screen mt-8 flex flex-col mx-auto">
        <div className="text-center mb-14 font-roboto">
          <h3 className="text-blue-900 uppercase text-4xl font-bold">A propos de moi</h3>
        </div>
        <div className="profil max-w-5xl mx-auto font-roboto text-center font-bold">
          <p className="mx-4">
            Jeune développeur étudiant à Epitech Marseille en pré-Msc (master of science). Je suis actuellement en quête d'un contrat d'alternance à partir de Janvier 2025 pour une durée de 33 mois. J'ai découvert le monde de la programmation en auto-didacte, en suivant des formations en ligne sur la création de site web, en HTML/CSS, JavaScript... Au fur et à mesure que le temps passait, il était clair pour moi qu'il fallait continuer sur cette lancée. Je me suis donc inscrit à Epitech, l'école de l'excellence informatique. C'est là que j'ai passé un gap dans mon apprentissage, j'ai découvert les dessous de l'iceberg de la programmation. Je suis passionné de front et de back-end. Lors de mes piscines, j'ai appris à utiliser Python, PHP, MySQL, JAVA... Je me suis intéressé aux frameworks de JavaScript tels que React et Vue, technologies utilisées pour construire ce site web. En complémentarité de ces technologies, j'utilise Tailwind CSS ainsi que MongoDB pour la base de données. Mon envie d'apprendre, de grandir, de me perfectionner dans la programmation ne fait que s'accroître ! J'ai hâte de contribuer à vos projets et de faire grandir les miens.
          </p>
        </div>
        <h3 className="text-blue-900 uppercase text-4xl font-bold text-center mt-5">compétences</h3>
        <ul className="flex justify-between mt-5"><li>HTML/CSS</li>
        <li>Javascript</li>
        <li>PHP/MySQl</li>
        <li>Python</li>
        <li>Java</li>
        <li>React/Vuejs</li>
        <li>GitHub</li>
        <li>VsCode/Intellij</li></ul>
      </div>
      <div className="h-screen">ok</div>
    </body>
  );
}

export default App;
