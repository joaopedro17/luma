module.exports = {
  projectId: "",
  reporter: 'junit',
  defaultCommandTimeout: 10000,
  reporterOptions: {
    mochaFile: 'results/my-test-output-[hash].xml',
    toConsole: true,
  },

  env: {
    baseUrl: 'https://magento2-demo.magebit.com',
    mobileViewportWidthBreakpoint: 414,
  },
    experimentalWebKitSupport: true,
    video: false,

  // Configure the JUnit reporter
  junit: {
    reporterEnabled: true,
    mochaFile: 'cypress/reports/junit/test-results.xml',
    toConsole: true,
  },


  experimentalStudio: true,
  chromeWebSecurity: false,


  e2e: {
    experimentalSessionAndOrigin: true,
    experimentalOriginDependencies: true,
    // reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 10000,
    defaultBrowser: 'chrome'
  },
};