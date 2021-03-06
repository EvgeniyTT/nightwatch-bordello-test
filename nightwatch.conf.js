var SELENIUM_CONFIGURATION = {
  start_process: true,
  server_path: './bin/selenium-server-standalone-3.0.1.jar',
  host: '127.0.0.1',
  port: 4444,
  "cli_args" : {
    "webdriver.chrome.driver" : "./bin/chromedriver.exe"
  }
};

var CHROME_CONFIGURATION = {
  browserName: 'chrome',
  javascriptEnabled: true,
  acceptSslCerts: true
};

var DEFAULT_CONFIGURATION = {
  launch_url: 'http://localhost',
  selenium_port: 4444,
  selenium_host: 'localhost',
  desiredCapabilities: CHROME_CONFIGURATION
};

var ENVIRONMENTS = {
  default: DEFAULT_CONFIGURATION
};

module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['pages'],
  test_workers: true,
  selenium: SELENIUM_CONFIGURATION,
  test_settings: ENVIRONMENTS
};