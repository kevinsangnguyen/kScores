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
							games.push(result.resultSets);
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
