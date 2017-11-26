# graphiql-azure-functions
Easy deployment of [GraphiQL](https://github.com/graphql/graphiql) to [Azure Functions](https://azure.microsoft.com/en-us/services/functions/)

## Installation
```
npm install --save graphiql-azure-functions
```

## Example
```javascript
const graphiqlAzureFunctions = require('graphiql-azure-functions');

module.exports = function(context) {
  graphiqlAzureFunctions({
    graphqlUrl: '/api/graphql',
  })(context);
}
```
