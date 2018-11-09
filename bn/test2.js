// //CSS选择器--document.querySelector()
// var img4=document.querySelector('#images>a:nth-child(4)');
// //ID--document.gelElementByID()
// var img4=document.getElementById('images').children[4];
// //类名--document.getElementsByClassName()
// var img4=document.getElementsByClassName('hiddenImg')[3];
// //标签名--document.getElementsByTagName()
// var img4=document.getElementsByTagName('a')[4];
// console.log(img4);

// img4.style.display="block";
// img0.style.display="none";

//初始化
// 获取一组带超链接的图像
var imagesA=document.getElementById("images").children;
// console.log(imagesA);
var txtList=document.querySelectorAll(".txtItem");
console.log(txtList);

// document.querySelector('#images>a:nth-child(1)').style.display="none";
// document.querySelector('#images>a:nth-child(4)').style.display="block";

// //行内样式实现显示样式
// //26行元素隐藏
// imagesA[0].style.display="none";
// //30行元素显示
// imagesA[4].style.display="block";

//通过更换CSS类名来实现更换样式
// 26行显示
// imagesA[0].className="hiddenImg";
// //30行显示
// imagesA[4].className='display';

//利用定时器间隔2s显示一张图像，其余图像隐藏。
var currentNo=0;
function changeImg(){
    //获取 图片/文本总数量
    var nodeLength=txtList.length;
    //排他原理，先去掉同类，在突出自己
    for(var i=0;i<nodeLength;i++){
        //同类图片透明度0（.hiddenImg）
        imagesA[i].className="hiddenImg";
        console.log(imagesA[i]);
        //同类文本设置正常非高亮
        txtList[i].className="txtItem normalColor"
        // console.log(i);
    }
    // for(const item of imagesA){
    //     item.className="hiddenImg";
    // }
    //排他原理2，突出自己，当前图片
    imagesA[currentNo].className="displayImg";
    txtList[currentNo].className="txtItem heighlightColor";
    if(currentNo<7){currentNo++;}
    else{
        currentNo=0;
    }
}
//网页加载后启动定时器，每隔1秒调用changeImg
var timer =window.setInterval(changeImg,1000);

function stopChange(){
    window.clearInterval(timer);
    console.log('father');
}
function startChange(){
    timer =window.setInterval(changeImg,1000)
}

//获取sliderDiv以注册移入移出事件
var sliderDiv=document.querySelector(".slider")
// console.log(imagesADiv);
//为sliderDiv注册移入移出事件
sliderDiv.addEventListener('mouseover',stopChange);
sliderDiv.addEventListener('mouseout',startChange);


// 为所有文本li注册鼠标移入事件，移入之后，当前的高亮，跳转到对应图片
for(var i=0;i<txtList.length;i++){
    txtList[i].addEventListener('mouseover',gotoImg);

    //添加自定义属性no，记录当前li的编号
    txtList[i].no=i;
    console.log(txtList[i].no);

}
function gotoImg(){
    // console.log(txtList[i]);
    //获得当前显示图像的编号/文本编号this是当前事件发生的本体
    console.log('this.son');
    currentNo=this.no;
    //调用更换图片
    changeImg();
}


// sliderDiv.addEventListener('mouseover', stopChange);
// sliderDiv.addEventListener('mouseover', function () {    window.clearInterval(timer);  });
sliderDiv.addEventListener('mouseover', ()=>{clearInterval(timer);});