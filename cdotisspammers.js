const fs = require('fs')

const spammerList = fs.readFileSync('referrer-spam-list/spammers.txt')
  .toString()
  .split('\r\n')
  .filter(Boolean) 

const isReferrerSpammer = referer => {
  return referer && spammerList.some(spammer => referer.includes(spammer))
}
const isSpammer = req => {
  return isReferrerSpammer(req)
}


module.exports = {isReferrerSpammer,isSpammer}