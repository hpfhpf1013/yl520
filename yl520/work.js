var video = document.getElementById("video");
var duration = video.duration;
var load = document.getElementById("load");
var mp31 = document.getElementById("mp31");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var loadingImg = document.getElementById("loadingImg");

var dog = document.getElementById("dog");
var pg = document.getElementById("pg");
var shou = document.getElementById("shou");

var go = document.getElementById("go");
var love = document.getElementById("love");

var videodiv = document.getElementById("videodiv");

var img3 = document.getElementById("img3");
var tiaoguo = document.getElementById("tiaoguo");
var mask = document.getElementById("mask");



// 获取视频已经下载的时长
// function getEnd(video) {
//   var end = 0
//   try {
//     end = video.buffered.end(0) || 0
//     end = parseInt(end * 1000 + 1) / 1000
//   } catch(e) {
//   }
//   return end
// }

//播放按钮呗点击
    function playvideo() {
        video.style.width = window.innerWidth + "px";
        video.style.height = window.innerHeight + "px";

        $.ajax({
  url: "http://115.28.154.171:8080/wx/count",
  data: {
    
  },
  success: function( result ) {}
});
		//增加统计
        
        mp31.pause();
        video.play();
       
        tiaoguo.style.display = "block";
        clearInterval(timer2);
		 c2.style.display = "none";
};

go.onclick = function () {
    c4.style.display = "block";
    mask.style.display = "block";
};

love.onclick = function () {
    location.href="https://d.elong.com/a/aaj";
};

tiaoguo.onclick = function () {
    onvideoend();
};

mask.onclick = function () {
    c4.style.display = "none";
    mask.style.display = "none";
};

pg.onclick = function () {
    playvideo();
};
document.getElementById("dianji1").onclick = function () {
    playvideo();
};
document.getElementById("shou").onclick = function () {
    playvideo();
};
document.getElementById("dianji3").onclick = function () {
    playvideo();
};


var timer1 = setInterval(function() {
    dog.src = "img/dog/"+i+".png";
    i++;
    if(i>8){
        i =1;
    }
}, 100);


// 启动定时器检测视频下载进度
var timer = setInterval(function() {
// var end = getEnd(video),
// duration = video.duration
// var totalWidth = 25;
// var per = end/duration;
// console.log("end %s",end);
// console.log("duration %s",duration);
//   loadingImg.style.width = (per * totalWidth)+"rem";
// if(per < 0.7) {
//   return
// }

loadingImg.style.width = xx+"%";
var randomx = Math.random()*3;
xx=xx+randomx;
console.log("end %s",xx);
if(xx<97){
    return;
}
loadingImg.style.width = "97%";
finishLoading();
clearInterval(timer);
}, 50);

var timer2;
function start2(){
	var j = 1;
  	timer2 = setInterval(function() {
	  pg.src = "img/pg/"+j+".png";
	  j++;
	  if(j>5){
		  j =1;
	  }

  }, 100)
};
  

video.addEventListener('ended', function () {
    onvideoend();
}, false);

function audioAutoPlay(id){
	var audio = document.getElementById(id);
	audio.play();
	document.addEventListener("WeixinJSBridgeReady", function () {
		audio.play();
        
	}, false);
};

function onvideoend(){
		// video.style.width = "1px";
        // video.style.height = "1px";
		// video.style.zIndex = -1;
		// videodiv.style.zIndex = -1;
        c3.style.display = "block";
		videodiv.style.display = "none";
        tiaoguo.style.display = "none";
        video.pause();
};

function finishLoading(){
	c1.style.display = "none";
	if(timer1){
		clearInterval(timer1);
	}
	start2();
  	c2.style.display = "block";
    // var ios = true;
    // try {
    //     if(!browser.versions.ios){
    //         ios = false;
    //     }
    // } catch (error) {
        
    // };
    // if(ios){
    //     //  $('body').css("cursor:pointer");
    //     // $('body').one('touchstart  click', playvideo);
    //     // $('pg').one('click', playvideo);
    // }else{
    //     $('body').one('click', playvideo);  
    // };
};

var appid;
var noncestr;
var timestamp;
var signature;
$.ajax({
  url: "http://115.28.154.171:8080/wx/config",
  data: {
    url : location.href
  },
  success: function( result ) {
   console.log("aaa %s",result);
   var r = result.split(",");
   appid = r[0];
   noncestr = r[1];
   timestamp = r[2];
   signature = r[3];

   randomSetWxConteng();

   wx.config({    
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。    
    appId: appid, // 必填，公众号的唯一标识    
    timestamp: timestamp, // 必填，生成签名的时间戳    
    nonceStr: noncestr, // 必填，生成签名的随机串    
    signature: signature,// 必填，签名，见附录1    
    jsApiList: ['checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2    
});    
  }
});

function shareend(){
    mask.style.display = "none";
};

var wxtitle='';
var wxlink = location.href;
var wximgUrl = '';
var wxdesc = '';
function randomSetWxConteng(){
	var titleArray = new Array("对单身狗来说，这是一道“送命题”","希望以后和我共度一生的人，先知道这件事","希望你以后少说一点：早知道就好了！");
	var wximgUrlArray = new Array("http://taida.laiqu.cn/yl520/img/s/2.png","http://taida.laiqu.cn/yl520/img/s/1.jpg","http://taida.laiqu.cn/yl520/img/s/3.jpg");
	var descArray = new Array("520这天，因为我时间太久她选择分手了","其他的，我们床上说","后悔药使用指南.avi");

	var index = parseInt(Math.random()*3);
	wxtitle = titleArray[index];
	wximgUrl = wximgUrlArray[index];
	wxdesc = descArray[index];
};


wx.ready(function(){
	wx.onMenuShareTimeline({    
    title: wxtitle, // 分享标题    
    link: wxlink, // 分享链接    
    imgUrl: wximgUrl, // 分享图标    
    success: function () {
        shareend();
    },    
    cancel: function () {
        shareend();   
    }    
}); 

wx.onMenuShareAppMessage({
	 desc: wxdesc, // 分享描述
  	title: wxtitle, // 分享标题    
    link: wxlink, // 分享链接    
    imgUrl: wximgUrl, // 分享图标  
    type: '', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () { 
        shareend();
    },
    cancel: function () { 
        shareend();
    }
}); 


wx.onMenuShareWeibo({
   desc: wxdesc, // 分享描述
  	title: wxtitle, // 分享标题    
    link: wxlink, // 分享链接    
    imgUrl: wximgUrl, // 分享图标  
    success: function () { 
       shareend();
    },
    cancel: function () { 
        shareend();
    }
});


});
wx.error(function(res){   
    shareend(); 
});    