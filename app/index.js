const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
const routes = require('./router/routes');

const port = 3030;

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : false}));

app.use('/', routes);

app.listen(port, () => console.log(`server is listening on ${port}`));