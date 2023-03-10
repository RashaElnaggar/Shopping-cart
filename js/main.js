// function Delete(){
// if(document.readyState==loading){
//   document.addEventListener('DOMContentLoaded',ready);

// }else{
//   ready();
// }
// }
// function ready(){
//   const shoppingCartpitem = document.querySelector('.iconshopping p');

//   let removeCartitemBtn=document.getElementsByClassName('btndelete');
//   console.log(removeCartitemBtn);
//   for(let i=0;i<removeCartitemBtn.length;i++){
//     var button=removeCartitemBtn[i];
//     button.addEventListener("click",function(e){
//       var btnclicked=e.target;
//       btnclicked.parentElement.parentElement.remove();
//     });
//   }
// }

window.onload = function () {
  console.log("javascript is working");
  const icon = document.querySelector('.iconshopping');
  const closebtn = document.getElementById('iconClosebtn');
  const cartBox = document.querySelector('.shoppingCartbox');
 
  icon.addEventListener('click', function (){
    cartBox.classList.add('active');
    console.log("carticon clicked");
  });
  closebtn.addEventListener('click', function (){
    cartBox.classList.remove('active');
  });


//add data to local storage
const addbtn = document.getElementsByClassName('addTocart');
const ItemsNo =document.querySelector('.main header .iconshopping p');
console.log(ItemsNo.textContent);
let items = [];
let cartItemsno = 0;
for (let i=0; i<addbtn.length; i++) {
    addbtn[i].addEventListener("click", function (e) {
    console.log("add button clicked");     
    console.log(i);  
    // addbtn[i].textContent=("Remove From Cart");
    // addbtn[i].style.fontSize ="1.4rem";
    if (typeof (Storage) !== 'undefined') {
      let item = {
        id: i + 1,
        name: e.target.parentElement.parentElement.children[0].textContent,
        price: e.target.parentElement.parentElement.children[1].children[0].textContent,
        no :1
      };
      //console.log(e.target.parentElement.children[0].textContent);
      
      if (JSON.parse(localStorage.getItem('items')) === null) {
        items.push(item);        
        localStorage.setItem('items', JSON.stringify(items));
        window.location.reload();
      }
      else {
        const localItems = JSON.parse(localStorage.getItem("items"));
        localItems.map(data => {
          if (item.id == data.id){
            item.no = data.no + 1;
             
          }
          else{
          items.push(data);
          }
        });
        items.push(item);
        localStorage.setItem('items',JSON.stringify(items));

        window.location.reload();
      }
    }
       else {
      alert('localstorage is empty');    
    }
  });
 
}

  //add items to cart
  const shoppingCartp = document.querySelector('.iconshopping p');
  let no = 0;
  let total= 0;
  JSON.parse(localStorage.getItem('items')).map(data => {
    no = no + data.no;
  });
  shoppingCartp.innerHTML = no;

  //delete function
  // function Delete(e){
  //   let items = [];
  //   JSON.parse(localStorage.getItem('items')).map(data=>{
  //   if(data.id != e.parentElement.parentElement.children[0].textContent){
  //       items.push(data);
  //     }
  //   });
  //   localStorage.setItem('items',JSON.stringify(items));
  //   window.location.reload();
  // }
  //add cartbox data in table
  const carttable = cartBox.querySelector('table');
  const totalPrice= cartBox.querySelector('p');
  console.log(carttable);
  let tableData = '';
  let priceTotal=''
  tableData += '<tr><th>S no.</th> <th>Item Name</th><th>Item No</th><th>Item price</th><th>Remove item</th></tr>';
  if (JSON.parse(localStorage.getItem('items'))[0] === null) {
    tableData += '<tr><td colspan="5">No items found</td></tr>';
  }
  else {
    JSON.parse(localStorage.getItem('items')).map(data => {
      tableData += '<tr><th>' + data.id + '</th><th>' + data.name + '</th><th>' + data.no + '</th><th>' + data.price + '</th><th><a href="#" class="btndelete" onclick=Delete(this);>Delete</a></th></tr>';
      total+=data.price*data.no ;
      console.log(total);
    });
  
  }

 carttable.innerHTML=tableData;
 priceTotal='<span>'+total+'</span>'
 totalPrice.innerHTML+=priceTotal;
  
}
// show quick preview
const previewContainer=document.querySelector(".preview-products");
const previewBox=previewContainer.querySelectorAll(".preview-products .preview");

document.querySelectorAll(".main .itemsbox .item").forEach(item=>{
  const link=item.querySelector(".links .quick-preview");
 
  link.addEventListener("click",function(){
     previewContainer.style.display="flex";
    // let name=link.parentElement.parentElement.getAttribute('data-name');
    let name=item.getAttribute('data-name');
    console.log(name);
    previewBox.forEach(preview=>{
      
      let target=preview.getAttribute('data-target');
      console.log(target);
      if(name == target){
      preview.classList.add('active');
      }
    });

  });

});

previewBox.forEach(close=>{
close.querySelector("svg").addEventListener("click",function(){
close.classList.remove("active");
previewContainer.style.display="none";

})


});

