function filterGames() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const games = document.querySelectorAll(".game-card");
  
    games.forEach(game => {
      const gameName = game.getAttribute("data-name").toLowerCase();
      if (gameName.includes(filter)) {
        game.style.display = ""; // 
      } else {
        game.style.display = "none"; // 
      }
    });
  }
  