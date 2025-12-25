let orders = []; // TEMP (will be DB later)

exports.createOrder = (req, res) => {
  const { items, user } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  const order = {
    id: orders.length + 1,
    user,
    items,
    total: items.reduce((sum, i) => sum + i.price, 0),
    createdAt: new Date(),
  };

  orders.push(order);

  res.status(201).json({
    message: "Order placed successfully",
    orderId: order.id,
  });
};
