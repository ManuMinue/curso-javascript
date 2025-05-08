const cartList = document.getElementById("cart-list");

function addToCart(product) {
  const li = document.createElement("li");
  li.textContent = product + " ";
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Eliminar";

  removeBtn.addEventListener("click", function () {
    cartList.removeChild(li);
  });

  li.appendChild(removeBtn);
  cartList.appendChild(li);
}
