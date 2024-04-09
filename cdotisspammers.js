const fs = require('fs')

const spammerList = fs.readFileSync('referrer-spam-list/spammers.txt')
  .toString()
  .split('\r\n')
  .filter(Boolean) 

const isSpammer = referer => {
  return referer && spammerList.some(spammer => referer.includes(spammer))
}

module.exports.isSpammer = isSpammer