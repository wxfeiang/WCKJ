(function(e) {
    function u(u) {
        function c() {
            function h(e) {
                e.show();
                n.removeClass("loading")
            }
            var t = e(this),
                r = parseInt(n.css("borderLeftWidth")),
                i = s - r * 2,
                u = o - r * 2,
                a = t.width(),
                f = t.height();
            if (a == n.width() && a <= i && f == n.height() && f <= u) {
                h(t);
                return
            }
            if (a > i || f > u) {
                var l = u < f ? u: f,
                    c = i < a ? i: a;
                if (l / f <= c / a) {
                    t.width(a * l / f);
                    t.height(l)
                } else {
                    t.width(c);
                    t.height(f * c / a)
                }
            }
            n.animate({
                    width: t.width(),
                    height: t.height(),
                    marginTop: -(t.height() / 2) - r,
                    marginLeft: -(t.width() / 2) - r
                },
                200,
                function() {
                    h(t)
                })
        }
        if (u) u.preventDefault();
        var a = e(this),
            f = a.attr("href");
        if (!f) return;
        var l = e(new Image).hide();
        e("#zoom .previous, #zoom .next").show();
        if (a.hasClass("zoom")) e("#zoom .previous, #zoom .next").hide();
        if (!r) {
            r = true;
            t.show();
            e("body").addClass("zoomed")
        }
        n.html(l).delay(500).addClass("loading");
        l.load(c).attr("src", f);
        i = a
    }
    function a() {
        var t = i.parents(".swiper-slide").prev();
        if (t.length == 0) t = e(".gallery .swiper-slide:last-child");
        t.find("a").trigger("click")
    }
    function f() {
        var t = i.parents(".swiper-slide").next();
        if (t.length == 0) t = e(".gallery .swiper-slide:first-child");
        t.find("a").trigger("click")
    }
    function l(s) {
        if (s) s.preventDefault();
        r = false;
        i = null;
        t.hide();
        e("body").removeClass("zoomed");
        n.empty()
    }
    function c() {
        s = e(window).width();
        o = e(window).height()
    }
    e("body").append('<div id="zoom"><a class="close"></a><a href="#previous" class="previous"></a><a href="#next" class="next"></a><div class="content loading"></div></div>');
    var t = e("#zoom").hide(),
        n = e("#zoom .content"),
        r = false,
        i = null,
        s = e(window).width(),
        o = e(window).height(); (function() {
        t.on("click",
            function(t) {
                t.preventDefault();
                if (e(t.target).attr("id") == "zoom") l()
            });
        e("#zoom .close").on("click", l);
        e("#zoom .previous").on("click", a);
        e("#zoom .next").on("click", f);
        e(document).keydown(function(e) {
            if (!i) return;
            if (e.which == 38 || e.which == 40) e.preventDefault();
            if (e.which == 27) l();
            if (e.which == 37 && !i.hasClass("zoom")) a();
            if (e.which == 39 && !i.hasClass("zoom")) f()
        });
        //if (e(".gallery li a").length == 1) e(".gallery li a")[0].addClass("zoom");
        e(".zoom, .gallery .swiper-slide a").on("click", u)
    })(); (function() {
        e(window).on("resize", c)
    })(); (function() {
        e(window).on("mousewheel DOMMouseScroll",
            function(e) {
                if (!i) return;
                e.stopPropagation();
                e.preventDefault();
                e.cancelBubble = false
            })
    })()
})(jQuery);