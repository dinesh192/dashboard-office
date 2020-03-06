const express = require("express");
const Twitter = require("twit");

const app = express();
const client = new Twitter({
  consumer_key: "S3iRLqTroRsWPbTHRv58hJ81i",
  consumer_secret: "vGAsD8t3WtqAXQJaYdEGjR2Ar7jVxJjgXIz4nzXbE9zhDVNMLL",
  access_token: "1234496575495376902-wHEachqRGt8Q7nNyxIXyCpWVyjWE8K",
  access_token_secret: "C5Qt7bbn6756kNaO1YtHaHCt1ajqqP9kQSDv0jFTfHAqH"
});

app.use(require("cors")());
app.use(require("body-parser").json());

app.get("/api/user", (req, res) => {
  client
    .get("account/verify_credentials")
    .then(user => {
      res.send(user);
    })
    .catch(error => {
      res.send(error);
    });
});

let cache = [];
let cacheAge = 0;

app.get("/api/home", (req, res) => {
  if (Date.now() - cacheAge > 60000) {
    cacheAge = Date.now();
    const params = { tweet_mode: "extended", count: 200 };
    if (req.query.since) {
      params.since_id = req.query.since;
    }
    client
      .get(`statuses/home_timeline`, params)
      .then(timeline => {
        cache = timeline;
        res.send(timeline);
      })
      .catch(error => res.send(error));
  } else {
    res.send(cache);
  }
});

app.post("/api/favorite/:id", (req, res) => {
  const path = req.body.state ? "create" : "destroy";
  client
    .post(`favorites/${path}`, { id: req.params.id })
    .then(tweet => res.send(tweet))
    .catch(error => res.send(error));
});

app.post("/api/retweet/:id", (req, res) => {
  const path = req.body.state ? "retweet" : "unretweet";
  client
    .post(`statuses/retweet/${req.params.id}`)
    .then(tweet => res.send(tweet))
    .catch(error => res.send(error));
});

app.listen(3000, () => console.log("Server running"));
