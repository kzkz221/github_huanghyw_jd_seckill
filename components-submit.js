!function(e) {
    function t(t) {
        for (var n, c, o = t[0], r = t[1], l = t[2], u = 0, m = []; u < o.length; u++)
            c = o[u], Object.prototype.hasOwnProperty.call(i, c) && i[c] && m.push(i[c][0]), i[c] = 0;
        for (n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        for (d && d(t); m.length;)
            m.shift()();
        return s.push.apply(s, l || []), a()
    }
    function a() {
        for (var e, t = 0; t < s.length; t++) {
            for (var a = s[t], n = !0, o = 1; o < a.length; o++) {
                var r = a[o];
                0 !== i[r] && (n = !1)
            }
            n && (s.splice(t--, 1), e = c(c.s = a[0]))
        }
        return e
    }
    var n = {},
        i = {
            0: 0
        },
        s = [];
    function c(t) {
        if (n[t])
            return n[t].exports;
        var a = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, c), a.l = !0, a.exports
    }
    c.m = e, c.c = n, c.d = function(e, t, a) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, c.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, c.t = function(e, t) {
        if (1 & t && (e = c(e)), 8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (c.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var n in e)
                c.d(a, n, function(t) {
                    return e[t]
                }.bind(null, n));
        return a
    }, c.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return c.d(t, "a", t), t
    }, c.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, c.p = "//misc.360buyimg.com/mall/miaosha/";
    var o = window.webpackJsonp = window.webpackJsonp || [],
        r = o.push.bind(o);
    o.push = t, o = o.slice();
    for (var l = 0; l < o.length; l++)
        t(o[l]);
    var d = r;
    s.push([0, 1]), a()
}({
    0: function(e, t, a) {
        e.exports = a("mZCW")
    },
    "2TFm": function(e, t, a) {},
    "4iG7": function(e, t, a) {},
    "5V3I": function(e, t, a) {
        "use strict";
        (function(e) {
            var n = a("q1tI"),
                i = a.n(n);
            a("2TFm"), a("rAyO");
            t.a = function(t) {
                var a = t.isShowPriceWrap,
                    n = t.shipmentId,
                    s = t.shipmentData,
                    c = t.allweight,
                    o = (t.maxnum, t.deliveryList),
                    r = t.inputNum,
                    l = t.addDisabled;
                return i.a.createElement("div", null, i.a.createElement("div", {
                    className: "step-tit"
                }, i.a.createElement("h3", null, "送货清单"), i.a.createElement("div", {
                    id: "secondHint",
                    className: "tips-new-white hide"
                }), i.a.createElement("div", {
                    className: "extra-r"
                }, i.a.createElement("a", {
                    className: "price-desc",
                    id: "price-desc",
                    href: "#none",
                    onClick: function() {
                        return t.haddleisShowPriceWrap(!0)
                    }
                }, i.a.createElement("i", null), " 价格说明"))), i.a.createElement("div", {
                    className: "step-cont",
                    id: "skuPayAndShipment-cont"
                }, i.a.createElement("div", {
                    className: "shopping-lists",
                    id: "shopping-lists"
                }, i.a.createElement("div", {
                    className: "shopping-list ABTest"
                }, i.a.createElement("div", {
                    className: "goods-list"
                }, i.a.createElement("div", {
                    className: "goods-tit"
                }, i.a.createElement("h4", {
                    className: "vendor_name_h vendor_name_0",
                    id: "0"
                }, "商家：", o.venderName)), i.a.createElement("div", {
                    className: "goods-items"
                }, i.a.createElement("div", {
                    className: "goods-suit goods-last"
                }, i.a.createElement("div", {
                    "data-service": ""
                }), i.a.createElement("div", {
                    className: "goods-item goods-item-extra"
                }, i.a.createElement("div", {
                    className: "p-img"
                }, i.a.createElement("a", {
                    target: "_blank",
                    href: "//item.jd.com/" + o.skuId + ".html"
                }, o.skuImgUrl ? i.a.createElement("img", {
                    src: "//img1".concat(o.skuId % 5, ".360buyimg.com/n4/").concat(o.skuImgUrl),
                    alt: ""
                }) : "")), i.a.createElement("div", {
                    className: "goods-msg"
                }, i.a.createElement("div", {
                    className: "goods-msg-gel"
                }, i.a.createElement("div", {
                    className: "p-name"
                }, i.a.createElement("a", {
                    href: "//item.jd.com/" + o.skuId + ".html",
                    target: "_blank"
                }, o.skuName)), i.a.createElement("div", {
                    className: "p-price"
                }, i.a.createElement("strong", {
                    className: "jd-price"
                }, "￥ ", o.skuPrice), o.num > 1 && i.a.createElement("span", {
                    className: "p-reduce",
                    onClick: t.reduceProNum
                }, "-"), o.num <= 1 && i.a.createElement("span", {
                    className: "p-reduce p-disable"
                }, "-"), i.a.createElement("span", {
                    className: "p-num"
                }, i.a.createElement("input", {
                    className: "p-num-input",
                    type: "text",
                    value: r,
                    onChange: function(e) {
                        return t.changeCount(e)
                    },
                    onBlur: function(e) {
                        return t.sendCount(e)
                    }
                })), l ? i.a.createElement("span", {
                    className: "p-add p-disable"
                }, "+") : i.a.createElement("span", {
                    className: "p-add",
                    onClick: t.addProNum
                }, "+"), i.a.createElement("span", {
                    id: "pre-state",
                    className: "p-state",
                    skuid: "{deliveryList.skuId}"
                }, "有货"), i.a.createElement("span", {
                    className: "p-weight"
                }, c, "kg")))), i.a.createElement("div", null, o.extMap && "-1" !== o.extMap.new7ToReturn ? [i.a.createElement("i", {
                    key: "1",
                    className: "p-icon p-icon-w sevenicon"
                }), i.a.createElement("span", {
                    key: "2",
                    className: "tx-07 withouthk seven"
                }, e.constants.new7ToReturn[o.extMap.new7ToReturn] ? e.constants.new7ToReturn[o.extMap.new7ToReturn].unifiedControlMsg : "")] : null), i.a.createElement("div", {
                    className: "clr"
                }), i.a.createElement("div", {
                    className: "gift-items"
                }, o.gifts ? o.gifts.map((function(e, t) {
                    return i.a.createElement("div", {
                        className: "gift-item",
                        key: t,
                        "data-key": e.key
                    }, i.a.createElement("a", {
                        href: "#none"
                    }, "【赠品】  ", e.skuName, "  "), i.a.createElement("span", {
                        className: "num"
                    }, "X", e.num, " "), i.a.createElement("a", {
                        href: "//item.jd.com/" + e.sku + ".html",
                        target: "_blank",
                        className: "gift-price"
                    }, "查看价格"))
                })) : ""), i.a.createElement("div", {
                    className: "gift-items"
                }, o.attachs ? o.attachs.map((function(e, t) {
                    return i.a.createElement("div", {
                        className: "gift-item",
                        key: t,
                        "data-key": e.key
                    }, i.a.createElement("a", {
                        href: "#none"
                    }, "【附件】  ", e.skuName, "  "), i.a.createElement("span", {
                        className: "num"
                    }, "X", e.num, " "), i.a.createElement("a", {
                        href: "//item.jd.com/" + e.sku + ".html",
                        target: "_blank",
                        className: "gift-price"
                    }, "查看价格"))
                })) : ""), i.a.createElement("div", {
                    className: "clr"
                }))))), i.a.createElement("div", {
                    className: "dis-modes",
                    id: "11"
                }, i.a.createElement("div", {
                    className: "mode-item mode-tab"
                }, i.a.createElement("div", {
                    className: "mode-item-tit"
                }, i.a.createElement("h4", null, "配送方式")), i.a.createElement("div", {
                    className: "mode-tab-nav"
                }, i.a.createElement("ul", null, s.map((function(e, a) {
                    return i.a.createElement("li", {
                        key: a,
                        "data-key": e.key,
                        className: e.shipmentType == n ? "mode-tab-item jd curr" : "mode-tab-item jd",
                        onClick: function() {
                            return t.chooseShipmentType(e.shipmentType)
                        }
                    }, i.a.createElement("span", {
                        id: "jdShip-span-tip",
                        className: "m-txt"
                    }, e.shipmentTypeName, i.a.createElement("i", {
                        className: "qmark-icon qmark-tip"
                    })), i.a.createElement("b", null))
                }))))), i.a.createElement("div", {
                    className: "mode-tab-con ",
                    id: "sop_shipment_165716"
                }, i.a.createElement("ul", {
                    className: "mode-list"
                }, i.a.createElement("li", {
                    id: "sop_shipment_date_li_165716"
                }, i.a.createElement("div", {
                    className: "fore1 hide",
                    id: "Honor_tip_165716"
                }), i.a.createElement("div", {
                    className: "fore1",
                    id: "sop_shipment_date_165716"
                }, i.a.createElement("span", {
                    className: "mode-label ftx-03"
                }, "配送时间："), s ? s.map((function(e, t) {
                    return i.a.createElement("div", {
                        className: "mode-infor",
                        key: t,
                        "data-key": e.key
                    }, e.shipmentTimeTypeName)
                })) : ""))))), i.a.createElement("div", {
                    className: "clr"
                }), i.a.createElement("div", {
                    className: "weight-cont total-freight-weight hide",
                    style: {
                        display: "block"
                    }
                }, "总重量：", i.a.createElement("em", {
                    className: "ftx-03 total-freight-weight-val"
                }, c, "kg"))), i.a.createElement("div", {
                    className: "clr"
                }))), i.a.createElement("div", {
                    className: a ? "ui-tips ui-tips-x-right" : "hide"
                }, i.a.createElement("div", {
                    className: "ui-tips-main"
                }, e.constants.priceTipText), i.a.createElement("span", {
                    className: "ui-tips-arrow"
                }), i.a.createElement("span", {
                    className: "ui-tips-close",
                    onClick: function() {
                        return t.haddleisShowPriceWrap(!1)
                    }
                }, "x")))
            }
        }).call(this, a("yLpj"))
    },
    "9KUs": function(e, t, a) {
        "use strict";
        (function(e) {
            var n = a("1OyB"),
                i = a("vuIU"),
                s = a("md7G"),
                c = a("foSv"),
                o = a("Ji7U"),
                r = a("q1tI"),
                l = a.n(r),
                d = (a("GC4F"), a("rAyO"), a("KOhR"));
            function u() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }
            var m = function(t) {
                Object(o.a)(m, t);
                var a,
                    r = (a = m, function() {
                        var e,
                            t = Object(c.a)(a);
                        if (u()) {
                            var n = Object(c.a)(this).constructor;
                            e = Reflect.construct(t, arguments, n)
                        } else
                            e = t.apply(this, arguments);
                        return Object(s.a)(this, e)
                    });
                function m(e) {
                    var t;
                    return Object(n.a)(this, m), (t = r.call(this, e)).state = {
                        isShow: !0
                    }, t
                }
                return Object(i.a)(m, [{
                    key: "render",
                    value: function() {
                        var t = this;
                        return l.a.createElement("div", {
                            className: this.state.isShow ? "orderInfo-tip" : "hide"
                        }, l.a.createElement("span", {
                            className: "wicon"
                        }), 1 == this.props.type && l.a.createElement("span", {
                            className: "ftx-03"
                        }, " 温馨提示：", e.constants.reminder.sevenDay), 2 == this.props.type && l.a.createElement("span", {
                            className: "ftx-03"
                        }, " 温馨提示：", e.constants.reminder.riskControl), l.a.createElement("span", {
                            className: "cls-btn",
                            onClick: function() {
                                return Object(d.b)(t, "isShow", !1)
                            }
                        }, "x"))
                    }
                }]), m
            }(l.a.Component);
            t.a = m
        }).call(this, a("yLpj"))
    },
    BN68: function(e, t, a) {},
    EB8K: function(e, t, a) {
        "use strict";
        (function(e) {
            var n = a("1OyB"),
                i = a("vuIU"),
                s = a("md7G"),
                c = a("foSv"),
                o = a("Ji7U"),
                r = a("q1tI"),
                l = a.n(r),
                d = (a("4iG7"), a("aAPB"));
            a("rAyO");
            function u() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }
            var m = function(t) {
                Object(o.a)(m, t);
                var a,
                    r = (a = m, function() {
                        var e,
                            t = Object(c.a)(a);
                        if (u()) {
                            var n = Object(c.a)(this).constructor;
                            e = Reflect.construct(t, arguments, n)
                        } else
                            e = t.apply(this, arguments);
                        return Object(s.a)(this, e)
                    });
                function m(e) {
                    var t;
                    return Object(n.a)(this, m), (t = r.call(this, e)).state = {
                        invoiceInfo: {},
                        phoneCheck: "",
                        emailCheck: ""
                    }, t
                }
                return Object(i.a)(m, [{
                    key: "componentDidMount",
                    value: function() {
                        this.getInvoiceInfo(this.getUrlParam("skuId"))
                    }
                }, {
                    key: "getUrlParam",
                    value: function(e) {
                        for (var t = window.location.search.substring(1).split("&"), a = 0; a < t.length; a++) {
                            var n = t[a].split("=");
                            if (n[0] == e)
                                return n[1]
                        }
                        return !1
                    }
                }, {
                    key: "getInvoiceInfo",
                    value: function(e) {
                        var t = this;
                        Object(d.n)(e).then((function(e) {
                            console.log("getinvoice", e), e && t.setState({
                                invoiceInfo: e
                            })
                        }))
                    }
                }, {
                    key: "setInvoiceInfoState",
                    value: function(e, t) {
                        var a = this.state.invoiceInfo;
                        a[e] = t, this.setState({
                            invoiceInfo: a
                        })
                    }
                }, {
                    key: "saveInvoice",
                    value: function() {
                        var t = this,
                            a = "",
                            n = "";
                        if (this.state.invoiceInfo.invoicePhone ? e.constants.chinaMobileReg.test(this.state.invoiceInfo.invoicePhone) || (a = e.constants.checkText.invoicePhoneCheckIllegal) : a = e.constants.checkText.invoicePhoneCheck, this.state.invoiceInfo.invoiceEmail && !e.constants.emailReg.test(this.state.invoiceInfo.invoiceEmail) && (n = e.constants.checkText.invoiceEmailCheck), "" == a && "" == n) {
                            if (4 == this.state.invoiceInfo.invoiceTitle) {
                                var i = {
                                    invoiceEmail: this.state.invoiceInfo.invoiceEmail,
                                    invoicePhone: this.state.invoiceInfo.invoicePhone,
                                    invoicePhoneKey: this.state.invoiceInfo.invoicePhoneKey,
                                    invoiceCompany: "",
                                    invoiceCode: "",
                                    invoiceTitle: 4
                                };
                                Object(d.t)(i).then((function(e) {
                                    console.log("saveInvoice", e), e && t.props.handleHide(!0)
                                }))
                            }
                            5 == this.state.invoiceInfo.invoiceTitle && (this.state.invoiceInfo.invoiceCompany ? Object(d.d)(this.state.invoiceInfo.invoiceCode).then((function(a) {
                                if (console.log(a.data, "checkTax"), a.data) {
                                    var n = {
                                        invoiceEmail: t.state.invoiceInfo.invoiceEmail,
                                        invoicePhone: t.state.invoiceInfo.invoicePhone,
                                        invoicePhoneKey: t.state.invoiceInfo.invoicePhoneKey,
                                        invoiceCompany: t.state.invoiceInfo.invoiceCompany,
                                        invoiceCode: t.state.invoiceInfo.invoiceCode,
                                        invoiceTitle: 5
                                    };
                                    Object(d.t)(n).then((function(e) {
                                        e && t.props.handleHide(!0)
                                    }))
                                } else
                                    alert(e.constants.checkText.invoiceTaxCodeCheck)
                            })) : alert(e.constants.checkText.invoiceTaxCompanyCheck))
                        } else
                            this.setState({
                                phoneCheck: a,
                                emailCheck: n
                            })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return l.a.createElement("div", {
                            className: "invoice-form"
                        }, l.a.createElement("div", {
                            className: "invoice-nav"
                        }, l.a.createElement("div", {
                            className: "invoice-nav-item"
                        }, "电子普通发票", l.a.createElement("b", null))), l.a.createElement("div", {
                            className: "invoice-tips mt10 mb10 "
                        }, l.a.createElement("i", null), l.a.createElement("div", {
                            className: "tip-cont"
                        }, e.constants.invoiceTipText.invoiceText1, l.a.createElement("a", {
                            target: "_blank",
                            className: "ftx-05",
                            href: e.constants.link.eInvoiceLink
                        }, e.constants.invoiceTipText.invoiceLink1, ">>")), l.a.createElement("div", {
                            className: "tip-cont"
                        }, e.constants.invoiceTipText.invoiceText2, l.a.createElement("a", {
                            target: "_blank",
                            className: "ftx-05",
                            href: e.constants.link.invoiceLink
                        }, e.constants.invoiceTipText.invoiceLink2, ">>"))), l.a.createElement("div", {
                            className: "form"
                        }, l.a.createElement("div", {
                            className: "item"
                        }, l.a.createElement("span", {
                            className: "label"
                        }, "发票抬头"), l.a.createElement("div", {
                            className: "fl"
                        }, l.a.createElement("div", {
                            className: "invoice-list invoice-tit-list"
                        }, l.a.createElement("div", {
                            className: this.state.invoiceInfo && 4 == this.state.invoiceInfo.invoiceTitle ? "invoice-item invoice-item-selected" : "invoice-item",
                            onClick: function() {
                                return t.setInvoiceInfoState("invoiceTitle", 4)
                            }
                        }, l.a.createElement("input", {
                            type: "text",
                            className: "itxt",
                            defaultValue: "个人",
                            readOnly: !0
                        }), l.a.createElement("b", null)), l.a.createElement("div", {
                            className: this.state.invoiceInfo && 5 == this.state.invoiceInfo.invoiceTitle ? "invoice-item invoice-item-selected" : "invoice-item",
                            onClick: function() {
                                return t.setInvoiceInfoState("invoiceTitle", 5)
                            }
                        }, l.a.createElement("input", {
                            type: "text",
                            className: "itxt itxt04",
                            placeholder: "请填写公司发票抬头",
                            defaultValue: this.state.invoiceInfo.invoiceCompany,
                            onInput: function(e) {
                                return t.setInvoiceInfoState("invoiceCompany", e.target.value)
                            }
                        }), l.a.createElement("b", null))))), this.state.invoiceInfo && 5 == this.state.invoiceInfo.invoiceTitle && l.a.createElement("div", {
                            className: "item"
                        }, l.a.createElement("span", {
                            className: "label"
                        }, "纳税人识别号"), l.a.createElement("div", {
                            className: "fl"
                        }, l.a.createElement("input", {
                            type: "text",
                            className: "itxt itxt05 nsr",
                            placeholder: "纳税人识别号",
                            defaultValue: this.state.invoiceInfo.invoiceCode,
                            onInput: function(e) {
                                return t.setInvoiceInfoState("invoiceCode", e.target.value)
                            }
                        }))), l.a.createElement("div", {
                            className: "item invoice_content"
                        }, l.a.createElement("span", {
                            className: "label"
                        }, "发票内容"), l.a.createElement("div", {
                            className: "fl"
                        }, l.a.createElement("div", {
                            className: "invoice-list"
                        }, l.a.createElement("div", {
                            className: "invoice-item invoice-item-selected"
                        }, "商品明细", l.a.createElement("b", null)), l.a.createElement("div", {
                            className: "ftx03"
                        }, l.a.createElement("i", {
                            className: "warn-icon"
                        }), "发票内容将显示详细商品名称与价格信息")))), l.a.createElement("div", {
                            className: "item"
                        }, l.a.createElement("span", {
                            className: "label"
                        }, l.a.createElement("em", null, "*"), "收票人手机"), l.a.createElement("div", {
                            className: "fl"
                        }, l.a.createElement("input", {
                            type: "text",
                            className: "itxt itxt03",
                            defaultValue: this.state.invoiceInfo.invoicePhone,
                            onInput: function(e) {
                                return t.setInvoiceInfoState("invoicePhone", e.target.value)
                            },
                            maxLength: "11"
                        })), this.state.phoneCheck && l.a.createElement("span", {
                            className: "error-msg"
                        }, this.state.phoneCheck)), l.a.createElement("div", {
                            className: "item"
                        }, l.a.createElement("span", {
                            className: "label"
                        }, "收票人邮箱"), l.a.createElement("div", {
                            className: "fl"
                        }, l.a.createElement("input", {
                            type: "text",
                            className: "itxt itxt03",
                            defaultValue: this.state.invoiceInfo.invoiceEmail,
                            onInput: function(e) {
                                return t.setInvoiceInfoState("invoiceEmail", e.target.value)
                            }
                        })), this.state.emailCheck && l.a.createElement("span", {
                            className: "error-msg"
                        }, this.state.emailCheck)), l.a.createElement("div", {
                            className: "item"
                        }, l.a.createElement("span", {
                            className: "label"
                        }, " "), l.a.createElement("div", {
                            className: "fl"
                        }, l.a.createElement("div", {
                            className: "op-btns"
                        }, l.a.createElement("a", {
                            className: "btn-1",
                            onClick: function() {
                                return t.saveInvoice()
                            }
                        }, "保存"), l.a.createElement("a", {
                            className: "btn-9 ml10",
                            onClick: function() {
                                return t.props.handleHide(!1)
                            }
                        }, "取消"))))))
                    }
                }]), m
            }(l.a.Component);
            t.a = m
        }).call(this, a("yLpj"))
    },
    GC4F: function(e, t, a) {},
    I7hh: function(e, t, a) {},
    KOhR: function(e, t, a) {
        "use strict";
        a.d(t, "b", (function() {
            return i
        })), a.d(t, "a", (function() {
            return s
        }));
        var n = a("rePB");
        function i(e, t, a) {
            e.setState(Object(n.a)({}, t, a))
        }
        function s(e, t, a) {
            return e && e[t] ? e[t] : a
        }
    },
    LQHb: function(e, t, a) {},
    Mc1x: function(e, t, a) {},
    R0Lb: function(e, t, a) {
        "use strict";
        var n = a("wx14"),
            i = a("rePB"),
            s = a("Ff2n"),
            c = a("1OyB"),
            o = a("vuIU"),
            r = a("md7G"),
            l = a("foSv"),
            d = a("Ji7U"),
            u = a("q1tI"),
            m = a("TSYQ"),
            p = a.n(m);
        var f = a("i8i4"),
            h = null;
        function v(e) {
            h && (h.destroy(), h = null);
            var t = document.createElement("div");
            document.body.appendChild(t);
            var a = !1;
            function i() {
                f.unmountComponentAtNode(t), t && t.parentNode && t.parentNode.removeChild(t)
            }
            var c = e.onClose,
                o = Object(s.a)(e, ["onClose"]),
                r = c ? function() {
                    c(), i()
                } : i;
            return f.render(u.createElement(C, Object(n.a)({
                onClose: r
            }, o, {
                ref: function(e) {
                    a || (a = !0, h = {
                        component: e,
                        destroy: function() {
                            f.unmountComponentAtNode(t), t && t.parentNode && t.parentNode.removeChild(t)
                        }
                    })
                }
            })), t), {
                close: i
            }
        }
        function g() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }
        var y = function(e) {
            Object(d.a)(m, e);
            var t,
                a = (t = m, function() {
                    var e,
                        a = Object(l.a)(t);
                    if (g()) {
                        var n = Object(l.a)(this).constructor;
                        e = Reflect.construct(a, arguments, n)
                    } else
                        e = a.apply(this, arguments);
                    return Object(r.a)(this, e)
                });
            function m(e) {
                var t;
                return Object(c.a)(this, m), (t = a.call(this, e)).durationTimer = void 0, t.handleClose = function() {
                    var e = t.props,
                        a = e.onClose,
                        n = e.animationTime;
                    t.setState({
                        display: "hiding"
                    }), t.durationTimer = setTimeout((function() {
                        return t.setState({
                            display: "hide"
                        }, (function() {
                            a && a()
                        }))
                    }), n)
                }, t.addPrefix = function(e) {
                    var a,
                        n,
                        i = t.props.prefixCls;
                    return n = e, (a = i) && n ? "string" == typeof n ? "".concat(a, "-").concat(n) : p()(n.filter((function(e) {
                        return !!e
                    })).map((function(e) {
                        return "".concat(a, "-").concat(e)
                    }))) : ""
                }, t.state = {
                    display: "show"
                }, t
            }
            return Object(o.a)(m, [{
                key: "componentDidMount",
                value: function() {
                    var e = this,
                        t = this.props,
                        a = t.autohide,
                        n = t.duration;
                    a && setTimeout((function() {
                        e.handleClose()
                    }), n)
                }
            }, {
                key: "componentWillMount",
                value: function() {
                    clearTimeout(this.durationTimer)
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = this;
                    if (this.props.autohide !== e.autohide) {
                        var a = e.autohide,
                            n = e.duration;
                        a && setTimeout((function() {
                            t.handleClose()
                        }), n)
                    }
                }
            }, {
                key: "renderCloseButton",
                value: function(e) {
                    return u.createElement("div", {
                        className: this.addPrefix(["message-close", "icon-close"]),
                        "aria-label": "Close",
                        role: "button",
                        onClick: this.handleClose
                    }, u.createElement("span", {
                        className: "bc-only"
                    }, e))
                }
            }, {
                key: "render",
                value: function() {
                    var e,
                        t = this.props,
                        a = (t.prefixCls, t.className),
                        c = t.type,
                        o = t.title,
                        r = t.description,
                        l = t.closeLabel,
                        d = t.closable,
                        m = t.full,
                        f = t.showIcon,
                        h = t.position,
                        v = (t.autohide, t.duration, t.animationTime, t.style),
                        g = Object(s.a)(t, ["prefixCls", "className", "type", "title", "description", "closeLabel", "closable", "full", "showIcon", "position", "autohide", "duration", "animationTime", "style"]),
                        y = this.state.display;
                    if ("hide" === y)
                        return null;
                    var C = !!o,
                        b = !!r,
                        E = p()(this.addPrefix("message-container"), Object(i.a)({}, this.addPrefix("message--".concat(h)), h)),
                        N = p()(a, this.addPrefix("message"), this.addPrefix("message-".concat(c, "-s1")), this.addPrefix(y), (e = {}, Object(i.a)(e, this.addPrefix("message-has-title"), C), Object(i.a)(e, this.addPrefix("message-has-icon"), f), Object(i.a)(e, this.addPrefix("message-full"), m), Object(i.a)(e, "message--in", "hiding" !== y), Object(i.a)(e, "message--out", "hiding" === y), e));
                    return u.createElement("div", Object(n.a)({}, g, {
                        style: v,
                        className: E
                    }), u.createElement("div", {
                        className: N
                    }, u.createElement("div", {
                        className: p()(this.addPrefix("message-content"), Object(i.a)({}, this.addPrefix("message-cont-close"), d))
                    }, d && this.renderCloseButton(l), f && u.createElement("i", {
                        className: p()(this.addPrefix("message-icon"), this.addPrefix("icon-".concat(c, "-s1")))
                    }), u.createElement("div", {
                        className: this.addPrefix("message-cont")
                    }, C && u.createElement("h5", {
                        className: this.addPrefix("header")
                    }, o), b && u.createElement("div", {
                        className: this.addPrefix("body")
                    }, r)))))
                }
            }]), m
        }(u.PureComponent);
        y.showMsg = v, y.defaultProps = {
            type: "info",
            closeLabel: "",
            prefixCls: "lg",
            className: "",
            duration: 1500,
            position: "top-center",
            autohide: !1,
            animationTime: 350
        };
        var C = y;
        a("PEDj"), a("2QCl"), a("nuVs");
        C.showMsg = v;
        t.a = C
    },
    "X9V+": function(e, t, a) {},
    aAPB: function(e, t, a) {
        "use strict";
        a.d(t, "m", (function() {
            return f
        })), a.d(t, "p", (function() {
            return h
        })), a.d(t, "k", (function() {
            return v
        })), a.d(t, "b", (function() {
            return g
        })), a.d(t, "v", (function() {
            return y
        })), a.d(t, "q", (function() {
            return C
        })), a.d(t, "h", (function() {
            return b
        })), a.d(t, "i", (function() {
            return E
        })), a.d(t, "r", (function() {
            return N
        })), a.d(t, "f", (function() {
            return k
        })), a.d(t, "a", (function() {
            return I
        })), a.d(t, "g", (function() {
            return O
        })), a.d(t, "s", (function() {
            return w
        })), a.d(t, "u", (function() {
            return D
        })), a.d(t, "e", (function() {
            return S
        })), a.d(t, "n", (function() {
            return j
        })), a.d(t, "t", (function() {
            return F
        })), a.d(t, "d", (function() {
            return L
        })), a.d(t, "c", (function() {
            return T
        })), a.d(t, "j", (function() {
            return P
        })), a.d(t, "l", (function() {
            return x
        })), a.d(t, "o", (function() {
            return M
        })), a.d(t, "w", (function() {
            return U
        })), a.d(t, "x", (function() {
            return _
        })), a.d(t, "y", (function() {
            return A
        }));
        var n = a("vDqi"),
            i = a.n(n),
            s = a("Qyje"),
            c = a.n(s),
            o = a("R0Lb");
        i.a.defaults.withCredentials = !0;
        i.a.defaults.baseURL = "//marathon.jd.com";
        i.a;
        function r(e) {
            return new Promise((function(t, a) {
                e && e.data ? -1 == e.data.islogin ? window.location.href = "//passport.jd.com/new/login.aspx?ReturnUrl=" + encodeURIComponent(window.location.href) : t(e.data) : window.location.href = "//marathon.jd.com/koFail.html"
            }))
        }
        function l(e) {
            return new Promise((function(t) {
                e && e.data ? -1 == e.data.islogin ? window.location.href = "//passport.jd.com/new/login.aspx?ReturnUrl=" + encodeURIComponent(window.location.href) : t(e.data) : (d(), reject({
                    msg: e.data
                }))
            }))
        }
        function d(e) {
            o.a.showMsg({
                showIcon: !0,
                type: "warn",
                description: "选购人数较多，再试一次吧~",
                autohide: !0,
                closable: !1,
                duration: 2e3
            })
        }
        function u(e) {
            return new Promise((function(t, a) {
                e && e.data ? -1 == e.data.islogin ? window.location.href = "//passport.jd.com/new/login.aspx?ReturnUrl=" + encodeURIComponent(window.location.href) : t(e.data) : a({
                    msg: e.data
                })
            }))
        }
        function m() {
            return new Promise((function(e) {
                e()
            }))
        }
        function p() {
            window.location.href = "//marathon.jd.com/koFail.html"
        }
        function f(e, t) {
            return i()({
                url: "/seckillnew/orderService/pc/init.action",
                method: "POST",
                transformRequest: [function(e) {
                    return c.a.stringify(e)
                }],
                data: {
                    sku: e.sku,
                    num: e.num,
                    isModifyAddress: e.isModifyAddress
                },
                timeout: t ? 8e3 : 2e3
            }).then(t ? r : l).catch(t ? p : d)
        }
        function h(e, t) {
            return i()({
                url: "/seckillnew/paymentService/pc/getPaymentList.action",
                method: "POST",
                transformRequest: [function(e) {
                    return c.a.stringify(e)
                }],
                data: {
                    sku: e.sku,
                    provinceId: e.provinceId,
                    cityId: e.cityId,
                    countyId: e.countyId,
                    townId: e.townId
                },
                timeout: t ? 8e3 : 2e3
            }).then(t ? r : u).catch(t ? p : m)
        }
        function v(e, t) {
            return i()({
                url: "/seckillnew/shipmentService/pc/getShipmentList.action",
                method: "POST",
                transformRequest: [function(e) {
                    return c.a.stringify(e)
                }],
                data: {
                    sku: e.sku,
                    provinceId: e.provinceId,
                    cityId: e.cityId,
                    countyId: e.countyId,
                    townId: e.townId
                },
                timeout: t ? 8e3 : 2e3
            }).then(t ? r : u).catch(t ? p : m)
        }
        function g(e, t) {
            return i()({
                url: "/seckillnew/orderService/pc/calcuOrderPrice.action",
                method: "POST",
                transformRequest: [function(e) {
                    return c.a.stringify(e)
                }],
                data: {
                    provinceId: e.provinceId,
                    cityId: e.cityId,
                    countyId: e.countyId,
                    townId: e.townId,
                    codTimeType: 3,
                    paymentType: e.paymentType
                },
                timeout: t ? 8e3 : 2e3
            }).then(t ? r : u).catch(t ? p : m)
        }
        function y(e) {
            return i()({
                url: "/seckillnew/orderService/pc/submitOrder.action?skuId=" + e.skuId,
                method: "POST",
                transformRequest: [function(e) {
                    return c.a.stringify(e)
                }],
                data: {
                    skuId: e.skuId,
                    num: e.num,
                    addressId: e.addressId,
                    yuShou: e.yuShou,
                    isModifyAddress: e.isModifyAddress,
                    name: e.name,
                    provinceId: e.provinceId,
                    cityId: e.cityId,
                    countyId: e.countyId,
                    townId: e.townId,
                    addressDetail: e.addressDetail,
                    mobile: e.mobile,
                    mobileKey: e.mobileKey,
                    email: e.email,
                    postCode: e.postCode,
                    invoiceTitle: e.invoiceTitle,
                    invoiceCompanyName: e.invoiceCompanyName,
                    invoiceContent: e.invoiceContent,
                    invoiceTaxpayerNO: e.invoiceTaxpayerNO,
                    invoiceEmail: e.invoiceEmail,
                    invoicePhone: e.invoicePhone,
                    invoicePhoneKey: e.invoicePhoneKey,
                    invoice: e.invoice,
                    password: e.password,
                    codTimeType: 3,
                    paymentType: e.paymentType,
                    areaCode: e.areaCode,
                    overseas: e.overseas,
                    phone: e.phone,
                    eid: e.eid,
                    fp: e.fp,
                    token: e.token,
                    pru: e.pru,
                    provinceName: e.provinceName,
                    cityName: e.cityName,
                    countyName: e.countyName,
                    townName: e.townName,
                    sk: e.sk
                }
            }).then(r)
        }
        function C() {
            return i()({
                url: "/seckillnew/areaService/pc/getProvinceList.action",
                method: "POST"
            }).then(r)
        }
        function b(e) {
            return i()({
                url: "/seckillnew/areaService/pc/getCityList.action",
                method: "POST",
                transformRequest: [function(e) {
                    return c.a.stringify(e)
                }],
                data: {
                    provinceId: e
                }
            }).then(r)
        }
        function E(e) {
            return i()({
                url: "/seckillnew/areaService/pc/getCountryList.action",
                method: "POST",
                transformRequest: [function(e) {
                    return c.a.stringify(e)
                }],
                data: {
                    cityId: e
                }
            }).then(r)
        }
        function N(e) {
            return i()({
                url: "/seckillnew/areaService/pc/getTownList.action",
                method: "POST",
                transformRequest: [function(e) {
                    return c.a.stringify(e)
                }],
                data: {
                    countyId: e
                }
            }).then(r)
        }
        function k(e) {
            return i()({
                url: "/seckillnew/addrService/pc/editAddress.action",
                method: "POST",
                transformRequest: [function(e) {
                    return c.a.stringify(e)
                }],
                data: {
                    id: e.id,
                    name: e.name,
                    provinceId: e.provinceId,
                    cityId: e.cityId,
                    countyId: e.countyId,
                    townId: e.townId,
                    addressDetail: e.addressDetail,
                    mobile: e.mobile,
                    phone: e.phone,
                    email: e.email,
                    postCode: e.postCode,
                    addressDefault: e.addressDefault,
                    addressName: e.addressName,
                    overseas: e.overseas,
                    areaCode: e.areaCode
                }
            }).then(r)
        }
        function I(e) {
            return i()({
                url: "/seckillnew/addrService/pc/addAddress.action",
                method: "POST",
                transformRequest: [function(e) {
                    return c.a.stringify(e)
                }],
                data: {
                    name: e.name,
                    provinceId: e.provinceId,
                    cityId: e.cityId,
                    countyId: e.countyId,
                    townId: e.townId,
                    addressDetail: e.addressDetail,
                    mobile: e.mobile,
                    phone: e.phone,
                    email: e.email,
                    postCode: e.postCode,
                    addressDefault: e.addressDefault,
                    addressName: e.addressName,
                    overseas: e.overseas,
                    areaCode: e.areaCode
                }
            }).then(r)
        }
        function O() {
            return i()({
                url: "/seckillnew/addrService/pc/getAddressList.action",
                method: "POST"
            }).then(r)
        }
        function w(e) {
            return i()({
                url: "/seckillnew/addrService/pc/selectAddress.action",
                method: "POST",
                transformRequest: [function(e) {
                    return c.a.stringify(e)
                }],
                data: {
                    addressId: e
                }
            }).then(r)
        }
        function D(e) {
            return i()({
                url: "/seckillnew/addrService/pc/setDefaultAddress.action",
                method: "POST",
                transformRequest: [function(e) {
                    return c.a.stringify(e)
                }],
                data: {
                    addressId: e
                }
            }).then(r)
        }
        function S(e) {
            return i()({
                url: "/seckillnew/addrService/pc/delAddress.action",
                method: "POST",
                transformRequest: [function(e) {
                    return c.a.stringify(e)
                }],
                data: {
                    addressId: e
                }
            }).then(r)
        }
        function j(e) {
            return i()({
                url: "/seckillnew/invoiceService/pc/getInvoiceInfo.action",
                method: "POST",
                transformRequest: [function(e) {
                    return c.a.stringify(e)
                }],
                data: {
                    sku: e
                }
            }).then(r)
        }
        function F(e) {
            return i()({
                url: "/seckillnew/invoiceService/pc/selectInvoiceInfo.action",
                method: "POST",
                transformRequest: [function(e) {
                    return c.a.stringify(e)
                }],
                data: {
                    invoiceContentType: 1,
                    invoiceEmail: e.invoiceEmail,
                    invoicePhone: e.invoicePhone,
                    invoicePhoneKey: e.invoicePhoneKey,
                    invoiceTitle: e.invoiceTitle,
                    invoiceCompany: e.invoiceCompany,
                    invoiceCode: e.invoiceCode,
                    invoiceType: 3
                }
            }).then(r)
        }
        function L(e) {
            return i()({
                url: "/seckillnew/invoiceService/pc/checkTaxCode.action",
                method: "POST",
                transformRequest: [function(e) {
                    return c.a.stringify(e)
                }],
                data: {
                    taxCode: e
                }
            }).then()
        }
        function T() {
            return i()({
                url: "/seckillnew/payService/pc/checkPassWord.action",
                method: "POST"
            }).then(r)
        }
        function P() {
            return i()({
                url: "/seckillnew/couponService/pc/getCouponList.action",
                method: "POST"
            }).then(r)
        }
        function x() {
            return i()({
                url: "/seckillnew/giftCardService/pc/getGiftCardList.action",
                method: "POST"
            }).then(r)
        }
        function M() {
            return i()({
                url: "/seckillnew/jBeanService/pc/getJBeanInfo.action",
                method: "POST"
            }).then(r)
        }
        function U(e) {
            return i()({
                url: "/seckillnew/couponService/pc/useCoupon.action",
                method: "POST",
                transformRequest: [function(e) {
                    return c.a.stringify(e)
                }],
                data: {
                    couponId: e.couponId,
                    couponKey: e.couponKey,
                    type: e.type
                }
            }).then(r)
        }
        function _(e) {
            return i()({
                url: "/seckillnew/giftCardService/pc/useGiftCard.action",
                method: "POST",
                transformRequest: [function(e) {
                    return c.a.stringify(e)
                }],
                data: {
                    giftCardId: e.giftCardId,
                    giftCardKey: e.giftCardKey,
                    type: e.type
                }
            }).then(r)
        }
        function A(e) {
            return i()({
                url: "/seckillnew/jBeanService/pc/useJBean.action",
                method: "POST",
                transformRequest: [function(e) {
                    return c.a.stringify(e)
                }],
                data: {
                    useCount: e
                }
            }).then(r)
        }
    },
    dB4L: function(e, t, a) {
        "use strict";
        (function(e) {
            var n = a("1OyB"),
                i = a("vuIU"),
                s = a("md7G"),
                c = a("foSv"),
                o = a("Ji7U"),
                r = a("q1tI"),
                l = a.n(r),
                d = (a("I7hh"), a("aAPB")),
                u = a("KOhR");
            a("rAyO");
            function m() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }
            var p = function(t) {
                Object(o.a)(p, t);
                var a,
                    r = (a = p, function() {
                        var e,
                            t = Object(c.a)(a);
                        if (m()) {
                            var n = Object(c.a)(this).constructor;
                            e = Reflect.construct(t, arguments, n)
                        } else
                            e = t.apply(this, arguments);
                        return Object(s.a)(this, e)
                    });
                function p(e) {
                    var t;
                    return Object(n.a)(this, p), (t = r.call(this, e)).state = {
                        name: Object(u.a)(t.props.addressData, "name", ""),
                        provinceId: Object(u.a)(t.props.addressData, "provinceId", 0),
                        cityId: Object(u.a)(t.props.addressData, "cityId", 0),
                        countyId: Object(u.a)(t.props.addressData, "countyId", 0),
                        townId: Object(u.a)(t.props.addressData, "townId", 0),
                        addressDetail: Object(u.a)(t.props.addressData, "addressDetail", ""),
                        mobile: Object(u.a)(t.props.addressData, "mobile", ""),
                        phone: Object(u.a)(t.props.addressData, "phone", ""),
                        email: Object(u.a)(t.props.addressData, "email", ""),
                        addressDefault: Object(u.a)(t.props.addressData, "addressDefault", !1),
                        addressName: Object(u.a)(t.props.addressData, "addressName", ""),
                        postCode: Object(u.a)(t.props.addressData, "postCode", ""),
                        overseas: Object(u.a)(t.props.addressData, "overseas", 0),
                        isFirst: !0,
                        isHover: !1,
                        areaCode: "0086",
                        zoneType: 0,
                        isAreaChoose: !1,
                        areaCheck: "",
                        nameCheck: "",
                        addressDetailCheck: "",
                        mobileCheck: "",
                        phoneCheck: "",
                        emailCheck: "",
                        postCodeCheck: "",
                        addressNameCheck: "",
                        addressLevel: 0,
                        provinceList: [],
                        cityList: [],
                        countryList: [],
                        townList: [],
                        provinceName: "请选择",
                        cityName: "请选择",
                        countryName: "请选择",
                        townName: "请选择",
                        chooseName: "--请选择--"
                    }, t
                }
                return Object(i.a)(p, [{
                    key: "componentDidMount",
                    value: function() {
                        this.getProvince()
                    }
                }, {
                    key: "getProvince",
                    value: function() {
                        var e = this;
                        Object(d.q)().then((function(t) {
                            t && t.length > 0 && (e.setState({
                                provinceList: t
                            }), Object(u.b)(e, "provinceList", t), e.props.addressId && e.props.addressData && t.map((function(t) {
                                e.props.addressData.provinceId == t.id && e.chooseProvince(t)
                            })))
                        }))
                    }
                }, {
                    key: "getCity",
                    value: function(e) {
                        var t = this;
                        Object(d.h)(e).then((function(e) {
                            e && e.length > 0 && (t.setState({
                                cityList: e
                            }), t.state.isFirst && t.props.addressId && t.props.addressData && e.map((function(e) {
                                t.props.addressData.cityId == e.id && t.chooseCity(e)
                            })))
                        }))
                    }
                }, {
                    key: "getCountry",
                    value: function(e) {
                        var t = this;
                        Object(d.i)(e).then((function(e) {
                            e && e.length > 0 ? (t.setState({
                                countryList: e
                            }), t.state.isFirst && t.props.addressId && t.props.addressData && e.map((function(e) {
                                t.props.addressData.countyId == e.id && t.chooseCountry(e)
                            }))) : t.setState({
                                addressLevel: 1,
                                chooseName: "".concat(t.state.provinceName, "/").concat(t.state.cityName),
                                isHover: !1,
                                isAreaChoose: !0
                            })
                        }))
                    }
                }, {
                    key: "getTown",
                    value: function(e) {
                        var t = this;
                        Object(d.r)(e).then((function(e) {
                            e && e.length > 0 ? (t.setState({
                                townList: e
                            }), t.state.isFirst && t.props.addressId && t.props.addressData && e.map((function(e) {
                                t.props.addressData.townId == e.id && t.chooseTown(e)
                            }))) : t.setState({
                                addressLevel: 2,
                                chooseName: "".concat(t.state.provinceName, "/").concat(t.state.cityName, "/").concat(t.state.countryName),
                                isHover: !1,
                                isAreaChoose: !0
                            })
                        }))
                    }
                }, {
                    key: "chooseProvince",
                    value: function(e) {
                        this.getCity(e.id), this.setState({
                            addressLevel: 1,
                            provinceName: e.name,
                            cityName: "请选择",
                            countryName: "请选择",
                            townName: "请选择",
                            provinceId: e.id,
                            cityId: 0,
                            countyId: 0,
                            townId: 0,
                            zoneType: 0,
                            areaCode: "0086",
                            overseas: 0
                        }), 32 == e.id ? this.setState({
                            zoneType: 1,
                            areaCode: "886"
                        }) : 52993 == e.id ? this.setState({
                            zoneType: 1
                        }) : 53283 == e.id && this.setState({
                            zoneType: 2,
                            overseas: 1
                        })
                    }
                }, {
                    key: "chooseCity",
                    value: function(e) {
                        this.getCountry(e.id), this.setState({
                            addressLevel: 2,
                            cityName: e.name,
                            countryName: "请选择",
                            townName: "请选择",
                            cityId: e.id,
                            countyId: 0,
                            townId: 0
                        }), 1 == this.state.zoneType ? 52994 == e.id ? this.setState({
                            areaCode: "852"
                        }) : this.setState({
                            areaCode: "853"
                        }) : 2 == this.state.zoneType && this.setState({
                            areaCode: e.areaCode
                        })
                    }
                }, {
                    key: "chooseCountry",
                    value: function(e) {
                        this.getTown(e.id), this.setState({
                            addressLevel: 3,
                            countryName: e.name,
                            townName: "请选择",
                            countyId: e.id,
                            townId: 0
                        })
                    }
                }, {
                    key: "chooseTown",
                    value: function(e) {
                        this.setState({
                            townName: e.name,
                            townId: e.id,
                            chooseName: "".concat(this.state.provinceName, "/").concat(this.state.cityName, "/").concat(this.state.countryName, "/").concat(e.name),
                            isHover: !1,
                            isAreaChoose: !0
                        })
                    }
                }, {
                    key: "addAddress",
                    value: function() {
                        var t = this,
                            a = "",
                            n = "",
                            i = "",
                            s = "",
                            c = "",
                            o = "",
                            r = "",
                            l = "";
                        this.state.isAreaChoose || (i = e.constants.checkText.areaCheck), this.state.name ? 2 == this.state.zoneType ? e.constants.onlyEngReg.test(this.state.name) ? this.state.name.length > 50 && (l = e.constants.checkText.nameCheckLengthOverseas) : l = e.constants.checkText.nameCheckOverseas : e.constants.invalidSymbolReg.test(this.state.name) ? l = e.constants.checkText.nameCheckIllegal : this.state.name.length > 25 && (l = e.constants.checkText.nameCheckLength) : l = e.constants.checkText.nameCheck, this.state.addressDetail ? 2 == this.state.zoneType ? e.constants.overseasAddressReg.test(this.state.addressDetail) ? this.state.addressDetail.length > 100 && (a = e.constants.checkText.addressDetailCheckLengthOverseas) : a = e.constants.checkText.addressDetailCheckOverseas : e.constants.invalidSymbolReg.test(this.state.addressDetail) ? a = e.constants.checkText.addressDetailCheckIllegal : this.state.addressDetail.length > 50 && (a = e.constants.checkText.addressDetailCheckLength) : a = e.constants.checkText.addressDetailCheck, this.state.mobile ? this.state.zoneType ? e.constants.overseasMobileReg.test(this.state.mobile) || (c = e.constants.checkText.mobileCheckIllegal) : e.constants.chinaMobileReg.test(this.state.mobile) || (c = e.constants.checkText.mobileCheckIllegal) : c = e.constants.checkText.mobileCheck, this.state.phone && (e.constants.fixedTelephoneReg.test(this.state.phone) || (o = e.constants.checkText.phoneCheck)), this.state.zoneType > 0 && (this.state.postCode ? e.constants.postCodeReg.test(this.state.postCode) || (r = e.constants.checkText.postCodeCheckIllegal) : r = e.constants.checkText.postCodeCheck, this.state.email || (s = e.constants.checkText.emailCheck)), this.state.addressName && e.constants.invalidSymbolReg.test(this.state.addressName) && (n = e.constants.checkText.addressNameCheck), this.state.email && (s = e.constants.emailReg.test(this.state.email) ? "" : e.constants.checkText.emailCheckIllegal), console.log(s, "emailcheck"), this.setState({
                            areaCheck: i,
                            nameCheck: l,
                            addressDetailCheck: a,
                            mobileCheck: c,
                            phoneCheck: o,
                            addressNameCheck: n,
                            emailCheck: s,
                            postCodeCheck: r
                        }, (function() {
                            if ("" == i && "" == l && "" == a && "" == c && "" == o && "" == n && "" == s && "" == r)
                                if (t.props.addressId) {
                                    var e = {
                                        id: t.props.addressId,
                                        name: t.state.name,
                                        provinceId: t.state.provinceId,
                                        cityId: t.state.cityId,
                                        countyId: t.state.countyId,
                                        townId: t.state.townId,
                                        addressDetail: t.state.addressDetail,
                                        mobile: t.state.mobile,
                                        phone: t.state.phone,
                                        email: t.state.email,
                                        postCode: t.state.postCode,
                                        addressDefault: t.state.addressDefault,
                                        addressName: t.state.addressName,
                                        overseas: t.state.overseas,
                                        areaCode: t.state.areaCode
                                    };
                                    Object(d.f)(e).then((function(e) {
                                        e && t.props.handleHide(!0)
                                    }))
                                } else {
                                    var u = {
                                        name: t.state.name,
                                        provinceId: t.state.provinceId,
                                        cityId: t.state.cityId,
                                        countyId: t.state.countyId,
                                        townId: t.state.townId,
                                        addressDetail: t.state.addressDetail,
                                        mobile: t.state.mobile,
                                        phone: t.state.phone,
                                        email: t.state.email,
                                        postCode: t.state.postCode,
                                        addressDefault: t.state.addressDefault,
                                        addressName: t.state.addressName,
                                        overseas: t.state.overseas,
                                        areaCode: t.state.areaCode
                                    };
                                    Object(d.a)(u).then((function(e) {
                                        e && t.props.handleHide(!0)
                                    }))
                                }
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.state,
                            a = t.isHover,
                            n = t.addressLevel,
                            i = t.provinceList,
                            s = t.cityList,
                            c = t.countryList,
                            o = t.townList,
                            r = t.zoneType,
                            d = t.areaCode,
                            m = t.provinceName,
                            p = t.cityName,
                            f = t.countryName,
                            h = t.townName,
                            v = t.chooseName,
                            g = t.nameCheck,
                            y = t.addressDetailCheck,
                            C = t.addressNameCheck,
                            b = t.mobileCheck,
                            E = t.phoneCheck,
                            N = t.emailCheck,
                            k = t.postCodeCheck,
                            I = t.areaCheck;
                        return l.a.createElement("div", {
                            className: "address-form"
                        }, l.a.createElement("div", {
                            className: "form-new"
                        }, l.a.createElement("div", {
                            className: "item mt10"
                        }, l.a.createElement("span", {
                            className: "label"
                        }, l.a.createElement("em", null, "*"), "所在地区"), l.a.createElement("div", {
                            className: "ui-area-wrap fl ui-area-oversea-mode has-scrollbar ".concat(a ? "hover" : ""),
                            onMouseEnter: function() {
                                Object(u.b)(e, "isHover", !0)
                            }
                        }, l.a.createElement("div", {
                            className: "ui-area-text-wrap"
                        }, l.a.createElement("div", {
                            className: "ui-area-text"
                        }, v), l.a.createElement("b", null)), l.a.createElement("div", {
                            className: "ui-area-content-wrap"
                        }, l.a.createElement("div", {
                            className: "ui-area-tab"
                        }, l.a.createElement("span", {
                            className: 0 == n ? "ui-switchable-item ui-area-current" : "ui-switchable-item",
                            onClick: function() {
                                return Object(u.b)(e, "addressLevel", 0)
                            }
                        }, l.a.createElement("em", null, m), l.a.createElement("i", null)), n > 0 && l.a.createElement("span", {
                            className: 1 == n ? "ui-switchable-item ui-area-current" : "ui-switchable-item",
                            onClick: function() {
                                return Object(u.b)(e, "addressLevel", 1)
                            }
                        }, l.a.createElement("em", null, p), l.a.createElement("i", null)), n > 1 && l.a.createElement("span", {
                            className: 2 == n ? "ui-switchable-item ui-area-current" : "ui-switchable-item",
                            onClick: function() {
                                return Object(u.b)(e, "addressLevel", 2)
                            }
                        }, l.a.createElement("em", null, f), l.a.createElement("i", null)), n > 2 && l.a.createElement("span", {
                            className: 3 == n ? "ui-switchable-item ui-area-current" : "ui-switchable-item",
                            onClick: function() {
                                return Object(u.b)(e, "addressLevel", 3)
                            }
                        }, l.a.createElement("em", null, h), l.a.createElement("i", null))), l.a.createElement("div", {
                            className: "ui-area-content"
                        }, 0 == n && l.a.createElement("div", {
                            className: "ui-switchable-panel"
                        }, l.a.createElement("ul", {
                            className: "ui-area-content-list"
                        }, i.map((function(t) {
                            return l.a.createElement("li", {
                                key: t.id,
                                onClick: function() {
                                    return e.chooseProvince(t)
                                }
                            }, l.a.createElement("span", null, t.name))
                        })))), 1 == n && l.a.createElement("div", {
                            className: "ui-switchable-panel"
                        }, l.a.createElement("ul", {
                            className: "ui-area-content-list"
                        }, s.map((function(t) {
                            return l.a.createElement("li", {
                                key: t.id,
                                className: t.name.length > 6 ? "long-area" : "",
                                onClick: function() {
                                    return e.chooseCity(t)
                                }
                            }, l.a.createElement("span", null, t.name))
                        })))), 2 == n && l.a.createElement("div", {
                            className: "ui-switchable-panel"
                        }, l.a.createElement("ul", {
                            className: "ui-area-content-list"
                        }, c.map((function(t) {
                            return l.a.createElement("li", {
                                key: t.id,
                                className: t.name.length > 6 ? "long-area" : "",
                                onClick: function() {
                                    return e.chooseCountry(t)
                                }
                            }, l.a.createElement("span", null, t.name))
                        })))), 3 == n && l.a.createElement("div", {
                            className: "ui-switchable-panel"
                        }, l.a.createElement("ul", {
                            className: "ui-area-content-list"
                        }, o.map((function(t) {
                            return l.a.createElement("li", {
                                key: t.id,
                                className: t.name.length > 6 ? "long-area" : "",
                                onClick: function() {
                                    return e.chooseTown(t)
                                }
                            }, l.a.createElement("span", null, t.name))
                        })))), l.a.createElement("div", {
                            className: "ui-area-close",
                            onClick: function() {
                                Object(u.b)(e, "isHover", !1)
                            }
                        })))), "" != I && l.a.createElement("span", {
                            className: "error-msg message"
                        }, I)), l.a.createElement("div", {
                            className: "item"
                        }, l.a.createElement("span", {
                            className: "label"
                        }, l.a.createElement("em", null, "*"), "收货人"), l.a.createElement("div", {
                            className: "fl"
                        }, l.a.createElement("input", {
                            type: "text",
                            className: "itxt",
                            maxLength: "50",
                            defaultValue: this.state.name,
                            onInput: function(t) {
                                return Object(u.b)(e, "name", t.target.value)
                            }
                        }), "" != g && l.a.createElement("span", {
                            className: "error-msg message"
                        }, g))), l.a.createElement("div", {
                            className: "item"
                        }, l.a.createElement("span", {
                            className: "label"
                        }, l.a.createElement("em", null, "*"), "详细地址"), l.a.createElement("div", {
                            className: "fl"
                        }, l.a.createElement("input", {
                            type: "text",
                            className: "itxt",
                            maxLength: "100",
                            defaultValue: this.state.addressDetail,
                            onInput: function(t) {
                                return Object(u.b)(e, "addressDetail", t.target.value)
                            }
                        }), "" != y && l.a.createElement("span", {
                            className: "error-msg message"
                        }, y))), l.a.createElement("div", {
                            className: "item"
                        }, l.a.createElement("span", {
                            className: "label"
                        }, l.a.createElement("em", null, "*"), "手机号码"), l.a.createElement("div", {
                            className: "fl"
                        }, l.a.createElement("span", {
                            className: "telnum-prefix"
                        }, d), l.a.createElement("span", {
                            className: "telnum-prefix-gap"
                        }), l.a.createElement("input", {
                            type: "text",
                            className: "itxt itxt01",
                            maxLength: "15",
                            defaultValue: this.state.mobile,
                            onInput: function(t) {
                                return Object(u.b)(e, "mobile", t.target.value)
                            }
                        }), "" != b && l.a.createElement("span", {
                            className: "error-msg message"
                        }, b))), l.a.createElement("div", {
                            className: "item"
                        }, l.a.createElement("span", {
                            className: "label"
                        }, l.a.createElement("em", null, "  "), "固定电话"), l.a.createElement("div", {
                            className: "fl"
                        }, l.a.createElement("span", {
                            className: "telnum-prefix"
                        }, d), l.a.createElement("span", {
                            className: "telnum-prefix-gap"
                        }), l.a.createElement("input", {
                            type: "text",
                            className: "itxt itxt01",
                            maxLength: "20",
                            defaultValue: this.state.phone,
                            onInput: function(t) {
                                return Object(u.b)(e, "phone", t.target.value)
                            }
                        }), "" != E && l.a.createElement("span", {
                            className: "error-msg message"
                        }, E))), r > 0 && l.a.createElement("div", {
                            className: "item"
                        }, l.a.createElement("span", {
                            className: "label"
                        }, l.a.createElement("em", null, "*"), "邮政编码"), l.a.createElement("div", {
                            className: "fl"
                        }, l.a.createElement("input", {
                            type: "text",
                            className: "itxt",
                            maxLength: "20",
                            defaultValue: this.state.postCode,
                            onInput: function(t) {
                                return Object(u.b)(e, "postCode", t.target.value)
                            }
                        }), "" != k && l.a.createElement("span", {
                            className: "error-msg message"
                        }, k))), l.a.createElement("div", {
                            className: "item"
                        }, l.a.createElement("span", {
                            className: "label"
                        }, r > 0 ? l.a.createElement("em", null, "*") : l.a.createElement("em", null, "  "), "邮箱地址"), l.a.createElement("div", {
                            className: "fl"
                        }, l.a.createElement("input", {
                            type: "text",
                            className: "itxt",
                            maxLength: "50",
                            defaultValue: this.state.email,
                            onInput: function(t) {
                                return Object(u.b)(e, "email", t.target.value)
                            }
                        }), "" != N && l.a.createElement("span", {
                            className: "error-msg message"
                        }, N), l.a.createElement("div", {
                            className: "ftx-03"
                        }, "用来接收订单提醒邮件，便于您及时了解订单状态"))), l.a.createElement("div", {
                            className: "item",
                            id: "alias_div"
                        }, l.a.createElement("span", {
                            className: "label"
                        }, l.a.createElement("em", null, "  "), "地址别名"), l.a.createElement("div", {
                            className: "fl"
                        }, l.a.createElement("input", {
                            type: "text",
                            className: "itxt",
                            maxLength: "20",
                            defaultValue: this.state.addressName,
                            onInput: function(t) {
                                return Object(u.b)(e, "addressName", t.target.value)
                            }
                        }), "" != C && l.a.createElement("span", {
                            className: "error-msg message"
                        }, C), l.a.createElement("span", {
                            className: "consignee-tag-info"
                        }, "建议填写常用名称")), l.a.createElement("div", {
                            className: "consignee-tag fl ml10"
                        }, l.a.createElement("span", {
                            onClick: function() {
                                return Object(u.b)(e, "addressName", "家里")
                            }
                        }, "家里"), l.a.createElement("span", {
                            onClick: function() {
                                return Object(u.b)(e, "addressName", "父母家")
                            }
                        }, "父母家"), l.a.createElement("span", {
                            onClick: function() {
                                return Object(u.b)(e, "addressName", "公司")
                            }
                        }, "公司"))), l.a.createElement("div", {
                            className: "item mt20"
                        }, l.a.createElement("span", {
                            className: "label"
                        }, " "), l.a.createElement("div", {
                            className: "fl"
                        }, l.a.createElement("span", {
                            className: "btn-1",
                            onClick: function() {
                                return e.addAddress()
                            }
                        }, "保存收货人信息")))))
                    }
                }]), p
            }(l.a.Component);
            t.a = p
        }).call(this, a("yLpj"))
    },
    eFLQ: function(e, t, a) {},
    lfzV: function(e, t, a) {
        "use strict";
        (function(e) {
            var n = a("1OyB"),
                i = a("vuIU"),
                s = a("md7G"),
                c = a("foSv"),
                o = a("Ji7U"),
                r = a("q1tI"),
                l = a.n(r),
                d = (a("lt96"), a("re60"));
            a("rAyO");
            function u() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }
            var m = function(t) {
                Object(o.a)(m, t);
                var a,
                    r = (a = m, function() {
                        var e,
                            t = Object(c.a)(a);
                        if (u()) {
                            var n = Object(c.a)(this).constructor;
                            e = Reflect.construct(t, arguments, n)
                        } else
                            e = t.apply(this, arguments);
                        return Object(s.a)(this, e)
                    });
                function m(e) {
                    var t;
                    return Object(n.a)(this, m), (t = r.call(this, e)).state = {
                        isShowWrap: !1
                    }, t
                }
                return Object(i.a)(m, [{
                    key: "handleShowWrap",
                    value: function() {
                        this.setState({
                            isShowWrap: !0
                        })
                    }
                }, {
                    key: "handleHideWrap",
                    value: function(e) {
                        this.setState({
                            isShowWrap: !1
                        }), e && this.props.changeInvoice()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            a = this.props,
                            n = a.invoiceData,
                            i = a.invoiceType;
                        return l.a.createElement("div", null, l.a.createElement("div", {
                            className: "step-tit",
                            id: "invoice-step"
                        }, l.a.createElement("h3", null, "发票信息"), l.a.createElement("div", {
                            className: "tips-new-white"
                        }, l.a.createElement("b", null), l.a.createElement("span", null, l.a.createElement("i", null), e.constants.invoiceTipText.taxCode))), l.a.createElement("div", {
                            className: "step-cont invoice-cont"
                        }, 1 == i && l.a.createElement("div", {
                            className: "invoice-cont"
                        }, l.a.createElement("span", {
                            className: "mr10"
                        }, "电子普通发票", l.a.createElement("i", {
                            className: "invoice-tips-icon"
                        }, l.a.createElement("span", {
                            className: "tip-cont"
                        }, e.constants.invoiceTipText.invoiceTip))), l.a.createElement("span", {
                            className: "mr10"
                        }, 4 == n.invoiceTitle ? "个人" : n.invoiceCompany), l.a.createElement("span", {
                            className: "mr10"
                        }, " 商品明细"), l.a.createElement("a", {
                            className: "ftx-05 invoice-edit",
                            onClick: function() {
                                return t.handleShowWrap()
                            }
                        }, "修改")), 0 == i && l.a.createElement("div", {
                            className: "invoice-cont"
                        }, "不开发票")), this.state.isShowWrap && l.a.createElement(d.a, {
                            wrapType: 3,
                            addressId: 0,
                            handleHideWrap: function(e) {
                                return t.handleHideWrap(e)
                            }
                        }))
                    }
                }]), m
            }(l.a.Component);
            t.a = m
        }).call(this, a("yLpj"))
    },
    lt96: function(e, t, a) {},
    mZCW: function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("1OyB"),
            i = a("vuIU"),
            s = a("JX7q"),
            c = a("md7G"),
            o = a("foSv"),
            r = a("Ji7U"),
            l = a("q1tI"),
            d = a.n(l),
            u = a("i8i4"),
            m = a.n(u),
            p = (a("Mc1x"), a("X9V+"), a("BN68"), function(e) {
                return d.a.createElement("div", {
                    className: "w w1 header clearfix"
                }, d.a.createElement("div", {
                    id: "logo"
                }, d.a.createElement("a", {
                    href: "//www.jd.com/",
                    className: "link1",
                    target: "_blank"
                }, d.a.createElement("img", {
                    src: "//misc.360buyimg.com/lib/img/e/logo-201305.png",
                    alt: "京东商城"
                })), d.a.createElement("a", {
                    href: "#none",
                    className: "link2"
                }, d.a.createElement("b", null), '"结算页"')), d.a.createElement("div", {
                    className: "stepflex",
                    id: "#sflex03"
                }, d.a.createElement("dl", {
                    className: "first done"
                }, d.a.createElement("dt", {
                    className: "s-num"
                }, "1"), d.a.createElement("dd", {
                    className: "s-text"
                }, "1.商品详情", d.a.createElement("s", null), d.a.createElement("b", null))), d.a.createElement("dl", {
                    className: "normal doing"
                }, d.a.createElement("dt", {
                    className: "s-num"
                }, "2"), d.a.createElement("dd", {
                    className: "s-text"
                }, "2.填写核对订单信息", d.a.createElement("s", null), d.a.createElement("b", null))), d.a.createElement("dl", {
                    className: "normal last"
                }, d.a.createElement("dt", {
                    className: "s-num"
                }, "3"), d.a.createElement("dd", {
                    className: "s-text"
                }, "3.成功提交订单", d.a.createElement("s", null), d.a.createElement("b", null)))))
            }),
            f = a("9KUs"),
            h = a("rePB"),
            v = (a("t6rr"), a("re60")),
            g = a("aAPB"),
            y = a("KOhR");
        function C(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, n)
            }
            return a
        }
        function b(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? C(Object(a), !0).forEach((function(t) {
                    Object(h.a)(e, t, a[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : C(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }))
            }
            return e
        }
        function E() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }
        var N = function(e) {
            Object(r.a)(s, e);
            var t,
                a = (t = s, function() {
                    var e,
                        a = Object(o.a)(t);
                    if (E()) {
                        var n = Object(o.a)(this).constructor;
                        e = Reflect.construct(a, arguments, n)
                    } else
                        e = a.apply(this, arguments);
                    return Object(c.a)(this, e)
                });
            function s(e) {
                var t;
                return Object(n.a)(this, s), (t = a.call(this, e)).state = {
                    addressList: [],
                    defaultAddress: {},
                    defaultAddressId: "",
                    selectedAddressId: "",
                    isShowMore: !1,
                    showEditWrap: !1,
                    isShowWrap: !1,
                    wrapType: -1,
                    addressId: 0,
                    isChangeAddress: !1,
                    addressData: {
                        name: "",
                        provinceId: 0,
                        cityId: 0,
                        countyId: 0,
                        townId: 0,
                        addressDetail: "",
                        mobile: "",
                        phone: "",
                        email: "",
                        addressDefault: !1,
                        addressName: "",
                        postCode: "",
                        overseas: 0,
                        areaCode: "0086"
                    }
                }, t
            }
            return Object(i.a)(s, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.state.isChangeAddress || this.setDefaultAddress(e)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.getAddressList()
                }
            }, {
                key: "setDefaultAddress",
                value: function(e) {
                    this.setState({
                        defaultAddress: e.defaultAddress,
                        defaultAddressId: Object(y.a)(e.defaultAddress, "id", ""),
                        selectedAddressId: Object(y.a)(e.defaultAddress, "id", "")
                    })
                }
            }, {
                key: "getAddressList",
                value: function() {
                    var e = this;
                    Object(g.g)().then((function(t) {
                        t && t.length > 0 && e.setState({
                            addressList: t
                        })
                    }))
                }
            }, {
                key: "selectAddress",
                value: function(e) {
                    var t = this;
                    this.setState({
                        selectedAddressId: e,
                        isChangeAddress: !0
                    }), Object(g.s)(e).then((function(e) {
                        e && t.props.changeAddress()
                    }))
                }
            }, {
                key: "handletoggleShowMore",
                value: function() {
                    this.setState({
                        isShowMore: !this.state.isShowMore
                    }), this.setDefaultAddress(this.props)
                }
            }, {
                key: "handshowDefaulewrap",
                value: function(e) {
                    var t = this;
                    Object(g.u)(e).then((function(a) {
                        if (a) {
                            t.selectAddress(e);
                            var n = t.state.defaultAddress,
                                i = t.state.addressList;
                            i.map((function(t) {
                                t.id == e ? t.defaultAddress = !0 : t.defaultAddress = !1
                            })), t.setState({
                                addressList: i,
                                defaultAddress: b({}, n, {
                                    defaultAddress: e == t.state.defaultAddressId
                                })
                            })
                        }
                    }))
                }
            }, {
                key: "handshowEditWrap",
                value: function(e) {
                    var t = this;
                    this.handleShowWrap(2, e), this.state.addressList.map((function(a) {
                        a.id == e && t.setState({
                            addressData: {
                                name: Object(y.a)(a, "name", ""),
                                provinceId: Object(y.a)(a, "provinceId", 0),
                                cityId: Object(y.a)(a, "cityId", 0),
                                countyId: Object(y.a)(a, "countyId", 0),
                                townId: Object(y.a)(a, "townId", 0),
                                addressDetail: Object(y.a)(a, "addressDetail", ""),
                                mobile: Object(y.a)(a, "mobile", ""),
                                phone: Object(y.a)(a, "phone", ""),
                                email: Object(y.a)(a, "email", ""),
                                addressDefault: Object(y.a)(a, "defaultAddress", !1),
                                addressName: Object(y.a)(a, "addressName", ""),
                                postCode: Object(y.a)(a, "postCode", ""),
                                areaCode: Object(y.a)(a, "areaCode", "0086"),
                                overseas: Object(y.a)(a, "overseas", 0)
                            }
                        })
                    }))
                }
            }, {
                key: "handleShowWrap",
                value: function(e, t) {
                    this.setState({
                        isShowWrap: !0,
                        wrapType: e,
                        addressId: t,
                        addressData: {
                            name: "",
                            provinceId: 0,
                            cityId: 0,
                            countyId: 0,
                            townId: 0,
                            addressDetail: "",
                            mobile: "",
                            phone: "",
                            email: "",
                            addressDefault: !1,
                            addressName: "",
                            postCode: "",
                            overseas: 0,
                            areaCode: "0086"
                        }
                    })
                }
            }, {
                key: "handleHideWrap",
                value: function(e) {
                    this.setState({
                        isShowWrap: !1,
                        wrapType: -1,
                        addressId: 0
                    }), e && (this.props.changeAddress(), this.getAddressList(), this.setState({
                        isChangeAddress: !1
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.state,
                        a = t.defaultAddress,
                        n = t.defaultAddressId,
                        i = t.selectedAddressId,
                        s = t.addressList,
                        c = t.isShowMore;
                    return d.a.createElement("div", {
                        className: "address-box"
                    }, d.a.createElement("div", {
                        className: "step-tit"
                    }, d.a.createElement("h3", null, "收货人信息"), d.a.createElement("div", {
                        className: "extra-r"
                    }, d.a.createElement("span", {
                        className: "ftx-05",
                        onClick: function() {
                            return e.handleShowWrap(0, 0)
                        }
                    }, "新增收货地址"))), d.a.createElement("div", {
                        className: "step-cont"
                    }, d.a.createElement("div", {
                        className: "consignee-content"
                    }, d.a.createElement("div", {
                        className: "ui-scrollbar-wrap"
                    }, d.a.createElement("div", {
                        className: "consignee-scrollbar"
                    }, d.a.createElement("div", {
                        className: "ui-scrollbar-main"
                    }, d.a.createElement("div", {
                        className: "consignee-scroll"
                    }, d.a.createElement("div", {
                        className: "consignee-cont"
                    }, d.a.createElement("ul", null, a.id > 0 && d.a.createElement("li", {
                        key: a.id
                    }, d.a.createElement("div", {
                        className: a.id == i ? "consignee-item item-selected" : "consignee-item",
                        onClick: function() {
                            return e.selectAddress(a.id)
                        }
                    }, d.a.createElement("span", null, a.addressName ? a.addressName : a.name), d.a.createElement("b", null)), d.a.createElement("div", {
                        className: "addr-detail"
                    }, d.a.createElement("span", {
                        className: "addr-name"
                    }, a.name), d.a.createElement("span", {
                        className: "addr-info"
                    }, a.provinceName, " ", a.cityName, " ", a.countyName, " ", a.addressDetail), d.a.createElement("span", {
                        className: "addr-tel"
                    }, a.mobile), a.defaultAddress && d.a.createElement("span", {
                        className: "addr-default"
                    }, "默认地址")), d.a.createElement("div", {
                        className: "addr-ops"
                    }, !a.defaultAddress && d.a.createElement("span", {
                        className: "ftx-05",
                        onClick: function() {
                            return e.handshowDefaulewrap(a.id)
                        }
                    }, "设为默认地址"), d.a.createElement("span", {
                        className: "ftx-05 addr-edit",
                        onClick: function() {
                            return e.handshowEditWrap(a.id)
                        }
                    }, "编辑"), a.id != i && d.a.createElement("span", {
                        className: "ftx-05 addr-del",
                        onClick: function() {
                            return e.handleShowWrap(1, a.id)
                        }
                    }, "删除"))), c && s.map((function(t) {
                        if (t.id != n)
                            return d.a.createElement("li", {
                                key: t.id
                            }, d.a.createElement("div", {
                                className: t.id == i ? "consignee-item item-selected" : "consignee-item",
                                onClick: function() {
                                    return e.selectAddress(t.id)
                                }
                            }, d.a.createElement("span", null, t.addressName ? t.addressName : t.name), d.a.createElement("b", null)), d.a.createElement("div", {
                                className: "addr-detail"
                            }, d.a.createElement("span", {
                                className: "addr-name"
                            }, t.name), d.a.createElement("span", {
                                className: "addr-info"
                            }, t.provinceName, " ", t.cityName, " ", t.countyName, " ", t.addressDetail), d.a.createElement("span", {
                                className: "addr-tel"
                            }, t.mobile), t.defaultAddress && d.a.createElement("span", {
                                className: "addr-default"
                            }, "默认地址")), d.a.createElement("div", {
                                className: "addr-ops"
                            }, !t.defaultAddress && d.a.createElement("span", {
                                className: "ftx-05",
                                onClick: function() {
                                    return e.handshowDefaulewrap(t.id)
                                }
                            }, "设为默认地址"), d.a.createElement("span", {
                                className: "ftx-05 addr-edit",
                                onClick: function() {
                                    return e.handshowEditWrap(t.id)
                                }
                            }, "编辑"), t.id != i && d.a.createElement("span", {
                                className: "ftx-05 addr-del",
                                onClick: function() {
                                    return e.handleShowWrap(1, t.id)
                                }
                            }, "删除")))
                    }))))))))), s.length > 1 && d.a.createElement("div", {
                        className: this.state.isShowMore ? "addr-switch switch-off" : "addr-switch switch-off hide",
                        id: "consigneeItemHideClick",
                        onClick: function() {
                            return e.handletoggleShowMore()
                        }
                    }, d.a.createElement("span", null, "收起地址"), d.a.createElement("b", null)), s.length > 1 && d.a.createElement("div", {
                        className: this.state.isShowMore ? "addr-switch switch-on hide" : "addr-switch switch-on",
                        id: "consigneeItemAllClick",
                        onClick: function() {
                            return e.handletoggleShowMore()
                        }
                    }, d.a.createElement("span", null, "更多地址"), d.a.createElement("b", null))), this.state.isShowWrap && d.a.createElement(v.a, {
                        wrapType: this.state.wrapType,
                        addressId: this.state.addressId,
                        addressData: this.state.addressData,
                        handleHideWrap: function(t) {
                            return e.handleHideWrap(t)
                        }
                    }))
                }
            }]), s
        }(d.a.Component);
        a("n1Cs");
        function k() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }
        var I = function(e) {
                Object(r.a)(s, e);
                var t,
                    a = (t = s, function() {
                        var e,
                            a = Object(o.a)(t);
                        if (k()) {
                            var n = Object(o.a)(this).constructor;
                            e = Reflect.construct(a, arguments, n)
                        } else
                            e = a.apply(this, arguments);
                        return Object(c.a)(this, e)
                    });
                function s(e) {
                    return Object(n.a)(this, s), a.call(this, e)
                }
                return Object(i.a)(s, [{
                    key: "render",
                    value: function() {
                        var e = this;
                        return d.a.createElement("div", null, d.a.createElement("div", {
                            className: "step-tit"
                        }, d.a.createElement("h3", null, "支付方式")), d.a.createElement("div", {
                            className: "step-cont"
                        }, d.a.createElement("div", {
                            className: "payment-list",
                            id: ""
                        }, d.a.createElement("div", {
                            className: "list-cont"
                        }, d.a.createElement("ul", {
                            id: "payment-list"
                        }, this.props.payIdList.map((function(t, a) {
                            return d.a.createElement("li", {
                                key: a,
                                "data-key": t.key
                            }, d.a.createElement("div", {
                                className: e.props.payId == t.paymentId ? "payment-item online-payment item-selected" : "payment-item online-payment",
                                payname: t.paymentName,
                                payid: t.paymentId,
                                onClick: function() {
                                    return e.props.choosePayKind(t.paymentId)
                                }
                            }, d.a.createElement("b", null), d.a.createElement("em", {
                                className: 4 == t.paymentId ? "payment-promo" : "hide"
                            }, "惠"), t.paymentName, d.a.createElement("span", {
                                className: 4 == t.paymentId ? "qmark-icon qmark-tip" : "hide"
                            }), d.a.createElement("span", {
                                className: 1 == t.paymentId ? "qmark-icon qmark-tip" : "hide"
                            })))
                        })))))), d.a.createElement("div", {
                            className: "hr"
                        }))
                    }
                }]), s
            }(d.a.Component),
            O = a("5V3I"),
            w = a("lfzV");
        a("sK9h");
        function D() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }
        var S = function(e) {
                Object(r.a)(l, e);
                var t,
                    a = (t = l, function() {
                        var e,
                            a = Object(o.a)(t);
                        if (D()) {
                            var n = Object(o.a)(this).constructor;
                            e = Reflect.construct(a, arguments, n)
                        } else
                            e = a.apply(this, arguments);
                        return Object(c.a)(this, e)
                    });
                function l(e) {
                    var t;
                    return Object(n.a)(this, l), (t = a.call(this, e)).state = {
                        currTab: 0,
                        currOrderTab: 0,
                        giftTab: 0,
                        isCombination: !1,
                        ifShowConpon: !1,
                        purposePrice: 0,
                        couponSize: 0,
                        couldcouponlist: [],
                        eCardsAbleSize: 0,
                        vailablecouponList: [],
                        disablecouponList: [],
                        deliveryCoupons: [],
                        disabledeliveryCoupons: [],
                        giftCard: [],
                        disablegiftCard: [],
                        toggOrdervirtual: !1,
                        conpunIdList: [],
                        freightList: [],
                        giftIdList: [],
                        chooseConpun: [],
                        conpunNun: 0,
                        conpunOffset: 0,
                        chooseFreight: [],
                        freightNum: 0,
                        freightOffset: 0,
                        chooseGiftCard: [],
                        giftCardNum: 0,
                        giftCardOffset: 0,
                        jdBeans: 0,
                        ifBeans: !0,
                        couldBeans: 0,
                        useBeans: 0,
                        beansList: [],
                        beansOffset: 0,
                        allOffset: 0,
                        ifCombination: !0
                    }, t.handleToddleOrdervir = t.handleToddleOrdervir.bind(Object(s.a)(t)), t.tooggleCouponSelect = t.tooggleCouponSelect.bind(Object(s.a)(t)), t.toggleGiftCardSelect = t.toggleGiftCardSelect.bind(Object(s.a)(t)), t.getOrderData = t.getOrderData.bind(Object(s.a)(t)), t.handleBeansChange = t.handleBeansChange.bind(Object(s.a)(t)), t
                }
                return Object(i.a)(l, [{
                    key: "componentDidMount",
                    value: function() {
                        this.handleToddleOrdervir(!0)
                    }
                }, {
                    key: "initVirtualData",
                    value: function(e) {
                        this.getOrderData(e), this.getGiftCardData(e), this.getBeansData(e)
                    }
                }, {
                    key: "setCoupon",
                    value: function(e) {
                        var t = this;
                        Object(g.w)(e).then((function(e) {
                            console.log("up", e), e.success ? t.initVirtualData() : alert(e.message)
                        }))
                    }
                }, {
                    key: "getOrderData",
                    value: function(e) {
                        var t = this;
                        Object(g.j)().then((function(a) {
                            if (console.log("quan", a), a) {
                                var n = [],
                                    i = [],
                                    s = [],
                                    c = [],
                                    o = [],
                                    r = [],
                                    l = [],
                                    d = 0,
                                    u = 0,
                                    m = [];
                                if (a.couponList && a.couponList.length > 0)
                                    for (var p = 0; p < a.couponList.length; p++)
                                        2 == a.couponList[p].couponType ? (s.push(a.couponList[p]), a.couponList[p].selected && (r.push(a.couponList[p].id), l.push(a.couponList[p]), d += a.couponList[p].discount)) : (n.push(a.couponList[p]), a.couponList[p].selected && (c.push(a.couponList[p].id), o.push(a.couponList[p]), u += a.couponList[p].discount, 0 == a.couponList[p].couponType ? t.props.modifyIfUsejq(!0) : t.props.modifyIfUsejq(!1)));
                                if (a.couponListNo && a.couponListNo.length > 0)
                                    for (var f = 0; f < a.couponListNo.length; f++)
                                        2 == a.couponListNo[f].couponType ? m.push(a.couponListNo[f]) : i.push(a.couponListNo[f]);
                                t.setState({
                                    couldcouponlist: a.couponList,
                                    vailablecouponList: n,
                                    disablecouponList: i,
                                    deliveryCoupons: s,
                                    disabledeliveryCoupons: m,
                                    conpunIdList: c,
                                    chooseConpun: o,
                                    conpunNun: o.length,
                                    conpunOffset: u,
                                    freightList: r,
                                    chooseFreight: l,
                                    freightNum: l.length,
                                    freightOffset: d,
                                    couponSize: a.couponSize,
                                    allOffset: u + d + t.state.giftCardOffset + t.state.beansOffset
                                }, (function() {
                                    t.props.calcuOrderPrice(e)
                                }))
                            }
                        }))
                    }
                }, {
                    key: "getGiftCardData",
                    value: function(e) {
                        var t = this;
                        Object(g.l)().then((function(a) {
                            if (console.log("giftcard", a), a) {
                                for (var n = [], i = [], s = 0; s < a.eCardsAbleSize; s++)
                                    a.eCardsAble[s].selected && (n.push(a.eCardsAble[s].id), i.push(a.eCardsAble[s]));
                                t.setState({
                                    giftCard: a.eCardsAble,
                                    disablegiftCard: a.eCardsUnAble.length,
                                    giftCardNum: a.selectedNum,
                                    giftIdList: n,
                                    giftCardOffset: a.selectedMoney,
                                    chooseGiftCard: i,
                                    eCardsAbleSize: a.eCardsAbleSize,
                                    allOffset: t.state.conpunOffset + t.state.freightOffset + a.selectedMoney + t.state.beansOffset
                                }, (function() {
                                    t.props.calcuOrderPrice(e)
                                }))
                            }
                        }))
                    }
                }, {
                    key: "getBeansData",
                    value: function(e) {
                        var t = this;
                        Object(g.o)().then((function(a) {
                            a && (console.log("beans", a), t.setState({
                                jdBeans: a.totalCount ? a.totalCount : 0,
                                couldBeans: a.canUseCount,
                                beansList: a.jingdouGearList ? a.jingdouGearList : [],
                                beansOffset: a.usedCount / a.rate,
                                useBeans: a.usedCount,
                                allOffset: t.state.conpunOffset + t.state.freightOffset + t.state.giftCardOffset + a.usedCount / a.rate
                            }, (function() {
                                t.props.calcuOrderPrice(e)
                            })))
                        }))
                    }
                }, {
                    key: "handleToddleOrdervir",
                    value: function(e) {
                        var t = this,
                            a = !this.state.toggOrdervirtual;
                        this.setState({
                            toggOrdervirtual: a
                        }, (function() {
                            a && t.initVirtualData(e)
                        }))
                    }
                }, {
                    key: "tooggleCouponSelect",
                    value: function(e, t) {
                        var a;
                        if (this.setState({
                            ifCombination: !1
                        }), (a = 1 == t ? this.state.conpunIdList.indexOf(e.id) : this.state.freightList.indexOf(e.id)) > -1 && e.selected) {
                            var n = {
                                couponId: e.id,
                                couponKey: e.key,
                                type: 1
                            };
                            this.setCoupon(n)
                        } else if (-1 != a || e.selected)
                            alert("点击过快，请稍后重试哦");
                        else {
                            var i = {
                                couponId: e.id,
                                couponKey: e.key,
                                type: 0
                            };
                            this.setCoupon(i)
                        }
                    }
                }, {
                    key: "toggleGiftCardSelect",
                    value: function(e) {
                        var t = this;
                        console.log("hahhah", e);
                        var a = this.state.giftIdList.indexOf(e.id),
                            n = this.state.giftIdList,
                            i = this.state.chooseGiftCard;
                        if (a > -1 && e.selected) {
                            var s = {
                                giftCardId: e.id,
                                giftCardKey: e.key,
                                type: 1
                            };
                            Object(g.x)(s).then((function(e) {
                                e && (console.log("gift", e), e.success ? (n.splice(a, 1), i.splice(a, 1), t.initVirtualData()) : alert(e.message))
                            }))
                        } else if (-1 != a || e.selected)
                            alert("点击过快，请稍后重试哦");
                        else {
                            var c = {
                                giftCardId: e.id,
                                giftCardKey: e.key,
                                type: 0
                            };
                            Object(g.x)(c).then((function(a) {
                                a && (console.log("gift", a), a.success ? (n.push(e.id), i.push(e), t.initVirtualData()) : alert(a.message))
                            }))
                        }
                    }
                }, {
                    key: "handleBeansChange",
                    value: function(e) {
                        var t = parseInt(e.target.value / 100);
                        this.setState({
                            useBeans: e.target.value,
                            ifBeans: t > 0
                        }), this.updateBeansdata(e.target.value)
                    }
                }, {
                    key: "updateBeansdata",
                    value: function(e) {
                        var t = this;
                        Object(g.y)(e).then((function(e) {
                            e && (console.log("beansupdate", e), e ? t.initVirtualData() : alert("数据请求异常"))
                        }))
                    }
                }, {
                    key: "changeTab",
                    value: function(e) {
                        this.setState({
                            currTab: e
                        }), 0 == e ? this.getOrderData() : 1 == e ? this.getGiftCardData() : 2 == e && this.getBeansData()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return d.a.createElement("div", {
                            id: "quanTab"
                        }, d.a.createElement("div", {
                            className: this.state.toggOrdervirtual ? "step-tit step-toggle-on" : "step-tit step-toggle-off"
                        }, d.a.createElement("h3", null, "使用优惠/礼品卡/抵用"), d.a.createElement("i", {
                            onClick: this.handleToddleOrdervir
                        })), d.a.createElement("div", {
                            className: this.state.toggOrdervirtual ? "step-cont order-virtual" : "hide"
                        }, d.a.createElement("div", {
                            className: "order-virtual-tabs"
                        }, d.a.createElement("ul", null, d.a.createElement("li", {
                            className: 0 == this.state.currTab ? "ui-switchable-item curr" : "ui-switchable-item",
                            onClick: function() {
                                return e.changeTab(0)
                            }
                        }, d.a.createElement("span", null, "优惠券"), this.state.couponSize > 0 ? d.a.createElement("i", null) : ""), d.a.createElement("li", {
                            className: 1 == this.state.currTab ? "ui-switchable-item curr" : "ui-switchable-item",
                            onClick: function() {
                                return e.changeTab(1)
                            }
                        }, d.a.createElement("span", null, "礼品卡"), this.state.eCardsAbleSize > 0 ? d.a.createElement("i", null) : ""), d.a.createElement("li", {
                            className: 2 == this.state.currTab ? "ui-switchable-item curr" : "ui-switchable-item",
                            onClick: function() {
                                return e.changeTab(2)
                            }
                        }, d.a.createElement("span", null, "京豆"), this.state.jdBeans >= 1e3 && this.state.couldBeans > 0 ? d.a.createElement("i", null) : ""))), d.a.createElement("div", {
                            className: "ui-switchable-panel-main"
                        }, d.a.createElement("div", {
                            className: "hr hide"
                        }), d.a.createElement("div", {
                            className: "coupon-main ui-switchable-panel",
                            style: {
                                display: 0 == this.state.currTab ? "block" : "none"
                            }
                        }, this.state.ifCombination && this.state.conpunNun + this.state.freightNum > 0 && d.a.createElement("div", {
                            className: "coupon-optimal ml20"
                        }, d.a.createElement("label", null, d.a.createElement("span", {
                            className: "fl ml5"
                        }, "优惠组合推荐，共抵用", this.state.conpunOffset + this.state.freightOffset, "元，使用优惠券", this.state.conpunNun + this.state.freightNum, "张"))), d.a.createElement("div", {
                            className: "hr"
                        }), d.a.createElement("div", {
                            className: "coupon-cont"
                        }, d.a.createElement("div", {
                            className: "coupon-tab ml20"
                        }, d.a.createElement("ul", null, d.a.createElement("li", {
                            className: 0 == this.state.currOrderTab ? "coupon-tab-item curr" : "coupon-tab-item",
                            onClick: function() {
                                return Object(y.b)(e, "currOrderTab", 0)
                            }
                        }, "商品优惠券"), d.a.createElement("li", {
                            className: 1 == this.state.currOrderTab ? "coupon-tab-item curr" : "coupon-tab-item",
                            onClick: function() {
                                return Object(y.b)(e, "currOrderTab", 1)
                            }
                        }, "运费券"))), d.a.createElement("div", {
                            className: "coupon-tab-panel-main ml20"
                        }, d.a.createElement("div", {
                            className: "coupon-tab-panel",
                            style: {
                                display: 0 == this.state.currOrderTab ? "block" : "none"
                            }
                        }, d.a.createElement("div", {
                            className: "coupon-scrollbar"
                        }, d.a.createElement("div", {
                            className: "ui-scrollbar-main"
                        }, d.a.createElement("div", {
                            className: "coupon-scroll"
                        }, d.a.createElement("div", {
                            className: "coupon-enable"
                        }, d.a.createElement("div", {
                            className: "hr"
                        }), d.a.createElement("ul", null, this.state.vailablecouponList.map((function(t, a) {
                            return d.a.createElement("li", {
                                key: a,
                                "data-key": t.key,
                                onClick: function() {
                                    return e.tooggleCouponSelect(t, 1)
                                }
                            }, d.a.createElement("div", {
                                className: "coupon-item"
                            }, d.a.createElement("div", {
                                className: e.state.conpunIdList.indexOf(t.id) > -1 ? "c-detail  item-selected" : "c-detail"
                            }, d.a.createElement("div", {
                                className: "0" == t.couponType ? "c-msg c-jing" : "c-msg c-dong"
                            }, d.a.createElement("div", {
                                className: "0" == t.couponType ? "c-top-jing" : "c-top-dong"
                            }), d.a.createElement("div", {
                                className: "item-selected-cancel"
                            }, "取消勾选"), d.a.createElement("div", {
                                className: "c-price"
                            }, d.a.createElement("em", null, "￥", t.discount)), d.a.createElement("div", {
                                className: "c-limit ml20"
                            }, d.a.createElement("span", null, "满", t.quota)), d.a.createElement("div", {
                                className: "0" == t.couponType ? "c-time c-time-jing" : "c-time c-time-dong"
                            }, d.a.createElement("span", null, "有效期至", t.endTime))), d.a.createElement("div", {
                                className: "0" == t.couponType ? "c-type c-type-jing" : "c-type c-type-dong"
                            }, d.a.createElement("span", {
                                className: "0" == t.couponType ? "c-type-l" : "hide"
                            }, "[京券]"), d.a.createElement("span", {
                                className: "1" == t.couponType ? "c-type-l" : "hide"
                            }, "[东券]")))))
                        }))), d.a.createElement("ul", null, this.state.disablecouponList.map((function(e, t) {
                            return d.a.createElement("li", {
                                key: t,
                                "data-key": e.key
                            }, d.a.createElement("div", {
                                className: "coupon-item"
                            }, d.a.createElement("div", {
                                className: "c-detail-disable"
                            }, d.a.createElement("div", {
                                className: "c-msg"
                            }, d.a.createElement("div", {
                                className: "c-top"
                            }), d.a.createElement("div", {
                                className: "item-selected-cancel hide"
                            }, "取消勾选"), d.a.createElement("div", {
                                className: "c-price"
                            }, d.a.createElement("em", null, "￥", e.discount)), d.a.createElement("div", {
                                className: "c-limit ml20"
                            }, d.a.createElement("span", null, "满", e.quota)), d.a.createElement("div", {
                                className: "c-time"
                            }, d.a.createElement("span", null, "有效期至", e.endTime))), d.a.createElement("div", {
                                className: "c-type"
                            }, d.a.createElement("span", {
                                className: "0" == e.couponType ? "c-type-l" : "hide"
                            }, "[京券]"), d.a.createElement("span", {
                                className: "1" == e.couponType ? "c-type-l" : "hide"
                            }, "[东券]"))), d.a.createElement("div", {
                                className: "c-info"
                            }, d.a.createElement("i", {
                                className: "c-info-qmark"
                            }), d.a.createElement("span", null, e.couponLimit))))
                        })))))))), d.a.createElement("div", {
                            className: "coupon-tab-panel",
                            style: {
                                display: 1 == this.state.currOrderTab ? "block" : "none"
                            }
                        }, d.a.createElement("div", {
                            className: "coupon-freefreight"
                        }, d.a.createElement("div", {
                            className: "ui-scrollbar-main"
                        }, d.a.createElement("div", {
                            className: "coupon-scroll"
                        }, d.a.createElement("div", {
                            className: "hr"
                        }), d.a.createElement("div", {
                            className: "coupon-enable"
                        }, d.a.createElement("ul", null, this.state.deliveryCoupons.map((function(t, a) {
                            return d.a.createElement("li", {
                                key: a,
                                "data-key": t.key,
                                onClick: function() {
                                    return e.tooggleCouponSelect(t, 2)
                                }
                            }, d.a.createElement("div", {
                                className: "coupon-item"
                            }, d.a.createElement("div", {
                                className: t.selected ? "c-detail  item-selected" : "c-detail"
                            }, d.a.createElement("div", {
                                className: "c-msg c-freight"
                            }, d.a.createElement("div", {
                                className: "c-top-freight"
                            }), d.a.createElement("div", {
                                className: "item-selected-cancel hide"
                            }, "取消勾选"), d.a.createElement("div", {
                                className: "c-price-freight"
                            }, d.a.createElement("span", null, "￥", t.discount)), d.a.createElement("div", {
                                className: "c-time-freight"
                            }, d.a.createElement("span", null, "有效期至", t.endTime))), d.a.createElement("div", {
                                className: "c-type c-type-freight"
                            }, d.a.createElement("span", {
                                className: "c-type-l"
                            }, "[免运费券]")))))
                        })))), d.a.createElement("div", {
                            className: "coupon-disable"
                        }, d.a.createElement("ul", null, this.state.disabledeliveryCoupons.map((function(e, t) {
                            return d.a.createElement("li", {
                                key: t,
                                "data-key": e.key
                            }, d.a.createElement("div", {
                                className: "coupon-item"
                            }, d.a.createElement("div", {
                                className: "c-detail-disable"
                            }, d.a.createElement("div", {
                                className: "c-msg"
                            }, d.a.createElement("div", {
                                className: "c-top"
                            }), d.a.createElement("div", {
                                className: "item-selected-cancel hide"
                            }, "取消勾选"), d.a.createElement("div", {
                                className: "c-price-freight"
                            }, d.a.createElement("span", null, "￥", e.discount)), d.a.createElement("div", {
                                className: "c-time-freight"
                            }, d.a.createElement("span", null, "有效期至", e.endTime))), d.a.createElement("div", {
                                className: "c-type"
                            }, d.a.createElement("span", {
                                className: "c-type-l"
                            }, "[免运费券]"))), d.a.createElement("div", {
                                className: "c-info"
                            }, d.a.createElement("i", {
                                className: "c-info-qmark"
                            }), d.a.createElement("span", null, e.couponLimit))))
                        }))))))))), d.a.createElement("p", {
                            className: "ac mt5 mb10 ftx08 fts14"
                        }, "没有更多了~"))), d.a.createElement("div", {
                            className: "giftcard-main ui-switchable-panel",
                            style: {
                                display: 1 == this.state.currTab ? "block" : "none"
                            }
                        }, d.a.createElement("div", {
                            className: "giftcard-cont"
                        }, d.a.createElement("div", {
                            className: "giftcard-tab ml20"
                        }, d.a.createElement("ul", null, d.a.createElement("li", {
                            className: 0 == this.state.giftTab ? "giftcard-tab-item curr" : "giftcard-tab-item",
                            onClick: function() {
                                return Object(y.b)(e, "giftTab", 0)
                            }
                        }, "礼品卡"))), d.a.createElement("div", {
                            className: "giftcard-tab-panel-main ml20"
                        }, d.a.createElement("div", {
                            className: "giftcard-tab-panel",
                            style: {
                                display: 0 == this.state.giftTab ? "block" : "none"
                            }
                        }, d.a.createElement("div", {
                            className: "giftcard-scrollbar-origin"
                        }, d.a.createElement("div", {
                            className: "ui-scrollbar-main-gift"
                        }, d.a.createElement("div", {
                            className: "giftcard-scroll"
                        }, d.a.createElement("div", {
                            className: "giftcard-enable"
                        }, d.a.createElement("ul", null, this.state.giftCard.length > 0 ? this.state.giftCard.map((function(t, a) {
                            return d.a.createElement("li", {
                                key: a,
                                "data-key": t.key,
                                onClick: function() {
                                    return e.toggleGiftCardSelect(t)
                                }
                            }, d.a.createElement("div", {
                                className: "giftcard-item-new"
                            }, d.a.createElement("div", {
                                className: e.state.giftIdList.indexOf(t.id) > -1 ? "g-detail  item-selected" : "g-detail"
                            }, d.a.createElement("div", {
                                className: "g-msg"
                            }, d.a.createElement("div", {
                                className: "item-selected-cancel"
                            }, "取消勾选"), d.a.createElement("div", {
                                className: "g-origin g-origin-red"
                            }, d.a.createElement("b", null), d.a.createElement("span", {
                                className: "ml5"
                            }, "0" == t.brand ? "京东E卡" : "品牌卡")), d.a.createElement("div", {
                                className: "g-price"
                            }, d.a.createElement("em", null, "余"), d.a.createElement("strong", null, "￥", t.balance)), d.a.createElement("div", {
                                className: "g-limit"
                            }, d.a.createElement("span", null, "面值：￥", d.a.createElement("em", null, t.amount)))), d.a.createElement("div", {
                                className: "g-type"
                            }, d.a.createElement("span", {
                                className: "g-type-l"
                            }, "限品牌"), d.a.createElement("span", {
                                className: "g-type-r"
                            }, d.a.createElement("em", null, "|"), "有效期至", t.timeEnd)))))
                        })) : null, this.state.disablegiftCard.length > 0 ? this.state.disablegiftCard.map((function(e, t) {
                            return d.a.createElement("li", {
                                key: t,
                                "data-key": e.key
                            }, d.a.createElement("div", {
                                className: "giftcard-item-new"
                            }, d.a.createElement("div", {
                                className: "g-detail-disable"
                            }, d.a.createElement("div", {
                                className: "g-msg"
                            }, d.a.createElement("div", {
                                className: "g-origin g-origin-red"
                            }, d.a.createElement("b", null), d.a.createElement("span", {
                                className: "ml5"
                            }, "0" == e.brand ? "京东E卡" : "品牌卡")), d.a.createElement("div", {
                                className: "g-price"
                            }, d.a.createElement("em", null, "余"), d.a.createElement("strong", null, "￥", e.balance)), d.a.createElement("div", {
                                className: "g-limit"
                            }, d.a.createElement("span", null, "面值：￥", d.a.createElement("em", null, e.amount)))), d.a.createElement("div", {
                                className: "g-type"
                            }, d.a.createElement("span", {
                                className: "g-type-l"
                            }, "限品牌", d.a.createElement("b", null)), d.a.createElement("span", {
                                className: "g-type-r"
                            }, d.a.createElement("em", null, "|"), "有效期至", e.timeEnd))), d.a.createElement("div", {
                                className: "g-info"
                            }, d.a.createElement("i", {
                                className: "g-info-qmark"
                            }), d.a.createElement("span", null, e.disableDesc))))
                        })) : null))), d.a.createElement("p", {
                            className: "ac mt5 mb10 ftx08 fts14"
                        }, "没有更多了~"))))))), d.a.createElement("div", {
                            className: "jdbean-main ui-switchable-panel",
                            style: {
                                display: 2 == this.state.currTab ? "block" : "none"
                            }
                        }, d.a.createElement("div", {
                            className: "beans-2015 ml20"
                        }, d.a.createElement("div", {
                            className: "cho-con"
                        }, d.a.createElement("div", {
                            className: this.state.jdBeans < 1e3 ? "beans-cho-msg-warn" : "hide"
                        }, d.a.createElement("i", null), "京豆不足1000，无可用京豆"), d.a.createElement("div", {
                            className: this.state.jdBeans >= 1e3 && 0 == this.state.couldBeans ? "beans-cho-msg-warn" : "hide"
                        }, d.a.createElement("i", null), "消费金额不足20元，不可用京豆"), d.a.createElement("div", {
                            className: this.state.jdBeans >= 1e3 && this.state.couldBeans > 0 ? " " : "hide"
                        }, d.a.createElement("div", {
                            className: "beans-cho-msg-info"
                        }, d.a.createElement("i", null), "京豆满1000即可使用：每次使用京豆为n*1000", d.a.createElement("a", {
                            clstag: "pageclick|keycount|trade_201602181|30",
                            className: "ftx-05 a-link ml10",
                            target: "_blank",
                            href: "http://help.jd.com/user/issue/list-150-167.html"
                        }, "[了解什么是京豆]")), d.a.createElement("div", {
                            className: "cho-info"
                        }, "账户共", d.a.createElement("span", {
                            className: "total"
                        }, this.state.jdBeans), "个京豆"), d.a.createElement("label", null, "本次使用"), d.a.createElement("div", {
                            className: "cho-bar"
                        }, d.a.createElement("select", {
                            className: "",
                            value: 100 * this.state.beansOffset,
                            onChange: this.handleBeansChange
                        }, d.a.createElement("option", {
                            value: "0"
                        }, "0个"), this.state.beansList.map((function(e, t) {
                            return d.a.createElement("option", {
                                key: t,
                                "data-key": e.key,
                                value: e
                            }, e, "个")
                        })))), d.a.createElement("div", {
                            className: "cho-r"
                        }, d.a.createElement("span", null, "抵扣"), d.a.createElement("span", {
                            className: "bean-exchange"
                        }, this.state.beansOffset, "元")), d.a.createElement("div", {
                            className: "clear"
                        }))), d.a.createElement("div", {
                            className: "fake-hr"
                        }))), d.a.createElement("div", {
                            className: "virtual-usedcont"
                        }, d.a.createElement("span", {
                            className: "virtual-usedcont-price"
                        }, "金额抵用", d.a.createElement("em", null, this.state.allOffset)), d.a.createElement("ul", {
                            className: "virtual-usedcont-detail"
                        }, d.a.createElement("li", {
                            id: "couponTotalShow",
                            className: this.state.conpunNun > 0 ? "" : "hide"
                        }, "使用优惠券", d.a.createElement("em", null, this.state.conpunNun), "张，优惠", d.a.createElement("em", null, this.state.conpunOffset), "元", " "), d.a.createElement("li", {
                            id: "freeFreightShow",
                            className: this.state.freightNum > 0 ? "" : "hide"
                        }, "| 使用运费券", d.a.createElement("em", null, this.state.freightNum), "张，抵用运费", d.a.createElement("em", null, this.state.freightOffset), "元", " "), d.a.createElement("li", {
                            id: "jdBeanShow",
                            className: this.state.ifBeans ? "" : "hide"
                        }, "| 使用", d.a.createElement("em", null, this.state.useBeans), "京豆，抵用", d.a.createElement("em", null, this.state.beansOffset), "元"), d.a.createElement("li", {
                            id: "giftCardShow",
                            className: this.state.giftCardNum > 0 ? "" : "hide"
                        }, "| 使用礼品卡", d.a.createElement("em", null, this.state.giftCardNum), "张，抵用", d.a.createElement("em", null, this.state.giftCardOffset), "元", " "))))))
                    }
                }]), l
            }(d.a.Component),
            j = a("u5jb"),
            F = a("R0Lb");
        function L() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }
        var T = function(e) {
            Object(r.a)(l, e);
            var t,
                a = (t = l, function() {
                    var e,
                        a = Object(o.a)(t);
                    if (L()) {
                        var n = Object(o.a)(this).constructor;
                        e = Reflect.construct(a, arguments, n)
                    } else
                        e = a.apply(this, arguments);
                    return Object(c.a)(this, e)
                });
            function l(e) {
                var t;
                return Object(n.a)(this, l), (t = a.call(this, e)).fixControlledValue = function(e) {
                    return e.replace(/^(0+)|[^\d]+/g, "")
                }, t.state = {
                    isRender: !1,
                    reminderData: {},
                    defaultAddress: {},
                    provinceId: 0,
                    cityId: 0,
                    countyId: 0,
                    townId: 0,
                    invoiceType: 1,
                    invoiceData: {},
                    payId: 4,
                    payIdList: [{
                        paymentId: 4,
                        paymentName: "在线支付"
                    }],
                    isShowPriceWrap: !1,
                    shipmentId: 0,
                    addressId: 0,
                    shipmentData: [{
                        shipmentTimeType: 3,
                        shipmentTimeTypeName: "工作日、双休日与假期均可送货",
                        shipmentType: 65,
                        shipmentTypeName: "京东配送",
                        shipmentId: 65
                    }],
                    allweight: 0,
                    sku: 0,
                    price: 0,
                    num: 1,
                    inputNum: 1,
                    maxnum: 1,
                    isModifyAddress: !1,
                    deliveryList: [],
                    summaryData: {},
                    ifUsejingjuan: !1,
                    token: "",
                    pru: "",
                    addDisabled: !1,
                    initFinishflag: !1,
                    submitFlag: !1,
                    sk: ""
                }, t.choosePayKind = t.choosePayKind.bind(Object(s.a)(t)), t.chooseShipmentType = t.chooseShipmentType.bind(Object(s.a)(t)), t.haddleisShowPriceWrap = t.haddleisShowPriceWrap.bind(Object(s.a)(t)), t.addProNum = t.addProNum.bind(Object(s.a)(t)), t.reduceProNum = t.reduceProNum.bind(Object(s.a)(t)), t.submitOrder = t.submitOrder.bind(Object(s.a)(t)), t.modifyIfUsejq = t.modifyIfUsejq.bind(Object(s.a)(t)), t.changeCount = t.changeCount.bind(Object(s.a)(t)), t.sendCount = t.sendCount.bind(Object(s.a)(t)), t.handleOptError = t.handleOptError.bind(Object(s.a)(t)), t
            }
            return Object(i.a)(l, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    this.setState({
                        sku: this.getUrlParam("skuId"),
                        num: this.getUrlParam("num"),
                        pru: this.getUrlParam("pru") ? this.getUrlParam("pru") : ""
                    }, (function() {
                        e.getInit(!1, !0)
                    }))
                }
            }, {
                key: "modifyIfUsejq",
                value: function(e) {
                    this.setState({
                        ifUsejingjuan: e
                    })
                }
            }, {
                key: "getUrlParam",
                value: function(e) {
                    for (var t = window.location.search.substring(1).split("&"), a = 0; a < t.length; a++) {
                        var n = t[a].split("=");
                        if (n[0] == e)
                            return n[1]
                    }
                    return !1
                }
            }, {
                key: "handleOptError",
                value: function(e) {
                    e ? window.location.href = "//marathon.jd.com/koFail.html" : F.a.showMsg({
                        showIcon: !0,
                        type: "warn",
                        description: "系统繁忙",
                        autohide: !0,
                        closable: !1,
                        duration: 2e3,
                        onClose: function() {
                            window.location.href = "//marathon.jd.com/koFail.html"
                        }
                    })
                }
            }, {
                key: "getInit",
                value: function(e, t, a) {
                    var n = this,
                        i = {
                            sku: this.getUrlParam("skuId"),
                            num: a || this.state.num,
                            isModifyAddress: e
                        };
                    return Object(g.m)(i, t).then((function(a) {
                        var i = {};
                        return e && (n.refs.orderComponent.getOrderData(), n.refs.orderComponent.getGiftCardData(), n.refs.orderComponent.getBeansData()), a && a.addressList && a.addressList.length > 0 && (i = Object.assign(i, {
                            defaultAddress: a.addressList[0],
                            addressId: a.addressList[0].id,
                            provinceId: a.addressList[0].provinceId,
                            cityId: a.addressList[0].cityId,
                            countyId: a.addressList[0].countyId,
                            townId: a.addressList[0].townId,
                            isModifyAddress: e,
                            provinceName: a.addressList[0].provinceName,
                            cityName: a.addressList[0].cityName,
                            countyName: a.addressList[0].countyName,
                            townName: a.addressList[0].townName
                        }), i = 0 == a.addressList[0].overseas && 32 != a.addressList[0].provinceId && 84 != a.addressList[0].provinceId && 52993 != a.addressList[0].provinceId && 53283 != a.addressList[0].provinceId && 0 == a.seckillSkuVO.venderType ? Object.assign(i, {
                            invoiceType: 1
                        }) : Object.assign(i, {
                            invoiceType: 0
                        }), n.getPayKind(n.getUrlParam("skuId"), i.provinceId, i.cityId, i.countyId, i.townId, t), n.getDeliveryData(n.getUrlParam("skuId"), i.provinceId, i.cityId, i.countyId, i.townId, t)), a && a.seckillSkuVO && (i = Object.assign(i, {
                            deliveryList: a.seckillSkuVO,
                            num: a.seckillSkuVO.num,
                            inputNum: a.seckillSkuVO.num,
                            maxnum: a.buyNum,
                            price: a.seckillSkuVO.skuPrice,
                            allweight: Number(a.seckillSkuVO.weight * a.seckillSkuVO.num).toFixed(2),
                            reminderData: a.seckillSkuVO.extMap
                        })), a && a.paymentTypeList && a.paymentTypeList.length > 0 && (i = Object.assign(i, {
                            payId: a.paymentTypeList[0].paymentId
                        })), a && a.invoiceInfo && (i = Object.assign(i, {
                            invoiceData: a.invoiceInfo
                        })), a && a.token && (i = Object.assign(i, {
                            token: a.token
                        })), i = Object.assign(i, {
                            isRender: !0
                        }), n.setState(i, (function() {
                            n.calcuOrderPrice(t)
                        })), a
                    }))
                }
            }, {
                key: "changeAddress",
                value: function() {
                    console.log("changeAddress"), this.getInit(!0)
                }
            }, {
                key: "changeInvoice",
                value: function() {
                    console.log("changeInvoice"), this.getInit(!1)
                }
            }, {
                key: "getPayKind",
                value: function(e, t, a, n, i, s) {
                    var c = this,
                        o = {
                            sku: e,
                            provinceId: t,
                            cityId: a,
                            countyId: n,
                            townId: i
                        };
                    Object(g.p)(o, s).then((function(e) {
                        if (e.length > 0) {
                            c.setState({
                                payIdList: e
                            });
                            for (var t = 0; t < e.length; t++) {
                                if (4 == e[t].paymentId) {
                                    c.setState({
                                        payId: 4
                                    });
                                    break
                                }
                                c.setState({
                                    payId: 1
                                })
                            }
                        } else
                            c.handleOptError(s)
                    })).catch((function() {
                        c.handleOptError(s)
                    }))
                }
            }, {
                key: "choosePayKind",
                value: function(e) {
                    this.setState({
                        payId: e
                    })
                }
            }, {
                key: "getDeliveryData",
                value: function(e, t, a, n, i, s) {
                    var c = this,
                        o = {
                            sku: e,
                            provinceId: t,
                            cityId: a,
                            countyId: n,
                            townId: i
                        };
                    Object(g.k)(o, s).then((function(e) {
                        e.length > 0 ? c.setState({
                            shipmentData: e,
                            shipmentId: e[0].shipmentType
                        }) : c.handleOptError(s)
                    })).catch((function() {
                        c.handleOptError(s)
                    }))
                }
            }, {
                key: "chooseShipmentType",
                value: function(e) {
                    this.setState({
                        shipmentId: e
                    })
                }
            }, {
                key: "haddleisShowPriceWrap",
                value: function(e) {
                    this.setState({
                        isShowPriceWrap: e
                    })
                }
            }, {
                key: "addProNum",
                value: function() {
                    var e = this,
                        t = this.state.maxnum,
                        a = this.state.deliveryList;
                    if (a.skuId == this.getUrlParam("skuId")) {
                        var n = a.num + 1;
                        n > 0 && n <= t ? this.setState({
                            addDisabled: !0
                        }, (function() {
                            e.getInit(!1, !1, n).then((function(t) {
                                e.setState({
                                    addDisabled: !1
                                })
                            })).catch((function() {
                                e.setState({
                                    addDisabled: !1
                                })
                            }))
                        })) : this.setState({
                            addDisabled: !0
                        }, (function() {
                            F.a.showMsg({
                                showIcon: !0,
                                type: "warn",
                                description: "此商品只能购买".concat(t, "件"),
                                autohide: !0,
                                closable: !1,
                                duration: 2e3
                            })
                        }))
                    }
                }
            }, {
                key: "destroy",
                value: function(e) {
                    m.a.unmountComponentAtNode(e), e && e.parentNode && e.parentNode.removeChild(e)
                }
            }, {
                key: "reduceProNum",
                value: function() {
                    var e = this,
                        t = this.state.deliveryList;
                    if (t.skuId == this.getUrlParam("skuId")) {
                        var a = t.num - 1;
                        a > 0 && this.setState({
                            addDisabled: !0
                        }, (function() {
                            e.getInit(!1, !1, a).then((function(t) {
                                e.setState({
                                    addDisabled: !1
                                })
                            })).catch((function() {
                                e.setState({
                                    addDisabled: !1
                                })
                            }))
                        }))
                    }
                }
            }, {
                key: "changeCount",
                value: function(e) {
                    var t = this.fixControlledValue(e.target.value);
                    this.setState({
                        inputNum: t
                    })
                }
            }, {
                key: "sendCount",
                value: function(e) {
                    var t = this,
                        a = this.state.deliveryList,
                        n = this.state.maxnum,
                        i = this.state.num;
                    if (a.skuId == this.getUrlParam("skuId")) {
                        var s = e.target.value;
                        s > 0 && s <= n ? this.getInit(!1, !1, s).then((function(e) {
                            e && e.seckillSkuVO ? t.setState({
                                addDisabled: !1
                            }) : t.setState({
                                addDisabled: !1,
                                inputNum: i
                            })
                        })).catch((function() {
                            t.setState({
                                inputNum: i
                            })
                        })) : s > n ? (F.a.showMsg({
                            showIcon: !0,
                            type: "warn",
                            description: "此商品只能购买".concat(n, "件"),
                            autohide: !0,
                            closable: !1,
                            duration: 2e3
                        }), a.num = n, this.setState({
                            deliveryList: a,
                            num: n,
                            inputNum: n,
                            addDisabled: !0
                        }, (function() {}))) : this.getInit(!1, !1, 1).then((function(e) {
                            e && e.seckillSkuVO ? t.setState({
                                addDisabled: !1
                            }) : t.setState({
                                addDisabled: !1,
                                inputNum: i
                            })
                        })).catch((function() {
                            t.setState({
                                inputNum: i
                            })
                        }))
                    }
                }
            }, {
                key: "calcuOrderPrice",
                value: function(e) {
                    var t = this,
                        a = {
                            provinceId: this.state.provinceId,
                            cityId: this.state.cityId,
                            countyId: this.state.countyId,
                            townId: this.state.townId,
                            paymentType: this.state.payId
                        };
                    Object(g.b)(a, e).then((function(a) {
                        return a ? t.setState({
                            summaryData: a
                        }) : t.handleOptError(e), a
                    })).catch((function() {
                        t.handleOptError(e)
                    }))
                }
            }, {
                key: "submitOrder",
                value: function(e) {
                    var t = this;
                    t.setState({
                        submitFlag: !0
                    }), getJdEid((function(a, n) {
                        var i = {
                            skuId: t.state.sku,
                            num: t.state.num,
                            addressId: t.state.addressId,
                            yuShou: 1 == t.state.reminderData.YuShou,
                            isModifyAddress: t.state.isModifyAddress,
                            name: t.state.defaultAddress.name,
                            provinceId: t.state.provinceId,
                            cityId: t.state.cityId,
                            countyId: t.state.countyId,
                            townId: t.state.townId,
                            addressDetail: t.state.defaultAddress.addressDetail,
                            mobile: t.state.defaultAddress.mobile,
                            mobileKey: t.state.defaultAddress.mobileKey,
                            email: t.state.defaultAddress.email ? t.state.defaultAddress.email : "",
                            postCode: t.state.defaultAddress.postCode ? t.state.defaultAddress.postCode : "",
                            invoiceTitle: t.state.invoiceData.invoiceTitle ? t.state.invoiceData.invoiceTitle : -1,
                            invoiceCompanyName: t.state.invoiceData.invoiceCompany ? t.state.invoiceData.invoiceCompany : "",
                            invoiceContent: t.state.invoiceData.invoiceContentType ? t.state.invoiceData.invoiceContentType : 1,
                            invoiceTaxpayerNO: t.state.invoiceData.invoiceCode ? t.state.invoiceData.invoiceCode : "",
                            invoiceEmail: t.state.invoiceData.invoiceEmail ? t.state.invoiceData.invoiceEmail : "",
                            invoicePhone: t.state.invoiceData.invoicePhone ? t.state.invoiceData.invoicePhone : "",
                            invoicePhoneKey: t.state.invoiceData.invoicePhoneKey ? t.state.invoiceData.invoicePhoneKey : "",
                            invoice: 1 == t.state.invoiceType,
                            password: e,
                            paymentType: t.state.payId,
                            areaCode: t.state.defaultAddress.areaCode ? t.state.defaultAddress.areaCode : "",
                            overseas: t.state.defaultAddress.overseas ? t.state.defaultAddress.overseas : 0,
                            phone: t.state.defaultAddress.phone ? t.state.defaultAddress.phone : "",
                            eid: a,
                            fp: n,
                            token: t.state.token,
                            pru: t.state.pru,
                            provinceName: t.state.provinceName,
                            cityName: t.state.cityName,
                            countyName: t.state.countyName,
                            townName: t.state.townName,
                            sk: _tak.getTakId()
                        };
                        Object(g.v)(i).then((function(e) {
                            e ? e.success ? window.location.href = e.pcUrl : 90011 === e.resultCode || 90010 === e.resultCode ? (alert("很遗憾没有抢到，再接再厉"), t.setState({
                                submitFlag: !1
                            })) : "string" == typeof e && "" === e.trim() ? (alert("很抱歉没有抢到，再接再励哦。"), t.setState({
                                submitFlag: !1
                            })) : e.errorMessage ? (alert(e.errorMessage), t.setState({
                                submitFlag: !1
                            })) : window.location.href = e : (alert("提交失败"), t.setState({
                                submitFlag: !1
                            }))
                        })).catch((function(e) {
                            alert("很抱歉没有抢到，再接再励哦。"), t.setState({
                                submitFlag: !1
                            })
                        }))
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return d.a.createElement("div", {
                        className: "w"
                    }, d.a.createElement(p, null), this.state.isRender && d.a.createElement("div", {
                        className: "container"
                    }, d.a.createElement("div", {
                        className: "content w"
                    }, this.state.reminderData && 0 == this.state.reminderData.is7ToReturn && d.a.createElement(f.a, {
                        type: 1
                    }), this.state.reminderData && 1 == this.state.reminderData.YuShou && d.a.createElement(f.a, {
                        type: 2
                    }), d.a.createElement("div", {
                        className: "checkout-tit"
                    }, d.a.createElement("span", {
                        className: "tit-txt"
                    }, "填写并核对订单信息")), d.a.createElement("div", {
                        className: "checkout-steps"
                    }, d.a.createElement(N, {
                        defaultAddress: this.state.defaultAddress,
                        changeAddress: function() {
                            return e.changeAddress()
                        }
                    }), d.a.createElement("div", {
                        className: "hr"
                    }), d.a.createElement("div", {
                        id: "shipAndSkuInfo"
                    }, d.a.createElement("div", {
                        id: "payShipAndSkuInfo"
                    }, d.a.createElement(I, {
                        payId: this.state.payId,
                        payIdList: this.state.payIdList,
                        choosePayKind: function(t) {
                            return e.choosePayKind(t)
                        }
                    }), d.a.createElement(O.a, {
                        isShowPriceWrap: this.state.isShowPriceWrap,
                        isShowdetails: this.state.isShowdetails,
                        shipmentId: this.state.shipmentId,
                        allweight: this.state.allweight,
                        maxnum: this.state.maxnum,
                        shipmentData: this.state.shipmentData,
                        deliveryList: this.state.deliveryList,
                        inputNum: this.state.inputNum,
                        addDisabled: this.state.addDisabled,
                        haddleisShowPriceWrap: function(t) {
                            return e.haddleisShowPriceWrap(t)
                        },
                        chooseShipmentType: function(t) {
                            return e.chooseShipmentType(t)
                        },
                        addProNum: function() {
                            return e.addProNum()
                        },
                        reduceProNum: function() {
                            return e.reduceProNum()
                        },
                        changeCount: function(t) {
                            return e.changeCount(t)
                        },
                        sendCount: function(t) {
                            return e.sendCount(t)
                        }
                    }), d.a.createElement("div", {
                        className: "hr"
                    }), d.a.createElement(w.a, {
                        invoiceType: this.state.invoiceType,
                        invoiceData: this.state.invoiceData,
                        changeInvoice: function() {
                            return e.changeInvoice()
                        }
                    }), d.a.createElement("div", {
                        className: "hr"
                    }), d.a.createElement(S, {
                        ref: "orderComponent",
                        calcuOrderPrice: function(t) {
                            return e.calcuOrderPrice(t)
                        },
                        modifyIfUsejq: function(t) {
                            return e.modifyIfUsejq(t)
                        }
                    })))), d.a.createElement(j.a, {
                        submitFlag: this.state.submitFlag,
                        num: this.state.num,
                        ifUsejingjuan: this.state.ifUsejingjuan,
                        summaryData: this.state.summaryData,
                        addressData: this.state.defaultAddress,
                        submitOrder: function(t) {
                            return e.submitOrder(t)
                        }
                    }))))
                }
            }]), l
        }(d.a.Component);
        m.a.render(d.a.createElement(T, null), document.getElementById("app"))
    },
    n1Cs: function(e, t, a) {},
    qcXs: function(e, t, a) {},
    rAyO: function(e, t, a) {
        (function(e) {
            e.constants = {
                onlyEngReg: /^[A-Za-z|\s]+$/,
                invalidSymbolReg: /[\uD800-\uDBFF][\uDC00-\uDFFF]/,
                emailReg: /[@]/,
                postCodeReg: /^[A-Za-z|0-9]{1,20}$/,
                overseasAddressReg: /[A-Za-z|0-9\s\.\(\)\_\&]$/,
                overseasMobileReg: /^[0-9\*]{1,13}$/,
                chinaMobileReg: /^[0-9\*]{11}$/,
                fixedTelephoneReg: /^[0-9]{5,16}$/,
                checkText: {
                    areaCheck: "请您填写完整的地区信息",
                    nameCheck: "请您填写收货人姓名",
                    nameCheckIllegal: "收货人姓名中含有非法字符",
                    nameCheckOverseas: "海外地区仅支持英文姓名",
                    nameCheckLength: "收货人姓名不能大于25个字",
                    nameCheckLengthOverse: "姓名最多50个字符",
                    addressDetailCheck: "请您填写收货人详细地址",
                    addressDetailCheckIllegal: "收货人详细地址中含有非法字符",
                    addressDetailCheckOverseas: "海外地址仅支持英文地址",
                    addressDetailCheckLength: "收货人详细地址过长",
                    addressDetailCheckLengthOverseas: "详细地址最多100个字符",
                    postCodeCheck: "请您填写邮政编码",
                    postCodeCheckIllegal: "邮政编码格式不正确",
                    emailCheck: "请您填写邮箱地址",
                    emailCheckIllegal: "邮箱格式不正确",
                    mobileCheck: "请您填写收货人手机号码",
                    mobileCheckIllegal: "请您填写正确的收货人手机号码",
                    phoneCheck: "固定电话号码格式不正确",
                    addressNameCheck: "地址别名中含有非法字符",
                    invoicePhoneCheck: "请输入手机号码",
                    invoicePhoneCheckIllegal: "手机号码格式不正确",
                    invoiceEmailCheck: "邮箱格式不正确",
                    invoiceTaxCodeCheck: "请填写准确的纳税人识别号或统一社会信用代码",
                    invoiceTaxCompanyCheck: "请输入单位发票抬头",
                    passwordCheck: "请输入6位数字密码"
                },
                priceTipText: "因可能存在系统缓存、页面更新导致价格变动异常等不确定性情况出现，商品售价以本结算页商品价格为准；如有疑问，请您立即联系销售商咨询。",
                invoiceTipText: {
                    taxCode: "开企业抬头发票需填写纳税人识别号，以免影响报销",
                    invoiceTip: "电子发票与纸质发票具有同等法律效力，可支持报销入账、商品售后凭证。",
                    invoiceText1: "电子普通发票和纸质普通发票具备同等法律效力，可支持报销入账，订单完成后24小时内开具，京东自营全面启用电子普通发票，非京东自营发票由第三方商家实际开具。",
                    invoiceLink1: "电子普通发票相关信息",
                    invoiceText2: "如商品由第三方卖家销售，发票类型及内容将由该卖家决定。",
                    invoiceLink2: "发票信息相关问题"
                },
                reminder: {
                    sevenDay: "订单中存在不支持7天无理由退换商品，请确认相关商品信息后提交订单。",
                    riskControl: "抢购不易，收货地址多留心。"
                },
                link: {
                    eInvoiceLink: "//help.jd.com/user/issue/list-505-508.html",
                    invoiceLink: "//help.jd.com/user/issue/list-505-508.html",
                    forgetPassword: "//safe.jd.com/user/paymentpassword/getBackPassword.action",
                    setPassword: "//safe.jd.com/user/paymentpassword/safetyCenter.action",
                    freightTip: "//help.jd.com/user/issue/109-188.html"
                },
                new7ToReturn: {
                    0: {
                        iconUrl: "",
                        iconMsg: "#F0250F,不支持7天无理由退货",
                        backGroundColor: "",
                        outLineColor: "#F0250F",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "不支持7天无理由退货"
                    },
                    1: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,支持7天无理由退货",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持7天无理由退货"
                    },
                    2: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,支持7天无理由退货（拆封后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持7天无理由退货（拆封后不支持）"
                    },
                    3: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,支持7天无理由退货（激活后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持7天无理由退货（激活后不支持）"
                    },
                    4: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,支持7天无理由退货（使用后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持7天无理由退货（使用后不支持）"
                    },
                    5: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,支持7天无理由退货（安装后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持7天无理由退货（安装后不支持）"
                    },
                    6: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,支持7天无理由退货（PLUS会员尊享）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持7天无理由退货（PLUS会员尊享）"
                    },
                    7: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,支持90天无理由退换货",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持90天无理由退换货"
                    },
                    8: {
                        iconUrl: "",
                        iconMsg: "#F0250F,不支持7天无理由退货",
                        backGroundColor: "",
                        outLineColor: "#F0250F",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "不支持7天无理由退货"
                    },
                    9: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,支持7天无理由退货（新注册会员尊享） ",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持7天无理由退货（新注册会员尊享） "
                    },
                    10: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,PLUS会员尊享7天无理由退货（拆封后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "PLUS会员尊享7天无理由退货（拆封后不支持）"
                    },
                    11: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,PLUS会员尊享7天无理由退货（激活后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "PLUS会员尊享7天无理由退货（激活后不支持）"
                    },
                    12: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,PLUS会员尊享7天无理由退货（安装后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "PLUS会员尊享7天无理由退货（安装后不支持）"
                    },
                    13: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,PLUS会员尊享7天无理由退货（使用后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "PLUS会员尊享7天无理由退货（使用后不支持）"
                    },
                    101: {
                        iconUrl: "",
                        iconMsg: "#F0250F,支持7天无理由退货",
                        backGroundColor: "",
                        outLineColor: "#F0250F",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持7天无理由退货"
                    },
                    102: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,支持7天无理由退货（拆封后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持7天无理由退货（拆封后不支持）"
                    },
                    103: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,支持7天无理由退货（激活后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持7天无理由退货（激活后不支持）"
                    },
                    104: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,支持7天无理由退货（使用后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持7天无理由退货（使用后不支持）"
                    },
                    105: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,支持7天无理由退货（安装后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持7天无理由退货（安装后不支持）"
                    },
                    106: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,支持7天无理由退货（PLUS会员尊享）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持7天无理由退货（PLUS会员尊享）"
                    },
                    107: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,支持7天无理由退货（新注册会员尊享）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持7天无理由退货（新注册会员尊享）"
                    },
                    108: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,PLUS会员尊享7天无理由退货（拆封后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "PLUS会员尊享7天无理由退货（拆封后不支持）"
                    },
                    109: {
                        iconUrl: "",
                        iconMsg: "#F0250F,PLUS会员尊享7天无理由退货（激活后不支持）",
                        backGroundColor: "",
                        outLineColor: "#F0250F",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "PLUS会员尊享7天无理由退货（激活后不支持）"
                    },
                    110: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,PLUS会员尊享7天无理由退货（安装后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "PLUS会员尊享7天无理由退货（安装后不支持）"
                    },
                    111: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,PLUS会员尊享7天无理由退货（使用后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "PLUS会员尊享7天无理由退货（使用后不支持）"
                    },
                    112: {
                        iconUrl: "",
                        iconMsg: "#F0250F,支持15天无理由退货",
                        backGroundColor: "",
                        outLineColor: "#F0250F",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持15天无理由退货"
                    },
                    113: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,支持15天无理由退货（拆封后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持15天无理由退货（拆封后不支持）"
                    },
                    114: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,支持15天无理由退货（激活后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持15天无理由退货（激活后不支持）"
                    },
                    115: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,支持15天无理由退货（使用后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持15天无理由退货（使用后不支持）"
                    },
                    116: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,支持15天无理由退货（安装后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持15天无理由退货（安装后不支持）"
                    },
                    117: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,15天无理由退货（PLUS会员尊享）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "15天无理由退货（PLUS会员尊享）"
                    },
                    118: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,PLUS尊享15天无理由退货（安装后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "PLUS尊享15天无理由退货（安装后不支持）"
                    },
                    119: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,PLUS尊享15天无理由退货（拆封后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "PLUS尊享15天无理由退货（拆封后不支持）"
                    },
                    120: {
                        iconUrl: "",
                        iconMsg: "#F0250F,PLUS尊享15天无理由退货（使用后不支持）",
                        backGroundColor: "",
                        outLineColor: "#F0250F",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "PLUS尊享15天无理由退货（使用后不支持）"
                    },
                    121: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,PLUS尊享15天无理由退货（激活后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "PLUS尊享15天无理由退货（激活后不支持）"
                    },
                    122: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,支持30天无理由退货",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持30天无理由退货"
                    },
                    123: {
                        iconUrl: "",
                        iconMsg: "#F0250F,支持30天无理由退货（安装后不支持）",
                        backGroundColor: "",
                        outLineColor: "#F0250F",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持30天无理由退货（安装后不支持）"
                    },
                    124: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,支持30天无理由退货（拆封后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持30天无理由退货（拆封后不支持）"
                    },
                    125: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,支持30天无理由退货（使用后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持30天无理由退货（使用后不支持）"
                    },
                    126: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,支持30天无理由退货（激活后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "支持30天无理由退货（激活后不支持）"
                    },
                    127: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,30天无理由退货（PLUS会员尊享）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "30天无理由退货（PLUS会员尊享）"
                    },
                    128: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,PLUS尊享30天无理由退货（安装后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "PLUS尊享30天无理由退货（安装后不支持）"
                    },
                    129: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,PLUS尊享30天无理由退货（拆封后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "PLUS尊享30天无理由退货（拆封后不支持）"
                    },
                    130: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,PLUS尊享30天无理由退货（使用后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "PLUS尊享30天无理由退货（使用后不支持）"
                    },
                    131: {
                        iconUrl: "",
                        iconMsg: "#F0250F,PLUS尊享30天无理由退货（激活后不支持）",
                        backGroundColor: "",
                        outLineColor: "#F0250F",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "PLUS尊享30天无理由退货（激活后不支持）"
                    },
                    132: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,15天无理由退货（京享值超20000分客户尊享）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "15天无理由退货（京享值超20000分客户尊享）"
                    },
                    133: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,京享值超20000分客户尊享15天无理由退货（安装后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "京享值超20000分客户尊享15天无理由退货（安装后不支持）"
                    },
                    134: {
                        iconUrl: "",
                        iconMsg: "#F0250F,京享值超20000分客户尊享15天无理由退货（拆封后不支持）",
                        backGroundColor: "",
                        outLineColor: "#F0250F",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "京享值超20000分客户尊享15天无理由退货（拆封后不支持）"
                    },
                    135: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,京享值超20000分客户尊享15天无理由退货（使用后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "京享值超20000分客户尊享15天无理由退货（使用后不支持）"
                    },
                    136: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,京享值超20000分客户尊享15天无理由退货（激活后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "京享值超20000分客户尊享15天无理由退货（激活后不支持）"
                    },
                    137: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,30天无理由退货（京享值超20000分客户尊享）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "30天无理由退货（京享值超20000分客户尊享）"
                    },
                    138: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,京享值超20000分客户尊享30天无理由退货（安装后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "京享值超20000分客户尊享30天无理由退货（安装后不支持）"
                    },
                    139: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,京享值超20000分客户尊享30天无理由退货（拆封后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "京享值超20000分客户尊享30天无理由退货（拆封后不支持）"
                    },
                    140: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,京享值超20000分客户尊享30天无理由退货（使用后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "京享值超20000分客户尊享30天无理由退货（使用后不支持）"
                    },
                    141: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,京享值超20000分客户尊享30天无理由退货（激活后不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "京享值超20000分客户尊享30天无理由退货（激活后不支持）"
                    },
                    142: {
                        iconUrl: "",
                        iconMsg: "#4D88FF,7天无理由退货（定制类不支持）",
                        backGroundColor: "",
                        outLineColor: "#4D88FF",
                        unifiedControlCode: "tab_var_071",
                        unifiedControlMsg: "7天无理由退货（定制类不支持）"
                    }
                }
            }
        }).call(this, a("yLpj"))
    },
    re60: function(e, t, a) {
        "use strict";
        var n = a("1OyB"),
            i = a("vuIU"),
            s = a("md7G"),
            c = a("foSv"),
            o = a("Ji7U"),
            r = a("q1tI"),
            l = a.n(r),
            d = (a("qcXs"), a("dB4L")),
            u = (a("eFLQ"), a("aAPB"));
        function m() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }
        var p = function(e) {
                Object(o.a)(r, e);
                var t,
                    a = (t = r, function() {
                        var e,
                            a = Object(c.a)(t);
                        if (m()) {
                            var n = Object(c.a)(this).constructor;
                            e = Reflect.construct(a, arguments, n)
                        } else
                            e = a.apply(this, arguments);
                        return Object(s.a)(this, e)
                    });
                function r(e) {
                    return Object(n.a)(this, r), a.call(this, e)
                }
                return Object(i.a)(r, [{
                    key: "delConsigee",
                    value: function() {
                        var e = this;
                        Object(u.e)(this.props.delConsigneeId).then((function(t) {
                            t && e.props.handleHide(!0)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return l.a.createElement("div", {
                            className: "tip-box icon-box"
                        }, l.a.createElement("span", {
                            className: "warn-icon m-icon"
                        }), l.a.createElement("div", {
                            className: "item-fore"
                        }, l.a.createElement("h3", null, "您确定要删除该收货地址吗？")), l.a.createElement("div", {
                            className: "op-btns ac"
                        }, l.a.createElement("a", {
                            onClick: function() {
                                return e.delConsigee()
                            },
                            className: "btn-9"
                        }, "确定"), l.a.createElement("a", {
                            className: "btn-9 ml10",
                            onClick: function() {
                                return e.props.handleHide(!1)
                            }
                        }, "取消")))
                    }
                }]), r
            }(l.a.Component),
            f = a("EB8K");
        function h() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }
        var v = function(e) {
            Object(o.a)(r, e);
            var t,
                a = (t = r, function() {
                    var e,
                        a = Object(c.a)(t);
                    if (h()) {
                        var n = Object(c.a)(this).constructor;
                        e = Reflect.construct(a, arguments, n)
                    } else
                        e = a.apply(this, arguments);
                    return Object(s.a)(this, e)
                });
            function r(e) {
                return Object(n.a)(this, r), a.call(this, e)
            }
            return Object(i.a)(r, [{
                key: "handleHide",
                value: function(e) {
                    this.props.handleHideWrap(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = "",
                        a = "ui-dialog";
                    switch (this.props.wrapType) {
                    case 0:
                        t = "新增收货人信息";
                        break;
                    case 1:
                        t = "删除收货人信息", a = "ui-dialog del-dialog";
                        break;
                    case 2:
                        t = "编辑收货人信息";
                        break;
                    case 3:
                        t = "发票信息", a = "ui-dialog invoice-dialog"
                    }
                    return l.a.createElement("div", {
                        className: "wrap-con"
                    }, l.a.createElement("div", {
                        className: a
                    }, l.a.createElement("div", {
                        className: "ui-dialog-title"
                    }, l.a.createElement("span", {
                        className: "wrapTitle"
                    }, t)), l.a.createElement("div", {
                        className: "ui-dialog-content"
                    }, (0 == this.props.wrapType || 2 == this.props.wrapType) && l.a.createElement(d.a, {
                        addressData: this.props.addressData,
                        addressId: this.props.addressId,
                        handleHide: function(t) {
                            return e.handleHide(t)
                        }
                    }), 1 == this.props.wrapType && l.a.createElement(p, {
                        delConsigneeId: this.props.addressId,
                        handleHide: function(t) {
                            return e.handleHide(t)
                        }
                    }), 3 == this.props.wrapType && l.a.createElement(f.a, {
                        handleHide: function(t) {
                            return e.handleHide(t)
                        }
                    })), l.a.createElement("a", {
                        className: "ui-dialog-close",
                        title: "关闭",
                        onClick: function() {
                            return e.handleHide(!1)
                        }
                    }, l.a.createElement("span", {
                        className: "ui-icon ui-icon-delete"
                    }))), l.a.createElement("div", {
                        className: "ui-mask"
                    }))
                }
            }]), r
        }(l.a.Component);
        t.a = v
    },
    sK9h: function(e, t, a) {},
    t6rr: function(e, t, a) {},
    u5jb: function(e, t, a) {
        "use strict";
        (function(e) {
            var n = a("1OyB"),
                i = a("vuIU"),
                s = a("md7G"),
                c = a("foSv"),
                o = a("Ji7U"),
                r = a("q1tI"),
                l = a.n(r),
                d = (a("LQHb"), a("aAPB"));
            a("rAyO");
            function u() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }
            var m = function(t) {
                Object(o.a)(m, t);
                var a,
                    r = (a = m, function() {
                        var e,
                            t = Object(c.a)(a);
                        if (u()) {
                            var n = Object(c.a)(this).constructor;
                            e = Reflect.construct(t, arguments, n)
                        } else
                            e = t.apply(this, arguments);
                        return Object(s.a)(this, e)
                    });
                function m(e) {
                    var t;
                    return Object(n.a)(this, m), (t = r.call(this, e)).state = {
                        isShowPwd: !1,
                        isShowSetPwd: !1,
                        pwdCollection: [{
                            isActive: !1,
                            isDot: !1
                        }, {
                            isActive: !1,
                            isDot: !1
                        }, {
                            isActive: !1,
                            isDot: !1
                        }, {
                            isActive: !1,
                            isDot: !1
                        }, {
                            isActive: !1,
                            isDot: !1
                        }, {
                            isActive: !1,
                            isDot: !1
                        }],
                        passwordInput: "",
                        passwordCheck: ""
                    }, t
                }
                return Object(i.a)(m, [{
                    key: "componentDidMount",
                    value: function() {
                        this.getPasswordCheck()
                    }
                }, {
                    key: "getPasswordCheck",
                    value: function() {
                        var e = this;
                        Object(d.c)().then((function(t) {
                            console.log(t, "check"), t && t.success && (t.shortPwdActive ? e.setState({
                                isShowPwd: !0
                            }) : e.setState({
                                isShowPwd: !0,
                                isShowSetPwd: !0
                            }))
                        }))
                    }
                }, {
                    key: "setFocus",
                    value: function() {
                        var e = this.state.passwordInput.length,
                            t = this.state.pwdCollection;
                        e < 6 && (t[e].isActive = !0, this.setState({
                            pwdCollection: t
                        }))
                    }
                }, {
                    key: "setBlur",
                    value: function() {
                        var e = this.state.passwordInput.length,
                            t = this.state.pwdCollection;
                        e < 6 && (t[e].isActive = !1, this.setState({
                            pwdCollection: t
                        }))
                    }
                }, {
                    key: "changeInput",
                    value: function(e) {
                        var t = e.target.value;
                        if (/^[0-9]*$/.test(t)) {
                            for (var a = t.length, n = this.state.pwdCollection, i = 0; i < 6; i++)
                                n[i].isActive = i == a, n[i].isDot = i < a;
                            this.setState({
                                pwdCollection: n,
                                passwordInput: t
                            })
                        }
                    }
                }, {
                    key: "submitForm",
                    value: function() {
                        this.props.summaryData && (this.props.summaryData.couponDiscount > 0 && this.props.ifUsejingjuan || this.props.summaryData.giftCardDiscount || this.props.summaryData.jingdouDiscount) ? 6 != this.state.passwordInput.length ? (this.setState({
                            passwordCheck: e.constants.checkText.passwordCheck
                        }), this.refs.passwordInput && this.refs.passwordInput.focus()) : this.props.submitOrder(this.state.passwordInput) : this.props.submitOrder("")
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            a = this.props,
                            n = a.addressData,
                            i = a.summaryData,
                            s = a.num,
                            c = a.ifUsejingjuan,
                            o = a.submitFlag,
                            r = this.state,
                            d = r.isShowPwd,
                            u = r.isShowSetPwd,
                            m = r.passwordInput,
                            p = r.pwdCollection,
                            f = r.passwordCheck;
                        return l.a.createElement("div", {
                            className: "order-summary"
                        }, l.a.createElement("div", {
                            className: "statistic fr mt20"
                        }, i && i.productTotalPrice && l.a.createElement("div", {
                            className: "list"
                        }, l.a.createElement("span", null, l.a.createElement("em", {
                            className: "ftx-01"
                        }, s), " 件商品，总商品金额："), l.a.createElement("em", {
                            className: "price"
                        }, "￥", i.productTotalPrice.toFixed(2))), i && i.manjianDiscount > 0 && l.a.createElement("div", {
                            className: "list"
                        }, l.a.createElement("span", null, "满减金额："), l.a.createElement("em", {
                            className: "price"
                        }, "-￥", i.manjianDiscount.toFixed(2))), i && i.freight >= 0 && l.a.createElement("div", {
                            className: "list"
                        }, l.a.createElement("span", null, l.a.createElement("a", {
                            className: "freight-icon",
                            href: e.constants.link.freightTip,
                            target: "_blank"
                        }), "运费："), l.a.createElement("em", {
                            className: "price"
                        }, "￥", i.freight.toFixed(2))), i && i.orderTax > 0 && l.a.createElement("div", {
                            className: "list"
                        }, l.a.createElement("span", null, "税费："), l.a.createElement("em", {
                            className: "price"
                        }, "￥", i.orderTax.toFixed(2))), i && i.couponDiscount > 0 && l.a.createElement("div", {
                            className: "list"
                        }, l.a.createElement("span", null, "优惠券："), l.a.createElement("em", {
                            className: "price"
                        }, "-￥", i.couponDiscount.toFixed(2))), i && i.giftCardDiscount > 0 && l.a.createElement("div", {
                            className: "list"
                        }, l.a.createElement("span", null, "礼品卡："), l.a.createElement("em", {
                            className: "price"
                        }, "-￥", i.giftCardDiscount.toFixed(2))), i && i.jingdouDiscount > 0 && l.a.createElement("div", {
                            className: "list"
                        }, l.a.createElement("span", null, "京豆："), l.a.createElement("em", {
                            className: "price"
                        }, "-￥", i.jingdouDiscount.toFixed(2))), i && i.yunfeiDiscount > 0 && l.a.createElement("div", {
                            className: "list"
                        }, l.a.createElement("span", null, "运费优惠："), l.a.createElement("em", {
                            className: "price"
                        }, "-￥", i.yunfeiDiscount.toFixed(2)))), l.a.createElement("div", {
                            className: "clr"
                        }), l.a.createElement("div", {
                            className: "trade-foot"
                        }, l.a.createElement("div", {
                            className: "trade-foot-detail-com"
                        }, i && i.totalPrice > 0 && l.a.createElement("div", {
                            className: "fc-price-info"
                        }, l.a.createElement("span", {
                            className: "price-tit"
                        }, "应付总额："), l.a.createElement("span", {
                            className: "price-num",
                            id: "sumPayPriceId"
                        }, "￥", i.totalPrice.toFixed(2))), l.a.createElement("div", {
                            className: "fc-consignee-info"
                        }, l.a.createElement("span", {
                            className: "mr20",
                            id: "sendAddr"
                        }, "寄送至： ", n.provinceName, " ", n.cityName, " ", n.countyName, " ", n.townName, " ", n.addressDetail), l.a.createElement("span", {
                            id: "sendMobile"
                        }, "收货人：", n.name, " ", n.mobile))), d && i && (i.couponDiscount > 0 && c || i.giftCardDiscount > 0 || i.jingdouDiscount > 0) && l.a.createElement("div", {
                            className: "pay-pwd mt10"
                        }, u && l.a.createElement("div", {
                            className: "alieditContainer"
                        }, l.a.createElement("span", null, "为保障您的账户资金安全，请先", l.a.createElement("a", {
                            target: "_blank",
                            href: e.constants.link.setPassword,
                            className: "ftx-05"
                        }, "[开启支付密码]"))), !u && l.a.createElement("div", {
                            className: "alieditContainer clearfix"
                        }, l.a.createElement("label", {
                            className: "i-block"
                        }, "支付密码："), l.a.createElement("div", {
                            className: "i-block"
                        }, l.a.createElement("div", {
                            className: "i-block six-password"
                        }, l.a.createElement("input", {
                            className: "i-text sixDigitPassword",
                            type: "password",
                            maxLength: "6",
                            minLength: "6",
                            ref: "passwordInput",
                            value: m,
                            onChange: function(e) {
                                return t.changeInput(e)
                            },
                            onFocus: function() {
                                t.setFocus()
                            },
                            onBlur: function() {
                                t.setBlur()
                            }
                        }), l.a.createElement("div", {
                            className: "sixDigitPassword-box"
                        }, p.map((function(e, t) {
                            return l.a.createElement("i", {
                                key: t,
                                className: e.isActive ? "isActive" : e.isDot ? "isDot" : ""
                            }, l.a.createElement("b", null))
                        })))), l.a.createElement("span", {
                            className: "forgot-password"
                        }, l.a.createElement("a", {
                            target: "_blank",
                            href: e.constants.link.forgetPassword
                        }, "忘记密码？")))), l.a.createElement("div", {
                            className: "pay-pwd-error"
                        }, "" != f && l.a.createElement("label", {
                            className: "error-msg"
                        }, f))), l.a.createElement("div", {
                            className: "checkout-floatbar"
                        }, l.a.createElement("div", {
                            className: "ui-ceilinglamp checkout-buttons"
                        }, l.a.createElement("div", {
                            className: "sticky-wrap"
                        }, l.a.createElement("div", {
                            className: "inner"
                        }, l.a.createElement("button", {
                            disabled: o,
                            type: "submit",
                            className: "checkout-submit",
                            onClick: function() {
                                t.submitForm()
                            }
                        }, "提交订单", l.a.createElement("b", null)), l.a.createElement("span", {
                            id: "checkCodeDiv"
                        })))))))
                    }
                }]), m
            }(l.a.Component);
            t.a = m
        }).call(this, a("yLpj"))
    }
});

