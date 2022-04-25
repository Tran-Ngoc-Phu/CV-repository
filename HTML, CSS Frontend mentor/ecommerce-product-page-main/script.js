// Toggle the popup
var imageGallery = document.querySelectorAll(".image-gallery li");
var imageGalleryPopup = document.querySelectorAll(".image-gallery-popup li");

var popup = document.querySelector(".popup");
var closeBtn = document.querySelector(".close-button");
var displayImage = document.querySelector(".product");
var imageDisplayMainSite = document.querySelector(".image-display img");

var matchList = [
  "./images/image-product-1",
  "./images/image-product-2",
  "./images/image-product-3",
  "./images/image-product-4",
];
var pictureList = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

closeBtn.onclick = () => {
  popup.classList.add("hidden");
};

function setImage(item, gallery, relatedGallery) {
  gallery.forEach((element) => element.classList.remove("active-image"));
  var srcImg = item.querySelector("img").getAttribute("src");
  var matchSrc = matchList.find((item) => srcImg.includes(`${item}`));

  var newDisplayPicture = pictureList.find((item) =>
    item.includes(`${matchSrc}`)
  );
  imageDisplayMainSite.setAttribute("src", newDisplayPicture);
  displayImage.setAttribute("src", newDisplayPicture);

  relatedGallery.forEach((image) => {
    image.classList.remove("active-image");
    if (image.querySelector("img").getAttribute("src") == srcImg)
      image.classList.add("active-image");
  });
  item.classList.add("active-image");
  popup.classList.remove("hidden");
}
imageGallery.forEach((item) => {
  item.onclick = () => setImage(item, imageGallery, imageGalleryPopup);
});
imageGalleryPopup.forEach((item) => {
  item.onclick = () => setImage(item, imageGalleryPopup, imageGallery);
});

// Toggle the Cart
var cartList = document.querySelector(".cart-list");
var cartIcon = document.querySelector(".icon-cart-section");

cartIcon.onclick = () => {
  cartList.classList.toggle("hidden");
};

// Change the value of product in cart
var productCount = document.querySelector(".product-count");
var increaseBtn = document.querySelector(".increase");
var decreaseBtn = document.querySelector(".decrease");
var currentProductAmount = document.querySelector(".number-product");
var cartProducts = document.querySelector(".cart-products");

function changeAmount(value) {
  var changedAmount = parseInt(currentProductAmount.textContent) + value;
  if (changedAmount < 0) changedAmount = 0;
  currentProductAmount.textContent = changedAmount;
  productCount.textContent = currentProductAmount.textContent;
  // Check the cart is empty of not
  if (productCount.innerText == 0) {
    cartProducts.innerHTML =
      '<li class="cart-empty"><p>Your cart is empty</p></li>';
  } else {
    cartProducts.innerHTML = `<li class="cart-product"><img class="product-thumbnail" src="./images/image-product-1-thumbnail.jpg"/>    <div class="product-detail"> <p>Fall Limited Edition Sneakers</p> <p>$125.00 x ${changedAmount} <strong>$${
      125 * changedAmount
    }</strong></p> </div><img class="product-delete" src="./images/icon-delete.svg" /></li><li><button class="btn">Checkout</button></li>`;
  }
}

increaseBtn.onclick = () => changeAmount(1);
decreaseBtn.onclick = () => changeAmount(-1);

// Change the display picture in slide

var nextBtn = document.querySelector(".next");
var previous = document.querySelector(".previous");

function changeSlide(value) {
  imageGallery.forEach((element) => element.classList.remove("active-image"));

  imageGalleryPopup.forEach((element) =>
    element.classList.remove("active-image")
  );
  currentIndex = pictureList.findIndex(
    (item) => item == displayImage.getAttribute("src")
  );
  newIndex = currentIndex + value;
  if (newIndex < 0) newIndex = 0;
  else if (newIndex > pictureList.length - 1) newIndex = pictureList.length - 1;
  displayImage.setAttribute("src", pictureList[newIndex]);
  imageDisplayMainSite.setAttribute("src", pictureList[newIndex]);
  imageGalleryPopup[newIndex].classList.add("active-image");
  imageGallery[newIndex].classList.add("active-image");
}

nextBtn.onclick = () => changeSlide(1);
previous.onclick = () => changeSlide(-1);

// Open the menu popup
var menuCompact = document.querySelector(".menu-compact");
var menuPopup = document.querySelector(".popup-menu");
var menuSection = document.querySelector(".popup-menu-section");
var closeMenuPopup = document.querySelector(".popup-menu img");

function toggleMenu() {
  menuSection.classList.toggle("hidden");
  var style = getComputedStyle(menuPopup);
  if (style.left == "0px") {
    menuPopup.style.left = "-100vw";
  } else {
    menuPopup.style.left = "0";
  }
}
function hideMenu() {}

closeMenuPopup.onclick = () => toggleMenu();
menuCompact.onclick = () => toggleMenu();
