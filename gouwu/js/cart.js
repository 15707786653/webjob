var cart = new ShoppingCart();
console.log(cart);
// 获取购物车订单列表
function displayOrderList() {
    let carData = cart.getDataFromLocalStorage();
    let orderList = carData.orderList;
    console.log(orderList);



    // 找订单列表元素
    let cartList=document.querySelector('#cartList');
    // 找样本元素
    let exmapleNode=document.querySelector('#orderExample');


    // 遍历订单列表
    for (let i in orderList) {
        // 当前订单数据
        let order=orderList[i];
        console.log(order);
        // 克隆样本节点形成当前订单节点
        node=exmapleNode.cloneNode(true);
        // 挂接到父元素
        cartList.appendChild(node);
        // 设置数据
        // 节点id
        node.id=order.id;
        // 图像地址
        // 找图像地址
        let imgNode =node.querySelector('[data-name="imgSrc"]');
        imgNode.src='images/'+order.imgSrc;
        node.classList.remove('d-none');

        // 设选中状态
        // 找选中节点
        let selectNode=node.querySelector('[data-operator="checkItem"]');
        selectNode.checked=order.selectStatus;
        console.log(selectNode);
        console.log(node);
    }

}

displayOrderList()
