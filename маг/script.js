let cart = JSON.parse(localStorage.getItem("cart")) || [];



function addToCart(name, price, image){

  let car = {
    name: name,
    price: Number(price),
    image: image
  };


  let currentCart =
    JSON.parse(localStorage.getItem("cart")) || [];

  currentCart.push(car);


  localStorage.setItem(
    "cart",
    JSON.stringify(currentCart)
  );

  alert(name + " добавлен в корзину!");
}



function loadCart(){

  let cartItems =
    document.getElementById("cart-items");

  let totalPrice =
    document.getElementById("total-price");

  if(!cartItems) return;

  cartItems.innerHTML = "";

  let currentCart =
    JSON.parse(localStorage.getItem("cart")) || [];

  let total = 0;

  currentCart.forEach((item, index) => {

    total += item.price;

    cartItems.innerHTML += `

      <div class="cart-item">

        <img src="${item.image}" width="180">

        <div>

          <h2>${item.name}</h2>

          <p>$${item.price}</p>

          <button class="btn"
          onclick="removeItem(${index})">
            Удалить
          </button>

        </div>

      </div>

    `;
  });

  totalPrice.innerText = "$" + total;
}



function removeItem(index){

  let currentCart =
    JSON.parse(localStorage.getItem("cart")) || [];

  currentCart.splice(index, 1);

  localStorage.setItem(
    "cart",
    JSON.stringify(currentCart)
  );

  loadCart();
}



loadCart();