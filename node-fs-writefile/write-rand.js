const fs = require('fs');

const data = Math.random().toString();

fs.writeFile('random.txt', data + '\n', 'utf-8', function (err, data) {
  if (err) {
    console.error(err);
  }
});
