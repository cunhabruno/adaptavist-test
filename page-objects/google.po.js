const { By } = require('selenium-webdriver');
module.exports = {
    'MAINPAGE': {
        'SEARCHINPUT': By.xpath('//input[@class="gLFyf gsfi"]')
    },
    'SEARCHRESULTSPAGE': {
        'RESULTTITLE': By.className('LC20lb')
    }
};