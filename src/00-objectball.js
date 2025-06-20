// let gameObjects = ;

function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
                },
                "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
                },
                "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
                },
                "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
                },
                "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                  number: 4,
                  shoe: 18,
                  points: 10,
                  rebounds: 1,
                  assists: 1,
                  steals: 2,
                  blocks: 7,
                  slamDunks: 2
                },
                "Bismak Biyombo": {
                  number: 0,
                  shoe: 16,
                  points: 12,
                  rebounds: 4,
                  assists: 7,
                  steals: 7,
                  blocks: 15,
                  slamDunks: 10
                },
                "DeSagna Diop": {
                  number: 2,
                  shoe: 14,
                  points: 24,
                  rebounds: 12,
                  assists: 12,
                  steals: 4,
                  blocks: 5,
                  slamDunks: 5
                },
                "Ben Gordon": {
                  number: 8,
                  shoe: 15,
                  points: 33,
                  rebounds: 3,
                  assists: 2,
                  steals: 1,
                  blocks: 1,
                  slamDunks: 0
                },
                "Brendan Haywood": {
                  number: 33,
                  shoe: 15,
                  points: 6,
                  rebounds: 12,
                  assists: 12,
                  steals: 22,
                  blocks: 5,
                  slamDunks: 12
                }
            }
        }
    }
};

console.log(gameObject());

function numPointsScored(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
        const team = game[teamKey];
        const player = team.players[playerName];
            if (player) {
                console.log( player.points);
                return player.points;
            }
        }

}

numPointsScored("Ben Gordon");

function shoeSize(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
      const team = game[teamKey];
      const player = team.players[playerName];
      if (player) {
        console.log(player.shoe);
        return player.shoe;
      }
    }
  }
  
shoeSize("Ben Gordon");

function teamColors(teamName) {
    const game = gameObject();
    for (const teamKey in game) {
      const team = game[teamKey];
      if (team.teamName === teamName) {
        console.log(team.colors);
        return team.colors;
      }
    }
  }
teamColors("Brooklyn Nets");  

function teamNames() {
    const game = gameObject();
    console.log([game.home.teamName, game.away.teamName]);
    return [game.home.teamName, game.away.teamName];
  }

  teamNames();

  function playerNumbers(teamName) {
    const game = gameObject();
    for (const teamKey in game) {
      const team = game[teamKey];
      if (team.teamName === teamName) {
        let playerNumbers = Object.values(team.players).map(player => player.number);
        console.log(playerNumbers);
        return playerNumbers;
      }
    }
  }
  
playerNumbers("Brooklyn Nets");

function playerStats(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
      const team = game[teamKey];
      const player = team.players[playerName];
      if (player) {
        console.log(player);
        return player;
      }
    }
  }

  playerStats("Ben Gordon");

  function bigShoeRebounds() {
    const game = gameObject();
    let maxShoe = 0;
    let rebounds = 0;
  
    for (const teamKey in game) {
      const team = game[teamKey];
      for (const playerName in team.players) {
        const player = team.players[playerName];
        if (player.shoe > maxShoe) {
          maxShoe = player.shoe;
          rebounds = player.rebounds;
        }
      }
    }
    console.log(rebounds);
    return rebounds;
  }

bigShoeRebounds();  

function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
  
    for (const teamKey in game) {
      const team = game[teamKey];
      for (const playerName in team.players) {
        if (playerName.length > longestName.length) {
          longestName = playerName;
        }
      }
    }
    console.log(longestName);
    return longestName;
  }

  playerWithLongestName();

function mostPointsScored() {
    const game = gameObject();
    let topScorer = "";
    let maxPoints = 0;

    for (const teamKey in game) {
        const team = game[teamKey];
        for (const playerName in team.players) {
        const player = team.players[playerName];
        if (player.points > maxPoints) {
            maxPoints = player.points;
            topScorer = playerName;
        }
        }
    }
    console.log(topScorer);
    return topScorer;
}
mostPointsScored();

function winningTeam() {
    const game = gameObject();
    let scores = { home: 0, away: 0 };
  
    for (const teamKey in game) {
      const team = game[teamKey];
      for (const playerName in team.players) {
        scores[teamKey] += team.players[playerName].points;
      }
    }
  
    return scores.home > scores.away ? game.home.teamName : game.away.teamName;
  }
winningTeam();

function doesLongNameStealATon() {
    const longNamePlayer = playerWithLongestName();
    const game = gameObject();
    let maxSteals = 0;
    let longNameSteals = 0;
  
    for (const teamKey in game) {
      const team = game[teamKey];
      for (const playerName in team.players) {
        const player = team.players[playerName];
        if (player.steals > maxSteals) {
          maxSteals = player.steals;
        }
        if (playerName === longNamePlayer) {
          longNameSteals = player.steals;
        }
      }
    }
  
    return longNameSteals === maxSteals;
  }
doesLongNameStealATon();  