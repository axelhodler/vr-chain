#!/bin/sh

./node_modules/browserify/bin/cmd.js src/*_test.js -t [ babelify --presets [ es2015 ] ] \
  | ./node_modules/tape-run/bin/run.js \
  | node_modules/.bin/tap-spec

# throw away whatever browserify created above (some .source.<timestamp>.html file)
ls -ABt1 | head -n3 | grep .source.*.html | xargs rm
