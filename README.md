# DotEnv for Node.js

![Build Status](https://travis-ci.org/crushlovely/dotenv-node.png)

DotEnv loads environment variables from .env into your ENV.


## Installation

As early as possible in your application require dotenv and load the .env variables.

``` javascript
DotEnv = require('dotenv-node');
new DotEnv();
```

## Usage

Add your application configuration to a `.env` file in the root of your project:

``` bash
S3_BUCKET=YOURS3BUCKET
SECRET_KEY=YOURSECRETKEYGOESHERE
```

When your application loads, these variables will be available via `process.env`:

``` javascript
process.env.S3_BUCKET;
process.env.SECRET_KEY;
```

## Inspiration

* [The Twelve Factor App](http://12factor.net/config)
* `bkeepers/dotenv` - the original, written in Ruby - https://github.com/bkeepers/dotenv
* `scottmotte/dotenv` - the first take on this, written in JavaScript - https://github.com/scottmotte/dotenv

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Running tests

```bash
npm install
npm test
```

