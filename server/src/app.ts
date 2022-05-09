/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const server = app.listen(3000, () => {
  console.log(`server started on port 3000}`);
});

app.get('/', (_req, res) => {
  res.status(200).json({
    message: 'works',
  });
});

export { server, app };
