var util = require ('util');
var assert = require('assert');

module.exports = {
  elements: {
    boardName: '.board h2',
    addColumnButton: '.add-column',
    addTaskButton: 'task-column:nth-of-type(%d) .taskColumn-footer button',
    tasksInColumn: 'task-column:nth-of-type(%d) task-panel',
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
    el: function(elementName, data) {
      var element = this.elements[elementName.slice(1)];
      return util.format(element.selector, data);
    }
  }],
};