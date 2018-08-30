# XJ9

Small twitter bot meant to randomly tweet out phrases. See something like [JonTron Bot](https://twitter.com/JonTronBot) for an example.

# How to use?

1. Download source
2. Make a config.js like so with your twitter keys:
```
module.exports = {
    consumer_key: '[INSERT CONSUMER KEY HERE]',
    consumer_secret: '[INSERT CONSUMER SECRET HERE]',
    access_token: '[INSERT BOT ACCESS TOKEN HERE]',
    access_token_secret: '[INSERT ACCESS TOKEN SECRET HERE]',
    quotes: ["INSERT", "YOUR", "QUOTES", "HERE"]
}
```
3. Run `npm install` to install the dependencies.
4. Run `node app` to get it to start working!

# TODO
1. Make it actually keep trying to post when duplicate error given
2. Add more error handling
3. Use an actual .env file
4. Probably a lot more I can't think of off the top of my head.
