var app = require('./app');
var dotenv = require('dotenv');
var connectDb = require('./config/db');

dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
    connectDb();
});

