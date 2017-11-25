/**
 * Created by qiqi on 17/11/25.
 */

var music = document.getElementById('music_c');
var audio = document.getElementsByTagName('audio')[0];

audio.addEventListener('ended',function(event){
    music.setAttribute('class','');
    //this.setAttribute('class','play');
    //this.style.webkitAnimationPlayState ='paused';

},false);
/*

music.onclick = function(){
    if(audio.paused){
        audio.play();
        //this.setAttribute('class','play'); //安卓4.0以下不行
        this.style.animationPlayState = 'running'
        //this.style.webkitAnimationPlayState = 'running' //适用于苹果6p以下

    }else{
        audio.pause();
        //this.setAttribute('class','');
        this.style.animationPlayState = 'paused';
        //this.style.webkitAnimationPlayState ='paused';
    }
}
*/

//手机的单击事件有300ms的延迟来判断是否是长按.
music.addEventListener('touchstart',function(event){
    if(audio.paused){
        audio.play();
        //this.setAttribute('class','play'); //安卓4.0以下不行
        //this.style.webkitAnimationPlayState = 'running' //适用于苹果6p以下
        this.style.animationPlayState = 'running'

    }else{
        audio.pause();
        //this.setAttribute('class','');
        //this.style.webkitAnimationPlayState ='paused';
        this.style.animationPlayState = 'paused';
    }
},false);