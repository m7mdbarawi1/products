import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/products.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/products', productRoutes);


app.get('/', (req, res) => {
  res.send('Product API is running...');
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
