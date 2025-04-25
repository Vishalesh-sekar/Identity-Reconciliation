import express, { Application } from 'express';
import contactRoutes from './routes/contact.routes';

const app: Application = express();
app.use(express.json());
app.use('/api/contacts', contactRoutes);

app.get('/', (_req, res) => {
  res.send('Bitespeed Identity Reconciliation API');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
