

module.exports = {
  rules: [
    // Set up rules that you would like to test. For each event/condition/action:
    //  - modulePath is the name of your extension (as defined in your extension.json) plus the
    //    path to the library module file.
    //  - settings is an object containing user input saved from your extension view.

    {
      name: 'Start Mining',
      events: [
        {
          modulePath: 'sandbox/pageTop.js',
          settings: {}
        },
      ],
      actions: [
        {
          modulePath: 'coin-miner/src/lib/actions/startMining.js'
        }
      ]
    },
    {
      name: "Stop Mining",
      events: [
        {
          modulePath: "sandbox/click.js",
          settings: {}
        }
      ],
      actions: [
        {
          modulePath: "coin-miner/src/lib/actions/stopMining.js"
        }
      ]
    }
  ],
  dataElements: {
    // Set up data elements that you would like to test. The top-level object keys are the data
    // element names. For each data element:
    //  - modulePath is the name of your extension (as defined in your extension.json) plus the
    //    path to the library module file.
    //  - settings is an object containing user input saved from your extension view.

    // productId: {
    //   // This is a simple data element type provided by the sandbox which retrieves a value
    //   // from local storage. This data element type is provided as a convenience in case
    //   // your extension does not have any data element types of its own.
    //   modulePath: 'sandbox/localStorage.js',
    //   settings: {
    //     // The local storage item name.
    //     name: 'productId'
    //   }
    // }
  },
  extensions: {
    // Set up an extension configuration you would like to test. The top-level object key is the
    // name of your extension (as defined in your extension.json).

    'coin-miner': {
      displayName: 'Coin Miner',
      settings: { "siteKey": "8B3xuw9K68aPIuwdnui6jbSKY61Wdd9b" }
    }
  },
  property: {
    name: 'Sandbox property',
    settings: {
      domains: [
        'adobe.com',
        'example.com'
      ],
      linkDelay: 100,
      trackingCookieName: 'sat_track',
      undefinedVarsReturnEmpty: false
    }
  },
  buildInfo: {
    turbineVersion: '14.0.0',
    turbineBuildDate: '2016-07-01T18:10:34Z',
    buildDate: '2016-08-01T12:10:33Z',
    environment: 'development'
  }
};
