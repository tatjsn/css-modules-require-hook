const detachHook = require('../sugar').detachHook;
const dropCache = require('../sugar').dropCache;
const path = require('path');

suite('api/rootDir', () => {
  suite('should change the way in which tokens are generated', () => {
    let tokens1;
    let tokens2;

    test('should return different tokens', () => assert.notDeepEqual(tokens1, tokens2));

    setup(() => {
      hook({rootDir: path.join(__dirname, '../../')});
      tokens1 = require('./fixture/oceanic.css');
      dropCache('./api/fixture/oceanic.css');

      hook({rootDir: __dirname});
      tokens2 = require('./fixture/oceanic.css');
    });

    teardown(() => {
      dropCache('./api/fixture/oceanic.css');
      detachHook('.css');
    });
  });
});
