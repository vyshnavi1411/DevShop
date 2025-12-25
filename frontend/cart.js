function toggleCart() {
  const modal = document.getElementById("cartModal");
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
  renderCart();
}

function renderCart() {
  const cartItemsDiv = document.getElementById("cartItems");
  const cartTotalDiv = document.getElementById("cartTotal");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItemsDiv.innerHTML = "";

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty</p>";
    cartTotalDiv.innerHTML = "";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartItemsDiv.innerHTML += `
      <p>${item.name} - ₹${item.price}</p>
    `;
  });

  cartTotalDiv.innerHTML = `<strong>Total: ₹${total}</strong>`;
}

function checkout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  alert("Order placed successfully!");
  localStorage.removeItem("cart");
  renderCart();
  toggleCart();
}
