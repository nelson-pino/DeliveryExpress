const express = require("express");
const router = express.Router();

const Order = require("../models/order");

router.get("/", async (req, res) => {
  const orders = await Order.find();
  console.log(orders);
  res.json(orders);
});

router.get("/:id", async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json(order);
});

router.post("/", async (req, res) => {
  const { OrderId, CustomerName } = req.body;
  const order = new Order({ OrderId, CustomerName });
  await order.save();
  res.json({ Status: "Order Save." });
});

router.put("/:id", async (req, res) => {
  const { OrderId, CustomerName } = req.body;
  const newOrder = { OrderId, CustomerName };
  await Order.findByIdAndUpdate(req.params.id, newOrder);
  res.json({ status: "Order Update" });
});

router.delete("/:id", async (req, res) => {
  await Order.findByIdAndRemove(req.params.id);
  res.send({ status: "Order Deleted." });
});

module.exports = router;
