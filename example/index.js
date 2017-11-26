const graphiqlAzureFunctions = require('graphiql-azure-functions');

module.exports = function(context) {
  graphiqlAzureFunctions({
    graphqlUrl: '/api/graphql',
  })(context);
};
