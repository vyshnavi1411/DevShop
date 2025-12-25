exports.getProducts = (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 60000, image: "images/laptop.jpg" },
    { id: 2, name: "Headphones", price: 2000, image: "images/headphones.jpg" },
    { id: 3, name: "Mobile Phone", price: 30000, image: "images/mobile.jpg" },
    { id: 4, name: "Keyboard", price: 1500, image: "images/keyboard.jpg" },
    { id: 5, name: "Wireless Mouse", price: 1200, image: "images/mouse.jpg" },
    { id: 6, name: "Smart Watch", price: 5000, image: "images/smartwatch.jpg" },
    { id: 7, name: "Monitor", price: 12000, image: "images/monitor.jpg" },
    { id: 8, name: "Bluetooth Speaker", price: 3500, image: "images/speaker.jpg" },
  ]);
};
