const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRouter = require("./routes/auth/auth.routes.js")
const adminProductRouters = require("./routes/admin/product.routes.js")
const shoppingProductRouters = require("./routes/shopping/shopping.products.routes.js")

mongoose.connect('mongodb+srv://zulkiflygitzer_db_user:ECCh4LGRff7f2xNz@cluster0.0fgzs6r.mongodb.net/').then(() => console.log('MongoDB connected')).catch(err => console.log("error is" + err));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors( 
  {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: [
      
      'Content-Type', 
      'Authorization', 
      'cache-control',
      'expires',
      'pragma'
    ],
    credentials: true
  }
));

app.use(cookieParser());
app.use(express.json());

// routes
app.use('/api/auth', authRouter)
app.use('/api/admin/products', adminProductRouters)
app.use('/api/shopping', shoppingProductRouters)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});