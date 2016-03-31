# kScores
*A real-time NBA scoreboard, statistics, standings and box scores.*

[Live](http://kscores.kevinsangnguyen.com)

Technologies: JavaScript, AngularJS, Express.js, Node.js, request, Twitter Bootstrap

---

Using this [documentation](https://github.com/seemethere/nba_py/wiki/stats.nba.com-Endpoint-Documentation) on endpoint data from stats.nba.com,
I was able to create a scraper to gather games and stats and manipulate the data to display cleanly.

**As of now, there is no boxscore data of player statistics during a game until it is over.**

Here are a few screenshots incase the season is over:
- [Dashboard](https://www.dropbox.com/s/ym86c2bd2cvryeq/kscores.png?dl=0)
- [Box Scores](https://www.dropbox.com/s/007fump4ylgqvpe/boxscore.png?dl=0)
- [Standings](https://www.dropbox.com/s/3r83z6kyjp7rfe3/standings.png?dl=0)
- [Leader Board](https://www.dropbox.com/s/20enq6iwmilcvwg/leaderboard.png?dl=0)

Functions:
---
- Displays games of the current date along with boxscores, time periods, and other details of opponents.
- Displays current NBA standings and records of Eastern and Western conferences with playoff bound teams.
- Displays league leaders in statistics per game, which is also sortable.
