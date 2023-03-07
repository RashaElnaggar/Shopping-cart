window.onload = function () {
  console.log("javascript is working");
  const icon = document.querySelector('.iconshopping');
  const closebtn = document.getElementById('iconClosebtn');
  const cartBox = document.querySelector('.shoppingCartbox')
  icon.addEventListener('click', function (){
    cartBox.classList.add('active');
    console.log("carticon clicked");
  });
  closebtn.addEventListener('click', function (){
    cartBox.classList.remove('active');
  });
}

