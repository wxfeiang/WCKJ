// JavaScript Document
window.onresize = window.onload = function(){	
	var deviceWidth = document.documentElement.clientWidth; /*获取设备可视区宽*/
	if(deviceWidth > 1080) deviceWidth = 750;/*最大不超过720，720为设计稿尺寸*/
	document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
	/*
		7.5
		
		是假定html(font-size:100px)时，得到的值
		
		font-size = 320/720 * 100
	 <!--<script>
		 (function () {
			 var html = document.documentElement;
			 var hwidth = html.getBoundingClientRect().width;
			 if( hwidth>750){
			 hwidth = 750;
			 }    //根据设计稿限定
			 console.log( hwidth);
			 html.style.fontSize = hwidth/7.5 + "px";
		 })()// 自执行函数  获取设备宽
	 </script>-->
		
	*/
	
};

