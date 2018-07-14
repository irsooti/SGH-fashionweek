var ncp = require('ncp').ncp;

ncp.limit = 16;

ncp('src/assets/fonts', 'dist/fonts', function (err) {
  if (err) {
    return console.error('👀 oops...', err);
  }
  console.log('✔ Font copied!');
});

ncp('scripts/gh', 'dist', function (err) {
  if (err) {
    return console.error('👀 oops...', err);
  }
  console.log('✔ CNAME copied!');
})

