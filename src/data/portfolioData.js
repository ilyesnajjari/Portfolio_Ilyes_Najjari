// src/data/portfolioData.js

export const projects = [
  {
    section: 'Développement Web',
    projects: [
      {
        id: 1,
        title: 'Chatbox temps réel',
        imageUrl: '/Portfolio_Ilyes_Najjari/media/Chatbox/Chatbox1.png',
        media: [
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/Chatbox/Chatbox1.png' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/Chatbox/Chatbox2.png' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/Chatbox/Chatbox3.png' },
        ],
        link: 'https://github.com/ilyesnajjari/projet_nodejs',
        description: 'Application de messagerie instantanée en temps réel avec WebSockets, avatars personnalisés, messages publics/privés, statut de frappe et création de channels.',
        technologies: [
          { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
          { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
          { name: 'WebSocket', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg' },
        ],
        startDate: 'Février 2024',
        endDate: 'Mars 2024',
        teamRole: 'Développeur Fullstack',
        challenges: [
          "Gestion des connexions en temps réel.",
          "Système de messagerie privé/public.",
          "Affichage dynamique des utilisateurs en ligne."
        ],
            },
      {
        id: 2,
        title: 'Click-to-Dial Extension Firefox',
        imageUrl: '/Portfolio_Ilyes_Najjari/media/Click_to_Dial/click2dial0.png',
        media: [
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/Click_to_Dial/click2dial1.png' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/Click_to_Dial/click2dial2.png' },
        ],
        link: 'https://github.com/ilyesnajjari/click2dial',
        description: 'Extension Firefox permettant de détecter les numéros de téléphone sur une page web, les surligner et déclencher automatiquement un appel à partir d’un simple clic.',
        technologies: [
          { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
          { name: 'Firefox Add-on API', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg' },
        ],
        startDate: 'Avril 2024',
        endDate: 'Mai 2024',
        teamRole: 'Développeur Extension Web',
        challenges: [
          "Reconnaissance automatique des formats de numéro.",
          "Intégration avec un système de téléphonie.",
          "Détection et surlignage des numéros sur une page web."
        ],
      },
      {
        id: 3,
        title: 'Site Vitrine pour Cours Particuliers',
        imageUrl: '/Portfolio_Ilyes_Najjari/media/Site_Cours_Pariculiers/cours_particuliers1.png',
        media: [
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/Site_Cours_Pariculiers/cours_particuliers1.png' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/Site_Cours_Pariculiers/cours_particuliers2.png' },
        ],
        link: 'https://github.com/ilyesnajjari/Site_Web_Cours_Particuliers',
        description: 'Création d’un site vitrine statique en HTML/CSS pour promouvoir des cours particuliers avec mise en page responsive et contenu clair.',
        technologies: [
          { name: 'HTML5', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
          { name: 'CSS3', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        ],
        startDate: 'Janvier 2024',
        endDate: 'Janvier 2024',
        teamRole: 'Développeur Frontend',
        challenges: [
          "Structuration claire du contenu.",
          "Création d’une interface simple mais efficace.",
          "Mise en page responsive pour tous les appareils."
        ],
      },
    ],
  },
  {
    section: 'Développement Logiciel',
    projects: [
      {
        id: 4,
        title: 'Frigo Intelligent - Suggestion de Recettes',
        imageUrl: '/Portfolio_Ilyes_Najjari/media/Frigo/frigo.jpg',
        media: [
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/Frigo/frigo1.jpg' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/Frigo/frigo2.jpg' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/Frigo/frigo3.jpg' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/Frigo/frigo4.jpg' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/Frigo/frigo5.jpg' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/Frigo/frigo6.jpg' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/Frigo/frigo7.jpg' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/Frigo/frigo8.jpg' },
        ],
        link: 'https://github.com/ilyesnajjari/Frigo',
        description: 'Application desktop permettant de saisir les ingrédients du frigo et de proposer des recettes via l’API Spoonacular, avec gestion de la péremption, favoris, allergies et nutrition.',
        technologies: [
          { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
          { name: 'Swing', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
          { name: 'SQLite', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
          { name: 'API REST', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        ],
        startDate: 'Mars 2024',
        endDate: 'Avril 2024',
        teamRole: 'Développeur Java Backend',
        challenges: [
          "Connexion API pour récupérer des recettes.",
          "Interface utilisateur intuitive.",
          "Gestion des dates de péremption et personnalisation selon les profils utilisateurs."
        ],
      },
    ],
  },
  {
    section: 'Data & Dashboard',
    projects: [
      {
        id: 5,
        title: 'Call Reporting - Dashboard Télé-enquêteurs',
        imageUrl: '/Portfolio_Ilyes_Najjari/media/app-ensome/app-ensome1.png',
        media: [
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/app-ensome/app-ensome1.png' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/app-ensome/app-ensome2.png' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/app-ensome/app-ensome3.png' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/app-ensome/app-ensome4.png' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/app-ensome/app-ensome5.png' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/app-ensome/app-ensome6.png' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/app-ensome/app-ensome7.png' },
        ],
        link: 'https://github.com/ilyesnajjari/app-ensome',
        description: 'Outil de suivi des performances des télé-enquêteurs avec login, affichage des statuts en temps réel et statistiques journalières et mensuelles.',
        technologies: [
          { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
          { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
          { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
          { name: 'Express', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        ],
        startDate: 'Mars 2024',
        endDate: 'Avril 2024',
        teamRole: 'Développeur Fullstack',
        challenges: [
          "Synchronisation temps réel de l’activité.",
          "Affichage des statuts multiples.",
          "Génération automatique de rapports journaliers et mensuels."
        ],
      },
    ],
  },
  {
    section: 'Développement Mobile',
    projects: [
      {
        id: 6,
        title: 'Application de Découverte AR',
        imageUrl: '/Portfolio_Ilyes_Najjari/media/AR_Explorer/AR_Explorer.png',
        media: [
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/AR_Explorer/AR_Explorer1.png' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/AR_Explorer/AR_Explorer2.png' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/AR_Explorer/AR_Explorer3.png' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/AR_Explorer/AR_Explorer4.png' },

        ],
        link: 'https://github.com/ilyesnajjari/AR_Explorer',
        description: "Application Android de découverte de lieux via la réalité augmentée. Les utilisateurs pointent leur caméra pour voir des avis sur des lieux, les commenter, et recevoir des suggestions personnalisées.",
        technologies: [
          { name: 'Android Studio', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
          { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
          { name: 'Google Maps API', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
        ],
        startDate: 'Avril 2024',
        endDate: 'En cours',
        teamRole: 'Développeur Mobile',
        challenges: [
          "Intégration AR pour afficher des informations en temps réel.",
          "Géolocalisation précise et gestion des avis.",
          "Notifications de proximité pour les utilisateurs."
        ],
      },
      {
        id: 7,
        title: 'Album Photo Mobile',
        imageUrl: '/Portfolio_Ilyes_Najjari/media/AlbumPhoto/Album.png',
        media: [
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/AlbumPhoto/Album1.png' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/AlbumPhoto/Album2.png' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/AlbumPhoto/Album3.png' },
        //{ type: 'video', src: '/media/AlbumPhoto/Album1.mp4' }
        ],
        link: 'https://github.com/ilyesnajjari/Album_photos',
        description: "Application Android permettant de parcourir une galerie de photos, d'effectuer des zooms sur une image et de revenir à la vue d’ensemble par un zoom arrière. Navigation fluide avec balayage entre les photos.",
        technologies: [
          { name: 'Android Studio', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
          { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        ],
        startDate: 'Avril 2024',
        endDate: 'Avril 2024',
        teamRole: 'Développeur Mobile',
        challenges: [
          "Gestion fluide des gestes pour zoom et scroll.",
          "Affichage dynamique des photos.",
          "Navigation fluide entre les images."
        ],
      },
    ],
  },
  {
    section: 'Développement en Finance',
    projects: [
      {
        id: 16,
        title: 'Analyse de Données Boursières - ARIMA & Moyennes Mobiles',
        imageUrl: '/Portfolio_Ilyes_Najjari/media/Stock/stock1.png',
        media: [
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/Stock/stock1.png' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/Stock/stock2.png' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/Stock/stock3.png' }
        ],
        link: 'https://github.com/ilyesnajjari/Quantitative-Finance-Portfolio/tree/main/stock-data-analysis',
        description: 'Projet Python visant à analyser des séries temporelles financières à partir de données Yahoo Finance : calcul de moyennes mobiles, modélisation ARIMA, prévisions et visualisation.',
        technologies: [
          { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
          { name: 'Pandas', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
          { name: 'Matplotlib', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
          { name: 'Statsmodels', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
          { name: 'yFinance', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
        ],
        startDate: 'Mars 2025',
        endDate: 'Avril 2025',
        teamRole: 'Data Analyst Python',
        challenges: [
          'Utilisation de yFinance pour extraire des données financières propres.',
          'Implémentation et interprétation d’un modèle ARIMA.',
          'Visualisation des tendances et des prédictions avec Matplotlib.'
        ]
      },
      {
        id: 17,
        title: 'FIFA Player Price Tracker - Analyse de Données de Marché',
        imageUrl: '/Portfolio_Ilyes_Najjari/media/FIFA_Player/fifa1.png',
        media: [
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/FIFA_Player/fifa1.png' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/FIFA_Player/fifa2.png' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/FIFA_Player/fifa4.png' },
          { type: 'image', src: '/Portfolio_Ilyes_Najjari/media/FIFA_Player/fifa5.png' },

        ],
        link: 'https://github.com/ilyesnajjari/Quantitative-Finance-Portfolio/tree/main/fifa_player_price_tracker',
        description: 'Suivi de l’évolution des prix des joueurs FIFA Ultimate Team à travers une collecte de données automatisée et une analyse temporelle pour repérer les opportunités d’achat/vente.',
        technologies: [
          { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
          { name: 'Requests', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
          { name: 'Pandas', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
          { name: 'Matplotlib', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' }
        ],
        startDate: 'Mars 2025',
        endDate: 'Avril 2025',
        teamRole: 'Développeur Python / Analyste Données',
        challenges: [
          'Extraction et parsing de données via scraping/API.',
          'Nettoyage et formatage des datasets pour analyse temporelle.',
          'Création de visualisations pour identifier les fluctuations de prix.'
        ]
      }
    ]
  },
  {
    section: "Développement de Jeux Vidéo",
    projects: [
      {
        id: 8,
        title: "Casse-Briques Unreal Engine",
        imageUrl: "/Portfolio_Ilyes_Najjari/media/Casse-Briques/CasseBrique1.jpg",
        media: [
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/Casse-Briques/CasseBrique1.jpg" },
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/Casse-Briques/CasseBrique2.jpg" },
        ],
        link: "https://github.com/ilyesnajjari/",
        description:
          "Un jeu de casse-briques réalisé avec Unreal Engine en C++ et Blueprint. Le jeu comprend un système de score, des effets visuels dynamiques et un menu interactif.",
        technologies: [
          { name: 'C++', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
          //{ name: 'Blueprint', url: 'https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/' },
          { name: 'Unreal Engine', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg' },
          //{ name: 'UI', url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Interface_design_basics' },
          //{ name: 'FX', url: 'https://www.fxguide.com/' },
        ],
        startDate: "2024-09",
        endDate: "2024-10",
        teamRole: "Développeur principal",
        challenges: [
          "Création d’un système de collisions fluide et précis.",
          "Implémentation d’un système de menu avec navigation dynamique.",
          "Ajout d’effets visuels en réponse aux interactions."
        ]
      },
      {
        id: 9,
        title: "Bomber Man 3D",
        imageUrl: "/Portfolio_Ilyes_Najjari/media/bomberman/Bomberman1.jpg",
        media: [
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/bomberman/Bomberman1.jpg" },
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/bomberman/Bomberman2.jpg" },
        ],
        link: "https://github.com/ilyesnajjari/",
        description:
          "Version 3D du jeu Bomber Man avec génération procédurale de niveau, bombes, IA ennemie et gestion des collisions.",
        technologies: [
          { name: 'Unreal Engine', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg' },
          //{ name: 'Blueprint', url: 'https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/' },
          //{ name: 'IA', url: '#' },
          //{ name: 'Pathfinding', url: '#' },
          { name: 'C++', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        ],
        startDate: "2024-10",
        endDate: "2024-11",
        teamRole: "Développeur & Gameplay",
        challenges: [
          
          "Génération automatique du niveau avec obstacles destructibles.",
          "Synchronisation des effets visuels et de la logique de collision."
        ]
      },
      {
        id: 10,
        title: "Jeu narratif d’exploration",
        imageUrl: "/Portfolio_Ilyes_Najjari/media/Enigma/Enigma1.jpg",
        media: [
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/Enigma/Enigma1.jpg" },
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/Enigma/Enigma2.jpg" },
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/Enigma/Enigma3.png" },
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/Enigma/Enigma4.png" },
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/Enigma/Enigma5.png" },
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/Enigma/Enigma6.png" },
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/Enigma/Enigma7.png" },
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/Enigma/Enigma8.png" },
          //{ type: 'video', src: '/Portfolio_Ilyes_Najjari/media/Enigma/Enigma1.mp4'},
        ],
        link: "https://github.com/ilyesnajjari/",
        description:
          "Jeu solo en vue première personne mêlant narration interactive et énigmes visuelles.",
        technologies: [
          { name: 'Unreal Engine', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg' },
          { name: 'C++', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
          //{ name: 'Blueprint', url: 'https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/' },
          //{ name: 'Cinematics', url: '#' },
          //{ name: 'UI', url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Interface_design_basics' },
          //{ name: 'Sound Design', url: '#' },
        ],
        startDate: "2024-11",
        endDate: "2024-12",
        teamRole: "Game Designer & Développeur UI",
        challenges: [
          "Création d’un système de dialogue interactif.",
          "Conception d’une ambiance immersive avec musique adaptative.",
          "Gestion du déclenchement de séquences cinématiques en fonction de l’exploration."
        ]
      },
      {
        id: 11,
        title: "Lobby multijoueur avec session LAN",
        imageUrl: "/Portfolio_Ilyes_Najjari/media/Multi/Multi1.png",
        media: [
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/Multi/Multi1.png" },
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/Multi/Multi2.png" },
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/Multi/Multi3.png" },
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/Multi/Multi4.png" },

          //{ type: 'video', src: "/Portfolio_Ilyes_Najjari/media/Multi/Multi1.mp4" },
        ],
        link: "https://github.com/ilyesnajjari/",
        description:
          "Prototype de lobby multijoueur local avec détection automatique des sessions LAN, interface de matchmaking et synchronisation des joueurs.",
        technologies: [
          { name: 'C++', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
          { name: 'Unreal Engine', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg' },
          //{ name: 'Blueprint', url: 'https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/' },
          //{ name: 'Réseau LAN', url: 'https://en.wikipedia.org/wiki/Local_area_network' },
          //{ name: 'UI', url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Interface_design_basics' },
        ],
        startDate: "2025-01",
        endDate: "2025-01",
        teamRole: "Développeur Réseau & UI",
        challenges: [
          "Implémentation de la découverte automatique des sessions locales.",
          "Gestion des transitions entre le lobby et la partie en jeu.",
          "Affichage dynamique des joueurs connectés dans l’interface."
        ]
      },
      {
        id: 12,
        title: "Système de rewind temporel",
        imageUrl: "/Portfolio_Ilyes_Najjari/media/Rewind/Rewind1.jpg",
        media: [
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/Rewind/Rewind1.jpg" },
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/Rewind/Rewind2.png" },
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/Rewind/Rewind3.png" },
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/Rewind/Rewind4.png" },
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/Rewind/Rewind5.png" },
          //{ type: 'video', src: "/Portfolio_Ilyes_Najjari/media/Rewind/Rewind1.mp4" },
        ],
        link: "https://github.com/ilyesnajjari/",
        description:
          "Prototype d’un système de retour dans le temps avec historique de position, d’état et d’interactions.",
        technologies: [
          { name: 'C++', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
          { name: 'Unreal Engine', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg' },
          //{ name: 'Blueprint', url: 'https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/' },
          //{ name: 'Physics', url: 'https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/Physics/' },
        ],
        startDate: "2025-01",
        endDate: "2025-02",
        teamRole: "Développeur gameplay",
        challenges: [
          "Création d’une structure mémoire pour enregistrer et restaurer l’état du jeu.",
          "Optimisation du système pour limiter l’impact sur les performances.",
          "Intégration avec la physique et les interactions environnementales."
        ]
      },
      {
        id: 13,
        title: "Connexion Steam & test réseau",
        imageUrl: "/Portfolio_Ilyes_Najjari/media/SteamSession/SteamSession1.jpg",
        media: [
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/SteamSession/SteamSession1.jpg" },
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/SteamSession/SteamSession2.png" },
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/SteamSession/SteamSession3.png" },
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/SteamSession/SteamSession4.png" },
          //{ type: 'video', src: "/Portfolio_Ilyes_Najjari/media/SteamSession/SteamSession1.mp4" },
        ],
        link: "https://github.com/ilyesnajjari/",
        description:
          "Connexion d’un jeu Unreal Engine à Steam avec intégration des sessions en ligne, profils joueurs et matchmaking.",
        technologies: [
          //{ name: 'Steam API', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/steam/steam-original.svg' },
          { name: 'C++', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
          { name: 'Unreal Engine', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg' },
          //{ name: 'Blueprint', url: 'https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/' },
          //{ name: 'Online Subsystem', url: 'https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Online/' },
        ],
        startDate: "2025-02",
        endDate: "2025-02",
        teamRole: "Intégrateur réseau",
        challenges: [
          "Configuration du plugin Steam pour Unreal.",
          "Création d’un système de lobby en ligne avec session persistante.",
          "Gestion des profils Steam et des invites amis."
        ]
            },
            {
        id: 14,
        title: "Battle Royale Western",
        imageUrl: "/Portfolio_Ilyes_Najjari/media/bomberman/.jpg",
        media: [
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/bomberman/.jpg" },
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/bomberman/.jpg" },
        ],
        link: "https://github.com/ilyesnajjari/",
        description:
          "Jeu multijoueur compétitif inspiré de Fortnite dans un univers Western, avec respawn jusqu'à la fin du timer, construction via ressources, et score basé sur les kills. Les joueurs s'affrontent en équipes de 2.",
        technologies: [
          { name: 'Unreal Engine', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg' },
          //{ name: 'Blueprint', url: 'https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/' },
          //{ name: 'Multijoueur', url: 'https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/Networking/' },
          //{ name: 'Construction', url: 'https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/Building/' },
          { name: 'C++', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        ],
        startDate: "2025-02",
        endDate: "2025-03",
        teamRole: "Chef de projet & développeur gameplay",
        challenges: [
          "Système de respawn permanent jusqu’à la fin du compte à rebours.",
          "Mécanique de construction à partir de ressources lootées.",
          "Affichage des scores synchronisés en temps réel.",
          "Gestion des équipes de 2 joueurs avec coordination et stratégie."
        ]
            },
            {
        id: 15,
        title: "Shooter Coop Viking (défense de vagues)",
        imageUrl: "/Portfolio_Ilyes_Najjari/media/bomberman/.jpg",
        media: [
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/bomberman/.jpg" },
          { type: 'image', src: "/Portfolio_Ilyes_Najjari/media/bomberman/.jpg" },
        ],
        link: "https://github.com/ilyesnajjari/",
        description:
          "Shooter coopératif dans un univers Viking avec défense de vagues, armes variées et montée en difficulté progressive.",
        technologies: [
          { name: 'Unreal Engine', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg' },
          //{ name: 'Blueprint', url: 'https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/' },
          { name: 'C++', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
          //{ name: 'Multijoueur', url: 'https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/Networking/' },
         // { name: 'Level Design', url: 'https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/LevelDesign/' },
        ],
        startDate: "2025-03",
        endDate: "2025-04",
        teamRole: "Level Designer & développeur gameplay",
        challenges: [
          'Création de vagues d’ennemis progressives et équilibrées.',
          'Système d’armes coopératif avec partage de ressources.',
          'Design d’un environnement immersif et stratégique.'
        ]
      }
    ]
  }
  
];

//DERNIERE ID 17


// Données personnelles (à personnaliser)
export const personalInfo = {
  name: 'Ilyes Najjari',
  title: 'Développeur Fullstack & Ingénieur Financier',
  email: 'ilyes.najjari@hotmail.com',
  location: 'Carpentras, France / Québec, Canada',
  availability: 'Lundi au vendredi, 9h - 18h',
  bio: "Étudiant en école d'ingénieur et en master d’informatique, rigoureux, passionné par les technologies, la finance et l'enseignement. J'ai une forte appétence pour l'algorithmique, le développement d'applications et les systèmes intelligents.",
  socials: {
    github: 'https://github.com/ilyesnajjari',
    linkedin: 'https://www.linkedin.com/in/ilyes-najjari',
    twitter: '',
  },
};

// Données d'expérience
export const experiences = [
  {
    title: 'Développeur',
    company: 'ensome',
    period: '2024',
    description: [
      "Création d'une extension Firefox permettant d'interagir directement avec le navigateur.",
      "Développement d'un dashboard dynamique exploitant des données en temps réel pour la visualisation et l’analyse."
    ]
  },  
  {
    title: 'Assistant de production',
    company: 'T.HARDI Production',
    period: '2023',
    description: [
      "Maintenance et support informatique pour garantir le bon déroulement des opérations",
    ],
  },
  {
    title: 'Cours particuliers',
    company: 'Indépendant',
    period: '2022 – Présent',
    description: [
      "Accompagnement intensif d'élèves préparant les concours d’entrée aux grandes écoles d’ingénieurs en mathématiques, physique-chimie et informatique",
    ],
  },
  {
    title: 'Stage en cabinet comptable',
    company: 'Argauane',
    period: '2017',
    description: [
      "Participation à la révision de dossiers clients et à l’élaboration de bilans comptables",
    ],
  },
  {
    title: 'Boulangerie Reynaud LOT',
    company: 'Carpentras',
    period: '2018 – 2019',
    description: [
      "Réception et contrôle de matières premières, élaboration de produits selon fiches techniques",
      "Maintenance des équipements, signalement d’anomalies",
    ],
  },
  {
    title: 'Emploi saisonnier',
    company: 'Carpentras',
    period: '07/2021 – 08/2021',
    description: [
      "Vente et analyse des prix du marché",
      "Achat et gestion de stock de plantes",
    ],
  },
];

// Données de formation
export const education = [
  {
    degree: 'Master en Informatique',
    institution: 'Université du Québec à Chicoutimi',
    period: '2023 – présent',
    description: "Spécialisation en intelligence artificielle et développement logiciel",
    image: '',
  },
  {
    degree: 'DU Innov\'IT',
    institution: 'Université Jean Monnet',
    period: '2023 – présent',
    description: "Double cursus en parallèle de la formation d'ingénieur, orienté innovation numérique",
    image: '',
  },
  {
    degree: 'Diplôme d’Ingénieur',
    institution: 'Télécom Saint-Étienne',
    period: '2022 – présent',
    description: 'Spécialisation en informatique, projets techniques et applications mobiles/web',
    image: '',
  },
  {
    degree: 'Classe préparatoire aux grandes écoles (MPSI/PSI)',
    institution: 'Lycée Paul-Valéry, Paris',
    period: '2019 – 2022',
    description: 'Préparation intensive aux concours des écoles d’ingénieurs (maths, physique, chimie, info)',
    image: '',
  },
  {
    degree: 'Baccalauréat Scientifique',
    institution: 'Lycée Saint Joseph, Carpentras',
    period: '2019',
    description: 'Mention Bien',
    image: '',
  },
];

export const skills = {
  hardskills: {
    coding: [
      { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Kotlin', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
      { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'C++', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Web Development (frontend/backend)', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    ],
    tools: [
      { name: 'GitHub', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Firebase', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'MATLAB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' },
      { name: 'DevOps', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    ],
    management: [
      { name: 'Trello', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
      { name: 'Slack', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg' },
      { name: 'Pack Office', url: 'https://cdn-icons-png.flaticon.com/512/732/732221.png' }    ],
    databases: [
      { name: 'SQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'NoSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ],
  },
  soft: [
    'Autonomie',
    'Capacité d’adaptation',
    'Capacité de travailler seul et en équipe',
    'Organisation',
    'Détermination',
    'Aisance dans la communication',
  ],
};