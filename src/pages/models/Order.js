import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: String,
  fullName: String,
  email: String,
  items: [ 
    {
      productName: String,
      quantity: Number,
      price: Number,
    }
   ],
  total: Number,
  orderNumber: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Order', orderSchema);