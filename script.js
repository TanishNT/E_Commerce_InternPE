/*Toggle Menu*/
var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menuToggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}
/*Click Image*/
var productImage = document.getElementById("productImage");
var smallImg = document.getElementsByClassName("small-img");
smallImg[0].onclick = function () {
  productImage.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  productImage.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  productImage.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  productImage.src = smallImg[3].src;
};
