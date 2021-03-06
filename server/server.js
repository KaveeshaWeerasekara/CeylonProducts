const express = require("express");
const app = express();
const connectDb = require("./config/db");


// If extended is false, you can not post "nested object"
app.use(express.json({ extended: false }));

// connect Database
connectDb();

const PORT = process.env.PORT || 5000;
const router = require ('./routes/api/listings.js');
// Define Routes

app.use("/api/chats", require("./routes/api/chats"));
app.use("/api/wishlist", require("./routes/api/wishlist"));
app.use("/api/carts", require("./routes/api/carts"));
app.use("/api/orderdata", require("./routes/api/orderdata"));
app.use("/api/cartadded", require("./routes/api/cartadded"));
app.use("/api/products", require("./routes/api/products"));
app.use("/api/reviewdata", require("./routes/api/reviewdata"));
app.use("/api/paymentsdata", require("./routes/api/paymentsdata"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/messages", require("./routes/api/messages"));
app.use('/api/listings', router);






app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
