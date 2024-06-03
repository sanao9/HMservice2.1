const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require('./routes/authRouter');
const usersRoutes = require('./routes/userRouter');
const packageRoutes = require('./routes/packageRouter');
const paymentRoutes = require('./routes/paymentRouter');
const vehicleRoutes = require('./routes/vehicleRouter');
const appointmentRoutes = require('./routes/appointmentRouter');
const ServiceHistoryRoutes = require('./routes/serviceHistoryRoutes');

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());


// MongoDB Connection
mongoose.connect(process.env.MONGODB_URL, {
  dbName: process.env.MONG,
  useNewUrlParser: true,
  // Remove the unsupported options
  // useCreateIndex: true,
  // useFindAndModify: false,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection successful!");
});

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/appointment', appointmentRoutes);
app.use('/api/serviceHistory', ServiceHistoryRoutes);


// Static images folder
app.use("/Images", express.static("./images"));
// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});