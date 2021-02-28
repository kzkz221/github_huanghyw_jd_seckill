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