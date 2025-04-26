const games = [
  {
    id: 1,
    title: 'Schedule I',
    imageUrl: 'https://rogallylife.com/storage/2025/03/Schedule-I-rog-ally-game-settings.webp',
    category: 'Simulation, Action',
    size: '2.15 GB',
    releaseDate: '2025-03-24',
    description: 'Schedule I est un jeu de simulation en monde ouvert de TVGS, qui vous met dans la peau d’un trafiquant de drogue.',
    isFeatured: true,
    downloadUrl: 'https://mega.co.nz/#!vl5wSTJa!2L0CqqZXxseiq1fNQovY4y-LkSY6PO5JDE66h5TmcD0'
  },
  {
    id: 2,
    title: 'Euro Truck Simulator 2',
    imageUrl: 'https://th.bing.com/th/id/OIP.wOnnLmLePwQGQRhyXM1fQgHaEK?rs=1&pid=ImgDetMain',
    category: 'Simulation',
    size: '31.74 GB',
    releaseDate: '2012-10-19',
    description: 'Euro Truck Simulator 2 est un jeu de simulation de poids lourd et la suite d Euro Truck Simulator développé par SCS',
    isFeatured: true,
    downloadUrl: 'https://mega.nz/file/9gQhnIaR#tIVC5p6Z5pLKe0xeWGfzKA117JzXG7tQyukgxyctisY'
  },
  {
    id: 3,
    title: 'R.E.P.O',
    imageUrl: 'https://i.ytimg.com/vi/C3IVB0Wnk1s/maxresdefault.jpg',
    category: 'Survival, Horror, Coopératif',
    size: '363.8 Mo',
    releaseDate: '2025-02-26',
    description: 'R.E.P.O. est un jeu vidéo d’horreur de survie coopératif en ligne développé et publié par le studio suédois Semiwork',
    downloadUrl: 'https://mega.nz/folder/aq5xlCbC#ObLKyVSETnPEDIggruY4jA'
  },
  {
    id: 4,
    title: 'InZOI',
    imageUrl: 'https://th.bing.com/th/id/OIP.sSu1y49pYJp1SehIA5fKQAHaD4?rs=1&pid=ImgDetMain',
    category: 'Simulation, Romance',
    size: '22.45 GB',
    releaseDate: '2025-03-28',
    description: 'inZOI est un jeu vidéo de simulation de vie développé par inZOI Studio et distribué par Krafton.',
    downloadUrl: 'https://1fichier.com/?v1ywnx0dn2edcf5vz4h6'
  },
  {
    id: 5,
    title: 'The Last of Us Part I',
    imageUrl: 'https://www.fredzone.org/wp-content/uploads/2022/08/The-Last-of-Us-Part-1.webp',
    category: 'Action-aventure, Survival horror',
    size: '78.2 GB',
    releaseDate: '2022-09-01',
    description: 'The Last of Us Part I est un jeu vidéo d’action-aventure développé par Naughty Dog et publié par Sony Interactive Entertainment.',
    downloadUrl: 'https://gofile.io/d/j4ou7W'
  },
  {
    id: 6,
    title: 'The Last of Us Part II Remastered',
    imageUrl: 'https://www.tuttotek.it/wp-content/uploads/2023/11/the-last-of-us-part-2-remastered-logo.jpg',
    category: 'Action-aventure, Survival horror',
    size: '100.6 GB',
    releaseDate: '2020-06-19',
    description: 'The Last of Us Part II est un jeu vidéo d’action-aventure développé par Naughty Dog et publié par Sony Interactive Entertainment.',
    downloadUrl: 'https://gofile.io/d/qBaj3l'
  },
  {
    id: 7,
    title: "Marvel's Spiderman 2",
    imageUrl: 'https://th.bing.com/th/id/OIP.scHLU-7DtzJJIiD1jnq7YQHaHa?rs=1&pid=ImgDetMain',
    category: 'Action-aventure, Monde ouvert',
    size: '96.7 GB',
    releaseDate: '2023-10-20',
    description: "Marvel's Spider-Man 2 est un jeu d'action-aventure développé par Insomniac Games et édité par Sony Interactive Entertainment.",
    downloadUrl: 'https://gofile.io/d/a2bxIy'
  },
  {
    id: 8,
    title: 'Red Dead Redemption',
    imageUrl: 'https://www.designyourway.net/blog/wp-content/uploads/2024/11/Red-Dead-Redemption-featured-1.jpg',
    category: 'Action-aventure, Monde ouvert',
    size: '23.5 GB',
    releaseDate: '2010-05-18',
    description: "Red Dead Redemption s'étale sur les États américains fictifs, ainsi qu'un État mexicain fictif, le jeu se déroule principalement en 1911",
    downloadUrl: 'https://gofile.io/d/OjQ4ob'
  },
  {
    id: 9,
    title: 'Red Dead Redemption 2',
    imageUrl: 'https://th.bing.com/th/id/OIP.JZktdCpH1WsAZcv-9wAcegHaEK?rs=1&pid=ImgDetMain',
    category: 'Action-aventure, Monde ouvert',
    size: '112.2 GB',
    releaseDate: '2018-10-26',
    description: "Red Dead Redemption s'étale sur les États américains fictifs, c'est un jeu vidéo d'action-aventure développé et publié par Rockstar Games.",
    downloadUrl: 'https://gofile.io/d/DYKQ22'
  },
  {
    id: 10,
    title: 'Until Dawn',
    imageUrl: 'https://styles.redditmedia.com/t5_4gqw07/styles/communityIcon_vemy1buyyp071.png?width=256&s=7146a16787838fd22211a3416b3767449a6cf4d3',
    category: 'Survival horror, Aventure interactive',
    size: '59.5 GB',
    releaseDate: '2015-08-28',
    description: 'Until Dawn est un jeu vidéo d’horreur de survie développé par Supermassive Games et publié par Sony Computer Entertainment.',
    downloadUrl: 'https://gofile.io/d/kUC9n7'
  },
  {
    id: 11,
    title: 'SchoolBoy Runaway',
    imageUrl: 'https://ogotop.com/uploads/posts/2025-01/schoolboy-runaway.jpg',
    category: 'Simulation',
    size: '255.4 Mo',
    releaseDate: '2024-12-07',
    description: 'SchoolBoy Runaway est un jeu de simulation où vous incarnez un enfant qui doit échapper à des situations périlleuses à la maison.',
    downloadUrl: 'https://mega.nz/folder/nAM3zCbQ#fR6GGNrYWzee75YkQbhg5A'
  },
  {
    id: 12,
    title: 'Stray',
    imageUrl: 'https://th.bing.com/th/id/OIP.MZUsgV_Et0hfS46vnOlgKAHaEP?w=600&h=344&rs=1&pid=ImgDetMain',
    category: 'Aventure',
    size: '5.7 GB',
    releaseDate: '2022-07-19',
    description: 'Stray est un jeu vidéo d’aventure développé par BlueTwelve Studio et publié par Annapurna Interactive.',
    downloadUrl: 'https://drive.google.com/file/d/19m_aLwanV2xp9qgyhv_gql0rW8wqcuUL/view'
  },
  {
    id: 13,
    title: 'Elden ring',
    imageUrl: 'https://th.bing.com/th/id/OIP.vpDERKCGvEbFQg5ac2uIGgHaDt?rs=1&pid=ImgDetMain',
    category: 'Action-RPG, Monde ouvert',
    size: '67.6 GB',
    releaseDate: '2022-02-25',
    description: 'Elden Ring est un jeu vidéo d’action-RPG développé par FromSoftware et publié par Bandai Namco Entertainment.',
    downloadUrl: 'https://gofile.io/d/QVSdnz'
  },
  {
    id: 14,
    title: 'Forza Horizon 5',
    imageUrl: 'https://th.bing.com/th/id/R.dba85ab1c8599809be2f16376cc25b55?rik=iSyOBKvmc3utEQ&riu=http%3a%2f%2fstore-images.s-microsoft.com%2fimage%2fapps.30953.14506879174941978.138d3eab-0b06-443b-a252-c99592521394.14d1c0fa-a49d-46bb-b177-7173e55078c7&ehk=Ws%2b%2fUiKVphpI5kOWw5ozIRgIAp5ynHAgvURoIS3cDmg%3d&risl=&pid=ImgRaw&r=0',
    category: 'Course, Monde ouvert',
    size: '169.1 GB',
    releaseDate: '2021-11-09',
    description: 'Forza Horizon 5 est un jeu vidéo de course développé par Playground Games et publié par Xbox Game Studios.',
    downloadUrl: 'https://gofile.io/d/h24cYz'
  }
];

function createGameCard(game) {
  return `
    <div class="game-card">
      <img src="${game.imageUrl}" alt="${game.title}">
      <div class="game-info">
        <h3>${game.title}</h3>
        <div class="game-meta">
          <span>${game.category.toUpperCase()}</span>
          <span>•</span>
          <span>${game.size}</span>
        </div>
        <p class="game-description">${game.description}</p>
        <a href="${game.downloadUrl}" class="download-btn" target="_blank" rel="noopener noreferrer">
          Télécharger maintenant
        </a>
      </div>
    </div>
  `;
}

function renderGames(filteredGames = games) {
  const gamesGrid = document.getElementById('games-grid');
  if (filteredGames.length === 0) {
    gamesGrid.innerHTML = `<p class="no-results">Aucun jeu trouvé.</p>`;
  } else {
    gamesGrid.innerHTML = filteredGames.map(createGameCard).join('');
  }
}

function handleSearch(event) {
  const searchTerm = event.target.value.toLowerCase().trim();

  // Filtrer les jeux en fonction du titre, de la catégorie ou de la description
  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchTerm) ||
    game.category.toLowerCase().includes(searchTerm) ||
    game.description.toLowerCase().includes(searchTerm)
  );

  renderGames(filteredGames);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  renderGames(); // Affiche tous les jeux au chargement de la page

  const searchInput = document.querySelector('.search-input');
  searchInput.addEventListener('input', handleSearch);

  function redirectToGameDetails(gameId) {
    const selectedGame = games.find(game => game.id === gameId);
    if (selectedGame) {
      const queryParams = new URLSearchParams({
        title: selectedGame.title,
        description: selectedGame.description,
        downloadUrl: selectedGame.downloadUrl,
      });
    }
  }

  // Fonction pour afficher les jeux dans la grille
  function renderGames() {
    const appGrid = document.getElementById('app-grid');
    if (games.length === 0) {
      appGrid.innerHTML = `<p class="no-results">Aucun jeu trouvé.</p>`;
    } else {
      appGrid.innerHTML = games.map(createGameCard).join('');
    }
  }

  // Appeler la fonction pour afficher les jeux
  renderGames();
});