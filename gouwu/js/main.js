// var btnList=document.querySelectorAll('.btn-group .btn');
var totalQty=document.getElementsByName('totalQty')[0];

// for (const key in btnList) {
//     if (btnList.hasOwnProperty(key)) {
//         const element = btnList[key];
//         switch(element.name){
//             case 'increase':element.addEventListener('click',increaseValue);break;
//             case 'decrease':element.addEventListener('click',decreaseValue);break;
//             case 'addToCart':element.addEventListener('click',addToCart);break;
//         }        
//     }
// }
var add=document.getElementsByName("increase");
// console.log(add);
var jian=document.getElementsByName("decrease");
// console.log(jian);
var addToCart=document.getElementsByName("addToCart");
console.log(addToCart);



function increaseValue(e){
      var qtyObj=  e.target.nextElementSibling;
      var qty=parseInt(qtyObj.innerText);
      qty++;
      qtyObj.innerText=qty;
      console.log(qty);        
}
function decreaseValue(e){
    var qtyObj=  e.target.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
   if(qty>1) qty--;
   else qty=0;
    qtyObj.innerText=qty;
    console.log(qty);        
}

function addToCart(e){
    var qtyObj=  e.target.previousElementSibling.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
    var total=parseInt(totalQty.innerText);
    total+=qty;
    totalQty.innerText=total;  
}
// for(let i=0;i<add.length;i++){
//     add[i].addEventListener('click',increaseValue);
// } 
// for(let i=0;i<jian.length;i++){
//     jian[i].addEventListener('click',decreaseValue);
// } 
// for(let i=0;i<addToCart.length;i++){
//     addToCart[i].addEventListener('click',addToCart);

// } 
for(var i=0;i<add.length;i++){
    add[i].addEventListener('click', increaseValue);
    jian[i].addEventListener('click', decreaseValue);
    addToCart[i].addEventListener('click', addToCart);
}