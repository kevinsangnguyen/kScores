board.factory('StatFactory', function($http) {
		var factory = {};

		factory.index = function(callback){
			var games = []
			$http.get('/scoreboard').success(function(output) {
				for (i in output.resultSets[0].rowSet){
					$http.get('/boxscore/'+output.resultSets[0].rowSet[i][2]).success(function(result){
							games.push(result.resultSets);
					});
				}
			});
			callback(games);
		}
			return factory;
	});
