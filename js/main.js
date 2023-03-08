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

//add data to loca storage
addbtn = document.querySelector('.addTocart');
let items = [];
for (i = 0; i < addbtn.length; i++) {
  addbtn[i].addEventListener("click", function (e) {
    if (typeof (Storage) !== 'undefined') {
      let item = {
        id: i + 1,
        name: e.target.parentElement.children[0].textContent,
        price: e.target.parentElement.children[1].children[0].textContent,
        no: 1
      };
      if (JSON.parse(localStorage.getItem('items')) === null) {
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
        window.location.reload();
      }
      else {
        const localItems = JSON.parse(localStorage.getItem("items"));
        localItems.map(data => {
          if (item.id == data.id)
            item.no = data.no + 1;
          elseitems.push(data);
        });
      }


    }
    else {
      alert('localstorage is empty');
    
    });

  //add items to cart
  const shoppingCartp = document.querySelector('table');
  letno = 0;
  JSON.parse(localStorage.getItem('items')).map(data => {
    no = no + data.no
  });
  shoppingCartp.innerHTML = no;

  //add cartbox data in table
  const carttable = cartBox.querySelector('table');
  let tableData = '';
  tableData += '<tr><th>S no.</th> <th>Item Name</th><th>Item No</th><th>Item price</th></tr>';
  if (JSON.parse(localStorage.getItem('items'))[0] === null) {
    tableData += '<tr><td colspan="5">No items found</td></tr>';
  }
  else {
    JSON.parse(localStorage.getItem('items')).map(data => {
      tabledata += '<tr><th>' + data.id + '</th><th>' + data.name + '</th><th>' + data.no + '</th><th>' + data.price + '</th><th><a href="#" onclick=Delete(this);>Delete</a></th></tr>';
    });
  }

}
