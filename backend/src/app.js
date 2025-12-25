const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/order.routes");

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());

/* ================= API ROUTES ================= */
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

/* ================= HEALTH CHECK ================= */
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

module.exports = app;
