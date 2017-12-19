/**
 * Created by qiqi on 17/11/25.
 */
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");

var music = document.getElementById('music_c');
var audio = document.getElementsByTagName('audio')[0];

//vh,vw自适应问题.
//第二页过渡完后全白解决:

audio.addEventListener('ended',function(event){
    music.setAttribute('class',''); //让唱片磁头移动开

    //this.setAttribute('class','play');
    //this.style.webkitAnimationPlayState ='paused';

},false);

/*//音乐播放暂停控制
music.onclick = function(){
    if(audio.paused){
        audio.play();
        //this.setAttribute('class','play'); //安卓4.0以下不行
        this.style.animationPlayState = 'running';
        //this.style.webkitAnimationPlayState = 'running' //适用于苹果6p以下

    }else{
        audio.pause();
        //this.setAttribute('class','');
        this.style.animationPlayState = 'paused';
        //this.style.webkitAnimationPlayState ='paused';
    }
}*/


//手机的单击事件有300ms的延迟来判断是否是长按.
music.addEventListener('touchstart',function(event){
    if(audio.paused){
        audio.play();
        this.setAttribute('class','play'); //播放唱片旋转动画,安卓4.0以下不行
        //this.style.webkitAnimationPlayState = 'running'; //适用于苹果6p以下
        this.style.animationPlayState = 'running'

    }else{
        audio.pause();
        this.setAttribute('class','');
        //this.style.webkitAnimationPlayState ='paused';
        this.style.animationPlayState = 'paused';
    }
},false);

//点击屏幕开启好运
page1.addEventListener('touchstart',function(event){
    page1.style.display = 'none';

    page2.style.display = 'block';
    page3.style.display = 'block';
    page3.style.top     = '100%';

/*    setTimeout(function(){
        page2.setAttribute('class','page fadeOut');
        page3.setAttribute('class','page fadeIn')
    },5500);*/

},false);



