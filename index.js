const express = require('express');
const helmet = require("helmet");
const app = express();

const usersRoute = require('./Router/Users');
const groupsRoute = require('./Router/Groups');

app.use('/users', usersRoute);
app.use('/groups', groupsRoute);
app.use(helmet());

app.listen(3000);