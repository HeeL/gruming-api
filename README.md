# gruming-api
API for checking articles for german words.

# Install

Require Node 5 and npm to be installed. To install dependencies run:

```

    npm install

```

# Run

```

    npm start

```
Server will be running on port 3000 and accessible on http://localhost:3000


# Test

Running complete test suit will also trigger a linter and test coverage check that should be always on 100%:

```

    npm test

```

If you want to run only tests, without any additional checks, to make it as fast as possible, run `npm run test:quick`.

# Routes

```

GET /v1/words

```
Response with OK and 200 status.

# Contribute

Start you branch from the latest master and create a pull request to a master branch when you are done with your changes. All tests should pass and test coverage should remain on 100%. Tests won't pass if eslint will be complaining, so make sure to follow his advices.
