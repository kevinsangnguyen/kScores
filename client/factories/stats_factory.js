board.factory('StatFactory', function($http) {
		var factory = {};
		var west;
		var east;
		var players;
		factory.index = function(callback){
			var games = []
			$http.get('/scoreboard').success(function(output) {
				west = output.resultSets[5].rowSet;
				east = output.resultSets[4].rowSet;
				for (i in output.resultSets[0].rowSet){
					$http.get('/boxscore/'+output.resultSets[0].rowSet[i][2]).success(function(result){
							if(result){
								console.log(result.resultSets);
								let game = {};
								game.players = result.resultSets[0].rowSet;
								game.teams = result.resultSets[1].rowSet;
								games.push(game);
							}
					});
				}
				callback(games,west,east);
			});
		}

		factory.get_leaders = function(callback,category){
			$http.get('/leagueleaders/' + category).success(function(output){
				players = output;
				callback(players);
			})
		}
			return factory;
	});
