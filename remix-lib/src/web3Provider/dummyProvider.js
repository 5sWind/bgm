function dummyProvider () {
  var self = this
  this.bgm = {}
  this.debug = {}
  this.bgm.getCode = function (address, cb) { return self.getCode(address, cb) }
  this.bgm.getTransaction = function (hash, cb) { return self.getTransaction(hash, cb) }
  this.bgm.getTransactionFromBlock = function (blockNumber, txIndex, cb) { return self.getTransactionFromBlock(blockNumber, txIndex, cb) }
  this.bgm.getBlockNumber = function (cb) { return self.getBlockNumber(cb) }
  this.debug.traceTransaction = function (hash, options, cb) { return self.traceTransaction(hash, options, cb) }
  this.debug.storageRangeAt = function (blockNumber, txIndex, address, start, end, maxLength, cb) { return self.storageRangeAt(blockNumber, txIndex, address, start, end, maxLength, cb) }
  this.providers = { 'HttpProvider': function (url) {} }
  this.currentProvider = {'host': ''}
}

dummyProvider.prototype.getCode = function (address, cb) {
  cb(null, '')
}

dummyProvider.prototype.setProvider = function (provider) {}

dummyProvider.prototype.traceTransaction = function (txHash, options, cb) {
  if (cb) {
    cb(null, {})
  }
  return {}
}

dummyProvider.prototype.storageRangeAt = function (blockNumber, txIndex, address, start, end, maxLength, cb) { cb(null, {}) }

dummyProvider.prototype.getBlockNumber = function (cb) { cb(null, '') }

dummyProvider.prototype.getTransaction = function (txHash, cb) {
  if (cb) {
    cb(null, {})
  }
  return {}
}

dummyProvider.prototype.getTransactionFromBlock = function (blockNumber, txIndex, cb) {
  if (cb) {
    cb(null, {})
  }
  return {}
}

module.exports = dummyProvider
