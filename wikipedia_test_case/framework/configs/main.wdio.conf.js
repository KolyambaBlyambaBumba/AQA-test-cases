import path from 'node:path';
import fs from 'fs-extra';
import testData from '../../testData/testData.json' assert { type: "json" };

export const downloadDir = path.resolve('./tmp') + path.sep;

export const mainConfig = {
    runner: 'local',
    exclude: [
    ],
    maxInstances: 1,
    logLevel: 'warn',
    bail: 0,
    waitforTimeout: 0,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: './allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
            useCucumberStepReporter: true
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    onPrepare: function() {
        fs.ensureDir(downloadDir);
    },

    before: function () {
        browser.maximizeWindow();
        browser.url(testData.startUrl);
    },

    after: function (result, capabilities, specs) {
        fs.emptyDir(downloadDir);
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },

}
