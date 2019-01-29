module.exports = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    browserName: 'chrome',

    pageObjects: [
        'page-objects/'
    ],

    featureFiles : [
        'features/'
    ],

    stepDefinitions : [
        'features/step-definitions'
    ],

    tags : '@run'
};
