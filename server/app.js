require('dotenv').config();

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema/schema');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5050;
const app = express();

// Connect to MongoDB
connectDB();

// CORS
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);
app.listen(PORT, () => console.log(`server runnning on port ${PORT}`));
