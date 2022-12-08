const express = require('express');
 const app = express();

app.get('/', function (req,res) {
    res.send('Test')
})

const usersRouter = require('Router/Users.js');
const groupsRouter = require('Router/Groups.js');

app.use('/users',usersRouter);
app.use('/groups',groupsRouter);
app.listen(3000);