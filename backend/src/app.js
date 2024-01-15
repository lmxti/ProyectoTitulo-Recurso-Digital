const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const app = express();
const port = 3001;
const mongoURI = process.env.MONGODB_URI;


mongoose.connect(mongoURI, { dbName: 'educationPlatform'}).then(() => { console.log('Connected to the Database.'); }) .catch(err => console.error(err));
const db = mongoose.connection;

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});


app.use(express.json());

const { authenticateUser } = require('./middleware/userAuth');
// Routes
const codeRoutes = require('./routes/codeExecRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/execute', authenticateUser, codeRoutes);
app.use('/user', authenticateUser, userRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});