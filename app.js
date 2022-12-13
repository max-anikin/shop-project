let productsCountEl = document.getElementById("products-count");
let prevProductsCount = +productsCountEl.textContent;

//
let addToCartBtns = document.querySelectorAll(".add-btn");

addToCartBtns.forEach((element) =>
  element.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  })
);

let moreDetailsBtns = document.querySelectorAll(".more-details");

let modal = document.querySelector(".modal");

moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));

let btnClose = document.querySelector(".btn-close");
btnClose.addEventListener("click", closeModal);

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Slider
$(".slider-block").slick();

// Show Modal wondow on scroll 50% of the page
let scrollBreakpoint = (document.body.scrollHeight - visualViewport.height) / 2;

window.addEventListener("scroll", function () {
  console.clear();
  console.log("scrollBreakpoint: ", scrollBreakpoint);
  console.log("window.scrollY: ", window.scrollY);

  if (window.scrollY >= scrollBreakpoint) {
    openModal();
  }
});
