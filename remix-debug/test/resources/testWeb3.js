'use strict'
var init = require('../init')
var web3Override = {}
web3Override.bgm = {}
web3Override.debug = {}
var data = init.readFile(require('path').resolve(__dirname, 'testWeb3.json'))
data = JSON.parse(data)

web3Override.bgm.getCode = function (address, callback) {
  if (callback) {
    callback(null, data.testCodes[address])
  } else {
    return data.testCodes[address]
  }
}

web3Override.debug.traceTransaction = function (txHash, options, callback) {
  callback(null, data.testTraces[txHash])
}

web3Override.debug.storageRangeAt = function (blockNumber, txIndex, address, start, maxSize, callback) {
  callback(null, { storage: {}, complete: true })
}

web3Override.bgm.getTransaction = function (txHash, callback) {
  if (callback) {
    callback(null, data.testTxs[txHash])
  } else {
    return data.testTxs[txHash]
  }
}

web3Override.bgm.getTransactionFromBlock = function (blockNumber, txIndex, callback) {
  if (callback) {
    callback(null, data.testTxsByBlock[blockNumber + '-' + txIndex])
  } else {
    return data.testTxsByBlock[blockNumber + '-' + txIndex]
  }
}

web3Override.bgm.getBlockNumber = function (callback) { callback('web3 modified testing purposes :)') }

web3Override.bgm.setProvider = function (provider) {}

web3Override.bgm.providers = { 'HttpProvider': function (url) {} }

web3Override.bgm.currentProvider = {'host': 'test provider'}

if (typeof (module) !== 'undefined' && typeof (module.exports) !== 'undefined') {
  module.exports = web3Override
}
