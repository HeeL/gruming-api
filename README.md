# gruming-api
API for checking articles for german words.


# Routes

```

GET /v1/words/random

```

Returns random word and a corresponding article to it. Success response has status 200 and JSON format like this:

```json
{
    "article": "der",
    "word": "Wettbewerb"
}

```

# Install

You will need a MongoDB >= 3 to be installed. The required version of Node is specified in package.json and .nvmrc. You can then install all dependencies by simply running:

```

    npm install

```

There is a seed data in `data/words.json`, they can be imported in mongo by running this task:

```

    npm run data:import

```

# Run

```

    npm run dev

```
Server will be running on port 3000 and accessible on http://localhost:3000


# Test

There are unit and integration tests. If you want to run the whole test suite you need to make sure that mongod instance is running and the data imported to MongoDB as described above. Running complete test suit will also trigger a linter and test coverage check that should be always on 100%:

```

    npm test

```

If you just want to run quickly only unit tests without any additional checks, run `npm run test:unit`. In this case you won't need to run a mongod instance.

# Contribute

Start you branch from the latest master and create a pull request to a master branch when you are done with your changes. All tests should pass and test coverage should remain on 100%. Tests won't pass if eslint will be complaining, so make sure to follow his advices.
