const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();
const app = express();

const PORT = 5000

app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use('/api/cart', require("./routes/cartRoutes.js"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
