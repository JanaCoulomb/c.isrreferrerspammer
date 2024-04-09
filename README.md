This projekt is based on this article: https://ipdata.co/blog/bot-detection/ and uses the following dataset: https://github.com/matomo-org/referrer-spam-list/blob/master/spammers.txt

The projekt aims to add a simple package for people to use and detect if a Domain is a "spammer"


````
const cDotIsSpammer = require('c.isspammer')
  
console.log(cDotIsSpammer.isSpammer('https://casino-top3.ru'))
console.log(cDotIsSpammer.isSpammer("https://github.com"))
````
