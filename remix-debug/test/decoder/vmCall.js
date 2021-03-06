'use strict'
var utilbgm = require('bgmchainjs-util')
var Tx = require('bgmchainjs-tx')
var Block = require('bgmchainjs-block')
var BN = require('bgmchainjs-util').BN
var remixLib = require('remix-lib')

function sendTx (vm, from, to, value, data, cb) {
  var tx = new Tx({
    nonce: new BN(from.nonce++),
    gasPrice: new BN(1),
    gasLimit: new BN(3000000, 10),
    to: to,
    value: new BN(value, 10),
    data: Buffer.from(data, 'hex')
  })
  tx.sign(from.privateKey)
  var block = new Block({
    header: {
      timestamp: new Date().getTime() / 1000 | 0,
      number: 0
    },
    transactions: [],
    uncleHeaders: []
  })
  vm.runTx({block: block, tx: tx, skipBalance: true, skipNonce: true}, function (error, result) {
    setTimeout(() => {
      cb(error, utilbgm.bufferToHex(tx.hash()))
    }, 500)
  })
}

/*
  Init VM / Send Transaction
*/
function initVM (st, privateKey) {
  var utilbgm = require('bgmchainjs-util')
  var VM = require('bgmchainjs-vm')
  var Web3Providers = remixLib.vm.Web3Providers
  var address = utilbgm.privateToAddress(privateKey)
  var vm = new VM({
    enableHomestead: true,
    activatePrecompiles: true
  })
  vm.stateManager.putAccountBalance(address, 'f00000000000000001', function cb () {})
  var web3Providers = new Web3Providers()
  web3Providers.addVM('VM', vm)
  web3Providers.get('VM', function (error, obj) {
    if (error) {
      var mes = 'provider TEST not defined'
      console.log(mes)
      st.fail(mes)
    } else {
      vm.web3 = obj
    }
  })
  return vm
}

module.exports = {
  sendTx: sendTx,
  initVM: initVM
}
