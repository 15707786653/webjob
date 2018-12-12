// 获取购物车数据
var cart = new ShoppingCart();
var cartRoot = document.querySelector('#cartRoot');
// 定义一组字符串命名到数据
const dataNameJson = {
    "price": "[data-name='price']",
    "qty": "[data-name='qty']",
    "imgSrc": '[data-name="imgSrc"]',
    "subPrice": '[data-name="subPrice"]',
    "selectedQty": '[data-name="selectedQty"]',
    "selectedAmount": '[data-name="selectedAmount"]',
    "units": '[data-name="units"]'
};

const operatorNameJson = {
    "checkItem": "[data-operator='checkItem']",
    "increase": "[data-operator='increase']",
    "decrease": "[data-operator='decrease']",
    "deleteItem": "[data-operator='deleteItem']"
};

console.log(cart);

//显示订单列表
function displayOrderList() {
    // 获取购物车订单列表
    let cartData = cart.getDataFromLocalStorage();
    let orderList = cartData.orderList;
    console.log(orderList);
    // 遍历订单列表｛

    // for (const i in orderList) {
    //  let order=orderList[i];
    // console.log(order);
    // }

    // 找订单列表父元素
    let cartList = document.querySelector('#cartList');
    //找样本节点
    let exmapleNode = document.querySelector('#orderExample');
    //  遍历订单列表｛
    for (let i = 0; i < orderList.length; i++) {
        //当前订单数据
        let order = orderList[i];
        console.log(order);
        //克隆样本节点形成当前订单节点
        node = exmapleNode.cloneNode(true);
        // 挂接到父元素
        cartList.appendChild(node);

        // 设-id  
        node.id = order.id;


        // 设图像地址       
        let element = node.querySelector(dataNameJson.imgSrc);
        element.src = 'images/' + order.imgSrc;

        // 设选中状态       
        element = node.querySelector(operatorNameJson.checkItem);
        element.checked = order.selectStatus;

        // 设置订单单价
        element = node.querySelector(dataNameJson.price);
        console.log(element);
        element.textContent = (order.price).toFixed(2);

        // 设置数量
        element = node.querySelector(dataNameJson.qty);
        element.textContent = (order.qty);

        //设置小计
        element = node.querySelector(dataNameJson.subPrice);
        element.textContent = (order.qty * order.price).toFixed(2);


        // 移除当前订单节点到隐藏属性
        node.classList.remove('d-none');

        element=node.querySelector(operatorNameJson.deleteItem);
        element.setAttribute("data-id",order.id);
    }
}

//显示商品总样本数
//显示已选中商品到总件数和总价格

function displaySelectedTotal() {

    //获取总数相关节点,并设置对应值
    
    let totalNode = cartRoot.querySelector(dataNameJson.units);
    totalNode.textContent = cart.getTotalUnits();


    totalNode = cartRoot.querySelector(dataNameJson.selectedQty);
    totalNode.textContent = cart.getSelectedQty();

    totalNode = cartRoot.querySelector(dataNameJson.selectedAmount);
    totalNode.textContent = (cart.getSelectedAmount()).toFixed(2);

}

const operatorGlobal={
    "clearAll":"[data-operator='clearAll']"
}

//为相关节点注册事件
function regEvent(){
    // 获取清空购物车节点
    let element=cartRoot.querySelector(operatorGlobal.clearAll);
    console.log(element);
    // 注册单击事件触发函数
    element.onclick=clearAllEventFun;
}
    // 清空事件事件触发函数

    function clearAllEventFun(){
        cart.clearCart();
        let cartListNode=document.querySelector('#cartList');
        let ExampleNode=(document.querySelector('#orderExample')).cloneNode(true);
        cartListNode.innerHTML="";
        cartListNode.appendChild(ExampleNode);
        displaySelectedTotal();
    }
    const deleteList={
        "deleteItem":"[data-operator='deleteItem']"
    }
    // 获取删除订单事件节点
    function deleteRegEvent(){
        let element=cartRoot.querySelector(deleteList.deleteItem);
        console.log(element);

        // 注册单击事件
        let deleteItemBtns = document.querySelectorAll('[data-operator="deleteItem"]');
        for (const key in deleteItemBtns) {
            deleteItemBtns[key].onclick = deleteItemEventFun;
        }
    }


    // 删除事件触发函数
    function deleteItemEventFun(e){
        let id = e.target.getAttribute("data-id");
        let cart=new ShoppingCart();
        cart.deleteItem(id);
        let cartListNode = document.querySelector('#cartList');
        let currentItemNode = cartListNode.querySelector('[id="' + id + '"]');
        cartListNode.removeChild(currentItemNode);
        displaySelectedTotal(cart);


    }
    
//初始化函数
function init(){
    // 显示订单列表
    displayOrderList();
    // 显示总数据
    displaySelectedTotal();
    // 为所有操作节点注册事件
    regEvent();
    deleteRegEvent();
}
// 调用初始化函数
init();


