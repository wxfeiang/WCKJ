// function ban() {
//   var cont_title = [
   
//     "什么是WEB数据1",
//     "什么是WEB数据2",
//     "什么是WEB数据3",
//     "什么是WEB数据4"
//   ]
//   var cont = [
//     "Web数据抓取（Web scraping，也叫Web数据采集）指的是批量、快速从网站上提取信息的上提取信息的一种计算机软件技上提取信息的一种计算机软件技上提取信息的一种计算机软件技上提取信息的一种计算机软件技一种计算机软件技上提取信息的一种计算机软件技上提取信息的一种计算机软件技上提取信息的一种计算机软件技术。Web数据Web数据抓取指的是批量、快速从网站上提取信息的一种计算机软件技术。Web数据",
//     "第二组数据",
//     "第三组数据",
//     "第四组数据"];
  
//   var num_li = "";
//   var obj_li = $(".ban li");
//   var len = obj_li.length;
//   $("#m").html("0" + 1);
//   $("#cont").html(cont[0])
//   $("#cont_title").html(cont_title[0])



//   $("#d").html("| &nbsp;" + "0" + len);
//   obj_li.each(function() {
//     var index = $(this).index() + 1;
//     num_li += "<li>" + index + "</li>";
//     console.log(index);
//   });
//   $(".click").append(num_li);
//   $(".click li")
//     .first()
//     .addClass("ace");

//   //上一页按钮
//   $(" .prev").click(function () {
    
//     clearInterval(myTime);
//     if (sw == 0) {
//       sw = len+1;
//     }
//     sw -= 1;
//     if (sw == 0) {
//       sw = len;
//     }
//     D;
//     $("#cont").html(cont[sw - 1])
//     $("#cont_title").html(cont_title[sw-1])
//     myShow(sw);
//   });
//   //下一页按钮
//   $(" .next").click(function() {
//     clearInterval(myTime);
//     sw++;
//     $("#m").html("0" + sw);
//     $("#cont").html(cont[sw - 1])
//     $("#cont_title").html(cont_title[sw - 1])
//     if (sw == len) {
//       sw = 0;
//     }
//     myShow(sw);
//     // myTime;
//   });

//   $(".click li").hover(function() {
//     sw = $(".click li").index(this);
//     myShow(sw);
//   });
//   function myShow(i) {
//     $(".click li")
//       .eq(i)
//       .addClass("ace")
//       .siblings()
//       .removeClass("ace");
//     obj_li
//       .eq(i)
//       .stop(true, true)
//       .fadeIn(300)
//       .siblings("li")
//       .fadeOut(300);
//   }
//   var myTime = "";
//   //滑入停止动画，滑出开始动画
//   $(".banner").hover(
//     function() {
//       // if(myTime){
//       clearInterval(myTime);
//       // }
//     },
//     function() {
//       myTime = setInterval(function() {
//         myShow(sw);
//         sw++;
//         $("#m").html("0" + sw);
//         $("#cont").html(cont[sw - 1])
//         $("#cont_title").html(cont_title[sw-1])
//         if (sw == len) {
//           sw = 0;
//         }
//       }, 3000);
//     }
//   );
//   //自动开始
//   var sw = 0;
//   myTime = setInterval(function() {
    
//     sw++;
//     $("#m").html("0" + sw);
//     $("#cont").html(cont[sw - 1])
//     $("#cont_title").html(cont_title[sw - 1])
//     if (sw == len) {
//       sw = 0;
//     }
//     myShow(sw);
//   }, 3000);
// }

// ban();

// 
$(".arc-right .rl-list").each(function () {
  $(this).hover(function () {
    $(this).addClass("active").siblings().removeClass("active")
  },)
})
//  
// var oli = document.getElementById("ban").getElementsByTagName("li");
// var len = oli.length;
// var oli_with = document.getElementById("ban").clientWidth;
// $(".prev").click(function () {
//   console.log(oli_with)

// })
