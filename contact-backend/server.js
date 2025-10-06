const express = require('express');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware
// app.use(cors());
// ✅ Enable CORS for your frontend domain
// app.use(cors({
//   origin: [
//     'https://maneeshwaran.vercel.app',
//     'https://www.maneeshwaran.space',
//     'https://maneeshwaran.space'
//   ],
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true
// }));

const corsOptions = {
  origin: [
    'https://maneeshwaran.vercel.app',
    'https://www.maneeshwaran.space',
    'https://maneeshwaran.space'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));


app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
