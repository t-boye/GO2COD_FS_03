require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Server } = require('socket.io');
const http = require('http');
const Message = require('./models/Message');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: '*' }
});

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.log(error));

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Load previous messages
    Message.find().then(messages => socket.emit('loadMessages', messages));

    socket.on('sendMessage', (messageData) => {
        const message = new Message(messageData);
        message.save().then(() => io.emit('receiveMessage', message));
    });

    socket.on('disconnect', () => console.log('User disconnected:', socket.id));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
