module.exports = {
  'Add a board' : function (browser) {
    browser
      .url('https://nixsolutions.github.io/demo-ng1-boardello/')
      .waitForElementVisible('body', 1000)
      .click('ul.navbar-right a')
      .waitForElementVisible('#login input:nth-of-type(1)', 1000)
      .setValue('#login input:nth-of-type(1)', 'Vasya')
      .setValue('#login input:nth-of-type(2)', '123456')
      .click('#login button:nth-of-type(2)')
      .waitForElementVisible('ul.navbar-right:not(.ng-hide) li:nth-of-type(1) a', 1000)
      .waitForElementVisible('ul.navbar-right:not(.ng-hide) li:nth-of-type(2) a', 1000)
      .verify.containsText('ul.navbar-right:not(.ng-hide) li:nth-of-type(1) a', 'Vasya')
      .click('ul.nav:not(.navbar-right) a')
      .waitForElementVisible('.add-board input', 1000)
      .setValue('.add-board input', 'NewBoard')
      .click('.add-board a')
      .waitForElementVisible('.board h2', 1000)
      .verify.containsText('.board h2', 'NewBoard')
      .end();
  }
};