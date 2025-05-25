import express from 'express';
import mongoose from 'mongoose';
import userProfileRoutes from './routes/userProfile.js';

const app = express();
app.use(express.json());
app.use('/api', userProfileRoutes);


mongoose.connect('mongodb://localhost:27017/shop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(5000, () => console.log('Server running on port 5000'));
}).catch(err => console.error(err));