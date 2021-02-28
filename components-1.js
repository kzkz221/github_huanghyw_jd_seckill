/*!Name: ETab.js
 * Date: 2021-2-25 18:16:25 */
!function(t, e, i) {
    "use strict";
    var s = "ETab",
        n = {
            event: "click",
            delay: 0,
            defaultIndex: null,
            current: "current",
            lazyload: null,
            selector: {
                trigger: '[data-tab="trigger"]',
                item: '[data-tab="item"]',
                anchor: "[data-anchor]"
            },
            onReady: function() {},
            onBeforeSwitch: function() {},
            onSwitch: function() {}
        };
    function o(e, i) {
        this.$el = e, this.settings = t.extend(!0, {}, n, i), this.index = 0, this._defaults = n, this._name = s, this._version = "@VERSION", this.init()
    }
    o.prototype = {
        init: function() {
            var t = this.settings,
                e = t.selector;
            this.triggers = this.$el.find(e.trigger), this.items = this.$el.find(e.item), this.anchors = this.$el.find(e.anchor), this.index = t.defaultIndex || 0, this.triggers.length !== this.items.length ? console.log("\u300c%s - %s\u300d The tab item count must equals to tab content count.", s, this.$el.selector) : (this.bindEvent(), "number" == typeof t.defaultIndex && this.triggers.eq(t.defaultIndex).trigger(t.event), t.onReady.call(this, t.defaultIndex)), /mouseover|mouseenter/.test(t.event) && !t.delay && (this.settings.delay = 200)
        },
        bindEvent: function() {
            var e = this,
                i = e.settings,
                s = i.selector,
                n = i.event + ".ETab";
            this.$el.undelegate(n).delegate(s.trigger, n, function() {
                e.handleEvent(t(this))
            }), /mouseover|mouseenter/.test(i.event) && this.$el.undelegate("mouseout mouseleave").delegate(s.trigger, "mouseout mouseleave", function() {
                clearTimeout(e.timer)
            })
        },
        handleEvent: function(t) {
            var e = this,
                i = this.triggers.index(t);
            clearTimeout(this.timer), this.timer = setTimeout(function() {
                e.go(i)
            }, this.settings.delay)
        },
        go: function(t, e) {
            var i = this.triggers,
                s = i.eq(t);
            this.settings.onBeforeSwitch.call(this, t), this.index = t, i.removeClass(this.settings.current), s.addClass(this.settings.current), this.items.hide().eq(t).show(), void 0 === e && this.settings.onSwitch.call(this, t), this.settings.lazyload && this.loadImages(this.items.eq(t))
        },
        loadImages: function(e) {
            var i = this.settings.lazyload;
            e.find("[" + i + "]").each(function() {
                var e = t(this).attr(i);
                e && t(this).attr("src", e).removeAttr(i)
            })
        }
    }, t.fn[s] = function(e) {
        return this.length || "undefined" == typeof console ? this.each(function() {
            var i = new o(t(this), e);
            t(this).data(s) || t(this).data(s, i)
        }) : (console.log("\u300c" + s + "\u300d The elements[" + this.selector + "] you passed is empty."), this)
    }
}(jQuery, window, document);
/*!Name: ETooltips.js
 * Date: 2021-2-25 18:16:25 */
!function(t, i, s) {
    "use strict";
    var e = "ETooltips",
        o = {
            event: "mouseover",
            pos: "right",
            autoHide: null,
            delay: 100,
            close: !1,
            width: null,
            content: null,
            id: "ETooltips-{uid}",
            x: 0,
            y: 0,
            zIndex: null,
            disabledAttr: "data-disabled",
            defaultTitleAttr: "title",
            rmTitle: !0,
            template: '        <div class="ETooltips ETooltips-{pos}">            <div class="arrow"></div>            <div class="close" data-tooltips="close" style="display:none;">&times;</div>            <div class="content" data-tooltips="content">{content}</div>        </div>',
            onOpen: function() {},
            selector: {
                trigger: '[data-role="tooltips"]',
                content: '[data-tooltips="content"]',
                close: '[data-tooltips="close"]'
            }
        };
    function n(i, s) {
        this.$el = i, this.settings = t.extend(!0, {}, o, s), this._defaults = o, this._name = e, this._version = "@VERSION", this._uid = this.$el.data("Eguid"), this.init()
    }
    n.prototype = {
        init: function() {
            this.timer = null, this.insertTooltips(), this.bindEvent()
        },
        bindEvent: function() {
            var i = this,
                e = t(s),
                o = ["mouseenter", this._name].join("."),
                n = ["mouseleave", this._name].join(".");
            this.$el.unbind(o).bind(o, t.proxy(this.showTips, this)), this.$el.unbind(n).bind(n, t.proxy(this.hideTips, this)), this.settings.autoHide && (this.$tooltips.unbind(o).bind(o, t.proxy(this.stopTimeout, this)), this.$tooltips.unbind(n).bind(n, t.proxy(this.hideTips, this)));
            var l = ["click", this._name, this._uid].join(".");
            e.undelegate(l).delegate(this.settings.selector.close, l, function() {
                i.$tooltips.hide()
            })
        },
        showTips: function() {
            this.$el.attr(this.settings.disabledAttr) || (this.calPos(), this.$tooltips.show(), this.settings.onOpen.call(this))
        },
        hideTips: function() {
            var t = this;
            this.stopTimeout(), this.timer = setTimeout(function() {
                t.$tooltips.hide()
            }, this.settings.delay)
        },
        stopTimeout: function() {
            clearTimeout(this.timer)
        },
        calPos: function() {
            var s = this.$el.offset().top,
                e = this.$el.offset().left,
                o = this.$el.outerWidth(),
                n = this.$el.outerHeight(),
                l = t(i).width(),
                h = this.settings,
                d = 0;
            switch (h.pos) {
            case "top":
                s = s + h.y - this.height - 5, e += h.x;
                break;
            case "right":
                s += h.y, e = e + h.x + o + 5;
                break;
            case "bottom":
                s = s + h.y + n + 5, e += h.x;
                break;
            case "left":
                s += h.y, e = e + h.x - this.width - 5;
                break;
            default:
                throw new Error("[Pos]ition not given.")
            }
            d = e + h.width - l, d > 0 && (e -= .8 * h.width), this.$tooltips.toggleClass("ETooltips-opposite", d > 0), this.$tooltips.css({
                top: s,
                left: e
            })
        },
        insertTooltips: function() {
            var i = this.settings,
                s = this.settings.id.replace("{uid}", this._uid);
            if (t("#" + s).length)
                return !1;
            var e = i.content || this.$el.attr(i.defaultTitleAttr) || "[error] title or content not given.",
                o = i.template.replace("{pos}", i.pos).replace("{content}", e);
            this.$tooltips = t(o), this.$tooltips.attr("id", s), t("body").append(this.$tooltips), i.close && this.$tooltips.find(i.selector.close).show(), i.rmTitle && this.$el.removeAttr("title");
            var n = {};
            i.width && (n.width = i.width), i.zIndex && (n["z-index"] = i.zIndex), this.$tooltips.css(n), this.width = this.$tooltips.outerWidth(), this.height = this.$tooltips.outerHeight()
        },
        setContent: function(t) {
            this.$tooltips.find(this.settings.selector.content).html(t)
        }
    }, t.fn[e + "_guid"] = 0, t.fn[e] = function(i) {
        return this.length || "undefined" == typeof console ? this.each(function() {
            t(this).data("Eguid", t.fn[e + "_guid"]++);
            var s = new n(t(this), i);
            t(this).data(e) || t(this).data(e, s)
        }) : (console.log("\u300c" + e + "\u300d The elements[" + this.selector + "] you passed is empty."), this)
    }
}(jQuery, window, document);
/*!Name: EDropdown.js
 * Date: 2021-2-25 18:16:25 */
!function(t, e, s) {
    "use strict";
    var i = "EDropdown",
        n = function() {},
        o = {
            event: "mouseenter",
            trigger: null,
            current: "hover",
            autoClose: !1,
            delay: 100,
            close: "[data-close]",
            disable: "[data-disable]",
            head: '[data-drop="head"]',
            content: null,
            lazyload: null,
            onOpen: n,
            onClose: n,
            onTrigger: n
        };
    function h(e, s) {
        this.$el = e, this.settings = t.extend({}, o, s), this._defaults = o, this._name = i, this._version = "@VERSION", this.init()
    }
    h.prototype = {
        init: function() {
            this.$el.attr("data-role", "drop"), this.isMouseEvt = /mouse/.test(this.settings.event), this.timer = null, this.settings.debug && console.log("click" === this.settings.event && !this.settings.autoClose), "click" !== this.settings.event || this.settings.autoClose || (this.settings.trigger = this.$el.find(this.settings.head)), this.$triggers = this.settings.trigger ? this.$el.find(this.settings.trigger) : this.$el, this.bindEvent()
        },
        bindEvent: function() {
            var e = this;
            if (this.isMouseEvt) {
                if (this.$triggers.each(function() {
                    t(this).unbind("mouseenter").bind("mouseenter", function() {
                        e.handleEvent(t(this), !1)
                    }).bind("mouseleave", function() {
                        e.handleEvent(t(this), !0)
                    })
                }), this.settings.content) {
                    var n = [this.settings.event, i, t.fn[i + "_guid"]].join(".");
                    t(s).undelegate(n).delegate(this.settings.content, n, function() {
                        clearTimeout(e.timer)
                    }), t(s).undelegate("mouseleave").delegate(this.settings.content, "mouseleave", function() {
                        e.handleEvent(t(this), t(this).data("open"))
                    })
                }
            } else
                this.$triggers.unbind("click").bind("click", function() {
                    var s = t(this),
                        i = s.attr("data-role") ? s : s.parents('[data-role="drop"]').eq(0);
                    e.trigger(i, !!i.data("open"))
                }), this.$el.delegate(this.settings.close, "click", function() {
                    e.close()
                })
        },
        handleEvent: function(e, s) {
            if (e.attr("data-disable"))
                return !1;
            this.isMouseEvt || (this.settings.delay = 0), this.settings.content && (1 === t(this.settings.content).length && 1 === this.$el.length || console.log("\u300c" + i + "\u300d Content & jQuery element should be juse select only one element.")), this.isOpen = !s, this.delay(e, s)
        },
        delay: function(t, e) {
            var s = this;
            clearTimeout(this.timer), this.timer = setTimeout(function() {
                s.trigger(t, e)
            }, this.settings.delay)
        },
        trigger: function(t, e) {
            this.isOpen = e, e ? this.close(t) : this.open(t), this.settings.lazyload && this.loadImages(this.$el), this.settings.onTrigger.call(this, t)
        },
        loadImages: function(e) {
            var s = this.settings.lazyload;
            e.find("[" + s + "]").each(function() {
                var e = t(this).attr(s);
                e && t(this).attr("src", e).removeAttr(s)
            })
        },
        open: function(e) {
            e = e || this.$el, e.addClass(this.settings.current).data("open", !0), this.settings.content && t(this.settings.content).show(), this.settings.onOpen.call(this, e)
        },
        close: function(e) {
            e = e || this.$el, e.removeClass(this.settings.current).removeData("open"), this.settings.content && t(this.settings.content).hide(), this.settings.onClose.call(this, e)
        }
    }, t.fn[i + "_guid"] = 0, t.fn[i] = function(e) {
        return this.length || "undefined" == typeof console ? this.each(function() {
            t(this).data("Eguid", t.fn[i + "_guid"]++);
            var s = new h(t(this), e);
            t(this).data(i) || t(this).data(i, s)
        }) : (console.log("\u300c" + i + "\u300d The elements[" + this.selector + "] you passed is empty."), this)
    }
}(jQuery, window, document);
/*!Name: ELazyload.js
 * Date: 2021-2-25 18:16:25 */
define("MOD_ROOT/ELazyload/ELazyload", function(require, exports, module) {
    "use strict";
    var t = "ELazyload",
        e = function() {},
        s = {
            delay: 100,
            type: "img",
            source: "data-src",
            removeSource: !0,
            threshold: 100,
            loadingClass: "ELazy-loading",
            errorClass: "ELazy-error",
            debug: !1,
            placeholder: ["//misc.360buyimg.com/lib/img/e/blank.gif", "//misc.360buyimg.com/lib/img/e/blank.gif", "data:image/gif;base64,R0lGODlhAQABAJEAAAAAAP///////wAAACH5BAEHAAIALAAAAAABAAEAAAICVAEAOw=="],
            onAppear: e,
            onReady: e,
            onComplete: e,
            onError: e,
            onLoad: e
        };
    function i(e, i) {
        this.$el = e, this.settings = $.extend({}, s, i), this._defaults = s, this._name = t, this._version = "@VERSION", this._guid = e.data("Eguid"), this.init()
    }
    i.prototype = {
        init: function() {
            "img" === this.settings.type ? this.$targets = this.$el.eq(0).is("img") ? this.$el : this.$el.find("[" + this.settings.source + "]") : this.$targets = this.$el, this._eventString = "scroll.lazyload." + this._guid + " resize.lazyload." + this._guid, this.$w = $(window), this.total = this.$targets.length, this.timer = null, this.isCheckable = !0, this.loaded = [], this.bindEvent(), this.supportRect = this.supportClientRect(), this.check(this.$targets), this.settings.onReady.call(this)
        },
        supportDataURI: function(t) {
            if (this.isSupportDataURI)
                return t(this.isSupportDataURI);
            var e = new Image;
            e.onload = e.onerror = function() {
                var e = 1 === this.width && 1 === this.height ? 1 : 0;
                this.isSupportDataURI = e, t(e)
            }, e.src = this.settings.placeholder[1]
        },
        bindEvent: function(t) {
            var e = this;
            t && "img" === this.settings.type ? (t.get(0).onload = function() {
                e.onLoad(t)
            }, t.get(0).onerror = function() {
                t.removeClass(e.settings.loadingClass).addClass(e.settings.errorClass), t.data("loaded", !1), e.supportDataURI(function(s) {
                    var i = e.settings.placeholder[s];
                    t.attr("src", i), e.placeholder = i
                }), e.settings.onError.call(e, t)
            }) : this.$w.unbind(this._eventString).bind(this._eventString, function() {
                e.handleCheck(e.$targets)
            })
        },
        onLoad: function(t) {
            var e = t.attr("src");
            e !== this.settings.placeholder[0] && e !== this.settings.placeholder[1] && (t.removeClass(this.settings.loadingClass), t.data("loaded", !0), this.loaded.push(1), this.settings.onLoad.call(this, t))
        },
        handleCheck: function(t) {
            var e = this;
            this.isCheckable && (this.isCheckable = !1, this.timer = setTimeout(function() {
                e.check(t), e.isCheckable = !0
            }, this.settings.delay))
        },
        check: function(t) {
            var e = this,
                s = $();
            function i(t) {
                t.data("loaded", !0), "img" === e.settings.type ? (t.attr("src", t.attr(e.settings.source)), e.settings.removeSource && t.removeAttr(e.settings.source)) : t.removeClass(e.settings.loadingClass), e.settings.onAppear.call(e, t)
            }
            t.each(function() {
                var t = $(this);
                t.data("loaded") || (t.addClass(e.settings.loadingClass), t.data("loaded", !!t.attr("src")), e.insertHolder(t), e.bindEvent(t));
                var n = e.$holder || t;
                e.inWindow(n) ? i(t) : s = s.add(t), e.settings.debug && (t.next().is($(".img-status")) ? t.next().html("Loaded: " + t.data("loaded")) : t.after('<div class="img-status">Loaded: ' + t.data("loaded") + "</div>"))
            }), this.$targets = s, this.placeholderAdded || "img" !== e.settings.type || this.setDefaultPlaceholder(s), this.settings.debug && console.log("Total:" + this.total + "\u3000 current:" + t.length + "\u3000 Left: " + s.length), this.total === this.loaded.length && (this.$w.unbind(this._eventString), this.settings.onComplete.call(this), this.settings.debug && console.log("All done."))
        },
        setDefaultPlaceholder: function(t) {
            var e = this;
            this.supportDataURI(function(s) {
                for (var i = e.settings.placeholder[s], n = 0, a = t.length; n < a;)
                    t.get(n).setAttribute("src", i), n++;
                e.placeholderAdded = !0
            })
        },
        insertHolder: function(t) {
            "img" !== this.settings.type && (t.is(":visible") || t.prev().is(".Elazy-holder") || (t.before('<ins class="ELazy-holder ELazy-holder' + this._guid + '"></ins>'), this.$holder = t.prev(".ELazy-holder")))
        },
        supportClientRect: function() {
            if (void 0 !== this.isSupportClientRect)
                return this.isSupportClientRect;
            var t = document.createElement("div"),
                e = "getBoundingClientRect" in t;
            return t = null, this.isSupportClientRect = e, e
        },
        inWindow: function(t) {
            var e = this.$w.height(),
                s = $("body").scrollTop() || $("html").scrollTop();
            if (this.supportRect) {
                var i = t.get(0).getBoundingClientRect(),
                    n = i.top,
                    a = i.left,
                    o = i.top + i.height;
                return n >= 0 && a >= 0 && n <= e + this.settings.threshold || n < 0 || o >= 0 && a >= 0 && o <= e
            }
            var n = t.offset().top,
                l = t.height(),
                o = n + l;
            return n < e + s + this.settings.threshold && n > s || o < e + s && o > s
        }
    }, $.fn[t + "_guid"] = 0, $.fn[t] = function(e) {
        return this.length || "undefined" == typeof console ? this.each(function() {
            $(this).data("Eguid", $.fn[t + "_guid"]++);
            var s = new i($(this), e),
                n = $(this).data(t);
            n ? n.push(s) : $(this).data(t, [s])
        }) : (console.log("\u300c" + t + "\u300d The elements[" + this.selector + "] you passed is empty."), this)
    }
});
/*!Name: core.js
 * Date: 2021-2-25 18:16:26 */
define("MOD_ROOT/common/core", function(require, exports, module) {
    var r = {},
        t = pageConfig.product;
    r.sku = t.skuid, r.cat = t.cat, r.url = t.href, r.src = t.src, r.pType = t.pType, r.name = t.name, r.mdPerfix = 1 == t.pType ? "CR" : "GR", r.mbPerfix = 1 == t.pType ? "3C" : "GM", r.mp = t.mp, r.jp = t.jp, r.orginSku = pageConfig.product.orginSkuid || r.sku, r.wideVersion = pageConfig.wideVersion && pageConfig.compatible, r.itemDisabled = t.isOver, r.isPOPSku = function(r) {
        return r >= 1e9 && r <= 1999999999 || r >= 10000000001 && r <= 99999999999
    };
    var e = r.sku;
    r.isPop = r.isPOPSku(e), r.isFCS = t.fcs, r.isJd = !!r.isFCS || !r.isPop, r.isSelf = r.isJd, r.is3C = 652 == r.cat[0] || 670 == r.cat[0] || 737 == r.cat[0] || 9987 == r.cat[0], r.isCellphone = 655 == r.cat[2] || 6881 == r.cat[2] || 6882 == r.cat[2], r.isCompleteMachine = 670 == r.cat[0], r.isVideo = 652 == r.cat[0], r.isPopBook = r.isPop && 1713 == r.cat[0], r.isSelfBook = e >= 1e7 && e <= 19999999 || e >= 110000000001 && e <= 139999999999, r.isBook = r.isPopBook || r.isSelfBook, r.isPopMvd = r.isPop && (4051 == r.cat[0] || 4052 == r.cat[0] || 4053 == r.cat[0]), r.isSelfMvd = e >= 2e7 && e <= 29999999 || e >= 140000000001 && e <= 149999999999, r.isMvd = r.isPopMvd || r.isSelfMvd, r.disableAddToCart = $("#InitCartUrl").hasClass("btn-disable"), r.isArray = function(r) {
        return "[object Array]" === Object.prototype.toString.call(r)
    }, r.isObject = function(r) {
        return "[object Object]" === Object.prototype.toString.call(r)
    }, r.isEmptyObject = function(r) {
        var t;
        for (t in r)
            return !1;
        return !0
    }, r.isNothing = function(t) {
        return r.isArray(t) ? t.length < 1 : !t
    }, r.getRandomArray = function(r, t) {
        return t = t || 1, r.sort(function() {
            return Math.random() - .5
        }), r.slice(0, t)
    }, r.toFixed = function(r, t) {
        var e = Math.pow(10, t + 1),
            n = Math.round(r * e).toString(),
            i = n.length - 1;
        return n = n.substr(0, i), [n.substr(0, i - t), n.substr(-t)].join(".")
    }, r.originBuyUrl = $("#InitCartUrl").attr("href"), r.formatPrice = function(r) {
        var t = parseFloat(r);
        return isNaN(t) || t <= 0 ? "\u6682\u65e0\u62a5\u4ef7" : t.toFixed(2)
    }, r.discount = function(r, t, e) {
        if (e = e || "[{num}\u6298]", void 0 !== r && void 0 !== t) {
            if (r = parseFloat(r), t = parseFloat(t), !r || !t)
                return "";
            var n = Math.ceil((r / t * 100).toFixed(1));
            return n ? e.replace("{num}", parseFloat(n / 10)) : ""
        }
    }, r.triggerLazyImg = function(r, t) {
        r.find("img").each(function() {
            var r = $(this),
                e = r.attr(t);
            r.attr("src") || (r.attr("src", e), r.removeAttr(t), r.removeClass("err-product loading-style2"))
        })
    }, r.getNewUserLevel = function(r) {
        switch (r) {
        case 50:
            return "\u6ce8\u518c\u7528\u6237";
        case 56:
            return "\u94dc\u724c\u7528\u6237";
        case 59:
            return "\u6ce8\u518c\u7528\u6237";
        case 60:
        case 61:
            return "\u94f6\u724c\u7528\u6237";
        case 62:
            return "\u91d1\u724c\u7528\u6237";
        case 63:
            return "\u94bb\u77f3\u7528\u6237";
        case 64:
            return "\u7ecf\u9500\u5546";
        case 110:
            return "VIP";
        case 66:
            return "\u4eac\u4e1c\u5458\u5de5";
        case -1:
            return "\u672a\u6ce8\u518c";
        case 88:
            return "\u94bb\u77f3\u7528\u6237";
        case 90:
            return "\u4f01\u4e1a\u7528\u6237";
        case 103:
        case 104:
        case 105:
            return "\u94bb\u77f3\u7528\u6237"
        }
        return "\u672a\u77e5"
    }, r.sendRequest = function(r) {
        var t = new Image;
        t.setAttribute("src", r), t = null
    }, r.clsLog = function(r, t, e, n, i) {
        var o = new Image,
            s = "//mercury.jd.com/log.gif?t=rec." + r + "&v=" + encodeURIComponent("src=rec$action=" + t + "$enb=1$sku=" + e + "$csku=" + n + "$index=" + (i || 0) + "$expid=0") + "&m=UA-J2011-1&ref=" + encodeURIComponent(document.referrer) + "&random=" + Math.random();
        o.setAttribute("src", s)
    }, r.onAttr = function(r, e, n) {
        var i = t.specialAttrs,
            o = "string" == typeof r,
            s = i.length;
        if (e = e || function() {}, n = n || function() {}, i && i.length) {
            for (var a = 0; a < s; a++)
                if (o) {
                    if (i[a] === r)
                        return e(i[a]), !0
                } else if (r.test(i[a]))
                    return e(i[a]), !0;
            return n(), !1
        }
        return n(), !1
    }, r.specialAttrs = function() {
        for (var r = window.pageConfig || {}, t = r.product && r.product.specialAttrs || [], e = {}, n = 0, i = t.length; n < i && "string" == typeof t[n]; n++) {
            var o = t[n].split("-");
            e[o[0]] = void 0 != o[1] ? o[1] : "1"
        }
        return e
    }(), r.calPrice = function(r) {
        for (var t = (r.sku, r.input, r.$el.find('input[type="checkbox"]')), e = t.length, n = (r.$el, r.targetJP), i = r.targetMP, o = 0, s = 0, a = 0, c = [], u = r.callback || function() {}, l = 0; l < e; l++) {
            var f = t.eq(l),
                p = f.attr("data-sku"),
                d = f.attr("data-jp"),
                h = f.attr("data-mp");
            if (d = parseFloat(d), h = parseFloat(h), f.attr("checked")) {
                if (isNaN(d))
                    return;
                if (o += d, isNaN(h))
                    return;
                s += h, c.push(p), a++
            }
        }
        n.html("\uffe5" + (o > 0 ? o.toFixed(2) : "\u6682\u65e0\u62a5\u4ef7")), i.html("\uffe5" + (s > 0 ? s.toFixed(2) : "\u6682\u65e0\u62a5\u4ef7")), u(a, c)
    }, r.setScroll = function(r) {
        ("string" == typeof r ? $(r) : $("body")).find(".p-scroll").each(function() {
            var r = $(this).find(".p-scroll-wrap"),
                t = $(this).find(".p-scroll-next"),
                e = $(this).find(".p-scroll-prev");
            r.find("li").length > 4 && $.fn.imgScroll && (r.imgScroll({
                showControl: !0,
                width: 30,
                height: 30,
                visible: 4,
                step: 1,
                prev: e,
                next: t
            }), t.add(e).show())
        })
    }, r.thumbnailSwitch = function(r, t, e, n, i) {
        var o = r.find("img"),
            s = i || "mouseover";
        o.bind(s, function() {
            var n = $(this),
                i = n.attr("src"),
                o = i.replace(/\/n\d\//, e);
            t.attr("src", o), r.removeClass("curr"), n.parent().addClass("curr")
        })
    }, r.serializeUrl = function(r) {
        var t,
            e,
            n,
            i,
            o = r.indexOf("?"),
            s = r.substr(0, o),
            a = r.substr(o + 1),
            c = a.split("&"),
            u = c.length,
            l = {};
        for (t = 0; t < u; t++)
            e = c[t].split("="), n = e[0], i = e[1], l[n] = i;
        return {
            url: s,
            param: l
        }
    }, r.collectSkus = function(r, t, e) {
        var n = [];
        return t = t || ".p-price strong", e = e || "J-p-", r.find(t).each(function() {
            var r = $(this).attr("class");
            r && n.push(r.replace(e, ""))
        }), n
    }, r.getNum = function() {
        return Number($("#buy-num").val())
    }, r.Countdown = {
        init: function(r, t) {
            this.seconds = r, this.timer = null, this.callback = t || function() {}, this.loopCount()
        },
        loopCount: function() {
            var r = this,
                t = r.formatSeconds(r.seconds);
            r.callback(t), this.timer = setInterval(function() {
                var t = r.formatSeconds(r.seconds);
                0 === t.d && 0 === t.h && 0 === t.m && 0 === t.s ? clearInterval(r.timer) : r.seconds--, r.callback(t)
            }, 1e3)
        },
        formatSeconds: function(r) {
            var t = Math.floor(r / 86400),
                e = Math.floor(r % 86400 / 3600),
                n = Math.floor(r % 86400 % 3600 / 60),
                r = r % 86400 % 3600 % 60;
            return {
                d: t,
                h: e,
                m: n,
                s: r
            }
        }
    };
    function n(r, t) {
        var e = {}.toString;
        return e.call(r) === e.call(t)
    }
    function i(r) {
        if ("string" == typeof r) {
            var t = r,
                e = /(\w+):(?:\/\/)?(?:([^:]+)(?::(.+))?@)?([^\/:?#]+)(?::(\d*))?([^?#]*)([^#]*)(.*)/,
                n = /(.+)\[(.+)?\]/;
            if (e.test(t)) {
                var i = {},
                    o = e.exec(t);
                i.protocol = o[1] || "", i.username = o[2] || "", i.password = o[3] || "", i.host = o[4] || "", i.port = o[5] || "", i.path = o[6] || "", i.filename = i.path.split("/").slice(-1).join(""), i.fragment = o[8] || "";
                var s = o[7] ? o[7].slice(1).split("&") : [],
                    a = s.length;
                if (a > 0) {
                    i.query = {};
                    for (var c = 0; c < a; c += 1) {
                        var u = s[c].split("="),
                            l = u[0],
                            f = u[1];
                        if (n.test(l)) {
                            var p = n.exec(l),
                                d = p[1],
                                h = p[2];
                            if (h) {
                                if (i.query[d] || (i.query[d] = {}), {}.toString() !== {}.toString.call(i.query[d]))
                                    throw "URL's params part has something wrong.";
                                i.query[d][h] = f
                            } else {
                                if (i.query[d] || (i.query[d] = []), {}.toString.call([]) !== {}.toString.call(i.query[d]))
                                    throw "URL's params part has something wrong.";
                                i.query[d].push(f)
                            }
                        } else
                            i.query[l] = f
                    }
                } else
                    i.query = {};
                return i
            }
            throw "The URL is illegal."
        }
        throw "Param's data type is String."
    }
    function o(r, t) {
        if (n({}, r)) {
            var e = [];
            for (var i in r) {
                var s = r[i];
                if (n([], s))
                    for (var a = 0, c = s.length; a < c; a += 1)
                        if (n([], s[a]) || n({}, s[a])) {
                            var u = {};
                            u[i + "[" + a + "]"] = s[a], e.push(o(u, !0))
                        } else
                            e.push(i + "[]=" + s[a]);
                else if (n({}, s))
                    for (var l in s)
                        if (n([], s[l]) || n({}, s[l])) {
                            var u = {};
                            u[i + "[" + l + "]"] = s[l], e.push(o(u, !0))
                        } else
                            e.push(i + "[" + l + "]=" + s[l]);
                else
                    t ? e.push("[" + i + "]=" + s) : e.push(i + "=" + s)
            }
            return e.join("&")
        }
        return ""
    }
    function s() {
        var r,
            t,
            e,
            i,
            o,
            a,
            c = arguments[0] || {},
            u = 1,
            l = arguments.length,
            f = !1;
        for ("boolean" == typeof c && (f = c, c = arguments[u] || {}, u++), "object" != typeof c && "function" != typeof c && (c = {}); u < l; u++)
            if (null != (r = arguments[u]))
                for (t in r)
                    e = c[t], i = r[t], c !== i && (f && i && (n({}, i) || (o = n([], i))) ? (o ? (o = !1, a = e && n([], e) ? e : []) : a = e && n({}, e) ? e : {}, c[t] = s(f, a, i)) : void 0 !== i && (c[t] = i));
        return c
    }
    function a(r, t, e) {
        var a = i(r);
        if (n({}, a) && n({}, t)) {
            if (r = "", a = s(!0, a, t), /mailto|data/.test(a.protocol) ? r += a.protocol + ":" : r += a.protocol + "://", a.username.length > 0 && (r += a.username), a.password.length > 0 && (r += ":" + a.password), a.username.length > 0 && (r += "@"), r += a.host, a.port.length > 0 && (r += ":" + a.port), r += a.path, e)
                for (var c in a.query)
                    a.query.hasOwnProperty(c) && (a.query[c] || delete a.query[c]);
            var u = o(a.query);
            u.length > 0 && (r += "?" + u), a.fragment && (r += a.fragment)
        }
        return r
    }
    function c(r, t) {
        var e,
            n,
            i;
        e = function() {
            e.uber && e.uber.hasOwnProperty("__construct") && e.uber.__construct.apply(this, arguments), e.prototype.hasOwnProperty("__construct") && e.prototype.__construct.apply(this, arguments)
        }, r = r || Object, n = function() {}, n.prototype = r.prototype, e.prototype = new n, e.uber = r.Prototype, e.prototype.constructor = e;
        for (i in t)
            t.hasOwnProperty(i) && (e.prototype[i] = t[i]);
        return e
    }
    r.getHrefWithGift = function(t, e) {
        var n = "";
        if (!e)
            return t;
        if (/gids=/.test(t)) {
            var i = r.serializeUrl(t).param.gids;
            n = t.replace("gids=" + i, "gids=" + e.join(","))
        } else
            n = -1 !== t.indexOf("?") ? t + "&gids=" + e.join(",") : t + "?gids=" + e.join(",");
        return n
    }, r.getHrefWithYB = function(t, e) {
        var n = "";
        if (!e)
            return t;
        if (/ybId=/.test(t)) {
            var i = r.serializeUrl(t).param.ybId;
            n = t.replace("ybId=" + i, "ybId=" + e.join(","))
        } else
            n = -1 !== t.indexOf("?") ? t + "&ybId=" + e.join(",") : t + "?ybId=" + e.join(",");
        return n
    }, r.getHrefWithJDS = function(t, e) {
        var n = "";
        if (!e)
            return t;
        if (/jdhsid=/.test(t)) {
            var i = r.serializeUrl(t).param.jdhsid;
            n = t.replace("jdhsid=" + i, "jdhsid=" + e.join(","))
        } else
            n = -1 !== t.indexOf("?") ? t + "&jdhsid=" + e.join(",") : t + "?jdhsid=" + e.join(",");
        return n
    }, r.getHrefWithJDSF = function(t, e) {
        var n = "";
        if (!e)
            return t;
        if (/fsIds=/.test(t)) {
            var i = r.serializeUrl(t).param.fsIds;
            n = t.replace("fsIds=" + i, "fsIds=" + e.join(","))
        } else
            n = -1 !== t.indexOf("?") ? t + "&fsIds=" + e.join(",") : t + "?fsIds=" + e.join(",");
        return n
    }, r.log = function(r, t, e) {
        r = r || "log", "undefined" != typeof errortracker && errortracker[r]({
            filename: t,
            message: e
        })
    }, r.is = n, r.serializeURL = i, r.buildURLQueryString = o, r.extend = s, r.modifyURL = a, r.Klass = c, module.exports = r
});
/*!Name: event.js
 * Date: 2021-2-25 18:16:33 */
define("MOD_ROOT/common/tools/event", function(require, exports, module) {
    function t() {
        this._listeners = {}
    }
    t.prototype = {
        constructor: t,
        addListener: function(t, e) {
            void 0 === this._listeners[t] && (this._listeners[t] = []), this._listeners[t].push(e)
        },
        fire: function(t) {
            if ("string" == typeof t && (t = {
                type: t
            }), t.target || (t.target = this), !t.type)
                throw new Error("Event object missing 'type' property.");
            if (this._listeners[t.type] instanceof Array)
                for (var e = this._listeners[t.type], i = 0, n = e.length; i < n; i++)
                    e[i].call(this, t)
        },
        removeListener: function(t, e) {
            if (this._listeners[t] instanceof Array)
                for (var i = this._listeners[t], n = 0, s = i.length; n < s; n++)
                    if (i[n] === e) {
                        i.splice(n, 1);
                        break
                    }
        }
    }, module.exports.Event = window.pageConfig.eventTarget = new t
});
/*!Name: tools.js
 * Date: 2021-2-25 18:16:33 */
define("MOD_ROOT/common/tools/tools", function(require, exports, module) {
    var e = require("PUBLIC_ROOT/conf"),
        t = require("MOD_ROOT/common/core"),
        i = function() {
            var e = readCookie("ipLoc-djd"),
                t = {
                    areaIds: [1, 72, 2799, 0],
                    commonAreaId: null
                };
            if (e) {
                var i = e.indexOf(".");
                i > -1 && (t.commonAreaId = Number(e.substr(i + 1)), e = e.substring(0, i)), t.areaIds = e.split("-");
                for (var r = 0; r < t.areaIds.length; r++)
                    t.areaIds[r] = Number(t.areaIds[r])
            }
            return t
        },
        r = function(i) {
            var r = "//p.3.cn/prices/mgets",
                n = readCookie("ipLoc-djd"),
                o = i.skus || [],
                a = i.loc || n,
                s = i.$el || $("body"),
                c = i.type || 1,
                d = i.selector || ".J-p-",
                u = i.text || "\uffe5{NUM}",
                l = i.pdbp || 0,
                f = i.debug || !1,
                p = i.callback || function() {},
                h = i.onReady || function() {},
                m = i.priceData || [];
            if (!function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }(o))
                throw new Error("Please give skus param with Array type.");
            if (o.length < 1)
                return !1;
            a = n ? a.replace(/-/g, "_") : 1, f && console.info(r + $.param({
                type: c,
                area: a,
                skuIds: "J_" + o.join(",J_")
            }));
            if (m.length > 0)
                return v(m), !1;
            function v(i) {
                var r,
                    n;
                if (f && console.info(i), i && i.length)
                    for (n = i.length, r = 0; r < n; r++) {
                        if (!i[r].id)
                            return !1;
                        var o = i[r].id.replace("J_", ""),
                            a = parseFloat(i[r].p);
                        parseFloat(i[r].m);
                        if (a > 0)
                            s.find(d + o).html(u.replace("{NUM}", i[r].p));
                        else {
                            var c = "\u6682\u65e0\u62a5\u4ef7";
                            e.get("BASE.PRICE.5G") && [0, 1, 1][t.specialAttrs.tsop] && (c = "\u514d\u8d39\u529e\u7406"), s.find(d + o).html(c)
                        }
                        "function" == typeof p && p(o, i[r])
                    }
                h(i)
            }
            $.ajax({
                url: r,
                data: {
                    type: 1,
                    area: a,
                    pdtk: readCookie("pdtk") || "",
                    pduid: function() {
                        var e = readCookie("__jda"),
                            t = "";
                        return e && e.indexOf(".") > -1 && (t = e.split(".")[1]), t
                    }(),
                    pdpin: readCookie("pin") || "",
                    pin: decodeURIComponent(readCookie("pin")) || "",
                    pdbp: l,
                    skuIds: "J_" + o.join(",J_"),
                    ext: "11100000",
                    source: "item-pc"
                },
                cache: !0,
                dataType: "jsonp",
                success: function(e) {
                    v(e)
                }
            })
        },
        n = function(e) {
            var t = e.loc || readCookie("ipLoc-djd") || "1_0_0",
                i = e.skus || [],
                r = e.$el || $("body"),
                n = (e.$target, e.selector || ".J-ad-"),
                o = e.debug || !1,
                a = e.callback || function() {};
            $.ajax({
                url: "//ad.3.cn/ads/mgets",
                data: {
                    skuids: "AD_" + i.join(",AD_"),
                    areaCode: t
                },
                dataType: "jsonp",
                scriptCharset: "utf-8",
                success: function(e) {
                    var t,
                        i,
                        s,
                        c = 0;
                    if (o && console.log(e), e && e.length > 0)
                        for (t = e.length, c; c < t; c++)
                            i = e[c].ad, s = e[c].id.replace("AD_", ""), r.find(n + s).html(i), a(s, e[c])
                }
            })
        },
        o = function(e) {
            var t = e.skus || [],
                i = e.$el || $("body"),
                r = e.selector || ".J-comm-",
                n = e.text || "(\u5df2\u6709{NUM}\u4eba\u8bc4\u4ef7)",
                o = e.debug || !1,
                a = e.callback || function() {},
                s = e.onlyData || !1;
            if (!$.isArray(t))
                throw new Error("Please give skus param with Array type.");
            $.ajax({
                url: "//club.jd.com/comment/productCommentSummaries.action?referenceIds=" + t,
                dataType: "jsonp",
                success: function(e) {
                    var t,
                        c;
                    if (e && e.CommentsCount.length) {
                        t = e.CommentsCount.length;
                        for (var d = 0; d < t; d++)
                            c = i.find(r + e.CommentsCount[d].SkuId), s || (c.find(".star").removeClass("sa5").addClass("sa" + e.CommentsCount[d].AverageScore), c.html(n.replace("{NUM}", e.CommentsCount[d].CommentCountStr))), o && console.log(c), a && a(e.CommentsCount[d].SkuId, e.CommentsCount[d])
                    }
                }
            })
        },
        a = function(e, t) {
            var i = t || "data-src",
                r = e.find("img[" + i + "]");
            r.length && r.each(function(e) {
                $(this).attr("src", $(this).attr(i)).removeAttr(i)
            })
        },
        s = function(e, t) {
            for (var i = e.length / t, r = [], n = 0; n < i; n++)
                r.push({
                    tabs: [],
                    increment: null,
                    count: t,
                    skuids: []
                });
            for (var o = 0, a = 0; a < e.length; a++)
                a % t == 0 && o++, r[o - 1].tabs.push(e[a]), r[o - 1].increment = o, e[a].wid && r[o - 1].skuids.push(e[a].wid);
            return r
        },
        c = function() {
            var e = readCookie("ipLoc-djd");
            return e ? e.split("-") : [1, 72, 2799, 0]
        },
        d = function() {
            var e = readCookie("__jda");
            return e ? "-" == e.split(".")[1] ? -1 : e.split(".")[1] : -1
        },
        u = function(e) {
            return e = e || function() {}, $.ajax({
                url: "//passport.jd.com/loginservice.aspx?method=Login",
                dataType: "jsonp",
                success: function(t) {
                    t.Identity && e(t.Identity)
                }
            })
        };
    function l(e, t, i) {
        this.milliseconds = "number" == typeof e ? e : 0, this.callback = "function" == typeof t ? t : function() {}, "number" == typeof inverval ? this.interval = i : this.interval = 1e3, this.start()
    }
    l.prototype = {
        constructor: l,
        start: function() {
            var e = this,
                t = 0,
                i = function() {
                    t++;
                    var r = +new Date,
                        n = r - (e.stime + t * e.interval);
                    if (n > 1e4) {
                        var o = Math.floor(n / e.interval);
                        t += o, e.milliseconds -= o * e.interval
                    }
                    var a = e.interval - n;
                    a < 0 && (a = 0), e.callback.call(e, e.format(e.milliseconds / 1e3)), e.milliseconds -= e.interval, e.milliseconds < 0 ? clearTimeout(e.timer) : e.timer = setTimeout(i, a)
                };
            return this.milliseconds >= 0 && (this.stime = +new Date, this.timer = setTimeout(i, this.interval)), this
        },
        stop: function() {
            return this.timer && clearTimeout(this.timer), this
        },
        format: function(e) {
            return e = "number" == typeof e && e >= 0 ? e : 0, {
                d: Math.floor(e / 86400),
                h: Math.floor(e % 86400 / 3600),
                m: Math.floor(e % 86400 % 3600 / 60),
                s: Math.floor(e % 86400 % 3600 % 60)
            }
        }
    };
    var f = function(e, t, i) {
            var r = null,
                n = null;
            return function() {
                var o = +new Date;
                n || (n = o), o - n > i ? (e(), n = o) : (clearTimeout(r), r = setTimeout(function() {
                    e()
                }, t))
            }
        },
        p = function(e, t) {
            return (new Array(e).join("0") + t).slice(-e)
        },
        h = function(e, t, i, r) {
            r = r || "\\d*";
            var n = new RegExp(t + "=" + r, "gi"),
                o = "";
            if (!i)
                return e;
            if (e.indexOf(t + "=") > -1)
                o = e.replace(n, t + "=" + i);
            else {
                o = e + (e.indexOf("?") < 0 ? "?" : "&") + t + "=" + i
            }
            return o
        },
        m = {
            itemUrl: function(e) {
                return e ? "//item.jd.com/" + e + ".html" : ""
            },
            imgDomain: function(e) {
                var t = [10, 11, 12, 13, 14],
                    i = t[e % 5];
                return e && i ? "//img" + i + ".360buyimg.com/" : ""
            }
        };
    function v(e, t, i) {
        this.mode = "", this.receivers = {}, this.actions = {
            failure: function() {},
            success: function() {}
        }, this.setConditionMode(e), this.addReceiver(t), this.addAction(i)
    }
    v.prototype = {
        constructor: v,
        addReceiver: function(e, t, i, r, n) {
            if ("string" == typeof e) {
                if (this.receivers.hasOwnProperty(e))
                    throw "I had this receiver.";
                this.receivers[e] = {
                    onTrue: t,
                    onFalse: i,
                    signal: !!r,
                    data: n
                }
            } else if ({}.toString() === {}.toString.call(e))
                for (var o in e)
                    if (e.hasOwnProperty(o)) {
                        var a = e[o];
                        if ({}.toString() !== {}.toString.call(a))
                            throw "I need a Map Structure.";
                        this.addReceiver(o, a.onTrue, a.onFalse, !!a.signal, a.data)
                    }
            return this
        },
        addAction: function(e, t) {
            if ("function" == typeof e) {
                if (!this.actions.hasOwnProperty(t))
                    throw "I do't have this status.";
                this.actions[t] = e
            } else if ({}.toString() === {}.toString.call(e))
                for (var i in e)
                    this.addAction(e[i], i);
            return this
        },
        callReceiverAction: function(e) {
            if (!this.receivers.hasOwnProperty(e))
                throw "I do't have this receiver.";
            var t = this.receivers[e],
                i = t.data;
            t.signal ? "function" == typeof t.onTrue && t.onTrue(i) : "function" == typeof t.onFalse && t.onFalse(i)
        },
        callActions: function() {
            var e,
                t = [];
            for (var i in this.receivers)
                this.receivers.hasOwnProperty(i) && t.push(+this.receivers[i].signal);
            "AND" === this.mode ? e = -1 === t.join("").indexOf(0) : "OR" === this.mode && (e = -1 !== t.join("").indexOf(1)), e ? this.actions.success() : this.actions.failure()
        },
        emit: function(e, t, i) {
            if (!this.receivers.hasOwnProperty(e))
                throw "I do't have this receiver";
            this.receivers[e].signal = !!t, this.receivers[e].data = i, this.callReceiverAction(e), this.callActions()
        },
        setConditionMode: function(e) {
            if ("string" != typeof e)
                throw 'I need a string, it only can be "AND" or "OR".';
            if ("AND" === (e = e.toUpperCase()))
                this.mode = "AND";
            else {
                if ("OR" !== e)
                    throw "Invalid string.";
                this.mode = "OR"
            }
        }
    }, v.globalConditionTrigger = new v("OR");
    function g(e, t, r) {
        var n = window && window.pageConfig && window.pageConfig.product || {},
            o = n.specialAttrs || {},
            a = i().areaIds,
            s = {
                skuId: n.skuid || "",
                area: a.join("_"),
                shopId: n.shopId,
                venderId: n.venderId || 0,
                buyNum: $("#buy-num").val() || 1,
                choseSuitSkuIds: n.suitSkuids || "",
                cat: n.cat instanceof Array ? n.cat.join(",") : "",
                extraParam: n.isHeYue ? '{"originid":"1","heYueJi":"1"}' : '{"originid":"1"}',
                fqsp: -1 != $.inArray("fqsp-1", o) && 1 || -1 != $.inArray("fqsp-2", o) && 2 || -1 != $.inArray("fqsp-3", o) && 3 || 0,
                pdpin: readCookie("pin") || "",
                pduid: d(),
                ch: 1,
                isCanUseDQ: -1 != $.inArray("isCanUseDQ-1", o) ? 1 : -1 != $.inArray("isCanUseDQ-0", o) ? 0 : 1,
                isCanUseJQ: -1 != $.inArray("isCanUseJQ-1", o) ? 1 : -1 != $.inArray("isCanUseJQ-0", o) ? 0 : 1,
                platform: 0,
                orgType: 2,
                jdPrice: "",
                appid: 1
            };
        n.locStoreId && (s.storeId = n.locStoreId);
        var c = readCookie("detailedAdd_coord");
        c && (s.coord = c);
        var u = readCookie("detailedAdd");
        u && (s.detailedAdd = u);
        var l = readCookie("detailedAdd_areaid");
        return l && u && (s.area = l.split("-").join("_")), $.ajax({
            url: "//c0.3.cn/stock/v2",
            data: $.extend(s, e),
            dataType: "jsonp",
            scriptCharset: "gb18030",
            success: function() {
                "function" == typeof t && t.apply(null, arguments)
            },
            error: function() {
                "function" == typeof r && r.apply(null, arguments)
            }
        })
    }
    exports.getStockV2 = g, exports.ConditionTrigger = v, exports.commentMeta = o, exports.priceNum = r, exports.adWords = n, exports.triggerLazyImg = a, exports.reBuildJSON = s, exports.getAreaIds = c, exports.getAreaId = i, exports.checkLogin = u, exports.getUUID = d, exports.Countdown = l, exports.throttle = f, exports.prefix = p, exports.addUrlParam = h, exports.modifier = m
});
/*!Name: abtest.js
 * Date: 2021-2-25 18:16:33 */
define("MOD_ROOT/common/tools/abtest", function(require, exports, module) {
    var t = function(t, s, o) {
        return this.id = t, this.percent = s, this.base = o || 1e4, this.tested = !1, this.version = {
            A: 0,
            B: 0,
            N: 0
        }, this.result = {
            A: [],
            B: [],
            N: []
        }, this
    };
    t.prototype = {
        test: function() {
            var t = this;
            window.collectUUUID = function(t) {
                o(t)
            };
            function s() {
                var s = t.version;
                console.log("%c====================\u7ed3\u679c====================", "color:#f00");
                for (var o in s)
                    console.info("| \u7248\u672c" + o + "\u547d\u4e2d\u4e86" + s[o] / 100 + "\t% \u7684uuuid");
                console.log("%c====================\u7ed3\u679c====================", "color:#f00"), t.tested = !0
            }
            function o(o) {
                for (var e = o, i = o.length, n = [], r = 0; r < i; r++)
                    n.push("UUUID\u300c" + e[r] + "\u300d\t\u547d\u4e2d\u4e86 \u7248\u672c\u300c" + t.isHitVersion(e[r]) + "\u300d");
                console.log(n.join("\n")), s()
            }
            $.ajax({
                url: "//nfa.jd.com/loadFa_toJson.js?aid=2_163_4827-2_163_4828",
                dataType: "jsonp",
                cache: !0,
                success: function(t) {}
            })
        },
        isHitVersion: function(t) {
            t = t || this.id;
            var s,
                o = this.base * this.percent;
            return "string" != typeof t && (t += ""), t && t > 0 ? (s = this.getHashProbability(t, this.base), s < o ? (this.version.A++, this.result.A.push(t), "A") : s >= o && s < 2 * o ? (this.version.B++, this.result.B.push(t), "B") : (this.version.N++, this.result.N.push(t), "NONE")) : (this.version.N++, this.result.N.push(t), "NONE")
        },
        switchVersion: function(t) {
            if (!t || !/A|B|N/.test(t))
                return console.warn("Are you kidding me~ Is there a test version called " + t + "?"), !1;
            this.tested || console.warn("Please run test method first.");
            var s = this.result[t],
                o = s[Math.floor(Math.random() * s.length)];
            createCookie("__jda", "122270672." + o + ".043878.1386043878.1386043878.1", 10, "/;domain=jd.com"), console.log(o)
        },
        getHashProbability: function(t, s) {
            return Math.abs(function(t) {
                for (var s = 0, o = 0; o < t.length; o++)
                    s = (s << 5) - s + t.charCodeAt(o), s &= s;
                return s
            }(t)) % s
        }
    }, module.exports = t
});
/*!Name: stock.js
 * Date: 2021-2-25 18:16:25 */
define("MOD_ROOT/address/stock", function(require, exports, module) {
    var e = require("PUBLIC_ROOT/conf"),
        t = require("MOD_ROOT/common/core"),
        i = require("MOD_ROOT/common/tools/tools"),
        o = require("MOD_ROOT/common/tools/abtest"),
        s = require("MOD_ROOT/common/tools/event").Event,
        n = require("MOD_ROOT/buybtn/buybtn").addToCartBtn;
    function a(e, o, s, n) {
        var a = this.cfg = window && window.pageConfig && window.pageConfig.product || {};
        this.params = {}, this.onSuccess = "function" == typeof o ? o : function() {}, this.onError = "function" == typeof s ? s : function() {}, this.onlyData = n || !1;
        var r = this.areas = i.getAreaId().areaIds,
            c = {
                skuId: a.skuid || "",
                area: r.join("_"),
                venderId: a.venderId || 0,
                buyNum: $("#buy-num").val() || 1,
                choseSuitSkuIds: a.suitSkuids || "",
                cat: a.cat instanceof Array ? a.cat.join(",") : "",
                extraParam: a.isHeYue ? '{"originid":"1","heYueJi":"1"}' : '{"originid":"1"}',
                fqsp: t.onAttr("fqsp-1") && 1 || t.onAttr("fqsp-2") && 2 || t.onAttr("fqsp-3") && 3 || 0,
                pdpin: readCookie("pin") || "",
                pduid: i.getUUID(),
                ch: 1
            };
        a.locStoreId && (c.storeId = a.locStoreId);
        var d = readCookie("detailedAdd_coord");
        d && (c.coord = d);
        var p = readCookie("detailedAdd");
        p && (c.detailedAdd = p);
        var l = readCookie("detailedAdd_areaid");
        l && p && (c.area = l.split("-").join("_")), this.params = $.extend(c, e), this.init()
    }
    a.prototype = {
        constructor: a,
        init: function() {
            this.bindEvent(), this.getData()
        },
        getData: function() {
            var t = this;
            return e.get("GLOBAL.isStockV2") ? i.getStockV2().done(function(e) {
                e = e || {}, t.handleData(e.stock)
            }).fail(function(e) {
                t.error(), t.onError.call(t, e)
            }) : $.ajax({
                url: "//item-soa.jd.com/getWareBusiness",
                cache: !0,
                dataType: "jsonp",
                data: {
                    skuId: pageConfig.product.skuid + "",
                    cat: pageConfig.product.cat.join(","),
                    area: i.getAreaId().areaIds.join("_"),
                    shopId: pageConfig.product.shopId,
                    venderId: pageConfig.product.venderId + "",
                    paramJson: pageConfig.product.paramJson,
                    num: pageConfig.product.countNum
                },
                success: function(e) {
                    e && t.handleData({
                        type: "onWareBusinessReady",
                        data: e
                    })
                }
            })
        },
        bindEvent: function() {
            var e = this.cfg;
            $.ajax({
                url: "//c0.3.cn/new/cdpPromotionQuery?skuId=" + e.skuid + "&venderId=" + (e.venderId ? e.venderId : "") + "&source=PC&jdPin=",
                dataType: "jsonp",
                success: function(e) {
                    if (e && e.couponDesc && e.jumpUrl) {
                        var t = [];
                        t.push('<div id="summary-presale-wellfare" class="li" clstag="shangpin|keycount|product|jinrongquan_ys">'), t.push('<div class="dt">\u9884\u552e\u798f\u5229</div>'), t.push('<div class="dd"><a class="J-open-tb" href="' + e.jumpUrl + '" target="_blank"><span class="quan-item" title="' + e.couponDesc + '"><s></s><b></b><span class="text">' + e.couponDesc + '</span></span><span class="more-btn">\u66f4\u591a&gt;&gt;</span></a></div>'), t.push("</div>"), t = t.join(""), setTimeout(function() {
                            $("#summary-presale-wellfare").length > 0 && $("#summary-presale-wellfare").remove(), $(".summary.p-choose-wrap").prepend(t)
                        }, 200)
                    }
                }
            })
        },
        handleData: function(e) {
            var t = e && e.data;
            if (!t.stockInfo)
                return this.error(), this.onError.call(this), !1;
            var i = pageConfig.product,
                o = t.stockInfo.stockState;
            i._area = t.stockInfo.area ? t.stockInfo.area : 0, i.unSupportedArea = 2 === t.stockInfo.code, i.havestock = t.stockInfo.isStock, !1 === t.stockInfo.supportHKMOShip && (i.havestock = !1);
            34 == o || 2 == t.stockInfo.code || function() {
                return !!i.koEndOffset || (!!(i.specialAttrs && i.specialAttrs instanceof Array && -1 != i.specialAttrs.join(",").indexOf("isKO")) || !!i.fsEndOffset)
            }() ? $("#choose-period-buy").hide() : window.PeriodicalBuy && window.PeriodicalBuy.init(i), this.onlyData || this.set(t), this.onSuccess.call(this, e)
        },
        set: function(t) {
            this.setStockInfo(t), this.setSupportedServices(t), this.setSupportIcons(t), this.setDJDAreaSku(t), this.setLDP(t.stockInfo), e.get("GLOBAL.PLUS.giftPackageSignal") && this.setOpenPlusGift(t)
        },
        error: function() {
            "undefined" != typeof console && console.error("Stock service maybe error or timeout.")
        },
        setStockInfo: function(e) {
            var t = $("#store-prompt"),
                i = $("#summary-service"),
                o = $("#summary-supply"),
                s = $(".J-dcashDesc"),
                n = "",
                a = "",
                r = $("#summary-weight");
            if (!e)
                return !1;
            e && e.weightInfo && e.weightInfo.content ? r.show().find(".dd").text(e.weightInfo.content) : r.hide().find(".dd").text(""), e.stockInfo && e.stockInfo.serviceInfo && (a += e.stockInfo.serviceInfo), e.stockInfo && e.stockInfo.promiseResult && (a += e.stockInfo.promiseResult), i.html(a), a ? o.show() : o.hide();
            var c = $("#summary-stock");
            a && c.length ? c.show() : c.hide(), e.stockInfo && e.stockInfo.stockDesc && (n += e.stockInfo.stockDesc), t.html(n), e.stockInfo && e.stockInfo.dcashDesc && s.html(e.stockInfo.dcashDesc)
        },
        setSupportIcons: function(e) {
            var t = $("#summary-support");
            if (!e.stockInfo || !e.stockInfo.support || !e.stockInfo.support.length)
                return t.hide(), !1;
            pageConfig.__supportABTest = new o(i.getUUID(), .5);
            for (var s = "A" === pageConfig.__supportABTest.isHitVersion(), n = 0; n < e.stockInfo.support.length; n++) {
                if ("baina" === e.stockInfo.support[n].id && !s) {
                    e.stockInfo.support.splice(n, 1);
                    break
                }
            }
            /debug=zz/.test(location.href) && e.stockInfo.support.push({
                id: "zengzhi",
                showName: "\u589e\u503c\u670d\u52a1"
            }), e.stockInfo.support.length ? t.show() : t.hide(), t.find(".choose-support").html('            {for item in support}            <li id="support-${item.id}" clstag="shangpin|keycount|product|zhichi_${item.id}_${cat2}">                <a {if item.helpLink} target="_blank" href="${item.helpLink}" {else} href="#none" {/if}                     data-title="${item.iconTip}">                <i class="sprite-${item.id}"></i>                <span>${item.showName}</span>                </a>            </li>            {/for}'.process({
                support: e.stockInfo.support,
                cat2: pageConfig.product.cat[2]
            })), this.showTip(t), this.bindDialog()
        },
        showTip: function(e) {
            e.find("[data-title]").each(function() {
                $(this).data("title") && $(this).ETooltips({
                    pos: "bottom",
                    zIndex: 10,
                    width: 200,
                    defaultTitleAttr: "data-title"
                })
            })
        },
        setDJDAreaSku: function(e) {
            if (!e.stockInfo || !e.stockInfo.realSkuId)
                return !1;
            var i = e.stockInfo.realSkuId;
            if (i != pageConfig.product.skuid) {
                var o = [t.isPop ? "0" : "1", t.isPOPSku(i) ? "0" : "1"].join(""),
                    s = "?jt=" + o;
                if (location.search && (s = /jt=\d+/.test(location.search) ? location.search.replace(/jt=\d+/, "jt=" + o) : location.search + "&jt=" + o), /debug=disableJump/.test(location.href))
                    return !1;
                var n = '                <p style="padding: 40px 30px;font-size: 14px;font-weight: 600;color: #999;">\u8be5\u5546\u54c1\u5728\u5f53\u524d\u533a\u57df\u6682\u4e0d\u652f\u6301\u914d\u9001\u6216\u65e0\u8d27\uff0c\u662f\u5426\u5207\u6362\u5230\u76f8\u4f3c\u5546\u54c1\u3002</p>                <div class="btn" style="text-align: center;">                    <a href="#none" onclick="$.closeDialog()" style="height: 46px;line-height: 46px;font-weight: 700;padding: 0 26px;font-size: 18px;background-color: #df3033;color: #fff;display: inline-block;">\u53d6\u6d88</a>                    <a href=//item.jd.com/' + i + ".html" + s + ' style="height: 46px;font-weight: 700;line-height: 46px;padding: 0 26px;font-size: 18px;background-color: #85C363;color: #fff;display: inline-block;">\u5207\u6362\u76f8\u4f3c\u5546\u54c1</a>                </div>';
                $("body").dialog({
                    width: 392,
                    title: "",
                    height: 200,
                    type: "text",
                    maskClose: !0,
                    source: n,
                    onReady: function() {}
                })
            }
        },
        setLDP: function(e) {
            var t = $("#choose-luodipei");
            if (/debug=ldp/.test(location.href) && (e.luodipei = [{
                desc: "\u9001\u8d27\u670d\u52a1\uff1a\u7535\u68af\u4f4f\u6237\u62167\u5c42\u4ee5\u4e0b\u6b65\u68af\u4f4f\u6237\u53ef\u4eab\u53d7\u6b64\u670d\u52a1\uff0c7\u5c42\u4ee5\u4e0a\u6b65\u68af\u4f4f\u6237\u5219\u9700\u6309\u914d\u9001\u516c\u53f8\u89c4\u5b9a\u52a0\u6536\u8d39\u7528\u3002\uff08\u74f7\u7816\u5730\u677f\u7c7b\uff0c\u4ec5\u7535\u68af\u4f4f\u6237\u62161\u5c42\u6b65\u68af\u4f4f\u6237\u53ef\u4eab\uff09\u3002\n\u5b89\u88c5\u670d\u52a1\uff1a\u6b64\u7c7b\u5546\u54c1\u9700\u4e13\u4eba\u5b89\u88c5\uff0c\u7b7e\u6536\u540e\u8bf7\u8054\u7cfb\u5546\u5bb6\u786e\u8ba4\u4e0a\u95e8\u5b89\u88c5\u65f6\u95f4\u3002\n\u5982\u5546\u5bb6\u672a\u5c65\u884c\u670d\u52a1\uff0c\u6d88\u8d39\u8005\u53ef\u83b7200\u5143/\u5355\u7684\u8d54\u4ed8\u3002",
                id: 1103,
                url: "//help.jd.com/Vender/question-1043.html",
                seq: 1,
                name: "\u9001\u8d27\u4e0a\u95e8\u5b89\u88c5",
                charge: 2
            }, {
                desc: "\u9001\u8d27\u670d\u52a1\uff1a\u7535\u68af\u4f4f\u6237\u62167\u5c42\u4ee5\u4e0b\u6b65\u68af\u4f4f\u6237\u53ef\u4eab\u53d7\u6b64\u670d\u52a1\uff0c7\u5c42\u4ee5\u4e0a\u6b65\u68af\u4f4f\u6237\u5219\u9700\u6309\u914d\u9001\u516c\u53f8\u89c4\u5b9a\u52a0\u6536\u8d39\u7528\u3002\uff08\u74f7\u7816\u5730\u677f\u7c7b\uff0c\u4ec5\u7535\u68af\u4f4f\u6237\u62161\u5c42\u6b65\u68af\u4f4f\u6237\u53ef\u4eab\uff09\u3002\n\u5982\u5546\u5bb6\u672a\u5c65\u884c\u670d\u52a1\uff0c\u6d88\u8d39\u8005\u53ef\u83b7200\u5143/\u5355\u7684\u8d54\u4ed8\u3002",
                id: 1102,
                url: "//help.jd.com/Vender/question-1043.html",
                seq: 2,
                name: "\u9001\u8d27\u4e0a\u95e8",
                charge: 1
            }, {
                desc: "\u5546\u54c1\u9001\u81f3\u60a8\u4e0b\u5355\u5730\u5740\u6240\u5728\u5730\u7ea7\u5e02\u540e\uff0c\u914d\u9001\u516c\u53f8\u4f1a\u901a\u77e5\u60a8\u7269\u6d41\u70b9\u5730\u5740\uff0c\u60a8\u9700\u81ea\u884c\u524d\u5f80\u7269\u6d41\u70b9\u63d0\u8d27\uff0c\u81ea\u884c\u642c\u8fd0\u8d27\u7269\u5e76\u5b89\u88c5\u3002\n\u5982\u5546\u5bb6\u672a\u5c65\u884c\u670d\u52a1\uff0c\u6d88\u8d39\u8005\u53ef\u83b7200\u5143/\u5355\u7684\u8d54\u4ed8\u3002",
                id: 1101,
                url: "//help.jd.com/Vender/question-1043.html",
                seq: 3,
                name: "\u5e02\u533a\u7ad9\u70b9\u81ea\u63d0",
                charge: 0
            }]), !(t.length && e && e.luodipei && e.luodipei.length))
                return t.hide(), !1;
            t.show(), t.find(".dd").html('            {for item in luodipei}            <div class="item {if Number(item_index)==0} selected{/if}">                <b></b>                <a href="#none" data-id="${item.platformPid}">${item.sortName} \uffe5${item.price}</a>                <script type="text/html">${item.desc} {if item.url }<a class="hl_blue" href="${item.url}" target="_blank">\u8be6\u60c5 &raquo;</a>{/if}<\/script>            </div>            {/for}'.process(e)), t.find(".item").each(function() {
                var e = $(this),
                    t = e.find("script").html();
                e.ETooltips({
                    autoHide: !0,
                    close: !1,
                    content: t,
                    width: 300,
                    pos: "bottom",
                    zIndex: 10
                })
            });
            function i(e) {
                e = e || t.find(".selected a").attr("data-id");
                var i = n.$el.attr("href"),
                    o = "";
                i && "#none" != i && (o = /did=/.test(i) ? i.replace(/did=\d+/, "did=" + e) : i + "&did=" + e, n.enabled(o)), s.fire({
                    type: "onLDPSelected",
                    did: e
                })
            }
            function o(e) {
                t.find(".item").removeClass("selected"), e.parent().addClass("selected")
            }
            function a(e) {
                var t = $(e.target),
                    s = t.data("id");
                o(t), i(s)
            }
            t.delegate(".item a", "click", a), i(t.find(".selected a").attr("data-id")), s.fire({
                type: "onLDPSelected",
                did: e.luodipei[0].platformPid
            })
        },
        bindDialog: function() {
            this.suitDialog(), this.zzDialog()
        },
        suitDialog: function() {
            var e = $("#support-tcbg"),
                t = this.areas;
            e.bind("click", function() {
                var e = "//ctc.jd.com/popupDialog.action?showSp=1|2&" + $.param({
                    skuId: pageConfig.product.skuid,
                    provinceId: t[0],
                    cityId: t[1],
                    popId: pageConfig.product.venderId,
                    r: Math.random()
                });
                pageConfig.bTypeIframe = $("body").dialog({
                    type: "iframe",
                    width: 710,
                    height: 610,
                    title: "\u5957\u9910\u53d8\u66f4",
                    autoIframe: !1,
                    iframeTimestamp: !1,
                    source: e,
                    onReady: function() {
                        var e = $(this.el).width();
                        $(this.el).addClass("popup-phone-service"), $(this.content).width(e)
                    }
                })
            })
        },
        zzDialog: function() {
            $("#support-zengzhi").bind("click", function() {
                var e = "//scp.jd.com/settlement.action?" + $.param({
                        skuId: pageConfig.product.skuid,
                        pcount: $("#buy-num").val(),
                        venderId: pageConfig.product.venderId,
                        r: Math.random()
                    }),
                    t = '<div class="zengzhi-layer" style="width:630px;">                    <h3><i class="icon-zengzhi"></i>\u963f\u51e1\u63d0\u4e3b\u9898\u9986\u201c\u589e\u503c\u4ea4\u6613\u201d\u6a21\u5f0f\u8bf4\u660e</h3>                    <p class="zengzhi-intr">\u9009\u62e9\u201c\u589e\u503c\u4ea4\u6613\u201d\u6a21\u5f0f\u7684\u5ba2\u6237\uff0c\u53ef\u4ee5\u53c2\u4e0e\u5546\u5bb6\u6307\u5b9a\u7684\u76f8\u5173\u4ea4\u6613\u670d\u52a1\u3002\u8d2d\u4e70\u540e\u8bf7\u5728\u4e2a\u4eba\u4e2d\u5fc3\u5de6\u4fa7\u201c\u7279\u8272\u670d\u52a1\u201d\u7684\u201c\u9ec4\u91d1|\u6536\u85cf\u670d\u52a1\u201d\u4e2d\u67e5\u770b\u4ea4\u6613\u51ed\u8bc1\uff0c\u51ed\u4ea4\u6613\u51ed\u8bc1\u8054\u7cfb\u5546\u5bb6\u5b8c\u6210\u540e\u7eed\u670d\u52a1\u3002</p>                    <div class="zengzhi-info">                        \u8bf7\u6ce8\u610f\uff1a                        <ol>                            <li>1. \u9009\u62e9\u201c\u589e\u503c\u4ea4\u6613\u201d\u6a21\u5f0f\u7684\u5ba2\u6237\uff0c\u7cfb\u7edf\u9ed8\u8ba4\u4e3a\u4e0d\u53d1\u8d27\uff0c\u5982\u60a8\u5e0c\u671b\u63d0\u53d6\u8d27\u7269\uff0c\u8bf7\u60a8\u8054\u7cfb\u5546\u5bb6\uff0c\u51ed\u4ea4\u6613\u51ed\u8bc1\u529e\u7406\u3002</li>                            <li>2. \u9009\u62e9\u201c\u589e\u503c\u4ea4\u6613\u201d\u6a21\u5f0f\u7684\u5ba2\u6237\uff0c\u987b\u4e3a\u4e2d\u534e\u4eba\u6c11\u5171\u548c\u56fd\u516c\u6c11\uff0c\u6301\u6709\u8eab\u4efd\u8bc1\u3001\u62a4\u7167\u7b49\u6709\u6548\u8eab\u4efd\u8bc1\u4ef6\u3002\u987b\u5e74\u6ee118\u5c81\uff0c\u4e3a\u5b8c\u5168\u6c11\u4e8b\u884c\u4e3a\u80fd\u529b\u4eba\u3002</li>                            <li>3. \u201c\u589e\u503c\u4ea4\u6613\u201d\u6a21\u5f0f\u4e2d\u6240\u542b\u670d\u52a1\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a\u6307\u5b9a\u673a\u6784\u4ee3\u7406\u529e\u7406\u4ea7\u54c1\u5c01\u88c5\u3001\u4ea4\u6613\u6258\u7ba1\u3001\u4ea4\u6613\u5165\u5e93\u3001\u4ea4\u6613\u63d0\u8d27\u3001\u4ea4\u6613\u7ed3\u7b97\u3001\u4e8c\u624b\u8f6c\u8ba9\u7b49\u670d\u52a1\u5f62\u5f0f\u3002\u8be5\u670d\u52a1\u6700\u7ec8\u89e3\u91ca\u6743\u5f52\u963f\u51e1\u63d0\u4e3b\u9898\u9986\u6240\u6709\u3002</li>                            <li>4. \u201c\u589e\u503c\u4ea4\u6613\u201d\u6a21\u5f0f\u4e2d\u6240\u542b\u670d\u52a1\u5bf9\u5e94\u7684\u54c1\u79cd\u8bbe\u7acb\u3001\u4ea4\u6613\u6258\u7ba1\u3001\u4ea4\u6613\u7533\u8d2d\u3001\u4ea4\u6613\u6d41\u901a\u7b49\u4fe1\u606f\uff0c\u5747\u4ee5\u56fd\u9645\u7248\u963f\u51e1\u63d0\u4e3b\u4f53\u6587\u5316\u4ea4\u6613\u5e73\u53f0\u5bf9\u5916\u516c\u544a\u4e3a\u51c6\u3002</li>                            <li>                                5. \u201c\u589e\u503c\u4ea4\u6613\u201d\u6a21\u5f0f\u540e\u7eed\u670d\u52a1\u64cd\u4f5c\u6d41\u7a0b\u793a\u610f\u5982\u4e0b\uff1a                                <div class="process">                                    <div class="process-item">                                        \u5ba2\u6237\u5728\u4eac\u4e1c\u4e2a\u4eba\u4e2d\u5fc3<span>\u3010\u9ec4\u91d1|\u6536\u85cf\u670d\u52a1\u3011</span>\u5f20\u83b7\u53d6\u4ea4\u6613\u51ed\u8bc1                                    </div>                                    <i class="arrow"></i>                                    <div class="process-item">                                        \u5ba2\u6237\u901a\u8fc7\u5fae\u4fe1\u5173\u6ce8<span>\u3010\u56fd\u9645\u7248\u963f\u51e1\u63d0\u4e3b\u4f53\u6587\u5316\u4ea4\u6613\u5e73\u53f0\u3011</span>                                    </div>                                    <i class="arrow"></i>                                    <div class="process-item">                                        \u5728<span>\u3010\u56fd\u9645\u7248\u963f\u51e1\u63d0\u4e3b\u4f53\u6587\u5316\u4ea4\u6613\u5e73\u53f0\u3011</span>\u7684<span>\u3010\u5ba2\u6237\u670d\u52a1\u3011</span>\u4e2d<span>\u3010\u4eac\u4e1c\u5ba2\u6237\u767b\u8bb0\u3011</span>\u6309\u7cfb\u7edf\u6307\u5f15\u5b8c\u6210\u540e\u7eed\u64cd\u4f5c                                    </div>                                </div>                            </li>                        </ol>                        <a clstag="shangpin|keycount|product|button_ZengZhiJiaoYi" target="_blank" href="' + e + '" class="btn-confirm">\u589e\u503c\u4ea4\u6613</a>                    </div>                </div>';
                $("body").dialog({
                    type: "html",
                    width: 690,
                    height: 600,
                    title: "\u589e\u503c\u4ea4\u6613",
                    autoIframe: !1,
                    iframeTimestamp: !1,
                    source: t,
                    onReady: function() {}
                })
            })
        },
        setSupportedServices: function(e) {
            void 0 == e.stockInfo && (e = {});
            var t = e.isJdkd,
                i = e.isJdwl,
                o = e.price && e.price.p,
                s = $.isArray(e.stockInfo.serverIcon && e.stockInfo.serverIcon.basicIcons) ? e.stockInfo.serverIcon.basicIcons : [],
                n = $.isArray(e.stockInfo.serverIcon && e.stockInfo.serverIcon.trustworthyIcon) ? e.stockInfo.serverIcon.trustworthyIcon : [],
                a = $.isArray(e.stockInfo.serverIcon && e.stockInfo.serverIcon.wlfwIcons) ? e.stockInfo.serverIcon.wlfwIcons : [],
                r = "";
            e.stockInfo.serverIcon && 3 == e.stockInfo.serverIcon.relaxType && (r = "extra3");
            function c(e, t) {
                if (!(e instanceof Array))
                    return [];
                t = "number" == typeof t && t >= 1 ? t : 3;
                var i = e.length;
                if (i <= t)
                    return [e];
                for (var o = [], s = 0; s < i; s += t)
                    o.push(e.slice(s, s + t));
                return o
            }
            function d(e, t, i, s) {
                if (!(e instanceof Array) || 0 === e.length)
                    return "";
                t = "string" == typeof t ? t : "";
                for (var n = "string" == typeof i && "string" == typeof s && i.length > 0 && s.length > 0, a = [], r = ["clstag='shangpin|keycount|product|promisefw_" + pageConfig.product.pType + "'", "onclick=\"log('PC_shangxiang', 'zyfxg_shangxiang', '', '', 'zyfxg_fuwu2', '" + pageConfig.product.skuid + "', '" + o + "')\""], c = 0; c < e.length; c++) {
                    var d = e[c];
                    if (void 0 != d && d.tip && d.text) {
                        var p = r[d.__MARK__];
                        p = p || "", "string" == typeof d.helpLink && d.helpLink.length > 0 ? a.push("<a target='_blank' title='" + d.tip + "' href='" + d.helpLink + "'" + p + ">" + d.text + "</a>") : a.push("<span title='" + d.tip + "'" + p + ">" + d.text + "</span>")
                    }
                }
                var l = "";
                return a.length && (l = a.join(t), n && (l = i + l + s)), l
            }
            function p(e) {
                if (!(e instanceof Array) || 0 === e.length)
                    return "";
                for (var t = "", i = 0; i < e.length; i++)
                    t += d(e[i], "<i>|</i>", "<div>", "</div>");
                return t && (t = e.length > 1 ? "<div class='services services--more' id='ns_services'>" + t + "<span class='arrow'></span></div>" : "<div class='services' id='ns_services'>" + t + "</div>"), t
            }
            var l = $(".J-promise-icon.promise-icon"),
                u = $("#J_SelfAssuredPurchase"),
                f = $("#J_LogisticsService");
            if (l.hide().html(""), u.hide().html(""), f.hide().html(""), !pageConfig.product.isHeYue) {
                if (i || t) {
                    var h = "";
                    i && (h = "<div class='icon-wl" + r + "'></div>"), t && (h = "<div class='icon-kd" + r + "'></div>"), a.length > 0 ? (h += p(c(a)), h = "<div class='dd'>" + h + "</div>", f.html(h), f.show()) : $("#summary-service").prepend(h)
                }
                if (n.length > 0) {
                    var h = "",
                        g = pageConfig.product.freeBuyShow ? "icon-freeBuy" : "icon-SelfAssuredPurchase";
                    pageConfig.product.isPop ? 1 == e.stockInfo.popFxgCode && (h = "<div class='" + g + r + "' title='\u65e0\u5fe7\u552e\u540e\uff0c\u653e\u5fc3\u9009\u8d2d\uff08\u5177\u4f53\u53ef\u4eab\u53d7\u670d\u52a1\u4ee5\u552e\u540e\u7533\u8bf7\u9875\u4e3a\u51c6\uff09'></div>") : h = "<div class='" + g + r + "' title='\u65e0\u5fe7\u552e\u540e\uff0c\u653e\u5fc3\u9009\u8d2d\uff08\u5177\u4f53\u53ef\u4eab\u53d7\u670d\u52a1\u4ee5\u552e\u540e\u7533\u8bf7\u9875\u4e3a\u51c6\uff09'></div>", h += p(c(n)), h += s.length > 0 ? d(s, "", "<div class='promises'>", "</div>") : "", h = "<div class='dt'>\u670d\u52a1\u652f\u6301</div><div class='dd'>" + h + "</div>", u.html(h), u.show()
                } else if (s.length > 0) {
                    var h = "<div class='fl'>\u652f\u6301</div>";
                    h += p(c(s, 4)), l.html(h), l.show()
                }
            }
        },
        setQualityGuaranteePeriod: function(e) {
            var i = window.pageConfig.product,
                o = "1534" == i.cat[2],
                s = t.onAttr("zsscrq"),
                n = e.expiration,
                a = $("#summary-weight"),
                r = $("#J_QualityGuaranteePeriod");
            if (o && s && n) {
                var c = n.split("#"),
                    d = c[0],
                    p = c[1];
                if (d && p)
                    var l = "\u751f\u4ea7\u65e5\u671f\u5728" + "".format.apply("{0}\u5e74{1}\u6708{2}\u65e5", $.map(d.split("-"), function(e) {
                        return isNaN(+e) ? e : +e
                    })) + "\u4e4b\u540e\uff0c\u4fdd\u8d28\u671f" + p + "\u5929";
                else
                    var l = "";
                l ? r.length ? $(".dd", r).html(l) : a.length && a.after('<div id="J_QualityGuaranteePeriod" class="li"><div class="dt">\u65e5&#x3000;&#x3000;\u671f</div><div class="dd">' + l + "</div></div>") : r.remove()
            } else
                r.remove()
        },
        setOpenPlusGift: function(e) {
            var t = {
                    isWithinDate: function(e, t) {
                        var i = /(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2}):(\d{2})/,
                            o = function(e, t, i, o, s, n) {
                                return +new Date(e, t - 1, i, o, s, n)
                            };
                        if (i.test(e) && i.test(t)) {
                            e = o.apply(null, i.exec(e).slice(1, 7)), t = o.apply(null, i.exec(t).slice(1, 7));
                            var s = +new Date;
                            return !(s < e || s > t)
                        }
                        return !1
                    }
                },
                i = t.isWithinDate("2019-01-08 00:00:01", "2019-02-08 23:59:59") ? "\u5f00\u901a\u4f1a\u5458\uff0c\u4eab140\u5143\u5168\u54c1\u7c7b\u5238\u793c\u5305+30\u5143\u65e0\u95e8\u69db\u5238" : "\u5f00\u901aPLUS\u5e74\u5361\uff0c\u7acb\u4eab\u4ef7\u503c140\u5143\u5168\u54c1\u7c7b\u5238\u793c\u5305",
                o = pageConfig.product,
                s = '<div id="J-summary-openPlusGift" class="open-plusgift">';
            s += '   <div class="dt">PLUS\u793c\u5305</div>', s += '   <div class="dd">', s += '      <a class="icon-plus" href="//plus.jd.com/index" target="_blank" clstag="shangpin|keycount|PC140PLUS_1545882013014|2"></a>', s += "      <em>" + i + "</em>&nbsp;", s += '      <a class="a-topluspage" href="//plus.jd.com/index" target="_blank" clstag="shangpin|keycount|PC140PLUS_1545882013014|2">\u8be6\u60c5 <s class="s-arrow">&gt;&gt;</s></a>', s += "   </div>", s += "</div>";
            var n = !!(e && e.jdPrice && e.jdPrice.p && Number(e.jdPrice.p) >= 2e3 && Number(e.jdPrice.p) <= 6e3),
                a = !(!o || !o.specialAttrs || -1 === o.specialAttrs.join(",").indexOf("isCanUseJQ-0")),
                r = !!(e && e.jdPrice && e.jdPrice.tpp),
                c = {
                    13922: 13922,
                    13923: 13923,
                    13924: 13924,
                    13925: 13925,
                    13926: 13926,
                    13927: 13927,
                    13928: 13928,
                    13929: 13929,
                    13930: 13930,
                    1444: 1444,
                    6151: 6151,
                    6152: 6152,
                    13212: 13212,
                    13220: 13220,
                    13531: 13531,
                    13532: 13532,
                    4835: 4835,
                    4833: 4833,
                    6980: 6980
                },
                d = !!(o && o.cat && o.cat[2] && void 0 !== c[o.cat[2]]);
            !n || a || r || d || function(e) {
                $.ajax({
                    url: "//passport.jd.com/user/petName/getUserInfoForMiniJd.action",
                    dataType: "jsonp",
                    success: function(t) {
                        "function" == typeof e && e(t)
                    },
                    error: function(e) {
                        "undefined" != typeof console && console.log("\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u5931\u8d25")
                    }
                })
            }(function(e) {
                var t = $("#J-summary-openPlusGift").length > 0;
                if (e && "3" != e.plusStatus && "4" != e.plusStatus && !t) {
                    $("#summary-support").before(s);
                    var i = pageConfig && pageConfig.product && pageConfig.product.skuid || "-";
                    try {
                        expLogJSON("PC140PLUS_1545882013014", "1", '{"sku": ' + i + "}")
                    } catch (e) {
                        "undefined" != typeof console && console.log("PLUS\u793c\u5305\u66dd\u5149\u57cb\u70b9\u9519\u8bef")
                    }
                }
            })
        }
    }, module.exports = a
});
/*!Name: followshop.js
 * Date: 2021-2-25 18:16:26 */
define("MOD_ROOT/contact/followshop", function(require, exports, module) {
    var t = require("JDF_UNIT/login/1.0.0/login"),
        o = function(t) {
            function o() {}
            this.settings = $.extend({
                $el: $(".J-follow-shop"),
                venderId: "",
                onFollow: o,
                onUnFollow: o,
                onCheckFollowState: o
            }, t), this.followState = !1, this.init()
        };
    o.prototype = {
        init: function() {
            this.checkFollowState(), this.bindEvent()
        },
        bindEvent: function() {
            var o = this;
            function e() {
                e.hasCalled || (this.checkFollowState(), e.hasCalled = !0), this.getFollowState() ? this.unFollow() : this.follow()
            }
            function n() {
                t({
                    modal: !0,
                    complete: $.proxy(e, o)
                })
            }
            this.settings.$el.unbind().bind("click", n)
        },
        getFollowState: function() {
            return this.followState
        },
        setFollowState: function(t) {
            this.followState = t
        },
        request: function(t, o, e, n) {
            return $.ajax({
                url: t,
                data: $.extend({
                    sysName: "item.jd.com"
                }, o),
                dataType: "jsonp",
                success: function() {
                    "function" == typeof e && e.apply(null, arguments)
                },
                error: function() {
                    "function" == typeof n && n.apply(null, arguments)
                }
            })
        },
        follow: function() {
            var t = this,
                o = "//fts.jd.com/follow/vender/follow";
            t.request(o, {
                venderId: t.settings.venderId
            }).done(function(o) {
                o = o || {}, o.success && (t.setFollowState(!0), t.settings.onFollow.call(t)), t.render()
            }).fail(function() {
                console && console.log(o + "\u63a5\u53e3\u8c03\u7528\u5931\u8d25")
            })
        },
        unFollow: function() {
            var t = this,
                o = "//fts.jd.com/follow/vender/unfollow";
            t.request(o, {
                venderId: t.settings.venderId
            }).done(function(o) {
                o = o || {}, o.success && (t.setFollowState(!1), t.settings.onUnFollow.call(t)), t.render()
            }).fail(function() {
                console && console.log(o + "\u63a5\u53e3\u8c03\u7528\u5931\u8d25")
            })
        },
        checkFollowState: function() {
            var t = this,
                o = "//fts.jd.com/follow/vender/batchIsFollow";
            t.request(o, {
                venderIds: t.settings.venderId
            }).done(function(o) {
                o = o || {}, o.success && o.data && o.data[t.settings.venderId] ? t.setFollowState(!0) : t.setFollowState(!1), t.render(), t.settings.onCheckFollowState.call(t)
            }).fail(function() {
                console && console.log(o + "\u63a5\u53e3\u8c03\u7528\u5931\u8d25")
            })
        },
        render: function() {
            var t = this.settings.$el,
                o = this.getFollowState();
            t.toggleClass("followed", o).attr({
                title: o ? "\u70b9\u51fb\u53d6\u6d88\u5173\u6ce8" : "\u70b9\u51fb\u5173\u6ce8",
                "data-follow": "" + o
            }).find("span").html(o ? "\u5df2\u5173\u6ce8\u5e97\u94fa" : "\u5173\u6ce8\u5e97\u94fa")
        }
    }, module.exports = o
});
/*!Name: conf.js
 * Date: 2021-2-25 18:16:21 */
define("PUBLIC_ROOT/conf", function(require, exports, module) {
    var conf = {
        data: {},
        get: function(n) {
            if ("string" == typeof n) {
                for (var t = n.split("."), o = this.data, e = 0, a = t.length; e < a; e++)
                    if (void 0 === (o = o[t[e]]) || null === o)
                        return o;
                return o
            }
        },
        print: function(n) {
            console && "function" == typeof console.log && console.log(n)
        }
    };
    try {
        var source = document.getElementById("J_JSConfig").innerHTML,
            data = eval("(" + source + ")");
        data instanceof Object ? conf.data = data : conf.data = {}
    } catch (n) {
        conf.print(n)
    }
    return conf
});

