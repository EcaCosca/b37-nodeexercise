const fs = require('fs');

const content = 'hello';

fs.writeFile('./test.html', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
