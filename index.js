// http://localhost:3000/items     resurces
//  http://localhost:3000     HOME

let allProduct = [];

let filters = {
  filterItems: "",
};

// DOM Elements
const searchInput = document.querySelector("#search");

// functions
function renderProducts(_prudocts, _filters) {
  console.log(_prudocts);
  const filteredProducts = _prudocts.filter((product) =>
    product.title.toLowerCase().includes(_filters.filterItems)
  );
  console.log(filteredProducts);
}

// Evonts
document.addEventListener("DOMContentLoaded", () => {
  axios.get("http://localhost:3000/items").then((res) => {
    allProduct = res.data;
    renderProducts(allProduct, filters);
  });
});

searchInput.addEventListener("input", (e) => {
  filters.filterItems = e.target.value;
  renderProducts(allProduct, filters);
});
