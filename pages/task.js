module.exports = {
  elements: {
    prioritySelect: '.card .panel-heading select',
    saveButton: 'task-card:not(.ng-hide) .panel-footer button:nth-of-type(1)'
  },
  commands: [{
    saveTask: function() {
      return this
        .waitForElementVisible('@saveButton', 1000)
        .click('@saveButton');
    }
  }],
};