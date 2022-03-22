// ITERATION 1

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector('.price span').innerText);
  const quantity = product.querySelector('.quantity input').valueAsNumber;
  const subSpan = product.querySelector('.subtotal span');

  const subTotalPrice = price * quantity;

  subSpan.innerText = subTotalPrice;
  return subTotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  //iteration 2
  const totalProducts = document.querySelectorAll('.product');

  // ITERATION 3
  let total = 0;
  for (let product of totalProducts) {
    total += updateSubtotal(product);
  }
  console.log(total);
  document.querySelector('#total-value span').innerHTML = total;

  // ITERATION 4
}

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
