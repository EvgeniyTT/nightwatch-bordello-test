module.exports = {
  'Test adding boards using page objects' : function (browser) {
    //define pages
    var loginPage = browser.page.login();
    var boardsPage = browser.page.boards();
    var boardPage = browser.page.board();
    var taskPage = browser.page.task();

    browser
      .maximizeWindow()
      .url('https://nixsolutions.github.io/demo-ng1-boardello/')
      .waitForElementVisible('body', 1000)
      .click('ul.navbar-right a')
    loginPage
      .login('Vasya', '123456')
    browser
      .waitForElementVisible('ul.navbar-right:not(.ng-hide) li:nth-of-type(1) a', 1000)
      .waitForElementVisible('ul.navbar-right:not(.ng-hide) li:nth-of-type(2) a', 1000)
      .verify.containsText('ul.navbar-right:not(.ng-hide) li:nth-of-type(1) a', 'Vasya')
      .click('ul.nav:not(.navbar-right) a')
    boardsPage
      .waitForElementVisible('@addBoardInput', 1000)
      .setValue('@addBoardInput', 'NewBoard')
      .click('@addBoardButton')
    boardPage
      .waitForElementVisible('@boardName', 1000)
      .verify.containsText('@boardName', 'NewBoard')
      .click('@addColumnButton')
      .clickAddTaskToColumn(1)
    taskPage
      .waitForElementVisible('@prioritySelect', 1000)
      .verify.value('@prioritySelect', 'Minor')
      .saveTask()
    boardPage
      .click('@addColumnButton')
      .clickAddTaskToColumn(2)
    taskPage
      .waitForElementVisible('@saveButton', 1000)
      .saveTask()
    browser
      .perform(function(done) {
        boardPage.verifyAmountOfTasksInColumnEquals(1, 1, done)
        boardPage.verifyAmountOfTasksInColumnEquals(2, 1, done)
      })
      .moveToElement('task-column:nth-of-type(1) task-panel',  10,  10)
      .mouseButtonDown()
      .moveToElement('task-column:nth-of-type(2)', 100, 100)
      .mouseButtonUp()
      .perform(function(done) {
        boardPage.verifyAmountOfTasksInColumnEquals(1, 0, done)
        boardPage.verifyAmountOfTasksInColumnEquals(2, 2, done)
      })
      .end();
  }
};