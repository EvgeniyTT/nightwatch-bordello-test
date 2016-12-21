module.exports = {
  elements: {
    nameInput: '#login input:nth-of-type(1)',
    passwordInput: '#login input:nth-of-type(2)',
    signupButton: '#login button:nth-of-type(1)',
    loginButton: '#login button:nth-of-type(2)',
  },
  commands: [{
    login: function(name, password) {
      return this.waitForElementVisible('@nameInput', 1000)
        .setValue('@nameInput', name)
        .setValue('@passwordInput', '123456')
        .click('@loginButton');
    }
  }],
};