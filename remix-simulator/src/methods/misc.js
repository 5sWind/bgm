var version = require('../../package.json').version
var web3 = require('web3')

var Misc = function () {
}

Misc.prototype.methods = function () {
  return {
    web3_clientVersion: this.web3_clientVersion.bind(this),
    bgm_protocolVersion: this.bgm_protocolVersion.bind(this),
    bgm_syncing: this.bgm_syncing.bind(this),
    bgm_mining: this.bgm_mining.bind(this),
    bgm_hashrate: this.bgm_hashrate.bind(this),
    web3_sha3: this.web3_sha3.bind(this)
  }
}

Misc.prototype.web3_clientVersion = function (payload, cb) {
  cb(null, 'Remix Simulator/' + version)
}

Misc.prototype.bgm_protocolVersion = function (payload, cb) {
  cb(null, '0x3f')
}

Misc.prototype.bgm_syncing = function (payload, cb) {
  cb(null, false)
}

Misc.prototype.bgm_mining = function (payload, cb) {
  // TODO: should depend on the state
  cb(null, false)
}

Misc.prototype.bgm_hashrate = function (payload, cb) {
  cb(null, '0x0')
}

Misc.prototype.web3_sha3 = function (payload, cb) {
  let str = payload.params[0]
  cb(null, web3.utils.sha3(str))
}

module.exports = Misc
