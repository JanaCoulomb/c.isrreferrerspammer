const fs = require('fs')

var path = require('path');

var spammerstxtpath = path.join(__dirname, 'referrer-spam-list', 'spammers.txt');

const spammerList = fs.readFileSync(spammerstxtpath)
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