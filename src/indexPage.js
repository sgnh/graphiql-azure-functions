module.exports = options => `<!DOCTYPE html>
<html lang="en" style="height: 100%;">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>GraphiQL</title>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.1.1/umd/react.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.1.1/umd/react-dom.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/graphiql/0.11.10/graphiql.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/graphiql/0.11.10/graphiql.min.css" />
</head>

<body style="height: 100%; margin: 0px;">
  <div id="root" style="height: 100%;"></div>
</body>
<script>
  function graphQLFetcher(graphQLParams) {
    return fetch('${options.graphqlUrl}', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(graphQLParams),
    }).then(response => response.json());
  }

  ReactDOM.render(
    React.createElement(GraphiQL, { fetcher: graphQLFetcher }),
    document.getElementById('root')
  );
</script>

</html>
`;
