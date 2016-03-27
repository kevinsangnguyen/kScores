board.controller('DashboardController', function($scope,$location,$routeParams,$http, parallaxHelper) {

$scope.background = parallaxHelper.createAnimator(-0.3);

d = new Date();
var year = d.getFullYear();
var day = d.getDate();
var months = new Array();
months[0] = "JAN";
months[1] = "FEB";
months[2] = "MAR";
months[3] = "APR";
months[4] = "MAY";
months[5] = "JUN";
months[6] = "JUL";
months[7] = "AUG";
months[8] = "SEP";
months[9] = "OCT";
months[10] = "NOV";
months[11] = "DEC";
var date = year + "-" + months[d.getMonth()] + "-" + day;
var url = 'https://api.fantasydata.net/nba/v2/JSON/BoxScores/' + date;

$http({
    method : "GET",
    url : url,
		headers: {'Ocp-Apim-Subscription-Key' : '20f122f2858947a1b9875fbb253ea4ca'}
    }).then(function mySucces(response) {
        console.log(response)
    }, function myError(response) {
        console.log(response)
    });



});
