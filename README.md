# kScores
*A real-time NBA scoreboard, statistics, standings and box scores.*

Technologies: JavaScript, AngularJS, Express.js, Node.js, request, Twitter Bootstrap

---

Using this [documentation](https://github.com/seemethere/nba_py/wiki/stats.nba.com-Endpoint-Documentation) on endpoint data from stats.nba.com,
I was able to create a scraper to gather games and stats and manipulate the data to display cleanly.

Functions:
---
- Displays games of the current date along with boxscores, time periods, and other details of opponents.
- Displays current NBA standings and records of Eastern and Western conferences with playoff bound teams.
- Displays league leaders in statistics per game, which is also sortable.
> API Calls to my scraper

> Dashboard of games
> - kscores.kevinsangnguyen.com/dashboard

> Boxscore for game
> - kscores.kevinsangnguyen.com/boxscore/{gameID}.

> League Leaders
> - kscores.kevinsangnguyen.com//leagueleaders/{category}.

> - Categories: MIN, FGM, FGA, 3PM, 3PA, FTM, FTA, OREB, DREB, REB, AST, STL, BLK, TOV, PTS, EFF

