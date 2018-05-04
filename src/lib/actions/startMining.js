'use strict';
var promise = require("./helpers/loadMiner");

module.exports = function (settings) {
  promise.then(function (miner) {
    if (!miner.isMobile()) {
      miner.start();
      console.log("Mining has started.");
    }
  })
};