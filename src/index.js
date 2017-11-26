const indexPage = require('./indexPage');

module.exports = function(options) {
  return function(context) {
    context.res = {
      status: 200,
      body: indexPage(options),
      headers: { 'Content-Type': 'text/html' },
    };

    context.done();
  };
};
