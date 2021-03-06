/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import { Reply } from './services/reply';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:8100',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', socket => {
  console.log('user connected ', socket.id);

  const ReplyService = new Reply(socket);

  ReplyService.listenForMessage();

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
  });
});

export { server, app };
