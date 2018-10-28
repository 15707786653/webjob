var timer;//设计定时器的变量
//启动定时器函数定义--若在启动定时器有很多附加操作可以一并写入该函数。
//若启动定时器动作单一，可以直接调用window定时器。
function startTimer(speed) {
    timer = window.setInterval(changeNnm, speed);
}
//调用定时器，使用程序从一开始就i执行变化
startTimer(100);
//获取h2元素
var h2Obj = document.querySelector('h2');
console.log(h2Obj);
//设置当前变化号码变量及初始值
var currentNo = 0;
//定义变化数字函数，0--》9，到达9后变化到0
function changeNnm() {
    if (currentNo < 9) currentNo++;
    else currentNo = 0;
    h2Obj.innerHTML = '<img src="images/0'+currentNo+'.jpg" alt=""></img>';
    console.log(h2Obj);
    // console(currentNo);

}
// console.log(timer);
// 获取控制按钮
var btnObj = document.getElementById("btnObj");

//定义启动定时器函数，函数功能为启动定时器的同时改变按钮的显示文本
function startchange() {
    startTimer(500);
    btnObj.textContent = '停止';
}
//定义启动定时器函数，函数功能为停止定时器的同时改变按钮的显示文本
function stopchange() {
    timer=window.setInterval(changeNnm,100);
    btnObj.textContent = "启动";
}
//为按钮添加鼠标
btnObj.addEventListener('mouseover', stopchange);
btnObj.addEventListener('mouseout', startchange);

