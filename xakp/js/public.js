// 咨询

$(".phonebox").hover(
  function() {
    $(this)
      .stop()
      .animate({ width: "260px" }, 500);
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
