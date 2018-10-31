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


// 获取一组带超链接的图像
var imagesA=document.getElementById("images").children;
console.log(imagesA);

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
    //排他原理，先去掉同类，在突出自己
    for(var i=0;i<imagesA.length;i++){
        imagesA[i].className="hiddenImg";
        console.log(i);
    }
    // for(const item of imagesA){
    //     item.className="hiddenImg";
    // }

    imagesA[currentNo].className="displayImg";
    if(currentNo<7)currentNo++;
    else{
        currentNo=0;
    }
}
var timer =window.setInterval(changeImg,1000);

function stopChange(){
    window.clearInterval(timer);
}
function startChange(){
    timer =window.setInterval(changeImg,1000)
}


var imagesADiv=document.getElementById("images");
// console.log(imagesADiv);
imagesADiv.addEventListener('mouseover',stopChange);
imagesADiv.addEventListener('mouseout',startChange);


