// 咨询

$(".phonebox").hover(
  function() {
    $(this)
      .stop()
      .animate({ width: "235px" }, 500);
  },
  function() {
    $(this)
      .stop()
      .animate({ width: "66px" }, 500);
  }
);
// 置顶
$(function() {
  $(".way-top").click(function() {
    $("html , body").animate({ scrollTop: 0 }, "slow");
  });
});
// nav
// $(".nvbox  li a").each(function () {
//   $(this).click(function () {
//     $(this).addClass("active");
//   })
// })
//轮播1 
var myswiper = new Swiper('.myswiper1', {
  pagination: '.swiper-pagination',
  //   nextButton: '.swiper-button-next',
  //   prevButton: '.swiper-button-prev',
  paginationClickable: true,

  centeredSlides: true,
  autoplay: 3000,
  autoplayDisableOnInteraction: false
});
