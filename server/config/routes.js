// var Controller = require('./../controllers/main.js');
var request = require('request');

module.exports = function(app) {

    app.get('/scoreboard', function(req, res) {
        var info;
        d = new Date();
        var year = d.getFullYear();
        var day = d.getDate();
        var month = ("0" + (d.getMonth() + 1)).slice(-2)
        var date = month+"/"+day+"/"+year;
        var url = 'http://stats.nba.com/stats/scoreboardv2/?GameDate='+ date+ '&LeagueID=00&DayOffset=0'
        var options = {
          url: url,
          headers: {
            'Referer': 'http://stats.nba.com/scores/'
          }
        }
        function callback(error, response, body) {
          if (!error && response.statusCode == 200) {
            info = JSON.parse(body);
            res.json(info);
          }
        }
        request(options,callback);
    });
    //
    app.get('/boxscore/:gameID', function(req,res){
      var url = 'http://stats.nba.com/stats/boxscore?EndPeriod=10&EndRange=28800&GameID=' + req.params.gameID + '&RangeType=0&StartPeriod=1&StartRange=0'
      var options = {
        url: url,
        headers: {
          'Referer': 'http://stats.nba.com/scores/'
        }
      }
      function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
          info = JSON.parse(body);
          res.json(info);
        }
      }
      request(options,callback);
    });

    app.get('/leagueleaders', function(req,res){
      var url = 'http://stats.nba.com/stats/leagueleaders/?LeagueID=00&PerMode=PerGame&StatCategory=PTS&Season=2015&SeasonType=Regular';
      var options = {
        url: url,
        headers: {
          'Referer': 'http://stats.nba.com/scores/'
        }
      }
      function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
          info = JSON.parse(body);
          res.json(info);
        }
      }
      request(options,callback);
    })
    //
    // app.delete('/remove_poll/:id',function(req,res){
    //   polls.remove(req,res);
    // });
    //
    // app.get('/get_poll/:id', function(req,res){
    //   polls.find(req,res);
    // })
    //
    // app.post('/update', function(req,res){
    //   polls.update(req,res);
    // })



  };
