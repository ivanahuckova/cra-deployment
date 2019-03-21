const express = require('express');
const path = require('path');
const app = express();
const api = require('./api/endpoints');

// cra works in a way, that when webpack runs,
//it creates a build folder that containes index.html
//and bundle.js

const pathToBuildFolder = path.join(__dirname, 'build');
const pathToIndexHtml = path.join(pathToBuildFolder, 'index.html');

// 2 - allow static assests to be serverd off this folder (build)

app.use(express.static(pathToBuildFolder));

// 3 - usually not in real-life projects, but
// for small portfolio stuff, you can have FE
// and BE in the same app
app.use('/api', api);

app.get('/', (req, res) => {
  // 1 - res.sendFile - index.html
  res.sendFile(pathToIndexHtml);
});

app.listen(process.env.PORT || 3000);
