var board = angular.module('board', ['ui.router','ui.bootstrap','duParallax','FullpageScroll','ui.navbar']);

board.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/dashboard");

  $stateProvider
    .state('dashboard', {
      url: "/dashboard",
      templateUrl: "partials/dashboard.html",
    })
    .state('standings',{
      url:'/standings',
      templateUrl: 'partials/standings.html',
    })
    .state('boxscore',{
      url:'/boxscore',
      templateUrl: 'partials/boxscore.html',
    })
    .state('leagueleaders',{
      url:'/leaders',
      templateUrl: 'partials/leaders.html',
    })

});
