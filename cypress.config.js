const { defineConfig } = require('cypress')

module.exports = defineConfig({

  
  "reporter": "mochawesome",
  "reporterOptions": {
  "reportDir": "cypress/report/mochawesome-report",
  "overwrite": true,
  "html": true,
  "json": false,
  "timestamp": "mmddyyyy_HHMMss"
  },
  

e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
     
    },

    "viewportHeight": 880,
    "viewportWidth": 1280,
      "reporter": "junit",
      "reporterOptions": {
      "mochaFile": "cypress/reports/junit/test-results-[hash].xml",
      "toConsole" : true
  },
}})
