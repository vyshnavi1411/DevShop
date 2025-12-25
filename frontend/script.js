/**************** CONFIG ****************/
const API_BASE = "http://localhost:3000";

/**************** AUTH ****************/
const user = JSON.parse(localStorage.getItem("user"));
const path = window.location.pathname;

/* Protect home page */
if (!user && path === "/home") {
  window.location.href = "/login";
}

/* Prevent logged-in user from seeing login page */
if (user && path === "/login") {
  window.location.href = "/home";
}

/**************** LOGIN ****************/
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("user", JSON.stringify({ email }));
  window.location.href = "/home";
}

function logout() {
  localStorage.clear();
  window.location.href = "/login";
}

/**************** PRODUCTS ****************/
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("products")) {
    loadProducts();
  }
});

function loadProducts() {
  fetch(`${API_BASE}/api/products`)
    .then(res => res.json())
    .then(products => {
      const div = document.getElementById("products");
      div.innerHTML = "";

      products.forEach(p => {
        div.innerHTML += `
          <div class="product">
            <img src="${p.image}">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
          </div>
        `;
      });
    })
    .catch(err => console.error("Products error:", err));
}

/**************** CART ****************/
function addToCart(id) {
  fetch(`${API_BASE}/api/products`)
    .then(res => res.json())
    .then(products => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(products.find(p => p.id === id));
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Added to cart");
    });
}

/**************** CHECKOUT ****************/
function checkout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const user = JSON.parse(localStorage.getItem("user"));

  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  fetch(`${API_BASE}/api/orders/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user, items: cart })
  })
    .then(res => res.json())
    .then(data => {
      alert(`Order placed! Order ID: ${data.orderId}`);
      localStorage.removeItem("cart");
    })
    .catch(() => alert("Checkout failed"));
}
