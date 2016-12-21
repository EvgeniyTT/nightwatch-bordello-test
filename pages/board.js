var util = require ('util');
var assert = require('assert');

module.exports = {
  elements: {
    boardName: '.board h2',
    addColumnButton: '.add-column',
    taskColumn: 'task-column:nth-of-type(%d)',
    addTaskButton: 'task-column:nth-of-type(%d) .taskColumn-footer button',
    tasksInColumn: 'task-column:nth-of-type(%d) task-panel',
    taskInColumn: 'task-column:nth-of-type(%d) task-panel:nth-of-type(%d)',
  },
  commands: [{
    clickAddTaskToColumn: function(columnIndex) {
      var addTaskButton = util.format(this.elements.addTaskButton.selector, columnIndex);
      return this
        .waitForElementVisible(util.format(this.elements.addTaskButton.selector, columnIndex), 5000)
        .click(util.format(this.elements.addTaskButton.selector, columnIndex));
    },
    verifyAmountOfTasksInColumnEquals: function(columnIndex, tasksCount, done) {
      var self = this;
      self.api.elements('css selector', util.format(self.elements.tasksInColumn.selector, columnIndex), function(res) {
        self.assert.equal(res.value.length, tasksCount);
        done()
      });
    },
    moveTaskFromColumnToColumn: function(browser, taskIndex, columnFrom, columnTo) {
      return browser
        .moveToElement(util.format(this.elements.taskInColumn.selector, columnFrom, taskIndex),  10,  10)
        .mouseButtonDown()
        .moveToElement(util.format(this.elements.taskColumn.selector, columnTo), 100, 100)
        .mouseButtonUp()
    }
  }],
};