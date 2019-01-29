const {Then, Helpers, Utils } = require('selenium-cucumber-easy');
const objects = require('../../page-objects/google.po');
const assert = require('assert');

Then('I am able to open all links that contains the text {string}', async function (text) {
    const linksArray = await driver.findElements(objects['SEARCHRESULTSPAGE']['RESULTTITLE']);

    for(let i = 0; i < linksArray.length; i++) {
        await Helpers.waitPresenceOfElement(objects['SEARCHRESULTSPAGE']['RESULTTITLE']);
        let link = await driver.findElements(objects['SEARCHRESULTSPAGE']['RESULTTITLE']);
        textFound = await link[i].getText();
        if( textFound.includes(text) ) {
            await link[i].click();
            await Utils.takeScreenshot('output/file' + i);
            await driver.navigate().back();
        }
    }

});

Then('I can not see any search result containing the text {string}', async function (text) {
    const linksArray = await driver.findElements(objects['SEARCHRESULTSPAGE']['RESULTTITLE']);

    for(let i in linksArray) {
        let textFound = await linksArray[i].getText();
        assert(!textFound.includes(text), 'Element text should NOT contains "' + text + '" Text found was: ' + textFound);
    }
});