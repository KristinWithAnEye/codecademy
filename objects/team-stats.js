const team = {
    _players: [{
      firstName: "LeBron", 
      lastName: "James", 
      age: 39 
    },
    {
      firstName: "Michael",
      lastName: "Jordan",
      age: 61
    },
    {
      firstName: "Luka",
      lastName: "Dončić",
      age: 25
    }],
    _games: [{
      opponent: "Serbia",
      teamPoints: 132,
      opponentPoints: 90
    },
    {
      opponent: "Brazil",
      teamPoints: 122,
      opponentPoints: 87
    },
    {
      opponent: "Puerto Rico",
      teamPoints: 104,
      opponentPoints: 83
    }],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      const player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(game);
    }
};
  
const stephCurry = team.addPlayer("Steph", "Curry", 36);
console.log(team._players);
  
const southSudan = team.addGame("South Sudan", 103, 86);
console.log(team._games);