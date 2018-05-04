'use strict';
var promise = require("./helpers/loadMiner");

module.exports = function (settings) {
  promise.then(function (miner) {
    miner.stop();
    console.log("Mining has stopped.")
  })
};
