// http://localhost:3000/items     resurces
//  http://localhost:3000     HOME

let allProduct = [];

let filters = {
  filterItems: "",
  filterButtons: "",
};

// DOM Elements
const searchInput = document.querySelector("#search");
const productsContainer = document.querySelector(".products-center");
const buttons = document.querySelectorAll(".btn");

// functions
// Input Search Function
function renderProducts(_prudocts, _filters) {
  const filteredProducts = _prudocts.filter((product) =>
    product.title.toLowerCase().includes(_filters.filterItems)
  );
  productsContainer.innerHTML = "";
  filteredProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList = "product";
    productDiv.innerHTML = `
   <div class="img-container">
     <img src=${product.image} class="p-${product.class}" />
   </div>
   <div class="product-desc">
     <p class="product-price">تومان ${product.price}</p>
     <p class="product-title">${product.title}</p>
   </div>`;
    productsContainer.appendChild(productDiv);
  });
}

// Button Search Function
function renderByButton(allProduct, _filters) {
  const filteredProducts = allProduct.filter((product) =>
    product.class.toLowerCase().includes(_filters.filterButtons)
  );
  productsContainer.innerHTML = "";
  filteredProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList = "product";
    productDiv.innerHTML = `
  <div class="img-container">
    <img src=${product.image} class="p-${product.class}" />
  </div>
  <div class="product-desc">
    <p class="product-price">تومان ${product.price}</p>
    <p class="product-title">${product.title}</p>
  </div>`;
    productsContainer.appendChild(productDiv);
  });
}

// Evonts
document.addEventListener("DOMContentLoaded", () => {
  axios.get("http://localhost:3000/items").then((res) => {
    allProduct = res.data;
    renderProducts(allProduct, filters);
    renderByButton(allProduct, filters);
  });
});

searchInput.addEventListener("input", (e) => {
  filters.filterItems = e.target.value;
  renderProducts(allProduct, filters);
});

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const filterID = e.target.dataset.filter;
    filters.filterButtons = filterID;
    renderByButton(allProduct, filters);
  });
});
