/*!Name: jQuery.scroller.js
 * Date: 2021-2-25 18:16:32 */
!function(t) {
    var o = function(o, n) {
        this.opts = t.extend({
            delay: 50,
            start: null,
            end: null,
            startThreshold: 0,
            stopThreshold: 0,
            onStart: function() {},
            onEnd: function() {},
            onScroll: function() {}
        }, n), this.$el = t(o), this.init()
    };
    o.prototype = {
        init: function() {
            this.bindEvent(), t(window).bind("scroll", function() {
                t(this).trigger("onscroller")
            })
        },
        bindEvent: function() {
            var o,
                n = this;
            t(window).bind("onscroller", function() {
                clearTimeout(o), o = setTimeout(function() {
                    n.onScroll(), clearTimeout(o)
                }, n.opts.delay)
            })
        },
        onScroll: function(o) {
            var n = t(document).scrollTop(),
                s = this.opts.start || this.$el.offset().top,
                i = this.opts.end || s + this.$el.outerHeight();
            t(window).height();
            this.opts.end && "object" == typeof this.opts.end && (i = this.opts.end.offset().top), n > s + this.opts.startThreshold && n < i - this.opts.stopThreshold ? this.opts.onStart.apply(this) : this.opts.onEnd.apply(this), this.opts.onScroll.apply(this)
        }
    }, t.fn.scroller = function(n, s) {
        return this.each(function() {
            var i = new o(this, n, s);
            t(this).data("scroller", i)
        })
    }
}(jQuery);
/*!Name: reservation.js
 * Date: 2021-2-25 18:16:26 */
define("MOD_ROOT/buybtn/reservation", function(require, exports, module) {
    var t = require("MOD_ROOT/common/tools/tools").Countdown,
        e = require("MOD_ROOT/common/tools/event").Event,
        i = require("MOD_ROOT/common/tools/tools"),
        s = require("JDF_UNIT/login/1.0.0/login"),
        n = require("MOD_ROOT/common/core"),
        o = require("PUBLIC_ROOT/conf");
    require("JDF_UI/dialog/1.0.0/dialog"), require("MOD_ROOT/ETooltips/ETooltips");
    function r(t, e) {
        if ("number" != typeof t || "function" != typeof e)
            throw "Invalid params.";
        setTimeout(function() {
            e() || r(t, e)
        }, t)
    }
    function a(t) {
        var e = t.isPinGou ? "1" : "3",
            i = t.isPinGou ? "\u9080\u8bf7\u597d\u53cb" : "\u5206\u4eab",
            n = "//fenxiang.jd.com/shareFront/initShareIcons.action?sku=" + t.skuid + "&flag=" + e;
        s({
            modal: !0,
            complete: function(t) {
                t && t.Identity && t.Identity.IsAuthenticated && o()
            }
        });
        function o() {
            $("body").dialog({
                title: i,
                type: "iframe",
                source: n,
                width: 600,
                height: 200
            })
        }
    }
    var c = {
        init: function(t) {
            $(".J-yuyue-share").before('<span class="yuyue-text J-yuyue-text"></span>');
            this.$el = $("#btn-reservation,#btn-reservation-mini"), this.$banner = $("#yuyue-banner"), this.$process = $("#yuyue-process"), this.$textTip = $(".J-yuyue-text"), this.jnbtBtn = t.jnbtBtn, this.cfg = t, this.isPlusProduct = !1, c.isNoBuy = !0, c.isRealPlus = !1, this.cfg.isYuYue && (this.$count = this.$banner.find(".J-count"), this.$time = this.$banner.find(".J-time"), this.$price = $(".J-summary-price .p-price").hide(), this.bindEvent(), this.get())
        },
        invite: function() {
            return a(this.cfg)
        },
        bindEvent: function() {
            var t = this;
            $(".J-yuyue-tips .J-tips").unbind("click").bind("click", function() {
                $("#detail").length && $("html,body").scrollTop($("#detail").offset().top), $("#pingou-rules-tab").trigger("click")
            }), e.addListener("onStockReady", function(e) {
                var i = t.cfg.jnbtBtn,
                    e = e && e.stock && e.stock.data,
                    s = e.stockInfo && e.stockInfo.area && e.stockInfo.area.provinceId;
                t.cfg.havestock = e.stockInfo && e.stockInfo.isStock, t.cfg.havestock ? i.enabled(e) : i.disabled(), "1" == s && t.ysSupportJnbt ? i.show() : i.hide(), 4 === t.state && "5" != t.type && (t.cfg.havestock ? t.enabled(e) : t.disabled())
            }), e.addListener("onStockReady", function(t) {
                s(t)
            });
            function s(e) {
                var e = e && e.stock && e.stock.data,
                    s = e && e.yuyueInfo && e.yuyueInfo.type;
                this.type = s;
                try {
                    var n = 1 == e.promotion.limitBuyInfo.resultExt.isPlusLimit
                } catch (t) {
                    var n = !1
                }
                try {
                    var o = c.isRealPlus = "1" == e.isPlusMember
                } catch (t) {
                    var o = c.isRealPlus = !1
                }
                var r = !0;
                if (c.isNoBuy || t.cfg.havestock || (r = !1), n && !t.cfg.unSupportedArea && r) {
                    var a = "5" == s ? "\u52a0\u5165PLUS\u4f1a\u5458\u5373\u53ef\u83b7\u5f97\u53c2\u4e0e\u6d3b\u52a8\u8d44\u683c\uff0c\u4e2d\u7b7e\u540e\u624d\u80fd\u8d2d\u4e70\u672c\u5546\u54c1\u54e6~" : "\u52a0\u5165PLUS\u4f1a\u5458\u5373\u53ef\u83b7\u5f97\u672c\u5546\u54c1\u62a2\u8d2d\u8d44\u683c\uff0c\u5e93\u5b58\u6709\u9650\uff0c\u62a2\u5b8c\u5373\u6b62~";
                    $(".J_JoinPlus").remove(), $("#yuyue-banner").attr("style", "background:url(//img14.360buyimg.com/imagetools/jfs/t1/113418/21/9492/25909/5ed8a23bE59c3eec6/6cd2c9282bf901c5.png) 0 0 no-repeat").find(".activity-type").hide(), t.hideTheSecondPriceFloor(), t.addJoinPlusButton(), i.checkLogin().done(function(e) {
                        e = e || {};
                        var i = e.Identity || {},
                            s = i.IsAuthenticated;
                        s && o ? t.removeTipBar() : t.addTipBar(a), t.toggleButton(!!s && o)
                    }).fail(function() {
                        t.addTipBar(a), t.toggleButton(!1)
                    }), "5" == s ? $("#btn-reservation,#btn-reservation-mini").hide() : $("#btn-reservation,#btn-reservation-mini").show()
                } else
                    n && (t.removeTipBar(), $("#yuyue-banner").attr("style", "").find(".activity-type").show(), $(".J_JoinPlus").remove(), "5" == s && $("#btn-reservation,#btn-reservation-mini").hide());
                n && "5" == s && $(".J-mobile-only").length && ($(".J-mobile-only").show(), $(".choose-amount").hide())
            }
            function n(t) {
                var e = $("#J_YuYuePrice");
                if (e.length)
                    $(".price", e).html(t);
                else {
                    var i = '                        <div class="summary-price" id="J_YuYuePrice">                             <div class="dt">\u9884 \u7ea6 \u4ef7</div>                             <div class="dd">                                 <span class="p-price"><span>\uffe5</span><span class="price">' + t + "</span></span>                            </div>                        </div>";
                    $(".J-summary-price").before(i)
                }
            }
            function a() {
                $("#J_YuYuePrice").remove()
            }
            function l(t) {
                var e = $("#J_DelPrice");
                e.length ? $("del", e).html("\uffe5" + t) : $(".J-summary-price .p-price").after('<span id="J_DelPrice" style="vertical-align:3px;">[<del>\uffe5' + t + "</del>]</span>")
            }
            function u() {
                $("#J_DelPrice").remove()
            }
            function d(t) {
                var e = ".J-p-" + pageConfig.product.skuid;
                $(e).html(t), pageConfig.product.jp = t
            }
            function h(t) {
                var e = $("#J_ShoppingCartButton");
                if (e.length)
                    e.html(t), e.is(":visible") || e.css("display", "");
                else {
                    var i = '<a href="javascript:void(0);" id="J_ShoppingCartButton" class="btn-special2 btn-lg">' + t + "</a>";
                    $("#btn-reservation").after(i), $("#J_ShoppingCartButton").ETooltips({
                        close: !1,
                        content: "PC\u7aef\u6682\u4e0d\u652f\u6301\u8d2d\u4e70\uff0c\u624b\u673a\u4e0b\u8f7d\u4eac\u4e1cAPP\uff0c\u4eab\u53d7\u5546\u54c1\u63d0\u524d\u62a2\uff01",
                        width: 270,
                        pos: "bottom",
                        zIndex: 10
                    })
                }
            }
            function p() {
                $("#J_ShoppingCartButton").hide()
            }
            function f(t) {
                var e = $("#btn-reservation");
                e.length ? e.html(t) : console && console.log("\u64cd\u4f5c\u7684\u8282\u70b9\u4e0d\u5b58\u5728")
            }
            function y(t, e) {
                var t = t || {},
                    i = t.state,
                    s = t.hidePrice,
                    o = t.showPromoPrice,
                    r = t.sellWhilePresell,
                    e = e || {},
                    c = e.p,
                    y = e.op,
                    m = e.np || {},
                    g = m.type,
                    b = m.price,
                    v = {
                        1: "\u7b49\u5f85\u9884\u7ea6",
                        2: "\u5f00\u59cb\u9884\u7ea6",
                        3: "\u7b49\u5f85\u62a2\u8d2d",
                        4: "\u62a2\u8d2d",
                        5: "\u62a2\u8d2d\u5df2\u7ed3\u675f"
                    }[i] || "\u5f00\u59cb\u9884\u7ea6";
                0 == s && 1 == o && (a(), u(), p(), v !== $("#btn-reservation").html() && f(v), $("#choose-btns").removeClass("extra"), i <= 3 && 3 == g && +b > 0 && +b < +c ? 1 == r ? ($("#choose-btns").addClass("extra"), n(b), f("<span>\uffe5" + b + "</span><br><stong>" + v + "</stong>"), h("<span>\uffe5" + c + "</span><br><stong>\u76f4\u63a5\u8d2d\u4e70</stong>"), $(".addcart-mini .p-price strong").html(b)) : (d(b), l(c)) : +y > 0 && +y > +c && l(y))
            }
            var m = !0;
            o.get("BASE.RESERVATION.reservedPriceSignal") && e.addListener("onPriceReady", function(e) {
                var i = e.price || {};
                t.__res__ ? y(t.__res__, i) : m && (r(0, function() {
                    return !!t.__res__ && (y(t.__res__, i), !0)
                }), m = !1)
            })
        },
        get: function() {
            var t = this;
            t.cfg.isYuYue && e.addListener("onStockReady", function(e) {
                var i = e && e.stock && e.stock.data;
                t.cfg.havestock = i.stockInfo && i.stockInfo.isStock;
                var s = i.yuyueInfo;
                t.cfg.isYuYue && (!s || $.isEmptyObject(s) || s.error || 5 == s.state) && (location.href = n.modifyURL(location.href, {
                    query: {
                        yuyue: "0"
                    }
                })), s && s.yuyue ? t.set(i) : t.onError(), t.setPrice(s && s.hidePrice), t.__res__ = s
            })
        },
        getIsKOurl: function() {
            var t = this;
            $.ajax({
                url: "//itemko.jd.com/itemShowBtn",
                data: {
                    skuId: this.cfg.skuid,
                    from: "pc"
                },
                dataType: "jsonp",
                success: function(e) {
                    t.url = e.url, t.cfg.havestock && e && "3" === e.type ? t.enabled(e) : t.disabled(e.url)
                }
            })
        },
        log: function(t) {
            n.log(null, "reservation.js", t)
        },
        onError: function() {
            this.cfg.addToCartBtn.reInit(this.$el.eq(0)), this.log("YuShou service return a error, Maybe the YuShou special attr has expired or service unavailable.")
        },
        set: function(t) {
            var e = t.yuyueInfo;
            if ("5" != e.type) {
                this.$el.show(), this.setTextTips(e.plusText, e), this.setCountdown(e), this.setProcess(e), this.checkState(t), this.setCategory(e), this.supportJNBT(t)
            } else {
                this.$banner.find("strong").text("\u9884\u7ea6\u62bd\u7b7e"), this.$el.show(), this.setTextTips(e.plusText, e), this.setCountdown(e), this.setProcess(e), this.checkStateKz(t), this.setCategory(e), this.supportJNBT(t), $("#yuyue-process h3").text("\u9884\u7ea6\u62bd\u7b7e\u6d41\u7a0b"), $("#yuyue-process>.item3").find("dt").text("3.\u62bd\u7b7e\u4e2d"), $("#yuyue-process>.item3").find("dd").text("\u62bd\u53d6\u62a2\u8d2d\u8d44\u683c");
                $(".pingou-rules ol").html("<li>1\u3001\u90e8\u5206\u5546\u54c1\u9884\u7ea6\u6210\u529f\u540e\u624d\u6709\u62bd\u7b7e\u8d44\u683c\uff0c\u4e2d\u7b7e\u540e\uff0c\u8bf7\u5173\u6ce8\u62a2\u8d2d\u65f6\u95f4\u53ca\u65f6\u62a2\u8d2d\uff0c\u8d27\u6e90\u6709\u9650\uff0c\u5148\u62a2\u5148\u5f97\uff01</li>                 <li>2\u3001\u90e8\u5206\u5546\u54c1\u5728\u9884\u7ea6\u671f\u95f4\u62a2\u8d2d\u65f6\u95f4\u672a\u5b9a\uff0c\u6211\u4eec\u4f1a\u5728\u5546\u54c1\u5f00\u62a2\u524d\u901a\u8fc7Push\u901a\u77e5\u63d0\u9192\u60a8\uff0c\u8bf7\u5728\u8bbe\u7f6e\u4e2d\u9009\u62e9\u5141\u8bb8\u901a\u77e5\uff0c\u4ee5\u514d\u9519\u8fc7\u62a2\u8d2d\u65f6\u95f4\u3002</li>                 <li>3\u3001\u5bf9\u4e8e\u9884\u7ea6\u6210\u529f\u4eab\u4f18\u60e0\u7684\u5546\u54c1\uff0c\u9884\u7ea6\u7528\u6237\u53ef\u83b7\u5f97\u4f18\u60e0\u5238\u6216\u4e13\u5c5e\u4f18\u60e0\u3002\u4f18\u60e0\u5238\u5728\u62a2\u8d2d\u5f00\u59cb\u540e\u4f7f\u7528\uff0c\u4f7f\u7528\u65f6\u95f4\u4ee5\u4f18\u60e0\u5238\u6709\u6548\u671f\u4e3a\u51c6\uff1b\u4e13\u5c5e\u4f18\u60e0\u5728\u62a2\u8d2d\u5f00\u59cb\u540e\uff0c\u70b9\u51fb\u201c\u7acb\u5373\u62a2\u8d2d\u201d\u5c06\u5546\u54c1\u52a0\u5165\u8d2d\u7269\u8f66\uff0c\u53ef\u5728\u8d2d\u7269\u8f66\u67e5\u770b\u4f18\u60e0\uff0c\u82e5\u62a2\u8d2d\u65f6\u95f4\u7ed3\u675f\uff0c\u4f18\u60e0\u81ea\u52a8\u5931\u6548\u3002</li>                 <li>4\u3001\u67e5\u770b\u9884\u7ea6\u5546\u54c1\u8bf7\u81f3\u201c\u6211\u7684\u4eac\u4e1c\u201d-\u201c\u6211\u7684\u9884\u552e\u201d-\u201c\u6211\u7684\u9884\u7ea6\u201d\u8fdb\u884c\u67e5\u770b\u3002</li>                 <li>5\u3001\u5982\u679c\u63d0\u4f9b\u8d60\u54c1\uff0c\u8d60\u54c1\u8d60\u9001\u987a\u5e8f\u6309\u7167\u9884\u7ea6\u5546\u54c1\u8d2d\u4e70\u6210\u529f\u65f6\u95f4\u6765\u8ba1\u7b97\uff0c\u800c\u4e0d\u662f\u9884\u7ea6\u6210\u529f\u65f6\u95f4\u3002</li>                 <li>6\u3001\u5982\u60a8\u5bf9\u6d3b\u52a8\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u8bf7\u8054\u7cfb\u5ba2\u670d\u54a8\u8be2\u3002</li>  ")
            }
        },
        addTipBar: function(t) {
            var e = $("#J_TipBar"),
                i = '<i class="sprite-info"></i> {0}                 <i onclick="$(\'#J_TipBar\').remove()" class="sprite-close">&times;</i>         '.format(t);
            if (0 == e.length) {
                var s = "<div class='DJD-tips' id='J_TipBar'>" + i + "</div>";
                $(".itemInfo-wrap").prepend(s)
            } else
                e.html(i)
        },
        removeTipBar: function() {
            $("#J_TipBar").remove()
        },
        addJoinPlusButton: function() {
            var t = this;
            $("#btn-reservation,#btn-reservation-mini").each(function() {
                var e = $(this),
                    i = "\u5f00\u901aPLUS\u7acb\u5373\u53c2\u4e0e",
                    s = e.attr("id");
                t.cfg.isKO && (i = "\u5f00\u901aPLUS\u7acb\u5373\u62a2\u8d2d");
                var n = $("<a class='J_JoinPlus' href='//plus.jd.com/index'>" + i + "</a>").addClass(-1 == s.indexOf("mini") ? "btn-buyplus btn-lg" : "btn-primary btn-buyplus");
                e.after(n).hide()
            });
            function i() {
                var e = !t.cfg.unSupportedArea;
                $(".J_JoinPlus").toggleClass("btn-disable", !e).attr("href", e ? "//plus.jd.com/index" : "#none")
            }
            i(), e.addListener("onStockReady", i), "5" == t.type && $(".J_JoinPlus").hide()
        },
        toggleButton: function(t) {
            var e = this.$el,
                i = $(".J_JoinPlus"),
                s = $("#choose-baitiao");
            i.toggle(!t), t ? e.show() : e.hide(), setTimeout(function() {
                !t && s.hide()
            }, 100), 5 == this.type && $(".J_JoinPlus").hide(), 5 == this.type && e.hide()
        },
        hideTheSecondPriceFloor: function() {
            var t = [".J-sam-price", ".J-plus-price", ".J-fans-price", "#J_NewcomerPrice", "#J_DelPrice", "#J_StudentPrice"];
            $(t.join()).hide()
        },
        setPlus: function(t, e) {
            this.setTextTips(t.plusText, t), e()
        },
        setTextTips: function(t, e) {
            this.$textTip.html(t)
        },
        getUserType: function() {
            var t = readCookie("ceshi3.com");
            if (t) {
                var e = t.substr(0, 1);
                return "1" === e || "2" === e ? parseInt(e) : "N"
            }
            return "NO_LOGIN"
        },
        setCategory: function(t) {
            var e = $(".J-yy-category"),
                i = t.yuyueText;
            i ? e.html(i).show() : e.hide()
        },
        setProcess: function(t) {
            var e = this.$process.find(".J-step2"),
                i = this.$process.find(".J-step4");
            e.html(t.yuyueTime), i.html(t.buyTime)
        },
        setYuyueRule: function(t) {
            var e = $(".pingou-rules ol"),
                i = t.yuyueRuleText,
                s = "";
            if (null != i && i.length > 0) {
                for (var n = 0; n < i.length; n++)
                    s += "<li>" + i[n] + "</li>";
                e.html(s)
            }
        },
        setPrice: function(t) {
            t = Number(t), 1 === t && (this.$price.find("span:last").removeClass().addClass("price").html("\u5f85\u53d1\u5e03"), pageConfig.product.isHidePrice = !0), this.$price.show()
        },
        disabled: function() {
            this.$el.addClass("btn-disable"), this.$el.attr("href", "#none"), this.isEnabled = !1
        },
        enabled: function(t) {
            if (this.cfg.isClosePCShow)
                return !1;
            var e = this.$el.attr("href"),
                i = this;
            if ("#none" !== e && (this.url = e), this.url)
                if (2 == this.state) {
                    var s = 0;
                    try {
                        s = 1 == t.promotion.limitBuyInfo.resultExt.isPlusLimit ? 1 : 0
                    } catch (t) {
                        s = 0
                    }
                    this.$el.attr("href", i.url + "&shopId=" + i.cfg.shopId + "&isPlusLimit=" + s)
                } else
                    this.$el.attr("href", this.url);
            this.$el.removeClass("btn-disable"), this.isEnabled = !0
        },
        setCountdown: function(e) {
            var i = this.$time,
                s = this.$banner.find(".J-text");
            this.$count.html(e.num).closest(".J-item-1").show(), s.html(e.cdPrefix);
            var n = e.countdown;
            n > 0 ? (this.$banner.find(".J-item-2").show(), new t(1e3 * n, function(t) {
                t.d < 1 ? i.html(t.h + "\u5c0f\u65f6" + t.m + "\u5206" + t.s + "\u79d2") : i.html(t.d + "\u5929" + t.h + "\u5c0f\u65f6" + t.m + "\u5206" + t.s + "\u79d2")
            })) : this.$banner.find(".J-item-2").hide()
        },
        checkState: function(t) {
            var e = t.yuyueInfo;
            if (this.state = e.state, this.url = e.url, this.type = e.type, "1" != e.sellWhilePresell && this.setBtnText(e.btnText), this.cfg.yuyueState = e.state, this.cfg.yuyueCategory = e.category, 2 === e.state)
                this.enabled(t), "1" != e.sellWhilePresell && this.setBtnText("\u5f00\u59cb\u9884\u7ea6");
            else if (1 === e.state || 3 === e.state || 5 === e.state)
                this.disabled();
            else if (4 === e.state) {
                c.isNoBuy = !1, this.setBtnText("\u62a2\u8d2d"), this.url = location.protocol + "//cart.jd.com/gate.action?pcount=1&ptype=1&pid=" + this.cfg.skuid;
                try {
                    window.setAmount.$buyBtn = window.setAmount.$buyBtn.add(this.$el)
                } catch (t) {
                    console && console.log(t)
                }
                pageConfig.product.isCfy ? this.url = "//rx.yiyaojd.com/cart_addItem.action?pid=" + pageConfig.product.skuid + "&ptype=1&pcount=1" : this.cfg.isKO && (this.url = "#none", this.getIsKOurl()), this.cfg.havestock && (1 != e.plusType || e.showPlusTime) ? this.enabled(t) : this.disabled(e.url)
            }
        },
        checkStateKz: function(t) {
            var e = t.yuyueInfo;
            this.state = e.state, this.url = e.url, this.type = e.type, 1 === e.state && (this.setBtnText("\u7b49\u5f85\u9884\u7ea6"), this.disabled()), 2 === e.state && (this.url = "#none", this.setBtnText("\u7acb\u5373\u9884\u7ea6"), this.enabled(t), this.openResult("\u4f7f\u7528\u4eac\u4e1cAPP\u6700\u65b0\u7248\u672c\u626b\u7801\u53c2\u4e0e\uff0c\u6210\u529f\u9884\u7ea6\u5373\u53ef\u83b7\u5f97\u62bd\u7b7e\u8d44\u683c\u54e6~")), 3 === e.state && (this.setBtnText("\u6d3b\u52a8\u62bd\u7b7e\u4e2d"), this.disabled()), 4 === e.state && (this.url = "#none", "1" === e.drawStatus ? (this.setBtnText("\u67e5\u770b\u62bd\u7b7e\u7ed3\u679c"), this.enabled(t), this.openResult("\u4f7f\u7528\u4eac\u4e1cAPP\u6700\u65b0\u7248\u672c\u626b\u7801\u53c2\u4e0e\uff0c\u67e5\u770b\u62bd\u7b7e\u7ed3\u679c\uff0c\u4e2d\u7b7e\u540e\u624d\u80fd\u83b7\u5f97\u8d2d\u4e70\u8d44\u683c\u54e6\uff5e")) : (this.setBtnText("\u6d3b\u52a8\u62bd\u7b7e\u4e2d"), this.disabled())), 5 === e.state && (this.setBtnText("\u62bd\u7b7e\u5df2\u7ed3\u675f"), this.disabled())
        },
        openResult: function(t) {
            var e = this,
                i = this.$el.attr("data-url"),
                s = '                <p style="padding: 15px 30px;top: 60px;text-align: center;">                <span style="background: url(//img11.360buyimg.com/imagetools/jfs/t1/99478/39/16273/6095/5e798880Eb75106c9/db383dcd3bcb72a8.png) no-repeat 0 0;width: 95px;height: 32px;display: inline-block;background-size: 100%;"></span>                </p>                <p style="padding: 5px 30px;font-size: 14px;font-weight: 600;color: #999;text-indent: 24px;">' + t + '</p>                <div id="summary-mbuy" style="left:112px;width: 173px;margin-top: 35px;">                    <i></i>                    <div class="qrcode" style="margin-left: 15px;margin-top: 8px;">                        <div class="loading-style1"><b></b>\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u5019...</div>                    </div>                </div>                <p style="padding: 0 30px;position: absolute;bottom: 68px;color: #999;">                <i style="display: inline-block;margin-right: 6px;vertical-align: -3px;width: 16px;height: 16px;background-image: url(//img12.360buyimg.com/imagetools/jfs/t1/88278/27/16409/599/5e798862Ebf6899ed/de23ce453bfe64c5.png);"></i>                \u6253\u5f00\u201c\u4eac\u4e1capp-\u9996\u9875-\u53f3\u4e0a\u89d2\u626b\u4e00\u626b[-], \u626b\u63cf\u5c4f\u5e55\u4e0a\u7684\u4e8c\u7ef4\u7801\u201d</p>';
            this.$el.click(function() {
                $("body").dialog({
                    width: 392,
                    title: "",
                    height: 429,
                    type: "text",
                    maskClose: !0,
                    source: s,
                    onReady: function() {
                        e.loadQrcode(i)
                    }
                })
            })
        },
        loadQrcode: function(t) {
            var e = this.cfg.skuid;
            require.async("PLG_ROOT/jQuery.qrcode", function() {
                var i = t || "//m.jd.com/product/" + e + ".html?from=qrcode";
                $("#summary-mbuy .qrcode").html("").jdQrcode({
                    render: "image",
                    ecLevel: "L",
                    size: 145,
                    text: i
                })
            })
        },
        setBtnText: function(t) {
            this.$el.html(t)
        },
        supportJNBT: function(t) {
            var e = t.yuyueInfo;
            this.ysSupportJnbt = pageConfig.product.ysSupportJnbt = 1 === e.supportOther, this.ysSupportJnbt ? (this.jnbtBtn.show(), this.jnbtBtn.enabled(t)) : this.jnbtBtn.hide()
        }
    };
    module.exports = c, module.exports.showInvite = a, module.exports.__id = "Reservation"
});
/*!Name: ko.js
 * Date: 2021-2-25 18:16:26 */
define("MOD_ROOT/buybtn/ko", function(require, exports, module) {
    var t = require("MOD_ROOT/common/tools/event").Event,
        s = require("JDF_UNIT/login/1.0.0/login"),
        e = (require("MOD_ROOT/common/core"), require("MOD_ROOT/common/tools/tools").Countdown),
        i = {
            init: function(t) {
                return $("#choose-btn-ko").after('<span class="yuyue-text J-yuyue-text"></span>'), this.cfg = t, this.$el = $("#choose-btn-ko"), this.$textTip = $(".J-yuyue-text"), !!t.isKO && (!t.isYuShou && (this.isPlusProduct = !1, this.bindEvent(), this.get(), this))
            },
            bindEvent: function() {
                var s = this;
                t.addListener("onStockReady", function(t) {
                    s.isEnabled ? s.enabled() : s.disabled()
                })
            },
            get: function() {
                $.ajax({
                    url: "//itemko.jd.com/itemShowBtn",
                    data: {
                        skuId: this.cfg.skuid,
                        from: "pc"
                    },
                    dataType: "jsonp",
                    success: $.proxy(this.set, this)
                })
            },
            set: function(s) {
                if (!s || "3" !== s.type)
                    return this.disabled(), this.hide(), !1;
                this.buyUrl = s.url, this.show(), this.setPlus(s, $.proxy(function() {
                    this.setBtnText(this.getButtonText(s)), this.checkState(s)
                }, this)), t.fire({
                    type: "onKOReady",
                    r: s
                })
            },
            setPlus: function(t, e) {
                var i = t.pt,
                    n = t.ps > 0;
                if (this.isPlusProduct = 1 === i || 2 === i, !this.isPlusProduct || !n)
                    return e(), !1;
                var o = +new Date > 1e3 * t.st;
                s.isLogin($.proxy(function(s) {
                    var e = this.getUserType(),
                        n = "https://passport.jd.com/new/login.aspx?ReturnUrl=" + encodeURIComponent(location.href),
                        a = "";
                    if (s ? (this.showPlusTime = 1 === i && 2 === e || 2 === i && 2 === e || 2 === i && 1 === e, this.showPlusTime ? a = "\u60a8\u662fPLUS\u4f1a\u5458\uff0c\u63d0\u524d\u62a2\u8d2d\u5269\u4f59\u65f6\u95f4\uff1a" : (1 === i && (a = "\u5f00\u901aPLUS\u6b63\u5f0f\u4f1a\u5458\u53ef\u7acb\u5373\u5f00\u62a2"), 2 === i && 2 !== e && 1 !== e && (a = "\u5f00\u901aPLUS\u4f1a\u5458\u53ef\u7acb\u5373\u5f00\u62a2"), a += '\uff0c<a target="_blank" href="//plus.jd.com/index">\u53bb\u5f00\u901a <span class="arrow">&gt;&gt;</span></a>')) : a = 1 === i ? 'PLUS\u6b63\u5f0f\u4f1a\u5458\u4e13\u4eab\uff0c\u8bf7 <a href="{0}" class="J-plus-login">\u767b\u5f55</a> \u786e\u8ba4\u8d2d\u4e70\u8d44\u683c'.format(n) : 'PLUS\u4f1a\u5458\u5df2\u63d0\u524d\u5f00\u62a2\uff0c\u8bf7 <a href="{0}" class="J-plus-login">\u767b\u5f55</a> \u786e\u8ba4\u8d2d\u4e70\u8d44\u683c'.format(n), o)
                        if (this.showPlusTime) {
                            this.enabled(), this.setBtnText("\u62a2\u8d2d"), this.setPlusCountdown(t.ps, a);
                            if (pageConfig.product.specialAttrs instanceof Array && -1 != pageConfig.product.specialAttrs.join(",").indexOf("isKO") && 1 === i && 2 === e) {
                                var h = ["5131287", "5131225", "5131311", "5131309", "4068636"],
                                    r = pageConfig.product.skuid;
                                (function(t, s) {
                                    for (var e = !1, i = 0; i < s.length; i++)
                                        if (t == s[i]) {
                                            e = !0;
                                            break
                                        }
                                    return e
                                })(r, h) && (this.$textTip.hide(), this.$textTip.after('<span class="yuyue-text plus-yuyue-text">PLUS\u6b63\u5f0f\u4f1a\u5458\u4e13\u4eab</span>'))
                            }
                        } else
                            this.disabled(), this.setBtnText("\u7b49\u5f85\u62a2\u8d2d"), this.setTextTips(a, t);
                    else
                        this.disabled(), this.setBtnText("\u62a2\u8d2d\u672a\u5f00\u59cb")
                }, this))
            },
            setPlusCountdown: function(t, s) {
                if (t && !(t < 1)) {
                    var i = this.$textTip;
                    new e(1e3 * t, function(t) {
                        t.d < 1 ? i.html(s + t.h + "\u5c0f\u65f6" + t.m + "\u5206" + t.s + "\u79d2") : i.html(s + t.d + "\u5929" + t.h + "\u5c0f\u65f6" + t.m + "\u5206" + t.s + "\u79d2")
                    })
                }
            },
            setTextTips: function(t) {
                this.isPlusProduct && this.$textTip.html(t)
            },
            getUserType: function() {
                var t = readCookie("ceshi3.com");
                if (t) {
                    var s = t.substr(0, 1);
                    return "1" === s || "2" === s ? parseInt(s) : "N"
                }
                return "NO_LOGIN"
            },
            checkState: function(t) {
                this.isEnabled = "12" === t.state, this.isEnabled ? this.enabled() : this.disabled()
            },
            enabled: function() {
                this.cfg.havestock ? (this.$el.removeClass("btn-disable"), this.$el.attr("href", this.buyUrl)) : this.disabled()
            },
            disabled: function() {
                this.$el.addClass("btn-disable"), this.$el.attr("href", "#none")
            },
            show: function() {
                this.$el.show(), this.cfg.addToCartBtn.hide()
            },
            hide: function() {
                this.$el.hide(), this.cfg.addToCartBtn.show()
            },
            setBtnText: function(t) {
                this.$el.html(t)
            },
            getButtonText: function(t) {
                switch (t.state) {
                case "11":
                    return "\u62a2\u8d2d\u672a\u5f00\u59cb";
                case "12":
                    return "\u62a2\u8d2d";
                case "13":
                    return "\u62a2\u8d2d\u5df2\u7ed3\u675f";
                default:
                    return "\u62a2\u8d2d"
                }
            }
        };
    module.exports = i, module.exports.__id = "ko"
});
/*!Name: bigouma.js
 * Date: 2021-2-25 18:16:25 */
define("MOD_ROOT/buybtn/bigouma", function(require, exports, module) {
    var t = require("JDF_UNIT/login/1.0.0/login"),
        n = require("MOD_ROOT/common/core"),
        i = require("MOD_ROOT/common/tools/event").Event,
        s = {
            init: function(t) {
                return this.sku = t.skuid, this.cfg = t, this.$cd = $("#choose-countdown"), this.$cdTxt = this.$cd.find("#bgm-countdown"), this.$txt = $(".J-bgm-text"), this.$btn = $("#choose-btn-bgm"), this.$btnWrap = $("#choose-btns"), this.BTN_DISABLE = "btn-disable", this.$btn.length && (this.onBGM(), this.get(), this.bindEvent()), this
            },
            bindLogin: function() {
                var t = this;
                this.$btnWrap.delegate(".J-s-login", "click", function() {
                    return t.loginIframe(), !1
                })
            },
            bindEvent: function() {
                var t = this;
                function n(t, n) {
                    return (t.attr("href") || "").replace(/pcount=\d+/, "pcount=" + n)
                }
                i.addListener("onNumChange", function(i) {
                    var s = t.$txt.find(".J-bind");
                    s.attr("href", n(s, i.count)), t.bgmEnabled && t.enabled()
                }), i.addListener("onStockReady", function(n) {
                    pageConfig.product.havestock ? t.bgmEnabled && t.enabled() : t.disabled()
                })
            },
            loginIframe: function() {
                t({
                    modal: !0,
                    complete: function() {
                        window.location.reload(!0)
                    }
                })
            },
            onBGM: function() {
                this.$btn.show(), this.cfg.addToCartBtn.hide()
            },
            get: function() {
                var t = this;
                $.ajax({
                    url: "//jcode.jd.com/jcodeinfo.action",
                    data: {
                        sku: this.sku
                    },
                    dataType: "jsonp",
                    success: function(n) {
                        t.set(n)
                    }
                })
            },
            enabled: function(t) {
                if (this.bgmEnabled = !0, this.cfg.isClosePCShow || !this.cfg.havestock)
                    return !1;
                this.$btn.removeClass(this.BTN_DISABLE), this.$btn.attr("href", t || this.cfg.addToCartBtn.href), this.$txt.addClass("bgm-text-active")
            },
            disabled: function() {
                this.$btn.attr("href", "#none"), this.$btn.addClass(this.BTN_DISABLE)
            },
            set: function(t) {
                var n = t.cs && 1 === t.cs,
                    i = t.d && t.d > 0;
                if (this.isLogin = t && t.lg && 1 === t.lg, 2 === t.jtype)
                    return this.enabled(), this.setBtnText("\u52a0\u5165\u8d2d\u7269\u8f66"), !1;
                if (this.isLogin && this.$btnWrap.undelegate("click"), n) {
                    if (2 === t.status && i && this.setCountdown(t.d), !t.lg)
                        return this.setLoginTips(), this.bindLogin(), !1;
                    if (!t.b)
                        return this.setBindTips(t.url);
                    this.enabled()
                } else
                    this.setSupportText(t && t.source)
            },
            setBtnText: function(t) {
                this.$btn.text(t || "\u5fc5\u8d2d\u7801\u8d2d\u4e70")
            },
            setSupportText: function(t) {
                t = t.substr(1);
                var n = ["\u4eac\u4e1capp", "\u5fae\u4fe1", "\u624b\u673aQQ"],
                    i = [];
                if (t)
                    for (var s = t.split(""), e = 0; e < s.length; e++)
                        "1" === s[e] && i.push(n[e]);
                i.length > 0 ? this.$txt.html("\u8bf7\u5230" + i.join("\u3001") + "\u8d2d\u4e70") : this.$txt.html("")
            },
            setLoginTips: function() {
                this.$txt.html('\u8bf7 <span href="#none" class="hl_blue J-s-login" style="cursor:pointer">\u767b\u5f55</span> \u540e\u786e\u8ba4\u8d2d\u4e70\u8d44\u683c')
            },
            setBindTips: function(t) {
                t.indexOf("pcount") < 0 && (t += "&pcount=1");
                var n = '            \u8bf7\u5148 <a href="' + t + '" class="hl_blue J-s-login J-bind" style="display:inline;" target="_blank">\u7ed1\u5b9a/\u9886\u53d6\u5fc5\u8d2d\u7801 </a>\u518d\u8d2d\u4e70\u3002';
                this.$txt.html(n)
            },
            setCountdown: function(t) {
                var i = this;
                this.$cd.show();
                function s(t, n) {
                    return t.replace(/{d}/g, n.d).replace(/{h}/g, n.h).replace(/{m}/g, n.m).replace(/{s}/g, n.s)
                }
                n.Countdown.init(t, function(t) {
                    i.$cdTxt.html(s("{d}\u5929{h}\u5c0f\u65f6{m}\u5206{s}\u79d2", t))
                })
            }
        };
    module.exports = s, module.exports.__id = "bgm"
});

