function ban() {
    var num_li = '';
    var obj_li = $('.ban li');
    var len = obj_li.length;
    obj_li.each(function () {
        var index = $(this).index() + 1;
        num_li += '<li>' + index + '</li>'
    })
    $('.click').append(num_li);
    $('.click li').first().addClass('ace')

    //上一页按钮
    $(" .prev").click(function() {
        clearInterval(myTime);
        sw -= 1;
        if(sw == -1) {sw = len - 1;}
        myShow(sw);
    });
    //下一页按钮
    $(" .next").click(function() {
        clearInterval(myTime);
        sw++;
        if(sw == len){sw = 0;}
        myShow(sw);
        // myTime;
    });

    $(".click li").hover(function(){
        sw = $(".click li").index(this);
        myShow(sw);
    });
    function myShow(i){
        $(".click li").eq(i).addClass("ace").siblings().removeClass("ace");
        obj_li.eq(i).stop(true,true).fadeIn(300).siblings("li").fadeOut(300);
    }
    var myTime = '';
    //滑入停止动画，滑出开始动画
    $(".banner").hover(function(){
        // if(myTime){
            clearInterval(myTime);
        // }
    },function(){
        myTime = setInterval(function(){
            myShow(sw);
            sw++;
            if(sw == len){
                sw=0;
            }
        } , 3000);
    });
    //自动开始
    var sw = 0;
    myTime = setInterval(function(){
        myShow(sw);
        sw++;
        if(sw == len){
            sw=0;
        }
    } , 3000);

}

ban()