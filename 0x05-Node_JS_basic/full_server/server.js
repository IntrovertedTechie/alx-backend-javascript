import express from 'express';
import routes from './routes';

const app = express();
const port = 1245;

// Middleware to attach databasePath to the request object
app.use((req, res, next) => {
  req.databasePath = process.argv[3];
  next();
});

// Use the defined routes
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
