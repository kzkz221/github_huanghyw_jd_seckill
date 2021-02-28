/*!Name: contrast.js
 * Date: 2021-2-25 18:16:27 */
define("MOD_ROOT/preview/contrast", function(require, exports, module) {
    require("PLG_ROOT/jQuery.imgScroll"), require("jdf/1.0.0/unit/trimPath/1.0.0/trimPath"), require("MOD_ROOT/preview/contrast.css"), require("MOD_ROOT/ETab/ETab");
    var t = require("MOD_ROOT/common/tools/tools"),
        e = function() {
            for (var t = 3, e = document.createElement("div"), i = e.getElementsByTagName("i"); e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]--\x3e", i[0];)
                ;
            return t > 4 ? t : void 0
        }(),
        i = {
            getPriceNum: function(t, e, i, a) {
                t = "string" == typeof t ? [t] : t, e = e || $("body"), i = i || "J-p-", $.ajax({
                    url: "//p.3.cn/prices/mgets?skuIds=J_" + t.join(",J_") + "&type=1",
                    dataType: "jsonp",
                    success: function(t) {
                        if (!t && !t.length)
                            return !1;
                        for (var s = 0; s < t.length; s++) {
                            var o = t[s].id.replace("J_", ""),
                                n = parseFloat(t[s].p, 10);
                            n > 0 ? e.find("." + i + o).html("\uffe5" + t[s].p) : e.find("." + i + o).html("\u6682\u65e0\u62a5\u4ef7"), "function" == typeof a && a(o, n, t)
                        }
                    }
                })
            },
            TPL: {
                contrast: '<div id="pop-compare" data-load="false" class="pop-compare' + (pageConfig.wideVersion && pageConfig.compatible ? "" : " pop-compare-narrow") + '"><div class="pop-wrap"><p class="pop-compare-tips"></p><div class="pop-inner"><div class="diff-hd"><ul class="tab-btns clearfix"><li class="current" data-tab="trigger"><a href="javascript:;">\u5bf9\u6bd4\u680f</a></li><li data-tab="trigger"><a href="javascript:;">\u6700\u8fd1\u6d4f\u89c8</a></li></ul><div class="operate"><a href="javascript:;" class="hide-me">\u9690\u85cf</a></div></div><div class="diff-bd tab-cons"><div class="tab-con" data-tab="item"><div id="diff-items" class="diff-items clearfix"><dl class="item-empty"><dt>1</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl><dl class="item-empty"><dt>2</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl><dl class="item-empty"><dt>3</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl><dl class="item-empty"><dt>4</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl></div><div class="diff-operate"><a target="_blank" id="goto-contrast" href="#none" class="btn-compare-b">\u5bf9\u6bd4</a><a class="del-items">\u6e05\u7a7a\u5bf9\u6bd4\u680f</a></div></div><div class="tab-con tab-scroll" data-tab="item" style="display:none;"><div class="scroll-item clearfix"><span id="sc-prev" class="scroll-btn sb-prev">&lt;</span><span id="sc-next" class="scroll-btn sb-next">&gt;</span><div class="scroll-con clearfix"><ul id="scroll-con-inner"><p class="scroll-loading ac">\u8f7d\u5165\u4e2d...</p></ul></div></div></div></div></div></div></div>',
                item: '<dl class="hasItem" id="cmp_item_${sku}" fore="${ind}">  <dt>      <a target="_blank" href="//item.jd.com/${data[sku].skuId}.html"><img src="${pageConfig.FN_GetImageDomain(data[sku].skuId)}n5/${data[sku].imagePath}" width="50" height="50"></a>  </dt>  <dd>      <a target="_blank" class="diff-item-name" href="//item.jd.com/${data[sku].skuId}.html">${data[sku].name}</a>      <span class="p-price"><strong class="J-p-${data[sku].skuId}"></strong><a class="del-comp-item" skuid="${data[sku].skuId}">\u5220\u9664</a></span>  </dd></dl>',
                recentItem: '{for item in data}<li id="rec_item_${item.sku}" data-tab="item" data-push="${pageConfig._contrast.push(item.sku)}"><div class="rec_item_wrap">  <div class="dt">      <a target="_blank" href="//item.jd.com/${item.sku}.html"><img src="${pageConfig.FN_GetImageDomain(item.sku)}n5/${item.img}" width="50" height="50"></a>  </div>  <div class="dd">      <a target="_blank" href="//item.jd.com/${item.sku}.html" class="diff-item-name">${item.t}</a>      <div class="btns clb">          <span class="p-price"><strong class="J-p-${item.sku}"></strong></span>          <a id="recent_${item.sku}" data-recent="true" data-sku="${item.sku}" skuid="${item.sku}" class="J_contrast btn-compare btn-compare-s"><span>\u5bf9\u6bd4</span></a>      </div>  </div></div></li>{/for}'
            },
            init: function(t, e, i) {
                return this.cookieName = e || "_contrast", this.recentCharset = i || "utf-8", this.bindEvent("cmpBtn").btnStyle(null, "set"), "side" == readCookie(this.cookieName + "_status") && $("#side-cmp").length < 1 ? $("#sidepanel").prepend('<span id="side-cmp"><a class="compareHolder" href="javascript:;"><b></b>\u5bf9\u6bd4\u680f</a></span>') : readCookie(this.cookieName) && this.showPopWin(null), this.bindEvent("showWin"), this.domain = pageConfig.FN_getDomain(), "1" == $("#J_goodsList").find("ul.gl-warp").attr("data-tpl") && $("#backtop").prepend('<div class="b-item"><a class="b-i-contrast" href="#none">\u5546\u54c1\u5bf9\u6bd4</a></div>'), this
            },
            bindEvent: function(t) {
                var e = ($(".J_contrast"), $(".del-items"), this);
                return "cmpBtn" == t && $("body").undelegate(".J_contrast", "click").delegate(".J_contrast", "click", function() {
                    var t = $(this).attr("data-sku");
                    (readCookie(e.cookieName) || "").split(".").length < 4 ? (e.showPopWin(t), "true" == $(this).attr("data-recent") && e.switchTab(0)) : e.hasCookie(t) ? ("true" == $(this).attr("data-recent") && e.switchTab(0), e.showPopWin(t)) : (e.showPopWin(null), e.setMessage("\u5bf9\u6bd4\u680f\u5df2\u6ee1\uff0c\u60a8\u53ef\u4ee5\u5220\u9664\u4e0d\u9700\u8981\u7684\u680f\u5185\u5546\u54c1\u518d\u7ee7\u7eed\u6dfb\u52a0\u54e6\uff01"))
                }), "delAll" == t && $("body").undelegate(".del-items", "click").delegate(".del-items", "click", function() {
                    e.delContrastItem(null, !0), $("#goto-contrast").attr("href", "#none")
                }), "delHover" == t && ($(".hasItem").hover(function() {
                    $(this).find(".del-comp-item").css("visibility", "visible")
                }, function() {
                    $(this).find(".del-comp-item").css("visibility", "hidden")
                }), $(".hasItem .del-comp-item").bind("click", function() {
                    var t = $(this).attr("skuid");
                    e.delContrastItem(t)
                }), $("#goto-contrast").click(function() {
                    var t = readCookie(e.cookieName) || "",
                        i = t.split(".");
                    if (i.length < 2)
                        return e.setMessage("\u81f3\u5c11\u6709\u4e24\u4ef6\u5546\u54c1\u624d\u80fd\u5bf9\u6bd4\u54e6\uff01"), !1;
                    for (var a = [0, 0, 0, 0], s = 0; s < i.length; s++)
                        a[s] = i[s];
                    $("#goto-contrast").attr("href", "//item.jd.com/compare/" + a.join("-") + ".html")
                })), "hide" == t && $("body").undelegate(".diff-hd .hide-me", "click").delegate(".diff-hd .hide-me", "click", function() {
                    e.hidePopWin()
                }), "showWin" == t && $("body").delegate(".b-i-contrast", "click", function() {
                    e.showPopWin(null, !0)
                }), this
            },
            switchTab: function(t) {
                $(".diff-hd li").eq(t).trigger("click")
            },
            btnStyle: function(t, e) {
                if (t)
                    "set" == e && ($(".J_contrast").filter('[data-sku="' + t + '"]').addClass("selected"), $("#comp_" + t + ",#recent_" + t).addClass("btn-compare-s-active"), $("#cmp_" + t).text("\u53d6\u6d88\u5bf9\u6bd4")), "del" == e && ($(".J_contrast").filter('[data-sku="' + t + '"]').removeClass("selected"), $("#comp_" + t + ",#recent_" + t).removeClass("btn-compare-s-active"), $("#cmp_" + t).text("\u52a0\u5165\u5bf9\u6bd4"));
                else {
                    var i = readCookie(this.cookieName) || "";
                    if (i = i.split("."), i.length < 5)
                        for (var a = 0; a < i.length; a++)
                            "set" == e && ($(".J_contrast").filter('[data-sku="' + i[a] + '"]').addClass("selected"), $("#comp_" + i[a] + ",#recent_" + i[a]).addClass("btn-compare-s-active"), $("#cmp_" + i[a]).text("\u53d6\u6d88\u5bf9\u6bd4")), "del" == e && ($(".J_contrast").filter('[data-sku="' + i[a] + '"]').removeClass("selected"), $("#comp_" + i[a] + ",#recent_" + i[a]).removeClass("btn-compare-s-active"), $("#cmp_" + i[a]).text("\u52a0\u5165\u5bf9\u6bd4"))
                }
                return this
            },
            loadExistList: function(t) {
                var e = readCookie(this.cookieName) || "";
                e = e.split(".");
                for (var i = 0; i < e.length; i++)
                    this.setContrastItem(e[i]), i + 1 == e.length ? this.setContrastItem(e[i], t) : this.setContrastItem(e[i])
            },
            showPopWin: function(t, i) {
                var a = $("#pop-compare"),
                    s = this;
                t = t || null, $("#pop-compare").length < 1 && $("body").append(this.TPL.contrast), $("#diff-items .hasItem").length < 1 && (readCookie(this.cookieName) ? this.loadExistList(function() {
                    s.hasCookie(t) ? s.delContrastItem(t) : s.setContrastItem(t)
                }) : s.setContrastItem(t)), "false" == $("#pop-compare").attr("data-load") ? ($("#pop-compare").show(), a.attr("data-load", "true"), $("#pop-compare").ETab({
                    onSwitch: function(t) {
                        1 == t && $(".scroll-loading").length > 0 && s.getRecent(function(t) {
                            s.setRecentScroll(), s.getPriceNum(t, $("#pop-compare"), null, function(t, e, i) {})
                        })
                    }
                }), 6 !== e && $("#pop-compare").animate({
                    bottom: 0
                }, 100)) : ("side" == readCookie(s.cookieName + "_status") && ($("#pop-compare").show().attr("data-load", "true"), 6 !== e && $("#pop-compare").show().animate({
                    bottom: 0
                }), createCookie(s.cookieName + "_status", "show", 30, "/;domain=" + this.domain)), s.hasCookie(t) ? s.delContrastItem(t) : s.setContrastItem(t)), s.bindEvent("delAll").bindEvent("hide")
            },
            hidePopWin: function() {
                var t = this;
                if ($("#side-cmp").length < 1 && $("#sidepanel").prepend('<span id="side-cmp"><a class="compareHolder" href="javascript:;"><b></b>\u5bf9\u6bd4\u680f</a></span>'), 6 == e)
                    $("#pop-compare").hide();
                else {
                    if ($(".pop-wrap").is(":animated"))
                        return !1;
                    $("#pop-compare").css("overflow", "hidden").find(".pop-wrap").animate({
                        left: "990px"
                    }, 100, function() {
                        $("#pop-compare").removeAttr("style").css({
                            overflow: "visible",
                            bottom: "-200px"
                        }).hide().find(".pop-wrap").removeAttr("style").css("left", 0)
                    })
                }
                t.bindEvent("showWin"), createCookie(t.cookieName + "_status", "side", 30, "/;domain=" + this.domain)
            },
            setContrastItem: function(t, e) {
                var i = $("#pop-compare"),
                    a = readCookie(this.cookieName) || "",
                    s = (a.split(".").length, this);
                if (s.hasCookie(t) && "true" == i.attr("data-load"))
                    s.delContrastItem(t);
                else {
                    if (!t)
                        return !1;
                    $.ajax({
                        url: "//fts.jd.com/ware/history?ids=" + t,
                        dataType: "jsonp",
                        success: function(a) {
                            var o = $("#diff-items dl").index($("#diff-items").find(".item-empty").eq(0)),
                                n = {
                                    data: a,
                                    sku: t,
                                    ind: o
                                };
                            ($("#cmp_item_" + t).length < 1 || !s.hasCookie(t)) && (i.find(".item-empty").eq(0).replaceWith(s.TPL.item.process(n)), s.getPriceNum(t, $("#pop-compare"), null, function(t, e, i) {})), s.bindEvent("delHover").setCookie(t).btnStyle(t, "set"), createCookie(s.cookieName + "_status", "show", 30, "/;domain=" + s.domain), "function" == typeof e && e(), s.setContrastBtn("add"), $("#pop-compare").attr("data-load", "true")
                        }
                    })
                }
                return this
            },
            setContrastBtn: function(t) {
                var e = readCookie(this.cookieName) || "",
                    i = e.split(".").length;
                "add" == t && i > 1 && $("#goto-contrast").addClass("compare-active"), "reduce" == t && i < 2 && $("#goto-contrast").removeClass("compare-active")
            },
            sortList: function() {
                var t = $("#diff-items"),
                    e = [];
                t.find(".hasItem").each(function() {
                    e.push($(this).clone())
                }), t.html("");
                for (var i = 0; i < 4; i++)
                    i > e.length - 1 ? $("#diff-items").append('<dl class="item-empty"><dt>' + (i + 1) + "</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl>") : $("#diff-items").append(e[i]);
                return this.bindEvent("delHover"), this
            },
            delContrastItem: function(t, e) {
                if (e) {
                    $("#diff-items").html("");
                    for (var i = 1; i < 5; i++)
                        $("#diff-items").append('<dl class="item-empty"><dt>' + i + "</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl>");
                    this.btnStyle(null, "del"), $("#goto-contrast").removeClass("compare-active"), $(".btn-compare").removeClass("btn-compare-s-active"), $("#goto-contrast").unbind("click"), createCookie(this.cookieName, "", -1, "/;domain=" + this.domain)
                } else
                    $("#cmp_item_" + t).replaceWith('<dl class="item-empty"><dt>' + (parseInt($("#cmp_item_" + t).attr("fore"), 10) + 1) + "</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl>"), this.sortList().delCookie(t).btnStyle(t, "del"), this.setContrastBtn("reduce");
                return this
            },
            delCookie: function(t) {
                if (this.hasCookie(t) && null !== t) {
                    var e = readCookie(this.cookieName),
                        i = e.replace(new RegExp(t + ".|." + t + "|" + t), "");
                    createCookie(this.cookieName, i, 0, "/;domain=" + this.domain)
                }
                return this
            },
            setCookie: function(t) {
                var e = readCookie(this.cookieName) || "";
                return skuArr = e.split("."), !this.hasCookie(t) && skuArr.length < 4 && (e ? (skuArr.push(t), createCookie(this.cookieName, skuArr.join("."), 1, "/;domain=" + this.domain)) : createCookie(this.cookieName, t, 1, "/;domain=" + this.domain)), this
            },
            hasCookie: function(t) {
                if (t)
                    return new RegExp(t).test(readCookie(this.cookieName))
            },
            setRecentScroll: function() {
                var t = this;
                $(".scroll-con").imgScroll({
                    visible: 4,
                    speed: 300,
                    step: 1,
                    loop: !1,
                    direction: "x",
                    evtType: "click",
                    next: ".sb-next",
                    prev: ".sb-prev",
                    disableClass: "disabled"
                }), t.bindEvent("cmpBtn")
            },
            getRecent: function(e) {
                var i = this,
                    a = t.getAreaId().areaIds[0];
                $.ajax({
                    url: "//diviner.jd.com/diviner",
                    data: {
                        p: 202001,
                        lid: a,
                        ck: "pin,aview",
                        lim: 23,
                        ec: this.recentCharset
                    },
                    dataType: "jsonp",
                    success: function(t) {
                        $("#scroll-con-inner p").length > 0 && $("#scroll-con-inner p").remove(), pageConfig._contrast = [], $("#scroll-con-inner").append(i.TPL.recentItem.process(t));
                        var a = readCookie(i.cookieName);
                        if (a)
                            for (var s = a.split("."), o = s.length, n = 0; n < o; n++)
                                $("#rec_item_" + s[n]).length > 0 && i.btnStyle(s[n], "set");
                        "function" == typeof e && e(pageConfig._contrast)
                    }
                })
            },
            setMessage: function(t) {
                $(".pop-compare-tips").text(t).fadeIn(), setTimeout(function() {
                    $(".pop-compare-tips").fadeOut()
                }, 8e3)
            }
        };
    module.exports = i
});
/*!Name: panorama.js
 * Date: 2021-2-25 18:16:28 */
define("MOD_ROOT/preview/panorama", function(require, exports, module) {
    var i = require("MOD_ROOT/preview/panorama.3d");
    function t(i) {
        i && i.pics && i.element && (this.pics = i.pics, this.element = i.element, this.panorama = this.element.find(".panorama-img"), this.lastIdex = null, this.img = this.element.find("img"), this.tips = this.element.find(".panorama-tips"), this.gap = Math.floor(this.element.width() / this.pics.length), this.imgpre = "//img14.360buyimg.com/n0/s534x534_", this.imgpreFor3D = "//img14.360buyimg.com/da/", this.init())
    }
    t.prototype.beforeLoadImg = function() {
        this.img.attr("src", "//img12.360buyimg.com/devfe/jfs/t6079/288/4724556079/25029/8a4987d6/5967412eNb883a2a9.jpg"), this.tips.text("\u6b63\u5728\u4e3a\u60a8\u5f00\u542f\u5168\u666f\u4e16\u754c")
    }, t.prototype.LoadImgError = function() {
        this.img.attr("src", "//img30.360buyimg.com/devfe/jfs/t6088/341/4782575589/3802/f0639f4/59674139Nbba5386e.jpg"), this.tips.text("\u670d\u52a1\u5668\u592a\u5fd9\uff0c\u6682\u65f6\u65e0\u6cd5\u663e\u793a\uff0c\u8bf7\u60a8\u7a0d\u540e\u518d\u8bd5")
    }, t.prototype.init = function() {
        this.loadImg($.proxy(this.beforeLoadImg, this), $.proxy(this.bindEvent, this), $.proxy(this.LoadImgError, this))
    }, t.prototype.loadImg = function(t, e, n) {
        var o,
            s = 0,
            a = 0,
            r = this;
        if (!this.pics.length)
            return void (n && n());
        if (t && t(), pageConfig.product.is3DHome) {
            if (pageConfig.notSupportWebGL)
                return;
            var p = document.createElement("img"),
                m = r.imgpreFor3D + r.pics[0] + "!q50";
            return p.src = m, p.onload = function() {
                r.panorama.find("img,.panorama-tips").css("display", "none"), i.build3D(".panorama-img", m), r.panorama.css({
                    width: "100%",
                    height: "100%",
                    margin: 0,
                    position: "relative",
                    top: 0,
                    left: 0
                })
            }, void (p.onerror = function() {
                n && n()
            })
        }
        for (; s < this.pics.length; s++)
            !function() {
                o = document.createElement("img"), o.onload = function() {
                    ++a == r.pics.length && (r.img.remove(), r.panorama.find("img").eq(0).css("display", "inline"), e && e())
                }, o.onerror = function() {
                    a--, n && n()
                }, o.src = r.imgpre + r.pics[s], $(o).insertBefore(r.tips).attr({
                    width: 534,
                    height: 534
                }).css("display", "none")
            }()
    }, t.prototype.caclIndex = function(i) {
        return Math.floor(i / this.gap)
    }, t.prototype.move = function(i) {
        var t = i.clientX - this.element.offset().left,
            e = this.caclIndex(t);
        e != this.lastIdex && e < this.pics.length && e >= 0 && (this.lastIdex = e, this.panorama.find("img").css("display", "none"), this.panorama.find("img").eq(e).css("display", "inline"))
    }, t.prototype.bindEvent = function() {
        this.element.removeClass("p-tips"), this.element.bind("mousemove", $.proxy(this.move, this))
    }, module.exports.Panorama = t
});
/*!Name: videoBox.js
 * Date: 2021-2-25 18:16:28 */
define("MOD_ROOT/videoBox/videoBox", function(require, exports, module) {
    require("./modernizr.min.js");
    var e = "//newbuz.360buyimg.com/video/4.2/",
        t = [e + "video.hls.min.js", e + "video-js.min.css"],
        n = [e + "video.min.js", e + "video-js.min.css"],
        o = e + "video-js.green.min.css",
        a = e + "video-js.swf",
        i = e + "ie8/videojs-ie8.min.js",
        r = {
            type: "html5",
            videoType: "rtmp,flv,m3u8,mp4",
            qulitySelectMenu: !1,
            playBackRatesMenu: !1,
            language: "zh-CN",
            customzie: "common",
            callback: function() {},
            callBackList: []
        },
        s = 0;
    function l(e, t) {
        function n(e) {
            if (e = e || "", e.indexOf(".js") > 0)
                c(e, t);
            else if (e.indexOf(".css") > 0) {
                if ("none" == r.customzie)
                    return;
                var n = document.createElement("link");
                "green" == r.customzie && (e = o), n.href = e, n.rel = "stylesheet", n.type = "text/css", document.getElementsByTagName("head")[0].appendChild(n)
            }
        }
        if (!(r.callBackList.length >= 2))
            if ("object" == typeof e && e instanceof Array)
                for (var a = 0; a < e.length; a++)
                    n(e[a]);
            else
                n(e)
    }
    function c(e, t) {
        var n = document.getElementsByTagName("head");
        0 == n.length && alert("page must have one head element");
        var o = n[0],
            a = document.createElement("script");
        a.type = "text/javascript", a.src = e, a.onload = function(n) {
            e && e.indexOf("ie8") >= 0 || ("zh-CN" == r.language && z(), t())
        }, a.onreadystatechange = function() {
            if ("complete" == this.readyState || "loaded" == this.readyState) {
                if (e && e.indexOf("ie8") >= 0)
                    return;
                "zh-CN" == r.language && z(), t()
            }
        }, o.appendChild(a)
    }
    function u() {
        var e = navigator.userAgent,
            t = e.indexOf("Opera") > -1,
            n = e.indexOf("compatible") > -1 && e.indexOf("MSIE") > -1 && !t,
            o = e.toLowerCase().indexOf("edge") > -1 && !n,
            a = e.toLowerCase().indexOf("trident") > -1 && e.indexOf("rv") > -1,
            i = e.indexOf("Firefox") > -1,
            r = e.indexOf("Safari") > -1 && -1 == e.indexOf("Chrome"),
            s = e.indexOf("Chrome") > -1 && e.indexOf("Safari") > -1,
            l = e.indexOf("MicroMessenger") > -1;
        if (o)
            return "Edge";
        if (a)
            return "IE11";
        if (n) {
            new RegExp("MSIE (\\d+\\.\\d+);").test(e);
            var c = parseFloat(RegExp.$1);
            return 7 == c ? "IE7" : 8 == c ? "IE8" : 9 == c ? "IE9" : 10 == c ? "IE10" : 11 == c ? "IE11" : "0"
        }
        return l ? "Wechat" : i ? "FF" : t ? "Opera" : r ? "Safari" : s ? "Chrome" : "0"
    }
    function d(e) {
        if (e = e || {}, r.type = e.type || "html5", r.videoType = e.videoType || "mp4", r.customzie = e.customzie || "common", r.language = e.language || "zh-CN", r.callback = e.callback || function() {}, "undefined" != typeof videojs)
            r.callback();
        else {
            r.callBackList.push(e.callback);
            var t = I(r.videoType),
                n = R(t);
            S(n, function() {
                0 === s && B(n), s++;
                for (var e = 0; e < r.callBackList.length; e++)
                    "function" == typeof r.callBackList[e] && r.callBackList[e]();
                r.callBackList = []
            })
        }
    }
    r.a = "JDVISEC";
    var p = 0;
    function f(e) {
        return v(m(y(e)))
    }
    function m(e) {
        return g(b(h(e), 8 * e.length))
    }
    function v(e) {
        for (var t, n = p ? "0123456789ABCDEF" : "0123456789abcdef", o = "", a = 0; a < e.length; a++)
            t = e.charCodeAt(a), o += n.charAt(t >>> 4 & 15) + n.charAt(15 & t);
        return o
    }
    function y(e) {
        for (var t, n, o = "", a = -1; ++a < e.length;)
            t = e.charCodeAt(a), n = a + 1 < e.length ? e.charCodeAt(a + 1) : 0, 55296 <= t && t <= 56319 && 56320 <= n && n <= 57343 && (t = 65536 + ((1023 & t) << 10) + (1023 & n), a++), t <= 127 ? o += String.fromCharCode(t) : t <= 2047 ? o += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : t <= 65535 ? o += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : t <= 2097151 && (o += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
        return o
    }
    function h(e) {
        for (var t = Array(e.length >> 2), n = 0; n < t.length; n++)
            t[n] = 0;
        for (var n = 0; n < 8 * e.length; n += 8)
            t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
        return t
    }
    function g(e) {
        for (var t = "", n = 0; n < 32 * e.length; n += 8)
            t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
        return t
    }
    function b(e, t) {
        e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
        for (var n = 1732584193, o = -271733879, a = -1732584194, i = 271733878, r = 0; r < e.length; r += 16) {
            var s = n,
                l = o,
                c = a,
                u = i;
            n = C(n, o, a, i, e[r + 0], 7, -680876936), i = C(i, n, o, a, e[r + 1], 12, -389564586), a = C(a, i, n, o, e[r + 2], 17, 606105819), o = C(o, a, i, n, e[r + 3], 22, -1044525330), n = C(n, o, a, i, e[r + 4], 7, -176418897), i = C(i, n, o, a, e[r + 5], 12, 1200080426), a = C(a, i, n, o, e[r + 6], 17, -1473231341), o = C(o, a, i, n, e[r + 7], 22, -45705983), n = C(n, o, a, i, e[r + 8], 7, 1770035416), i = C(i, n, o, a, e[r + 9], 12, -1958414417), a = C(a, i, n, o, e[r + 10], 17, -42063), o = C(o, a, i, n, e[r + 11], 22, -1990404162), n = C(n, o, a, i, e[r + 12], 7, 1804603682), i = C(i, n, o, a, e[r + 13], 12, -40341101), a = C(a, i, n, o, e[r + 14], 17, -1502002290), o = C(o, a, i, n, e[r + 15], 22, 1236535329), n = j(n, o, a, i, e[r + 1], 5, -165796510), i = j(i, n, o, a, e[r + 6], 9, -1069501632), a = j(a, i, n, o, e[r + 11], 14, 643717713), o = j(o, a, i, n, e[r + 0], 20, -373897302), n = j(n, o, a, i, e[r + 5], 5, -701558691), i = j(i, n, o, a, e[r + 10], 9, 38016083), a = j(a, i, n, o, e[r + 15], 14, -660478335), o = j(o, a, i, n, e[r + 4], 20, -405537848), n = j(n, o, a, i, e[r + 9], 5, 568446438), i = j(i, n, o, a, e[r + 14], 9, -1019803690), a = j(a, i, n, o, e[r + 3], 14, -187363961), o = j(o, a, i, n, e[r + 8], 20, 1163531501), n = j(n, o, a, i, e[r + 13], 5, -1444681467), i = j(i, n, o, a, e[r + 2], 9, -51403784), a = j(a, i, n, o, e[r + 7], 14, 1735328473), o = j(o, a, i, n, e[r + 12], 20, -1926607734), n = k(n, o, a, i, e[r + 5], 4, -378558), i = k(i, n, o, a, e[r + 8], 11, -2022574463), a = k(a, i, n, o, e[r + 11], 16, 1839030562), o = k(o, a, i, n, e[r + 14], 23, -35309556), n = k(n, o, a, i, e[r + 1], 4, -1530992060), i = k(i, n, o, a, e[r + 4], 11, 1272893353), a = k(a, i, n, o, e[r + 7], 16, -155497632), o = k(o, a, i, n, e[r + 10], 23, -1094730640), n = k(n, o, a, i, e[r + 13], 4, 681279174), i = k(i, n, o, a, e[r + 0], 11, -358537222), a = k(a, i, n, o, e[r + 3], 16, -722521979), o = k(o, a, i, n, e[r + 6], 23, 76029189), n = k(n, o, a, i, e[r + 9], 4, -640364487), i = k(i, n, o, a, e[r + 12], 11, -421815835), a = k(a, i, n, o, e[r + 15], 16, 530742520), o = k(o, a, i, n, e[r + 2], 23, -995338651), n = w(n, o, a, i, e[r + 0], 6, -198630844), i = w(i, n, o, a, e[r + 7], 10, 1126891415), a = w(a, i, n, o, e[r + 14], 15, -1416354905), o = w(o, a, i, n, e[r + 5], 21, -57434055), n = w(n, o, a, i, e[r + 12], 6, 1700485571), i = w(i, n, o, a, e[r + 3], 10, -1894986606), a = w(a, i, n, o, e[r + 10], 15, -1051523), o = w(o, a, i, n, e[r + 1], 21, -2054922799), n = w(n, o, a, i, e[r + 8], 6, 1873313359), i = w(i, n, o, a, e[r + 15], 10, -30611744), a = w(a, i, n, o, e[r + 6], 15, -1560198380), o = w(o, a, i, n, e[r + 13], 21, 1309151649), n = w(n, o, a, i, e[r + 4], 6, -145523070), i = w(i, n, o, a, e[r + 11], 10, -1120210379), a = w(a, i, n, o, e[r + 2], 15, 718787259), o = w(o, a, i, n, e[r + 9], 21, -343485551), n = E(n, s), o = E(o, l), a = E(a, c), i = E(i, u)
        }
        return Array(n, o, a, i)
    }
    function T(e, t, n, o, a, i) {
        return E(x(E(E(t, e), E(o, i)), a), n)
    }
    function C(e, t, n, o, a, i, r) {
        return T(t & n | ~t & o, e, t, a, i, r)
    }
    function j(e, t, n, o, a, i, r) {
        return T(t & o | n & ~o, e, t, a, i, r)
    }
    function k(e, t, n, o, a, i, r) {
        return T(t ^ n ^ o, e, t, a, i, r)
    }
    function w(e, t, n, o, a, i, r) {
        return T(n ^ (t | ~o), e, t, a, i, r)
    }
    function E(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
    }
    function x(e, t) {
        return e << t | e >>> 32 - t
    }
    function B(e) {
        if (videojs.options.flash.swf = a, "html5" == e)
            videojs.options.techOrder = ["html5", "flvjs", "flash"];
        else {
            if (!N()) {
                var t = document.createElement("div");
                t.id = "no-flash";
                t.innerHTML = '<div style="width:100%;height:60px;position: absolute;top:0;left:0;line-height: 60px;font-size:14px;text-align: center;background: #c4636f;color:#fff;z-index: 9999"><a href="https://helpx.adobe.com/cn/flash-player/kb/installation-problems-flash-player-windows.html#" target="_blank">\u64ad\u653e\u5668\u65e0\u6cd5\u6b63\u5e38\u8fd0\u884c\uff0c\u8981\u60f3\u83b7\u5f97\u5b8c\u6574\u4f53\u9a8c\uff0c\u5efa\u8bae\u60a8\u66f4\u65b0\u6216\u8005\u5f00\u542fFlash\uff0c\u70b9\u51fb\u8be5\u94fe\u63a5\u83b7\u5f97\u652f\u6301\uff01</a></div>', document.body.appendChild(t)
            }
            videojs.options.techOrder = ["flash", "html5"]
        }
        "green" == r.customzie && (videojs.options.children = {
            controlBar: {
                children: {
                    progressControl: !0,
                    playToggle: !0,
                    currentTimeDisplay: !0,
                    timeDivider: !0,
                    durationDisplay: !0,
                    liveDisplay: !0,
                    customControlSpacer: !0,
                    playbackRateMenuButton: r.playBackRatesMenu,
                    volumeMenuButton: {
                        inline: !1
                    },
                    fullscreenToggle: !0,
                    textTracks: !1
                }
            },
            mediaLoader: !0,
            posterImage: !0,
            textTrackDisplay: !0,
            loadingSpinner: !0,
            errorDisplay: !0,
            textTrackSettings: !0,
            bigPlayButton: !0
        })
    }
    function R(e) {
        var t = u(),
            n = "html5";
        return "m3u8" != e && "flv" != e || "IE11" != t && "IE10" != t && "IE9" != t && "IE8" != t || (n = "flash"), "IE8" != t && "rtmp" != e || (n = "flash"), "IE8" == t && c(i, function() {}), "Wechat" == t && (n = "html5"), r.type = n, n
    }
    function S(e, o) {
        var a = t;
        "flash" == e && (a = n), "undefined" != typeof videojs ? o() : l(a, o)
    }
    function I(e) {
        if (e)
            return e.indexOf("rtmp") >= 0 ? "rtmp" : e.indexOf("flv") >= 0 ? "flv" : e.indexOf("m3u8") >= 0 ? "m3u8" : e.indexOf("mp4") >= 0 ? "mp4" : void 0
    }
    function O(e) {
        var t = document.location.protocol;
        e = e.replace(/^https?:/, t);
        var n = I(e),
            o = r.type;
        if ("html5" == o) {
            if ("m3u8" == n)
                return {
                    src: e,
                    type: "application/x-mpegURL"
                };
            if ("mp4" == n)
                return {
                    src: e,
                    type: "video/mp4"
                };
            if ("rtmp" == n)
                return {
                    src: e,
                    type: "rtmp/flv"
                };
            if ("flv" == n)
                return {
                    src: e,
                    type: "video/x-flv"
                }
        } else if ("flash" == o)
            return e
    }
    function A(e) {
        "undefined" != typeof videojs && videojs.players[e] && videojs.players[e].dispose()
    }
    function N() {
        return void 0 !== window.ActiveXObject ? new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && !0 : navigator.plugins["Shockwave Flash"] && !0
    }
    var M = {
            options: r,
            getVideojs: d,
            setVideoType: O,
            disposePlayer: A,
            getBrowserType: u
        },
        L = {
            addClass: function(e, t) {
                e = Array.prototype.slice.apply(e);
                var n = function(e) {
                    var n = e.className,
                        o = "" != n ? " " : "",
                        a = n + o + t;
                    e.className = a
                };
                if (e instanceof Array)
                    for (var o = 0; o < e.length; o++)
                        n(e[o]);
                else
                    n(e)
            },
            removeClass: function(e, t) {
                e = Array.prototype.slice.apply(e);
                var n = function(e) {
                    var n = " " + e.className + " ";
                    n = n.replace(/(\s+)/gi, " ");
                    var o = n.replace(" " + t + " ", " ");
                    o = o.replace(/(^\s+)|(\s+$)/g, ""), e.className = o
                };
                if (e instanceof Array)
                    for (var o = 0; o < e.length; o++)
                        n(e[o]);
                else
                    n(e)
            },
            getElementsByClassName: function(e, t, n) {
                if ("string" == typeof t ? (n = t, t = document) : (t = t || document, n = n || "*"), t.getElementsByClassName)
                    return t.getElementsByClassName(e);
                for (var o = t.getElementsByTagName(n), a = [], i = 0; i < o.length; i++)
                    for (var r = o[i], s = r.className.split(" "), l = 0; l < s.length; l++)
                        if (s[l] == e) {
                            a.push(r);
                            break
                        }
                return a
            },
            getData: function(e) {
                var t = function(e) {
                    var t = [];
                    for (var n in e)
                        t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                    return t.join("&")
                };
                !function(e) {
                    if (e = e || {}, !e.url || !e.callback)
                        throw new Error("\u53c2\u6570\u4e0d\u5408\u6cd5");
                    var n = ("jsonp_" + Math.random()).replace(".", ""),
                        o = document.getElementsByTagName("head")[0];
                    e.data[e.callback] = n;
                    var a = t(e.data),
                        i = document.createElement("script");
                    o.appendChild(i), window[n] = function(t) {
                        o.removeChild(i), clearTimeout(i.timer), window[n] = null, e.success && e.success(t)
                    }, i.src = e.url + "?" + a, e.time && (i.timer = setTimeout(function() {
                        window[n] = null, o.removeChild(i), e.fail && e.fail({
                            message: "\u8d85\u65f6"
                        })
                    }, e.time))
                }(e)
            },
            getVideoElement: function(e, t) {
                return "function" == typeof e.$ ? e.$(t) : this.getElementsByClassName(t)[0]
            },
            ajax: function(e) {
                var t = null,
                    n = function(e) {
                        var t = [];
                        for (var n in e) {
                            t.push(n + "=" + e[n])
                        }
                        return t.join("&")
                    }(e.data);
                t = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), "GET" == e.type ? (t.open(e.type, e.url + "?" + n, e.async), t.send(null)) : "POST" == e.type && (t.open(e.type, e.url, e.async), t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), t.send(n)), t.onreadystatechange = function() {
                    4 == t.readyState && 200 == t.status && e.success(JSON.parse(t.responseText))
                }
            },
            getUrlParams: function() {
                for (var e = {
                        src: "",
                        appid: "",
                        fileid: "",
                        appId: "",
                        fileId: "",
                        controls: !0,
                        preload: "auto",
                        autoplay: !1,
                        loop: !1,
                        mute: !1,
                        fuScrnEnabled: !0,
                        coverpic: "",
                        playbackRateEnabled: !1,
                        live: "",
                        videoType: "mp4,m3u8",
                        revolution: []
                    }, t = location.search && location.search.split("?")[1] || "", n = t.split("&"), o = 0; o < n.length; o++) {
                    var a = n[o].split("=");
                    "true" == a[1] ? e[a[0]] = !0 : "false" == a[1] ? e[a[0]] = !1 : e[a[0]] = a[1]
                }
                return e
            }
        };
    M.getUrlParams = L.getUrlParams, M.initResolutionSwitcher = function(e, t) {
        if (t && !(t && t.length <= 0)) {
            var n = e.resolutionArrs && !0;
            e.resolutionArrs = t, e.resolutioTimer = 0, n || (e.changeVideo = function(t) {
                e.pause();
                var n = e.resolutionArrs[t].src,
                    o = e.resolutionArrs[t].label;
                return clearTimeout(e.resolutioTimer), e.resolutioTimer = 0, e.resolutioTimer = setTimeout(function() {
                    var t = e.currentTime(),
                        a = 1;
                    "html5" == r.type && (a = e.playbackRate()), e.resolutionCurTime = t, e.resolutionPlaybackRate = a;
                    var i = L.getElementsByClassName("vjs-resolution-switcher-value", e.el_, "div");
                    i && (i[0].innerHTML = o), e.currentVideo = n, e.src(M.setVideoType(n)), e.play()
                }, 400), !1
            }, "html5" == r.type && e.on("ratechange", function() {
                var t = e.playbackRate();
                e.resolutionPlaybackRate = t
            }), e.on("playing", function() {
                e.resolutioTimer && (e.currentTime(e.resolutionCurTime || 0), "html5" == r.type && e.playbackRate(e.resolutionPlaybackRate || 1), e.removeClass("vjs-seeking"), e.play(), e.resolutioTimer = 0)
            }), e.on("ended", function() {
                e.resolutioTimer = 0, e.resolutionCurTime = 0
            }));
            var o = L.getElementsByClassName("vjs-resolution-switcher", e.el_, "div")[0];
            o && o.parentNode.removeChild(o);
            for (var a = "", i = t[0].label || "", s = e.src(), l = 0; l < t.length; l++)
                t[l].src == s && (i = t[l].label), a += '<li class="vjs-menu-item" tabindex="-1" role="menuitemcheckbox"  onclick="videojs.players[\'' + e.id_ + "'].changeVideo(" + l + ')">' + t[l].label + " </li>";
            var c = L.getElementsByClassName("vjs-fullscreen-control", e.el_, "div")[0],
                u = L.getElementsByClassName("vjs-control-bar", e.el_, "div")[0],
                d = document.createElement("div");
            d.className = "vjs-resolution-switcher  vjs-menu-button vjs-menu-button-popup vjs-control vjs-button", d.setAttribute("aria-live", "polite"), d.setAttribute("aria-haspopup", "true"), d.setAttribute("aria-expanded", "false"), u.insertBefore(d, c);
            L.getElementsByClassName("vjs-resolution-switcher", e.el_, "div")[0].innerHTML = '<div class="vjs-menu" role="presentation"><ul class="vjs-menu-content" role="menu">' + a + '</ul></div><span class="vjs-control-text">Resolution Switcher</span><div class="vjs-resolution-switcher-value">' + i + "</div>"
        }
    }, M.getResolution = function(e, t) {
        var n = e.fileId || e.fileid || "";
        if (n) {
            var o = f(r.a + n);
            L.ajax({
                url: "//live.jd.com/l/getHighAndStandardMp4Address",
                type: "POST",
                async: !0,
                data: {
                    fileId: n,
                    appId: e.appId,
                    sign: o
                },
                success: function(n) {
                    n && 0 == n.code && (e.revolution = n.data), "function" == typeof t && t(e)
                },
                fail: function() {
                    "function" == typeof t && t(e)
                }
            })
        } else
            "function" == typeof t && t(e)
    }, M.initPlayer = function(e, t) {
        if ("function" == typeof videojs && videojs.players[e])
            return void ("function" == typeof t.callback && t.callback(videojs.players[e]));
        var n = {
            src: t.src || "",
            appId: t.appId || t.appid || "",
            fileId: t.fileId || t.fileid || "",
            controls: Boolean(t.controls),
            preload: t.preload || "auto",
            autoplay: Boolean(t.autoplay),
            loop: Boolean(t.loop),
            mute: Boolean(t.mute),
            fuScrnEnabled: Boolean(t.fuScrnEnabled),
            coverpic: t.coverpic || "",
            playbackRateEnabled: t.playbackRateEnabled || !1,
            sw: t.sw,
            sh: t.sh,
            live: Boolean(t.live),
            videoType: t.videoType || "mp4,m3u8",
            revolution: t.revolution || [],
            customzie: t.customzie || "common",
            callback: t.callback || ""
        };
        n.revolution.length <= 0 ? M.getResolution(n, function(e) {
            n = e, o()
        }) : o();
        function o() {
            M.getVideojs({
                videoType: n.videoType,
                playbackRateMenuButton: !0,
                customzie: n.customzie,
                callback: a
            })
        }
        function a() {
            var t = {
                autoplay: n.autoplay,
                controls: n.controls,
                preload: n.preload,
                inactivityTimeout: 1e3,
                loop: n.loop,
                muted: n.mute,
                poster: decodeURIComponent(n.coverpic)
            };
            n.sw && n.sh && (t.width = n.sw, t.height = n.sh), n.playbackRateEnabled && (t.playbackRates = [.5, 1, 1.5, 2]), !n.fuScrnEnabled && (t.controlBar = {}, t.controlBar.fullscreenToggle = !1);
            var o = videojs.players[e],
                a = videojs(e, t);
            if (n.src ? (a.currentVideo = n.src, a.src(M.setVideoType(decodeURIComponent(n.src)))) : n.revolution.length && (a.currentVideo = n.revolution[0].src, a.src(M.setVideoType(decodeURIComponent(n.revolution[0].src))), M.initResolutionSwitcher(a, n.revolution)), o || (a.on("loadstart", function() {
                n.autoplay && a.play()
            }), a.on("ready", function() {
                a.addClass("vjs-has-started")
            }), a.on("playing", function() {
                a.removeClass("vjs-seeking"), a.removeClass("vjs-wating")
            }), a.on(a.tech_, "tap", function() {
                a.paused() ? a.play() : a.pause()
            })), n.live) {
                a.resync = 0, a.resync_flag = 1, n.autoplay && (a.resync_flag = 0), a.on("play", function() {
                    !a.resync && a.resync_flag && setTimeout(function() {
                        a.src(M.setVideoType(decodeURIComponent(a.currentVideo))), a.play()
                    }, 1), a.resync = 1, a.resync_flag = 1
                }), a.on("playing", function() {
                    clearTimeout(a.resync_timer), a.resync_timer = setTimeout(function() {
                        a.resync = 0
                    }, 2e3)
                })
            }
            "function" == typeof n.callback && n.callback(a)
        }
    };
    function z() {
        "undefined" != typeof videojs && videojs.addLanguage("zh-CN", {
            Play: "\u64ad\u653e",
            Pause: "\u6682\u505c",
            "Current Time": "\u5f53\u524d\u65f6\u95f4",
            "Duration Time": "\u65f6\u957f",
            "Remaining Time": "\u5269\u4f59\u65f6\u95f4",
            "Stream Type": "\u5a92\u4f53\u6d41\u7c7b\u578b",
            LIVE: "\u76f4\u64ad",
            Loaded: "\u52a0\u8f7d\u5b8c\u6bd5",
            Progress: "\u8fdb\u5ea6",
            Fullscreen: "\u5168\u5c4f",
            "Non-Fullscreen": "\u9000\u51fa\u5168\u5c4f",
            Mute: "\u9759\u97f3",
            Unmute: "\u53d6\u6d88\u9759\u97f3",
            "Playback Rate": "\u64ad\u653e\u901f\u5ea6",
            Subtitles: "\u5b57\u5e55",
            "subtitles off": "\u5173\u95ed\u5b57\u5e55",
            Captions: "\u5185\u5d4c\u5b57\u5e55",
            "captions off": "\u5173\u95ed\u5b57\u5e55",
            Chapters: "\u8282\u76ee\u6bb5\u843d",
            "Close Modal Dialog": "\u5173\u95ed\u5f39\u7a97",
            Descriptions: "\u63cf\u8ff0",
            "descriptions off": "\u5173\u95ed\u63cf\u8ff0",
            "Audio Track": "\u97f3\u8f68",
            "You aborted the media playback": "\u89c6\u9891\u64ad\u653e\u88ab\u7ec8\u6b62",
            "A network error caused the media download to fail part-way.": "\u65e0\u6cd5\u83b7\u53d6\u64ad\u653e\u5185\u5bb9",
            "The media could not be loaded, either because the server or network failed or because the format is not supported.": "\u65e0\u6cd5\u83b7\u53d6\u64ad\u653e\u5185\u5bb9",
            "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "\u65e0\u6cd5\u83b7\u53d6\u64ad\u653e\u5185\u5bb9",
            "No compatible source was found for this media.": "\u65e0\u6cd5\u83b7\u53d6\u64ad\u653e\u5185\u5bb9\u3002",
            "The media is encrypted and we do not have the keys to decrypt it.": "\u65e0\u6cd5\u83b7\u53d6\u64ad\u653e\u5185\u5bb9",
            "Play Video": "\u64ad\u653e\u89c6\u9891",
            Close: "\u5173\u95ed",
            "Modal Window": "\u5f39\u7a97",
            "This is a modal window": "\u8fd9\u662f\u4e00\u4e2a\u5f39\u7a97",
            "This modal can be closed by pressing the Escape key or activating the close button.": "\u53ef\u4ee5\u6309ESC\u6309\u952e\u6216\u542f\u7528\u5173\u95ed\u6309\u94ae\u6765\u5173\u95ed\u6b64\u5f39\u7a97\u3002",
            ", opens captions settings dialog": ", \u5f00\u542f\u6807\u9898\u8bbe\u7f6e\u5f39\u7a97",
            "captions settings": "\u5b57\u5e55\u8bbe\u7f6e",
            ", opens subtitles settings dialog": ", \u5f00\u542f\u5b57\u5e55\u8bbe\u7f6e\u5f39\u7a97",
            ", opens descriptions settings dialog": ", \u5f00\u542f\u63cf\u8ff0\u8bbe\u7f6e\u5f39\u7a97",
            ", selected": ", \u9009\u62e9"
        })
    }
    window.videoBox = M, module.exports = M
});
/*!Name: videoTrack.js
 * Date: 2021-2-25 18:16:28 */
define("MOD_ROOT/videoBox/videoTrack", function(require, exports, module) {
    require("./jquery.xdomainrequest.min.js"), jQuery.support.cors = !0;
    var e = {
            getElementsByClassName: function(e, t, n) {
                if ("string" == typeof t ? (n = t, t = document) : (t = t || document, n = n || "*"), t.getElementsByClassName)
                    return t.getElementsByClassName(e);
                for (var i = t.getElementsByTagName(n), a = [], r = 0; r < i.length; r++)
                    for (var o = i[r], d = o.className.split(" "), u = 0; u < d.length; u++)
                        if (d[u] == e) {
                            a.push(o);
                            break
                        }
                return a
            },
            getVideoElement: function(e, t) {
                return "function" == typeof e.$ ? e.$("." + t) : this.getElementsByClassName(t)[0]
            },
            getUrlParams: function(e) {
                var t,
                    n,
                    i = {};
                if (!e)
                    return i;
                if (!(t = e.split("?")[1]))
                    return i;
                n = t.split("&");
                for (var a = 0; a < n.length; a++) {
                    var r = n[a].split("=");
                    r[1] && (i[r[0]] = r[1])
                }
                return i
            }
        },
        t = {
            init: function(t, n, i, a) {
                var r = e.getUrlParams(a);
                this.player = t, this.data = {
                    sku: n,
                    vid: i,
                    videoDuration: 0,
                    playDuration: 0,
                    status: 1,
                    isLoading: 0,
                    loadingTime: 0,
                    isError: 0,
                    errorCode: 0,
                    videoSource: 0,
                    time: 0,
                    dockingId: r.dockingId || "",
                    storageSource: r.storageSource || ""
                }, this.waitingFlag = !1, this.waitingBegin = 0, this.sendFlag = !1, this.bingEvent(), this.ifSend = !0
            },
            data: {},
            disabledSend: function() {
                this.ifSend = !1
            },
            enabledSend: function() {
                this.ifSend = !0
            },
            bingEvent: function() {
                var t = this,
                    n = t.player;
                n.on("waiting", function() {
                    if (!t.ifSend)
                        return !1;
                    t.waitingFlag = !0, t.waitingBegin = (new Date).getTime()
                }), n.on("loadeddata", function() {
                    if (!t.ifSend)
                        return !1;
                    var i = e.getVideoElement(n, "vjs-fullscreen-control");
                    i && (i.style.display = "block"), t.data.videoDuration = "number" == typeof n.duration() ? n.duration().toFixed(2) : 0
                }), n.on("playing", function() {
                    if (!t.ifSend)
                        return !1;
                    if (t.waitingFlag) {
                        var e = (new Date).getTime(),
                            n = e - t.waitingBegin;
                        n > 3e3 && (t.data.isLoading = 1, t.data.loadingTime += n), t.waitingFlag = !1
                    }
                }), n.on("ended", function() {
                    if (!t.ifSend)
                        return !1;
                    t.data.playDuration = "number" == typeof n.currentTime() ? n.currentTime().toFixed(2) : 0, t.data.status = 0, t.sendFlag = !1, t.sendData()
                }), n.on("timeupdate", function() {
                    if (!t.ifSend)
                        return !1;
                    t.data.playDuration = "number" == typeof n.currentTime() ? n.currentTime().toFixed(2) : 0
                }), n.on("dispose", function() {
                    if (!t.ifSend)
                        return !1;
                    t.data.playDuration = "number" == typeof n.currentTime() ? n.currentTime().toFixed(2) : 0, t.sendData()
                }), n.on("error", function(e) {
                    if (!t.ifSend)
                        return !1;
                    var i = n.error().code;
                    t.data.isError = "1", t.data.errorCode = i, t.data.playDuration = "number" == typeof n.currentTime() ? n.currentTime().toFixed(2) : 0, t.sendData()
                });
                var i = function() {
                    t.sendData()
                };
                $(window).unbind("beforeunload", i).bind("beforeunload", i)
            },
            sendData: function() {
                var e = this,
                    t = e.data;
                if (!e.sendFlag && e.ifSend) {
                    e.sendFlag = !0, t.time = (new Date).getTime(), localStorage.sendTime = t.time, t.videoDuration = 1e3 * t.videoDuration, t.playDuration = 1e3 * t.playDuration;
                    var n = {
                        functionId: "videoReport",
                        appid: "video_pc",
                        client: "video_pc",
                        clientVersion: "",
                        body: JSON.stringify(t)
                    };
                    $.ajax({
                        url: "//api.m.jd.com/api",
                        data: n,
                        contentType: "text/plain",
                        type: "get",
                        dataType: "json",
                        timeout: 6e3,
                        xhrFields: {
                            withCredentials: !0,
                            crossDomain: !0
                        },
                        success: function(e) {
                            console.log(e)
                        }
                    })
                }
            }
        };
    module.exports = t
});
/*!Name: videoAnchorPoint.js
 * Date: 2021-2-25 18:16:28 */
define("MOD_ROOT/videoBox/videoAnchorPoint", function(require, exports, module) {
    require("./videoAnchorPoint.css");
    var e = {
            defaults: {
                width: 450,
                height: 300,
                currentIndex: -1,
                player: null,
                b_version: 10
            }
        },
        t = {
            EventUtil: {
                addEvent: function(e, t, n) {
                    e = Array.prototype.slice.apply(e);
                    for (var i = 0; i < e.length; i++)
                        e[i].addEventListener ? e[i].addEventListener(t, n, !1) : e[i].attachEvent ? e[i].attachEvent("on" + t, n) : e[i]["on" + t] = n
                },
                getEvent: function(e) {
                    return e || window.event
                },
                getTarget: function(e) {
                    return e.target || e.srcElement
                },
                preventDefault: function(e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1
                },
                stoppropagation: function(e) {
                    e.stoppropagation ? e.stoppropagation() : e.canceBubble = !1
                }
            },
            extendObj: function(e, t, n) {
                var i = this;
                if (!n)
                    return t;
                for (var r in n) {
                    var a = n[r];
                    e && a instanceof Array ? t[r] = i.extendObj(e, [], a) : e && a instanceof Object ? t[r] = i.extendObj(e, {}, a) : t[r] = n[r]
                }
                return t
            },
            getIeBrowserVersion: function() {
                var e = navigator.userAgent;
                if (e.indexOf("compatible") > -1 && e.indexOf("MSIE") > -1 && !(e.indexOf("Opera") > -1)) {
                    var t = (IE55 = IE6 = IE7 = IE8 = !1, new RegExp("MSIE (\\d+\\.\\d+);"), parseFloat(RegExp.$1));
                    return IE55 = 5.5 == t, IE6 = 6 == t, IE7 = 7 == t, IE8 = 8 == t, IE55 ? 5 : IE6 ? 6 : IE7 ? 7 : IE8 ? 8 : 9
                }
                return 10
            },
            addClass: function(e, t) {
                e = Array.prototype.slice.apply(e);
                var n = function(e) {
                    var n = e.className,
                        i = "" != n ? " " : "",
                        r = n + i + t;
                    e.className = r
                };
                if (e instanceof Array)
                    for (var i = 0; i < e.length; i++)
                        n(e[i]);
                else
                    n(e)
            },
            removeClass: function(e, t) {
                e = Array.prototype.slice.apply(e);
                var n = function(e) {
                    var n = " " + e.className + " ";
                    n = n.replace(/(\s+)/gi, " ");
                    var i = n.replace(" " + t + " ", " ");
                    i = i.replace(/(^\s+)|(\s+$)/g, ""), e.className = i
                };
                if (e instanceof Array)
                    for (var i = 0; i < e.length; i++)
                        n(e[i]);
                else
                    n(e)
            },
            getElementsByClassName: function(e, t, n) {
                if ("string" == typeof t ? (n = t, t = document) : (t = t || document, n = n || "*"), t.getElementsByClassName)
                    return t.getElementsByClassName(e);
                for (var i = t.getElementsByTagName(n), r = [], a = 0; a < i.length; a++)
                    for (var o = i[a], s = o.className.split(" "), d = 0; d < s.length; d++)
                        if (s[d] == e) {
                            r.push(o);
                            break
                        }
                return r
            },
            getData: function(e) {
                var t = function(e) {
                    var t = [];
                    for (var n in e)
                        t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                    return t.join("&")
                };
                !function(e) {
                    if (e = e || {}, !e.url || !e.callback)
                        throw new Error("\u53c2\u6570\u4e0d\u5408\u6cd5");
                    var n = ("jsonp_" + Math.random()).replace(".", ""),
                        i = document.getElementsByTagName("head")[0];
                    e.data[e.callback] = n;
                    var r = t(e.data),
                        a = document.createElement("script");
                    i.appendChild(a), window[n] = function(t) {
                        i.removeChild(a), clearTimeout(a.timer), window[n] = null, e.success && e.success(t)
                    }, a.src = e.url + "?" + r, e.time && (a.timer = setTimeout(function() {
                        window[n] = null, i.removeChild(a), e.fail && e.fail({
                            message: "\u8d85\u65f6"
                        })
                    }, e.time))
                }(e)
            },
            getVideoElement: function(e, t) {
                return "function" == typeof e.$ ? e.$("." + t) : this.getElementsByClassName(t)[0]
            },
            getVideoDom: function(e) {
                return e.el_ || e.b || null
            }
        };
    e.defaults.b_version = t.getIeBrowserVersion();
    var n = {
        videoDot: function(e, n) {
            var e = e,
                i = t.getVideoElement(e, "vjs-progress-holder"),
                r = t.getVideoElement(e, "vjs-progress-control");
            if (t.getVideoElement(e, "st-video-dotCon") || !i)
                return !1;
            var a = i.clientWidth,
                o = n,
                s = e.duration();
            i.appendChild(function() {
                var n = t.getVideoElement(e, "st-video-dotCon") || void 0,
                    i = t.getVideoElement(e, "st-video-dotTipWrap") || void 0;
                n ? (n.innerHTML = "", i.innerHTML = "") : (n = document.createElement("div"), i = document.createElement("div")), n.setAttribute("class", "st-video-dotCon"), i.setAttribute("class", "st-video-dotTipWrap");
                var d = document.createElement("div");
                d.setAttribute("class", "st-video-dotTipCon");
                for (var l = 0; l < o.length; l++) {
                    var c = document.createElement("div");
                    c.setAttribute("class", "st-video-dot"), c.setAttribute("data-index", l), c.style.left = o[l].startTime / s * a / a * 100 - 3 / a * 100 + "%", n.appendChild(c);
                    var u = document.createElement("div");
                    u.setAttribute("class", "st-video-dottip st-video-dottip-" + l), u.setAttribute("data-index", l), u.innerHTML = o[l].mark, d.appendChild(u)
                }
                return i.appendChild(d), r.appendChild(i), n
            }())
        },
        videoReady: function(n, i) {
            var r = this,
                a = t.getVideoDom(n),
                o = function() {
                    var r = n.currentTime(),
                        o = s(i, r);
                    o != parseInt(e.defaults.currentIndex) && (t.removeClass(t.getElementsByClassName("st-video-dottip", a, "div"), "st-video-dottip-active"), t.addClass(t.getElementsByClassName("st-video-dottip-" + o, a, "div"), "st-video-dottip-active"), t.getElementsByClassName("st-video-dottip", a, "div").length > 0 && (e.defaults.currentIndex = o))
                },
                s = function(e, t) {
                    for (var n = -1, i = 0; i < e.length; i++) {
                        if (!(t >= e[i].startTime))
                            return n;
                        n = i
                    }
                    return n
                };
            n.on("loadeddata", function() {
                if (!r.ifPoint)
                    return !1;
                r.videoDot(n, i)
            }), n.on("useractive", function() {
                if (!r.ifPoint)
                    return !1;
                o()
            }), n.on("timeupdate", function() {
                if (!r.ifPoint)
                    return !1;
                o()
            }), t.EventUtil.addEvent(t.getElementsByClassName("vjs-progress-control", a, "div"), "click", function(e) {
                var r = t.EventUtil.getTarget(e);
                if (r.className && -1 == r.className.indexOf("st-video-dottip"))
                    return !1;
                for (var s = t.getElementsByClassName("vjs-progress-control", a, "div")[0]; r.className && -1 == r.className.indexOf("st-video-dottip");) {
                    if (r == s) {
                        r = null;
                        break
                    }
                    r = r.parentNode
                }
                if (r) {
                    var d = r.getAttribute("data-index");
                    n.currentTime(i[d].startTime), o(), n.play()
                }
            })
        },
        disabledPoint: function() {
            this.ifPoint = !1
        },
        enabledPoint: function() {
            this.ifPoint = !0
        },
        init: function(e, t) {
            var n = this;
            n.ifPoint = !0;
            var i = [],
                r = t.limitLabelNum ? t.limitLabelNum : 3;
            if (r <= 1 && (r = 1), !t.list || !t.list.length)
                return !1;
            t.list.length > r ? i = t.list.slice(0, r) : t.list.length > 1 && (i = t.list);
            return i.sort(function(e) {
                return function(t, n) {
                    return t[e] - n[e]
                }
            }("startTime")), n.videoReady(e, i), e
        }
    };
    module.exports = n
});
/*!Name: videoTrailer.js
 * Date: 2021-2-25 18:16:28 */
define("MOD_ROOT/videoBox/videoTrailer", function(require, exports, module) {
    var e = require("MOD_ROOT/videoBox/videoBox"),
        t = require("MOD_ROOT/videoBox/videoTrack"),
        n = require("MOD_ROOT/videoBox/videoAnchorPoint"),
        r = {
            getElementsByClassName: function(e, t, n) {
                if ("string" == typeof t ? (n = t, t = document) : (t = t || document, n = n || "*"), t.getElementsByClassName)
                    return t.getElementsByClassName(e);
                for (var r = t.getElementsByTagName(n), i = [], a = 0; a < r.length; a++)
                    for (var l = r[a], s = l.className.split(" "), o = 0; o < s.length; o++)
                        if (s[o] == e) {
                            i.push(l);
                            break
                        }
                return i
            },
            getVideoElement: function(e, t) {
                return "function" == typeof e.$ ? e.$("." + t) : this.getElementsByClassName(t)[0]
            },
            getVideoDom: function(e) {
                return e.el_ || e.b || null
            },
            addClass: function(e, t) {
                e = Array.prototype.slice.apply(e);
                var n = function(e) {
                    var n = e.className,
                        r = "" != n ? " " : "",
                        i = n + r + t;
                    e.className = i
                };
                if (e instanceof Array)
                    for (var r = 0; r < e.length; r++)
                        n(e[r]);
                else
                    n(e)
            },
            removeClass: function(e, t) {
                e = Array.prototype.slice.apply(e);
                var n = function(e) {
                    var n = " " + e.className + " ";
                    n = n.replace(/(\s+)/gi, " ");
                    var r = n.replace(" " + t + " ", " ");
                    r = r.replace(/(^\s+)|(\s+$)/g, ""), e.className = r
                };
                if (e instanceof Array)
                    for (var r = 0; r < e.length; r++)
                        n(e[r]);
                else
                    n(e)
            }
        },
        i = {
            init: function(e, t) {
                if (!t || !t.trailerPlayUrl)
                    return !1;
                this.player = e, this.extInfo = t, this.ifTrailer = !0, this.trailerFlag = 0, this.bingEvent()
            },
            ifTrailer: !1,
            trailerFlag: 0,
            extInfo: {
                trailerPlayUrl: "",
                trailerDuration: "",
                trailerImgUrl: ""
            },
            addCloseBtn: function(e, t) {
                var n = r.getVideoDom(e);
                if (!n)
                    return !1;
                var i = document.createElement("div");
                i.setAttribute("class", "vjs-close-btn vjs-hidden"), i.innerText = "\u5173\u95ed", i.onclick = function(e) {
                    t()
                }, n.appendChild(i)
            },
            hideCloseBtn: function() {
                var e = r.getElementsByClassName("vjs-close-btn", "", "div");
                r.addClass(e, "vjs-hidden")
            },
            showCloseBtn: function() {
                var e = r.getElementsByClassName("vjs-close-btn", "", "div");
                r.removeClass(e, "vjs-hidden")
            },
            bingEvent: function() {
                var i = this,
                    a = i.player,
                    l = r.getVideoDom(a);
                a.on("loadeddata", function() {
                    i.ifTrailer && 1 == i.trailerFlag && a.poster(i.extInfo.trailerImgUrl)
                }), a.on("ended", function() {
                    if (i.ifTrailer && !i.trailerFlag) {
                        a.src(e.setVideoType(i.extInfo.trailerPlayUrl)), i.trailerFlag = 1, t.disabledSend(), n.disabledPoint();
                        var s = r.getVideoElement(a, "vjs-control-bar");
                        s && l && l.removeChild(s), a.isFullscreen() && i.showCloseBtn(), setTimeout(function() {
                            a.play()
                        }, 0)
                    }
                }), a.on("fullscreenchange", function() {
                    i.ifTrailer && 1 == i.trailerFlag && (a.isFullscreen() ? i.showCloseBtn() : i.hideCloseBtn())
                })
            }
        };
    module.exports = i
});
/*!Name: jQuery.jqueryzoom.js
 * Date: 2021-2-25 18:16:32 */
!function(o) {
    o.fn.jqueryzoom = function(i) {
        var t = {
            xzoom: 200,
            yzoom: 200,
            offset: 10,
            position: "right",
            lens: 1,
            preload: 1
        };
        i && o.extend(t, i);
        var s = "";
        o(this).hover(function() {
            var i = o(this).offset().left,
                e = o(this).offset().top;
            function d(o) {
                this.x = o.pageX, this.y = o.pageY
            }
            if (0 != o(this).find("img").length) {
                var m = o(this).find("img").get(0).offsetWidth,
                    v = o(this).find("img").get(0).offsetHeight;
                s = o(this).find("img").attr("alt");
                var h = o(this).find("img").attr("jqimg");
                o(this).find("img").attr("alt", ""), 0 == o("div.zoomdiv").get().length && (o(this).after("<div class='zoomdiv'><img class='bigimg' src='" + h + "'/></div>"), o(this).append("<div class='jqZoomPup'>&nbsp;</div>")), o("div.zoomdiv").width(t.xzoom), o("div.zoomdiv").height(t.yzoom), o("div.zoomdiv").show(), t.lens || o(this).css("cursor", "crosshair"), o(document.body).mousemove(function(s) {
                    mouse = new d(s);
                    var h = o(".bigimg").get(0).offsetWidth,
                        n = o(".bigimg").get(0).offsetHeight,
                        u = "x",
                        l = "y";
                    if (isNaN(l) | isNaN(u)) {
                        var l = h / m,
                            u = n / v;
                        o("div.jqZoomPup").width(t.xzoom / (1 * l)), o("div.jqZoomPup").height(t.yzoom / (1 * u)), t.lens && o("div.jqZoomPup").css("visibility", "visible")
                    }
                    xpos = mouse.x - o("div.jqZoomPup").width() / 2 - i, ypos = mouse.y - o("div.jqZoomPup").height() / 2 - e, t.lens && (xpos = mouse.x - o("div.jqZoomPup").width() / 2 < i ? 0 : mouse.x + o("div.jqZoomPup").width() / 2 > m + i ? m - o("div.jqZoomPup").width() - 2 : xpos, ypos = mouse.y - o("div.jqZoomPup").height() / 2 < e ? 0 : mouse.y + o("div.jqZoomPup").height() / 2 > v + e ? v - o("div.jqZoomPup").height() - 2 : ypos), t.lens && o("div.jqZoomPup").css({
                        top: ypos,
                        left: xpos
                    }), scrolly = ypos, o("div.zoomdiv").get(0).scrollTop = scrolly * u, scrollx = xpos, o("div.zoomdiv").get(0).scrollLeft = scrollx * l
                })
            }
        }, function() {
            o(this).children("img").attr("alt", s), o(document.body).unbind("mousemove"), t.lens && o("div.jqZoomPup").remove(), o("div.zoomdiv").remove()
        }), count = 0, t.preload && (o("body").append("<div style='display:none;' class='jqPreload" + count + "'>360buy</div>"), o(this).each(function() {
            var i = o(this).children("img").attr("jqimg"),
                t = jQuery("div.jqPreload" + count).html();
            jQuery("div.jqPreload" + count).html(t + '<img src="' + i + '">')
        }))
    }
}(jQuery);
/*!Name: jQuery.zoom.js
 * Date: 2021-2-25 18:16:32 */
/*!
	Zoom 1.7.18
	license: MIT
	http://www.jacklmoore.com/zoom
*/
!function(o) {
    var n = {
        url: !1,
        lazyUrl: !1,
        callback: !1,
        target: !1,
        duration: 120,
        on: "mouseover",
        touch: !0,
        onZoomIn: !1,
        onZoomOut: !1,
        magnify: 1
    };
    o.zoom = function(n, t, e, i) {
        var u,
            c,
            a,
            m,
            l,
            r,
            s,
            d = o(n).css("position"),
            h = o(t);
        return n.style.position = /(absolute|fixed)/.test(d) ? d : "relative", n.style.overflow = "hidden", e.style.width = e.style.height = "", o(e).addClass("zoomImg").css({
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0,
            width: e.width * i,
            height: e.height * i,
            border: "none",
            maxWidth: "none",
            maxHeight: "none"
        }).appendTo(n), {
            init: function() {
                c = o(n).outerWidth(), u = o(n).outerHeight(), t === n ? (m = c, a = u) : (m = h.outerWidth(), a = h.outerHeight()), l = (e.width - c) / m, r = (e.height - u) / a, s = h.offset()
            },
            move: function(o) {
                var n = o.pageX - s.left,
                    t = o.pageY - s.top;
                t = Math.max(Math.min(t, a), 0), n = Math.max(Math.min(n, m), 0), e.style.left = n * -l + "px", e.style.top = t * -r + "px"
            }
        }
    }, o.fn.zoom = function(t) {
        return this.each(function() {
            var e,
                i = o.extend({}, n, t || {}),
                u = i.target || this,
                c = this,
                a = o(c),
                m = document.createElement("img"),
                l = o(m),
                r = "mousemove.zoom",
                s = !1,
                d = !1;
            (i.url || (e = a.find("img"), e[0] && (i.url = e.data("src") || e.attr("src")), i.url)) && (!function() {
                var o = u.style.position,
                    n = u.style.overflow;
                a.one("zoom.destroy", function() {
                    a.unbind(".zoom"), u.style.position = o, u.style.overflow = n, l.remove()
                })
            }(), m.onload = function() {
                var n = o.zoom(u, c, m, i.magnify);
                function t(t) {
                    n.init(), n.move(t), l.stop().fadeTo(o.support.opacity ? i.duration : 0, 1, !!o.isFunction(i.onZoomIn) && i.onZoomIn.call(m))
                }
                function e() {
                    l.stop().fadeTo(i.duration, 0, !!o.isFunction(i.onZoomOut) && i.onZoomOut.call(m))
                }
                "grab" === i.on ? a.bind("mousedown.zoom", function(i) {
                    1 === i.which && (o(document).one("mouseup.zoom", function() {
                        e(), o(document).unbind(r, n.move)
                    }), t(i), o(document).bind(r, n.move), i.preventDefault())
                }) : "click" === i.on ? a.bind("click.zoom", function(i) {
                    return s ? void 0 : (s = !0, t(i), o(document).bind(r, n.move), o(document).one("click.zoom", function() {
                        e(), s = !1, o(document).unbind(r, n.move)
                    }), !1)
                }) : "toggle" === i.on ? a.bind("click.zoom", function(o) {
                    s ? e() : t(o), s = !s
                }) : "mouseover" === i.on && (n.init(), a.bind("mouseenter.zoom", t).bind("mouseleave.zoom", e).bind(r, n.move)), i.touch && a.bind("touchstart.zoom", function(o) {
                    o.preventDefault(), d ? (d = !1, e()) : (d = !0, t(o.originalEvent.touches[0] || o.originalEvent.changedTouches[0]))
                }).bind("touchmove.zoom", function(o) {
                    o.preventDefault(), n.move(o.originalEvent.touches[0] || o.originalEvent.changedTouches[0])
                }), o.isFunction(i.callback) && i.callback.call(m)
            }, m.src = i.url)
        })
    }, o.fn.zoom.defaults = n
}(window.jQuery);

