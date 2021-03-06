/*!Name: jQuery.imgScroll.js
 * Date: 2021-2-25 18:16:32 */
!function(e) {
    e.fn.imgScroll = function(t, s) {
        var i = {
                data: [],
                template: null,
                evtType: "click",
                visible: 1,
                direction: "x",
                next: "#next",
                prev: "#prev",
                disableClass: "disabled",
                disableClassPerfix: !1,
                speed: 300,
                step: 1,
                loop: !1,
                showControl: !1,
                width: null,
                height: null,
                navItems: !1,
                navItmesWrapClass: "scroll-nav-wrap",
                navItemActivedClass: "current",
                status: !1,
                statusWrapSelector: ".scroll-status-wrap"
            },
            l = e.extend(i, t);
        return this.each(function() {
            var t,
                i = e(this),
                a = i.find("ul").eq(0),
                n = a.children("li"),
                d = n.length,
                r = null,
                o = null,
                c = "string" == typeof l.next ? e(l.next) : l.next,
                f = "string" == typeof l.prev ? e(l.prev) : l.prev,
                u = 0,
                p = l.step,
                h = l.visible,
                v = Math.ceil((d - h) / p) + 1,
                C = l.loop,
                m = l.direction,
                b = l.evtType,
                x = l.disableClass,
                g = l.disableClassPerfix ? l.disableClassPerfix + "-prev-" + x : x,
                w = l.disableClassPerfix ? l.disableClassPerfix + "-next-" + x : x,
                y = l.navItems,
                q = l.navItmesWrapClass,
                I = e("." + q).length > 0,
                P = l.navItemActivedClass,
                W = l.status,
                S = l.statusWrapSelector,
                $ = e(S).length > 0,
                k = !1,
                A = !0,
                M = (d - h) % p == 0,
                T = l.template || '<ul>{for slide in list}<li><a href="${slide.href}" target="_blank"><img src="${slide.src}" alt="${slide.alt}" /></a></li>{/for}</ul>';
            function j() {
                d = l.data.length, a = i.find("ul").eq(0), n = a.children("li"), v = Math.ceil((d - h) / p) + 1, M = (d - h) % p == 0
            }
            function H(e, b) {
                if (a.is(":animated"))
                    return !1;
                if (C)
                    A && b && (u = v), k && !b && (u = -1), e = b ? --u : ++u;
                else {
                    if (A && b || k && !b)
                        return !1;
                    e = b ? --u : ++u
                }
                t = "x" == m ? {
                    left: e >= v - 1 ? -(d - h) * r : -e * p * r
                } : {
                    top: e >= v - 1 ? -(d - h) * o : -e * p * o
                };
                function x() {
                    C ? (k = d - e * p <= h, A = e <= 0) : (d - e * p <= h ? (c.addClass(w), k = !0) : (c.removeClass(w), k = !1), e <= 0 ? (f.addClass(g), A = !0) : (f.removeClass(g), A = !1)), (y || W) && Q(e), "function" == typeof s && s.apply(i, [e, v, n.slice(e * p, e * p + h), n.slice(e * p + h - p, e * p + h)])
                }
                l.speed ? a.animate(t, l.speed, x) : (a.css(t), x())
            }
            function Q(t) {
                y && e("." + q).find("em").removeClass(P).eq(t).addClass(P), W && e(S).html("<b>" + (t + 1) + "</b>/" + v)
            }
            function _() {
                f.unbind(b), c.unbind(b)
            }
            if (l.data.length > 0) {
                if (!l.width || !l.height)
                    return !1;
                !function(e) {
                    var t = {
                        list: e
                    };
                    i.html(T.process(t)), j()
                }(l.data)
            }
            d > h && h >= p ? (function(e) {
                C || (d > p && d > h ? (f.addClass(g), c.removeClass(w)) : d <= h && c.addClass(w)), "left" !== n.eq(0).css("float") && n.css("float", "left"), r = l.width || n.eq(0).outerWidth(), o = l.height || n.eq(0).outerHeight(), i.css({
                    position: "static" == i.css("position") ? "relative" : i.css("position"),
                    width: "x" == e ? r * h : r,
                    height: "x" == e ? o : o * h,
                    overflow: "hidden"
                }), a.css({
                    position: "absolute",
                    width: "x" == e ? r * d : r,
                    height: "x" == e ? o : o * d,
                    top: 0,
                    left: 0
                }), "function" == typeof s && s.apply(i, [u, v, n.slice(u * p, u * p + h), n.slice(u * p + h - p, u * p + h)])
            }(m), _(), function() {
                f.bind(b, function() {
                    H(u, !0)
                }), c.bind(b, function() {
                    H(u, !1)
                })
            }(), y && function(t, s) {
                for (var l = I ? e("." + t).eq(0) : e('<div class="' + t + '"></div>'), a = 0; a < v; a++)
                    l.append("<em " + (0 === a ? " class=" + s : "") + ' title="' + (a + 1) + '">' + (a + 1) + "</em>");
                I || i.after(l)
            }(q, P), W && function() {
                var t = $ ? e(S).eq(0) : e('<div class="' + S.replace(".", "") + '"></div>');
                t.html("<b>1</b>/" + v), $ || i.after(t)
            }()) : (l.showControl ? c.add(f).show() : c.add(f).hide(), f.addClass(g), c.addClass(w), _())
        })
    }
}(jQuery);
/*!Name: recommend.js
 * Date: 2021-2-25 18:16:33 */
define("MOD_ROOT/common/tools/recommend", function(require, exports, module) {
    require("JDF_UNIT/trimPath/1.0.0/trimPath");
    var t = require("MOD_ROOT/common/tools/tools"),
        a = function(a) {
            if (this.param = $.extend({
                lid: t.getAreaId().areaIds[0] || "",
                lim: 6,
                ec: "utf-8",
                uuid: -1,
                pin: readCookie("pin") || ""
            }, a.param), this.$el = a.$el, this.template = a.template, this.showOnData = void 0 === a.showOnData || a.showOnData, this.loadPrice = void 0 === a.loadPrice || a.loadPrice, this.url = a.url || "//diviner.jd.com/diviner?", this.reBuildJSON = a.reBuildJSON, this.autoInit = void 0 === a.autoInit, this.skuHooks = a.skuHooks || "SKUS_recommend", this.ext = a.ext || {}, this.hasEmptyMsg = a.hasEmptyMsg || !1, this.onPriceLoad = a.onPriceLoad || function() {}, this.callback = a.callback || function() {}, this.debug = a.debug, this.isNewMixer = !!a.isNewMixer, !this.param.p)
                throw new Error("The param [p] is not Specificed");
            return this.autoInit && this.init(), this
        };
    a.prototype = {
        init: function() {
            var t = readCookie("__jda");
            t ? "-" == t.split(".")[1] ? this.param.uuid = -1 : this.param.uuid = t.split(".")[1] : this.param.uuid = -1, this.get(this.rid)
        },
        get: function(t, a) {
            var i,
                e = this,
                s = pageConfig.queryParam,
                o = [];
            if (pageConfig.product)
                for (i = 0; i < pageConfig.product.cat.length; i++)
                    this.param["c" + (i + 1)] = pageConfig.product.cat[i];
            if (s) {
                for (var r in s)
                    s.hasOwnProperty(r) && ("c1" == r || "c2" == r || "c3" == r ? e.param[r] = s[r] : o.push(r + ":" + s[r]));
                e.param.hi = o.join(",")
            }
            if (this.debug && console.info(this.url + decodeURIComponent($.param(this.param))), this.isNewMixer) {
                var n = this.param.pin,
                    h = JSON.stringify(this.param);
                var c = "jQuery" + function() {
                    for (var t = [], a = 0; a < 6; a++) {
                        var i = 9 * Math.random();
                        i = parseInt(i, 10), t.push(i)
                    }
                    return t.join("")
                }();
                this.param = {}, this.param.pin = n, this.param.body = h, this.param.appid = "pc", this.param.functionId = "mixer", this.param.t = (new Date).getTime(), this.param.jsonp = c, $.ajax({
                    url: this.url + decodeURIComponent($.param(this.param)),
                    dataType: "jsonp",
                    jsonpCallback: c,
                    scriptCharset: this.param.ec,
                    success: function(t) {
                        var a = !!(t.success && t && t.data && t.data.length);
                        a ? e.set(t) : e.hasEmptyMsg && e.$el.html('<div class="ac">\u300c\u6682\u65e0\u6570\u636e\u300d</div>'), this.debug && console.log(t), e.callback.apply(e, [a, t])
                    }
                })
            } else
                $.ajax({
                    url: this.url + decodeURIComponent($.param(this.param)),
                    dataType: "jsonp",
                    scriptCharset: this.param.ec,
                    success: function(t) {
                        var a = !!(t.success && t && t.data && t.data.length);
                        a ? e.set(t) : e.hasEmptyMsg && e.$el.html('<div class="ac">\u300c\u6682\u65e0\u6570\u636e\u300d</div>'), this.debug && console.log(t), e.callback.apply(e, [a, t])
                    }
                })
        },
        set: function(a) {
            var i = this;
            pageConfig[this.skuHooks] = [], a.skuHooks = this.skuHooks, a.ext = this.ext, this.reBuildJSON && this.reBuildJSON > 0 && (a.data = t.reBuildJSON(a.data, this.reBuildJSON)), this.debug && (console.log(a), alert(this.template.process(a))), this.showOnData && this.$el.show();
            try {
                this.$el.show().html(this.template.process(a))
            } catch (t) {
                /isdebug/.test(location.href) && "undefined" != typeof console && console.error("[pid=" + this.param.p + "] " + t)
            }
            this.loadPrice && t.priceNum({
                skus: pageConfig[this.skuHooks],
                $el: this.$el,
                callback: function(t, a) {
                    i.onPriceLoad.call(i, t, a)
                }
            }), this.setTrackCode(a.impr)
        },
        setTrackCode: function(t) {
            var a = this.$el.find("li"),
                i = this,
                e = "&m=UA-J2011-1&ref=" + encodeURIComponent(document.referrer);
            a.each(function() {
                var t = $(this).attr("data-clk");
                $(this).bind("click", function(a) {
                    var s = $(a.target);
                    (s.is("a") || s.is("img") || s.is("span")) && i.newImage(t + e, !0), s.is("input") && 1 == s.attr("checked") && i.newImage(t + e, !0)
                })
            }), this.newImage(t + e, !0)
        },
        newImage: function(t, a, i) {
            var e = new Image;
            t = a ? t + "&random=" + Math.random() + new Date : t, e.onload = function() {
                void 0 !== i && i(t)
            }, e.setAttribute("src", t)
        }
    }, module.exports = a
});

