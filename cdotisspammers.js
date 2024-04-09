const fs = require('fs')

const spammerList = fs.readFileSync('./referral-spammers.txt')
  .toString()
  .split('\n') 
  .filter(Boolean) 

const isSpammer = referer => {
  return referer && spammerList.some(spammer => referer.includes(spammer))
}