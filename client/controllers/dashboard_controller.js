board.controller('DashboardController', function($scope,$location,$routeParams,$http, parallaxHelper,StatFactory) {

$scope.background = parallaxHelper.createAnimator(-0.3);

$scope.teams = {
	'1610612737' : {name: 'Atlanta Hawks', short:'hawks'},
	'1610612738' : {name: 'Boston Celtics', short: 'celtics'},
	'1610612751' : {name: 'Brooklyn Nets', short: 'nets'},
	'1610612766' : {name: 'Charlotte Hornets', short: 'hornets'},
	'1610612741' : {name: 'Chicago Bulls', short: 'bulls'},
	'1610612739' : {name: 'Cleveland Cavaliers', short: 'cavs'},
	'1610612742' : {name: 'Dallas Mavericks', short: 'mavs'},
	'1610612743' : {name: 'Denver Nuggets', short:'nuggets'},
	'1610612765' : {name: 'Detroit Pistons', short:'pistons'},
	'1610612744' : {name: 'Golden State Warriors', short:'gsw'},
	'1610612745' : {name: 'Houston Rockets', short: 'rockets'},
	'1610612754' : {name: 'Indiana Pacers', short: 'pacers'},
	'1610612746' : {name: 'Los Angeles Clippers', short: 'clippers'},
	'1610612747' : {name: 'Los Angeles Lakers', short: 'lakers'},
	'1610612763' : {name: 'Memphis Grizzlies', short: 'griz'},
	'1610612748' : {name: 'Miami Heat', short: 'heat'},
	'1610612749' : {name: 'Milwaukee Bucks', short: 'bucks'},
	'1610612750' : {name: 'Minnesota Timberwolves', short: 'wolves'},
	'1610612740' : {name: 'New Orleans Pelicans', short: 'pels'},
	'1610612752' : {name: 'New York Knicks', short: 'knicks'},
	'1610612760' : {name: 'Oklahoma City Thunder', short: 'okc'},
	'1610612753' : {name: 'Orlando Magic', short: 'magic'},
	'1610612755' : {name: 'Philadelphia 76ers', short: 'sixers'},
	'1610612756' : {name: 'Phoenix Suns', short: 'suns'},
	'1610612757' : {name: 'Portland Trail Blazers', short: 'blazers'},
	'1610612758' : {name: 'Sacramento Kings', short: 'kings'},
	'1610612759' : {name: 'San Antonio Spurs', short: 'spurs'},
	'1610612761' : {name: 'Toronto Raptors', short: 'raps'},
	'1610612762' : {name: 'Utah Jazz', short: 'jazz'},
	'1610612764' : {name: 'Washington Wizards', short: 'wiz'},
}
$scope.games = false;
StatFactory.index(function(data){
	$scope.games = data;
})

$scope.test = function(){
	console.log($scope.games);
}


});
