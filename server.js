const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config({
  path: './config.env'
});

const app = express();

// Routes
app.use('/api/v1/profile', require('./routes/profile'));

// Dev logging
if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server listening on port: ${port} in ${process.env.NODE_ENV} mode`);
});