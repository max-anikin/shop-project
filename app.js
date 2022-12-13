let productsCountEl = document.getElementById("products-count");
let prevProductsCount = +productsCountEl.textContent;

//
let addToCartBtns = document.querySelectorAll(".add-btn");

addToCartBtns.forEach((element) =>
  element.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  })
);

/**
 * Modal Window
 */
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

// Show Modal window on scroll 50% of the page
let scrollBreakpoint = (document.body.scrollHeight - visualViewport.height) / 2;

document.addEventListener("scroll", modalOnScroll);

function modalOnScroll() {
  if (window.scrollY >= scrollBreakpoint) {
    openModal();
    document.removeEventListener("scroll", modalOnScroll);
  }
}

/**
 * Slider
 */
$(".slider-block").slick({
  dots: true,
});

/**
 * Like and Dislike buttons actions
 */
let likeBtns = document.querySelectorAll(".add-favorite");

likeBtns.forEach((item) => item.addEventListener("click", likeActions));

function likeActions(event) {
  let item = event.target;
  if (item.classList.contains("add-favorite-liked") === true) {
    item.classList.add("add-favorite");
    item.classList.remove("add-favorite-liked");
  } else {
    item.classList.add("add-favorite-liked");
    item.classList.remove("add-favorite");
  }
}
