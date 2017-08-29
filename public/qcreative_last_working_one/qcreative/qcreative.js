function getBrowserScrollSize() {
    var b = {
            border: "none",
            height: "200px",
            margin: "0",
            padding: "0",
            width: "200px"
        },
        p = jQuery("<div>").css(jQuery.extend({}, b)),
        b = jQuery("<div>").css(jQuery.extend({
            left: "-1000px",
            overflow: "scroll",
            position: "absolute",
            top: "-1000px"
        }, b)).append(p).appendTo("body").scrollLeft(1E3).scrollTop(1E3),
        p = {
            height: b.offset().top - p.offset().top || 0,
            width: b.offset().left - p.offset().left || 0
        };
    b.remove();
    return p
}
Object.size = function(b) {
    var p = 0,
        k;
    for (k in b) b.hasOwnProperty(k) && p++;
    return p
};
Math.easeIn = function(b, p, k, A) {
    return -k * (b /= A) * (b - 2) + p
};
(function(b) {
    b.fn.descendantOf = function(b) {
        return 0 != this.closest(b).length
    }
})(jQuery);
window.qcreative_document_ready_ed = !1;
window.google_maps_loaded = !1;
window.gooogle_maps_must_init = !1;
window.preseter_options = {
    delay_time_to_autohide: 1E6,
    init_on_document_ready: !1
};
window.scroll_top_object = {
    val: 0
};

function goclone(b) {
    if ("[object Array]" === Object.prototype.toString.call(b)) {
        for (var p = [], k = 0; k < b.length; k++) p[k] = goclone(b[k]);
        return p
    }
    if ("object" == typeof b) {
        p = {};
        for (k in b) b.hasOwnProperty(k) && (p[k] = goclone(b[k]));
        return p
    }
    return b
}

function copy(b, p) {
    var k, A, Ba;
    if ("object" != typeof b || null === b) return b;
    k = new b.constructor;
    for (A in b) b.hasOwnProperty(A) && (Ba = typeof b[A], k[A] = p && "object" == Ba && null !== b[A] ? copy(b[A]) : b[A]);
    return k
}
jQuery(document).ready(function(b) {
    function p(a) {
        clearTimeout(tb);
        tb = setTimeout(function() {
            b(".preseter .the-content").find(".dzstooltip-con").each(function() {
                var a = b(this);
                a.get(0) && a.get(0).api_handle_resize && a.get(0).api_handle_resize()
            })
        }, 300);
        a.stopPropagation()
    }

    function k() {
        if ("page-blogsingle" == m && u) {
            var a = b(window).scrollTop();
            c.hasClass("with-border") && (a = -parseInt(b(".the-content-con").eq(0).css("top"), 10));
            u.css({
                top: "",
                bottom: "",
                position: "",
                width: "",
                left: ""
            });
            if (qa + u.height() + 20 < a + q) {
                var e =
                    a + q - (qa + u.height() + 20),
                    g = u.offset().left,
                    l = u.outerWidth(),
                    d = "25px";
                c.hasClass("with-border");
                e + qa + u.height() > Ca + f.height() + 35 && (f.height(), u.height(), d = a + q - (Ca + f.height()) - 33);
                u.height() >= q ? l < B / 2 && 0 == c.hasClass("sidebar-is-bigger-then-content") && u.css({
                    top: "auto",
                    bottom: d,
                    position: "fixed",
                    width: l + "px",
                    left: g + "px"
                }) : a > u.offset().top && u.css({
                    top: d,
                    position: "fixed",
                    width: l + "px",
                    left: g + "px"
                })
            } else u.css({
                top: 0
            });
            1E3 > B && u.css({
                top: ""
            })
        }
        return !1
    }

    function A() {
        function a(b, a, c) {
            window.scroll_top_object.val -=
                c;
            0 > window.scroll_top_object.val && (window.scroll_top_object.val = 0);
            ra && ra.get(0) && ra.get(0).api_handle_scroll && ra.get(0).api_handle_scroll();
            window.dzs_check_lazyloading_images_inited && window.dzs_check_lazyloading_images();
            setTimeout(function() {}, 100)
        }
        console.info("reinit()");
        var e = String(window.location.href).split("/"),
            e = e[e.length - 1]; - 1 < e.indexOf("?") ? (-1 < e.indexOf("clearcache=on") && (Pa = !0), C = e.split("?")[0]) : C = e;
        "" == C && (C = "");
        setTimeout(function() {
            c.removeClass("q-ajax-transitioning")
        }, 100);
        c.removeClass("qtransitioning");
        c.removeClass("page-is-fullwidth");
        f && (f.find(".sc-final-closer").each(function() {
                var a = b(this);
                "" == a.html() && 1 == a.parent().parent().parent().parent().children().length && a.parent().parent().parent().parent().parent().remove()
            }), f.find(".delete-prev-cst").each(function() {
                var a = b(this);
                a.prev().hasClass("the-content-sheet-text") && a.prev().hide()
            }), f.find(".wpb_wrapper").each(function() {
                var a = b(this);
                "" == a.html() && (console.info(a.parent().parent()), a.parent().parent().hasClass("vc_col-sm-12") && a.parent().parent().parent().remove())
            }),
            f.find(".vc_empty_space").each(function() {
                var a = b(this);
                a.parent().parent().parent().parent().hasClass("vc_row") && a.parent().parent().parent().parent().addClass("no-margin-bottom")
            }));
        "on" != window.qcreative_options.enable_native_scrollbar && "on" !== get_query_arg(window.location.href, "disable_scrollbar") && window.dzsscr_init ? (e = {
                type: "scrollTop",
                settings_skin: "skin_apple",
                enable_easing: "on",
                settings_autoresizescrollbar: "on",
                settings_chrome_multiplier: .12,
                settings_firefox_multiplier: -3,
                settings_safari_multiplier: .25,
                settings_ie_multiplier: .8,
                settings_refresh: 700
            }, c.hasClass("with-border") && (e.replace_window_object = b(".main-container > .the-content-con").eq(0), e.settings_scrollTop_height_indicator = b(".main-container > .the-content-con").eq(0), e.settings_comHeight_surplus = b(".main-container > .the-content-con").eq(0).offset().top, e.settings_scrollTop_animate_top_instead_of_scroll = "on"), window.dzsscr_init(b(".main-container"), e), c.hasClass("with-border") && b(".main-container").get(0).api_set_action_handle_wheel_end(a),
            h.get(0) && h.get(0).api_set_action_handle_frame && h.get(0).api_set_action_handle_frame(k)) : b("html").addClass("has-native-scrollbar");
        is_touch_device() && b("html").addClass("has-native-scrollbar");
        Qa && (window.FB && FB.XFBML && FB.XFBML.parse && FB.XFBML.parse(), window.twttr && window.twttr.widgets && window.twttr.widgets.load && twttr.widgets.load());
        h.find(".the-content-con").eq(0).hasClass("fullit") && (ma = !0);
        if ("page-gallery-w-thumbs" == m || "page-homepage" == m) ma = !0;
        Ra = !1;
        ma && (b("body").addClass("page-is-fullwidth"),
            c.hasClass("menu-type-9") || c.hasClass("menu-type-10") || c.hasClass("menu-type-13") || c.hasClass("menu-type-14") || c.hasClass("menu-type-15") || c.hasClass("menu-type-16") || c.hasClass("menu-type-17") || c.hasClass("menu-type-18")) && (Ra = !0, Sa = b(".fullbg").eq(0), ub = parseInt(Sa.css("top"), 10));
        e = '<select class="dzs-style-me-from-q skin-justvisible " name="the_layout"> <option value="default">default</option> <option value="random">random</option> </select>';
        "custom" == qcreative_options.responsive_menu_type &&
            (e = "");
        var g = "";
        "custom" == qcreative_options.responsive_menu_type && (e = "", g = '<div class="custom-responsive-menu"><div class="close-responsive-con"><i class="fa fa-times"></i></div><div class="custom-menu-con"><ul class="custom-menu"></ul></div></div>');
        if (f) {
            if (0 == f.parent().children(".qcreative--520-nav-con").length && (f.parent().prepend('<div class="qcreative--520-nav-con "> <div class="dzs-select-wrapper skin-justvisible "> <div class="dzs-select-wrapper-head"> <div class="nav-wrapper-head"><i class="fa fa-bars"></i></div> </div> ' +
                    e + " </div>" + g + " </div>"), W = f.parent().children(".qcreative--520-nav-con").eq(0)), g = f.find(".responsive-featured-media-con").eq(0), 0 < g.length && (0 == g.children().length && 0 < f.find(".responsive-featured-media-con--target").length && (g.append(f.find(".responsive-featured-media-con--target").html()), f.find(".responsive-featured-media-con--target").eq(0).hasClass("advancedscroller-con") && (g.children(".advancedscroller").removeClass("skin-nonav").addClass("skin-qcre").height(400), g.children(".advancedscroller").attr("data-options",
                    '{ settings_mode: "onlyoneitem",design_arrowsize: "0" ,settings_swipe: "on" ,settings_autoHeight: "on",settings_autoHeight_proportional: "on",settings_swipeOnDesktopsToo: "on" ,settings_slideshow: "on" ,settings_slideshowTime: "150" }'))), 0 == g.children().length && 0 == f.find(".responsive-featured-media-con--target").length)) {
                var l = b(".main-bg-div").eq(0).css("background-image"),
                    e = '<img src="' + window.qcreative_options.images_arr[0] + '" class="fullwidth"/>';
                g.append(e)
            }
        } else "page-homepage" == m && 0 == b(".the-content-con").eq(0).children(".qcreative--520-nav-con").length &&
            (b(".the-content-con").eq(0).prepend('<div class="qcreative--520-nav-con "> <div class="dzs-select-wrapper skin-justvisible "> <div class="dzs-select-wrapper-head"> <div class="nav-wrapper-head"><i class="fa fa-bars"></i></div> </div> ' + e + " </div>" + g + "</div>"), W = b(".the-content-con").eq(0).children(".qcreative--520-nav-con").eq(0));
        0 == W.children(".logo-con").length && W.prepend(r.children(".logo-con").clone());
        var d = W.find(".dzs-select-wrapper select").eq(0);
        0 < W.children(".custom-responsive-menu").length &&
            (sa = !0, d = W.children(".custom-responsive-menu").find(".custom-menu").eq(0));
        d.html("");
        v.children("li").each(function() {
            var a = b(this),
                c = "";
            0 == sa && (c = "<option", a.hasClass("current-menu-item") && (c += " selected"), c += ' value="' + a.children("a").attr("href") + '">' + a.children("a").eq(0).html() + "</option>", d.append(c), 0 < a.children("ul").length && a.children("ul").eq(0).children("li").each(function() {
                var a = b(this);
                d.append('<option value="' + a.children("a").attr("href") + '"> - ' + a.children("a").eq(0).html() + "</option>");
                a.children("ul").eq(0).children("li").each(function() {
                    var a = b(this);
                    d.append('<option value="' + a.children("a").attr("href") + '"> - - ' + a.children("a").eq(0).html() + "</option>")
                })
            }))
        });
        sa && (d.append(v.html()), d.find("li").each(function() {
            var a = b(this);
            0 < a.children("ul").length && (a.addClass("has-children"), a.prepend('<i class="submenu-toggler fa fa-angle-right"></i>'))
        }));
        W.find("select").eq(0).unbind("change", vb);
        W.find("select").eq(0).bind("change", vb);
        if (c.hasClass("menu-type-3") || c.hasClass("menu-type-4") ||
            c.hasClass("menu-type-5") || c.hasClass("menu-type-6")) D = 230;
        if (c.hasClass("menu-type-7") || c.hasClass("menu-type-8") || c.hasClass("menu-type-11")) D = 260;
        c.hasClass("menu-type-12") && (D = 170, Ta = 200);
        if (c.hasClass("page-portfolio") || c.hasClass("page-blogsingle")) fa = Ua - 60;
        if (c.hasClass("menu-type-5") || c.hasClass("menu-type-6") || c.hasClass("menu-type-7") || c.hasClass("menu-type-8") || c.hasClass("menu-type-11")) L = 30;
        if (c.hasClass("menu-type-9") || c.hasClass("menu-type-10") || c.hasClass("menu-type-13") || c.hasClass("menu-type-14") ||
            c.hasClass("menu-type-15") || c.hasClass("menu-type-16") || c.hasClass("menu-type-17") || c.hasClass("menu-type-18")) {
            L = Ta = D = 0;
            Va = 135;
            Wa = 40;
            Xa = 20;
            if (c.hasClass("menu-type-13") || c.hasClass("menu-type-14") || c.hasClass("menu-type-15") || c.hasClass("menu-type-16") || c.hasClass("menu-type-17") || c.hasClass("menu-type-18")) Va = 100;
            !f || 0 != f.parent().prev().length && 0 != f.parent().prev().hasClass("q-creative--nav-con") || 0 != h.children().eq(0).hasClass("qcreative--nav-con") || h.prepend(b(".qcreative--nav-con").eq(0))
        }
        if (c.hasClass("menu-type-11") ||
            c.hasClass("menu-type-12")) r.append('<i class="fa fa-bars menu-toggler"></i>'), h.append('<div class="menu-toggler-target "><div class="q-close-btn menu-closer"><svg version="1.1" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="58.42px" height="58.96px" viewBox="0 0 58.42 58.96" xml:space="preserve"> <polygon fill-rule="evenodd" fill="#FFFFFF" points="57,0 29.21,27.78 1.42,0 0,1.42 27.78,29.21 0,57 1.42,58.42 29.21,30.64 57,58.42 58.42,57 30.63,29.21 58.42,1.42 "></polygon> </svg></div></div>'),
            h.find(".menu-toggler-target").eq(0).append(r.find(".the-actual-nav").eq(0));
        c.removeClass("page-title-no-antetitle");
        !c.hasClass("page-title-style-1") || -1 < String(c.find("h1").eq(0).html()).indexOf("<br>") || c.addClass("page-title-no-antetitle");
        x = null;
        b(".social-icon").each(function() {
            var a = window.location.href,
                c = b(this);
            c.attr("onclick", String(c.attr("onclick")).replace("{{replaceurl}}", a))
        });
        0 < b(".sidebar-main").length ? (u = b(".sidebar-main").eq(0), qa = u.offset().top + X, Ca = f.offset().top + X) : (u = null,
            Ca = qa = 0);
        var Y = 0;
        b(".translucent-bg").each(function() {
            b(this);
            Y++
        });
        var q = "#eeeeee",
            Z = "#333333";
        b(".qcre-progress-circle").each(function() {
            var a = b(this);
            0 < b(".the-content-sheet.the-content-sheet-dark").find(a).length && (Z = "#ffffff", q = "#333333");
            a.html(' <div class="dzs-progress-bar skin-prev9copy" style="width:100%; max-width: 150px; height:auto;margin-top:0px;margin-left:auto;margin-right:auto;margin-bottom:0px;" data-animprops=\'{"animation_time":"' + a.attr("data-animation_time") + '","maxperc":"' +
                a.attr("data-maxperc") + '","maxnr":"' + a.attr("data-maxnr") + '","initon":"scroll"}\'><canvas class="progress-bars-item progress-bars-item--circ" data-type="circ" data-animprops=\'{"height":"{{width}}","circle_outside_fill":"' + q + '","circle_inside_fill":"transparent","circle_outer_width":"1","circle_line_width":"10"}\' style="position: absolute; width: calc(100% + 8px); top: -4px; left: -4px; right: auto; bottom: auto; margin: 0px; color: rgb(255, 255, 255); border-radius: 0px; border: 0px; opacity: 1; font-size: 12px; background-color: transparent;" width="302" height="302"></canvas><canvas class="progress-bars-item progress-bars-item--circ" data-type="circ" data-animprops=\'{"height":"{{width}}","circle_outside_fill":"' +
                Z + '","circle_inside_fill":"transparent","circle_outer_width":"{{perc-decimal}}","circle_line_width":"2"}\' style="position: relative; width: 100%; top: 0px; left: 0px; right: auto; bottom: auto; margin: 0px; color: rgb(255, 255, 255); border-radius: 0px; border: 0px; opacity: 1; font-size: 12px; background-color: transparent;" width="298" height="298"></canvas><div class="progress-bars-item progress-bars-item--text" data-type="text" data-animprops=\'{"left":"{{center}}"}\' style="position: absolute; top: 54px; width: 100%; height: auto; right: auto; bottom: auto; margin: 0px; color: rgb(33, 33, 33); border-radius: 0px; border: 0px; opacity: 1; font-size: 40px; background-color: transparent;"><div style="text-align: center; font-family: Lato, arial, serif; font-weight: 300;" data-mce-style="text-align: center;">{{perc}}</div></div></div>');
            a.addClass("treated")
        });
        b(".qcre-progress-line").each(function() {
            var a = b(this);
            0 < b(".the-content-sheet.the-content-sheet-dark").find(a).length && (Z = "#ffffff", q = "#333333");
            a.html(' <div class="dzs-progress-bar auto-init skin-prev2copy" style="width:100%;height:auto;margin-top:0px;margin-left:0px;margin-right:0px;margin-bottom:0px;" data-animprops=\'{"animation_time":"' + a.attr("data-animation_time") + '","maxperc":"' + a.attr("data-maxperc") + '","maxnr":"' + a.attr("data-maxnr") + '","initon":"scroll"}\'><div class="progress-bars-item progress-bars-item--text" data-type="text" data-animprops=\'{}\' style="position: relative; width: 100%; height: auto; top: 0px; left: 0px; right: auto; bottom: auto; margin: 0px; color: rgb(33, 33, 33); border-radius: 0px; border: 0px; opacity: 1; font-size: 14px; background-color: transparent;">' +
                a.attr("data-title") + '</div><div class="progress-bars-item progress-bars-item--rect" data-type="rect" data-animprops=\'{"width":"{{perc}}%"}\' style="position: relative; height: 2px; top: 0px; left: 0px; right: auto; bottom: auto; margin: 11px 0px 0px; color: rgb(60, 1, 1); border-radius: 0px; border: 0px; opacity: 1; font-size: 12px; background-color: rgb(34, 34, 34);"></div><div class="progress-bars-item progress-bars-item--text" data-type="text" data-animprops=\'{"left":"{{perc}}"}\' style="position: absolute; width: 0px; height: auto; top: 0px; right: auto; bottom: auto; margin: 0px 0px 0px 0px; color: #999999; border-radius: 0px; border: 0px; font-size: 14px; background-color: transparent;"><div style="text-align: right; position:absolute; right:0; white-space:nowrap; " data-mce-style="text-align: left;">{{perc}}</div></div><div class="progress-bars-item progress-bars-item--rect" data-type="rect" data-animprops=\'{}\' style="position: absolute; width: 100%; height: 10px; top: 23px; left: 0px; right: auto; bottom: auto; margin: 0px; color: rgb(255, 255, 255); border-radius: 0px; border: 0px; opacity: 1; font-size: 12px; background-color: ' +
                q + ';"></div><div class="progress-bars-item progress-bars-item--rect" data-type="rect" data-animprops=\'{"width":"{{perc}}"}\' style="position: relative; height: 2px; top: auto; left: 0px; right: auto; bottom: 0px; margin: -5px 0px 0px; color: rgb(255, 255, 255); border-radius: 0px; border: 0px; opacity: 1; font-size: 12px; background-color: rgb(34, 34, 34);"></div></div>');
            a.addClass("treated")
        });
        b(".qcre-progress-text").each(function() {
            var a = b(this);
            a.html('<div class="dzs-progress-bar auto-init skin-bignumber" style="width:100%;height:auto;margin-top:0px;margin-left:0px;margin-right:0px;margin-bottom:0px;" data-animprops=\'{"animation_time":"' +
                a.attr("data-animation_time") + '","maxperc":"' + a.attr("data-maxperc") + '","maxnr":"' + a.attr("data-maxnr") + '","initon":"scroll"}\'><div class="progress-bars-item progress-bars-item--text" data-type="text" data-animprops=\'{}\' style="position: relative; width: 100%; height: auto; top: 0px; left: 0px; right: auto; bottom: auto; margin: 0px; color: rgb(255, 255, 255); border-radius: 0px; border: 0px; opacity: 1; font-size: 50px; background-color: transparent;"><div style="text-align: center;" data-mce-style="text-align: center;"><span style="color: rgb(255, 255, 255); font-family: \'Open Sans\', Helvetica, Arial, sans-serif; font-size: 50px; line-height: 20px; background-color: transparent;" data-mce-style="color: #ffffff; font-family: \'Open Sans\', Helvetica, Arial, sans-serif; font-size: 13px; line-height: 20px; background-color: #313131;">{{percmaxnr}}</span></div></div></div>');
            a.addClass("treated")
        });
        b(".qcre-progress-rect").each(function() {
            var a = b(this);
            if (!a.hasClass("treated")) {
                var c = "rgb(34,34,34)",
                    e = "1";
                0 < b(".the-content-sheet.the-content-sheet-dark").find(a).length && (c = "#ffffff", e = "0.25");
                if (0 == a.children('div[class*="icon-"]').length) a.html('<div class="dzs-progress-bar auto-init skin-prev3copy" style="width:100%;height:auto;margin-top:0px;margin-left:0px;margin-right:0px;margin-bottom:0px;" data-animprops=\'{"animation_time":"' + a.attr("data-animation_time") + '","maxperc":"' +
                    a.attr("data-maxperc") + '","maxnr":"' + a.attr("data-maxnr") + '","initon":"scroll"}\'><div class="progress-bars-item progress-bars-item--text" data-type="text" data-animprops=\'{}\' style="position: relative; width: 100%; height: auto; top: 0px; left: 0px; right: auto; bottom: auto; margin: 0px 0px 5px 0px; padding-right:20px; color: ' + c + '; border-radius: 0px; border: 0px; opacity: 1; font-family: Open Sans, serif; font-weight: 800;font-size: 70px; line-height: 1; background-color: transparent;"><div style="text-align: center;" data-mce-style="text-align: right;"><span>{{percmaxnr}}</span></div></div><div class="progress-bars-item progress-bars-item--text" data-type="text" data-animprops=\'{}\' style="position: relative; width: 100%; height: auto; top: 0px; left: 0px; right: auto; bottom: auto; margin: 0px 0px 0px 0px; padding-right:20px; padding-bottom:20px; color: ' +
                    c + '; border-radius: 0px; border: 0px; opacity: 1; font-size: 14px; background-color: transparent;"><div style="text-align: center; font-family: Lato,serif; font-weight:bold;" data-mce-style="text-align: center;">' + a.attr("data-text") + '</div></div><div class="progress-bars-item progress-bars-item--rect" data-type="rect" data-animprops=\'{}\' style="position: absolute; width: 100%; height: 1px; top: auto; left: 0px; right: auto; bottom: 0px; margin: 0px; color: rgb(255, 255, 255); border-radius: 0px; border: 0px; opacity: ' +
                    e + '; font-size: 12px; background-color: rgb(205, 205, 205);"></div> <div class="progress-bars-item progress-bars-item--rect" data-type="rect" data-animprops=\'{}\' style="position: absolute; width: 1px; height: 120px; top: auto; left: auto; right: 0px; bottom: 0px; margin: 0px; color: rgb(255, 255, 255); border-radius: 0px; border: 0px; opacity: ' + e + '; font-size: 12px; background-color: rgb(205, 205, 205);"></div> </div>');
                else {
                    var g = a.children('div[class*="icon-"]').eq(0).get(0).outerHTML;
                    a.html('<div class="dzs-progress-bar auto-init skin-prev3copy" style="width:100%;height:180px;margin-top:0px;margin-left:0px;margin-right:0px;margin-bottom:0px;" data-animprops=\'{"animation_time":"' +
                        a.attr("data-animation_time") + '","maxperc":"' + a.attr("data-maxperc") + '","maxnr":"' + a.attr("data-maxnr") + '","initon":"scroll"}\'><div class="progress-bars-item progress-bars-item--text" data-type="text" data-animprops=\'{}\' style="position: relative; width: 100%; height: auto; top: 0px; left: 0px; right: auto; bottom: auto; margin: 0px 0px 5px 0px; padding-right:20px;  padding-top: 71px;color: ' + c + '; border-radius: 0px; border: 0px; opacity: 1; font-family: Open Sans, serif; font-weight: 800;font-size: 70px; line-height: 1; background-color: transparent;"><div style="text-align: right;" data-mce-style="text-align: right;"><span>{{percmaxnr}}</span></div></div><div class="progress-bars-item progress-bars-item--text" data-type="text" data-animprops=\'{}\' style="position: relative; width: 100%; height: auto; top: 0px; left: 0px; right: auto; bottom: auto; margin: 0px 0px 0px 0px; padding-right:20px; padding-bottom:20px; color:' +
                        c + '; border-radius: 0px; border: 0px; opacity: 1; font-size: 14px; background-color: transparent;"><div style="text-align: right; font-family: Lato,serif; font-weight:bold;" data-mce-style="text-align: right;">' + a.attr("data-text") + '</div></div><div class="progress-bars-item progress-bars-item--rect" data-type="rect" data-animprops=\'{}\' style="position: absolute; width: 100%; height: 1px; top: auto; left: 0px; right: auto; bottom: 0px; margin: 0px; color: rgb(255, 255, 255); border-radius: 0px; border: 0px; opacity: ' +
                        e + '; font-size: 12px; background-color: rgb(205, 205, 205);"></div> <div class="progress-bars-item progress-bars-item--rect" data-type="rect" data-animprops=\'{}\' style="position: absolute; width: 1px; height: 180px; top: auto; left: auto; right: 0px; bottom: 0px; margin: 0px; color: rgb(255, 255, 255); border-radius: 0px; border: 0px; opacity: ' + e + '; font-size: 12px; background-color: rgb(205, 205, 205);"></div> </div>');
                    a.children(".dzs-progress-bar").prepend(g)
                }
                a.addClass("treated")
            }
        });
        window.dzsprb_init &&
            window.dzsprb_init(".dzs-progress-bar", {
                init_each: !0
            });
        b(".translucent-canvas").each(function() {
            b(this)
        });
        H = [];
        0 < b(".translucent-canvas.for-parallaxer").length && b(".translucent-canvas.for-parallaxer").each(function() {
            var a = b(this);
            H.push(a)
        });
        "page-gallery-w-thumbs" == t && (b("#as-gallery-w-thumbs").each(function() {
                var a = b(this),
                    c = 0;
                a.find(".items").eq(0).children().each(function() {
                    var a = b(this);
                    if (!a.hasClass("processed")) {
                        if (a.attr("data-gallery-thumbnail")) {
                            var e = '<li class="thumb';
                            0 == c && (e += " curr-thumb");
                            e += '"  style=";"><div class="bgimage"  style="background-image: url(' + a.attr("data-gallery-thumbnail") + ')"></div></li>';
                            b(".gallery-thumbs-con .thumbs-list").eq(0).append(e);
                            c++
                        }
                        "image" == a.attr("data-type") && a.addClass("needs-loading");
                        "video" == a.attr("data-type") && (e = '<div class="wipeout-wrapper"><div class="wipeout-wrapper-inner"><div class="vplayer-tobe " ', a.attr("data-width-for-gallery") && (e += ' data-width-for-gallery="' + a.attr("data-width-for-gallery") + '"'), a.attr("data-height-for-gallery") &&
                            (e += ' data-height-for-gallery="' + a.attr("data-height-for-gallery") + '"'), e += ' data-src="' + a.attr("data-source") + '" >', 0 < a.children(".cover-image").length && (e += a.children(".cover-image").eq(0).outerHTML(), a.children(".cover-image").remove()), e += "</div></div></div>", a.addClass("needs-loading"), a.attr("data-source", ""), a.append(e), dzsvp_init(a.find(".vplayer-tobe"), qcreative_options.video_player_settings));
                        a.addClass("processed")
                    }
                });
                dzsas_init(a, {
                    settings_mode: "onlyoneitem",
                    design_arrowsize: "0",
                    settings_swipe: "off",
                    settings_swipeOnDesktopsToo: "off",
                    settings_slideshow: "on",
                    settings_slideshowTime: "300000",
                    settings_transition: "wipeoutandfade",
                    settings_lazyLoading: "on",
                    settings_autoHeight: "on",
                    settings_centeritems: !1,
                    design_bulletspos: "none",
                    settings_wait_for_do_transition_call: "on",
                    settings_transition_only_when_loaded: "on",
                    mode_onlyone_autoplay_videos: window.qcreative_options.gallery_w_thumbs_autoplay_videos,
                    mode_onlyone_reset_videos_to_0: "on"
                })
            }), document.getElementById("as-gallery-w-thumbs") && document.getElementById("as-gallery-w-thumbs").api_set_action_call_on_gotoItem &&
            document.getElementById("as-gallery-w-thumbs").api_set_action_call_on_gotoItem(Ya));
        h.get(0) && h.get(0).api_toggle_resize && (h.get(0).api_toggle_resize(), setTimeout(function() {
            h.get(0).api_toggle_resize()
        }, 900));
        b(".zfolio-portfolio-classic a.zfolio-item--inner, .portfolio-link--toback a, a.portfolio-link--title").unbind("click", da);
        b(".zfolio-portfolio-classic a.zfolio-item--inner, .portfolio-link--toback a, a.portfolio-link--title").bind("click", da);
        b("a.ajax-link").unbind("click", da);
        b("a.ajax-link").bind("click",
            da);
        window.dzsvp_init && b('.vplayer-tobe.auto-init-from-q:not(".zfolio-portfolio-expandable .vplayer-tobe.auto-init-from-q")').each(function() {
            var a = b(this),
                c = "0.562";
            a.attr("data-responsive_ratio") && (c = a.attr("data-responsive_ratio"));
            a.parent().hasClass("slider-con") && (c = "");
            dzsvp_init(a, {
                settings_youtube_usecustomskin: "off",
                init_each: !0,
                controls_out_opacity: "1",
                controls_normal_opacity: "1",
                settings_video_overlay: "on",
                design_skin: "skin_reborn",
                cueVideo: "off",
                autoplay: "off",
                responsive_ratio: c
            })
        });
        window.dzstaa_init && (dzstaa_init(".dzs-tabs.auto-init-from-q-for-tabs", {
            design_tabsposition: "top",
            design_transition: "fade",
            design_tabswidth: "default",
            toggle_breakpoint: "300",
            settings_appendWholeContent: !1,
            toggle_type: "accordion"
        }), dzstaa_init(".dzs-tabs.auto-init-from-q-for-accordions", {
            design_tabsposition: "top",
            design_transition: "fade",
            design_tabswidth: "default",
            toggle_breakpoint: "4000",
            settings_appendWholeContent: !1,
            toggle_type: "accordion"
        }));
        window.dzsap_init && (e = {
            disable_volume: "off",
            disable_scrub: "default",
            design_skin: "skin-redlights",
            skinwave_dynamicwaves: "off",
            skinwave_enableSpectrum: "off",
            settings_backup_type: "full",
            skinwave_enableReflect: "on",
            skinwave_comments_enable: "on",
            skinwave_timer_static: "off",
            disable_player_navigation: "off",
            skinwave_mode: "normal",
            default_volume: "last",
            skinwave_comments_retrievefromajax: "off",
            soundcloud_apikey: "be48604d903aebd628b5bac968ffd14d",
            embed_code: "You can enable embed button for your viewers to embed on their site, the code will auto generate. &lt;iframe src=&quot;http://yoursite.com/bridge.php?type=gallery&amp;id=gal1&quot; &gt;&lt;/iframe&gt;",
            init_each: !0,
            settings_php_handler: "",
            action_audio_play2: Ba
        }, window.dzsap_init(".audioplayer-tobe.auto-init-from-q", e), window.dzsag_init && window.dzsag_init(".audiogallery", {
            transition: "fade",
            cueFirstMedia: "off",
            autoplay: "on",
            autoplayNext: "on",
            design_menu_position: "bottom",
            settings_ap: e,
            embedded: "off",
            init_each: !0,
            enable_easing: "on",
            design_menu_height: 200,
            settings_mode: "mode-showall",
            design_menu_state: "open",
            design_menu_show_player_state_button: "on"
        }));
        window.dzsas_init && (dzsas_init(".advancedscroller.auto-init-from-q.clients-slider", {
            init_each: !0,
            settings_swipe: "on",
            settings_swipeOnDesktopsToo: "on",
            design_itemwidth: "16.666667%",
            responsive_720_design_itemwidth: "50%"
        }), b(".advancedscroller.skin-qcre.auto-init-from-q,.advancedscroller.skin-trumpet.auto-init-from-q").each(function() {
            var a = b(this);
            a.hasClass("inited") ? a.get(0).api_handleResize() : dzsas_init(a, {
                init_each: !0
            })
        }), dzsas_init(".advancedscroller.testimonial-ascroller", {
            settings_mode: "onlyoneitem",
            design_arrowsize: "0",
            settings_swipe: "on",
            settings_swipeOnDesktopsToo: "on",
            settings_slideshow: "on",
            settings_slideshowTime: "300",
            settings_transition: "slide",
            settings_lazyLoading: "on",
            settings_autoHeight: "off",
            settings_centeritems: !1,
            design_bulletspos: "bottom",
            settings_wait_for_do_transition_call: "off",
            settings_transition_only_when_loaded: "off"
        }), dzsas_init(".advancedscroller.skin-whitefish.auto-init-from-q", {
            init_each: !0,
            settings_swipe: "on",
            settings_swipeOnDesktopsToo: "on"
        }), b('.advancedscroller.skin-nonav.auto-init-from-q:not(".inited")').each(function() {
            var a = b(this),
                c = {
                    init_each: !0,
                    settings_swipe: "on",
                    settings_swipeOnDesktopsToo: "on"
                };
            if (a.attr("data-options")) {
                l = "window.dzsas_self_options = " + a.attr("data-options");
                try {
                    eval(l)
                } catch (e) {
                    console.error(e)
                }
                c = b.extend({}, window.dzsas_self_options);
                window.dzsas_self_options = b.extend({}, {})
            }
            0 == a.hasClass("inited") && dzsas_init(a, c)
        }), setTimeout(function() {
            b(".testimonial-ascroller").each(function() {
                var a = b(this);
                a.get(0) && a.get(0).api_force_resize && a.get(0).api_force_resize()
            })
        }, 100));
        window.dzszfl_init && dzszfl_init(".zfolio.auto-init-from-q", {
            init_each: !0
        });
        window.dzssel_init && dzssel_init("select.dzs-style-me-from-q", {
            init_each: !0
        });
        clearInterval(wb);
        (xb = Number(window.qcreative_options.bg_slideshow_time)) && (wb = setInterval(function() {
            yb()
        }, 1E3 * xb))
    }

    function Ba(a) {
        b(".audioplayer").each(function() {
            var c = b(this);
            c.get(0) != a.get(0) && c.get(0).api_seek_to_perc && c.get(0).api_seek_to_perc(0)
        })
    }

    function Ya(a, e, g) {
        var l = {
            arg: 0
        };
        g && (l = b.extend(l, g));
        a.hasClass("transition-wipeoutandfade") ? (c.addClass("page-gallery-w-thumbs-transitioning-content"),
            setTimeout(function() {
                Za = e.data("naturalWidth");
                zb = e.data("naturalHeight");
                if (!Za) return setTimeout(function() {
                    e.find("img").length && e.find("img").get(0).naturalWidth && (e.data("naturalWidth", e.find("img").get(0).naturalWidth), e.data("naturalHeight", e.find("img").get(0).naturalHeight));
                    Ya(a, e, l)
                }, 150), !1;
                $a({
                    this_is_new_item: !0
                });
                setTimeout(function() {
                    c.addClass("page-gallery-w-thumbs-transition-on-content");
                    a.get(0).api_do_transition({
                        force_width: N - 40,
                        force_height: aa - 40,
                        arg: l.arg
                    });
                    setTimeout(function() {},
                        2E4);
                    c.removeClass("page-gallery-w-thumbs-transitioning-content")
                }, 900)
            }, 700)) : a.get(0).api_do_transition()
    }

    function Tb(b) {
        if (b.state && b.state.href) {
            da(null, {
                force_href: b.state.href,
                force_no_ajax: "on"
            });
            if (0 < Object.size(b.state.curr_menu_items)) {
                v.find(".current-menu-item").removeClass("current-menu-item");
                for (var c = 0; c < Object.size(b.state.curr_menu_items); c++) v.find("li").eq(b.state.curr_menu_items[c]).addClass("current-menu-item")
            }
            return !1
        }
    }

    function Ab(b) {
        this && (this.ref_t && this.ref_t.addClass("img-loaded"),
            this.removeEventListener && this.removeEventListener("load", Ab))
    }

    function $a(a) {
        var e = D;
        a = Ta;
        var g = Va;
        "none" == r.css("display") && (a = g = e = 0);
        var l = 0,
            d = Number(Za) + 40,
            h = Number(zb) + 40,
            m = B - e - 40,
            Z = q - 140 - 40 - g;
        b(".the-content-bg-placeholder").eq(0).outerHeight(0);
        1E3 >= B && (l = f.parent().height(), m = B - 40, Z = q - l, 400 > Z ? (Z = 400, c.addClass("remove_overflow")) : c.removeClass("remove_overflow"), 0 == f.prev().hasClass("the-content-bg") && f.before('<div class="the-content-bg"></div>'));
        m / Z > d / h ? (N = Z / h * d, aa = Z) : (N = m, aa = m / d * h);
        N >
            d && (N = d, aa = h / d * N);
        var Da = b(".the-content-con > .the-content").eq(0),
            Sb = e + 20 + (B - a - e - 40) / 2 - N / 2,
            n = 20 + (q - 140 - g - 40) / 2 - aa / 2;
        1E3 >= B && (n = l, b(".the-content-bg").css({
            width: B + "px",
            height: aa + "px",
            top: l + "px"
        }), b(".the-content-bg").eq(0).offset().top + b(".the-content-bg").eq(0).outerHeight() < q && b(".the-content-bg").eq(0).outerHeight(q - b(".the-content-bg").eq(0).offset().top), b(".the-content-bg-placeholder").eq(0).outerHeight(b(".the-content-bg").eq(0).outerHeight()));
        setTimeout(function() {
            Da.outerWidth(N);
            Da.eq(0).css({
                left: Sb +
                    "px"
            });
            Da.outerHeight(aa);
            Da.eq(0).css({
                top: n + "px"
            })
        }, 50);
        "page-gallery-w-thumbs" == t && (document.getElementById("as-gallery-w-thumbs") && document.getElementById("as-gallery-w-thumbs").api_set_action_call_on_gotoItem && document.getElementById("as-gallery-w-thumbs").api_set_action_call_on_gotoItem(Ya), setTimeout(function() {
            f.find(".advancedscroller").eq(0).find(".thumbsCon").eq(0).height(aa - 40);
            f.find(".advancedscroller").eq(0).find(".thumbsCon").eq(0).width(N - 40);
            f.find(".advancedscroller").eq(0).find(".currItem").eq(0).height(aa -
                40);
            f.find(".advancedscroller").eq(0).find(".currItem").eq(0).width(N - 40);
            f.find(".advancedscroller").eq(0).find(".currItem > img").eq(0).css({
                width: N - 40,
                height: aa - 40
            }, {
                queue: !1,
                duration: 400
            });
            f.addClass("active")
        }, 1E3), 0 < b(".gallery-thumbs-con").length && (x = b(".gallery-thumbs-con").eq(0), e = 0, l = B - (D + L), x.find("li.thumb:not(.inited)").each(function() {
            var a = b(this);
            a.addClass("inited");
            if (a.children().eq(0).hasClass("bgimage")) {
                var c = a.children().eq(0).css("background-image"),
                    c = c.replace("url(", ""),
                    c = c.replace(")", ""),
                    c = c.replace(/"/g, ""),
                    e = new Image;
                e.ref_t = a;
                e.addEventListener && e.addEventListener("load", Ab);
                e.src = c
            } else a.addClass("img-loaded");
            a.bind("click", z)
        }), e = 100 * x.find("li.thumb").length + 40, x.find(".thumbs-list").width(e - 40), g = 0, e > l && (e = l, g += 20), l = 0, a && (l = 20), d = Xa, h = D + L + ((B - (D + 2 * L)) / 2 - e / 2), h < D + L && (h = D + L), 0 < h && (d = 0), x.find(".thumbs-list-con").eq(0).width(e + g - Wa - a - l - d), x.css({
            left: h + "px"
        }), a ? x.css({
            width: "calc(100% - " + (a + 20 + D) + "px)"
        }) : x.css({
            width: ""
        }), 1E3 >= B && (x.css({
                left: 0,
                width: "100%"
            }),
            x.find(".thumbs-list-con").css("width", "100%")), 0 == is_touch_device() ? (x.find(".thumbs-list-con").eq(0).unbind("mousemove"), x.find(".thumbs-list-con").eq(0).bind("mousemove", z)) : x.find(".thumbs-list-con").css("overflow", "auto")), f && 0 == f.parent().css("opacity") && x && ja(x.find(".translucent-canvas").eq(0)))
    }

    function da(a, e) {
        console.info("click_menu_anchor()", e);
        var g = b(this),
            l = g.attr("href"),
            d = null,
            f = {
                _t: null,
                force_href: "",
                force_no_ajax: "off"
            };
        e && (f = b.extend(f, e));
        f._t && (g = f._t);
        g && g.get(0) && "SELECT" ==
            g.get(0).nodeName && (l = g.val());
        g && g.get(0) && "OPTION" == g.get(0).nodeName && (l = g.val());
        if (l == C) return !1;
        is_touch_device() && (f.force_no_ajax = "on", window.location.href = l);
        f.force_href && (l = f.force_href, "on" == f.force_no_ajax && (window.location.href = l));
        if (Ea) return setTimeout(function() {
            var b = {};
            g && (b._t = g, b.force_href = l);
            da(a, b)
        }, 1E3), !1;
        if ("on" == window.qcreative_options.enable_ajax && window && "on" != f.force_no_ajax)
            if ("#" == l) {
                if ("on" != window.qcreative_options.enable_native_scrollbar) return !1
            } else if (!(0 ==
                window.location.href.indexOf("file://") || (-1 < l.indexOf("http://") || -1 < l.indexOf("https://")) && 0 != l.indexOf(ka)) && (b("body").removeClass("loaded"), b(".q-toexecute").remove(), can_history_api())) {
            ta = [];
            ua = [];
            var h = 0;
            b(".portfolio-fulscreen--items").remove();
            c.addClass("q-ajax-transitioning");
            b.ajax({
                url: l,
                context: document.body
            }).done(function(a) {
                g && (g.parent().parent().parent().hasClass("menu-toggler-target") && g.parent().parent().parent().removeClass("active"), g.parent().parent().parent().parent().parent().hasClass("menu-toggler-target") &&
                    g.parent().parent().parent().parent().parent().removeClass("active"));
                J = b(a);
                var e = /<body.*?class="(.*?)"/g,
                    e = e.exec(a);
                t = G = "";
                e && e[1] && (G = e[1]);
                (e = /<body.*?class=".*?(page-(?:blogsingle|homepage|gallery-w-thumbs|normal|contact|about|contact|portfolio|portfolio-single))[ |"]/g.exec(a)) && e[1] && (t = e[1]);
                G += " q-inited q-inited-bg";
                var f = /menu-type-\d*/g.exec(c.attr("class"));
                G = G.replace(/menu-type-\d*/g, "");
                f && f[0] && (G += " " + f[0]);
                ab = bb = !1;
                e = /<body.*?class=".*?(no-padding)[ |"]/g;
                (e = e.exec(a)) && e[1] &&
                    (bb = !0);
                e = /<body.*?class=".*?(with-fullbg)[ |"]/g;
                (e = e.exec(a)) && e[1] && (ab = !0);
                Qa = !1;
                for (ga = 0; ga < J.length; ga++) {
                    a = J[ga];
                    a.attr && a.attr("class");
                    e = "";
                    a.href && (e = a.href, 0 == e.indexOf("./") && (e = e.replace("./", "")));
                    Bb && "custom-outside-content-1" == a.className && b(".custom-outside-content-1").html(a.innerHTML);
                    "TITLE" == a.nodeName && (d = a.innerHTML);
                    "main-container" == a.className && "on" == g.attr("data-loadnewmenu") && b("ul.the-actual-nav").eq(0).html(b(a).find("ul.the-actual-nav").eq(0).html());
                    "social-scripts" ==
                    a.className && (0 == Cb && (c.append(a), Cb = !0), Qa = !0);
                    "portfolio-fulscreen--items" == a.className && c.append(a);
                    if (void 0 != a && void 0 != a.nodeName && "SCRIPT" == a.nodeName) {
                        "mainoptions" == a.className && (b.extend([], qcreative_options), f = eval(a.innerHTML), f = JSON.parse(Ub), qcreative_options = b.extend(f, qcreative_options), -1 < cb && (qcreative_options.blur_ammount = cb), 0 == isNaN(parseInt(window.qcreative_options.blur_ammount, 10)) ? window.qcreative_options.blur_ammount = parseInt(window.qcreative_options.blur_ammount, 10) : window.qcreative_options.blur_ammount =
                            25, window.qcreative_options = qcreative_options);
                        "zoombox-settings" == a.className && (va && b.extend([], va), f = eval(a.innerHTML), window.zoombox_default_opts_string && (f = b.extend(!0, {}, b.parseJSON(window.zoombox_default_opts_string)), va = b.extend(f, window.init_zoombox_settings), window.init_zoombox_settings = va), db = !0);
                        f = !1;
                        for (m = 0; m < ba.length; m++)
                            if ("" == a.src || ba[m] == a.src || ka + ba[m] == a.src) f = !0;
                        0 == f && ta.push(a.src)
                    }
                    if (void 0 != a && void 0 != a.nodeName && "LINK" == a.nodeName && "stylesheet" == a.rel) {
                        for (var f = !1, m = 0; m <
                            ba.length; m++)
                            if ("" == e || ba[m] == e || ka + ba[m] == e) f = !0;
                        0 == f && ua.push(a.href)
                    }
                }
                setTimeout(function() {
                    h = ta.length;
                    if (0 >= h) return Db(), !1;
                    for (var a = 0, a = 0; a < ta.length; a++) b.getScript(ta[a]).done(function(a, b, c) {
                        -1 < String(this.url).indexOf("http://maps.googleapis.com/maps") && (window.google_maps_loaded = !0, window.gooogle_maps_must_init = !0);
                        h--;
                        0 >= h && Db();
                        a = this.url; - 1 < a.indexOf("?") && (a = a.split("?")[0]);
                        ba.push(a)
                    }).fail(function(a, b, c) {
                        console.log("Triggered ajaxError handler.", a, b, c, this)
                    });
                    for (a = 0; a < ua.length; a++) b("<link/>", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: ua[a]
                    }).appendTo("head"), ba.push(ua[a]);
                    setTimeout(function() {}, 1E3)
                }, 100);
                if ("fade" == O) {
                    n.addClass("for-remove");
                    var q = n;
                    setTimeout(function() {
                        q.get(0) && q.get(0).api_destroy && q.get(0).api_destroy()
                    }, 300)
                } else n.get(0) && n.get(0).api_destroy && n.get(0).api_destroy();
                window.api_destroy_zoombox && window.api_destroy_zoombox();
                g.get(0) != window && (0 == Eb && (-1 === window.location.href.indexOf("file://") && (f = C, "index.html" == f && (f = ""), "index.php" == f && (f = ""), a = {
                    href: C
                }, history.pushState(a,
                    null, f)), Eb = !0), a = eb.slice(0), a = {
                    foo: Fb,
                    href: l,
                    curr_menu_items: a
                }, Fb++, history.pushState(a, d, l), d && (document.title = d))
            });
            g.get(0) != window && (eb = [], v.find(".current-menu-item").each(function() {
                var a = b(this);
                eb.push(v.find("li").index(a))
            }), "home" == g.attr("rel") && 0 < v.find("a[rel=home]").length && (v.find(".current-menu-item").removeClass("current-menu-item"), v.find("a[rel=home]").eq(0).parent().addClass("current-menu-item")), g.parent().parent().hasClass("the-actual-nav") && (g.parent().parent().find(".current-menu-item").removeClass("current-menu-item"),
                g.parent().addClass("current-menu-item")), g.parent().parent().parent().parent().hasClass("the-actual-nav") && (g.parent().parent().parent().parent().find(".current-menu-item").removeClass("current-menu-item"), g.parent().parent().parent().addClass("current-menu-item"), g.parent().addClass("current-menu-item")), g.parent().parent().parent().parent().parent().parent().hasClass("the-actual-nav") && (g.parent().parent().parent().parent().parent().parent().find(".current-menu-item").removeClass("current-menu-item"),
                g.parent().parent().parent().parent().parent().addClass("current-menu-item"), g.parent().parent().parent().addClass("current-menu-item"), g.parent().addClass("current-menu-item")));
            g && g.hasClass("ajax-link") && v.find("li > a").each(function() {
                var a = b(this);
                if (a.attr("href") == l || a.attr("href") == ka + l) v.find("li").removeClass("current-menu-item"), a.parent().addClass("current-menu-item")
            });
            return !1
        }
    }

    function Db() {
        console.info("load_new_page()");
        Fa = [];
        Ga(0, {
            newpage_transition: !0
        })
    }

    function Gb() {
        M = !1;
        c.hasClass("page-gallery-w-thumbs") &&
            (m = "page-gallery-w-thumbs");
        c.hasClass("page-portfolio") && (m = "page-portfolio", M = !0);
        c.hasClass("page-portfolio-single") && (m = "page-portfolio-single", M = !0);
        c.hasClass("page-normal") && (m = "page-normal", M = !0);
        c.hasClass("page-blog") && (m = "page-blog", M = !0);
        c.hasClass("page-blogsingle") && (m = "page-blogsingle", M = !0);
        c.hasClass("page-about") && (m = "page-about", M = !0);
        c.hasClass("page-contact") && (m = "page-contact", M = !0);
        c.hasClass("page-homepage") && (m = "page-homepage");
        Hb && G && (c.removeClass("page-blogsingle page-homepage page-gallery-w-thumbs page-normal page-contact page-about page-contact page-portfolio page-portfolio-single"),
            c.removeClass("new-" + t), console.info("NEW CLASS_BODY - ", G), c.addClass(G), c.attr("class", G), G = G.replace(/menu-type-\d*/g, ""), m = t, c.removeClass("no-padding"), c.removeClass("with-fullbg"), bb && c.addClass("no-padding"))
    }

    function wa(a, e) {
        var g = {
            ignore_menu: !1,
            placew: !0,
            place_page: !0,
            redraw_canvas: !0,
            calculate_sidebar_main_is_bigger: !0
        };
        e && (g = b.extend(g, e));
        B = b(window).width();
        q = b(window).height();
        0 < X && (B -= 2 * X, q -= 2 * X);
        b(".main-bg-div").height(q);
        "page-portfolio-single" == m && f.parent().hasClass("fullit") &&
            (b(".advancedscroller").eq(0).css("height", "100%"), b(".advancedscroller-con").eq(0).height(q), b(".advancedscroller-con-placeholder").eq(0).height(q));
        g.placew && b(".placewh").each(function() {
            var a = b(this);
            a.attr("data-placeholderh", q);
            a.hasClass("for-parallaxer") && a.attr("data-placeholderh", 1.3 * V)
        });
        if (0 < Fa.length)
            for (var l = 0; l < Fa.length; l++) {
                var d = Fa[l];
                if (d.hasClass("auto-height-16-9")) d.height(.562 * d.width());
                else {
                    var h = d.data("original-height"),
                        n = d.width(),
                        k = d.data("reference-width");
                    d.height(n /
                        k * h)
                }
            }
        if (c.hasClass("menu-type-1") || c.hasClass("menu-type-2") || c.hasClass("menu-type-3") || c.hasClass("menu-type-4") || c.hasClass("menu-type-5") || c.hasClass("menu-type-6") || c.hasClass("menu-type-7") || c.hasClass("menu-type-8")) v && v.offset && v.offset() ? -1 == fb && (fb = v.offset().top) : console.warn("actual nav does not exist ? "), l = fb + v.outerHeight() + 10, 0 < r.children(".nav-social-con").length && (l += r.children(".nav-social-con").outerHeight() + 30), l > q ? (r.addClass("menu-overflows-height"), Ha = !0, na = l - q, "scroll" ==
            qcreative_options.menu_scroll_method && (na += 100)) : (r.removeClass("menu-overflows-height"), Ha = !1, na = 0, xa.css({
            "margin-top": ""
        }));
        if (g.place_page && ("page-portfolio" == m || "page-portfolio-single" == m || "page-normal" == m || "page-blog" == m || "page-blogsingle" == m || "page-about" == m || "page-contact" == m)) {
            if (0 == f.parent().hasClass("fullit") && 0 == c.hasClass("content-align-right") && 0 == c.hasClass("content-align-left") && 0 == c.hasClass("menu-type-5") && 0 == c.hasClass("menu-type-6") && 0 == c.hasClass("menu-type-9") && 0 == c.hasClass("menu-type-10") &&
                0 == c.hasClass("menu-type-11") && 0 == c.hasClass("menu-type-12") && 0 == c.hasClass("menu-type-13") && 0 == c.hasClass("menu-type-14") && 0 == c.hasClass("menu-type-15") && 0 == c.hasClass("menu-type-16") && 0 == c.hasClass("menu-type-17") && 0 == c.hasClass("menu-type-18")) {
                l = D + ((B - D) / 2 - f.parent().width() / 2);
                if (c.hasClass("menu-type-7") || c.hasClass("menu-type-8")) l = D - 40 + ((B - (D - 40)) / 2 - f.parent().width() / 2);
                B > D + fa + L ? f.parent().css({
                    left: l
                }) : f.parent().css({
                    left: ""
                })
            }
            c.hasClass("menu-is-sticky") && 0 == c.hasClass("content-align-right") &&
                0 == c.hasClass("content-align-left") && 0 == f.parent().hasClass("fullit") && (c.hasClass("menu-type-5") || c.hasClass("menu-type-6")) && (B > D + fa + L ? (r.css({
                    left: B / 2 - (D + fa) / 2 - L
                }), f.parent().css({
                    left: B / 2 - (D + fa + L) / 2 + D
                })) : (r.css({
                    left: ""
                }), f.parent().css({
                    left: ""
                })));
            0 == c.hasClass("page-is-fullwidth") && (c.hasClass("menu-type-5") || c.hasClass("menu-type-6"));
            0 == c.hasClass("page-is-fullwidth") && (c.hasClass("menu-type-1") || c.hasClass("menu-type-2") || c.hasClass("menu-type-3") || c.hasClass("menu-type-4") || c.hasClass("menu-type-5") ||
                c.hasClass("menu-type-6") || c.hasClass("menu-type-7") || c.hasClass("menu-type-8")) && (B < D + L + fa ? (c.addClass("semi-responsive-mode"), c.addClass("semi-responsive-mode-enforce")) : (c.removeClass("semi-responsive-mode"), c.removeClass("semi-responsive-mode-enforce")))
        }
        1E3 > B + 2 * X ? (b(".testimonial-ascroller").each(function() {
                var a = b(this);
                a.get(0) && "auto" != a.get(0).style.height && !a.data("original-height") && a.data("original-height", a.height());
                a.css("height", "auto");
                a.get(0) && a.get(0).api_force_resize && a.get(0).api_force_resize()
            }),
            c.removeClass("semi-responsive-mode"), c.removeClass("semi-responsive-mode-enforce")) : b(".testimonial-ascroller").each(function() {
            var a = b(this);
            a.data("original-height") && (a.css("height", a.data("original-height") + "px"), a.find(".thumbsCon").css("height", a.data("original-height") + "px"), a.get(0) && a.get(0).api_force_resize && a.get(0).api_force_resize())
        });
        g.place_page && (b(".translucent-bg").each(function() {
            var a = b(this);
            g.ignore_menu && a.parent().parent().hasClass("qcreative--nav-con")
        }), gb(), hb && (clearTimeout(Ib),
            Ib = setTimeout(function() {
                Vb(g)
            }, 500), b("body").addClass("resizing")));
        g.calculate_sidebar_main_is_bigger && u && (u.height() > u.prev().height() ? c.addClass("sidebar-is-bigger-then-content") : c.removeClass("sidebar-is-bigger-then-content"))
    }

    function Vb(a) {
        b("body").removeClass("resizing");
        a.redraw_canvas && b(".translucent-canvas").each(function() {
            var c = b(this);
            a.ignore_menu && c.parent().parent().hasClass("qcreative--nav-con") || is_chrome() && 0 == String(window.location.href).indexOf("file://") || ja(c)
        });
        "page-gallery-w-thumbs" ==
        m && $a();
        c.hasClass("page-is-fullwidth") && (c.hasClass("menu-type-9") || c.hasClass("menu-type-10")) && (c.find(".fullbg").eq(0).height(h.height()), setTimeout(function() {
            h.get(0) && h.get(0).api_handle_wheel && h.get(0).api_handle_wheel()
        }, 100));
        "on" == window.qcreative_options.bg_isparallax && setTimeout(function() {
            n.get(0) && n.get(0).api_handle_scroll && n.get(0).api_handle_scroll(null, {
                from: "qcre",
                force_th: V,
                force_ch: q
            })
        }, 100);
        if (window.preseter_init) {
            var e = b(".preseter-content-con").eq(0),
                g = e.find(".the-content").eq(0);
            g.scrollTop(0);
            110 + g.find(".the-content-inner-inner").height() + 56 > q ? (e.outerHeight(q - 110), e.removeClass("auto-height"), e.addClass("needs-scrolling"), g.find(".the-content-inner-inner").css({
                "padding-right": 39 - ib + "px",
                width: 260 - ib + "px"
            }), g.find(".the-bg").eq(0).css({})) : (e.css("height", "auto"), e.addClass("auto-height"), e.removeClass("needs-scrolling"), g.find(".the-content-inner-inner").css({
                "padding-right": "",
                width: ""
            }), g.find(".the-bg").eq(0).css({
                right: "",
                width: ""
            }))
        }
    }

    function ja(a, e) {
        var g = {
            overwrite_bg_index: "",
            callback_func: null
        };
        if (0 == a.length) return !1;
        e && (g = b.extend(g, e));
        if (1E3 > B) {
            if (g.callback_func) {
                var d = 50;
                is_firefox() && (d = 50);
                setTimeout(function() {
                    g.callback_func()
                }, d)
            }
            return !1
        }
        d = ya;
        if (null != g.overwrite_bg_index && "" != g.overwrite_bg_index || 0 === g.overwrite_bg_index) d = g.overwrite_bg_index;
        var f = a.width(),
            h = a.height();
        if (0 == a.parent().parent().hasClass("qcreative--nav-con")) {
            if (a.parent().parent().parent().hasClass("main-gallery--desc")) {
                if (a.parent().parent().parent().parent().children().index(a.parent().parent().parent()) !=
                    d) return !1;
                a.parent().parent().parent().show()
            }
            f = a.parent().width();
            h = a.parent().height()
        } else f = a.parent().width(), a.attr("data-placeholderh") && (h = Number(a.attr("data-placeholderh"))), (c.hasClass("menu-type-13") || c.hasClass("menu-type-14") || c.hasClass("menu-type-17") || c.hasClass("menu-type-18")) && 0 == c.hasClass("menu-is-sticky") && (h = V - q + 20), 0 == a.hasClass("for-parallaxer") && (c.hasClass("menu-type-13") || c.hasClass("menu-type-14") || c.hasClass("menu-type-17") || c.hasClass("menu-type-18")) && (h = 100);
        a.hasClass("for-parallaxer") &&
            (h *= 1.3);
        a.parent().parent().hasClass("the-content") && (f = ha, h = V);
        var m = new Image;
        a.attr("width", f);
        a.attr("height", h);
        a.css({
            width: f,
            height: h
        });
        m.width = ha;
        m.height = V;
        m.onload = function(c) {
            c = window.qcreative_options.blur_ammount;
            var e = a.width(),
                d = a.height();
            a.attr("data-placeholderh") && (d = Number(a.attr("data-placeholderh")));
            var l = a.offset().top,
                f = a.offset().left;
            a.parent().parent().parent().hasClass("main-gallery--desc") && a.parent().parent().parent().css("display", "");
            a.parent().parent().hasClass("qcreative--nav-con") &&
                (l = 0);
            a.data("lastwidth") == e && a.data("lastheight") == d && a.data("lastww") == B && a.data("lastwh") == q && a.data("lastimgsrc");
            var h;
            a.get(0) && a.get(0).getContext && (h = a.get(0).getContext("2d"));
            a.parent().parent().hasClass("the-content") && (l = f = 0);
            var n = !1;
            a.hasClass("dummy") && (n = !0);
            if ("none" != a.css("display") && 0 == n && 0 == isiPad && (0 == is_ie() || is_ie() && 10 < ieVersion)) {
                h.drawImage(this, -f, -l, ha, V);
                f = l = 0;
                a.data("lastwidth", e);
                a.data("lastheight", d);
                a.data("lastww", B);
                a.data("lastwh", q);
                a.data("lastimgsrc", m.src);
                a.data("last_mainbg_width", b(".main-bg-image").width());
                a.data("last_mainbg_height", b(".main-bg-image").height());
                a.parent().parent().hasClass("the-content") && (l = a.parent().offset().left, n = !1, 30 < l && (l -= 15, n = !0), e = a.parent().width(), n && (e += 30, e > ha && (e = ha)));
                a.parent().parent().hasClass("gallery-thumbs--image-container") && (f = 20, l = 270, e = B - 250 + 40, d = q - 20);
                a.parent().parent().hasClass("qcreative--nav-con");
                var Oa;
                try {
                    if (e && d) {
                        Oa = h.getImageData(l, f, e, d);
                        var k = Oa.data,
                            p, x, I, r, D, t, F, u, y, v, z, Y, G, C, H, A, S, T,
                            U, J, K = c + c + 1,
                            n = e - 1,
                            O = d - 1,
                            Q = c + 1,
                            L = Q * (Q + 1) / 2,
                            M = {
                                r: 0,
                                g: 0,
                                b: 0,
                                a: 0,
                                next: null
                            },
                            E = M;
                        for (I = 1; I < K; I++)
                            if (E = E.next = {
                                    r: 0,
                                    g: 0,
                                    b: 0,
                                    a: 0,
                                    next: null
                                }, I == Q) var R = E;
                        E.next = M;
                        var w = K = null;
                        F = t = 0;
                        var N = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320,
                                312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392,
                                388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259
                            ][c],
                            P = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
                                22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24
                            ][c];
                        for (x = 0; x < d; x++) {
                            C = H = A = u = y = v = 0;
                            z = Q *
                                (S = k[t]);
                            Y = Q * (T = k[t + 1]);
                            G = Q * (U = k[t + 2]);
                            u += L * S;
                            y += L * T;
                            v += L * U;
                            E = M;
                            for (I = 0; I < Q; I++) E.r = S, E.g = T, E.b = U, E = E.next;
                            for (I = 1; I < Q; I++) r = t + ((n < I ? n : I) << 2), u += (E.r = S = k[r]) * (J = Q - I), y += (E.g = T = k[r + 1]) * J, v += (E.b = U = k[r + 2]) * J, C += S, H += T, A += U, E = E.next;
                            K = M;
                            w = R;
                            for (p = 0; p < e; p++) k[t] = u * N >> P, k[t + 1] = y * N >> P, k[t + 2] = v * N >> P, u -= z, y -= Y, v -= G, z -= K.r, Y -= K.g, G -= K.b, r = F + ((r = p + c + 1) < n ? r : n) << 2, C += K.r = k[r], H += K.g = k[r + 1], A += K.b = k[r + 2], u += C, y += H, v += A, K = K.next, z += S = w.r, Y += T = w.g, G += U = w.b, C -= S, H -= T, A -= U, w = w.next, t += 4;
                            F += e
                        }
                        for (p = 0; p < e; p++) {
                            H = A =
                                C = y = v = u = 0;
                            t = p << 2;
                            z = Q * (S = k[t]);
                            Y = Q * (T = k[t + 1]);
                            G = Q * (U = k[t + 2]);
                            u += L * S;
                            y += L * T;
                            v += L * U;
                            E = M;
                            for (I = 0; I < Q; I++) E.r = S, E.g = T, E.b = U, E = E.next;
                            D = e;
                            for (I = 1; I <= c; I++) t = D + p << 2, u += (E.r = S = k[t]) * (J = Q - I), y += (E.g = T = k[t + 1]) * J, v += (E.b = U = k[t + 2]) * J, C += S, H += T, A += U, E = E.next, I < O && (D += e);
                            t = p;
                            K = M;
                            w = R;
                            for (x = 0; x < d; x++) r = t << 2, k[r] = u * N >> P, k[r + 1] = y * N >> P, k[r + 2] = v * N >> P, u -= z, y -= Y, v -= G, z -= K.r, Y -= K.g, G -= K.b, r = p + ((r = x + Q) < O ? r : O) * e << 2, u += C += K.r = k[r], y += H += K.g = k[r + 1], v += A += K.b = k[r + 2], K = K.next, z += S = w.r, Y += T = w.g, G += U = w.b, C -= S, H -= T, A -= U, w = w.next,
                                t += e
                        }
                        h.clearRect(0, 0, n, O);
                        h.putImageData(Oa, l, f)
                    }
                } catch (W) {
                    console.info("putimage error error: ", W)
                }
            }
            g.callback_func && (h = 50, is_firefox() && (h = 50), setTimeout(function() {
                g.callback_func()
            }, h))
        };
        window.qcreative_options.images_arr[d] && 0 == window.qcreative_options.images_arr[d].indexOf("#") ? g.callback_func && (d = 50, is_firefox() && (d = 50), setTimeout(function() {
            g.callback_func()
        }, d)) : m.src = window.qcreative_options.images_arr[d]
    }

    function Wb() {
        var a = ya;
        a--;
        0 > a && (a = qcreative_options.images_arr.length - 1);
        Ga(a)
    }

    function yb() {
        var a =
            ya;
        a++;
        a > qcreative_options.images_arr.length - 1 && (a = 0);
        Ga(a)
    }

    function Xb(a) {
        jb && (jb = !1);
        if (H)
            for (var e = 0; e < H.length; e++) {
                var g = H[e],
                    d = a;
                (c.hasClass("menu-type-13") || c.hasClass("menu-type-14") || c.hasClass("menu-type-17") || c.hasClass("menu-type-18")) && 0 == c.hasClass("menu-is-sticky") && g.parent().parent().hasClass("qcreative--nav-con") && (d += Number(b(window).scrollTop()));
                g.css({
                    transform: "translate3d(0," + d + "px,0)"
                })
            }
    }

    function Ga(a, c) {
        console.info("goto_bg(" + a + ")");
        if (Ea) return !1;
        var g = {
            newpage_transition: !1
        };
        c && (g = b.extend(g, c));
        var d = qcreative_options.images_arr[a],
            f = new Image;
        0 < b(".main-gallery--descs").length && (y = b(".main-gallery--descs").eq(0));
        y ? 0 < y.children(".active").length ? (y.css({
            width: "0"
        }), setTimeout(function() {
            oa = !0;
            1 == Ia && kb(a, g);
            y && y.css({
                height: "0"
            })
        }, 500)) : oa = !0 : oa = !0;
        f.onload = function(b) {
            Ia = !0;
            1 == oa && kb(a, g)
        };
        f.onerror = function(a) {};
        0 == d.indexOf("#") ? (Ia = !0, 1 == oa && kb(a, g)) : f.src = d;
        Ea = !0
    }

    function kb(a, e) {
        function g() {
            function d() {
                b("body").removeClass("qtransitioned");
                b("body").addClass("qtransitioning");
                hb = !1;
                setTimeout(function() {
                    hb = !0
                }, 2E3);
                b("body").addClass("q-inited-bg");
                setTimeout(function() {
                    function d() {
                        n = la;
                        la = null;
                        "fade" == O ? (b('.main-bg-con:not(".transitioning")').addClass("for-remove"), setTimeout(function() {
                            b(".main-bg-con.for-remove").remove()
                        }, 600)) : "off" != za && b('.main-bg-con:not(".transitioning")').remove();
                        n = b('.main-bg-con:not(".for-remove")').eq(0);
                        if (1 < r.find(".translucent-con").length) {
                            var g = r.find(".translucent-con").eq(0);
                            "fade" == O ? setTimeout(function() {
                                g.remove()
                            }, 500) : g.remove()
                        }
                        n.removeClass("transitioning");
                        n.find("figure").eq(0).css({
                            width: "",
                            height: ""
                        });
                        "on" == window.qcreative_options.bg_isparallax && "page-homepage" != t && "page-gallery-w-thumbs" != t ? (setTimeout(function() {}, 3E4), n.addClass("dzsparallaxer"), n.children(".main-bg").addClass("dzsparallaxer--target"), n.addClass("stickto100"), setTimeout(function() {}, 4E3), b(".qcreative--nav-con .translucent-con").hasClass("dzsparallaxer") && b(".qcreative--nav-con .translucent-con").addClass("stickto100"), b(".the-content .translucent-con").hasClass("dzsparallaxer") &&
                            b(".the-content .translucent-con").addClass("stickto100")) : (n.removeClass("dzsparallaxer"), n.children(".main-bg").removeClass("dzsparallaxer--target"));
                        0 < b(".main-gallery--descs").length && 0 == b(".main-gallery--descs").eq(0).hasClass("removed") && (y = b(".main-gallery--descs").eq(0));
                        y && (y.children().removeClass("active"), y.children().eq(a).addClass("active"), y.children().eq(a).hasClass("style2") ? (y.removeClass("style1").addClass("style2"), y.css({})) : (y.removeClass("style2").addClass("style1"), y.css({
                                right: ""
                            })),
                            is_chrome() && 0 == String(window.location.href).indexOf("file://") || ja(y.children().eq(a).find(".translucent-canvas").eq(0), {
                                overwrite_bg_index: a
                            }), y.css({
                                width: y.children().eq(a).width() + "px",
                                height: y.children().eq(a).height() + "px"
                            }));
                        Yb(e);
                        ya = a;
                        Ea = oa = Ia = !1;
                        0 == b("body").hasClass("q-inited") && (11 == ieVersion() ? setTimeout(function() {
                            b("body").addClass("q-inited");
                            f && 0 == f.parent().css("opacity") && f.parent().animate({
                                opacity: 1
                            }, {
                                duration: 600,
                                queue: !1
                            });
                            "page-homepage" == m && b(".the-content-con").animate({
                                opacity: 1
                            }, {
                                duration: 600,
                                queue: !1
                            })
                        }, 500) : setTimeout(function() {
                            b("body").addClass("q-inited");
                            f && 0 < f.find(".translucent-canvas").length && f.find(".translucent-canvas").each(function() {
                                var a = b(this);
                                is_chrome() && 0 == String(window.location.href).indexOf("file://") || ja(a)
                            });
                            var a = null;
                            f ? a = f.parent() : 0 < b(".the-content-con").length && (a = b(".the-content-con").eq(0));
                            a && 0 == a.css("opacity") && (a.animate({
                                opacity: 1
                            }, {
                                duration: 1E3,
                                queue: !1
                            }), 0 < c.children(".fullbg").length && c.children(".fullbg").animate({
                                opacity: 1
                            }, {
                                duration: 1E3,
                                queue: !1
                            }), is_ie11() && b(".fullbg").animate({
                                opacity: 1
                            }, {
                                duration: 1E3,
                                queue: !1
                            }))
                        }, 300))
                    }
                    var g = w;
                    if (F) {
                        F.find(".translucent-canvas").eq(0).hasClass("for-parallaxer") && (g -= 67);
                        "fade" != O && (c.hasClass("menu-type-13") || c.hasClass("menu-type-14") || c.hasClass("menu-type-17") || c.hasClass("menu-type-18")) && (g = 200);
                        if ("fade" == O) {
                            if (0 < b(".translucent-con.transitioning .for-parallaxer").length) {
                                g = H.length;
                                b(" .translucent-con.transitioning .for-parallaxer").each(function() {
                                    var a = b(this);
                                    H.push(a)
                                });
                                for (var l =
                                        0; l < g; l++) H.shift()
                            }
                            b(".qcreative--nav-con .translucent-con:not(.transitioning)").animate({
                                opacity: 0
                            }, {
                                queue: !1,
                                duration: 300
                            });
                            setTimeout(function() {
                                pa && (pa.next().animate({
                                    opacity: 1
                                }, {
                                    queue: !1,
                                    duration: 150
                                }), setTimeout(function() {
                                    pa.remove();
                                    pa.parent().children().removeClass("transitioning")
                                }, 600));
                                F.css({
                                    opacity: 0,
                                    height: "100%",
                                    top: "0"
                                });
                                F.animate({
                                    opacity: "1"
                                }, {
                                    queue: !1,
                                    duration: 250,
                                    complete: function() {
                                        F.removeClass("transitioning")
                                    }
                                })
                            }, 500)
                        } else 0 == window.qcreative_options.images_arr[0].indexOf("#") &&
                            (g += 35), F.animate({
                                height: "100%",
                                top: "0"
                            }, {
                                queue: !1,
                                duration: g,
                                complete: function() {
                                    F.removeClass("transitioning")
                                }
                            });
                        F.hasClass("dzsparallaxer")
                    }
                    g = 0;
                    if (c.hasClass("menu-type-13") || c.hasClass("menu-type-14") || c.hasClass("menu-type-17") || c.hasClass("menu-type-18")) g = 100;
                    "fade" == O ? (n.animate({
                        opacity: "0"
                    }, {
                        queue: !1,
                        duration: w
                    }), setTimeout(function() {
                        la.css({
                            height: p,
                            top: "0",
                            opacity: "0"
                        });
                        la.animate({
                            opacity: "1"
                        }, {
                            queue: !1,
                            duration: w
                        });
                        d();
                        setTimeout(function() {}, w - 100)
                    }, g + 500)) : setTimeout(function() {
                        0 ==
                            la.length ? d() : la.animate({
                                height: p,
                                top: "0"
                            }, {
                                queue: !1,
                                duration: w,
                                complete: d
                            })
                    }, g)
                }, 300);
                Ja = !0
            }
            c.hasClass("wait-for-main-content-to-load") ? (Ja = !1, lb = setInterval(function() {
                f.find(".translucent-layer").eq(0).children().eq(0).hasClass("zfolio") && f.find(".translucent-layer").eq(0).children().eq(0).hasClass("all-images-loaded") && (clearInterval(lb), 0 == Ja && d())
            }, 100), setTimeout(function() {
                clearInterval(lb);
                0 == Ja && d()
            }, 2E3)) : d()
        }
        q = b(window).height();
        0 < X && (q -= 2 * X);
        console.info("goto_bg_do_it(" + a + ")", f);
        var d =
            "",
            k = "",
            p = "100%",
            u = "";
        "on" == window.qcreative_options.bg_isparallax && "page-homepage" != t && "page-gallery-w-thumbs" != t && (d += " dzsparallaxer", k += " dzsparallaxer--target", u = "transform: translate3d(0,-" + (q * (1.3 - 1) - qcreative_options.substract_parallaxer_pixels) + "px,0);");
        var v = "-50";
        M = !1;
        if (-1 < G.indexOf("page-normal") || -1 < G.indexOf("page-blogsingle") || -1 < G.indexOf("page-blog") || -1 < G.indexOf("page-portfolio")) M = !0;
        c.addClass("new-" + t);
        O = "slidedown";
        mb && (O = mb);
        0 == Jb && 0 == e.newpage_transition && M && (O = "fade");
        Jb = !1;
        "fade" == O && (v = 0);
        if ("fade" == O) {
            n.addClass("for-remove");
            var z = n;
            setTimeout(function() {
                z.get(0) && z.get(0).api_destroy && z.get(0).api_destroy()
            }, 1E3)
        }
        var C = '<img class="main-bg-image' + k + '" style=" ' + u + '" src="' + qcreative_options.images_arr[a] + '"/>';
        0 == qcreative_options.images_arr[a].indexOf("#") && (C = '<div class="main-bg-image' + k + '" style=" width: 100%;height:120%; background-color: ' + qcreative_options.images_arr[a] + "; " + u + '"></div>');
        d = '<div class="main-bg-con transitioning' + d + '" style="height:0%; top: ' +
            v + 'px;">' + C + '<div class="main-bg-div"  style="height: ' + q + "px; background-image:url(" + qcreative_options.images_arr[a] + ');"></div></div>';
        if (1 == e.newpage_transition) {
            if ("page-homepage" == m && (0 < b(".main-gallery--descs").length && (b(".main-gallery--descs").addClass("removed"), y = null), ya = 0), c.hasClass("menu-type-9") || c.hasClass("menu-type-10") || c.hasClass("menu-type-13") || c.hasClass("menu-type-14") || c.hasClass("menu-type-15") || c.hasClass("menu-type-16") || c.hasClass("menu-type-17") || c.hasClass("menu-type-18") ?
                (b(".the-content-con").addClass("transitioning-out"), "off" != za && h.append(d)) : (b(".the-content-con").addClass("transitioning-out"), "off" != za && r.before(d)), gb(), b(".main-bg-con.transitioning").eq(0).hasClass("dzsparallaxer") && b(".main-bg-con.transitioning").eq(0).find(".dzsparallaxer--target").css({
                    transform: "translate3d(0,-" + (V - q - qcreative_options.substract_parallaxer_pixels) + "px,0)"
                }), f && (f.find(".selector-con,.call-to-action-con, .row.services-lightbox-content, .dzs-tabs.skin-menu .tabs-menu").css({
                        "z-index": "auto"
                    }),
                    f.find(".advancedscroller.skin-whitefish.is-thicker .bulletsCon").animate({
                        opacity: "0"
                    }, {
                        queue: !1,
                        duration: 300
                    })), J)
                for (J.find(".the-content-con").each(function() {
                        var a = b(this);
                        a.addClass("transitioning");
                        P && (a.width(P), a.css("width", P + "px"), setTimeout(function() {
                            a.css("width", "")
                        }, 1500));
                        a.offset();
                        0 == a.hasClass("fullit") ? (a.css({
                            opacity: 0
                        }), ma = !1, setTimeout(function() {
                            a.width();
                            a.css({});
                            a.css({});
                            a.children("").css({});
                            a.children("h1,.the-content,footer").css({})
                        }, 100)) : (a.css({
                            opacity: 0
                        }), a.find(".zfolio.fullwidth").css({
                            width: b(window).width() -
                                D
                        }), ma = !0);
                        c.hasClass("menu-type-9") || c.hasClass("menu-type-10") || c.hasClass("menu-type-13") || c.hasClass("menu-type-14") || c.hasClass("menu-type-15") || c.hasClass("menu-type-16") || c.hasClass("menu-type-17") || c.hasClass("menu-type-18") ? h.append(a) : r.before(a);
                        x && x.find(".thumbs-list-con").eq(0).unbind("mousemove");
                        b(".vplayer,.zfolio,.audioplayer").each(function() {
                            var a = b(this);
                            a.get(0) && a.get(0).api_destroy_listeners && a.get(0).api_destroy_listeners();
                            setTimeout(function() {
                                a[0] = null
                            }, 300)
                        });
                        window.dzsas_init &&
                            (1E3 < B && c.hasClass("page-portfolio") && "page-portfolio-single" == t && a.hasClass("fullit"), dzsas_init(a.find(".advancedscroller.skin-qcre.auto-init-from-q"), {
                                init_each: !0
                            }), dzsas_init(a.find(".advancedscroller.skin-trumpet.auto-init-from-q"), {
                                init_each: !0
                            }));
                        window.dzszfl_init && (1E3 < B && "page-portfolio" == t && 0 == a.hasClass("fullit") && console.info(b(".the-content-con.transitioning"), b(".the-content-con.transitioning").get(0).style, b(".the-content-con.transitioning").css("max-width"), a.find(".zfolio.auto-init-from-q")),
                            dzszfl_init(a.find(".zfolio.auto-init-from-q"), {
                                init_each: !0
                            }), setTimeout(function() {
                                b(".the-content-con .zfolio").each(function() {
                                    var a = b(this);
                                    a.get(0) && a.get(0).api_handle_resize && (a.parent().parent().parent().parent().hasClass("the-content-con") && a.parent().parent().parent().parent().css("width", ""), a.get(0).api_handle_resize())
                                })
                            }, 1E3))
                    }), d = 0; d < J.length; d++) k = J[d], u = b(k), "SCRIPT" == k.nodeName && "q-toexecute" == k.className && -1 == k.className.indexOf("executed") && (eval(k.textContent), u.addClass("executed"))
        } else b(".the-content-con").addClass("transitioning-out"),
            "off" != za && n.after(d), gb(), b(".main-bg-con.transitioning").eq(0).hasClass("dzsparallaxer") && b(".main-bg-con.transitioning").eq(0).find(".dzsparallaxer--target").css({
                transform: "translate3d(0,-" + (V - q - qcreative_options.substract_parallaxer_pixels) + "px,0)"
            });
        la = b("body").find(".main-bg-con.transitioning");
        var w = 400;
        if (0 < b(".qcreative--nav-con .translucent-canvas").length)
            if (0 == c.hasClass("menu-type-5") && 0 == c.hasClass("menu-type-5") && 0 == c.hasClass("menu-type-7") && 0 == c.hasClass("menu-type-8") && 0 == c.hasClass("menu-type-9") &&
                0 == c.hasClass("menu-type-10") && 0 == c.hasClass("menu-type-15") && 0 == c.hasClass("menu-type-16") && (d = b(".qcreative--nav-con .translucent-con").eq(0), p = "100%", d.after(d.clone()), F = b(".qcreative--nav-con .translucent-con").eq(1), F.find(".translucent-canvas").removeClass("dummy"), 0 == window.qcreative_options.images_arr[0].indexOf("#") && (F.find(".translucent-canvas").before('<div class="translucent-canvas-solid" style="width: 100%; height: 100%; background-color: ' + window.qcreative_options.images_arr[0] + ';"></div>'),
                    setTimeout(function() {
                        F.find(".translucent-canvas-solid").remove()
                    }, 800)), F.addClass("transitioning"), F.css({
                    height: "0%",
                    top: "-50px"
                }), "on" == window.qcreative_options.bg_isparallax && "page-homepage" != t && "page-gallery-w-thumbs" != t ? (F.find(".translucent-canvas").css({
                    transform: "translate3d(0,-" + (V - q - qcreative_options.substract_parallaxer_pixels) + "px,0)",
                    height: V + "px"
                }), "off" != F.find(".translucent-canvas").data("substract-translate") && F.find(".translucent-canvas").data("substract-translate", "on")) : F.find(".translucent-canvas").css({
                    transform: "translate3d(0,0,0)",
                    height: q + "px"
                }), "page-homepage" != t && "page-gallery-w-thumbs" != t && "on" == qcreative_options.bg_isparallax ? (F.find(".translucent-canvas").addClass("for-parallaxer"), w = 400, p = "130%") : (F.find(".translucent-canvas").removeClass("for-parallaxer"), w = 400), wa(null, {
                    placew: !0,
                    place_page: !1,
                    redraw_canvas: !1
                })), is_chrome() && 0 == String(window.location.href).indexOf("file://")) g();
            else if (F) {
            pa = null;
            if ("fade" == O && M) {
                var A = b(".the-content .translucent-canvas").eq(0);
                setTimeout(function() {
                    A.animate({
                        opacity: "0"
                    }, {
                        queue: !1,
                        duration: w
                    })
                }, 500);
                A.after(A.clone());
                A.next().css("opacity", "0").addClass("transitioning");
                pa = A;
                ja(A.next(), {
                    overwrite_bg_index: a
                })
            }
            ja(F.find(".translucent-canvas"), {
                overwrite_bg_index: a,
                callback_func: g
            })
        } else g()
    }

    function Yb(a) {
        h.get(0) && h.get(0).api_scrolly_to && c.addClass("has-custom-scroller");
        console.info("INIT LAZYLOADING");
        0 == window.dzs_check_lazyloading_images_inited ? (window.dzs_check_lazyloading_images_inited = !0, b(window).bind("scroll", window.dzs_check_lazyloading_images), window.dzs_check_lazyloading_images(),
            setTimeout(function() {
                window.dzs_check_lazyloading_images()
            }, 1500), setTimeout(function() {
                window.dzs_check_lazyloading_images()
            }, 2500)) : window.dzs_check_lazyloading_images && (window.dzs_check_lazyloading_images(), setTimeout(function() {
            window.dzs_check_lazyloading_images && window.dzs_check_lazyloading_images()
        }, 1E3), setTimeout(function() {
            window.dzs_check_lazyloading_images && window.dzs_check_lazyloading_images()
        }, 2E3), setTimeout(function() {
                window.dzs_check_lazyloading_images && window.dzs_check_lazyloading_images()
            },
            3E3));
        setTimeout(function() {
            if (c.hasClass("with-border") && window.dzsscr_init) {
                var a = b(".main-container").get(0);
                window.dzs_check_lazyloading_images_use_this_element_css_top_instead_of_window_scroll = b(".main-container > .the-content-con").eq(0);
                if (a && a.api_set_scrollTop_height_indicator) {
                    a.api_set_window_object(b(".main-container > .the-content-con").eq(0));
                    a.api_set_scrollTop_height_indicator(b(".main-container > .the-content-con").eq(0));
                    var e = b(".main-container > .the-content-con").eq(0).offset().top +
                        parseInt(b(".main-container > .the-content-con").css("margin-bottom"), 10);
                    a.api_comHeight_surplus(e + 15)
                }
                n.get(0) && n.get(0).api_set_scrollTop_is_another_element_top && n.get(0).api_set_scrollTop_is_another_element_top(b(".main-container > .the-content-con").eq(0))
            }
        }, 100);
        setTimeout(function() {
            window.preseter_init && (b(".preseter.align-right").addClass("activated"), window.preseter_init(), window.dzsscr_init && b(".preseter .preseter-content-con").hasClass("scroller-con") && window.dzsscr_init(".preseter .preseter-content-con", {
                settings_skin: "skin_apple",
                enable_easing: "on",
                settings_autoresizescrollbar: "on",
                settings_chrome_multiplier: .12,
                settings_firefox_multiplier: -3,
                settings_refresh: 700,
                settings_autoheight: "off",
                touch_leave_native_scrollbar: "on"
            }), b(".preseter .preseter-content-con .the-content-inner-inner").bind("mouseenter", function() {
                clearTimeout(nb);
                b(".preseter .preseter-content-con .the-content").css("width", "700px");
                b(".preseter .preseter-content-con .the-content").css("left", "auto");
                b(".preseter .preseter-content-con .the-content").css("right",
                    "0")
            }), b(".preseter .preseter-content-con .the-content-inner-inner").bind("mouseleave", function() {
                clearTimeout(nb);
                nb = setTimeout(function() {
                    b(".preseter .preseter-content-con .the-content").css("width", "");
                    b(".preseter .preseter-content-con .the-content").css("left", "");
                    b(".preseter .preseter-content-con .the-content").css("right", "")
                }, 300)
            }))
        }, 1500);
        var e = n.find("figure").eq(0).css("background-image");
        e && (e = e.replace("url(", ""), e = e.replace('url("', ""), e = e.replace(")", ""), e = e.replace('")', ""));
        db &&
            (window.init_zoombox ? window.init_zoombox(va) : console.log("zoombox not defined .. why ? "), db = !1);
        H = [];
        "page-homepage" == m || "page-gallery-w-thumbs" == m || "on" != window.qcreative_options.bg_isparallax || !a.newpage_transition && "fade" != O || (r.find(".translucent-con .translucent-canvas").addClass("for-parallaxer"), H = [], 0 < b(".for-parallaxer").length && b(".for-parallaxer").each(function() {
            var a = b(this);
            H.push(a)
        }));
        a.newpage_transition && J && (Hb = !0, Gb(), document.body.style.zoom = 1, b(".map-canvas-con:not(.transitioning)").remove(),
            b(".fullbg").remove(), b(".dzs-progress-bar").each(function() {
                var a = b(this);
                a.get(0) && a.get(0).api_destroy_listeners && a.get(0).api_destroy_listeners();
                setTimeout(function() {
                    a[0] = null
                }, 300)
            }), ab && (c.addClass("with-fullbg"), n.after('<div class="fullbg" style="opacity:0;"></div>'), setTimeout(function() {
                n.next().hasClass("fullbg") && n.next().animate({
                    opacity: 1
                }, {
                    queue: !1,
                    duration: 300
                })
            }, 50)), 0 < J.find(".map-canvas-con").length && (J.find(".map-canvas-con").eq(0).addClass("transitioning"), J.find(".map-canvas-con").eq(0).find(".map-canvas").addClass("transitioning"),
                h.append(J.find(".map-canvas-con").eq(0))), window.scroll_top_object.val = 0, h.get(0) && h.get(0).api_scrolly_to ? h.get(0).api_scrolly_to(0, {
                force_no_easing: "on",
                show_scrollbar: !1
            }) : b(window).scrollTop(0));
        if ("on" == window.qcreative_options.bg_isparallax && "page-homepage" != t && "page-gallery-w-thumbs" != t) {
            var e = {
                    mode_scroll: "fromtop",
                    animation_duration: "20",
                    is_fullscreen: "on",
                    init_functional_delay: "0",
                    init_functional_remove_delay_on_scroll: "off",
                    settings_substract_from_th: qcreative_options.substract_parallaxer_pixels,
                    direction: "reverse"
                },
                g = b(".main-container > .the-content-con").eq(0);
            0 < b(".main-container > .the-content-con.transitioning").length && (g = b(".main-container > .the-content-con.transitioning").eq(0));
            c.hasClass("with-border") && (e.settings_scrollTop_is_another_element_top = g);
            Kb && (e.settings_clip_height_is_window_height = !0);
            window.dzsprx_init(n, e);
            ra = n;
            n.get(0) && n.get(0).api_set_update_func && n.get(0).api_set_update_func(Xb)
        }
        a.newpage_transition && J ? (b(".map-canvas.to-remove").remove(), b('.the-content-con:not(".transitioning") .translucent-canvas').addClass("removed"),
            b('.the-content-con:not(".transitioning")').remove(), b('.the-content-con:not(".transitioning")').find(".zfolio").remove(), b(".the-content-con.transitioning").each(function() {
                var a = b(this);
                a.css("width", "");
                a.css("max-width", "");
                a.removeClass("transitioning");
                f && f.find(".zfolio").each(function() {
                    var a = b(this);
                    a.get(0) && a.get(0).api_destroy && a.get(0).api_destroy()
                });
                f = b(".the-content").eq(0);
                wa(null, {
                    placew: !1,
                    place_page: !0,
                    redraw_canvas: !1
                });
                a.hasClass("fullit") && (a.find(".zfolio.fullwidth").css({
                        width: ""
                    }),
                    ma = !0);
                f && 0 < f.find(".translucent-canvas").length && f.find(".translucent-canvas").each(function() {
                    var a = b(this);
                    "page-homepage" != m && "page-gallery-w-thumbs" != m && "on" == window.qcreative_options.bg_isparallax && a.addClass("for-parallaxer");
                    H = [];
                    0 < b(".for-parallaxer").length ? b(".for-parallaxer").each(function() {
                        var a = b(this);
                        H.push(a)
                    }) : H = [];
                    ja(a)
                });
                setTimeout(function() {
                    0 == a.hasClass("fullit") ? ("nuttin" != m && (a.css({
                        opacity: 0
                    }), "page-gallery-w-thumbs" == t && $a(), a.animate({
                        opacity: 1
                    }, {
                        duration: 600,
                        queue: !1,
                        complete: function(a) {}
                    })), a.children(".the-content").animate({}, {
                        queue: !1,
                        duration: 600
                    }), setTimeout(function() {}, 0)) : a.animate({
                        opacity: 1
                    }, {
                        duration: 600,
                        queue: !1
                    })
                }, 400)
            }), setTimeout(function() {
                A()
            }, 100)) : Lb && (A(), Lb = !1);
        setTimeout(function() {
            wa(null, {
                ignore_menu: !1,
                placew: !1,
                place_page: !1,
                redraw_canvas: !1,
                calculate_sidebar_main_is_bigger: !0
            })
        }, 1E3);
        0 < b(".map-canvas").length && ob();
        b(".map-canvas").removeClass("transitioning").addClass("to-remove");
        b(".map-canvas-con").removeClass("transitioning")
    }

    function gb() {
        b(".main-bg-image").each(function() {
            var a = b(this),
                c = a.get(0).naturalWidth,
                g = a.get(0).naturalHeight,
                d = B,
                f = q;
            a.parent().hasClass("dzsparallaxer") && (f *= 1.3);
            c / g > d / f ? (ha = c / g * f, V = f) : (ha = d, V = g / c * d);
            a.width(ha);
            a.height(V)
        })
    }

    function Mb() {
        "page-gallery-w-thumbs" == m && Ka && (pb = qb, Nb = Ka - pb, qb = Number(Math.easeIn(1, pb, Nb, 20).toFixed(4)), x || 0 < b(".gallery-thumbs-con").length && (x = b(".gallery-thumbs-con").eq(0)), 0 == is_ios() && 0 == is_android() && x && x.find(".thumbs-list").eq(0).css({
            transform: "translate3d(" +
                qb + "px,0,0)"
        }));
        requestAnimFrame(Mb)
    }

    function vb(a) {
        var c = b(this).find(":selected").eq(0);
        da(a, {
            _t: c
        })
    }

    function Ob(a) {
        b(this);
        if (Ha) {
            var c = parseInt(xa.css("margin-top"), 10);
            a && a.wheelDeltaY && (c += a.wheelDeltaY / 3);
            isNaN(c) && (c = 0);
            is_firefox() && (c += -(12 * a.detail));
            0 < c && (c = 0);
            c < -na && (c = -na);
            xa.css("margin-top", c + "px");
            a.preventDefault();
            return !1
        }
    }

    function Zb(a) {
        if ("none" == a.css("display")) {
            var c = a.eq(0).height();
            a.parent().parent().hasClass("custom-menu") && (a.css("display", "block"), a.css("height", "auto"),
                a.css({
                    display: "block",
                    height: "0"
                }), a.animate({
                    height: c + "px"
                }, {
                    queue: !1,
                    duration: 300,
                    complete: function(a) {
                        b(this).css("height", "")
                    }
                }));
            if (a.parent().parent().parent().parent().hasClass("custom-menu")) {
                var d = a.parent().parent(),
                    f = d.height();
                setTimeout(function() {
                    a.css({
                        display: "block",
                        height: "auto"
                    });
                    a.height();
                    var h = d.height();
                    d.css({
                        display: "block",
                        height: f + "px"
                    });
                    d.animate({
                        height: h + "px"
                    }, {
                        queue: !1,
                        duration: 300,
                        complete: function(a) {
                            b(this).css("height", "")
                        }
                    });
                    a.css({
                        display: "block",
                        height: "0"
                    });
                    a.animate({
                        height: c + "px"
                    }, {
                        queue: !1,
                        duration: 300,
                        complete: function(a) {
                            b(this).css("height", "")
                        }
                    })
                }, 50)
            }
        } else a.parent().parent().hasClass("custom-menu") && a.animate({
            height: 0
        }, {
            queue: !1,
            duration: 300,
            complete: function(a) {
                console.info(this);
                b(this).css("display", "none");
                b(this).css("height", "")
            }
        }), a.parent().parent().parent().parent().hasClass("custom-menu") && (d = a.parent().parent(), f = d.height(), setTimeout(function() {
            a.css({
                display: "block",
                height: "0"
            });
            a.height();
            var c = d.height();
            d.css({
                display: "block",
                height: f + "px"
            });
            d.animate({
                height: c + "px"
            }, {
                queue: !1,
                duration: 300,
                complete: function(a) {
                    console.info(this);
                    b(this).css("height", "")
                }
            });
            a.css({
                display: "block",
                height: ""
            });
            a.animate({
                height: "0"
            }, {
                queue: !1,
                duration: 300,
                complete: function(a) {
                    b(this).css("display", "none");
                    b(this).css("height", "")
                }
            })
        }, 50))
    }

    function $b(a) {
        a && a.pageY && (33 > a.pageY ? b("#wpadminbar").addClass("active") : b("#wpadminbar").removeClass("active"))
    }

    function z(a) {
        var e = b(this);
        if (a) {
            if ("mousemove" == a.type) {
                if (e.hasClass("thumbs-list-con")) {
                    var d =
                        e.width();
                    if (e.find(".thumbs-list").eq(0).width() > d) {
                        var l = a.pageX - e.offset().left,
                            k = e.find(".thumbs-list").eq(0).width();
                        Ka = l / d * (d - k - Wa / 2 + Xa)
                    } else Ka = 0
                }
                if (e.hasClass("qcreative--nav-con")) {
                    if ((c.hasClass("menu-type-1") || c.hasClass("menu-type-2")) && 250 < a.pageX) return !1;
                    Ha && xa.css({
                        "margin-top": "-" + a.pageY / q * na + "px"
                    })
                }
            }
            if ("click" == a.type) {
                if (e.parent().hasClass("has-children") && "#" == e.attr("href")) return e.parent().children(".submenu-toggler").trigger("click"), !1;
                e.hasClass("prev-btn-con") && Wb();
                e.hasClass("next-btn-con") &&
                    yb();
                e.hasClass("map-show") && b(".map-canvas-con").addClass("active");
                e.hasClass("map-hide") && b(".map-canvas-con").removeClass("active");
                e.hasClass("submenu-toggler") && (e.parent().toggleClass("children-active"), a = e.parent().children("ul").eq(0), Zb(a));
                e.hasClass("dzs-select-wrapper-head") && sa && (c.addClass("custom-responsive-menu-active"), h.get(0) && h.get(0).api_block_scroll && h.get(0).api_block_scroll());
                e.hasClass("close-responsive-con") && sa && (c.removeClass("custom-responsive-menu-active"), h.get(0) &&
                    h.get(0).api_unblock_scroll && h.get(0).api_unblock_scroll());
                (e.hasClass("menu-toggler") || e.hasClass("menu-closer")) && b(".menu-toggler-target").eq(0).toggleClass("active");
                e.hasClass("thumb") && (ia = a = e.parent().children().index(e), e.parent().children().removeClass("curr-thumb"), e.addClass("curr-thumb"), "page-gallery-w-thumbs" == m && document.getElementById("as-gallery-w-thumbs") && document.getElementById("as-gallery-w-thumbs").api_goto_page && document.getElementById("as-gallery-w-thumbs").api_goto_page(a));
                if (e.hasClass("services-lightbox")) return h.append('<div class="services-lightbox-overlay"></div>'), h.append('<div class="services-lightbox-content"><div class="services-lightbox-content--content">' + e.children(".lightbox-content").eq(0).html() + '</div><div class="services-lightbox--close"><i class="fa fa-times"></i></div></div>'), h.children(".services-lightbox-content").width(f.width() - 60), h.children(".services-lightbox-content").css({
                    left: f.offset().left + 30
                }), 1E3 > B && h.children(".services-lightbox-content").css({
                    left: "",
                    width: ""
                }), setTimeout(function() {
                    h.children(".services-lightbox-overlay,.services-lightbox-content").addClass("active");
                    setTimeout(function() {
                        h.children(".services-lightbox-content").addClass("active-content")
                    }, 300)
                }, 100), h.get(0) && h.get(0).api_block_scroll && h.get(0).api_block_scroll(), !1;
                if (e.hasClass("services-lightbox--close")) return h.children(".services-lightbox-overlay").removeClass("active"), h.children(".services-lightbox-content").removeClass("active active-content"), setTimeout(function() {
                        h.children(".services-lightbox-overlay,.services-lightbox-content").remove()
                    },
                    600), h.get(0) && h.get(0).api_unblock_scroll && h.get(0).api_unblock_scroll(), !1;
                if (e.hasClass("contact-form-button")) {
                    e = !1;
                    "" == b("input[name=the_name]").eq(0).val() && (b("input[name=the_name]").eq(0).addClass("needs-attention"), b("input[name=the_name]").eq(0).val("Please complete this field"), setTimeout(function() {
                        b("input[name=the_name]").eq(0).removeClass("needs-attention");
                        b("input[name=the_name]").eq(0).val("")
                    }, 2E3), e = !0);
                    "" == b("textarea[name=the_feedback]").eq(0).val() && (b("textarea[name=the_feedback]").eq(0).addClass("needs-attention"),
                        b("textarea[name=the_feedback]").eq(0).val("Please complete this field"), setTimeout(function() {
                            b("textarea[name=the_feedback]").eq(0).removeClass("needs-attention");
                            b("textarea[name=the_feedback]").eq(0).val("")
                        }, 2E3), e = !0);
                    0 == Pb(b("input[name=the_email]").eq(0).val()) && (b("input[name=the_email]").eq(0).addClass("needs-attention"), b("input[name=the_email]").eq(0).val("Invalid email address"), setTimeout(function() {
                            b("input[name=the_email]").eq(0).removeClass("needs-attention");
                            b("input[name=the_email]").eq(0).val("")
                        },
                        2E3), e = !0);
                    if (e) return !1;
                    e = {
                        the_email: b("input[name=the_email]").eq(0).val(),
                        the_name: b("input[name=the_name]").eq(0).val(),
                        the_feedback: b("textarea[name=the_feedback]").eq(0).val()
                    };
                    a = b("form.contact-form").eq(0).attr("action");
                    jQuery.post(a, e, function(a) {
                        void 0 != window.console && console.log("Got this from the server: " + a);
                        b(".form-feedback").eq(0).addClass("active");
                        b("input[name=the_email]").eq(0).val("");
                        b("input[name=the_name]").eq(0).val("");
                        b("textarea[name=the_feedback]").eq(0).val("");
                        setTimeout(function() {
                                b(".form-feedback").eq(0).removeClass("active")
                            },
                            2E3)
                    });
                    return !1
                }
                e.hasClass("submit-comment");
                e.hasClass("portfolio-single-liquid-info") && h.get(0) && h.get(0).api_scrolly_to && (h.find(".scrollbary").eq(0).addClass("animatetoptoo"), setTimeout(function() {
                    var a = f.find(".desc-content-wrapper h3").eq(0).offset().top;
                    h.get(0).api_scrolly_to(a, {
                        force_no_easing: "off"
                    })
                }, 50));
                e.hasClass("arrow-left-for-skin-qcre") && f.find(".advancedscroller").get(0) && f.find(".advancedscroller").get(0).api_gotoPrevPage && f.find(".advancedscroller").get(0).api_gotoPrevPage();
                e.hasClass("arrow-right-for-skin-qcre") && f.find(".advancedscroller").get(0) && f.find(".advancedscroller").get(0).api_gotoNextPage && f.find(".advancedscroller").get(0).api_gotoNextPage();
                e.hasClass("description-wrapper--icon-con") && e.parent().toggleClass("active");
                e.hasClass("preseter-button--save") && "undefined" !== typeof Storage && (a = (new Date).getTime(), d = {
                        value: b("select[name=menu-type]").eq(0).val(),
                        timestamp: a
                    }, localStorage.setItem("menu-type", JSON.stringify(d)), d = {
                        value: b("select[name=page-title-style]").eq(0).val(),
                        timestamp: a
                    }, localStorage.setItem("page-title-style", JSON.stringify(d)), d = {
                        value: b("select[name=page-title-align]").eq(0).val(),
                        timestamp: a
                    }, localStorage.setItem("page-title-align", JSON.stringify(d)), d = {
                        value: b("select[name=heading-style]").eq(0).val(),
                        timestamp: a
                    }, localStorage.setItem("heading-style", JSON.stringify(d)), d = {
                        value: b("select[name=heading-aligment]").eq(0).val(),
                        timestamp: a
                    }, localStorage.setItem("heading-aligment", JSON.stringify(d)), d = {
                        value: b("select[name=content-align]").eq(0).val(),
                        timestamp: a
                    }, localStorage.setItem("content-align", JSON.stringify(d)), d = {
                        value: b("input[name=parallax_bg]:checked").eq(0).val(),
                        timestamp: a
                    }, localStorage.setItem("parallax_bg", JSON.stringify(d)), d = {
                        value: b("input[name=blur_ammount]").eq(0).val(),
                        timestamp: a
                    }, localStorage.setItem("blur_ammount", JSON.stringify(d)), d = {
                        value: b("input[name=saturation_ammount]").eq(0).val(),
                        timestamp: a
                    }, localStorage.setItem("saturation_ammount", JSON.stringify(d)), d = {
                        value: b("input[name=color_primary]").eq(0).val(),
                        timestamp: a
                    },
                    localStorage.setItem("color_primary", JSON.stringify(d)), a = b("select[name=menu-type]").eq(0).val(), "menu-type-2" == a || "menu-type-4" == a || "menu-type-6" == a || "menu-type-8" == a || "menu-type-10" == a || "menu-type-14" == a || "menu-type-16" == a || "menu-type-18" == a ? 0 == String(C).indexOf("light-") ? location.reload() : window.location.href = "light-" + C : 0 != String(C).indexOf("light-") ? Pa ? window.location.href = C : location.reload() : window.location.href = String(C).substr(6));
                e.hasClass("preseter-button--default") && "undefined" !== typeof Storage &&
                    (localStorage.setItem("menu-type", ""), localStorage.setItem("page-title-style", ""), localStorage.setItem("page-title-align", ""), localStorage.setItem("heading-style", ""), localStorage.setItem("heading-aligment", ""), localStorage.setItem("content-align", ""), localStorage.setItem("parallax_bg", ""), localStorage.setItem("blur_ammount", ""), localStorage.setItem("saturation_ammount", ""), localStorage.setItem("color_primary", ""), 0 != String(C).indexOf("light-") ? Pa ? window.location.href = C : location.reload() : window.location.href =
                        String(C).substr(6))
            }
        }
    }

    function Pb(a) {
        return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(a)
    }

    function ob() {
        var a = b(".map-canvas")[0],
            e = -33.890542,
            d = 151.274856;
        a && a.getAttribute && a.getAttribute("data-lat") && (e = a.getAttribute("data-lat"));
        a && a.getAttribute && a.getAttribute("data-long") && (d = a.getAttribute("data-long"));
        if (!window.google || !google.maps || !google.maps.LatLng) return setTimeout(ob, 1E3), !1;
        var e = new google.maps.LatLng(e, d),
            d = new google.maps.Map(a, {
                zoom: 17,
                center: e,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: !1,
                streetViewControl: !1
            }),
            f = "img/gmaps_marker_1.png";
        c.hasClass("page-normal") && 0 == b(a).hasClass("indicator-red") && (f = "img/gmaps_marker_2.png");
        new google.maps.Marker({
            position: e,
            map: d,
            icon: f
        })
    }
    if (window.qcreative_document_ready_ed) return !1;
    window.qcreative_document_ready_ed = !0;
    b.fn.outerHTML = function() {
        return b(this).clone().wrap("<div></div>").parent().html()
    };
    var n = null,
        c = b("body"),
        r = null,
        la = null,
        y = null,
        f = null,
        h = null,
        W = null,
        v = null,
        J = null,
        x = null,
        u = null,
        xa = null,
        ea = null,
        ra = null,
        G = "",
        t = "",
        bb = !1,
        ab = !1,
        db = !1,
        Ja = !1,
        B = 0,
        q = 0,
        Qb = 0,
        ya = 0,
        ha = 0,
        V = 0,
        Za = 0,
        zb = 0,
        N = 0,
        aa = 0,
        D = 250,
        Wa = 40,
        Xa = 0,
        Va = 0,
        Ta = 0,
        fa = 930,
        P = 0,
        ca = 0,
        Ua = 930,
        L = 20,
        ib = 0,
        qa = 0,
        Ca = 0,
        ia = 0,
        xb = 0,
        X = 0,
        Ha = !1,
        na = 0,
        fb = -1,
        Kb = 0,
        O = "slidedown",
        mb = "",
        Ea = !1,
        Ia = !1,
        oa = !1,
        M = !1,
        hb = !0,
        F = null,
        pa = null,
        Cb = !1,
        Qa = !1,
        Hb = !1,
        Lb = !0,
        Jb = !0,
        Bb = !1,
        Eb = !1,
        ba = [],
        ta = [],
        ua = [],
        Fa = [],
        Ib = 0,
        nb = 0,
        tb = 0,
        lb = 0,
        wb = 0,
        cb = -1,
        va = null,
        H = null,
        ma = !1,
        qb = 0,
        pb = 0,
        Ka = 0,
        Nb = 0,
        eb = [],
        m = "",
        Fb = 0,
        Rb = "",
        ka = "",
        C = "",
        Pa = !1,
        za = "on",
        Ra = !1,
        sa = !1,
        ub =
        0,
        Sa = null,
        jb = !1;
    0 < b(".main-bg-con-con").length && b(".main-bg-con-con").eq(0);
    h = b(".main-container").eq(0);
    n = b(".main-bg-con").eq(0);
    b(".main-container > .preloader-con");
    r = b(".qcreative--nav-con").eq(0);
    W = b(".qcreative--520-nav-con").eq(0);
    v = b("ul.the-actual-nav").eq(0);
    xa = r.find(".logo-con").eq(0);
    0 < b(".the-content").length && (f = b(".the-content").eq(0));
    0 < b("#qcre-aux-css").length || c.append('<style id="qcre-aux-css"></style>');
    ea = b("#qcre-aux-css").eq(0);
    isiPad && c.addClass("is-ipad");
    var Aa = getBrowserScrollSize(),
        ib = Aa.width,
        Ua = fa,
        rb = {
            images_arr: ["img/bg1.jpg"],
            bg_slideshow_time: "0",
            site_url: "detect",
            enable_ajax: "on",
            page: "index",
            bg_isparallax: "off",
            gallery_w_thumbs_autoplay_videos: "on",
            enable_native_scrollbar: "off",
            blur_ammount: 25,
            border_width: "0",
            substract_parallaxer_pixels: 10,
            content_width: "0",
            content_gap_width: "0",
            menu_scroll_method: "scroll",
            responsive_menu_type: "custom",
            bg_transition: "slidedown",
            new_bg_transition: "on",
            video_player_settings: {
                init_each: !0,
                settings_youtube_usecustomskin: "off",
                design_skin: "skin_reborn",
                settings_video_overlay: "on"
            }
        },
        Ub = JSON.stringify(rb);
    window.qcreative_options = window.qcreative_options ? b.extend(rb, window.qcreative_options) : b.extend({}, rb);
    mb = qcreative_options.bg_transition;
    za = window.qcreative_options.new_bg_transition;
    0 == isNaN(parseInt(window.qcreative_options.border_width, 10)) && parseInt(window.qcreative_options.border_width, 10) && (X = parseInt(window.qcreative_options.border_width, 10));
    0 < X && c.addClass("with-border");
    0 == isNaN(parseInt(window.qcreative_options.blur_ammount, 10)) ? window.qcreative_options.blur_ammount =
        parseInt(window.qcreative_options.blur_ammount, 10) : window.qcreative_options.blur_ammount = 25;
    b(window).scrollTop(0);
    setInterval(function() {
        jb = !0
    }, 1E3);
    var R = /.*?(page-(?:blogsingle|homepage|gallery-w-thumbs|normal|contact|about|contact|portfolio|portfolio-single))/g.exec(String(b("body").attr("class"))),
        t = "";
    R && R[1] && (t = R[1]);
    if (isNaN(parseInt(c.css("border-width"), 10)), parseInt(c.css("border-width"), 10)) Kb = parseInt(c.css("border-width"), 10);
    if (window.preseter_init) {
        window.onload = function() {};
        if ("undefined" !==
            typeof Storage) {
            "on" == get_query_arg(window.location.href, "clearcache") && (localStorage.setItem("menu-type", ""), localStorage.setItem("page-title-style", ""), localStorage.setItem("page-title-align", ""), localStorage.setItem("heading-style", ""), localStorage.setItem("heading-aligment", ""), localStorage.setItem("content-align", ""), localStorage.setItem("parallax_bg", ""), localStorage.setItem("blur_ammount", ""), localStorage.setItem("saturation_ammount", ""), localStorage.setItem("color_primary", ""));
            0 == b(".preseter.align-right").length &&
                c.append('<div class="preseter align-right wait-for-activate preseter-opened-by-user" style=""> <div class="the-icon-con"> <i class="fa fa-chevron-left btn-show-customizer"></i> <i class="fa fa-times btn-close-customizer"></i>  </div> <div class="preseter-content-con auto-height overflow-x-visible" style="width: 260px; height: auto;"> <div class=" the-content-inner-con"> <div class="the-content inner" style=" " data-targetw="-260"> <div class="the-content-inner-inner"> <div class="the-bg"></div> <div class="setting"> <div class="dzstooltip-con js for-hover" > <i class="fa fa-info-circle"></i> <div class="clear"></div> <span class="dzstooltip arrow-right align-top skin-white transition-slidein no-arrow" style="right:100%; max-width: 300px; margin-right: 5px; "> <img class="fullwidth" src="img/tooltip_menu_style.jpg"/> <span class="content-inner">Change the menu style to completely change the look and feel of your website. Please note that the menu styles are not tied to the content skin style, so with the Q Creative it\'s possible to have a LIGHT menu style with the DARK content skin (however in the demo we are sticking to the same style for both menu and content skins)</span> </span> </div> <h6>Menu Style</h6> <select name="menu-type" autocomplete="off"> <option selected="selected" value="menu-type-1">Menu 1-Dark (vertical)</option> <option value="menu-type-2">Menu 2-Light (vertical)</option> <option value="menu-type-3">Menu 3-Dark (vertical)</option> <option value="menu-type-4">Menu 4-Light (vertical)</option> <option value="menu-type-5">Menu 5-Dark (vertical)</option> <option value="menu-type-6">Menu 6-Light (vertical)</option> <option value="menu-type-7">Menu 7-Dark (vertical)</option> <option value="menu-type-8">Menu 8-Light (vertical)</option> <option value="menu-type-9">Menu 9-Dark (horizontal)</option> <option value="menu-type-10">Menu 10-Light (horizontal)</option> <option value="menu-type-11">Menu 11 (overlay)</option> <option value="menu-type-12">Menu 12 (overlay)</option> <option value="menu-type-13">Menu 13-Dark (horizontal)</option> <option value="menu-type-14">Menu 14-Light (horizontal)</option> <option value="menu-type-15">Menu 15-Dark (horizontal)</option> <option value="menu-type-16">Menu 16-Light (horizontal)</option> <option value="menu-type-17">Menu 17-Dark (horizontal)</option> <option value="menu-type-18">Menu 18-Light (horizontal)</option> </select> </div> <div class="setting"> <div class="dzstooltip-con js for-hover" > <i class="fa fa-info-circle"></i> <div class="clear"></div> <span class="dzstooltip arrow-right align-top skin-white transition-slidein no-arrow" style="right:100%; max-width: 300px; margin-right: 5px; "> <img class="fullwidth" src="img/tooltip_page_title_style.jpg"/> <span class="content-inner">Play between page title styles to fit your own personal style. There are several page title styles available, that support one row or two rows, and creating other styles is a piece of cake.</span> </span> </div> <h6>Page Title Style</h6> <select name="page-title-style"> <option value="page-title-style-1">Page Title 1</option> <option selected="selected" value="page-title-style-2">Page Title 2</option> <option value="page-title-style-3">Page Title 3</option> <option value="page-title-style-3b">Page Title 3b</option> </select> </div> <div class="setting"> <h6>Page Title Position</h6> <select name="page-title-align"> <option value="page-title-align-right">Right</option> <option value="page-title-align-center">Center</option> <option value="page-title-align-left">Left</option> </select> </div> <div class="setting"> <div class="dzstooltip-con js for-hover" > <i class="fa fa-info-circle"></i> <div class="clear"></div> <span class="dzstooltip arrow-right align-top skin-white transition-slidein no-arrow" style="right:100%; max-width: 300px; margin-right: 5px; "> <img class="fullwidth" src="img/tooltip_section_title_style.jpg"/> <span class="content-inner">This option will affect the Section Title (or Section Heading) in normal pages such as ABOUT US or SERVICES. To see all Section Title Styles please go to Extras / Section Titles.</span> </span> </div>  <div class="setting"> <div class="dzstooltip-con js for-hover" > <i class="fa fa-info-circle"></i> <div class="clear"></div> <span class="dzstooltip arrow-right align-top skin-white transition-slidein no-arrow" style="right:100%; max-width: 300px; margin-right: 5px; "> <img class="fullwidth" src="img/tooltip_content_position.jpg"/> <span class="content-inner">With so many menu styles available, we figured that it would be a great thing to have multiple ways to position the content in the browser.</span> </span> </div> <h6>Content Position</h6> <select name="content-align"> <option value="content-align-center">Center</option> <option value="content-align-left">Left</option> <option value="content-align-right">Right</option> </select> </div>   <div class="setting"> <h6>Parallax Background</h6> &nbsp;<input type="radio" name="parallax_bg" value="on" checked>&nbsp;&nbsp;On&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="radio" name="parallax_bg" value="off">&nbsp;&nbsp;Off </div> <div class="setting slider-ui-con"> <div class="dzstooltip-con js for-hover" > <i class="fa fa-info-circle"></i> <div class="clear"></div> <span class="dzstooltip arrow-right align-top skin-white transition-slidein no-arrow" style="right:100%; max-width: 300px; margin-right: 5px; "> <img class="fullwidth" src="img/tooltip_blur_amount.jpg"/> <span class="content-inner">The blur effect is probably the biggest star of the show, and the Q Creative 2015 Edition is the first template to use this effect as part of the layout design.</span> </span> </div> <h6>Blur Amount</h6> <input type="hidden" class="slider-ui-target-field" name="blur_ammount" value="25"/> <div class="slider-ui slider-ui-for-blur"></div> </div> <div class="setting slider-ui-con"> <div class="dzstooltip-con js for-hover" > <i class="fa fa-info-circle"></i> <div class="clear"></div> <span class="dzstooltip arrow-right align-top skin-white transition-slidein no-arrow" style="right:100%; max-width: 300px; margin-right: 5px; "> <img class="fullwidth" src="img/tooltip_saturation_amount.jpg"/> <span class="content-inner">Besides the blur effect, you can use saturation as part of your design. It\'s classy, beautiful and impressive.</span> </span> </div> <h6>Saturation Amount</h6> <input type="hidden" class="slider-ui-target-field" name="saturation_ammount" value="100"/> <div class="slider-ui "></div> </div> <div class="setting setting-for-colorpicker"> <h6 style="float:left; ">Primary Color</h6> <input type="hidden" class="with-colorpicker" name="color_primary" value="#e74c3c"/> <div class="picker-con align-right"><div class="the-icon"></div><div class="picker"></div></div> </div> <div class="clear"></div> <div style="white-space: nowrap; position: relative;"> <span class="preseter-button preseter-button--save">Save changes</span> <span class="preseter-button preseter-button--default">To default</span> </div> <div class="clear"></div> </div>\x3c!--end the-content--\x3e </div> </div> <div class="clear"></div> </div> </div>');
            var w = (new Date).getTime();
            if (localStorage.getItem("menu-type")) try {
                var d = JSON.parse(localStorage.getItem("menu-type"));
                d.value && 18E5 > w - d.timestamp && (c.removeClass("menu-type-1 menu-type-2 menu-type-3 menu-type-4 menu-type-5 menu-type-6 menu-type-7 menu-type-8 menu-type-9 menu-type-10 menu-type-11 menu-type-12 menu-type-13 menu-type-14 menu-type-15 menu-type-16 menu-type-17 menu-type-18 menu-is-sticky "), c.addClass(d.value), "menu-type-13" != d.value && "menu-type-14" != d.value && "menu-type-15" != d.value &&
                    "menu-type-16" != d.value && "menu-type-17" != d.value && "menu-type-18" != d.value || c.addClass("menu-is-sticky"), b(".preseter select[name=menu-type]").val(d.value))
            } catch (a) {
                console.log(a)
            } else is_firefox() && b(".preseter select[name=menu-type]").val("menu-type-1");
            if (localStorage.getItem("page-title-style")) try {
                d = JSON.parse(localStorage.getItem("page-title-style")), d.value && 18E5 > w - d.timestamp && (c.removeClass("page-title-style-1 page-title-style-2 page-title-style-3 page-title-style-3b "), c.addClass(d.value),
                    b(".preseter select[name=page-title-style]").val(d.value), "page-title-style-3b" == d.value && (R = "body.page-title-style-3b .the-content-con > h1:first-of-type{ text-transform: lowercase; }"))
            } catch (a) {
                console.log(a)
            } else is_firefox() && b(".preseter select[name=page-title-style]").val("page-title-style-2");
            if (localStorage.getItem("page-title-align")) try {
                d = JSON.parse(localStorage.getItem("page-title-align")), d.value && 18E5 > w - d.timestamp && (c.removeClass("page-title-align-left page-title-align-center page-title-align-right"),
                    c.addClass(d.value), b(".preseter select[name=page-title-align]").val(d.value))
            } catch (a) {
                console.log(a)
            }
            if (localStorage.getItem("content-align")) try {
                d = JSON.parse(localStorage.getItem("content-align")), d.value && 18E5 > w - d.timestamp && (c.removeClass("content-align-left content-align-center content-align-right"), c.addClass(d.value), b(".preseter select[name=content-align]").val(d.value))
            } catch (a) {
                console.log(a)
            }
            if (localStorage.getItem("heading-style")) try {
                d = JSON.parse(localStorage.getItem("heading-style")),
                    d.value && 18E5 > w - d.timestamp && (b(".the-content-sheet-text").removeClass("heading-style-1 heading-style-2 heading-style-3 heading-style-4 heading-style-5"), b(".the-content-sheet-text").addClass(d.value), ("heading-style-1" == d.value || "heading-style-2" == d.value) && 0 < b(".the-content-sheet-text").eq(0).length && b(".the-content-sheet-text").each(function() {
                        var a = b(this);
                        a.html(a.html().split("<br>").join(" "))
                    }), "heading-style-4" == d.value && 0 < b(".the-content-sheet-text").eq(0).length && b(".the-content-sheet-text").each(function() {
                        var a =
                            b(this);
                        a.html().split("<br>");
                        var c = String(a.html()).replace(/<h2>(.*)<br>(.*)<\/h2>/g, '<h2><span class="light">$1</span>$2</h2>');
                        a.html(c)
                    }), b(".preseter select[name=heading-style]").val(d.value))
            } catch (a) {
                console.log(a)
            }
            if (localStorage.getItem("heading-aligment")) try {
                d = JSON.parse(localStorage.getItem("heading-aligment")), d.value && 18E5 > w - d.timestamp && (b(".the-content-sheet-text").removeClass("heading-is-left heading-is-center heading-is-right"), b(".the-content-sheet-text").addClass(d.value), b(".preseter select[name=heading-aligment]").val(d.value))
            } catch (a) {
                console.log(a)
            }
            if (localStorage.getItem("menu-type")) try {
                d =
                    JSON.parse(localStorage.getItem("menu-type")), d.value && 18E5 > w - d.timestamp && (c.removeClass("menu-type-1 menu-type-2 menu-type-3 menu-type-4 menu-type-5 menu-type-6 menu-type-7 menu-type-8 menu-type-9 menu-type-10 menu-type-11 menu-type-12 "), c.addClass(d.value), b(".preseter select[name=menu-type]").val(d.value))
            } catch (a) {
                console.log(a)
            }
            if (localStorage.getItem("parallax_bg")) try {
                d = JSON.parse(localStorage.getItem("parallax_bg")), d.value && 18E5 > w - d.timestamp && (b(".preseter *[name=parallax_bg]").prop("checked", !1), window.qcreative_options.bg_isparallax = d.value, b(".preseter *[name=parallax_bg][value=" + window.qcreative_options.bg_isparallax + "]").prop("checked", !0))
            } catch (a) {
                console.log(a)
            }
            if (localStorage.getItem("menu-type")) try {
                d = JSON.parse(localStorage.getItem("menu-type")), d.value && 18E5 > w - d.timestamp && (c.removeClass("menu-type-1 menu-type-2 menu-type-3 menu-type-4 menu-type-5 menu-type-6 menu-type-7 menu-type-8 menu-type-9 menu-type-10 menu-type-11 menu-type-12 "), c.addClass(d.value), "menu-type-1" == d.value &&
                    b("img.the-logo").attr("src", "img/logos/logo_m_1-7.png"), "menu-type-2" == d.value && b("img.the-logo").attr("src", "img/logos/logo_m_2-8.png"), "menu-type-3" != d.value && "menu-type-13" != d.value && "menu-type-15" != d.value && "menu-type-17" != d.value || b("img.the-logo").attr("src", "img/logos/logo_m_3-9.png"), "menu-type-4" != d.value && "menu-type-14" != d.value && "menu-type-16" != d.value && "menu-type-18" != d.value || b("img.the-logo").attr("src", "img/logos/logo_m_4-10.png"), "menu-type-5" == d.value && b("img.the-logo").attr("src",
                        "img/logos/logo_m_5.png"), "menu-type-6" == d.value && b("img.the-logo").attr("src", "img/logos/logo_m_6.png"), "menu-type-7" == d.value && b("img.the-logo").attr("src", "img/logos/logo_m_1-7.png"), "menu-type-8" == d.value && b("img.the-logo").attr("src", "img/logos/logo_m_2-8.png"), "menu-type-9" == d.value && b("img.the-logo").attr("src", "img/logos/logo_m_3-9.png"), "menu-type-10" == d.value && b("img.the-logo").attr("src", "img/logos/logo_m_4-10.png"), "menu-type-11" == d.value && b("img.the-logo").attr("src", "img/logos/logo_m_11-12.png"),
                    "menu-type-12" == d.value && b("img.the-logo").attr("src", "img/logos/logo_m_11-12.png"), b(".preseter select[name=menu-type]").val(d.value))
            } catch (a) {
                console.log(a)
            }
            if (localStorage.getItem("blur_ammount")) try {
                d = JSON.parse(localStorage.getItem("blur_ammount")), d.value && 18E5 > w - d.timestamp && (window.qcreative_options.blur_ammount = Number(d.value), b(".preseter *[name=blur_ammount]").val(d.value), cb = Number(d.value))
            } catch (a) {
                console.log(a)
            }
            if (localStorage.getItem("saturation_ammount")) try {
                if (d = JSON.parse(localStorage.getItem("saturation_ammount")),
                    d.value && 18E5 > w - d.timestamp) {
                    b(".preseter *[name=saturation_ammount]").val(d.value);
                    var La = 100 - Number(d.value),
                        R = ".translucent-con .translucent-canvas{ -webkit-filter: grayscale(" + La + "%); -ms-filter: grayscale(" + La + "%); -moz-filter: grayscale(" + La + "%);  filter: grayscale(" + La + "%); }";
                    ea.html(ea.html() + R)
                }
            } catch (a) {
                console.log(a)
            }
            if (localStorage.getItem("color_primary")) try {
                d = JSON.parse(localStorage.getItem("color_primary")), d.value && 18E5 > w - d.timestamp && (b(".preseter *[name=color_primary]").val(d.value),
                    R = "ul.the-actual-nav li.current-menu-item > a, ul.the-actual-nav > li:hover > a, ul.redcircle li:before, .dzs-tabs.skin-qcre .tabs-menu .tab-menu-con.active .tab-menu, .btn-read-more.color-highlight, .ul.the-actual-nav li ul li > a, .dzs-tabs.skin-qcre.is-toggle .tabs-menu .tab-menu-con.active .tab-menu, .btn-read-more:hover, .btn-read-more:focus:hover, .bullet-feature-form .icon-con, .bullet-feature-form.form-hexagon .icon-con, ul.the-actual-nav li ul li > a,.sidebar-block h4, .dzstooltip.skin-red, .qc-pagination > li.active > a, .qc-pagination > li:hover > a,.btn-full-white:hover,body.page-blogsingle .blog-link-con .portfolio-link--title:hover,body.page-blogsingle .blog-link-con .portfolio-link--toback.center-td:hover > a,.btn-full-red,body.page-blogsingle .blog-comments .btn-load-more-comments:hover,.selector-con-for-skin-melbourne .a-category.active, .selector-con-for-skin-melbourne .a-category:hover,.zfolio.skin-melbourne .zfolio-item:hover .item-meta,.ajax-preloader .loader:after,.zfolio.skin-silver .selector-con .a-category.active, .zfolio.skin-silver .selector-con .a-category:hover, .zfolio.skin-melbourne .selector-con .a-category.active, .zfolio.skin-melbourne .selector-con .a-category:hover, .zfolio.skin-gazelia .selector-con .a-category.active, .zfolio.skin-gazelia .selector-con .a-category:hover, .zfolio.skin-qcre .selector-con .a-category.active, .zfolio.skin-qcre .selector-con .a-category:hover,ul.sidebar-count-list > li:hover > a .the-count,.sidebar-search-con .search-submit-con:hover, .team-member-element .meta-con .social-profiles .circle-con:hover,body.body-style-light .qc-pagination > li.active > a, body.body-style-light .qc-pagination > li:hover > a,.map-canvas-con .contact-info .services-lightbox--close:hover,.advancedscroller.skin-qcre > .arrowsCon > .arrow-left:hover, .advancedscroller.skin-qcre .arrowsCon > .arrow-right:hover,.qcreative-pricing-table a.signup-button:hover,.advancedscroller .item .description-wrapper:hover .description-wrapper--icon-con,.advancedscroller.skin-karma-inset .arrowsCon > .arrow-left:hover, .advancedscroller.skin-karma-inset .arrowsCon > .arrow-right:hover,body.page-portfolio-single .the-content-con.fullit .portfolio-single-liquid-title > h2,body.page-portfolio-single .the-content-con.fullit .portfolio-single-liquid-title .portfolio-single-liquid-info:hover,.main-container .the-content-con.fullit .portfolio-single-subtitle,.portfolio-link-con .portfolio-link--title:hover,.portfolio-link-con .portfolio-link--toback.center-td:hover,body.page-portfolio-single .the-content-con.fullit .arrow-left-for-skin-qcre:hover, body.page-portfolio-single .the-content-con.fullit .arrow-right-for-skin-qcre:hover,.zoombox-maincon.skin-whitefull .main-con > .slider-con .arrow-left-for-skin-qcre:hover, .zoombox-maincon.skin-whitefull .main-con > .slider-con .arrow-right-for-skin-qcre:hover,.services-lightbox-content .services-lightbox--close:hover,.advancedscroller .item .description-wrapper.active .description-wrapper--icon-con, ul.nostyle li > .icon-con, body.menu-type-13 nav.qcreative--nav-con ul.the-actual-nav > li.current-menu-item > a, body.menu-type-13 nav.qcreative--nav-con ul.the-actual-nav > li:hover > a, body.menu-type-14 nav.qcreative--nav-con ul.the-actual-nav > li.current-menu-item > a, body.menu-type-14 nav.qcreative--nav-con ul.the-actual-nav > li:hover > a, body.menu-type-15 nav.qcreative--nav-con ul.the-actual-nav > li.current-menu-item > a, body.menu-type-15 nav.qcreative--nav-con ul.the-actual-nav > li:hover > a, body.menu-type-16 nav.qcreative--nav-con ul.the-actual-nav > li.current-menu-item > a, body.menu-type-16 nav.qcreative--nav-con ul.the-actual-nav > li:hover > a, body.menu-type-17 nav.qcreative--nav-con ul.the-actual-nav > li.current-menu-item > a, body.menu-type-17 nav.qcreative--nav-con ul.the-actual-nav > li:hover > a, body.menu-type-18 nav.qcreative--nav-con ul.the-actual-nav > li.current-menu-item > a, body.menu-type-18 nav.qcreative--nav-con ul.the-actual-nav > li:hover > a,body.menu-type-15 nav.qcreative--nav-con ul.the-actual-nav > li ul, body.menu-type-16 nav.qcreative--nav-con ul.the-actual-nav > li ul, body.menu-type-17 nav.qcreative--nav-con ul.the-actual-nav > li ul, body.menu-type-18 nav.qcreative--nav-con ul.the-actual-nav > li ul, .audioplayer.skin-redlights .ap-controls .ap-controls-left .con-playpause:hover, .team-member-element-2 .meta-con .social-profiles .circle-con:hover, .dzs-tabs.skin-menu .tabs-menu .tab-menu-con.active .tab-menu, .dzs-tabs.skin-menu .tabs-menu .tab-menu-con:hover .tab-menu, .element-sideways.with-fa .icon-con{ background-color: " +
                    d.value + "; } body .zfolio.under-720 .selector-con div.a-category.active, body .selector-con-for-skin-melbourne.under-720 div.a-category.active{ background-color: " + d.value + "!important; } ul.the-actual-nav li ul li.current-menu-item > a, ul.the-actual-nav li ul > li:hover > a, .btn-read-more.style-hallowred, .btn-read-more.style-hallowred:focus, .bullet-feature-red .icon-con .fa,a.post-main-link:hover,body.page-blogsingle .post-meta-below a:hover,body.page-blogsingle .blog-comments ul.itemCommentsList .comment-right-meta a:hover,ul.sidebar-count-list > li:hover > a .cat-name,.post-meta a:hover,.main-gallery--descs .main-gallery--desc .big-number,.contact-info a:hover,.sidebar-block-archive > a:last-child:hover,body.page-portfolio-single .portfolio-single-meta-con a,body.page-portfolio-single blockquote a:hover,body.menu-type-2 ul.the-actual-nav li ul li.current-menu-item > a, body.menu-type-2 ul.the-actual-nav li ul > li:hover > a,.zoombox-maincon.skin-whitefull .main-con > .info-con blockquote a:hover,.excerpt-content blockquote a:hover,.arrow-left-for-skin-qcre-2:hover > i, .arrow-right-for-skin-qcre-2:hover > i, .close-btn-for-skin-qcre:hover > i, .post-meta a,body.menu-type-15 nav.qcreative--nav-con ul.the-actual-nav > li ul li:hover > a, body.menu-type-15 nav.qcreative--nav-con ul.the-actual-nav > li ul li.current-menu-item > a, body.menu-type-16 nav.qcreative--nav-con ul.the-actual-nav > li ul li:hover > a, body.menu-type-16 nav.qcreative--nav-con ul.the-actual-nav > li ul li.current-menu-item > a, body.menu-type-17 nav.qcreative--nav-con ul.the-actual-nav > li ul li:hover > a, body.menu-type-17 nav.qcreative--nav-con ul.the-actual-nav > li ul li.current-menu-item > a, body.menu-type-18 nav.qcreative--nav-con ul.the-actual-nav > li ul li:hover > a, body.menu-type-18 nav.qcreative--nav-con ul.the-actual-nav > li ul li.current-menu-item > a{ color:  " +
                    d.value + ";} .dzs-tabs.skin-qcre.is-toggle .tabs-menu .tab-menu-con.active .plus-sign rect{ fill: " + d.value + ";} .btn-read-more.style-hallowred, .btn-read-more.style-hallowred:focus, .bullet-feature-red .icon-con,.arrow-left-for-skin-qcre-2:hover, .arrow-right-for-skin-qcre-2:hover, .close-btn-for-skin-qcre:hover,.dzs-tabs.skin-qcre:not(.is-toggle) .tabs-menu .tab-menu-con.active{ border-color: " + d.value + ";} .bullet-feature-form.form-hexagon .icon-con:after,.selector-con.selector-con-for-skin-melbourne .categories .a-category:before,.main-container .the-content-con.fullit .zfolio.skin-silver .selector-con .categories .a-category:before, .main-container .the-content-con.fullit .zfolio.skin-melbourne .selector-con .categories .a-category:before, .dzs-tabs.skin-menu .tabs-menu .tab-menu-con:before{ border-top-color: " +
                    d.value + ";} .bullet-feature-form.form-hexagon .icon-con:before, .ajax-preloader:before,.zfolio.skin-melbourne .zfolio-item:hover .item-meta:before,body.page-portfolio-single .portfolio-single-meta-con a:hover, .post-meta a:hover{ border-bottom-color: " + d.value + ";} .dzstooltip.skin-red.arrow-right:before{ border-left-color: " + d.value + ";} ::selection{ background-color: " + d.value + "; } ::-moz-selection{ background-color: " + d.value + "; } .btn-read-more.style-hallowred:hover, .btn-read-more.style-hallowred:focus, .bullet-feature-red .icon-con{  border-color: " +
                    d.value + ";color: #fff;} .main-container .btn-zoomsounds:hover {  border-color: " + d.value + "; background-color: " + d.value + ";}", ea.html(ea.html() + R))
            } catch (a) {
                console.log(a)
            }
            b.fn.slider && b(".slider-ui").each(function() {
                var a = b(this),
                    c = 100,
                    d = 1;
                a.parent().hasClass("slider-ui-con") && (d = a.parent().find(".slider-ui-target-field").eq(0).val(), a.hasClass("slider-ui-for-blur") && (c = 30));
                a.slider({
                    min: 0,
                    max: c,
                    value: d,
                    slide: function(a, c) {
                        b(this).parent().hasClass("slider-ui-con") && b(this).parent().find(".slider-ui-target-field").eq(0).val(c.value)
                    }
                })
            })
        }
        var Ma =
            b(".preseter .the-content");
        Ma[0] && Ma[0].addEventListener && Ma[0].addEventListener("DOMMouseScroll", p, !1);
        Ma[0].onmousewheel = p
    }
    P = parseInt(qcreative_options.content_width, 10);
    if (isNaN(P) || 0 == P) P = 0;
    ca = parseInt(qcreative_options.content_gap_width, 10);
    if (isNaN(ca) || 0 == ca) ca = 0;
    0 < P && (Ua = fa = P, R = " body .main-container .the-content-con, body.page-blogsingle .the-content-con{max-width:" + P + "px;} body.page-portfolio-single .the-content-con:not(.fullit){ max-width:" + P + "px; }", ea.html(ea.html() + R));
    0 < ca && (R = " @media (min-width:992px) { .row{  margin-left:-" +
        Math.round(ca / 2) + "px; margin-right:-" + Math.round(ca / 2) + "px; } .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12{ padding-left:" +
        Math.round(ca / 2) + "px; padding-right:" + Math.round(ca / 2) + "px;} .the-content-con > .the-content{ padding: " + ca + "px; } }", ea.html(ea.html() + R));
    (c.hasClass("menu-type-5") || c.hasClass("menu-type-6")) && c.addClass("menu-is-sticky");
    if (c.hasClass("menu-type-9") || c.hasClass("menu-type-10") || c.hasClass("menu-type-13") || c.hasClass("menu-type-14") || c.hasClass("menu-type-15") || c.hasClass("menu-type-16") || c.hasClass("menu-type-17") || c.hasClass("menu-type-18")) {
        var Na = r.children(".nav-social-con");
        0 < Na.length &&
            Na.width(Na.children(".social-icons").eq(0).width() + 3);
        v.css("margin-right", String(Na.outerWidth() + 30) + "px")
    }
    Rb = window.location.href;
    if ("on" == window.qcreative_options.enable_ajax && window)
        if ("detect" == window.qcreative_options.site_url) {
            var Aa = Rb.split("/"),
                ga = 0;
            for (ga in Aa) 0 < ga && (ka += "/"), ga < Aa.length - 1 && (ka += Aa[ga])
        } else ka = window.qcreative_options.site_url;
    if (11 == ieVersion()) {
        var ac = document.getElementsByTagName("head")[0],
            sb = document.createElement("script");
        sb.type = "text/javascript";
        sb.src = "js/FastBlur.js";
        ac.appendChild(sb)
    }
    b("script").each(function() {
        var a = b(this);
        a.attr("src") && ba.push(a.attr("src"));
        0 == String(a.attr("src")).indexOf("https://maps.googleapis.com/maps/api") && (window.google_maps_loaded = !0)
    });
    b("link").each(function() {
        var a = b(this);
        "stylesheet" == a.attr("rel") && a.attr("href") && (a = a.attr("href"), 0 == a.indexOf("./") && (a = a.replace("./", "")), ba.push(a))
    });
    b(this).scrollTop(0);
    setTimeout(function() {}, 4E3);
    0 < c.children(".custom-outside-content-1").length && (Bb = !0);
    "page-homepage" != m && "page-gallery-w-thumbs" !=
        m && "on" == window.qcreative_options.bg_isparallax && b(".translucent-canvas").addClass("for-parallaxer");
    "on" == window.qcreative_options.enable_ajax && 0 == c.children(".ajax-preloader").length && c.append('<div class="ajax-preloader"><div class="loader"></div></div>');
    Gb();
    A();
    setTimeout(function() {
        b(".qcreative--520-nav-con .dzs-select-wrapper-head").bind("click", z)
    }, 1E3);
    c.children("#wpadminbar").length && b(document).bind("mousemove", $b);
    b(document).delegate(".main-gallery-buttons-con > *, .qcreative--520-nav-con .dzs-select-wrapper-head, .close-responsive-con, .custom-menu a",
        "click", z);
    b(document).delegate("form.for-contact", "submit", function(a) {
        var c = b(this);
        if ("submit" == a.type && c.hasClass("for-contact")) {
            a = !1;
            var d = c.find("input[name=name]").eq(0);
            "" == d.val() && (d.addClass("needs-attention"), d.eq(0).val("Please complete this field"), setTimeout(function(a) {
                a.removeClass("needs-attention");
                a.val("")
            }, 2E3, d), a = !0);
            d = c.find("input[name=subject]").eq(0);
            "" == d.val() && (d.addClass("needs-attention"), d.val("Please complete this field"), setTimeout(function(a) {
                a.removeClass("needs-attention");
                a.val("")
            }, 2E3, d), a = !0);
            d = c.find("*[name=comment]").eq(0);
            "" == d.val() && (d.addClass("needs-attention"), d.val("Please complete this field"), setTimeout(function(a) {
                a.removeClass("needs-attention");
                a.val("")
            }, 2E3, d), a = !0);
            d = b("input[name=email]").eq(0);
            0 == Pb(d.val()) && (d.addClass("needs-attention"), d.val("Invalid email address"), setTimeout(function(a) {
                a.removeClass("needs-attention");
                a.val("")
            }, 2E3, d), a = !0);
            if (a) return !1;
            a = {
                postdata: c.serialize()
            };
            b.post("mail.php", a, function(a) {
                void 0 != window.console &&
                    console.log("Got this from the server: " + a);
                c.find(".form-feedback").eq(0).addClass("active");
                c.find("input[name=name]").eq(0).val("");
                c.find("input[name=email]").eq(0).val("");
                c.find("input[name=subject]").eq(0).val("");
                c.find("textarea[name=comment]").eq(0).val("");
                setTimeout(function() {
                    c.find(".form-feedback").eq(0).removeClass("active")
                }, 2E3)
            });
            return !1
        }
    });
    b(document).delegate(".map-toggler", "click", z);
    b(document).delegate(".menu-toggler", "click", z);
    b(document).delegate(".menu-closer", "click",
        z);
    b(document).delegate(".services-lightbox", "click", z);
    b(document).delegate(".services-lightbox--close", "click", z);
    b(document).delegate(".contact-form .contact-form-button", "click", z);
    b(document).delegate(".submit-comment", "click", z);
    b(document).delegate(".portfolio-single-liquid-info", "click", z);
    b(document).delegate(".arrow-left-for-skin-qcre", "click", z);
    b(document).delegate(".arrow-right-for-skin-qcre", "click", z);
    b(document).delegate(".description-wrapper--icon-con", "click", z);
    b(document).delegate(".submenu-toggler",
        "click", z);
    b(document).delegate(".preseter-button--save", "click", z);
    b(document).delegate(".preseter-button--default", "click", z);
    b(document).delegate(".gallery-thumbs--image-container .advancedscroller .arrow-right,.gallery-thumbs--image-container .advancedscroller .arrow-left", "click", function(a) {
        a = b(this);
        a.hasClass("arrow-left") && (ia--, 0 > ia && (ia = f.find(".advancedscroller").find(".thumbsClip").children().length - 1));
        a.hasClass("arrow-right") && (ia++, ia >= f.find(".advancedscroller").find(".thumbsClip").children().length &&
            (ia = 0));
        x ? (x.find(".thumbs-list .thumb").removeClass("curr-thumb"), x.find(".thumbs-list .thumb").eq(ia).addClass("curr-thumb")) : console.warn("gallery_thumb_con not found")
    });
    "mousemove" == qcreative_options.menu_scroll_method ? r.bind("mousemove", z) : (r[0].addEventListener && r[0].addEventListener("DOMMouseScroll", Ob, !1), r[0].onmousewheel = Ob);
    c.addClass("menu-scroll-method-" + qcreative_options.menu_scroll_method);
    b(window).bind("beforeunload", function() {});
    b(window).bind("resize", wa);
    wa(null, {
        redraw_canvas: !1
    });
    b(window).bind("scroll", function(a) {
        Qb = b(window).scrollTop();
        Ra && (a = ub - Qb, 0 > a && (a = 0), Sa.css("top", a + "px"))
    });
    window.addEventListener && window.addEventListener("popstate", Tb);
    b(document).delegate(".the-actual-nav a", "click", da);
    b(".menu-toggler-target, .logo-con").find("a").bind("click", da);
    (c.hasClass("menu-type-3") || c.hasClass("menu-type-4") || c.hasClass("menu-type-5") || c.hasClass("menu-type-6") || c.hasClass("menu-type-7") || c.hasClass("menu-type-8")) && v.children().each(function() {
        var a = b(this);
        0 < a.find("ul").length &&
            a.append('<i class="sub-menu-indicator fa fa-chevron-circle-right"></i>')
    });
    Ga(0);
    Mb();
    window.qcreative_gm_init = ob
});

function qcre_callback_for_zoombox(b) {
    b.prepend('<div class="qcreative--520-nav-con--placeholder" style="height: ' + jQuery(".qcreative--520-nav-con").eq(0).height() + 'px;"></div>');
    window.dzsscr_init && window.dzsscr_init(".zoombox-maincon .scroller-con", {
        settings_skin: "skin_apple",
        enable_easing: "on",
        settings_autoresizescrollbar: "on",
        settings_chrome_multiplier: .12,
        settings_firefox_multiplier: -3,
        settings_refresh: 700,
        settings_autoheight: "off",
        touch_leave_native_scrollbar: "on"
    });
    jQuery(".main-container")
}
window.qcre_open_social_link = function(b) {
    var p, k;
    p = window.screen.width / 2 - 260;
    k = window.screen.height / 2 - 300;
    window.open(b, "sharer", "status=no,height=500,width=500,resizable=yes,left=" + p + ",top=" + k + ",screenX=" + p + ",screenY=" + k + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no")
};
window.qcre_callback_for_zoombox = qcre_callback_for_zoombox;

function ieVersion() {
    var b = window.navigator.userAgent;
    return 0 < b.indexOf("Trident/7.0") ? 11 : 0 < b.indexOf("Trident/6.0") ? 10 : 0 < b.indexOf("Trident/5.0") ? 9 : 0
}
var isiPad = null != navigator.userAgent.match(/iPad/i);

function is_ie11() {
    return !window.ActiveXObject && "ActiveXObject" in window
}

function get_query_arg(b, p) {
    if (-1 < b.indexOf(p + "=")) {
        var k = (new RegExp("[?&]" + p + "=.+")).exec(b);
        if (null != k) return k = k[0], -1 < k.indexOf("&") && (k = k.split("&")[1]), k.split("=")[1]
    }
}

function is_touch_device() {
    return !!("ontouchstart" in window)
}

function can_history_api() {
    return !(!window.history || !history.pushState)
}
window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(b, p) {
        window.setTimeout(b, 1E3 / 60)
    }
}();