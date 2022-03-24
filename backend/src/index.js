const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const { todoRoutes } = require('./routes');
dotenv.config();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/', todoRoutes);

app.listen(PORT, () => {
  console.log('listening in port', PORT);
});
