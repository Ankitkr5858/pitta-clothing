! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function(e) {
                return t[e]
            }.bind(null, i));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 59)
}([function(t, e, n) {
    var r = n(24),
        i = n(25),
        o = n(26),
        a = n(27);
    t.exports = function(t) {
        return r(t) || i(t) || o(t) || a()
    }, t.exports.default = t.exports, t.exports.__esModule = !0
}, function(t, e, n) {
    var r, i, o;
    /*!
     * Flickity v2.2.2
     * Touch, responsive, flickable carousels
     *
     * Licensed GPLv3 for open source use
     * or Flickity Commercial License for commercial use
     *
     * https://flickity.metafizzy.co
     * Copyright 2015-2021 Metafizzy
     */
    window, i = [n(6), n(38), n(40), n(41), n(42), n(43), n(44)], void 0 === (o = "function" == typeof(r = function(t) {
        return t
    }) ? r.apply(e, i) : r) || (t.exports = o)
}, function(t, e) {
    t.exports = function(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }, t.exports.default = t.exports, t.exports.__esModule = !0
}, function(t, e, n) {
    ! function(e, n) {
        var r = function(t, e, n) {
            "use strict";
            var r, i;
            if (function() {
                    var e, n = {
                        lazyClass: "lazyload",
                        loadedClass: "lazyloaded",
                        loadingClass: "lazyloading",
                        preloadClass: "lazypreload",
                        errorClass: "lazyerror",
                        autosizesClass: "lazyautosizes",
                        fastLoadedClass: "ls-is-cached",
                        iframeLoadMode: 0,
                        srcAttr: "data-src",
                        srcsetAttr: "data-srcset",
                        sizesAttr: "data-sizes",
                        minSize: 40,
                        customMedia: {},
                        init: !0,
                        expFactor: 1.5,
                        hFac: .8,
                        loadMode: 2,
                        loadHidden: !0,
                        ricTimeout: 0,
                        throttleDelay: 125
                    };
                    for (e in i = t.lazySizesConfig || t.lazysizesConfig || {}, n) e in i || (i[e] = n[e])
                }(), !e || !e.getElementsByClassName) return {
                init: function() {},
                cfg: i,
                noSupport: !0
            };
            var o = e.documentElement,
                a = t.HTMLPictureElement,
                s = t.addEventListener.bind(t),
                c = t.setTimeout,
                u = t.requestAnimationFrame || c,
                l = t.requestIdleCallback,
                d = /^picture$/i,
                h = ["load", "error", "lazyincluded", "_lazyloaded"],
                f = {},
                p = Array.prototype.forEach,
                m = function(t, e) {
                    return f[e] || (f[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")), f[e].test(t.getAttribute("class") || "") && f[e]
                },
                g = function(t, e) {
                    m(t, e) || t.setAttribute("class", (t.getAttribute("class") || "").trim() + " " + e)
                },
                v = function(t, e) {
                    var n;
                    (n = m(t, e)) && t.setAttribute("class", (t.getAttribute("class") || "").replace(n, " "))
                },
                y = function(t, e, n) {
                    var r = n ? "addEventListener" : "removeEventListener";
                    n && y(t, e), h.forEach((function(n) {
                        t[r](n, e)
                    }))
                },
                b = function(t, n, i, o, a) {
                    var s = e.createEvent("Event");
                    return i || (i = {}), i.instance = r, s.initEvent(n, !o, !a), s.detail = i, t.dispatchEvent(s), s
                },
                w = function(e, n) {
                    var r;
                    !a && (r = t.picturefill || i.pf) ? (n && n.src && !e.getAttribute("srcset") && e.setAttribute("srcset", n.src), r({
                        reevaluate: !0,
                        elements: [e]
                    })) : n && n.src && (e.src = n.src)
                },
                _ = function(t, e) {
                    return (getComputedStyle(t, null) || {})[e]
                },
                E = function(t, e, n) {
                    for (n = n || t.offsetWidth; n < i.minSize && e && !t._lazysizesWidth;) n = e.offsetWidth, e = e.parentNode;
                    return n
                },
                S = (ft = [], pt = [], mt = ft, gt = function() {
                    var t = mt;
                    for (mt = ft.length ? pt : ft, dt = !0, ht = !1; t.length;) t.shift()();
                    dt = !1
                }, vt = function(t, n) {
                    dt && !n ? t.apply(this, arguments) : (mt.push(t), ht || (ht = !0, (e.hidden ? c : u)(gt)))
                }, vt._lsFlush = gt, vt),
                A = function(t, e) {
                    return e ? function() {
                        S(t)
                    } : function() {
                        var e = this,
                            n = arguments;
                        S((function() {
                            t.apply(e, n)
                        }))
                    }
                },
                k = function(t) {
                    var e, r, i = function() {
                            e = null, t()
                        },
                        o = function() {
                            var t = n.now() - r;
                            t < 99 ? c(o, 99 - t) : (l || i)(i)
                        };
                    return function() {
                        r = n.now(), e || (e = c(o, 99))
                    }
                },
                L = (W = /^img$/i, G = /^iframe$/i, $ = "onscroll" in t && !/(gle|ing)bot/.test(navigator.userAgent), Y = 0, J = 0, K = -1, X = function(t) {
                    J--, (!t || J < 0 || !t.target) && (J = 0)
                }, Z = function(t) {
                    return null == V && (V = "hidden" == _(e.body, "visibility")), V || !("hidden" == _(t.parentNode, "visibility") && "hidden" == _(t, "visibility"))
                }, Q = function(t, n) {
                    var r, i = t,
                        a = Z(t);
                    for (H -= n, U += n, z -= n, F += n; a && (i = i.offsetParent) && i != e.body && i != o;)(a = (_(i, "opacity") || 1) > 0) && "visible" != _(i, "overflow") && (r = i.getBoundingClientRect(), a = F > r.left && z < r.right && U > r.top - 1 && H < r.bottom + 1);
                    return a
                }, tt = function() {
                    var t, n, a, s, c, u, l, d, h, f, p, m, g = r.elements;
                    if ((j = i.loadMode) && J < 8 && (t = g.length)) {
                        for (n = 0, K++; n < t; n++)
                            if (g[n] && !g[n]._lazyRace)
                                if (!$ || r.prematureUnveil && r.prematureUnveil(g[n])) st(g[n]);
                                else if ((d = g[n].getAttribute("data-expand")) && (u = 1 * d) || (u = Y), f || (f = !i.expand || i.expand < 1 ? o.clientHeight > 500 && o.clientWidth > 500 ? 500 : 370 : i.expand, r._defEx = f, p = f * i.expFactor, m = i.hFac, V = null, Y < p && J < 1 && K > 2 && j > 2 && !e.hidden ? (Y = p, K = 0) : Y = j > 1 && K > 1 && J < 6 ? f : 0), h !== u && (R = innerWidth + u * m, B = innerHeight + u, l = -1 * u, h = u), a = g[n].getBoundingClientRect(), (U = a.bottom) >= l && (H = a.top) <= B && (F = a.right) >= l * m && (z = a.left) <= R && (U || F || z || H) && (i.loadHidden || Z(g[n])) && (I && J < 3 && !d && (j < 3 || K < 4) || Q(g[n], u))) {
                            if (st(g[n]), c = !0, J > 9) break
                        } else !c && I && !s && J < 4 && K < 4 && j > 2 && (D[0] || i.preloadAfterLoad) && (D[0] || !d && (U || F || z || H || "auto" != g[n].getAttribute(i.sizesAttr))) && (s = D[0] || g[n]);
                        s && !c && st(s)
                    }
                }, et = function(t) {
                    var e, r = 0,
                        o = i.throttleDelay,
                        a = i.ricTimeout,
                        s = function() {
                            e = !1, r = n.now(), t()
                        },
                        u = l && a > 49 ? function() {
                            l(s, {
                                timeout: a
                            }), a !== i.ricTimeout && (a = i.ricTimeout)
                        } : A((function() {
                            c(s)
                        }), !0);
                    return function(t) {
                        var i;
                        (t = !0 === t) && (a = 33), e || (e = !0, (i = o - (n.now() - r)) < 0 && (i = 0), t || i < 9 ? u() : c(u, i))
                    }
                }(tt), nt = function(t) {
                    var e = t.target;
                    e._lazyCache ? delete e._lazyCache : (X(t), g(e, i.loadedClass), v(e, i.loadingClass), y(e, it), b(e, "lazyloaded"))
                }, rt = A(nt), it = function(t) {
                    rt({
                        target: t.target
                    })
                }, ot = function(t) {
                    var e, n = t.getAttribute(i.srcsetAttr);
                    (e = i.customMedia[t.getAttribute("data-media") || t.getAttribute("media")]) && t.setAttribute("media", e), n && t.setAttribute("srcset", n)
                }, at = A((function(t, e, n, r, o) {
                    var a, s, u, l, h, f;
                    (h = b(t, "lazybeforeunveil", e)).defaultPrevented || (r && (n ? g(t, i.autosizesClass) : t.setAttribute("sizes", r)), s = t.getAttribute(i.srcsetAttr), a = t.getAttribute(i.srcAttr), o && (l = (u = t.parentNode) && d.test(u.nodeName || "")), f = e.firesLoad || "src" in t && (s || a || l), h = {
                        target: t
                    }, g(t, i.loadingClass), f && (clearTimeout(N), N = c(X, 2500), y(t, it, !0)), l && p.call(u.getElementsByTagName("source"), ot), s ? t.setAttribute("srcset", s) : a && !l && (G.test(t.nodeName) ? function(t, e) {
                        var n = t.getAttribute("data-load-mode") || i.iframeLoadMode;
                        0 == n ? t.contentWindow.location.replace(e) : 1 == n && (t.src = e)
                    }(t, a) : t.src = a), o && (s || l) && w(t, {
                        src: a
                    })), t._lazyRace && delete t._lazyRace, v(t, i.lazyClass), S((function() {
                        var e = t.complete && t.naturalWidth > 1;
                        f && !e || (e && g(t, i.fastLoadedClass), nt(h), t._lazyCache = !0, c((function() {
                            "_lazyCache" in t && delete t._lazyCache
                        }), 9)), "lazy" == t.loading && J--
                    }), !0)
                })), st = function(t) {
                    if (!t._lazyRace) {
                        var e, n = W.test(t.nodeName),
                            r = n && (t.getAttribute(i.sizesAttr) || t.getAttribute("sizes")),
                            o = "auto" == r;
                        (!o && I || !n || !t.getAttribute("src") && !t.srcset || t.complete || m(t, i.errorClass) || !m(t, i.lazyClass)) && (e = b(t, "lazyunveilread").detail, o && x.updateElem(t, !0, t.offsetWidth), t._lazyRace = !0, J++, at(t, e, o, r, n))
                    }
                }, ct = k((function() {
                    i.loadMode = 3, et()
                })), ut = function() {
                    3 == i.loadMode && (i.loadMode = 2), ct()
                }, lt = function() {
                    I || (n.now() - M < 999 ? c(lt, 999) : (I = !0, i.loadMode = 3, et(), s("scroll", ut, !0)))
                }, {
                    _: function() {
                        M = n.now(), r.elements = e.getElementsByClassName(i.lazyClass), D = e.getElementsByClassName(i.lazyClass + " " + i.preloadClass), s("scroll", et, !0), s("resize", et, !0), s("pageshow", (function(t) {
                            if (t.persisted) {
                                var n = e.querySelectorAll("." + i.loadingClass);
                                n.length && n.forEach && u((function() {
                                    n.forEach((function(t) {
                                        t.complete && st(t)
                                    }))
                                }))
                            }
                        })), t.MutationObserver ? new MutationObserver(et).observe(o, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (o.addEventListener("DOMNodeInserted", et, !0), o.addEventListener("DOMAttrModified", et, !0), setInterval(et, 999)), s("hashchange", et, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach((function(t) {
                            e.addEventListener(t, et, !0)
                        })), /d$|^c/.test(e.readyState) ? lt() : (s("load", lt), e.addEventListener("DOMContentLoaded", et), c(lt, 2e4)), r.elements.length ? (tt(), S._lsFlush()) : et()
                    },
                    checkElems: et,
                    unveil: st,
                    _aLSL: ut
                }),
                x = (O = A((function(t, e, n, r) {
                    var i, o, a;
                    if (t._lazysizesWidth = r, r += "px", t.setAttribute("sizes", r), d.test(e.nodeName || ""))
                        for (o = 0, a = (i = e.getElementsByTagName("source")).length; o < a; o++) i[o].setAttribute("sizes", r);
                    n.detail.dataAttr || w(t, n.detail)
                })), C = function(t, e, n) {
                    var r, i = t.parentNode;
                    i && (n = E(t, i, n), (r = b(t, "lazybeforesizes", {
                        width: n,
                        dataAttr: !!e
                    })).defaultPrevented || (n = r.detail.width) && n !== t._lazysizesWidth && O(t, i, r, n))
                }, P = k((function() {
                    var t, e = q.length;
                    if (e)
                        for (t = 0; t < e; t++) C(q[t])
                })), {
                    _: function() {
                        q = e.getElementsByClassName(i.autosizesClass), s("resize", P)
                    },
                    checkElems: P,
                    updateElem: C
                }),
                T = function() {
                    !T.i && e.getElementsByClassName && (T.i = !0, x._(), L._())
                };
            var q, O, C, P;
            var D, I, N, j, M, R, B, H, z, F, U, V, W, G, $, Y, J, K, X, Z, Q, tt, et, nt, rt, it, ot, at, st, ct, ut, lt;
            var dt, ht, ft, pt, mt, gt, vt;
            return c((function() {
                i.init && T()
            })), r = {
                cfg: i,
                autoSizer: x,
                loader: L,
                init: T,
                uP: w,
                aC: g,
                rC: v,
                hC: m,
                fire: b,
                gW: E,
                rAF: S
            }
        }(e, e.document, Date);
        e.lazySizes = r, t.exports && (t.exports = r)
    }("undefined" != typeof window ? window : {})
}, function(t, e, n) {
    var r, i;
    ! function(o, a) {
        r = [n(34)], void 0 === (i = function(t) {
            return function(t, e) {
                "use strict";
                var n = {
                        extend: function(t, e) {
                            for (var n in e) t[n] = e[n];
                            return t
                        },
                        modulo: function(t, e) {
                            return (t % e + e) % e
                        }
                    },
                    r = Array.prototype.slice;
                n.makeArray = function(t) {
                    return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? r.call(t) : [t]
                }, n.removeFrom = function(t, e) {
                    var n = t.indexOf(e); - 1 != n && t.splice(n, 1)
                }, n.getParent = function(t, n) {
                    for (; t.parentNode && t != document.body;)
                        if (t = t.parentNode, e(t, n)) return t
                }, n.getQueryElement = function(t) {
                    return "string" == typeof t ? document.querySelector(t) : t
                }, n.handleEvent = function(t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t)
                }, n.filterFindElements = function(t, r) {
                    t = n.makeArray(t);
                    var i = [];
                    return t.forEach((function(t) {
                        if (t instanceof HTMLElement)
                            if (r) {
                                e(t, r) && i.push(t);
                                for (var n = t.querySelectorAll(r), o = 0; o < n.length; o++) i.push(n[o])
                            } else i.push(t)
                    })), i
                }, n.debounceMethod = function(t, e, n) {
                    n = n || 100;
                    var r = t.prototype[e],
                        i = e + "Timeout";
                    t.prototype[e] = function() {
                        var t = this[i];
                        clearTimeout(t);
                        var e = arguments,
                            o = this;
                        this[i] = setTimeout((function() {
                            r.apply(o, e), delete o[i]
                        }), n)
                    }
                }, n.docReady = function(t) {
                    var e = document.readyState;
                    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
                }, n.toDashed = function(t) {
                    return t.replace(/(.)([A-Z])/g, (function(t, e, n) {
                        return e + "-" + n
                    })).toLowerCase()
                };
                var i = t.console;
                return n.htmlInit = function(e, r) {
                    n.docReady((function() {
                        var o = n.toDashed(r),
                            a = "data-" + o,
                            s = document.querySelectorAll("[" + a + "]"),
                            c = document.querySelectorAll(".js-" + o),
                            u = n.makeArray(s).concat(n.makeArray(c)),
                            l = a + "-options",
                            d = t.jQuery;
                        u.forEach((function(t) {
                            var n, o = t.getAttribute(a) || t.getAttribute(l);
                            try {
                                n = o && JSON.parse(o)
                            } catch (e) {
                                return void(i && i.error("Error parsing " + a + " on " + t.className + ": " + e))
                            }
                            var s = new e(t, n);
                            d && d.data(t, r, s)
                        }))
                    }))
                }, n
            }(o, t)
        }.apply(e, r)) || (t.exports = i)
    }(window)
}, function(t, e, n) {
    "use strict";
    t.exports = o, t.exports.isMobile = o, t.exports.default = o;
    var r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
        i = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i;

    function o(t) {
        t || (t = {});
        var e = t.ua;
        if (e || "undefined" == typeof navigator || (e = navigator.userAgent), e && e.headers && "string" == typeof e.headers["user-agent"] && (e = e.headers["user-agent"]), "string" != typeof e) return !1;
        var n = t.tablet ? i.test(e) : r.test(e);
        return !n && t.tablet && t.featureDetect && navigator && navigator.maxTouchPoints > 1 && -1 !== e.indexOf("Macintosh") && -1 !== e.indexOf("Safari") && (n = !0), n
    }
}, function(t, e, n) {
    var r, i;
    ! function(o, a) {
        r = [n(12), n(17), n(4), n(35), n(36), n(37)], void 0 === (i = function(t, e, n, r, i, a) {
            return function(t, e, n, r, i, o, a) {
                "use strict";
                var s = t.jQuery,
                    c = t.getComputedStyle,
                    u = t.console;

                function l(t, e) {
                    for (t = r.makeArray(t); t.length;) e.appendChild(t.shift())
                }
                var d = 0,
                    h = {};

                function f(t, e) {
                    var n = r.getQueryElement(t);
                    if (n) {
                        if (this.element = n, this.element.flickityGUID) {
                            var i = h[this.element.flickityGUID];
                            return i && i.option(e), i
                        }
                        s && (this.$element = s(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(e), this._create()
                    } else u && u.error("Bad element for Flickity: " + (n || t))
                }
                f.defaults = {
                    accessibility: !0,
                    cellAlign: "center",
                    freeScrollFriction: .075,
                    friction: .28,
                    namespaceJQueryEvents: !0,
                    percentPosition: !0,
                    resize: !0,
                    selectedAttraction: .025,
                    setGallerySize: !0
                }, f.createMethods = [];
                var p = f.prototype;
                r.extend(p, e.prototype), p._create = function() {
                    var e = this.guid = ++d;
                    for (var n in this.element.flickityGUID = e, h[e] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this), this.options.on) {
                        var r = this.options.on[n];
                        this.on(n, r)
                    }
                    f.createMethods.forEach((function(t) {
                        this[t]()
                    }), this), this.options.watchCSS ? this.watchCSS() : this.activate()
                }, p.option = function(t) {
                    r.extend(this.options, t)
                }, p.activate = function() {
                    this.isActive || (this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), l(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready"))
                }, p._createSlider = function() {
                    var t = document.createElement("div");
                    t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
                }, p._filterFindCellElements = function(t) {
                    return r.filterFindElements(t, this.options.cellSelector)
                }, p.reloadCells = function() {
                    this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
                }, p._makeCells = function(t) {
                    return this._filterFindCellElements(t).map((function(t) {
                        return new i(t, this)
                    }), this)
                }, p.getLastCell = function() {
                    return this.cells[this.cells.length - 1]
                }, p.getLastSlide = function() {
                    return this.slides[this.slides.length - 1]
                }, p.positionCells = function() {
                    this._sizeCells(this.cells), this._positionCells(0)
                }, p._positionCells = function(t) {
                    t = t || 0, this.maxCellHeight = t && this.maxCellHeight || 0;
                    var e = 0;
                    if (t > 0) {
                        var n = this.cells[t - 1];
                        e = n.x + n.size.outerWidth
                    }
                    for (var r = this.cells.length, i = t; i < r; i++) {
                        var o = this.cells[i];
                        o.setPosition(e), e += o.size.outerWidth, this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight)
                    }
                    this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = r ? this.getLastSlide().target - this.slides[0].target : 0
                }, p._sizeCells = function(t) {
                    t.forEach((function(t) {
                        t.getSize()
                    }))
                }, p.updateSlides = function() {
                    if (this.slides = [], this.cells.length) {
                        var t = new o(this);
                        this.slides.push(t);
                        var e = "left" == this.originSide ? "marginRight" : "marginLeft",
                            n = this._getCanCellFit();
                        this.cells.forEach((function(r, i) {
                            if (t.cells.length) {
                                var a = t.outerWidth - t.firstMargin + (r.size.outerWidth - r.size[e]);
                                n.call(this, i, a) || (t.updateTarget(), t = new o(this), this.slides.push(t)), t.addCell(r)
                            } else t.addCell(r)
                        }), this), t.updateTarget(), this.updateSelectedSlide()
                    }
                }, p._getCanCellFit = function() {
                    var t = this.options.groupCells;
                    if (!t) return function() {
                        return !1
                    };
                    if ("number" == typeof t) {
                        var e = parseInt(t, 10);
                        return function(t) {
                            return t % e != 0
                        }
                    }
                    var n = "string" == typeof t && t.match(/^(\d+)%$/),
                        r = n ? parseInt(n[1], 10) / 100 : 1;
                    return function(t, e) {
                        return e <= (this.size.innerWidth + 1) * r
                    }
                }, p._init = p.reposition = function() {
                    this.positionCells(), this.positionSliderAtSelected()
                }, p.getSize = function() {
                    this.size = n(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
                };
                var m = {
                    center: {
                        left: .5,
                        right: .5
                    },
                    left: {
                        left: 0,
                        right: 1
                    },
                    right: {
                        right: 0,
                        left: 1
                    }
                };
                p.setCellAlign = function() {
                    var t = m[this.options.cellAlign];
                    this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
                }, p.setGallerySize = function() {
                    if (this.options.setGallerySize) {
                        var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
                        this.viewport.style.height = t + "px"
                    }
                }, p._getWrapShiftCells = function() {
                    if (this.options.wrapAround) {
                        this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
                        var t = this.cursorPosition,
                            e = this.cells.length - 1;
                        this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
                    }
                }, p._getGapCells = function(t, e, n) {
                    for (var r = []; t > 0;) {
                        var i = this.cells[e];
                        if (!i) break;
                        r.push(i), e += n, t -= i.size.outerWidth
                    }
                    return r
                }, p._containSlides = function() {
                    if (this.options.contain && !this.options.wrapAround && this.cells.length) {
                        var t = this.options.rightToLeft,
                            e = t ? "marginRight" : "marginLeft",
                            n = t ? "marginLeft" : "marginRight",
                            r = this.slideableWidth - this.getLastCell().size[n],
                            i = r < this.size.innerWidth,
                            o = this.cursorPosition + this.cells[0].size[e],
                            a = r - this.size.innerWidth * (1 - this.cellAlign);
                        this.slides.forEach((function(t) {
                            i ? t.target = r * this.cellAlign : (t.target = Math.max(t.target, o), t.target = Math.min(t.target, a))
                        }), this)
                    }
                }, p.dispatchEvent = function(t, e, n) {
                    var r = e ? [e].concat(n) : n;
                    if (this.emitEvent(t, r), s && this.$element) {
                        var i = t += this.options.namespaceJQueryEvents ? ".flickity" : "";
                        if (e) {
                            var o = new s.Event(e);
                            o.type = t, i = o
                        }
                        this.$element.trigger(i, n)
                    }
                }, p.select = function(t, e, n) {
                    if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = r.modulo(t, this.slides.length)), this.slides[t])) {
                        var i = this.selectedIndex;
                        this.selectedIndex = t, this.updateSelectedSlide(), n ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [t]), t != i && this.dispatchEvent("change", null, [t]), this.dispatchEvent("cellSelect")
                    }
                }, p._wrapSelect = function(t) {
                    var e = this.slides.length;
                    if (!(this.options.wrapAround && e > 1)) return t;
                    var n = r.modulo(t, e),
                        i = Math.abs(n - this.selectedIndex),
                        o = Math.abs(n + e - this.selectedIndex),
                        a = Math.abs(n - e - this.selectedIndex);
                    !this.isDragSelect && o < i ? t += e : !this.isDragSelect && a < i && (t -= e), t < 0 ? this.x -= this.slideableWidth : t >= e && (this.x += this.slideableWidth)
                }, p.previous = function(t, e) {
                    this.select(this.selectedIndex - 1, t, e)
                }, p.next = function(t, e) {
                    this.select(this.selectedIndex + 1, t, e)
                }, p.updateSelectedSlide = function() {
                    var t = this.slides[this.selectedIndex];
                    t && (this.unselectSelectedSlide(), this.selectedSlide = t, t.select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0])
                }, p.unselectSelectedSlide = function() {
                    this.selectedSlide && this.selectedSlide.unselect()
                }, p.selectInitialIndex = function() {
                    var t = this.options.initialIndex;
                    if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);
                    else {
                        if (t && "string" == typeof t)
                            if (this.queryCell(t)) return void this.selectCell(t, !1, !0);
                        var e = 0;
                        t && this.slides[t] && (e = t), this.select(e, !1, !0)
                    }
                }, p.selectCell = function(t, e, n) {
                    var r = this.queryCell(t);
                    if (r) {
                        var i = this.getCellSlideIndex(r);
                        this.select(i, e, n)
                    }
                }, p.getCellSlideIndex = function(t) {
                    for (var e = 0; e < this.slides.length; e++) {
                        if (-1 != this.slides[e].cells.indexOf(t)) return e
                    }
                }, p.getCell = function(t) {
                    for (var e = 0; e < this.cells.length; e++) {
                        var n = this.cells[e];
                        if (n.element == t) return n
                    }
                }, p.getCells = function(t) {
                    t = r.makeArray(t);
                    var e = [];
                    return t.forEach((function(t) {
                        var n = this.getCell(t);
                        n && e.push(n)
                    }), this), e
                }, p.getCellElements = function() {
                    return this.cells.map((function(t) {
                        return t.element
                    }))
                }, p.getParentCell = function(t) {
                    var e = this.getCell(t);
                    return e || (t = r.getParent(t, ".flickity-slider > *"), this.getCell(t))
                }, p.getAdjacentCellElements = function(t, e) {
                    if (!t) return this.selectedSlide.getCellElements();
                    e = void 0 === e ? this.selectedIndex : e;
                    var n = this.slides.length;
                    if (1 + 2 * t >= n) return this.getCellElements();
                    for (var i = [], o = e - t; o <= e + t; o++) {
                        var a = this.options.wrapAround ? r.modulo(o, n) : o,
                            s = this.slides[a];
                        s && (i = i.concat(s.getCellElements()))
                    }
                    return i
                }, p.queryCell = function(t) {
                    if ("number" == typeof t) return this.cells[t];
                    if ("string" == typeof t) {
                        if (t.match(/^[#.]?[\d/]/)) return;
                        t = this.element.querySelector(t)
                    }
                    return this.getCell(t)
                }, p.checkVisibility = function() {
                    var t = this.viewport.getBoundingClientRect().x,
                        e = this.viewport.offsetWidth;
                    this.options.wrapAround && (e -= 4), this.cells.forEach((function(n) {
                        var r = n.element.getBoundingClientRect().x - t;
                        if (r > -1 && r < 1 || r + n.size.innerWidth > t && r + n.size.innerWidth < e || r > t && r < e) {
                            n.element.classList.add("is-visible"), n.element.removeAttribute("aria-hidden");
                            n.element.querySelectorAll("button, a").forEach(t => t.tabIndex = 0)
                        } else {
                            n.element.classList.remove("is-visible"), n.element.setAttribute("aria-hidden", !0);
                            n.element.querySelectorAll("button, a").forEach(t => t.tabIndex = -1)
                        }
                    }))
                }, p.uiChange = function() {
                    this.emitEvent("uiChange")
                }, p.childUIPointerDown = function(t) {
                    "touchstart" != t.type && t.preventDefault(), this.focus()
                }, p.onresize = function() {
                    this.watchCSS(), this.resize()
                }, r.debounceMethod(f, "onresize", 150), p.resize = function() {
                    if (this.isActive) {
                        this.getSize(), this.options.wrapAround && (this.x = r.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
                        var t = this.selectedElements && this.selectedElements[0];
                        this.selectCell(t, !1, !0)
                    }
                }, p.watchCSS = function() {
                    this.options.watchCSS && (-1 != c(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
                }, p.onkeydown = function(t) {
                    var e = document.activeElement && document.activeElement != this.element;
                    if (this.options.accessibility && !e) {
                        var n = f.keyboardHandlers[t.keyCode];
                        n && n.call(this)
                    }
                }, f.keyboardHandlers = {
                    37: function() {
                        var t = this.options.rightToLeft ? "next" : "previous";
                        this.uiChange(), this[t]()
                    },
                    39: function() {
                        var t = this.options.rightToLeft ? "previous" : "next";
                        this.uiChange(), this[t]()
                    }
                }, p.focus = function() {
                    var e = t.pageYOffset;
                    this.element.focus({
                        preventScroll: !0
                    }), t.pageYOffset != e && t.scrollTo(t.pageXOffset, e)
                }, p.deactivate = function() {
                    this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach((function(t) {
                        t.destroy()
                    })), this.element.removeChild(this.viewport), l(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
                }, p.destroy = function() {
                    this.deactivate(), t.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), s && this.$element && s.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete h[this.guid]
                }, r.extend(p, a), f.data = function(t) {
                    var e = (t = r.getQueryElement(t)) && t.flickityGUID;
                    return e && h[e]
                }, r.htmlInit(f, "flickity"), s && s.bridget && s.bridget("flickity", f);
                return f.setJQuery = function(t) {
                    s = t
                }, f.Cell = i, f.Slide = o, f
            }(o, t, e, n, r, i, a)
        }.apply(e, r)) || (t.exports = i)
    }(window)
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.formatMoney = function(t, e) {
        "string" == typeof t && (t = t.replace(".", ""));
        var n = "",
            r = /\{\{\s*(\w+)\s*\}\}/,
            i = e || "${{amount}}";

        function o(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ",",
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".";
            if (isNaN(t) || null == t) return 0;
            var i = (t = (t / 100).toFixed(e)).split("."),
                o = i[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + n),
                a = i[1] ? r + i[1] : "";
            return o + a
        }
        switch (i.match(r)[1]) {
            case "amount":
                n = o(t, 2);
                break;
            case "amount_no_decimals":
                n = o(t, 0);
                break;
            case "amount_with_comma_separator":
                n = o(t, 2, ".", ",");
                break;
            case "amount_no_decimals_with_comma_separator":
                n = o(t, 0, ".", ",")
        }
        return i.replace(r, n)
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        this.listenerMap = [{}, {}], t && this.root(t), this.handle = r.prototype.handle.bind(this), this._removedListeners = []
    }

    function i(t, e) {
        return t.toLowerCase() === e.tagName.toLowerCase()
    }

    function o(t, e) {
        return this.rootElement === window ? e === document || e === document.documentElement || e === window : this.rootElement === e
    }

    function a(t, e) {
        return t === e.id
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r.prototype.root = function(t) {
        var e, n = this.listenerMap;
        if (this.rootElement) {
            for (e in n[1]) n[1].hasOwnProperty(e) && this.rootElement.removeEventListener(e, this.handle, !0);
            for (e in n[0]) n[0].hasOwnProperty(e) && this.rootElement.removeEventListener(e, this.handle, !1)
        }
        if (!t || !t.addEventListener) return this.rootElement && delete this.rootElement, this;
        for (e in this.rootElement = t, n[1]) n[1].hasOwnProperty(e) && this.rootElement.addEventListener(e, this.handle, !0);
        for (e in n[0]) n[0].hasOwnProperty(e) && this.rootElement.addEventListener(e, this.handle, !1);
        return this
    }, r.prototype.captureForType = function(t) {
        return -1 !== ["blur", "error", "focus", "load", "resize", "scroll"].indexOf(t)
    }, r.prototype.on = function(t, e, n, r) {
        var s, c, u, l;
        if (!t) throw new TypeError("Invalid event type: " + t);
        if ("function" == typeof e && (r = n, n = e, e = null), void 0 === r && (r = this.captureForType(t)), "function" != typeof n) throw new TypeError("Handler must be a type of Function");
        return s = this.rootElement, (c = this.listenerMap[r ? 1 : 0])[t] || (s && s.addEventListener(t, this.handle, r), c[t] = []), e ? /^[a-z]+$/i.test(e) ? (l = e, u = i) : /^#[a-z0-9\-_]+$/i.test(e) ? (l = e.slice(1), u = a) : (l = e, u = Element.prototype.matches) : (l = null, u = o.bind(this)), c[t].push({
            selector: e,
            handler: n,
            matcher: u,
            matcherParam: l
        }), this
    }, r.prototype.off = function(t, e, n, r) {
        var i, o, a, s, c;
        if ("function" == typeof e && (r = n, n = e, e = null), void 0 === r) return this.off(t, e, n, !0), this.off(t, e, n, !1), this;
        if (a = this.listenerMap[r ? 1 : 0], !t) {
            for (c in a) a.hasOwnProperty(c) && this.off(c, e, n);
            return this
        }
        if (!(s = a[t]) || !s.length) return this;
        for (i = s.length - 1; i >= 0; i--) o = s[i], e && e !== o.selector || n && n !== o.handler || (this._removedListeners.push(o), s.splice(i, 1));
        return s.length || (delete a[t], this.rootElement && this.rootElement.removeEventListener(t, this.handle, r)), this
    }, r.prototype.handle = function(t) {
        var e, n, r, i, o, a = t.type,
            s = [];
        if (!0 !== t.ftLabsDelegateIgnore) {
            switch (3 === (o = t.target).nodeType && (o = o.parentNode), o.correspondingUseElement && (o = o.correspondingUseElement), r = this.rootElement, t.eventPhase || (t.target !== t.currentTarget ? 3 : 2)) {
                case 1:
                    s = this.listenerMap[1][a];
                    break;
                case 2:
                    this.listenerMap[0] && this.listenerMap[0][a] && (s = s.concat(this.listenerMap[0][a])), this.listenerMap[1] && this.listenerMap[1][a] && (s = s.concat(this.listenerMap[1][a]));
                    break;
                case 3:
                    s = this.listenerMap[0][a]
            }
            var c, u = [];
            for (n = s.length; o && n;) {
                for (e = 0; e < n && (i = s[e]); e++) o.tagName && ["button", "input", "select", "textarea"].indexOf(o.tagName.toLowerCase()) > -1 && o.hasAttribute("disabled") ? u = [] : i.matcher.call(o, i.matcherParam, o) && u.push([t, o, i]);
                if (o === r) break;
                if (n = s.length, (o = o.parentElement || o.parentNode) instanceof HTMLDocument) break
            }
            for (e = 0; e < u.length; e++)
                if (!(this._removedListeners.indexOf(u[e][2]) > -1) && !1 === this.fire.apply(this, u[e])) {
                    u[e][0].ftLabsDelegateIgnore = !0, u[e][0].preventDefault(), c = !1;
                    break
                }
            return c
        }
    }, r.prototype.fire = function(t, e, n) {
        return n.handler.call(e, t, e)
    }, r.prototype.destroy = function() {
        this.off(), this.root()
    };
    var s = r;
    e.default = s, t.exports = e.default
}, function(t, e, n) {
    var r, i;
    ! function(o, a) {
        if (null === (typeof window !== "undefined" ? window : null)) throw new Error("Google-maps package can be used only in browser");
        void 0 === (i = "function" == typeof(r = function() {
            "use strict";
            var t = null,
                e = null,
                n = !1,
                r = [],
                i = [],
                o = null,
                a = {
                    URL: "https://maps.googleapis.com/maps/api/js",
                    KEY: null,
                    LIBRARIES: [],
                    CLIENT: null,
                    CHANNEL: null,
                    LANGUAGE: null,
                    REGION: null
                };
            a.VERSION = "3.31", a.WINDOW_CALLBACK_NAME = "__google_maps_api_provider_initializator__", a._googleMockApiObject = {}, a.load = function(t) {
                null === e ? !0 === n ? t && r.push(t) : (n = !0, window[a.WINDOW_CALLBACK_NAME] = function() {
                    s(t)
                }, a.createLoader()) : t && t(e)
            }, a.createLoader = function() {
                (t = document.createElement("script")).type = "text/javascript", t.src = a.createUrl(), document.body.appendChild(t)
            }, a.isLoaded = function() {
                return null !== e
            }, a.createUrl = function() {
                var t = a.URL;
                return t += "?callback=" + a.WINDOW_CALLBACK_NAME, a.KEY && (t += "&key=" + a.KEY), a.LIBRARIES.length > 0 && (t += "&libraries=" + a.LIBRARIES.join(",")), a.CLIENT && (t += "&client=" + a.CLIENT), a.CHANNEL && (t += "&channel=" + a.CHANNEL), a.LANGUAGE && (t += "&language=" + a.LANGUAGE), a.REGION && (t += "&region=" + a.REGION), a.VERSION && (t += "&v=" + a.VERSION), t
            }, a.release = function(s) {
                var c = function() {
                    a.KEY = null, a.LIBRARIES = [], a.CLIENT = null, a.CHANNEL = null, a.LANGUAGE = null, a.REGION = null, a.VERSION = "3.31", e = null, n = !1, r = [], i = [], void 0 !== window.google && delete window.google, void 0 !== window[a.WINDOW_CALLBACK_NAME] && delete window[a.WINDOW_CALLBACK_NAME], null !== o && (a.createLoader = o, o = null), null !== t && (t.parentElement.removeChild(t), t = null), s && s()
                };
                n ? a.load((function() {
                    c()
                })) : c()
            }, a.onLoad = function(t) {
                i.push(t)
            }, a.makeMock = function() {
                o = a.createLoader, a.createLoader = function() {
                    window.google = a._googleMockApiObject, window[a.WINDOW_CALLBACK_NAME]()
                }
            };
            var s = function(t) {
                var o;
                for (n = !1, null === e && (e = window.google), o = 0; o < i.length; o++) i[o](e);
                for (t && t(e), o = 0; o < r.length; o++) r[o](e);
                r = []
            };
            return a
        }) ? r.call(e, n, e, t) : r) || (t.exports = i)
    }()
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    (function(e) {
        t.exports = function() {
            "use strict";

            function t(e) {
                return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(e)
            }

            function n(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function r(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function i(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? i(Object(n), !0).forEach((function(e) {
                        r(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function a(t) {
                return function(t) {
                    if (Array.isArray(t)) return s(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return s(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function c(t, e) {
                if (!Array.isArray(t) || !t.length) return t;
                var n, r, i = o(o({}, {
                    strictlyTwoElementsInRangeArrays: !1,
                    progressFn: null
                }), e);
                if (i.strictlyTwoElementsInRangeArrays && !t.every((function(t, e) {
                        return 2 === t.length || (n = e, r = t.length, !1)
                    }))) throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ".concat(n, "th range (").concat(JSON.stringify(t[n], null, 4), ") has not two but ").concat(r, " elements!"));
                if (!t.every((function(t, e) {
                        return !(!Number.isInteger(t[0]) || t[0] < 0 || !Number.isInteger(t[1]) || t[1] < 0) || (n = e, !1)
                    }))) throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ".concat(n, "th range (").concat(JSON.stringify(t[n], null, 4), ") does not consist of only natural numbers!"));
                var a = t.length * t.length,
                    s = 0;
                return Array.from(t).sort((function(t, e) {
                    return i.progressFn && (s += 1, i.progressFn(Math.floor(100 * s / a))), t[0] === e[0] ? t[1] < e[1] ? -1 : t[1] > e[1] ? 1 : 0 : t[0] < e[0] ? -1 : 1
                }))
            }

            function u(e, n) {
                function r(t) {
                    return "string" == typeof t
                }

                function i(e) {
                    return e && "object" === t(e) && !Array.isArray(e)
                }
                if (!Array.isArray(e) || !e.length) return e;
                var s, u = {
                    mergeType: 1,
                    progressFn: null,
                    joinRangesThatTouchEdges: !0
                };
                if (n) {
                    if (!i(n)) throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(n, null, 4), " (type ").concat(t(n), ")"));
                    if ((s = o(o({}, u), n)).progressFn && i(s.progressFn) && !Object.keys(s.progressFn).length) s.progressFn = null;
                    else if (s.progressFn && "function" != typeof s.progressFn) throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'.concat(t(s.progressFn), '", equal to ').concat(JSON.stringify(s.progressFn, null, 4)));
                    if (s.mergeType && 1 !== s.mergeType && 2 !== s.mergeType)
                        if (r(s.mergeType) && "1" === s.mergeType.trim()) s.mergeType = 1;
                        else {
                            if (!r(s.mergeType) || "2" !== s.mergeType.trim()) throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(t(s.mergeType), '", equal to ').concat(JSON.stringify(s.mergeType, null, 4)));
                            s.mergeType = 2
                        }
                    if ("boolean" != typeof s.joinRangesThatTouchEdges) throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'.concat(t(s.joinRangesThatTouchEdges), '", equal to ').concat(JSON.stringify(s.joinRangesThatTouchEdges, null, 4)))
                } else s = o({}, u);
                for (var l, d, h, f = e.map((function(t) {
                        return a(t)
                    })).filter((function(t) {
                        return void 0 !== t[2] || t[0] !== t[1]
                    })), p = (l = s.progressFn ? c(f, {
                        progressFn: function(t) {
                            (h = Math.floor(t / 5)) !== d && (d = h, s.progressFn(h))
                        }
                    }) : c(f)).length - 1, m = p; m > 0; m--) s.progressFn && (h = Math.floor(78 * (1 - m / p)) + 21) !== d && h > d && (d = h, s.progressFn(h)), (l[m][0] <= l[m - 1][0] || !s.joinRangesThatTouchEdges && l[m][0] < l[m - 1][1] || s.joinRangesThatTouchEdges && l[m][0] <= l[m - 1][1]) && (l[m - 1][0] = Math.min(l[m][0], l[m - 1][0]), l[m - 1][1] = Math.max(l[m][1], l[m - 1][1]), void 0 !== l[m][2] && (l[m - 1][0] >= l[m][0] || l[m - 1][1] <= l[m][1]) && null !== l[m - 1][2] && (null === l[m][2] && null !== l[m - 1][2] ? l[m - 1][2] = null : void 0 !== l[m - 1][2] ? 2 === s.mergeType && l[m - 1][0] === l[m][0] ? l[m - 1][2] = l[m][2] : l[m - 1][2] += l[m][2] : l[m - 1][2] = l[m][2]), l.splice(m, 1), m = l.length);
                return l
            }

            function l(t) {
                return null != t
            }

            function d(t) {
                return "string" == typeof t
            }

            function h(e, n, r) {
                var i, o = 0,
                    a = 0;
                if (0 === arguments.length) throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");
                if (!d(e)) throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ".concat(t(e), ", equal to: ").concat(JSON.stringify(e, null, 4)));
                if (null === n) return e;
                if (!Array.isArray(n)) throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ".concat(t(n), ", equal to: ").concat(JSON.stringify(n, null, 4)));
                if (r && "function" != typeof r) throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ".concat(t(r), ", equal to: ").concat(JSON.stringify(r, null, 4)));
                var s = (i = Array.isArray(n) && (Number.isInteger(n[0]) && n[0] >= 0 || /^\d*$/.test(n[0])) && (Number.isInteger(n[1]) && n[1] >= 0 || /^\d*$/.test(n[1])) ? [Array.from(n)] : Array.from(n)).length,
                    c = 0;
                i.forEach((function(e, n) {
                    if (r && (o = Math.floor(c / s * 10)) !== a && (a = o, r(o)), !Array.isArray(e)) throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has ".concat(n, "th element not an array: ").concat(JSON.stringify(e, null, 4), ", which is ").concat(t(e)));
                    if (!Number.isInteger(e[0]) || e[0] < 0) {
                        if (!/^\d*$/.test(e[0])) throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has ".concat(n, "th element, array [").concat(e[0], ",").concat(e[1], "]. That array has first element not an integer, but ").concat(t(e[0]), ", equal to: ").concat(JSON.stringify(e[0], null, 4), ". Computer doesn't like this."));
                        i[n][0] = Number.parseInt(i[n][0], 10)
                    }
                    if (!Number.isInteger(e[1])) {
                        if (!/^\d*$/.test(e[1])) throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has ".concat(n, "th element, array [").concat(e[0], ",").concat(e[1], "]. That array has second element not an integer, but ").concat(t(e[1]), ", equal to: ").concat(JSON.stringify(e[1], null, 4), ". Computer doesn't like this."));
                        i[n][1] = Number.parseInt(i[n][1], 10)
                    }
                    c += 1
                }));
                var h = u(i, {
                        progressFn: function(t) {
                            r && (o = 10 + Math.floor(t / 10)) !== a && (a = o, r(o))
                        }
                    }),
                    f = h.length;
                if (f > 0) {
                    var p = e.slice(h[f - 1][1]);
                    e = h.reduce((function(t, n, i, s) {
                        r && (o = 20 + Math.floor(i / f * 80)) !== a && (a = o, r(o));
                        var c = 0 === i ? 0 : s[i - 1][1],
                            u = s[i][0];
                        return t + e.slice(c, u) + (l(s[i][2]) ? s[i][2] : "")
                    }), ""), e += p
                }
                return e
            }

            function f(t) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0;
                if (!(n.trim() || t.length && "\n" !== n && " " !== n && " " === (e ? t[t.length - 1] : t[0]) || t.length && "\n" === (e ? t[t.length - 1] : t[0]) && "\n" !== n && " " !== n))
                    if (e) {
                        if (("\n" === n || " " === n) && t.length && " " === t[t.length - 1])
                            for (; t.length && " " === t[t.length - 1];) t.pop();
                        t.push(" " === n || "\n" === n ? n : " ")
                    } else {
                        if (("\n" === n || " " === n) && t.length && " " === t[0])
                            for (; t.length && " " === t[0];) t.shift();
                        t.unshift(" " === n || "\n" === n ? n : " ")
                    }
            }

            function p(t, e) {
                if ("string" == typeof t && t.length) {
                    var n, r, i = !1;
                    if (t.includes("\r\n") && (i = !0), n = e && "number" == typeof e ? e : 1, "" === t.trim()) {
                        var o = [];
                        for (r = n, Array.from(t).forEach((function(t) {
                                ("\n" !== t || r) && ("\n" === t && (r -= 1), f(o, !0, t))
                            })); o.length > 1 && " " === o[o.length - 1];) o.pop();
                        return o.join("")
                    }
                    var a = [];
                    if (r = n, "" === t[0].trim())
                        for (var s = 0, c = t.length; s < c && !t[s].trim(); s++)("\n" !== t[s] || r) && ("\n" === t[s] && (r -= 1), f(a, !0, t[s]));
                    var u = [];
                    if (r = n, "" === t.slice(-1).trim())
                        for (var l = t.length; l-- && !t[l].trim();)("\n" !== t[l] || r) && ("\n" === t[l] && (r -= 1), f(u, !1, t[l]));
                    return i ? "".concat(a.join("")).concat(t.trim()).concat(u.join("")).replace(/\n/g, "\r\n") : a.join("") + t.trim() + u.join("")
                }
                return t
            }

            function m(t) {
                return null != t
            }

            function g(t) {
                return Number.isInteger(t) && t >= 0
            }

            function v(t) {
                return "string" == typeof t
            }

            function y(t) {
                return /^\d*$/.test(t) ? parseInt(t, 10) : t
            }
            var b, w, _ = function() {
                    function e(n) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        var r = o(o({}, {
                            limitToBeAddedWhitespace: !1,
                            limitLinebreaksCount: 1,
                            mergeType: 1
                        }), n);
                        if (r.mergeType && 1 !== r.mergeType && 2 !== r.mergeType)
                            if (v(r.mergeType) && "1" === r.mergeType.trim()) r.mergeType = 1;
                            else {
                                if (!v(r.mergeType) || "2" !== r.mergeType.trim()) throw new Error('ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(t(r.mergeType), '", equal to ').concat(JSON.stringify(r.mergeType, null, 4)));
                                r.mergeType = 2
                            }
                        this.opts = r
                    }
                    var r, i;
                    return r = e, (i = [{
                        key: "add",
                        value: function(e, n, r) {
                            for (var i = this, o = arguments.length, s = new Array(o > 3 ? o - 3 : 0), c = 3; c < o; c++) s[c - 3] = arguments[c];
                            if (s.length > 0) throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ".concat(JSON.stringify(s, null, 4)));
                            if (m(e) || m(n)) {
                                if (m(e) && !m(n)) {
                                    if (Array.isArray(e)) {
                                        if (e.length) {
                                            if (e.some((function(t) {
                                                    return Array.isArray(t)
                                                }))) return void e.forEach((function(t) {
                                                Array.isArray(t) && i.add.apply(i, a(t))
                                            }));
                                            e.length > 1 && g(y(e[0])) && g(y(e[1])) && this.add.apply(this, a(e))
                                        }
                                        return
                                    }
                                    throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set ('.concat(JSON.stringify(e, null, 0), ') but second-one, "to" is not (').concat(JSON.stringify(n, null, 0), ")"))
                                }
                                if (!m(e) && m(n)) throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set ('.concat(JSON.stringify(n, null, 0), ') but first-one, "from" is not (').concat(JSON.stringify(e, null, 0), ")"));
                                var u = /^\d*$/.test(e) ? parseInt(e, 10) : e,
                                    l = /^\d*$/.test(n) ? parseInt(n, 10) : n;
                                if (g(r) && (r = String(r)), !g(u) || !g(l)) throw g(u) && u >= 0 ? new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(t(l), '" equal to: ').concat(JSON.stringify(l, null, 4))) : new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(t(u), '" equal to: ').concat(JSON.stringify(u, null, 4)));
                                if (m(r) && !v(r) && !g(r)) throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ".concat(t(r), ", equal to:\n").concat(JSON.stringify(r, null, 4)));
                                if (m(this.slices) && Array.isArray(this.last()) && u === this.last()[1]) {
                                    if (this.last()[1] = l, this.last()[2], null !== this.last()[2] && m(r)) {
                                        var d = !(m(this.last()[2]) && this.last()[2].length > 0) || this.opts && this.opts.mergeType && 1 !== this.opts.mergeType ? r : this.last()[2] + r;
                                        this.opts.limitToBeAddedWhitespace && (d = p(d, this.opts.limitLinebreaksCount)), v(d) && !d.length || (this.last()[2] = d)
                                    }
                                } else {
                                    this.slices || (this.slices = []);
                                    var h = void 0 === r || v(r) && !r.length ? [u, l] : [u, l, this.opts.limitToBeAddedWhitespace ? p(r, this.opts.limitLinebreaksCount) : r];
                                    this.slices.push(h)
                                }
                            }
                        }
                    }, {
                        key: "push",
                        value: function(t, e, n) {
                            for (var r = arguments.length, i = new Array(r > 3 ? r - 3 : 0), o = 3; o < r; o++) i[o - 3] = arguments[o];
                            this.add.apply(this, [t, e, n].concat(i))
                        }
                    }, {
                        key: "current",
                        value: function() {
                            var t = this;
                            return null != this.slices ? (this.slices = u(this.slices, {
                                mergeType: this.opts.mergeType
                            }), this.opts.limitToBeAddedWhitespace ? this.slices.map((function(e) {
                                return m(e[2]) ? [e[0], e[1], p(e[2], t.opts.limitLinebreaksCount)] : e
                            })) : this.slices) : null
                        }
                    }, {
                        key: "wipe",
                        value: function() {
                            this.slices = void 0
                        }
                    }, {
                        key: "replace",
                        value: function(t) {
                            if (Array.isArray(t) && t.length) {
                                if (!Array.isArray(t[0]) || !g(t[0][0])) throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ".concat(JSON.stringify(t[0], null, 4), " should be an array and its first element should be an integer, a string index."));
                                this.slices = Array.from(t)
                            } else this.slices = void 0
                        }
                    }, {
                        key: "last",
                        value: function() {
                            return void 0 !== this.slices && Array.isArray(this.slices) ? this.slices[this.slices.length - 1] : null
                        }
                    }]) && n(r.prototype, i), e
                }(),
                E = Function.prototype,
                S = Object.prototype,
                A = E.toString,
                k = S.hasOwnProperty,
                L = A.call(Object),
                x = S.toString,
                T = (b = Object.getPrototypeOf, w = Object, function(t) {
                    return b(w(t))
                }),
                q = function(e) {
                    if (! function(e) {
                            return !!e && "object" == t(e)
                        }(e) || "[object Object]" != x.call(e) || function(t) {
                            var e = !1;
                            if (null != t && "function" != typeof t.toString) try {
                                e = !!(t + "")
                            } catch (t) {}
                            return e
                        }(e)) return !1;
                    var n = T(e);
                    if (null === n) return !0;
                    var r = k.call(n, "constructor") && n.constructor;
                    return "function" == typeof r && r instanceof r && A.call(r) == L
                },
                O = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};

            function C(t) {
                return t && t.default || t
            }
            var P = /^\s+|\s+$/g,
                D = "[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",
                I = "\\ud83c[\\udffb-\\udfff]",
                N = "[^\\ud800-\\udfff]",
                j = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                M = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                R = "(?:" + D + "|" + I + ")?",
                B = "[\\ufe0e\\ufe0f]?" + R + "(?:\\u200d(?:" + [N, j, M].join("|") + ")[\\ufe0e\\ufe0f]?" + R + ")*",
                H = "(?:" + [N + D + "?", D, j, M, "[\\ud800-\\udfff]"].join("|") + ")",
                z = RegExp(I + "(?=" + I + ")|" + H + B, "g"),
                F = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),
                U = "object" == t(O) && O && O.Object === Object && O,
                V = "object" == ("undefined" == typeof self ? "undefined" : t(self)) && self && self.Object === Object && self,
                W = U || V || Function("return this")();

            function G(t, e, n) {
                if (e != e) return function(t, e, n, r) {
                    for (var i = t.length, o = n + -1; ++o < i;)
                        if (e(t[o], o, t)) return o;
                    return -1
                }(t, $, n);
                for (var r = n - 1, i = t.length; ++r < i;)
                    if (t[r] === e) return r;
                return -1
            }

            function $(t) {
                return t != t
            }

            function Y(t) {
                return function(t) {
                    return F.test(t)
                }(t) ? function(t) {
                    return t.match(z) || []
                }(t) : function(t) {
                    return t.split("")
                }(t)
            }
            var J = Object.prototype.toString,
                K = W.Symbol,
                X = K ? K.prototype : void 0,
                Z = X ? X.toString : void 0;

            function Q(e) {
                if ("string" == typeof e) return e;
                if (function(e) {
                        return "symbol" == t(e) || function(e) {
                            return !!e && "object" == t(e)
                        }(e) && "[object Symbol]" == J.call(e)
                    }(e)) return Z ? Z.call(e) : "";
                var n = e + "";
                return "0" == n && 1 / e == -1 / 0 ? "-0" : n
            }
            var tt = function(t, e, n) {
                    var r;
                    if ((t = null == (r = t) ? "" : Q(r)) && (n || void 0 === e)) return t.replace(P, "");
                    if (!t || !(e = Q(e))) return t;
                    var i = Y(t),
                        o = Y(e);
                    return function(t, e, n) {
                        var r = t.length;
                        return n = void 0 === n ? r : n, !e && n >= r ? t : function(t, e, n) {
                            var r = -1,
                                i = t.length;
                            e < 0 && (e = -e > i ? 0 : i + e), (n = n > i ? i : n) < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
                            for (var o = Array(i); ++r < i;) o[r] = t[r + e];
                            return o
                        }(t, e, n)
                    }(i, function(t, e) {
                        for (var n = -1, r = t.length; ++n < r && G(e, t[n], 0) > -1;);
                        return n
                    }(i, o), function(t, e) {
                        for (var n = t.length; n-- && G(e, t[n], 0) > -1;);
                        return n
                    }(i, o) + 1).join("")
                },
                et = /^\[object .+?Constructor\]$/,
                nt = "object" == t(O) && O && O.Object === Object && O,
                rt = "object" == ("undefined" == typeof self ? "undefined" : t(self)) && self && self.Object === Object && self,
                it = nt || rt || Function("return this")();

            function ot(t, e, n) {
                switch (n.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, n[0]);
                    case 2:
                        return t.call(e, n[0], n[1]);
                    case 3:
                        return t.call(e, n[0], n[1], n[2])
                }
                return t.apply(e, n)
            }

            function at(t, e) {
                return !(!t || !t.length) && function(t, e, n) {
                    if (e != e) return function(t, e, n, r) {
                        for (var i = t.length, o = -1; ++o < i;)
                            if (e(t[o], o, t)) return o;
                        return -1
                    }(t, ct);
                    for (var r = -1, i = t.length; ++r < i;)
                        if (t[r] === e) return r;
                    return -1
                }(t, e) > -1
            }

            function st(t, e, n) {
                for (var r = -1, i = t ? t.length : 0; ++r < i;)
                    if (n(e, t[r])) return !0;
                return !1
            }

            function ct(t) {
                return t != t
            }

            function ut(t, e) {
                return t.has(e)
            }
            var lt, dt = Array.prototype,
                ht = Function.prototype,
                ft = Object.prototype,
                pt = it["__core-js_shared__"],
                mt = (lt = /[^.]+$/.exec(pt && pt.keys && pt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + lt : "",
                gt = ht.toString,
                vt = ft.hasOwnProperty,
                yt = ft.toString,
                bt = RegExp("^" + gt.call(vt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                wt = dt.splice,
                _t = Math.max,
                Et = Ot(it, "Map"),
                St = Ot(Object, "create");

            function At(t) {
                var e = -1,
                    n = t ? t.length : 0;
                for (this.clear(); ++e < n;) {
                    var r = t[e];
                    this.set(r[0], r[1])
                }
            }

            function kt(t) {
                var e = -1,
                    n = t ? t.length : 0;
                for (this.clear(); ++e < n;) {
                    var r = t[e];
                    this.set(r[0], r[1])
                }
            }

            function Lt(t) {
                var e = -1,
                    n = t ? t.length : 0;
                for (this.clear(); ++e < n;) {
                    var r = t[e];
                    this.set(r[0], r[1])
                }
            }

            function xt(t) {
                var e = -1,
                    n = t ? t.length : 0;
                for (this.__data__ = new Lt; ++e < n;) this.add(t[e])
            }

            function Tt(t, e) {
                for (var n, r, i = t.length; i--;)
                    if ((n = t[i][0]) === (r = e) || n != n && r != r) return i;
                return -1
            }

            function qt(e, n) {
                var r, i, o = e.__data__;
                return ("string" == (i = t(r = n)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== r : null === r) ? o["string" == typeof n ? "string" : "hash"] : o.map
            }

            function Ot(t, e) {
                var n = function(t, e) {
                    return null == t ? void 0 : t[e]
                }(t, e);
                return function(t) {
                    return !(!Pt(t) || function(t) {
                        return !!mt && mt in t
                    }(t)) && (Ct(t) || function(t) {
                        var e = !1;
                        if (null != t && "function" != typeof t.toString) try {
                            e = !!(t + "")
                        } catch (t) {}
                        return e
                    }(t) ? bt : et).test(function(t) {
                        if (null != t) {
                            try {
                                return gt.call(t)
                            } catch (t) {}
                            try {
                                return t + ""
                            } catch (t) {}
                        }
                        return ""
                    }(t))
                }(n) ? n : void 0
            }

            function Ct(t) {
                var e = Pt(t) ? yt.call(t) : "";
                return "[object Function]" == e || "[object GeneratorFunction]" == e
            }

            function Pt(e) {
                var n = t(e);
                return !!e && ("object" == n || "function" == n)
            }
            At.prototype.clear = function() {
                this.__data__ = St ? St(null) : {}
            }, At.prototype.delete = function(t) {
                return this.has(t) && delete this.__data__[t]
            }, At.prototype.get = function(t) {
                var e = this.__data__;
                if (St) {
                    var n = e[t];
                    return "__lodash_hash_undefined__" === n ? void 0 : n
                }
                return vt.call(e, t) ? e[t] : void 0
            }, At.prototype.has = function(t) {
                var e = this.__data__;
                return St ? void 0 !== e[t] : vt.call(e, t)
            }, At.prototype.set = function(t, e) {
                return this.__data__[t] = St && void 0 === e ? "__lodash_hash_undefined__" : e, this
            }, kt.prototype.clear = function() {
                this.__data__ = []
            }, kt.prototype.delete = function(t) {
                var e = this.__data__,
                    n = Tt(e, t);
                return !(n < 0 || (n == e.length - 1 ? e.pop() : wt.call(e, n, 1), 0))
            }, kt.prototype.get = function(t) {
                var e = this.__data__,
                    n = Tt(e, t);
                return n < 0 ? void 0 : e[n][1]
            }, kt.prototype.has = function(t) {
                return Tt(this.__data__, t) > -1
            }, kt.prototype.set = function(t, e) {
                var n = this.__data__,
                    r = Tt(n, t);
                return r < 0 ? n.push([t, e]) : n[r][1] = e, this
            }, Lt.prototype.clear = function() {
                this.__data__ = {
                    hash: new At,
                    map: new(Et || kt),
                    string: new At
                }
            }, Lt.prototype.delete = function(t) {
                return qt(this, t).delete(t)
            }, Lt.prototype.get = function(t) {
                return qt(this, t).get(t)
            }, Lt.prototype.has = function(t) {
                return qt(this, t).has(t)
            }, Lt.prototype.set = function(t, e) {
                return qt(this, t).set(t, e), this
            }, xt.prototype.add = xt.prototype.push = function(t) {
                return this.__data__.set(t, "__lodash_hash_undefined__"), this
            }, xt.prototype.has = function(t) {
                return this.__data__.has(t)
            };
            var Dt = function(t, e) {
                    return e = _t(void 0 === e ? t.length - 1 : e, 0),
                        function() {
                            for (var n = arguments, r = -1, i = _t(n.length - e, 0), o = Array(i); ++r < i;) o[r] = n[e + r];
                            r = -1;
                            for (var a = Array(e + 1); ++r < e;) a[r] = n[r];
                            return a[e] = o, ot(t, this, a)
                        }
                }((function(e, n) {
                    return function(e) {
                        return !!e && "object" == t(e)
                    }(r = e) && function(t) {
                        return null != t && function(t) {
                            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
                        }(t.length) && !Ct(t)
                    }(r) ? function(t, e, n, r) {
                        var i = -1,
                            o = at,
                            a = !0,
                            s = t.length,
                            c = [],
                            u = e.length;
                        if (!s) return c;
                        n && (e = function(t, e) {
                            for (var n = -1, r = t ? t.length : 0, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
                            return i
                        }(e, function(t) {
                            return function(e) {
                                return t(e)
                            }
                        }(n))), r ? (o = st, a = !1) : e.length >= 200 && (o = ut, a = !1, e = new xt(e));
                        t: for (; ++i < s;) {
                            var l = t[i],
                                d = n ? n(l) : l;
                            if (l = r || 0 !== l ? l : 0, a && d == d) {
                                for (var h = u; h--;)
                                    if (e[h] === d) continue t;
                                c.push(l)
                            } else o(e, d, r) || c.push(l)
                        }
                        return c
                    }(e, n) : [];
                    var r
                })),
                It = 2147483647,
                Nt = /^xn--/,
                jt = /[^\x20-\x7E]/,
                Mt = /[\x2E\u3002\uFF0E\uFF61]/g,
                Rt = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                Bt = Math.floor,
                Ht = String.fromCharCode;
            /*! https://mths.be/punycode v1.4.1 by @mathias */
            function zt(t) {
                throw new RangeError(Rt[t])
            }

            function Ft(t, e) {
                for (var n = t.length, r = []; n--;) r[n] = e(t[n]);
                return r
            }

            function Ut(t, e) {
                var n = t.split("@"),
                    r = "";
                return n.length > 1 && (r = n[0] + "@", t = n[1]), r + Ft((t = t.replace(Mt, ".")).split("."), e).join(".")
            }

            function Vt(t) {
                for (var e, n, r = [], i = 0, o = t.length; i < o;)(e = t.charCodeAt(i++)) >= 55296 && e <= 56319 && i < o ? 56320 == (64512 & (n = t.charCodeAt(i++))) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), i--) : r.push(e);
                return r
            }

            function Wt(t) {
                return Ft(t, (function(t) {
                    var e = "";
                    return t > 65535 && (e += Ht((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e + Ht(t)
                })).join("")
            }

            function Gt(t, e) {
                return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
            }

            function $t(t, e, n) {
                var r = 0;
                for (t = n ? Bt(t / 700) : t >> 1, t += Bt(t / e); t > 455; r += 36) t = Bt(t / 35);
                return Bt(r + 36 * t / (t + 38))
            }

            function Yt(t) {
                var e, n, r, i, o, a, s, c, u, l, d, h = [],
                    f = t.length,
                    p = 0,
                    m = 128,
                    g = 72;
                for ((n = t.lastIndexOf("-")) < 0 && (n = 0), r = 0; r < n; ++r) t.charCodeAt(r) >= 128 && zt("not-basic"), h.push(t.charCodeAt(r));
                for (i = n > 0 ? n + 1 : 0; i < f;) {
                    for (o = p, a = 1, s = 36; i >= f && zt("invalid-input"), ((c = (d = t.charCodeAt(i++)) - 48 < 10 ? d - 22 : d - 65 < 26 ? d - 65 : d - 97 < 26 ? d - 97 : 36) >= 36 || c > Bt((It - p) / a)) && zt("overflow"), p += c * a, !(c < (u = s <= g ? 1 : s >= g + 26 ? 26 : s - g)); s += 36) a > Bt(It / (l = 36 - u)) && zt("overflow"), a *= l;
                    g = $t(p - o, e = h.length + 1, 0 == o), Bt(p / e) > It - m && zt("overflow"), m += Bt(p / e), p %= e, h.splice(p++, 0, m)
                }
                return Wt(h)
            }

            function Jt(t) {
                var e, n, r, i, o, a, s, c, u, l, d, h, f, p, m, g = [];
                for (h = (t = Vt(t)).length, e = 128, n = 0, o = 72, a = 0; a < h; ++a)(d = t[a]) < 128 && g.push(Ht(d));
                for (r = i = g.length, i && g.push("-"); r < h;) {
                    for (s = It, a = 0; a < h; ++a)(d = t[a]) >= e && d < s && (s = d);
                    for (s - e > Bt((It - n) / (f = r + 1)) && zt("overflow"), n += (s - e) * f, e = s, a = 0; a < h; ++a)
                        if ((d = t[a]) < e && ++n > It && zt("overflow"), d == e) {
                            for (c = n, u = 36; !(c < (l = u <= o ? 1 : u >= o + 26 ? 26 : u - o)); u += 36) m = c - l, p = 36 - l, g.push(Ht(Gt(l + m % p, 0))), c = Bt(m / p);
                            g.push(Ht(Gt(c, 0))), o = $t(n, f, r == i), n = 0, ++r
                        }++n, ++e
                }
                return g.join("")
            }
            var Kt = {
                    version: "1.4.1",
                    ucs2: {
                        decode: Vt,
                        encode: Wt
                    },
                    toASCII: function(t) {
                        return Ut(t, (function(t) {
                            return jt.test(t) ? "xn--" + Jt(t) : t
                        }))
                    },
                    toUnicode: function(t) {
                        return Ut(t, (function(t) {
                            return Nt.test(t) ? Yt(t.slice(4).toLowerCase()) : t
                        }))
                    },
                    encode: Jt,
                    decode: Yt
                },
                Xt = (C(Object.freeze({
                    __proto__: null,
                    default: {
                        9: "Tab;",
                        10: "NewLine;",
                        33: "excl;",
                        34: "quot;",
                        35: "num;",
                        36: "dollar;",
                        37: "percnt;",
                        38: "amp;",
                        39: "apos;",
                        40: "lpar;",
                        41: "rpar;",
                        42: "midast;",
                        43: "plus;",
                        44: "comma;",
                        46: "period;",
                        47: "sol;",
                        58: "colon;",
                        59: "semi;",
                        60: "lt;",
                        61: "equals;",
                        62: "gt;",
                        63: "quest;",
                        64: "commat;",
                        91: "lsqb;",
                        92: "bsol;",
                        93: "rsqb;",
                        94: "Hat;",
                        95: "UnderBar;",
                        96: "grave;",
                        123: "lcub;",
                        124: "VerticalLine;",
                        125: "rcub;",
                        160: "NonBreakingSpace;",
                        161: "iexcl;",
                        162: "cent;",
                        163: "pound;",
                        164: "curren;",
                        165: "yen;",
                        166: "brvbar;",
                        167: "sect;",
                        168: "uml;",
                        169: "copy;",
                        170: "ordf;",
                        171: "laquo;",
                        172: "not;",
                        173: "shy;",
                        174: "reg;",
                        175: "strns;",
                        176: "deg;",
                        177: "pm;",
                        178: "sup2;",
                        179: "sup3;",
                        180: "DiacriticalAcute;",
                        181: "micro;",
                        182: "para;",
                        183: "middot;",
                        184: "Cedilla;",
                        185: "sup1;",
                        186: "ordm;",
                        187: "raquo;",
                        188: "frac14;",
                        189: "half;",
                        190: "frac34;",
                        191: "iquest;",
                        192: "Agrave;",
                        193: "Aacute;",
                        194: "Acirc;",
                        195: "Atilde;",
                        196: "Auml;",
                        197: "Aring;",
                        198: "AElig;",
                        199: "Ccedil;",
                        200: "Egrave;",
                        201: "Eacute;",
                        202: "Ecirc;",
                        203: "Euml;",
                        204: "Igrave;",
                        205: "Iacute;",
                        206: "Icirc;",
                        207: "Iuml;",
                        208: "ETH;",
                        209: "Ntilde;",
                        210: "Ograve;",
                        211: "Oacute;",
                        212: "Ocirc;",
                        213: "Otilde;",
                        214: "Ouml;",
                        215: "times;",
                        216: "Oslash;",
                        217: "Ugrave;",
                        218: "Uacute;",
                        219: "Ucirc;",
                        220: "Uuml;",
                        221: "Yacute;",
                        222: "THORN;",
                        223: "szlig;",
                        224: "agrave;",
                        225: "aacute;",
                        226: "acirc;",
                        227: "atilde;",
                        228: "auml;",
                        229: "aring;",
                        230: "aelig;",
                        231: "ccedil;",
                        232: "egrave;",
                        233: "eacute;",
                        234: "ecirc;",
                        235: "euml;",
                        236: "igrave;",
                        237: "iacute;",
                        238: "icirc;",
                        239: "iuml;",
                        240: "eth;",
                        241: "ntilde;",
                        242: "ograve;",
                        243: "oacute;",
                        244: "ocirc;",
                        245: "otilde;",
                        246: "ouml;",
                        247: "divide;",
                        248: "oslash;",
                        249: "ugrave;",
                        250: "uacute;",
                        251: "ucirc;",
                        252: "uuml;",
                        253: "yacute;",
                        254: "thorn;",
                        255: "yuml;",
                        256: "Amacr;",
                        257: "amacr;",
                        258: "Abreve;",
                        259: "abreve;",
                        260: "Aogon;",
                        261: "aogon;",
                        262: "Cacute;",
                        263: "cacute;",
                        264: "Ccirc;",
                        265: "ccirc;",
                        266: "Cdot;",
                        267: "cdot;",
                        268: "Ccaron;",
                        269: "ccaron;",
                        270: "Dcaron;",
                        271: "dcaron;",
                        272: "Dstrok;",
                        273: "dstrok;",
                        274: "Emacr;",
                        275: "emacr;",
                        278: "Edot;",
                        279: "edot;",
                        280: "Eogon;",
                        281: "eogon;",
                        282: "Ecaron;",
                        283: "ecaron;",
                        284: "Gcirc;",
                        285: "gcirc;",
                        286: "Gbreve;",
                        287: "gbreve;",
                        288: "Gdot;",
                        289: "gdot;",
                        290: "Gcedil;",
                        292: "Hcirc;",
                        293: "hcirc;",
                        294: "Hstrok;",
                        295: "hstrok;",
                        296: "Itilde;",
                        297: "itilde;",
                        298: "Imacr;",
                        299: "imacr;",
                        302: "Iogon;",
                        303: "iogon;",
                        304: "Idot;",
                        305: "inodot;",
                        306: "IJlig;",
                        307: "ijlig;",
                        308: "Jcirc;",
                        309: "jcirc;",
                        310: "Kcedil;",
                        311: "kcedil;",
                        312: "kgreen;",
                        313: "Lacute;",
                        314: "lacute;",
                        315: "Lcedil;",
                        316: "lcedil;",
                        317: "Lcaron;",
                        318: "lcaron;",
                        319: "Lmidot;",
                        320: "lmidot;",
                        321: "Lstrok;",
                        322: "lstrok;",
                        323: "Nacute;",
                        324: "nacute;",
                        325: "Ncedil;",
                        326: "ncedil;",
                        327: "Ncaron;",
                        328: "ncaron;",
                        329: "napos;",
                        330: "ENG;",
                        331: "eng;",
                        332: "Omacr;",
                        333: "omacr;",
                        336: "Odblac;",
                        337: "odblac;",
                        338: "OElig;",
                        339: "oelig;",
                        340: "Racute;",
                        341: "racute;",
                        342: "Rcedil;",
                        343: "rcedil;",
                        344: "Rcaron;",
                        345: "rcaron;",
                        346: "Sacute;",
                        347: "sacute;",
                        348: "Scirc;",
                        349: "scirc;",
                        350: "Scedil;",
                        351: "scedil;",
                        352: "Scaron;",
                        353: "scaron;",
                        354: "Tcedil;",
                        355: "tcedil;",
                        356: "Tcaron;",
                        357: "tcaron;",
                        358: "Tstrok;",
                        359: "tstrok;",
                        360: "Utilde;",
                        361: "utilde;",
                        362: "Umacr;",
                        363: "umacr;",
                        364: "Ubreve;",
                        365: "ubreve;",
                        366: "Uring;",
                        367: "uring;",
                        368: "Udblac;",
                        369: "udblac;",
                        370: "Uogon;",
                        371: "uogon;",
                        372: "Wcirc;",
                        373: "wcirc;",
                        374: "Ycirc;",
                        375: "ycirc;",
                        376: "Yuml;",
                        377: "Zacute;",
                        378: "zacute;",
                        379: "Zdot;",
                        380: "zdot;",
                        381: "Zcaron;",
                        382: "zcaron;",
                        402: "fnof;",
                        437: "imped;",
                        501: "gacute;",
                        567: "jmath;",
                        710: "circ;",
                        711: "Hacek;",
                        728: "breve;",
                        729: "dot;",
                        730: "ring;",
                        731: "ogon;",
                        732: "tilde;",
                        733: "DiacriticalDoubleAcute;",
                        785: "DownBreve;",
                        913: "Alpha;",
                        914: "Beta;",
                        915: "Gamma;",
                        916: "Delta;",
                        917: "Epsilon;",
                        918: "Zeta;",
                        919: "Eta;",
                        920: "Theta;",
                        921: "Iota;",
                        922: "Kappa;",
                        923: "Lambda;",
                        924: "Mu;",
                        925: "Nu;",
                        926: "Xi;",
                        927: "Omicron;",
                        928: "Pi;",
                        929: "Rho;",
                        931: "Sigma;",
                        932: "Tau;",
                        933: "Upsilon;",
                        934: "Phi;",
                        935: "Chi;",
                        936: "Psi;",
                        937: "Omega;",
                        945: "alpha;",
                        946: "beta;",
                        947: "gamma;",
                        948: "delta;",
                        949: "epsilon;",
                        950: "zeta;",
                        951: "eta;",
                        952: "theta;",
                        953: "iota;",
                        954: "kappa;",
                        955: "lambda;",
                        956: "mu;",
                        957: "nu;",
                        958: "xi;",
                        959: "omicron;",
                        960: "pi;",
                        961: "rho;",
                        962: "varsigma;",
                        963: "sigma;",
                        964: "tau;",
                        965: "upsilon;",
                        966: "phi;",
                        967: "chi;",
                        968: "psi;",
                        969: "omega;",
                        977: "vartheta;",
                        978: "upsih;",
                        981: "varphi;",
                        982: "varpi;",
                        988: "Gammad;",
                        989: "gammad;",
                        1008: "varkappa;",
                        1009: "varrho;",
                        1013: "varepsilon;",
                        1014: "bepsi;",
                        1025: "IOcy;",
                        1026: "DJcy;",
                        1027: "GJcy;",
                        1028: "Jukcy;",
                        1029: "DScy;",
                        1030: "Iukcy;",
                        1031: "YIcy;",
                        1032: "Jsercy;",
                        1033: "LJcy;",
                        1034: "NJcy;",
                        1035: "TSHcy;",
                        1036: "KJcy;",
                        1038: "Ubrcy;",
                        1039: "DZcy;",
                        1040: "Acy;",
                        1041: "Bcy;",
                        1042: "Vcy;",
                        1043: "Gcy;",
                        1044: "Dcy;",
                        1045: "IEcy;",
                        1046: "ZHcy;",
                        1047: "Zcy;",
                        1048: "Icy;",
                        1049: "Jcy;",
                        1050: "Kcy;",
                        1051: "Lcy;",
                        1052: "Mcy;",
                        1053: "Ncy;",
                        1054: "Ocy;",
                        1055: "Pcy;",
                        1056: "Rcy;",
                        1057: "Scy;",
                        1058: "Tcy;",
                        1059: "Ucy;",
                        1060: "Fcy;",
                        1061: "KHcy;",
                        1062: "TScy;",
                        1063: "CHcy;",
                        1064: "SHcy;",
                        1065: "SHCHcy;",
                        1066: "HARDcy;",
                        1067: "Ycy;",
                        1068: "SOFTcy;",
                        1069: "Ecy;",
                        1070: "YUcy;",
                        1071: "YAcy;",
                        1072: "acy;",
                        1073: "bcy;",
                        1074: "vcy;",
                        1075: "gcy;",
                        1076: "dcy;",
                        1077: "iecy;",
                        1078: "zhcy;",
                        1079: "zcy;",
                        1080: "icy;",
                        1081: "jcy;",
                        1082: "kcy;",
                        1083: "lcy;",
                        1084: "mcy;",
                        1085: "ncy;",
                        1086: "ocy;",
                        1087: "pcy;",
                        1088: "rcy;",
                        1089: "scy;",
                        1090: "tcy;",
                        1091: "ucy;",
                        1092: "fcy;",
                        1093: "khcy;",
                        1094: "tscy;",
                        1095: "chcy;",
                        1096: "shcy;",
                        1097: "shchcy;",
                        1098: "hardcy;",
                        1099: "ycy;",
                        1100: "softcy;",
                        1101: "ecy;",
                        1102: "yucy;",
                        1103: "yacy;",
                        1105: "iocy;",
                        1106: "djcy;",
                        1107: "gjcy;",
                        1108: "jukcy;",
                        1109: "dscy;",
                        1110: "iukcy;",
                        1111: "yicy;",
                        1112: "jsercy;",
                        1113: "ljcy;",
                        1114: "njcy;",
                        1115: "tshcy;",
                        1116: "kjcy;",
                        1118: "ubrcy;",
                        1119: "dzcy;",
                        8194: "ensp;",
                        8195: "emsp;",
                        8196: "emsp13;",
                        8197: "emsp14;",
                        8199: "numsp;",
                        8200: "puncsp;",
                        8201: "ThinSpace;",
                        8202: "VeryThinSpace;",
                        8203: "ZeroWidthSpace;",
                        8204: "zwnj;",
                        8205: "zwj;",
                        8206: "lrm;",
                        8207: "rlm;",
                        8208: "hyphen;",
                        8211: "ndash;",
                        8212: "mdash;",
                        8213: "horbar;",
                        8214: "Vert;",
                        8216: "OpenCurlyQuote;",
                        8217: "rsquor;",
                        8218: "sbquo;",
                        8220: "OpenCurlyDoubleQuote;",
                        8221: "rdquor;",
                        8222: "ldquor;",
                        8224: "dagger;",
                        8225: "ddagger;",
                        8226: "bullet;",
                        8229: "nldr;",
                        8230: "mldr;",
                        8240: "permil;",
                        8241: "pertenk;",
                        8242: "prime;",
                        8243: "Prime;",
                        8244: "tprime;",
                        8245: "bprime;",
                        8249: "lsaquo;",
                        8250: "rsaquo;",
                        8254: "OverBar;",
                        8257: "caret;",
                        8259: "hybull;",
                        8260: "frasl;",
                        8271: "bsemi;",
                        8279: "qprime;",
                        8287: "MediumSpace;",
                        8288: "NoBreak;",
                        8289: "ApplyFunction;",
                        8290: "it;",
                        8291: "InvisibleComma;",
                        8364: "euro;",
                        8411: "TripleDot;",
                        8412: "DotDot;",
                        8450: "Copf;",
                        8453: "incare;",
                        8458: "gscr;",
                        8459: "Hscr;",
                        8460: "Poincareplane;",
                        8461: "quaternions;",
                        8462: "planckh;",
                        8463: "plankv;",
                        8464: "Iscr;",
                        8465: "imagpart;",
                        8466: "Lscr;",
                        8467: "ell;",
                        8469: "Nopf;",
                        8470: "numero;",
                        8471: "copysr;",
                        8472: "wp;",
                        8473: "primes;",
                        8474: "rationals;",
                        8475: "Rscr;",
                        8476: "Rfr;",
                        8477: "Ropf;",
                        8478: "rx;",
                        8482: "trade;",
                        8484: "Zopf;",
                        8487: "mho;",
                        8488: "Zfr;",
                        8489: "iiota;",
                        8492: "Bscr;",
                        8493: "Cfr;",
                        8495: "escr;",
                        8496: "expectation;",
                        8497: "Fscr;",
                        8499: "phmmat;",
                        8500: "oscr;",
                        8501: "aleph;",
                        8502: "beth;",
                        8503: "gimel;",
                        8504: "daleth;",
                        8517: "DD;",
                        8518: "DifferentialD;",
                        8519: "exponentiale;",
                        8520: "ImaginaryI;",
                        8531: "frac13;",
                        8532: "frac23;",
                        8533: "frac15;",
                        8534: "frac25;",
                        8535: "frac35;",
                        8536: "frac45;",
                        8537: "frac16;",
                        8538: "frac56;",
                        8539: "frac18;",
                        8540: "frac38;",
                        8541: "frac58;",
                        8542: "frac78;",
                        8592: "slarr;",
                        8593: "uparrow;",
                        8594: "srarr;",
                        8595: "ShortDownArrow;",
                        8596: "leftrightarrow;",
                        8597: "varr;",
                        8598: "UpperLeftArrow;",
                        8599: "UpperRightArrow;",
                        8600: "searrow;",
                        8601: "swarrow;",
                        8602: "nleftarrow;",
                        8603: "nrightarrow;",
                        8605: "rightsquigarrow;",
                        8606: "twoheadleftarrow;",
                        8607: "Uarr;",
                        8608: "twoheadrightarrow;",
                        8609: "Darr;",
                        8610: "leftarrowtail;",
                        8611: "rightarrowtail;",
                        8612: "mapstoleft;",
                        8613: "UpTeeArrow;",
                        8614: "RightTeeArrow;",
                        8615: "mapstodown;",
                        8617: "larrhk;",
                        8618: "rarrhk;",
                        8619: "looparrowleft;",
                        8620: "rarrlp;",
                        8621: "leftrightsquigarrow;",
                        8622: "nleftrightarrow;",
                        8624: "lsh;",
                        8625: "rsh;",
                        8626: "ldsh;",
                        8627: "rdsh;",
                        8629: "crarr;",
                        8630: "curvearrowleft;",
                        8631: "curvearrowright;",
                        8634: "olarr;",
                        8635: "orarr;",
                        8636: "lharu;",
                        8637: "lhard;",
                        8638: "upharpoonright;",
                        8639: "upharpoonleft;",
                        8640: "RightVector;",
                        8641: "rightharpoondown;",
                        8642: "RightDownVector;",
                        8643: "LeftDownVector;",
                        8644: "rlarr;",
                        8645: "UpArrowDownArrow;",
                        8646: "lrarr;",
                        8647: "llarr;",
                        8648: "uuarr;",
                        8649: "rrarr;",
                        8650: "downdownarrows;",
                        8651: "ReverseEquilibrium;",
                        8652: "rlhar;",
                        8653: "nLeftarrow;",
                        8654: "nLeftrightarrow;",
                        8655: "nRightarrow;",
                        8656: "Leftarrow;",
                        8657: "Uparrow;",
                        8658: "Rightarrow;",
                        8659: "Downarrow;",
                        8660: "Leftrightarrow;",
                        8661: "vArr;",
                        8662: "nwArr;",
                        8663: "neArr;",
                        8664: "seArr;",
                        8665: "swArr;",
                        8666: "Lleftarrow;",
                        8667: "Rrightarrow;",
                        8669: "zigrarr;",
                        8676: "LeftArrowBar;",
                        8677: "RightArrowBar;",
                        8693: "duarr;",
                        8701: "loarr;",
                        8702: "roarr;",
                        8703: "hoarr;",
                        8704: "forall;",
                        8705: "complement;",
                        8706: "PartialD;",
                        8707: "Exists;",
                        8708: "NotExists;",
                        8709: "varnothing;",
                        8711: "nabla;",
                        8712: "isinv;",
                        8713: "notinva;",
                        8715: "SuchThat;",
                        8716: "NotReverseElement;",
                        8719: "Product;",
                        8720: "Coproduct;",
                        8721: "sum;",
                        8722: "minus;",
                        8723: "mp;",
                        8724: "plusdo;",
                        8726: "ssetmn;",
                        8727: "lowast;",
                        8728: "SmallCircle;",
                        8730: "Sqrt;",
                        8733: "vprop;",
                        8734: "infin;",
                        8735: "angrt;",
                        8736: "angle;",
                        8737: "measuredangle;",
                        8738: "angsph;",
                        8739: "VerticalBar;",
                        8740: "nsmid;",
                        8741: "spar;",
                        8742: "nspar;",
                        8743: "wedge;",
                        8744: "vee;",
                        8745: "cap;",
                        8746: "cup;",
                        8747: "Integral;",
                        8748: "Int;",
                        8749: "tint;",
                        8750: "oint;",
                        8751: "DoubleContourIntegral;",
                        8752: "Cconint;",
                        8753: "cwint;",
                        8754: "cwconint;",
                        8755: "CounterClockwiseContourIntegral;",
                        8756: "therefore;",
                        8757: "because;",
                        8758: "ratio;",
                        8759: "Proportion;",
                        8760: "minusd;",
                        8762: "mDDot;",
                        8763: "homtht;",
                        8764: "Tilde;",
                        8765: "bsim;",
                        8766: "mstpos;",
                        8767: "acd;",
                        8768: "wreath;",
                        8769: "nsim;",
                        8770: "esim;",
                        8771: "TildeEqual;",
                        8772: "nsimeq;",
                        8773: "TildeFullEqual;",
                        8774: "simne;",
                        8775: "NotTildeFullEqual;",
                        8776: "TildeTilde;",
                        8777: "NotTildeTilde;",
                        8778: "approxeq;",
                        8779: "apid;",
                        8780: "bcong;",
                        8781: "CupCap;",
                        8782: "HumpDownHump;",
                        8783: "HumpEqual;",
                        8784: "esdot;",
                        8785: "eDot;",
                        8786: "fallingdotseq;",
                        8787: "risingdotseq;",
                        8788: "coloneq;",
                        8789: "eqcolon;",
                        8790: "eqcirc;",
                        8791: "cire;",
                        8793: "wedgeq;",
                        8794: "veeeq;",
                        8796: "trie;",
                        8799: "questeq;",
                        8800: "NotEqual;",
                        8801: "equiv;",
                        8802: "NotCongruent;",
                        8804: "leq;",
                        8805: "GreaterEqual;",
                        8806: "LessFullEqual;",
                        8807: "GreaterFullEqual;",
                        8808: "lneqq;",
                        8809: "gneqq;",
                        8810: "NestedLessLess;",
                        8811: "NestedGreaterGreater;",
                        8812: "twixt;",
                        8813: "NotCupCap;",
                        8814: "NotLess;",
                        8815: "NotGreater;",
                        8816: "NotLessEqual;",
                        8817: "NotGreaterEqual;",
                        8818: "lsim;",
                        8819: "gtrsim;",
                        8820: "NotLessTilde;",
                        8821: "NotGreaterTilde;",
                        8822: "lg;",
                        8823: "gtrless;",
                        8824: "ntlg;",
                        8825: "ntgl;",
                        8826: "Precedes;",
                        8827: "Succeeds;",
                        8828: "PrecedesSlantEqual;",
                        8829: "SucceedsSlantEqual;",
                        8830: "prsim;",
                        8831: "succsim;",
                        8832: "nprec;",
                        8833: "nsucc;",
                        8834: "subset;",
                        8835: "supset;",
                        8836: "nsub;",
                        8837: "nsup;",
                        8838: "SubsetEqual;",
                        8839: "supseteq;",
                        8840: "nsubseteq;",
                        8841: "nsupseteq;",
                        8842: "subsetneq;",
                        8843: "supsetneq;",
                        8845: "cupdot;",
                        8846: "uplus;",
                        8847: "SquareSubset;",
                        8848: "SquareSuperset;",
                        8849: "SquareSubsetEqual;",
                        8850: "SquareSupersetEqual;",
                        8851: "SquareIntersection;",
                        8852: "SquareUnion;",
                        8853: "oplus;",
                        8854: "ominus;",
                        8855: "otimes;",
                        8856: "osol;",
                        8857: "odot;",
                        8858: "ocir;",
                        8859: "oast;",
                        8861: "odash;",
                        8862: "plusb;",
                        8863: "minusb;",
                        8864: "timesb;",
                        8865: "sdotb;",
                        8866: "vdash;",
                        8867: "LeftTee;",
                        8868: "top;",
                        8869: "UpTee;",
                        8871: "models;",
                        8872: "vDash;",
                        8873: "Vdash;",
                        8874: "Vvdash;",
                        8875: "VDash;",
                        8876: "nvdash;",
                        8877: "nvDash;",
                        8878: "nVdash;",
                        8879: "nVDash;",
                        8880: "prurel;",
                        8882: "vltri;",
                        8883: "vrtri;",
                        8884: "trianglelefteq;",
                        8885: "trianglerighteq;",
                        8886: "origof;",
                        8887: "imof;",
                        8888: "mumap;",
                        8889: "hercon;",
                        8890: "intercal;",
                        8891: "veebar;",
                        8893: "barvee;",
                        8894: "angrtvb;",
                        8895: "lrtri;",
                        8896: "xwedge;",
                        8897: "xvee;",
                        8898: "xcap;",
                        8899: "xcup;",
                        8900: "diamond;",
                        8901: "sdot;",
                        8902: "Star;",
                        8903: "divonx;",
                        8904: "bowtie;",
                        8905: "ltimes;",
                        8906: "rtimes;",
                        8907: "lthree;",
                        8908: "rthree;",
                        8909: "bsime;",
                        8910: "cuvee;",
                        8911: "cuwed;",
                        8912: "Subset;",
                        8913: "Supset;",
                        8914: "Cap;",
                        8915: "Cup;",
                        8916: "pitchfork;",
                        8917: "epar;",
                        8918: "ltdot;",
                        8919: "gtrdot;",
                        8920: "Ll;",
                        8921: "ggg;",
                        8922: "LessEqualGreater;",
                        8923: "gtreqless;",
                        8926: "curlyeqprec;",
                        8927: "curlyeqsucc;",
                        8928: "nprcue;",
                        8929: "nsccue;",
                        8930: "nsqsube;",
                        8931: "nsqsupe;",
                        8934: "lnsim;",
                        8935: "gnsim;",
                        8936: "prnsim;",
                        8937: "succnsim;",
                        8938: "ntriangleleft;",
                        8939: "ntriangleright;",
                        8940: "ntrianglelefteq;",
                        8941: "ntrianglerighteq;",
                        8942: "vellip;",
                        8943: "ctdot;",
                        8944: "utdot;",
                        8945: "dtdot;",
                        8946: "disin;",
                        8947: "isinsv;",
                        8948: "isins;",
                        8949: "isindot;",
                        8950: "notinvc;",
                        8951: "notinvb;",
                        8953: "isinE;",
                        8954: "nisd;",
                        8955: "xnis;",
                        8956: "nis;",
                        8957: "notnivc;",
                        8958: "notnivb;",
                        8965: "barwedge;",
                        8966: "doublebarwedge;",
                        8968: "LeftCeiling;",
                        8969: "RightCeiling;",
                        8970: "lfloor;",
                        8971: "RightFloor;",
                        8972: "drcrop;",
                        8973: "dlcrop;",
                        8974: "urcrop;",
                        8975: "ulcrop;",
                        8976: "bnot;",
                        8978: "profline;",
                        8979: "profsurf;",
                        8981: "telrec;",
                        8982: "target;",
                        8988: "ulcorner;",
                        8989: "urcorner;",
                        8990: "llcorner;",
                        8991: "lrcorner;",
                        8994: "sfrown;",
                        8995: "ssmile;",
                        9005: "cylcty;",
                        9006: "profalar;",
                        9014: "topbot;",
                        9021: "ovbar;",
                        9023: "solbar;",
                        9084: "angzarr;",
                        9136: "lmoustache;",
                        9137: "rmoustache;",
                        9140: "tbrk;",
                        9141: "UnderBracket;",
                        9142: "bbrktbrk;",
                        9180: "OverParenthesis;",
                        9181: "UnderParenthesis;",
                        9182: "OverBrace;",
                        9183: "UnderBrace;",
                        9186: "trpezium;",
                        9191: "elinters;",
                        9251: "blank;",
                        9416: "oS;",
                        9472: "HorizontalLine;",
                        9474: "boxv;",
                        9484: "boxdr;",
                        9488: "boxdl;",
                        9492: "boxur;",
                        9496: "boxul;",
                        9500: "boxvr;",
                        9508: "boxvl;",
                        9516: "boxhd;",
                        9524: "boxhu;",
                        9532: "boxvh;",
                        9552: "boxH;",
                        9553: "boxV;",
                        9554: "boxdR;",
                        9555: "boxDr;",
                        9556: "boxDR;",
                        9557: "boxdL;",
                        9558: "boxDl;",
                        9559: "boxDL;",
                        9560: "boxuR;",
                        9561: "boxUr;",
                        9562: "boxUR;",
                        9563: "boxuL;",
                        9564: "boxUl;",
                        9565: "boxUL;",
                        9566: "boxvR;",
                        9567: "boxVr;",
                        9568: "boxVR;",
                        9569: "boxvL;",
                        9570: "boxVl;",
                        9571: "boxVL;",
                        9572: "boxHd;",
                        9573: "boxhD;",
                        9574: "boxHD;",
                        9575: "boxHu;",
                        9576: "boxhU;",
                        9577: "boxHU;",
                        9578: "boxvH;",
                        9579: "boxVh;",
                        9580: "boxVH;",
                        9600: "uhblk;",
                        9604: "lhblk;",
                        9608: "block;",
                        9617: "blk14;",
                        9618: "blk12;",
                        9619: "blk34;",
                        9633: "square;",
                        9642: "squf;",
                        9643: "EmptyVerySmallSquare;",
                        9645: "rect;",
                        9646: "marker;",
                        9649: "fltns;",
                        9651: "xutri;",
                        9652: "utrif;",
                        9653: "utri;",
                        9656: "rtrif;",
                        9657: "triangleright;",
                        9661: "xdtri;",
                        9662: "dtrif;",
                        9663: "triangledown;",
                        9666: "ltrif;",
                        9667: "triangleleft;",
                        9674: "lozenge;",
                        9675: "cir;",
                        9708: "tridot;",
                        9711: "xcirc;",
                        9720: "ultri;",
                        9721: "urtri;",
                        9722: "lltri;",
                        9723: "EmptySmallSquare;",
                        9724: "FilledSmallSquare;",
                        9733: "starf;",
                        9734: "star;",
                        9742: "phone;",
                        9792: "female;",
                        9794: "male;",
                        9824: "spadesuit;",
                        9827: "clubsuit;",
                        9829: "heartsuit;",
                        9830: "diams;",
                        9834: "sung;",
                        9837: "flat;",
                        9838: "natural;",
                        9839: "sharp;",
                        10003: "checkmark;",
                        10007: "cross;",
                        10016: "maltese;",
                        10038: "sext;",
                        10072: "VerticalSeparator;",
                        10098: "lbbrk;",
                        10099: "rbbrk;",
                        10184: "bsolhsub;",
                        10185: "suphsol;",
                        10214: "lobrk;",
                        10215: "robrk;",
                        10216: "LeftAngleBracket;",
                        10217: "RightAngleBracket;",
                        10218: "Lang;",
                        10219: "Rang;",
                        10220: "loang;",
                        10221: "roang;",
                        10229: "xlarr;",
                        10230: "xrarr;",
                        10231: "xharr;",
                        10232: "xlArr;",
                        10233: "xrArr;",
                        10234: "xhArr;",
                        10236: "xmap;",
                        10239: "dzigrarr;",
                        10498: "nvlArr;",
                        10499: "nvrArr;",
                        10500: "nvHarr;",
                        10501: "Map;",
                        10508: "lbarr;",
                        10509: "rbarr;",
                        10510: "lBarr;",
                        10511: "rBarr;",
                        10512: "RBarr;",
                        10513: "DDotrahd;",
                        10514: "UpArrowBar;",
                        10515: "DownArrowBar;",
                        10518: "Rarrtl;",
                        10521: "latail;",
                        10522: "ratail;",
                        10523: "lAtail;",
                        10524: "rAtail;",
                        10525: "larrfs;",
                        10526: "rarrfs;",
                        10527: "larrbfs;",
                        10528: "rarrbfs;",
                        10531: "nwarhk;",
                        10532: "nearhk;",
                        10533: "searhk;",
                        10534: "swarhk;",
                        10535: "nwnear;",
                        10536: "toea;",
                        10537: "tosa;",
                        10538: "swnwar;",
                        10547: "rarrc;",
                        10549: "cudarrr;",
                        10550: "ldca;",
                        10551: "rdca;",
                        10552: "cudarrl;",
                        10553: "larrpl;",
                        10556: "curarrm;",
                        10557: "cularrp;",
                        10565: "rarrpl;",
                        10568: "harrcir;",
                        10569: "Uarrocir;",
                        10570: "lurdshar;",
                        10571: "ldrushar;",
                        10574: "LeftRightVector;",
                        10575: "RightUpDownVector;",
                        10576: "DownLeftRightVector;",
                        10577: "LeftUpDownVector;",
                        10578: "LeftVectorBar;",
                        10579: "RightVectorBar;",
                        10580: "RightUpVectorBar;",
                        10581: "RightDownVectorBar;",
                        10582: "DownLeftVectorBar;",
                        10583: "DownRightVectorBar;",
                        10584: "LeftUpVectorBar;",
                        10585: "LeftDownVectorBar;",
                        10586: "LeftTeeVector;",
                        10587: "RightTeeVector;",
                        10588: "RightUpTeeVector;",
                        10589: "RightDownTeeVector;",
                        10590: "DownLeftTeeVector;",
                        10591: "DownRightTeeVector;",
                        10592: "LeftUpTeeVector;",
                        10593: "LeftDownTeeVector;",
                        10594: "lHar;",
                        10595: "uHar;",
                        10596: "rHar;",
                        10597: "dHar;",
                        10598: "luruhar;",
                        10599: "ldrdhar;",
                        10600: "ruluhar;",
                        10601: "rdldhar;",
                        10602: "lharul;",
                        10603: "llhard;",
                        10604: "rharul;",
                        10605: "lrhard;",
                        10606: "UpEquilibrium;",
                        10607: "ReverseUpEquilibrium;",
                        10608: "RoundImplies;",
                        10609: "erarr;",
                        10610: "simrarr;",
                        10611: "larrsim;",
                        10612: "rarrsim;",
                        10613: "rarrap;",
                        10614: "ltlarr;",
                        10616: "gtrarr;",
                        10617: "subrarr;",
                        10619: "suplarr;",
                        10620: "lfisht;",
                        10621: "rfisht;",
                        10622: "ufisht;",
                        10623: "dfisht;",
                        10629: "lopar;",
                        10630: "ropar;",
                        10635: "lbrke;",
                        10636: "rbrke;",
                        10637: "lbrkslu;",
                        10638: "rbrksld;",
                        10639: "lbrksld;",
                        10640: "rbrkslu;",
                        10641: "langd;",
                        10642: "rangd;",
                        10643: "lparlt;",
                        10644: "rpargt;",
                        10645: "gtlPar;",
                        10646: "ltrPar;",
                        10650: "vzigzag;",
                        10652: "vangrt;",
                        10653: "angrtvbd;",
                        10660: "ange;",
                        10661: "range;",
                        10662: "dwangle;",
                        10663: "uwangle;",
                        10664: "angmsdaa;",
                        10665: "angmsdab;",
                        10666: "angmsdac;",
                        10667: "angmsdad;",
                        10668: "angmsdae;",
                        10669: "angmsdaf;",
                        10670: "angmsdag;",
                        10671: "angmsdah;",
                        10672: "bemptyv;",
                        10673: "demptyv;",
                        10674: "cemptyv;",
                        10675: "raemptyv;",
                        10676: "laemptyv;",
                        10677: "ohbar;",
                        10678: "omid;",
                        10679: "opar;",
                        10681: "operp;",
                        10683: "olcross;",
                        10684: "odsold;",
                        10686: "olcir;",
                        10687: "ofcir;",
                        10688: "olt;",
                        10689: "ogt;",
                        10690: "cirscir;",
                        10691: "cirE;",
                        10692: "solb;",
                        10693: "bsolb;",
                        10697: "boxbox;",
                        10701: "trisb;",
                        10702: "rtriltri;",
                        10703: "LeftTriangleBar;",
                        10704: "RightTriangleBar;",
                        10716: "iinfin;",
                        10717: "infintie;",
                        10718: "nvinfin;",
                        10723: "eparsl;",
                        10724: "smeparsl;",
                        10725: "eqvparsl;",
                        10731: "lozf;",
                        10740: "RuleDelayed;",
                        10742: "dsol;",
                        10752: "xodot;",
                        10753: "xoplus;",
                        10754: "xotime;",
                        10756: "xuplus;",
                        10758: "xsqcup;",
                        10764: "qint;",
                        10765: "fpartint;",
                        10768: "cirfnint;",
                        10769: "awint;",
                        10770: "rppolint;",
                        10771: "scpolint;",
                        10772: "npolint;",
                        10773: "pointint;",
                        10774: "quatint;",
                        10775: "intlarhk;",
                        10786: "pluscir;",
                        10787: "plusacir;",
                        10788: "simplus;",
                        10789: "plusdu;",
                        10790: "plussim;",
                        10791: "plustwo;",
                        10793: "mcomma;",
                        10794: "minusdu;",
                        10797: "loplus;",
                        10798: "roplus;",
                        10799: "Cross;",
                        10800: "timesd;",
                        10801: "timesbar;",
                        10803: "smashp;",
                        10804: "lotimes;",
                        10805: "rotimes;",
                        10806: "otimesas;",
                        10807: "Otimes;",
                        10808: "odiv;",
                        10809: "triplus;",
                        10810: "triminus;",
                        10811: "tritime;",
                        10812: "iprod;",
                        10815: "amalg;",
                        10816: "capdot;",
                        10818: "ncup;",
                        10819: "ncap;",
                        10820: "capand;",
                        10821: "cupor;",
                        10822: "cupcap;",
                        10823: "capcup;",
                        10824: "cupbrcap;",
                        10825: "capbrcup;",
                        10826: "cupcup;",
                        10827: "capcap;",
                        10828: "ccups;",
                        10829: "ccaps;",
                        10832: "ccupssm;",
                        10835: "And;",
                        10836: "Or;",
                        10837: "andand;",
                        10838: "oror;",
                        10839: "orslope;",
                        10840: "andslope;",
                        10842: "andv;",
                        10843: "orv;",
                        10844: "andd;",
                        10845: "ord;",
                        10847: "wedbar;",
                        10854: "sdote;",
                        10858: "simdot;",
                        10861: "congdot;",
                        10862: "easter;",
                        10863: "apacir;",
                        10864: "apE;",
                        10865: "eplus;",
                        10866: "pluse;",
                        10867: "Esim;",
                        10868: "Colone;",
                        10869: "Equal;",
                        10871: "eDDot;",
                        10872: "equivDD;",
                        10873: "ltcir;",
                        10874: "gtcir;",
                        10875: "ltquest;",
                        10876: "gtquest;",
                        10877: "LessSlantEqual;",
                        10878: "GreaterSlantEqual;",
                        10879: "lesdot;",
                        10880: "gesdot;",
                        10881: "lesdoto;",
                        10882: "gesdoto;",
                        10883: "lesdotor;",
                        10884: "gesdotol;",
                        10885: "lessapprox;",
                        10886: "gtrapprox;",
                        10887: "lneq;",
                        10888: "gneq;",
                        10889: "lnapprox;",
                        10890: "gnapprox;",
                        10891: "lesseqqgtr;",
                        10892: "gtreqqless;",
                        10893: "lsime;",
                        10894: "gsime;",
                        10895: "lsimg;",
                        10896: "gsiml;",
                        10897: "lgE;",
                        10898: "glE;",
                        10899: "lesges;",
                        10900: "gesles;",
                        10901: "eqslantless;",
                        10902: "eqslantgtr;",
                        10903: "elsdot;",
                        10904: "egsdot;",
                        10905: "el;",
                        10906: "eg;",
                        10909: "siml;",
                        10910: "simg;",
                        10911: "simlE;",
                        10912: "simgE;",
                        10913: "LessLess;",
                        10914: "GreaterGreater;",
                        10916: "glj;",
                        10917: "gla;",
                        10918: "ltcc;",
                        10919: "gtcc;",
                        10920: "lescc;",
                        10921: "gescc;",
                        10922: "smt;",
                        10923: "lat;",
                        10924: "smte;",
                        10925: "late;",
                        10926: "bumpE;",
                        10927: "preceq;",
                        10928: "succeq;",
                        10931: "prE;",
                        10932: "scE;",
                        10933: "prnE;",
                        10934: "succneqq;",
                        10935: "precapprox;",
                        10936: "succapprox;",
                        10937: "prnap;",
                        10938: "succnapprox;",
                        10939: "Pr;",
                        10940: "Sc;",
                        10941: "subdot;",
                        10942: "supdot;",
                        10943: "subplus;",
                        10944: "supplus;",
                        10945: "submult;",
                        10946: "supmult;",
                        10947: "subedot;",
                        10948: "supedot;",
                        10949: "subseteqq;",
                        10950: "supseteqq;",
                        10951: "subsim;",
                        10952: "supsim;",
                        10955: "subsetneqq;",
                        10956: "supsetneqq;",
                        10959: "csub;",
                        10960: "csup;",
                        10961: "csube;",
                        10962: "csupe;",
                        10963: "subsup;",
                        10964: "supsub;",
                        10965: "subsub;",
                        10966: "supsup;",
                        10967: "suphsub;",
                        10968: "supdsub;",
                        10969: "forkv;",
                        10970: "topfork;",
                        10971: "mlcp;",
                        10980: "DoubleLeftTee;",
                        10982: "Vdashl;",
                        10983: "Barv;",
                        10984: "vBar;",
                        10985: "vBarv;",
                        10987: "Vbar;",
                        10988: "Not;",
                        10989: "bNot;",
                        10990: "rnmid;",
                        10991: "cirmid;",
                        10992: "midcir;",
                        10993: "topcir;",
                        10994: "nhpar;",
                        10995: "parsim;",
                        11005: "parsl;",
                        64256: "fflig;",
                        64257: "filig;",
                        64258: "fllig;",
                        64259: "ffilig;",
                        64260: "ffllig;"
                    }
                })), C(Object.freeze({
                    __proto__: null,
                    Aacute: "Á",
                    aacute: "á",
                    Acirc: "Â",
                    acirc: "â",
                    acute: "´",
                    AElig: "Æ",
                    aelig: "æ",
                    Agrave: "À",
                    agrave: "à",
                    AMP: "&",
                    amp: "&",
                    Aring: "Å",
                    aring: "å",
                    Atilde: "Ã",
                    atilde: "ã",
                    Auml: "Ä",
                    auml: "ä",
                    brvbar: "¦",
                    Ccedil: "Ç",
                    ccedil: "ç",
                    cedil: "¸",
                    cent: "¢",
                    COPY: "©",
                    copy: "©",
                    curren: "¤",
                    deg: "°",
                    divide: "÷",
                    Eacute: "É",
                    eacute: "é",
                    Ecirc: "Ê",
                    ecirc: "ê",
                    Egrave: "È",
                    egrave: "è",
                    ETH: "Ð",
                    eth: "ð",
                    Euml: "Ë",
                    euml: "ë",
                    frac12: "½",
                    frac14: "¼",
                    frac34: "¾",
                    GT: ">",
                    gt: ">",
                    Iacute: "Í",
                    iacute: "í",
                    Icirc: "Î",
                    icirc: "î",
                    iexcl: "¡",
                    Igrave: "Ì",
                    igrave: "ì",
                    iquest: "¿",
                    Iuml: "Ï",
                    iuml: "ï",
                    laquo: "«",
                    LT: "<",
                    lt: "<",
                    macr: "¯",
                    micro: "µ",
                    middot: "·",
                    nbsp: " ",
                    not: "¬",
                    Ntilde: "Ñ",
                    ntilde: "ñ",
                    Oacute: "Ó",
                    oacute: "ó",
                    Ocirc: "Ô",
                    ocirc: "ô",
                    Ograve: "Ò",
                    ograve: "ò",
                    ordf: "ª",
                    ordm: "º",
                    Oslash: "Ø",
                    oslash: "ø",
                    Otilde: "Õ",
                    otilde: "õ",
                    Ouml: "Ö",
                    ouml: "ö",
                    para: "¶",
                    plusmn: "±",
                    pound: "£",
                    QUOT: '"',
                    quot: '"',
                    raquo: "»",
                    REG: "®",
                    reg: "®",
                    sect: "§",
                    shy: "­",
                    sup1: "¹",
                    sup2: "²",
                    sup3: "³",
                    szlig: "ß",
                    THORN: "Þ",
                    thorn: "þ",
                    times: "×",
                    Uacute: "Ú",
                    uacute: "ú",
                    Ucirc: "Û",
                    ucirc: "û",
                    Ugrave: "Ù",
                    ugrave: "ù",
                    uml: "¨",
                    Uuml: "Ü",
                    uuml: "ü",
                    Yacute: "Ý",
                    yacute: "ý",
                    yen: "¥",
                    yuml: "ÿ",
                    default: {
                        "Aacute;": "Á",
                        Aacute: "Á",
                        "aacute;": "á",
                        aacute: "á",
                        "Abreve;": "Ă",
                        "abreve;": "ă",
                        "ac;": "∾",
                        "acd;": "∿",
                        "acE;": "∾̳",
                        "Acirc;": "Â",
                        Acirc: "Â",
                        "acirc;": "â",
                        acirc: "â",
                        "acute;": "´",
                        acute: "´",
                        "Acy;": "А",
                        "acy;": "а",
                        "AElig;": "Æ",
                        AElig: "Æ",
                        "aelig;": "æ",
                        aelig: "æ",
                        "af;": "⁡",
                        "Afr;": "𝔄",
                        "afr;": "𝔞",
                        "Agrave;": "À",
                        Agrave: "À",
                        "agrave;": "à",
                        agrave: "à",
                        "alefsym;": "ℵ",
                        "aleph;": "ℵ",
                        "Alpha;": "Α",
                        "alpha;": "α",
                        "Amacr;": "Ā",
                        "amacr;": "ā",
                        "amalg;": "⨿",
                        "AMP;": "&",
                        AMP: "&",
                        "amp;": "&",
                        amp: "&",
                        "And;": "⩓",
                        "and;": "∧",
                        "andand;": "⩕",
                        "andd;": "⩜",
                        "andslope;": "⩘",
                        "andv;": "⩚",
                        "ang;": "∠",
                        "ange;": "⦤",
                        "angle;": "∠",
                        "angmsd;": "∡",
                        "angmsdaa;": "⦨",
                        "angmsdab;": "⦩",
                        "angmsdac;": "⦪",
                        "angmsdad;": "⦫",
                        "angmsdae;": "⦬",
                        "angmsdaf;": "⦭",
                        "angmsdag;": "⦮",
                        "angmsdah;": "⦯",
                        "angrt;": "∟",
                        "angrtvb;": "⊾",
                        "angrtvbd;": "⦝",
                        "angsph;": "∢",
                        "angst;": "Å",
                        "angzarr;": "⍼",
                        "Aogon;": "Ą",
                        "aogon;": "ą",
                        "Aopf;": "𝔸",
                        "aopf;": "𝕒",
                        "ap;": "≈",
                        "apacir;": "⩯",
                        "apE;": "⩰",
                        "ape;": "≊",
                        "apid;": "≋",
                        "apos;": "'",
                        "ApplyFunction;": "⁡",
                        "approx;": "≈",
                        "approxeq;": "≊",
                        "Aring;": "Å",
                        Aring: "Å",
                        "aring;": "å",
                        aring: "å",
                        "Ascr;": "𝒜",
                        "ascr;": "𝒶",
                        "Assign;": "≔",
                        "ast;": "*",
                        "asymp;": "≈",
                        "asympeq;": "≍",
                        "Atilde;": "Ã",
                        Atilde: "Ã",
                        "atilde;": "ã",
                        atilde: "ã",
                        "Auml;": "Ä",
                        Auml: "Ä",
                        "auml;": "ä",
                        auml: "ä",
                        "awconint;": "∳",
                        "awint;": "⨑",
                        "backcong;": "≌",
                        "backepsilon;": "϶",
                        "backprime;": "‵",
                        "backsim;": "∽",
                        "backsimeq;": "⋍",
                        "Backslash;": "∖",
                        "Barv;": "⫧",
                        "barvee;": "⊽",
                        "Barwed;": "⌆",
                        "barwed;": "⌅",
                        "barwedge;": "⌅",
                        "bbrk;": "⎵",
                        "bbrktbrk;": "⎶",
                        "bcong;": "≌",
                        "Bcy;": "Б",
                        "bcy;": "б",
                        "bdquo;": "„",
                        "becaus;": "∵",
                        "Because;": "∵",
                        "because;": "∵",
                        "bemptyv;": "⦰",
                        "bepsi;": "϶",
                        "bernou;": "ℬ",
                        "Bernoullis;": "ℬ",
                        "Beta;": "Β",
                        "beta;": "β",
                        "beth;": "ℶ",
                        "between;": "≬",
                        "Bfr;": "𝔅",
                        "bfr;": "𝔟",
                        "bigcap;": "⋂",
                        "bigcirc;": "◯",
                        "bigcup;": "⋃",
                        "bigodot;": "⨀",
                        "bigoplus;": "⨁",
                        "bigotimes;": "⨂",
                        "bigsqcup;": "⨆",
                        "bigstar;": "★",
                        "bigtriangledown;": "▽",
                        "bigtriangleup;": "△",
                        "biguplus;": "⨄",
                        "bigvee;": "⋁",
                        "bigwedge;": "⋀",
                        "bkarow;": "⤍",
                        "blacklozenge;": "⧫",
                        "blacksquare;": "▪",
                        "blacktriangle;": "▴",
                        "blacktriangledown;": "▾",
                        "blacktriangleleft;": "◂",
                        "blacktriangleright;": "▸",
                        "blank;": "␣",
                        "blk12;": "▒",
                        "blk14;": "░",
                        "blk34;": "▓",
                        "block;": "█",
                        "bne;": "=⃥",
                        "bnequiv;": "≡⃥",
                        "bNot;": "⫭",
                        "bnot;": "⌐",
                        "Bopf;": "𝔹",
                        "bopf;": "𝕓",
                        "bot;": "⊥",
                        "bottom;": "⊥",
                        "bowtie;": "⋈",
                        "boxbox;": "⧉",
                        "boxDL;": "╗",
                        "boxDl;": "╖",
                        "boxdL;": "╕",
                        "boxdl;": "┐",
                        "boxDR;": "╔",
                        "boxDr;": "╓",
                        "boxdR;": "╒",
                        "boxdr;": "┌",
                        "boxH;": "═",
                        "boxh;": "─",
                        "boxHD;": "╦",
                        "boxHd;": "╤",
                        "boxhD;": "╥",
                        "boxhd;": "┬",
                        "boxHU;": "╩",
                        "boxHu;": "╧",
                        "boxhU;": "╨",
                        "boxhu;": "┴",
                        "boxminus;": "⊟",
                        "boxplus;": "⊞",
                        "boxtimes;": "⊠",
                        "boxUL;": "╝",
                        "boxUl;": "╜",
                        "boxuL;": "╛",
                        "boxul;": "┘",
                        "boxUR;": "╚",
                        "boxUr;": "╙",
                        "boxuR;": "╘",
                        "boxur;": "└",
                        "boxV;": "║",
                        "boxv;": "│",
                        "boxVH;": "╬",
                        "boxVh;": "╫",
                        "boxvH;": "╪",
                        "boxvh;": "┼",
                        "boxVL;": "╣",
                        "boxVl;": "╢",
                        "boxvL;": "╡",
                        "boxvl;": "┤",
                        "boxVR;": "╠",
                        "boxVr;": "╟",
                        "boxvR;": "╞",
                        "boxvr;": "├",
                        "bprime;": "‵",
                        "Breve;": "˘",
                        "breve;": "˘",
                        "brvbar;": "¦",
                        brvbar: "¦",
                        "Bscr;": "ℬ",
                        "bscr;": "𝒷",
                        "bsemi;": "⁏",
                        "bsim;": "∽",
                        "bsime;": "⋍",
                        "bsol;": "\\",
                        "bsolb;": "⧅",
                        "bsolhsub;": "⟈",
                        "bull;": "•",
                        "bullet;": "•",
                        "bump;": "≎",
                        "bumpE;": "⪮",
                        "bumpe;": "≏",
                        "Bumpeq;": "≎",
                        "bumpeq;": "≏",
                        "Cacute;": "Ć",
                        "cacute;": "ć",
                        "Cap;": "⋒",
                        "cap;": "∩",
                        "capand;": "⩄",
                        "capbrcup;": "⩉",
                        "capcap;": "⩋",
                        "capcup;": "⩇",
                        "capdot;": "⩀",
                        "CapitalDifferentialD;": "ⅅ",
                        "caps;": "∩︀",
                        "caret;": "⁁",
                        "caron;": "ˇ",
                        "Cayleys;": "ℭ",
                        "ccaps;": "⩍",
                        "Ccaron;": "Č",
                        "ccaron;": "č",
                        "Ccedil;": "Ç",
                        Ccedil: "Ç",
                        "ccedil;": "ç",
                        ccedil: "ç",
                        "Ccirc;": "Ĉ",
                        "ccirc;": "ĉ",
                        "Cconint;": "∰",
                        "ccups;": "⩌",
                        "ccupssm;": "⩐",
                        "Cdot;": "Ċ",
                        "cdot;": "ċ",
                        "cedil;": "¸",
                        cedil: "¸",
                        "Cedilla;": "¸",
                        "cemptyv;": "⦲",
                        "cent;": "¢",
                        cent: "¢",
                        "CenterDot;": "·",
                        "centerdot;": "·",
                        "Cfr;": "ℭ",
                        "cfr;": "𝔠",
                        "CHcy;": "Ч",
                        "chcy;": "ч",
                        "check;": "✓",
                        "checkmark;": "✓",
                        "Chi;": "Χ",
                        "chi;": "χ",
                        "cir;": "○",
                        "circ;": "ˆ",
                        "circeq;": "≗",
                        "circlearrowleft;": "↺",
                        "circlearrowright;": "↻",
                        "circledast;": "⊛",
                        "circledcirc;": "⊚",
                        "circleddash;": "⊝",
                        "CircleDot;": "⊙",
                        "circledR;": "®",
                        "circledS;": "Ⓢ",
                        "CircleMinus;": "⊖",
                        "CirclePlus;": "⊕",
                        "CircleTimes;": "⊗",
                        "cirE;": "⧃",
                        "cire;": "≗",
                        "cirfnint;": "⨐",
                        "cirmid;": "⫯",
                        "cirscir;": "⧂",
                        "ClockwiseContourIntegral;": "∲",
                        "CloseCurlyDoubleQuote;": "”",
                        "CloseCurlyQuote;": "’",
                        "clubs;": "♣",
                        "clubsuit;": "♣",
                        "Colon;": "∷",
                        "colon;": ":",
                        "Colone;": "⩴",
                        "colone;": "≔",
                        "coloneq;": "≔",
                        "comma;": ",",
                        "commat;": "@",
                        "comp;": "∁",
                        "compfn;": "∘",
                        "complement;": "∁",
                        "complexes;": "ℂ",
                        "cong;": "≅",
                        "congdot;": "⩭",
                        "Congruent;": "≡",
                        "Conint;": "∯",
                        "conint;": "∮",
                        "ContourIntegral;": "∮",
                        "Copf;": "ℂ",
                        "copf;": "𝕔",
                        "coprod;": "∐",
                        "Coproduct;": "∐",
                        "COPY;": "©",
                        COPY: "©",
                        "copy;": "©",
                        copy: "©",
                        "copysr;": "℗",
                        "CounterClockwiseContourIntegral;": "∳",
                        "crarr;": "↵",
                        "Cross;": "⨯",
                        "cross;": "✗",
                        "Cscr;": "𝒞",
                        "cscr;": "𝒸",
                        "csub;": "⫏",
                        "csube;": "⫑",
                        "csup;": "⫐",
                        "csupe;": "⫒",
                        "ctdot;": "⋯",
                        "cudarrl;": "⤸",
                        "cudarrr;": "⤵",
                        "cuepr;": "⋞",
                        "cuesc;": "⋟",
                        "cularr;": "↶",
                        "cularrp;": "⤽",
                        "Cup;": "⋓",
                        "cup;": "∪",
                        "cupbrcap;": "⩈",
                        "CupCap;": "≍",
                        "cupcap;": "⩆",
                        "cupcup;": "⩊",
                        "cupdot;": "⊍",
                        "cupor;": "⩅",
                        "cups;": "∪︀",
                        "curarr;": "↷",
                        "curarrm;": "⤼",
                        "curlyeqprec;": "⋞",
                        "curlyeqsucc;": "⋟",
                        "curlyvee;": "⋎",
                        "curlywedge;": "⋏",
                        "curren;": "¤",
                        curren: "¤",
                        "curvearrowleft;": "↶",
                        "curvearrowright;": "↷",
                        "cuvee;": "⋎",
                        "cuwed;": "⋏",
                        "cwconint;": "∲",
                        "cwint;": "∱",
                        "cylcty;": "⌭",
                        "Dagger;": "‡",
                        "dagger;": "†",
                        "daleth;": "ℸ",
                        "Darr;": "↡",
                        "dArr;": "⇓",
                        "darr;": "↓",
                        "dash;": "‐",
                        "Dashv;": "⫤",
                        "dashv;": "⊣",
                        "dbkarow;": "⤏",
                        "dblac;": "˝",
                        "Dcaron;": "Ď",
                        "dcaron;": "ď",
                        "Dcy;": "Д",
                        "dcy;": "д",
                        "DD;": "ⅅ",
                        "dd;": "ⅆ",
                        "ddagger;": "‡",
                        "ddarr;": "⇊",
                        "DDotrahd;": "⤑",
                        "ddotseq;": "⩷",
                        "deg;": "°",
                        deg: "°",
                        "Del;": "∇",
                        "Delta;": "Δ",
                        "delta;": "δ",
                        "demptyv;": "⦱",
                        "dfisht;": "⥿",
                        "Dfr;": "𝔇",
                        "dfr;": "𝔡",
                        "dHar;": "⥥",
                        "dharl;": "⇃",
                        "dharr;": "⇂",
                        "DiacriticalAcute;": "´",
                        "DiacriticalDot;": "˙",
                        "DiacriticalDoubleAcute;": "˝",
                        "DiacriticalGrave;": "`",
                        "DiacriticalTilde;": "˜",
                        "diam;": "⋄",
                        "Diamond;": "⋄",
                        "diamond;": "⋄",
                        "diamondsuit;": "♦",
                        "diams;": "♦",
                        "die;": "¨",
                        "DifferentialD;": "ⅆ",
                        "digamma;": "ϝ",
                        "disin;": "⋲",
                        "div;": "÷",
                        "divide;": "÷",
                        divide: "÷",
                        "divideontimes;": "⋇",
                        "divonx;": "⋇",
                        "DJcy;": "Ђ",
                        "djcy;": "ђ",
                        "dlcorn;": "⌞",
                        "dlcrop;": "⌍",
                        "dollar;": "$",
                        "Dopf;": "𝔻",
                        "dopf;": "𝕕",
                        "Dot;": "¨",
                        "dot;": "˙",
                        "DotDot;": "⃜",
                        "doteq;": "≐",
                        "doteqdot;": "≑",
                        "DotEqual;": "≐",
                        "dotminus;": "∸",
                        "dotplus;": "∔",
                        "dotsquare;": "⊡",
                        "doublebarwedge;": "⌆",
                        "DoubleContourIntegral;": "∯",
                        "DoubleDot;": "¨",
                        "DoubleDownArrow;": "⇓",
                        "DoubleLeftArrow;": "⇐",
                        "DoubleLeftRightArrow;": "⇔",
                        "DoubleLeftTee;": "⫤",
                        "DoubleLongLeftArrow;": "⟸",
                        "DoubleLongLeftRightArrow;": "⟺",
                        "DoubleLongRightArrow;": "⟹",
                        "DoubleRightArrow;": "⇒",
                        "DoubleRightTee;": "⊨",
                        "DoubleUpArrow;": "⇑",
                        "DoubleUpDownArrow;": "⇕",
                        "DoubleVerticalBar;": "∥",
                        "DownArrow;": "↓",
                        "Downarrow;": "⇓",
                        "downarrow;": "↓",
                        "DownArrowBar;": "⤓",
                        "DownArrowUpArrow;": "⇵",
                        "DownBreve;": "̑",
                        "downdownarrows;": "⇊",
                        "downharpoonleft;": "⇃",
                        "downharpoonright;": "⇂",
                        "DownLeftRightVector;": "⥐",
                        "DownLeftTeeVector;": "⥞",
                        "DownLeftVector;": "↽",
                        "DownLeftVectorBar;": "⥖",
                        "DownRightTeeVector;": "⥟",
                        "DownRightVector;": "⇁",
                        "DownRightVectorBar;": "⥗",
                        "DownTee;": "⊤",
                        "DownTeeArrow;": "↧",
                        "drbkarow;": "⤐",
                        "drcorn;": "⌟",
                        "drcrop;": "⌌",
                        "Dscr;": "𝒟",
                        "dscr;": "𝒹",
                        "DScy;": "Ѕ",
                        "dscy;": "ѕ",
                        "dsol;": "⧶",
                        "Dstrok;": "Đ",
                        "dstrok;": "đ",
                        "dtdot;": "⋱",
                        "dtri;": "▿",
                        "dtrif;": "▾",
                        "duarr;": "⇵",
                        "duhar;": "⥯",
                        "dwangle;": "⦦",
                        "DZcy;": "Џ",
                        "dzcy;": "џ",
                        "dzigrarr;": "⟿",
                        "Eacute;": "É",
                        Eacute: "É",
                        "eacute;": "é",
                        eacute: "é",
                        "easter;": "⩮",
                        "Ecaron;": "Ě",
                        "ecaron;": "ě",
                        "ecir;": "≖",
                        "Ecirc;": "Ê",
                        Ecirc: "Ê",
                        "ecirc;": "ê",
                        ecirc: "ê",
                        "ecolon;": "≕",
                        "Ecy;": "Э",
                        "ecy;": "э",
                        "eDDot;": "⩷",
                        "Edot;": "Ė",
                        "eDot;": "≑",
                        "edot;": "ė",
                        "ee;": "ⅇ",
                        "efDot;": "≒",
                        "Efr;": "𝔈",
                        "efr;": "𝔢",
                        "eg;": "⪚",
                        "Egrave;": "È",
                        Egrave: "È",
                        "egrave;": "è",
                        egrave: "è",
                        "egs;": "⪖",
                        "egsdot;": "⪘",
                        "el;": "⪙",
                        "Element;": "∈",
                        "elinters;": "⏧",
                        "ell;": "ℓ",
                        "els;": "⪕",
                        "elsdot;": "⪗",
                        "Emacr;": "Ē",
                        "emacr;": "ē",
                        "empty;": "∅",
                        "emptyset;": "∅",
                        "EmptySmallSquare;": "◻",
                        "emptyv;": "∅",
                        "EmptyVerySmallSquare;": "▫",
                        "emsp;": " ",
                        "emsp13;": " ",
                        "emsp14;": " ",
                        "ENG;": "Ŋ",
                        "eng;": "ŋ",
                        "ensp;": " ",
                        "Eogon;": "Ę",
                        "eogon;": "ę",
                        "Eopf;": "𝔼",
                        "eopf;": "𝕖",
                        "epar;": "⋕",
                        "eparsl;": "⧣",
                        "eplus;": "⩱",
                        "epsi;": "ε",
                        "Epsilon;": "Ε",
                        "epsilon;": "ε",
                        "epsiv;": "ϵ",
                        "eqcirc;": "≖",
                        "eqcolon;": "≕",
                        "eqsim;": "≂",
                        "eqslantgtr;": "⪖",
                        "eqslantless;": "⪕",
                        "Equal;": "⩵",
                        "equals;": "=",
                        "EqualTilde;": "≂",
                        "equest;": "≟",
                        "Equilibrium;": "⇌",
                        "equiv;": "≡",
                        "equivDD;": "⩸",
                        "eqvparsl;": "⧥",
                        "erarr;": "⥱",
                        "erDot;": "≓",
                        "Escr;": "ℰ",
                        "escr;": "ℯ",
                        "esdot;": "≐",
                        "Esim;": "⩳",
                        "esim;": "≂",
                        "Eta;": "Η",
                        "eta;": "η",
                        "ETH;": "Ð",
                        ETH: "Ð",
                        "eth;": "ð",
                        eth: "ð",
                        "Euml;": "Ë",
                        Euml: "Ë",
                        "euml;": "ë",
                        euml: "ë",
                        "euro;": "€",
                        "excl;": "!",
                        "exist;": "∃",
                        "Exists;": "∃",
                        "expectation;": "ℰ",
                        "ExponentialE;": "ⅇ",
                        "exponentiale;": "ⅇ",
                        "fallingdotseq;": "≒",
                        "Fcy;": "Ф",
                        "fcy;": "ф",
                        "female;": "♀",
                        "ffilig;": "ﬃ",
                        "fflig;": "ﬀ",
                        "ffllig;": "ﬄ",
                        "Ffr;": "𝔉",
                        "ffr;": "𝔣",
                        "filig;": "ﬁ",
                        "FilledSmallSquare;": "◼",
                        "FilledVerySmallSquare;": "▪",
                        "fjlig;": "fj",
                        "flat;": "♭",
                        "fllig;": "ﬂ",
                        "fltns;": "▱",
                        "fnof;": "ƒ",
                        "Fopf;": "𝔽",
                        "fopf;": "𝕗",
                        "ForAll;": "∀",
                        "forall;": "∀",
                        "fork;": "⋔",
                        "forkv;": "⫙",
                        "Fouriertrf;": "ℱ",
                        "fpartint;": "⨍",
                        "frac12;": "½",
                        frac12: "½",
                        "frac13;": "⅓",
                        "frac14;": "¼",
                        frac14: "¼",
                        "frac15;": "⅕",
                        "frac16;": "⅙",
                        "frac18;": "⅛",
                        "frac23;": "⅔",
                        "frac25;": "⅖",
                        "frac34;": "¾",
                        frac34: "¾",
                        "frac35;": "⅗",
                        "frac38;": "⅜",
                        "frac45;": "⅘",
                        "frac56;": "⅚",
                        "frac58;": "⅝",
                        "frac78;": "⅞",
                        "frasl;": "⁄",
                        "frown;": "⌢",
                        "Fscr;": "ℱ",
                        "fscr;": "𝒻",
                        "gacute;": "ǵ",
                        "Gamma;": "Γ",
                        "gamma;": "γ",
                        "Gammad;": "Ϝ",
                        "gammad;": "ϝ",
                        "gap;": "⪆",
                        "Gbreve;": "Ğ",
                        "gbreve;": "ğ",
                        "Gcedil;": "Ģ",
                        "Gcirc;": "Ĝ",
                        "gcirc;": "ĝ",
                        "Gcy;": "Г",
                        "gcy;": "г",
                        "Gdot;": "Ġ",
                        "gdot;": "ġ",
                        "gE;": "≧",
                        "ge;": "≥",
                        "gEl;": "⪌",
                        "gel;": "⋛",
                        "geq;": "≥",
                        "geqq;": "≧",
                        "geqslant;": "⩾",
                        "ges;": "⩾",
                        "gescc;": "⪩",
                        "gesdot;": "⪀",
                        "gesdoto;": "⪂",
                        "gesdotol;": "⪄",
                        "gesl;": "⋛︀",
                        "gesles;": "⪔",
                        "Gfr;": "𝔊",
                        "gfr;": "𝔤",
                        "Gg;": "⋙",
                        "gg;": "≫",
                        "ggg;": "⋙",
                        "gimel;": "ℷ",
                        "GJcy;": "Ѓ",
                        "gjcy;": "ѓ",
                        "gl;": "≷",
                        "gla;": "⪥",
                        "glE;": "⪒",
                        "glj;": "⪤",
                        "gnap;": "⪊",
                        "gnapprox;": "⪊",
                        "gnE;": "≩",
                        "gne;": "⪈",
                        "gneq;": "⪈",
                        "gneqq;": "≩",
                        "gnsim;": "⋧",
                        "Gopf;": "𝔾",
                        "gopf;": "𝕘",
                        "grave;": "`",
                        "GreaterEqual;": "≥",
                        "GreaterEqualLess;": "⋛",
                        "GreaterFullEqual;": "≧",
                        "GreaterGreater;": "⪢",
                        "GreaterLess;": "≷",
                        "GreaterSlantEqual;": "⩾",
                        "GreaterTilde;": "≳",
                        "Gscr;": "𝒢",
                        "gscr;": "ℊ",
                        "gsim;": "≳",
                        "gsime;": "⪎",
                        "gsiml;": "⪐",
                        "GT;": ">",
                        GT: ">",
                        "Gt;": "≫",
                        "gt;": ">",
                        gt: ">",
                        "gtcc;": "⪧",
                        "gtcir;": "⩺",
                        "gtdot;": "⋗",
                        "gtlPar;": "⦕",
                        "gtquest;": "⩼",
                        "gtrapprox;": "⪆",
                        "gtrarr;": "⥸",
                        "gtrdot;": "⋗",
                        "gtreqless;": "⋛",
                        "gtreqqless;": "⪌",
                        "gtrless;": "≷",
                        "gtrsim;": "≳",
                        "gvertneqq;": "≩︀",
                        "gvnE;": "≩︀",
                        "Hacek;": "ˇ",
                        "hairsp;": " ",
                        "half;": "½",
                        "hamilt;": "ℋ",
                        "HARDcy;": "Ъ",
                        "hardcy;": "ъ",
                        "hArr;": "⇔",
                        "harr;": "↔",
                        "harrcir;": "⥈",
                        "harrw;": "↭",
                        "Hat;": "^",
                        "hbar;": "ℏ",
                        "Hcirc;": "Ĥ",
                        "hcirc;": "ĥ",
                        "hearts;": "♥",
                        "heartsuit;": "♥",
                        "hellip;": "…",
                        "hercon;": "⊹",
                        "Hfr;": "ℌ",
                        "hfr;": "𝔥",
                        "HilbertSpace;": "ℋ",
                        "hksearow;": "⤥",
                        "hkswarow;": "⤦",
                        "hoarr;": "⇿",
                        "homtht;": "∻",
                        "hookleftarrow;": "↩",
                        "hookrightarrow;": "↪",
                        "Hopf;": "ℍ",
                        "hopf;": "𝕙",
                        "horbar;": "―",
                        "HorizontalLine;": "─",
                        "Hscr;": "ℋ",
                        "hscr;": "𝒽",
                        "hslash;": "ℏ",
                        "Hstrok;": "Ħ",
                        "hstrok;": "ħ",
                        "HumpDownHump;": "≎",
                        "HumpEqual;": "≏",
                        "hybull;": "⁃",
                        "hyphen;": "‐",
                        "Iacute;": "Í",
                        Iacute: "Í",
                        "iacute;": "í",
                        iacute: "í",
                        "ic;": "⁣",
                        "Icirc;": "Î",
                        Icirc: "Î",
                        "icirc;": "î",
                        icirc: "î",
                        "Icy;": "И",
                        "icy;": "и",
                        "Idot;": "İ",
                        "IEcy;": "Е",
                        "iecy;": "е",
                        "iexcl;": "¡",
                        iexcl: "¡",
                        "iff;": "⇔",
                        "Ifr;": "ℑ",
                        "ifr;": "𝔦",
                        "Igrave;": "Ì",
                        Igrave: "Ì",
                        "igrave;": "ì",
                        igrave: "ì",
                        "ii;": "ⅈ",
                        "iiiint;": "⨌",
                        "iiint;": "∭",
                        "iinfin;": "⧜",
                        "iiota;": "℩",
                        "IJlig;": "Ĳ",
                        "ijlig;": "ĳ",
                        "Im;": "ℑ",
                        "Imacr;": "Ī",
                        "imacr;": "ī",
                        "image;": "ℑ",
                        "ImaginaryI;": "ⅈ",
                        "imagline;": "ℐ",
                        "imagpart;": "ℑ",
                        "imath;": "ı",
                        "imof;": "⊷",
                        "imped;": "Ƶ",
                        "Implies;": "⇒",
                        "in;": "∈",
                        "incare;": "℅",
                        "infin;": "∞",
                        "infintie;": "⧝",
                        "inodot;": "ı",
                        "Int;": "∬",
                        "int;": "∫",
                        "intcal;": "⊺",
                        "integers;": "ℤ",
                        "Integral;": "∫",
                        "intercal;": "⊺",
                        "Intersection;": "⋂",
                        "intlarhk;": "⨗",
                        "intprod;": "⨼",
                        "InvisibleComma;": "⁣",
                        "InvisibleTimes;": "⁢",
                        "IOcy;": "Ё",
                        "iocy;": "ё",
                        "Iogon;": "Į",
                        "iogon;": "į",
                        "Iopf;": "𝕀",
                        "iopf;": "𝕚",
                        "Iota;": "Ι",
                        "iota;": "ι",
                        "iprod;": "⨼",
                        "iquest;": "¿",
                        iquest: "¿",
                        "Iscr;": "ℐ",
                        "iscr;": "𝒾",
                        "isin;": "∈",
                        "isindot;": "⋵",
                        "isinE;": "⋹",
                        "isins;": "⋴",
                        "isinsv;": "⋳",
                        "isinv;": "∈",
                        "it;": "⁢",
                        "Itilde;": "Ĩ",
                        "itilde;": "ĩ",
                        "Iukcy;": "І",
                        "iukcy;": "і",
                        "Iuml;": "Ï",
                        Iuml: "Ï",
                        "iuml;": "ï",
                        iuml: "ï",
                        "Jcirc;": "Ĵ",
                        "jcirc;": "ĵ",
                        "Jcy;": "Й",
                        "jcy;": "й",
                        "Jfr;": "𝔍",
                        "jfr;": "𝔧",
                        "jmath;": "ȷ",
                        "Jopf;": "𝕁",
                        "jopf;": "𝕛",
                        "Jscr;": "𝒥",
                        "jscr;": "𝒿",
                        "Jsercy;": "Ј",
                        "jsercy;": "ј",
                        "Jukcy;": "Є",
                        "jukcy;": "є",
                        "Kappa;": "Κ",
                        "kappa;": "κ",
                        "kappav;": "ϰ",
                        "Kcedil;": "Ķ",
                        "kcedil;": "ķ",
                        "Kcy;": "К",
                        "kcy;": "к",
                        "Kfr;": "𝔎",
                        "kfr;": "𝔨",
                        "kgreen;": "ĸ",
                        "KHcy;": "Х",
                        "khcy;": "х",
                        "KJcy;": "Ќ",
                        "kjcy;": "ќ",
                        "Kopf;": "𝕂",
                        "kopf;": "𝕜",
                        "Kscr;": "𝒦",
                        "kscr;": "𝓀",
                        "lAarr;": "⇚",
                        "Lacute;": "Ĺ",
                        "lacute;": "ĺ",
                        "laemptyv;": "⦴",
                        "lagran;": "ℒ",
                        "Lambda;": "Λ",
                        "lambda;": "λ",
                        "Lang;": "⟪",
                        "lang;": "⟨",
                        "langd;": "⦑",
                        "langle;": "⟨",
                        "lap;": "⪅",
                        "Laplacetrf;": "ℒ",
                        "laquo;": "«",
                        laquo: "«",
                        "Larr;": "↞",
                        "lArr;": "⇐",
                        "larr;": "←",
                        "larrb;": "⇤",
                        "larrbfs;": "⤟",
                        "larrfs;": "⤝",
                        "larrhk;": "↩",
                        "larrlp;": "↫",
                        "larrpl;": "⤹",
                        "larrsim;": "⥳",
                        "larrtl;": "↢",
                        "lat;": "⪫",
                        "lAtail;": "⤛",
                        "latail;": "⤙",
                        "late;": "⪭",
                        "lates;": "⪭︀",
                        "lBarr;": "⤎",
                        "lbarr;": "⤌",
                        "lbbrk;": "❲",
                        "lbrace;": "{",
                        "lbrack;": "[",
                        "lbrke;": "⦋",
                        "lbrksld;": "⦏",
                        "lbrkslu;": "⦍",
                        "Lcaron;": "Ľ",
                        "lcaron;": "ľ",
                        "Lcedil;": "Ļ",
                        "lcedil;": "ļ",
                        "lceil;": "⌈",
                        "lcub;": "{",
                        "Lcy;": "Л",
                        "lcy;": "л",
                        "ldca;": "⤶",
                        "ldquo;": "“",
                        "ldquor;": "„",
                        "ldrdhar;": "⥧",
                        "ldrushar;": "⥋",
                        "ldsh;": "↲",
                        "lE;": "≦",
                        "le;": "≤",
                        "LeftAngleBracket;": "⟨",
                        "LeftArrow;": "←",
                        "Leftarrow;": "⇐",
                        "leftarrow;": "←",
                        "LeftArrowBar;": "⇤",
                        "LeftArrowRightArrow;": "⇆",
                        "leftarrowtail;": "↢",
                        "LeftCeiling;": "⌈",
                        "LeftDoubleBracket;": "⟦",
                        "LeftDownTeeVector;": "⥡",
                        "LeftDownVector;": "⇃",
                        "LeftDownVectorBar;": "⥙",
                        "LeftFloor;": "⌊",
                        "leftharpoondown;": "↽",
                        "leftharpoonup;": "↼",
                        "leftleftarrows;": "⇇",
                        "LeftRightArrow;": "↔",
                        "Leftrightarrow;": "⇔",
                        "leftrightarrow;": "↔",
                        "leftrightarrows;": "⇆",
                        "leftrightharpoons;": "⇋",
                        "leftrightsquigarrow;": "↭",
                        "LeftRightVector;": "⥎",
                        "LeftTee;": "⊣",
                        "LeftTeeArrow;": "↤",
                        "LeftTeeVector;": "⥚",
                        "leftthreetimes;": "⋋",
                        "LeftTriangle;": "⊲",
                        "LeftTriangleBar;": "⧏",
                        "LeftTriangleEqual;": "⊴",
                        "LeftUpDownVector;": "⥑",
                        "LeftUpTeeVector;": "⥠",
                        "LeftUpVector;": "↿",
                        "LeftUpVectorBar;": "⥘",
                        "LeftVector;": "↼",
                        "LeftVectorBar;": "⥒",
                        "lEg;": "⪋",
                        "leg;": "⋚",
                        "leq;": "≤",
                        "leqq;": "≦",
                        "leqslant;": "⩽",
                        "les;": "⩽",
                        "lescc;": "⪨",
                        "lesdot;": "⩿",
                        "lesdoto;": "⪁",
                        "lesdotor;": "⪃",
                        "lesg;": "⋚︀",
                        "lesges;": "⪓",
                        "lessapprox;": "⪅",
                        "lessdot;": "⋖",
                        "lesseqgtr;": "⋚",
                        "lesseqqgtr;": "⪋",
                        "LessEqualGreater;": "⋚",
                        "LessFullEqual;": "≦",
                        "LessGreater;": "≶",
                        "lessgtr;": "≶",
                        "LessLess;": "⪡",
                        "lesssim;": "≲",
                        "LessSlantEqual;": "⩽",
                        "LessTilde;": "≲",
                        "lfisht;": "⥼",
                        "lfloor;": "⌊",
                        "Lfr;": "𝔏",
                        "lfr;": "𝔩",
                        "lg;": "≶",
                        "lgE;": "⪑",
                        "lHar;": "⥢",
                        "lhard;": "↽",
                        "lharu;": "↼",
                        "lharul;": "⥪",
                        "lhblk;": "▄",
                        "LJcy;": "Љ",
                        "ljcy;": "љ",
                        "Ll;": "⋘",
                        "ll;": "≪",
                        "llarr;": "⇇",
                        "llcorner;": "⌞",
                        "Lleftarrow;": "⇚",
                        "llhard;": "⥫",
                        "lltri;": "◺",
                        "Lmidot;": "Ŀ",
                        "lmidot;": "ŀ",
                        "lmoust;": "⎰",
                        "lmoustache;": "⎰",
                        "lnap;": "⪉",
                        "lnapprox;": "⪉",
                        "lnE;": "≨",
                        "lne;": "⪇",
                        "lneq;": "⪇",
                        "lneqq;": "≨",
                        "lnsim;": "⋦",
                        "loang;": "⟬",
                        "loarr;": "⇽",
                        "lobrk;": "⟦",
                        "LongLeftArrow;": "⟵",
                        "Longleftarrow;": "⟸",
                        "longleftarrow;": "⟵",
                        "LongLeftRightArrow;": "⟷",
                        "Longleftrightarrow;": "⟺",
                        "longleftrightarrow;": "⟷",
                        "longmapsto;": "⟼",
                        "LongRightArrow;": "⟶",
                        "Longrightarrow;": "⟹",
                        "longrightarrow;": "⟶",
                        "looparrowleft;": "↫",
                        "looparrowright;": "↬",
                        "lopar;": "⦅",
                        "Lopf;": "𝕃",
                        "lopf;": "𝕝",
                        "loplus;": "⨭",
                        "lotimes;": "⨴",
                        "lowast;": "∗",
                        "lowbar;": "_",
                        "LowerLeftArrow;": "↙",
                        "LowerRightArrow;": "↘",
                        "loz;": "◊",
                        "lozenge;": "◊",
                        "lozf;": "⧫",
                        "lpar;": "(",
                        "lparlt;": "⦓",
                        "lrarr;": "⇆",
                        "lrcorner;": "⌟",
                        "lrhar;": "⇋",
                        "lrhard;": "⥭",
                        "lrm;": "‎",
                        "lrtri;": "⊿",
                        "lsaquo;": "‹",
                        "Lscr;": "ℒ",
                        "lscr;": "𝓁",
                        "Lsh;": "↰",
                        "lsh;": "↰",
                        "lsim;": "≲",
                        "lsime;": "⪍",
                        "lsimg;": "⪏",
                        "lsqb;": "[",
                        "lsquo;": "‘",
                        "lsquor;": "‚",
                        "Lstrok;": "Ł",
                        "lstrok;": "ł",
                        "LT;": "<",
                        LT: "<",
                        "Lt;": "≪",
                        "lt;": "<",
                        lt: "<",
                        "ltcc;": "⪦",
                        "ltcir;": "⩹",
                        "ltdot;": "⋖",
                        "lthree;": "⋋",
                        "ltimes;": "⋉",
                        "ltlarr;": "⥶",
                        "ltquest;": "⩻",
                        "ltri;": "◃",
                        "ltrie;": "⊴",
                        "ltrif;": "◂",
                        "ltrPar;": "⦖",
                        "lurdshar;": "⥊",
                        "luruhar;": "⥦",
                        "lvertneqq;": "≨︀",
                        "lvnE;": "≨︀",
                        "macr;": "¯",
                        macr: "¯",
                        "male;": "♂",
                        "malt;": "✠",
                        "maltese;": "✠",
                        "Map;": "⤅",
                        "map;": "↦",
                        "mapsto;": "↦",
                        "mapstodown;": "↧",
                        "mapstoleft;": "↤",
                        "mapstoup;": "↥",
                        "marker;": "▮",
                        "mcomma;": "⨩",
                        "Mcy;": "М",
                        "mcy;": "м",
                        "mdash;": "—",
                        "mDDot;": "∺",
                        "measuredangle;": "∡",
                        "MediumSpace;": " ",
                        "Mellintrf;": "ℳ",
                        "Mfr;": "𝔐",
                        "mfr;": "𝔪",
                        "mho;": "℧",
                        "micro;": "µ",
                        micro: "µ",
                        "mid;": "∣",
                        "midast;": "*",
                        "midcir;": "⫰",
                        "middot;": "·",
                        middot: "·",
                        "minus;": "−",
                        "minusb;": "⊟",
                        "minusd;": "∸",
                        "minusdu;": "⨪",
                        "MinusPlus;": "∓",
                        "mlcp;": "⫛",
                        "mldr;": "…",
                        "mnplus;": "∓",
                        "models;": "⊧",
                        "Mopf;": "𝕄",
                        "mopf;": "𝕞",
                        "mp;": "∓",
                        "Mscr;": "ℳ",
                        "mscr;": "𝓂",
                        "mstpos;": "∾",
                        "Mu;": "Μ",
                        "mu;": "μ",
                        "multimap;": "⊸",
                        "mumap;": "⊸",
                        "nabla;": "∇",
                        "Nacute;": "Ń",
                        "nacute;": "ń",
                        "nang;": "∠⃒",
                        "nap;": "≉",
                        "napE;": "⩰̸",
                        "napid;": "≋̸",
                        "napos;": "ŉ",
                        "napprox;": "≉",
                        "natur;": "♮",
                        "natural;": "♮",
                        "naturals;": "ℕ",
                        "nbsp;": " ",
                        nbsp: " ",
                        "nbump;": "≎̸",
                        "nbumpe;": "≏̸",
                        "ncap;": "⩃",
                        "Ncaron;": "Ň",
                        "ncaron;": "ň",
                        "Ncedil;": "Ņ",
                        "ncedil;": "ņ",
                        "ncong;": "≇",
                        "ncongdot;": "⩭̸",
                        "ncup;": "⩂",
                        "Ncy;": "Н",
                        "ncy;": "н",
                        "ndash;": "–",
                        "ne;": "≠",
                        "nearhk;": "⤤",
                        "neArr;": "⇗",
                        "nearr;": "↗",
                        "nearrow;": "↗",
                        "nedot;": "≐̸",
                        "NegativeMediumSpace;": "​",
                        "NegativeThickSpace;": "​",
                        "NegativeThinSpace;": "​",
                        "NegativeVeryThinSpace;": "​",
                        "nequiv;": "≢",
                        "nesear;": "⤨",
                        "nesim;": "≂̸",
                        "NestedGreaterGreater;": "≫",
                        "NestedLessLess;": "≪",
                        "NewLine;": "\n",
                        "nexist;": "∄",
                        "nexists;": "∄",
                        "Nfr;": "𝔑",
                        "nfr;": "𝔫",
                        "ngE;": "≧̸",
                        "nge;": "≱",
                        "ngeq;": "≱",
                        "ngeqq;": "≧̸",
                        "ngeqslant;": "⩾̸",
                        "nges;": "⩾̸",
                        "nGg;": "⋙̸",
                        "ngsim;": "≵",
                        "nGt;": "≫⃒",
                        "ngt;": "≯",
                        "ngtr;": "≯",
                        "nGtv;": "≫̸",
                        "nhArr;": "⇎",
                        "nharr;": "↮",
                        "nhpar;": "⫲",
                        "ni;": "∋",
                        "nis;": "⋼",
                        "nisd;": "⋺",
                        "niv;": "∋",
                        "NJcy;": "Њ",
                        "njcy;": "њ",
                        "nlArr;": "⇍",
                        "nlarr;": "↚",
                        "nldr;": "‥",
                        "nlE;": "≦̸",
                        "nle;": "≰",
                        "nLeftarrow;": "⇍",
                        "nleftarrow;": "↚",
                        "nLeftrightarrow;": "⇎",
                        "nleftrightarrow;": "↮",
                        "nleq;": "≰",
                        "nleqq;": "≦̸",
                        "nleqslant;": "⩽̸",
                        "nles;": "⩽̸",
                        "nless;": "≮",
                        "nLl;": "⋘̸",
                        "nlsim;": "≴",
                        "nLt;": "≪⃒",
                        "nlt;": "≮",
                        "nltri;": "⋪",
                        "nltrie;": "⋬",
                        "nLtv;": "≪̸",
                        "nmid;": "∤",
                        "NoBreak;": "⁠",
                        "NonBreakingSpace;": " ",
                        "Nopf;": "ℕ",
                        "nopf;": "𝕟",
                        "Not;": "⫬",
                        "not;": "¬",
                        not: "¬",
                        "NotCongruent;": "≢",
                        "NotCupCap;": "≭",
                        "NotDoubleVerticalBar;": "∦",
                        "NotElement;": "∉",
                        "NotEqual;": "≠",
                        "NotEqualTilde;": "≂̸",
                        "NotExists;": "∄",
                        "NotGreater;": "≯",
                        "NotGreaterEqual;": "≱",
                        "NotGreaterFullEqual;": "≧̸",
                        "NotGreaterGreater;": "≫̸",
                        "NotGreaterLess;": "≹",
                        "NotGreaterSlantEqual;": "⩾̸",
                        "NotGreaterTilde;": "≵",
                        "NotHumpDownHump;": "≎̸",
                        "NotHumpEqual;": "≏̸",
                        "notin;": "∉",
                        "notindot;": "⋵̸",
                        "notinE;": "⋹̸",
                        "notinva;": "∉",
                        "notinvb;": "⋷",
                        "notinvc;": "⋶",
                        "NotLeftTriangle;": "⋪",
                        "NotLeftTriangleBar;": "⧏̸",
                        "NotLeftTriangleEqual;": "⋬",
                        "NotLess;": "≮",
                        "NotLessEqual;": "≰",
                        "NotLessGreater;": "≸",
                        "NotLessLess;": "≪̸",
                        "NotLessSlantEqual;": "⩽̸",
                        "NotLessTilde;": "≴",
                        "NotNestedGreaterGreater;": "⪢̸",
                        "NotNestedLessLess;": "⪡̸",
                        "notni;": "∌",
                        "notniva;": "∌",
                        "notnivb;": "⋾",
                        "notnivc;": "⋽",
                        "NotPrecedes;": "⊀",
                        "NotPrecedesEqual;": "⪯̸",
                        "NotPrecedesSlantEqual;": "⋠",
                        "NotReverseElement;": "∌",
                        "NotRightTriangle;": "⋫",
                        "NotRightTriangleBar;": "⧐̸",
                        "NotRightTriangleEqual;": "⋭",
                        "NotSquareSubset;": "⊏̸",
                        "NotSquareSubsetEqual;": "⋢",
                        "NotSquareSuperset;": "⊐̸",
                        "NotSquareSupersetEqual;": "⋣",
                        "NotSubset;": "⊂⃒",
                        "NotSubsetEqual;": "⊈",
                        "NotSucceeds;": "⊁",
                        "NotSucceedsEqual;": "⪰̸",
                        "NotSucceedsSlantEqual;": "⋡",
                        "NotSucceedsTilde;": "≿̸",
                        "NotSuperset;": "⊃⃒",
                        "NotSupersetEqual;": "⊉",
                        "NotTilde;": "≁",
                        "NotTildeEqual;": "≄",
                        "NotTildeFullEqual;": "≇",
                        "NotTildeTilde;": "≉",
                        "NotVerticalBar;": "∤",
                        "npar;": "∦",
                        "nparallel;": "∦",
                        "nparsl;": "⫽⃥",
                        "npart;": "∂̸",
                        "npolint;": "⨔",
                        "npr;": "⊀",
                        "nprcue;": "⋠",
                        "npre;": "⪯̸",
                        "nprec;": "⊀",
                        "npreceq;": "⪯̸",
                        "nrArr;": "⇏",
                        "nrarr;": "↛",
                        "nrarrc;": "⤳̸",
                        "nrarrw;": "↝̸",
                        "nRightarrow;": "⇏",
                        "nrightarrow;": "↛",
                        "nrtri;": "⋫",
                        "nrtrie;": "⋭",
                        "nsc;": "⊁",
                        "nsccue;": "⋡",
                        "nsce;": "⪰̸",
                        "Nscr;": "𝒩",
                        "nscr;": "𝓃",
                        "nshortmid;": "∤",
                        "nshortparallel;": "∦",
                        "nsim;": "≁",
                        "nsime;": "≄",
                        "nsimeq;": "≄",
                        "nsmid;": "∤",
                        "nspar;": "∦",
                        "nsqsube;": "⋢",
                        "nsqsupe;": "⋣",
                        "nsub;": "⊄",
                        "nsubE;": "⫅̸",
                        "nsube;": "⊈",
                        "nsubset;": "⊂⃒",
                        "nsubseteq;": "⊈",
                        "nsubseteqq;": "⫅̸",
                        "nsucc;": "⊁",
                        "nsucceq;": "⪰̸",
                        "nsup;": "⊅",
                        "nsupE;": "⫆̸",
                        "nsupe;": "⊉",
                        "nsupset;": "⊃⃒",
                        "nsupseteq;": "⊉",
                        "nsupseteqq;": "⫆̸",
                        "ntgl;": "≹",
                        "Ntilde;": "Ñ",
                        Ntilde: "Ñ",
                        "ntilde;": "ñ",
                        ntilde: "ñ",
                        "ntlg;": "≸",
                        "ntriangleleft;": "⋪",
                        "ntrianglelefteq;": "⋬",
                        "ntriangleright;": "⋫",
                        "ntrianglerighteq;": "⋭",
                        "Nu;": "Ν",
                        "nu;": "ν",
                        "num;": "#",
                        "numero;": "№",
                        "numsp;": " ",
                        "nvap;": "≍⃒",
                        "nVDash;": "⊯",
                        "nVdash;": "⊮",
                        "nvDash;": "⊭",
                        "nvdash;": "⊬",
                        "nvge;": "≥⃒",
                        "nvgt;": ">⃒",
                        "nvHarr;": "⤄",
                        "nvinfin;": "⧞",
                        "nvlArr;": "⤂",
                        "nvle;": "≤⃒",
                        "nvlt;": "<⃒",
                        "nvltrie;": "⊴⃒",
                        "nvrArr;": "⤃",
                        "nvrtrie;": "⊵⃒",
                        "nvsim;": "∼⃒",
                        "nwarhk;": "⤣",
                        "nwArr;": "⇖",
                        "nwarr;": "↖",
                        "nwarrow;": "↖",
                        "nwnear;": "⤧",
                        "Oacute;": "Ó",
                        Oacute: "Ó",
                        "oacute;": "ó",
                        oacute: "ó",
                        "oast;": "⊛",
                        "ocir;": "⊚",
                        "Ocirc;": "Ô",
                        Ocirc: "Ô",
                        "ocirc;": "ô",
                        ocirc: "ô",
                        "Ocy;": "О",
                        "ocy;": "о",
                        "odash;": "⊝",
                        "Odblac;": "Ő",
                        "odblac;": "ő",
                        "odiv;": "⨸",
                        "odot;": "⊙",
                        "odsold;": "⦼",
                        "OElig;": "Œ",
                        "oelig;": "œ",
                        "ofcir;": "⦿",
                        "Ofr;": "𝔒",
                        "ofr;": "𝔬",
                        "ogon;": "˛",
                        "Ograve;": "Ò",
                        Ograve: "Ò",
                        "ograve;": "ò",
                        ograve: "ò",
                        "ogt;": "⧁",
                        "ohbar;": "⦵",
                        "ohm;": "Ω",
                        "oint;": "∮",
                        "olarr;": "↺",
                        "olcir;": "⦾",
                        "olcross;": "⦻",
                        "oline;": "‾",
                        "olt;": "⧀",
                        "Omacr;": "Ō",
                        "omacr;": "ō",
                        "Omega;": "Ω",
                        "omega;": "ω",
                        "Omicron;": "Ο",
                        "omicron;": "ο",
                        "omid;": "⦶",
                        "ominus;": "⊖",
                        "Oopf;": "𝕆",
                        "oopf;": "𝕠",
                        "opar;": "⦷",
                        "OpenCurlyDoubleQuote;": "“",
                        "OpenCurlyQuote;": "‘",
                        "operp;": "⦹",
                        "oplus;": "⊕",
                        "Or;": "⩔",
                        "or;": "∨",
                        "orarr;": "↻",
                        "ord;": "⩝",
                        "order;": "ℴ",
                        "orderof;": "ℴ",
                        "ordf;": "ª",
                        ordf: "ª",
                        "ordm;": "º",
                        ordm: "º",
                        "origof;": "⊶",
                        "oror;": "⩖",
                        "orslope;": "⩗",
                        "orv;": "⩛",
                        "oS;": "Ⓢ",
                        "Oscr;": "𝒪",
                        "oscr;": "ℴ",
                        "Oslash;": "Ø",
                        Oslash: "Ø",
                        "oslash;": "ø",
                        oslash: "ø",
                        "osol;": "⊘",
                        "Otilde;": "Õ",
                        Otilde: "Õ",
                        "otilde;": "õ",
                        otilde: "õ",
                        "Otimes;": "⨷",
                        "otimes;": "⊗",
                        "otimesas;": "⨶",
                        "Ouml;": "Ö",
                        Ouml: "Ö",
                        "ouml;": "ö",
                        ouml: "ö",
                        "ovbar;": "⌽",
                        "OverBar;": "‾",
                        "OverBrace;": "⏞",
                        "OverBracket;": "⎴",
                        "OverParenthesis;": "⏜",
                        "par;": "∥",
                        "para;": "¶",
                        para: "¶",
                        "parallel;": "∥",
                        "parsim;": "⫳",
                        "parsl;": "⫽",
                        "part;": "∂",
                        "PartialD;": "∂",
                        "Pcy;": "П",
                        "pcy;": "п",
                        "percnt;": "%",
                        "period;": ".",
                        "permil;": "‰",
                        "perp;": "⊥",
                        "pertenk;": "‱",
                        "Pfr;": "𝔓",
                        "pfr;": "𝔭",
                        "Phi;": "Φ",
                        "phi;": "φ",
                        "phiv;": "ϕ",
                        "phmmat;": "ℳ",
                        "phone;": "☎",
                        "Pi;": "Π",
                        "pi;": "π",
                        "pitchfork;": "⋔",
                        "piv;": "ϖ",
                        "planck;": "ℏ",
                        "planckh;": "ℎ",
                        "plankv;": "ℏ",
                        "plus;": "+",
                        "plusacir;": "⨣",
                        "plusb;": "⊞",
                        "pluscir;": "⨢",
                        "plusdo;": "∔",
                        "plusdu;": "⨥",
                        "pluse;": "⩲",
                        "PlusMinus;": "±",
                        "plusmn;": "±",
                        plusmn: "±",
                        "plussim;": "⨦",
                        "plustwo;": "⨧",
                        "pm;": "±",
                        "Poincareplane;": "ℌ",
                        "pointint;": "⨕",
                        "Popf;": "ℙ",
                        "popf;": "𝕡",
                        "pound;": "£",
                        pound: "£",
                        "Pr;": "⪻",
                        "pr;": "≺",
                        "prap;": "⪷",
                        "prcue;": "≼",
                        "prE;": "⪳",
                        "pre;": "⪯",
                        "prec;": "≺",
                        "precapprox;": "⪷",
                        "preccurlyeq;": "≼",
                        "Precedes;": "≺",
                        "PrecedesEqual;": "⪯",
                        "PrecedesSlantEqual;": "≼",
                        "PrecedesTilde;": "≾",
                        "preceq;": "⪯",
                        "precnapprox;": "⪹",
                        "precneqq;": "⪵",
                        "precnsim;": "⋨",
                        "precsim;": "≾",
                        "Prime;": "″",
                        "prime;": "′",
                        "primes;": "ℙ",
                        "prnap;": "⪹",
                        "prnE;": "⪵",
                        "prnsim;": "⋨",
                        "prod;": "∏",
                        "Product;": "∏",
                        "profalar;": "⌮",
                        "profline;": "⌒",
                        "profsurf;": "⌓",
                        "prop;": "∝",
                        "Proportion;": "∷",
                        "Proportional;": "∝",
                        "propto;": "∝",
                        "prsim;": "≾",
                        "prurel;": "⊰",
                        "Pscr;": "𝒫",
                        "pscr;": "𝓅",
                        "Psi;": "Ψ",
                        "psi;": "ψ",
                        "puncsp;": " ",
                        "Qfr;": "𝔔",
                        "qfr;": "𝔮",
                        "qint;": "⨌",
                        "Qopf;": "ℚ",
                        "qopf;": "𝕢",
                        "qprime;": "⁗",
                        "Qscr;": "𝒬",
                        "qscr;": "𝓆",
                        "quaternions;": "ℍ",
                        "quatint;": "⨖",
                        "quest;": "?",
                        "questeq;": "≟",
                        "QUOT;": '"',
                        QUOT: '"',
                        "quot;": '"',
                        quot: '"',
                        "rAarr;": "⇛",
                        "race;": "∽̱",
                        "Racute;": "Ŕ",
                        "racute;": "ŕ",
                        "radic;": "√",
                        "raemptyv;": "⦳",
                        "Rang;": "⟫",
                        "rang;": "⟩",
                        "rangd;": "⦒",
                        "range;": "⦥",
                        "rangle;": "⟩",
                        "raquo;": "»",
                        raquo: "»",
                        "Rarr;": "↠",
                        "rArr;": "⇒",
                        "rarr;": "→",
                        "rarrap;": "⥵",
                        "rarrb;": "⇥",
                        "rarrbfs;": "⤠",
                        "rarrc;": "⤳",
                        "rarrfs;": "⤞",
                        "rarrhk;": "↪",
                        "rarrlp;": "↬",
                        "rarrpl;": "⥅",
                        "rarrsim;": "⥴",
                        "Rarrtl;": "⤖",
                        "rarrtl;": "↣",
                        "rarrw;": "↝",
                        "rAtail;": "⤜",
                        "ratail;": "⤚",
                        "ratio;": "∶",
                        "rationals;": "ℚ",
                        "RBarr;": "⤐",
                        "rBarr;": "⤏",
                        "rbarr;": "⤍",
                        "rbbrk;": "❳",
                        "rbrace;": "}",
                        "rbrack;": "]",
                        "rbrke;": "⦌",
                        "rbrksld;": "⦎",
                        "rbrkslu;": "⦐",
                        "Rcaron;": "Ř",
                        "rcaron;": "ř",
                        "Rcedil;": "Ŗ",
                        "rcedil;": "ŗ",
                        "rceil;": "⌉",
                        "rcub;": "}",
                        "Rcy;": "Р",
                        "rcy;": "р",
                        "rdca;": "⤷",
                        "rdldhar;": "⥩",
                        "rdquo;": "”",
                        "rdquor;": "”",
                        "rdsh;": "↳",
                        "Re;": "ℜ",
                        "real;": "ℜ",
                        "realine;": "ℛ",
                        "realpart;": "ℜ",
                        "reals;": "ℝ",
                        "rect;": "▭",
                        "REG;": "®",
                        REG: "®",
                        "reg;": "®",
                        reg: "®",
                        "ReverseElement;": "∋",
                        "ReverseEquilibrium;": "⇋",
                        "ReverseUpEquilibrium;": "⥯",
                        "rfisht;": "⥽",
                        "rfloor;": "⌋",
                        "Rfr;": "ℜ",
                        "rfr;": "𝔯",
                        "rHar;": "⥤",
                        "rhard;": "⇁",
                        "rharu;": "⇀",
                        "rharul;": "⥬",
                        "Rho;": "Ρ",
                        "rho;": "ρ",
                        "rhov;": "ϱ",
                        "RightAngleBracket;": "⟩",
                        "RightArrow;": "→",
                        "Rightarrow;": "⇒",
                        "rightarrow;": "→",
                        "RightArrowBar;": "⇥",
                        "RightArrowLeftArrow;": "⇄",
                        "rightarrowtail;": "↣",
                        "RightCeiling;": "⌉",
                        "RightDoubleBracket;": "⟧",
                        "RightDownTeeVector;": "⥝",
                        "RightDownVector;": "⇂",
                        "RightDownVectorBar;": "⥕",
                        "RightFloor;": "⌋",
                        "rightharpoondown;": "⇁",
                        "rightharpoonup;": "⇀",
                        "rightleftarrows;": "⇄",
                        "rightleftharpoons;": "⇌",
                        "rightrightarrows;": "⇉",
                        "rightsquigarrow;": "↝",
                        "RightTee;": "⊢",
                        "RightTeeArrow;": "↦",
                        "RightTeeVector;": "⥛",
                        "rightthreetimes;": "⋌",
                        "RightTriangle;": "⊳",
                        "RightTriangleBar;": "⧐",
                        "RightTriangleEqual;": "⊵",
                        "RightUpDownVector;": "⥏",
                        "RightUpTeeVector;": "⥜",
                        "RightUpVector;": "↾",
                        "RightUpVectorBar;": "⥔",
                        "RightVector;": "⇀",
                        "RightVectorBar;": "⥓",
                        "ring;": "˚",
                        "risingdotseq;": "≓",
                        "rlarr;": "⇄",
                        "rlhar;": "⇌",
                        "rlm;": "‏",
                        "rmoust;": "⎱",
                        "rmoustache;": "⎱",
                        "rnmid;": "⫮",
                        "roang;": "⟭",
                        "roarr;": "⇾",
                        "robrk;": "⟧",
                        "ropar;": "⦆",
                        "Ropf;": "ℝ",
                        "ropf;": "𝕣",
                        "roplus;": "⨮",
                        "rotimes;": "⨵",
                        "RoundImplies;": "⥰",
                        "rpar;": ")",
                        "rpargt;": "⦔",
                        "rppolint;": "⨒",
                        "rrarr;": "⇉",
                        "Rrightarrow;": "⇛",
                        "rsaquo;": "›",
                        "Rscr;": "ℛ",
                        "rscr;": "𝓇",
                        "Rsh;": "↱",
                        "rsh;": "↱",
                        "rsqb;": "]",
                        "rsquo;": "’",
                        "rsquor;": "’",
                        "rthree;": "⋌",
                        "rtimes;": "⋊",
                        "rtri;": "▹",
                        "rtrie;": "⊵",
                        "rtrif;": "▸",
                        "rtriltri;": "⧎",
                        "RuleDelayed;": "⧴",
                        "ruluhar;": "⥨",
                        "rx;": "℞",
                        "Sacute;": "Ś",
                        "sacute;": "ś",
                        "sbquo;": "‚",
                        "Sc;": "⪼",
                        "sc;": "≻",
                        "scap;": "⪸",
                        "Scaron;": "Š",
                        "scaron;": "š",
                        "sccue;": "≽",
                        "scE;": "⪴",
                        "sce;": "⪰",
                        "Scedil;": "Ş",
                        "scedil;": "ş",
                        "Scirc;": "Ŝ",
                        "scirc;": "ŝ",
                        "scnap;": "⪺",
                        "scnE;": "⪶",
                        "scnsim;": "⋩",
                        "scpolint;": "⨓",
                        "scsim;": "≿",
                        "Scy;": "С",
                        "scy;": "с",
                        "sdot;": "⋅",
                        "sdotb;": "⊡",
                        "sdote;": "⩦",
                        "searhk;": "⤥",
                        "seArr;": "⇘",
                        "searr;": "↘",
                        "searrow;": "↘",
                        "sect;": "§",
                        sect: "§",
                        "semi;": ";",
                        "seswar;": "⤩",
                        "setminus;": "∖",
                        "setmn;": "∖",
                        "sext;": "✶",
                        "Sfr;": "𝔖",
                        "sfr;": "𝔰",
                        "sfrown;": "⌢",
                        "sharp;": "♯",
                        "SHCHcy;": "Щ",
                        "shchcy;": "щ",
                        "SHcy;": "Ш",
                        "shcy;": "ш",
                        "ShortDownArrow;": "↓",
                        "ShortLeftArrow;": "←",
                        "shortmid;": "∣",
                        "shortparallel;": "∥",
                        "ShortRightArrow;": "→",
                        "ShortUpArrow;": "↑",
                        "shy;": "­",
                        shy: "­",
                        "Sigma;": "Σ",
                        "sigma;": "σ",
                        "sigmaf;": "ς",
                        "sigmav;": "ς",
                        "sim;": "∼",
                        "simdot;": "⩪",
                        "sime;": "≃",
                        "simeq;": "≃",
                        "simg;": "⪞",
                        "simgE;": "⪠",
                        "siml;": "⪝",
                        "simlE;": "⪟",
                        "simne;": "≆",
                        "simplus;": "⨤",
                        "simrarr;": "⥲",
                        "slarr;": "←",
                        "SmallCircle;": "∘",
                        "smallsetminus;": "∖",
                        "smashp;": "⨳",
                        "smeparsl;": "⧤",
                        "smid;": "∣",
                        "smile;": "⌣",
                        "smt;": "⪪",
                        "smte;": "⪬",
                        "smtes;": "⪬︀",
                        "SOFTcy;": "Ь",
                        "softcy;": "ь",
                        "sol;": "/",
                        "solb;": "⧄",
                        "solbar;": "⌿",
                        "Sopf;": "𝕊",
                        "sopf;": "𝕤",
                        "spades;": "♠",
                        "spadesuit;": "♠",
                        "spar;": "∥",
                        "sqcap;": "⊓",
                        "sqcaps;": "⊓︀",
                        "sqcup;": "⊔",
                        "sqcups;": "⊔︀",
                        "Sqrt;": "√",
                        "sqsub;": "⊏",
                        "sqsube;": "⊑",
                        "sqsubset;": "⊏",
                        "sqsubseteq;": "⊑",
                        "sqsup;": "⊐",
                        "sqsupe;": "⊒",
                        "sqsupset;": "⊐",
                        "sqsupseteq;": "⊒",
                        "squ;": "□",
                        "Square;": "□",
                        "square;": "□",
                        "SquareIntersection;": "⊓",
                        "SquareSubset;": "⊏",
                        "SquareSubsetEqual;": "⊑",
                        "SquareSuperset;": "⊐",
                        "SquareSupersetEqual;": "⊒",
                        "SquareUnion;": "⊔",
                        "squarf;": "▪",
                        "squf;": "▪",
                        "srarr;": "→",
                        "Sscr;": "𝒮",
                        "sscr;": "𝓈",
                        "ssetmn;": "∖",
                        "ssmile;": "⌣",
                        "sstarf;": "⋆",
                        "Star;": "⋆",
                        "star;": "☆",
                        "starf;": "★",
                        "straightepsilon;": "ϵ",
                        "straightphi;": "ϕ",
                        "strns;": "¯",
                        "Sub;": "⋐",
                        "sub;": "⊂",
                        "subdot;": "⪽",
                        "subE;": "⫅",
                        "sube;": "⊆",
                        "subedot;": "⫃",
                        "submult;": "⫁",
                        "subnE;": "⫋",
                        "subne;": "⊊",
                        "subplus;": "⪿",
                        "subrarr;": "⥹",
                        "Subset;": "⋐",
                        "subset;": "⊂",
                        "subseteq;": "⊆",
                        "subseteqq;": "⫅",
                        "SubsetEqual;": "⊆",
                        "subsetneq;": "⊊",
                        "subsetneqq;": "⫋",
                        "subsim;": "⫇",
                        "subsub;": "⫕",
                        "subsup;": "⫓",
                        "succ;": "≻",
                        "succapprox;": "⪸",
                        "succcurlyeq;": "≽",
                        "Succeeds;": "≻",
                        "SucceedsEqual;": "⪰",
                        "SucceedsSlantEqual;": "≽",
                        "SucceedsTilde;": "≿",
                        "succeq;": "⪰",
                        "succnapprox;": "⪺",
                        "succneqq;": "⪶",
                        "succnsim;": "⋩",
                        "succsim;": "≿",
                        "SuchThat;": "∋",
                        "Sum;": "∑",
                        "sum;": "∑",
                        "sung;": "♪",
                        "Sup;": "⋑",
                        "sup;": "⊃",
                        "sup1;": "¹",
                        sup1: "¹",
                        "sup2;": "²",
                        sup2: "²",
                        "sup3;": "³",
                        sup3: "³",
                        "supdot;": "⪾",
                        "supdsub;": "⫘",
                        "supE;": "⫆",
                        "supe;": "⊇",
                        "supedot;": "⫄",
                        "Superset;": "⊃",
                        "SupersetEqual;": "⊇",
                        "suphsol;": "⟉",
                        "suphsub;": "⫗",
                        "suplarr;": "⥻",
                        "supmult;": "⫂",
                        "supnE;": "⫌",
                        "supne;": "⊋",
                        "supplus;": "⫀",
                        "Supset;": "⋑",
                        "supset;": "⊃",
                        "supseteq;": "⊇",
                        "supseteqq;": "⫆",
                        "supsetneq;": "⊋",
                        "supsetneqq;": "⫌",
                        "supsim;": "⫈",
                        "supsub;": "⫔",
                        "supsup;": "⫖",
                        "swarhk;": "⤦",
                        "swArr;": "⇙",
                        "swarr;": "↙",
                        "swarrow;": "↙",
                        "swnwar;": "⤪",
                        "szlig;": "ß",
                        szlig: "ß",
                        "Tab;": "\t",
                        "target;": "⌖",
                        "Tau;": "Τ",
                        "tau;": "τ",
                        "tbrk;": "⎴",
                        "Tcaron;": "Ť",
                        "tcaron;": "ť",
                        "Tcedil;": "Ţ",
                        "tcedil;": "ţ",
                        "Tcy;": "Т",
                        "tcy;": "т",
                        "tdot;": "⃛",
                        "telrec;": "⌕",
                        "Tfr;": "𝔗",
                        "tfr;": "𝔱",
                        "there4;": "∴",
                        "Therefore;": "∴",
                        "therefore;": "∴",
                        "Theta;": "Θ",
                        "theta;": "θ",
                        "thetasym;": "ϑ",
                        "thetav;": "ϑ",
                        "thickapprox;": "≈",
                        "thicksim;": "∼",
                        "ThickSpace;": "  ",
                        "thinsp;": " ",
                        "ThinSpace;": " ",
                        "thkap;": "≈",
                        "thksim;": "∼",
                        "THORN;": "Þ",
                        THORN: "Þ",
                        "thorn;": "þ",
                        thorn: "þ",
                        "Tilde;": "∼",
                        "tilde;": "˜",
                        "TildeEqual;": "≃",
                        "TildeFullEqual;": "≅",
                        "TildeTilde;": "≈",
                        "times;": "×",
                        times: "×",
                        "timesb;": "⊠",
                        "timesbar;": "⨱",
                        "timesd;": "⨰",
                        "tint;": "∭",
                        "toea;": "⤨",
                        "top;": "⊤",
                        "topbot;": "⌶",
                        "topcir;": "⫱",
                        "Topf;": "𝕋",
                        "topf;": "𝕥",
                        "topfork;": "⫚",
                        "tosa;": "⤩",
                        "tprime;": "‴",
                        "TRADE;": "™",
                        "trade;": "™",
                        "triangle;": "▵",
                        "triangledown;": "▿",
                        "triangleleft;": "◃",
                        "trianglelefteq;": "⊴",
                        "triangleq;": "≜",
                        "triangleright;": "▹",
                        "trianglerighteq;": "⊵",
                        "tridot;": "◬",
                        "trie;": "≜",
                        "triminus;": "⨺",
                        "TripleDot;": "⃛",
                        "triplus;": "⨹",
                        "trisb;": "⧍",
                        "tritime;": "⨻",
                        "trpezium;": "⏢",
                        "Tscr;": "𝒯",
                        "tscr;": "𝓉",
                        "TScy;": "Ц",
                        "tscy;": "ц",
                        "TSHcy;": "Ћ",
                        "tshcy;": "ћ",
                        "Tstrok;": "Ŧ",
                        "tstrok;": "ŧ",
                        "twixt;": "≬",
                        "twoheadleftarrow;": "↞",
                        "twoheadrightarrow;": "↠",
                        "Uacute;": "Ú",
                        Uacute: "Ú",
                        "uacute;": "ú",
                        uacute: "ú",
                        "Uarr;": "↟",
                        "uArr;": "⇑",
                        "uarr;": "↑",
                        "Uarrocir;": "⥉",
                        "Ubrcy;": "Ў",
                        "ubrcy;": "ў",
                        "Ubreve;": "Ŭ",
                        "ubreve;": "ŭ",
                        "Ucirc;": "Û",
                        Ucirc: "Û",
                        "ucirc;": "û",
                        ucirc: "û",
                        "Ucy;": "У",
                        "ucy;": "у",
                        "udarr;": "⇅",
                        "Udblac;": "Ű",
                        "udblac;": "ű",
                        "udhar;": "⥮",
                        "ufisht;": "⥾",
                        "Ufr;": "𝔘",
                        "ufr;": "𝔲",
                        "Ugrave;": "Ù",
                        Ugrave: "Ù",
                        "ugrave;": "ù",
                        ugrave: "ù",
                        "uHar;": "⥣",
                        "uharl;": "↿",
                        "uharr;": "↾",
                        "uhblk;": "▀",
                        "ulcorn;": "⌜",
                        "ulcorner;": "⌜",
                        "ulcrop;": "⌏",
                        "ultri;": "◸",
                        "Umacr;": "Ū",
                        "umacr;": "ū",
                        "uml;": "¨",
                        uml: "¨",
                        "UnderBar;": "_",
                        "UnderBrace;": "⏟",
                        "UnderBracket;": "⎵",
                        "UnderParenthesis;": "⏝",
                        "Union;": "⋃",
                        "UnionPlus;": "⊎",
                        "Uogon;": "Ų",
                        "uogon;": "ų",
                        "Uopf;": "𝕌",
                        "uopf;": "𝕦",
                        "UpArrow;": "↑",
                        "Uparrow;": "⇑",
                        "uparrow;": "↑",
                        "UpArrowBar;": "⤒",
                        "UpArrowDownArrow;": "⇅",
                        "UpDownArrow;": "↕",
                        "Updownarrow;": "⇕",
                        "updownarrow;": "↕",
                        "UpEquilibrium;": "⥮",
                        "upharpoonleft;": "↿",
                        "upharpoonright;": "↾",
                        "uplus;": "⊎",
                        "UpperLeftArrow;": "↖",
                        "UpperRightArrow;": "↗",
                        "Upsi;": "ϒ",
                        "upsi;": "υ",
                        "upsih;": "ϒ",
                        "Upsilon;": "Υ",
                        "upsilon;": "υ",
                        "UpTee;": "⊥",
                        "UpTeeArrow;": "↥",
                        "upuparrows;": "⇈",
                        "urcorn;": "⌝",
                        "urcorner;": "⌝",
                        "urcrop;": "⌎",
                        "Uring;": "Ů",
                        "uring;": "ů",
                        "urtri;": "◹",
                        "Uscr;": "𝒰",
                        "uscr;": "𝓊",
                        "utdot;": "⋰",
                        "Utilde;": "Ũ",
                        "utilde;": "ũ",
                        "utri;": "▵",
                        "utrif;": "▴",
                        "uuarr;": "⇈",
                        "Uuml;": "Ü",
                        Uuml: "Ü",
                        "uuml;": "ü",
                        uuml: "ü",
                        "uwangle;": "⦧",
                        "vangrt;": "⦜",
                        "varepsilon;": "ϵ",
                        "varkappa;": "ϰ",
                        "varnothing;": "∅",
                        "varphi;": "ϕ",
                        "varpi;": "ϖ",
                        "varpropto;": "∝",
                        "vArr;": "⇕",
                        "varr;": "↕",
                        "varrho;": "ϱ",
                        "varsigma;": "ς",
                        "varsubsetneq;": "⊊︀",
                        "varsubsetneqq;": "⫋︀",
                        "varsupsetneq;": "⊋︀",
                        "varsupsetneqq;": "⫌︀",
                        "vartheta;": "ϑ",
                        "vartriangleleft;": "⊲",
                        "vartriangleright;": "⊳",
                        "Vbar;": "⫫",
                        "vBar;": "⫨",
                        "vBarv;": "⫩",
                        "Vcy;": "В",
                        "vcy;": "в",
                        "VDash;": "⊫",
                        "Vdash;": "⊩",
                        "vDash;": "⊨",
                        "vdash;": "⊢",
                        "Vdashl;": "⫦",
                        "Vee;": "⋁",
                        "vee;": "∨",
                        "veebar;": "⊻",
                        "veeeq;": "≚",
                        "vellip;": "⋮",
                        "Verbar;": "‖",
                        "verbar;": "|",
                        "Vert;": "‖",
                        "vert;": "|",
                        "VerticalBar;": "∣",
                        "VerticalLine;": "|",
                        "VerticalSeparator;": "❘",
                        "VerticalTilde;": "≀",
                        "VeryThinSpace;": " ",
                        "Vfr;": "𝔙",
                        "vfr;": "𝔳",
                        "vltri;": "⊲",
                        "vnsub;": "⊂⃒",
                        "vnsup;": "⊃⃒",
                        "Vopf;": "𝕍",
                        "vopf;": "𝕧",
                        "vprop;": "∝",
                        "vrtri;": "⊳",
                        "Vscr;": "𝒱",
                        "vscr;": "𝓋",
                        "vsubnE;": "⫋︀",
                        "vsubne;": "⊊︀",
                        "vsupnE;": "⫌︀",
                        "vsupne;": "⊋︀",
                        "Vvdash;": "⊪",
                        "vzigzag;": "⦚",
                        "Wcirc;": "Ŵ",
                        "wcirc;": "ŵ",
                        "wedbar;": "⩟",
                        "Wedge;": "⋀",
                        "wedge;": "∧",
                        "wedgeq;": "≙",
                        "weierp;": "℘",
                        "Wfr;": "𝔚",
                        "wfr;": "𝔴",
                        "Wopf;": "𝕎",
                        "wopf;": "𝕨",
                        "wp;": "℘",
                        "wr;": "≀",
                        "wreath;": "≀",
                        "Wscr;": "𝒲",
                        "wscr;": "𝓌",
                        "xcap;": "⋂",
                        "xcirc;": "◯",
                        "xcup;": "⋃",
                        "xdtri;": "▽",
                        "Xfr;": "𝔛",
                        "xfr;": "𝔵",
                        "xhArr;": "⟺",
                        "xharr;": "⟷",
                        "Xi;": "Ξ",
                        "xi;": "ξ",
                        "xlArr;": "⟸",
                        "xlarr;": "⟵",
                        "xmap;": "⟼",
                        "xnis;": "⋻",
                        "xodot;": "⨀",
                        "Xopf;": "𝕏",
                        "xopf;": "𝕩",
                        "xoplus;": "⨁",
                        "xotime;": "⨂",
                        "xrArr;": "⟹",
                        "xrarr;": "⟶",
                        "Xscr;": "𝒳",
                        "xscr;": "𝓍",
                        "xsqcup;": "⨆",
                        "xuplus;": "⨄",
                        "xutri;": "△",
                        "xvee;": "⋁",
                        "xwedge;": "⋀",
                        "Yacute;": "Ý",
                        Yacute: "Ý",
                        "yacute;": "ý",
                        yacute: "ý",
                        "YAcy;": "Я",
                        "yacy;": "я",
                        "Ycirc;": "Ŷ",
                        "ycirc;": "ŷ",
                        "Ycy;": "Ы",
                        "ycy;": "ы",
                        "yen;": "¥",
                        yen: "¥",
                        "Yfr;": "𝔜",
                        "yfr;": "𝔶",
                        "YIcy;": "Ї",
                        "yicy;": "ї",
                        "Yopf;": "𝕐",
                        "yopf;": "𝕪",
                        "Yscr;": "𝒴",
                        "yscr;": "𝓎",
                        "YUcy;": "Ю",
                        "yucy;": "ю",
                        "Yuml;": "Ÿ",
                        "yuml;": "ÿ",
                        yuml: "ÿ",
                        "Zacute;": "Ź",
                        "zacute;": "ź",
                        "Zcaron;": "Ž",
                        "zcaron;": "ž",
                        "Zcy;": "З",
                        "zcy;": "з",
                        "Zdot;": "Ż",
                        "zdot;": "ż",
                        "zeetrf;": "ℨ",
                        "ZeroWidthSpace;": "​",
                        "Zeta;": "Ζ",
                        "zeta;": "ζ",
                        "Zfr;": "ℨ",
                        "zfr;": "𝔷",
                        "ZHcy;": "Ж",
                        "zhcy;": "ж",
                        "zigrarr;": "⇝",
                        "Zopf;": "ℤ",
                        "zopf;": "𝕫",
                        "Zscr;": "𝒵",
                        "zscr;": "𝓏",
                        "zwj;": "‍",
                        "zwnj;": "‌"
                    }
                }))),
                Zt = function(t) {
                    if ("string" != typeof t) throw new TypeError("Expected a String");
                    return t.replace(/&(#?[^;\W]+;?)/g, (function(t, e) {
                        var n;
                        if (n = /^#(\d+);?$/.exec(e)) return Kt.ucs2.encode([parseInt(n[1], 10)]);
                        if (n = /^#[Xx]([A-Fa-f0-9]+);?/.exec(e)) return Kt.ucs2.encode([parseInt(n[1], 16)]);
                        var r = /;$/.test(e),
                            i = r ? e.replace(/;$/, "") : e,
                            o = Xt[i] || r && Xt[e];
                        return "number" == typeof o ? Kt.ucs2.encode([o]) : "string" == typeof o ? o : "&" + e
                    }))
                };

            function Qt(t, e) {
                return function(t, e, n) {
                    if ("string" != typeof t || !t.length) return null;
                    if (e && "number" == typeof e || (e = 0), !t[e + 1]) return null;
                    if (t[e + 1] && t[e + 1].trim()) return e + 1;
                    if (t[e + 2] && t[e + 2].trim()) return e + 2;
                    for (var r = e + 1, i = t.length; r < i; r++)
                        if (t[r] && t[r].trim()) return r;
                    return null
                }(t, e)
            }

            function te(e, n) {
                if (!e) return [];
                if (Array.isArray(e)) return e.filter((function(t) {
                    return "string" == typeof t && t.trim()
                }));
                if ("string" == typeof e) return e.trim() ? [e] : [];
                throw new TypeError("string-strip-html/stripHtml(): [THROW_ID_03] ".concat(n, " must be array containing zero or more strings or something falsey. Currently it's equal to: ").concat(e, ", that a type of ").concat(t(e), "."))
            }
            return function(t, e, n) {
                    t(n = {
                        path: void 0,
                        exports: {},
                        require: function(t, e) {
                            return function() {
                                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                            }(null == e && n.path)
                        }
                    }, n.exports), n.exports
                }((function(e, n) {
                    var r = "[object Arguments]",
                        i = "[object Function]",
                        o = "[object GeneratorFunction]",
                        a = "[object Map]",
                        s = "[object Set]",
                        c = /\w*$/,
                        u = /^\[object .+?Constructor\]$/,
                        l = /^(?:0|[1-9]\d*)$/,
                        d = {};
                    d[r] = d["[object Array]"] = d["[object ArrayBuffer]"] = d["[object DataView]"] = d["[object Boolean]"] = d["[object Date]"] = d["[object Float32Array]"] = d["[object Float64Array]"] = d["[object Int8Array]"] = d["[object Int16Array]"] = d["[object Int32Array]"] = d[a] = d["[object Number]"] = d["[object Object]"] = d["[object RegExp]"] = d[s] = d["[object String]"] = d["[object Symbol]"] = d["[object Uint8Array]"] = d["[object Uint8ClampedArray]"] = d["[object Uint16Array]"] = d["[object Uint32Array]"] = !0, d["[object Error]"] = d[i] = d["[object WeakMap]"] = !1;
                    var h = "object" == t(O) && O && O.Object === Object && O,
                        f = "object" == ("undefined" == typeof self ? "undefined" : t(self)) && self && self.Object === Object && self,
                        p = h || f || Function("return this")(),
                        m = n && !n.nodeType && n,
                        g = m && e && !e.nodeType && e,
                        v = g && g.exports === m;

                    function y(t, e) {
                        return t.set(e[0], e[1]), t
                    }

                    function b(t, e) {
                        return t.add(e), t
                    }

                    function w(t, e, n, r) {
                        var i = -1,
                            o = t ? t.length : 0;
                        for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
                        return n
                    }

                    function _(t) {
                        var e = !1;
                        if (null != t && "function" != typeof t.toString) try {
                            e = !!(t + "")
                        } catch (t) {}
                        return e
                    }

                    function E(t) {
                        var e = -1,
                            n = Array(t.size);
                        return t.forEach((function(t, r) {
                            n[++e] = [r, t]
                        })), n
                    }

                    function S(t, e) {
                        return function(n) {
                            return t(e(n))
                        }
                    }

                    function A(t) {
                        var e = -1,
                            n = Array(t.size);
                        return t.forEach((function(t) {
                            n[++e] = t
                        })), n
                    }
                    var k = Array.prototype,
                        L = Function.prototype,
                        x = Object.prototype,
                        T = p["__core-js_shared__"],
                        q = function() {
                            var t = /[^.]+$/.exec(T && T.keys && T.keys.IE_PROTO || "");
                            return t ? "Symbol(src)_1." + t : ""
                        }(),
                        C = L.toString,
                        P = x.hasOwnProperty,
                        D = x.toString,
                        I = RegExp("^" + C.call(P).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        N = v ? p.Buffer : void 0,
                        j = p.Symbol,
                        M = p.Uint8Array,
                        R = S(Object.getPrototypeOf, Object),
                        B = Object.create,
                        H = x.propertyIsEnumerable,
                        z = k.splice,
                        F = Object.getOwnPropertySymbols,
                        U = N ? N.isBuffer : void 0,
                        V = S(Object.keys, Object),
                        W = mt(p, "DataView"),
                        G = mt(p, "Map"),
                        $ = mt(p, "Promise"),
                        Y = mt(p, "Set"),
                        J = mt(p, "WeakMap"),
                        K = mt(Object, "create"),
                        X = wt(W),
                        Z = wt(G),
                        Q = wt($),
                        tt = wt(Y),
                        et = wt(J),
                        nt = j ? j.prototype : void 0,
                        rt = nt ? nt.valueOf : void 0;

                    function it(t) {
                        var e = -1,
                            n = t ? t.length : 0;
                        for (this.clear(); ++e < n;) {
                            var r = t[e];
                            this.set(r[0], r[1])
                        }
                    }

                    function ot(t) {
                        var e = -1,
                            n = t ? t.length : 0;
                        for (this.clear(); ++e < n;) {
                            var r = t[e];
                            this.set(r[0], r[1])
                        }
                    }

                    function at(t) {
                        var e = -1,
                            n = t ? t.length : 0;
                        for (this.clear(); ++e < n;) {
                            var r = t[e];
                            this.set(r[0], r[1])
                        }
                    }

                    function st(t) {
                        this.__data__ = new ot(t)
                    }

                    function ct(e, n) {
                        var i = Et(e) || function(e) {
                                return function(e) {
                                    return function(e) {
                                        return !!e && "object" == t(e)
                                    }(e) && St(e)
                                }(e) && P.call(e, "callee") && (!H.call(e, "callee") || D.call(e) == r)
                            }(e) ? function(t, e) {
                                for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                                return r
                            }(e.length, String) : [],
                            o = i.length,
                            a = !!o;
                        for (var s in e) !n && !P.call(e, s) || a && ("length" == s || yt(s, o)) || i.push(s);
                        return i
                    }

                    function ut(t, e, n) {
                        var r = t[e];
                        P.call(t, e) && _t(r, n) && (void 0 !== n || e in t) || (t[e] = n)
                    }

                    function lt(t, e) {
                        for (var n = t.length; n--;)
                            if (_t(t[n][0], e)) return n;
                        return -1
                    }

                    function dt(t, e, n, u, l, h, f) {
                        var p;
                        if (u && (p = h ? u(t, l, h, f) : u(t)), void 0 !== p) return p;
                        if (!Lt(t)) return t;
                        var m = Et(t);
                        if (m) {
                            if (p = function(t) {
                                    var e = t.length,
                                        n = t.constructor(e);
                                    return e && "string" == typeof t[0] && P.call(t, "index") && (n.index = t.index, n.input = t.input), n
                                }(t), !e) return function(t, e) {
                                var n = -1,
                                    r = t.length;
                                for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
                                return e
                            }(t, p)
                        } else {
                            var g = vt(t),
                                v = g == i || g == o;
                            if (At(t)) return function(t, e) {
                                if (e) return t.slice();
                                var n = new t.constructor(t.length);
                                return t.copy(n), n
                            }(t, e);
                            if ("[object Object]" == g || g == r || v && !h) {
                                if (_(t)) return h ? t : {};
                                if (p = function(t) {
                                        return "function" != typeof t.constructor || bt(t) ? {} : Lt(e = R(t)) ? B(e) : {};
                                        var e
                                    }(v ? {} : t), !e) return function(t, e) {
                                    return ft(t, gt(t), e)
                                }(t, function(t, e) {
                                    return t && ft(e, xt(e), t)
                                }(p, t))
                            } else {
                                if (!d[g]) return h ? t : {};
                                p = function(t, e, n, r) {
                                    var i, o = t.constructor;
                                    switch (e) {
                                        case "[object ArrayBuffer]":
                                            return ht(t);
                                        case "[object Boolean]":
                                        case "[object Date]":
                                            return new o(+t);
                                        case "[object DataView]":
                                            return function(t, e) {
                                                var n = e ? ht(t.buffer) : t.buffer;
                                                return new t.constructor(n, t.byteOffset, t.byteLength)
                                            }(t, r);
                                        case "[object Float32Array]":
                                        case "[object Float64Array]":
                                        case "[object Int8Array]":
                                        case "[object Int16Array]":
                                        case "[object Int32Array]":
                                        case "[object Uint8Array]":
                                        case "[object Uint8ClampedArray]":
                                        case "[object Uint16Array]":
                                        case "[object Uint32Array]":
                                            return function(t, e) {
                                                var n = e ? ht(t.buffer) : t.buffer;
                                                return new t.constructor(n, t.byteOffset, t.length)
                                            }(t, r);
                                        case a:
                                            return function(t, e, n) {
                                                return w(e ? n(E(t), !0) : E(t), y, new t.constructor)
                                            }(t, r, n);
                                        case "[object Number]":
                                        case "[object String]":
                                            return new o(t);
                                        case "[object RegExp]":
                                            return function(t) {
                                                var e = new t.constructor(t.source, c.exec(t));
                                                return e.lastIndex = t.lastIndex, e
                                            }(t);
                                        case s:
                                            return function(t, e, n) {
                                                return w(e ? n(A(t), !0) : A(t), b, new t.constructor)
                                            }(t, r, n);
                                        case "[object Symbol]":
                                            return i = t, rt ? Object(rt.call(i)) : {}
                                    }
                                }(t, g, dt, e)
                            }
                        }
                        f || (f = new st);
                        var S = f.get(t);
                        if (S) return S;
                        if (f.set(t, p), !m) var k = n ? function(t) {
                            return function(t, e, n) {
                                var r = e(t);
                                return Et(t) ? r : function(t, e) {
                                    for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
                                    return t
                                }(r, n(t))
                            }(t, xt, gt)
                        }(t) : xt(t);
                        return function(t, e) {
                            for (var n = -1, r = t ? t.length : 0; ++n < r && !1 !== e(t[n], n););
                        }(k || t, (function(r, i) {
                            k && (r = t[i = r]), ut(p, i, dt(r, e, n, u, i, t, f))
                        })), p
                    }

                    function ht(t) {
                        var e = new t.constructor(t.byteLength);
                        return new M(e).set(new M(t)), e
                    }

                    function ft(t, e, n, r) {
                        n || (n = {});
                        for (var i = -1, o = e.length; ++i < o;) {
                            var a = e[i],
                                s = r ? r(n[a], t[a], a, n, t) : void 0;
                            ut(n, a, void 0 === s ? t[a] : s)
                        }
                        return n
                    }

                    function pt(e, n) {
                        var r, i, o = e.__data__;
                        return ("string" == (i = t(r = n)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== r : null === r) ? o["string" == typeof n ? "string" : "hash"] : o.map
                    }

                    function mt(t, e) {
                        var n = function(t, e) {
                            return null == t ? void 0 : t[e]
                        }(t, e);
                        return function(t) {
                            return !(!Lt(t) || function(t) {
                                return !!q && q in t
                            }(t)) && (kt(t) || _(t) ? I : u).test(wt(t))
                        }(n) ? n : void 0
                    }
                    it.prototype.clear = function() {
                        this.__data__ = K ? K(null) : {}
                    }, it.prototype.delete = function(t) {
                        return this.has(t) && delete this.__data__[t]
                    }, it.prototype.get = function(t) {
                        var e = this.__data__;
                        if (K) {
                            var n = e[t];
                            return "__lodash_hash_undefined__" === n ? void 0 : n
                        }
                        return P.call(e, t) ? e[t] : void 0
                    }, it.prototype.has = function(t) {
                        var e = this.__data__;
                        return K ? void 0 !== e[t] : P.call(e, t)
                    }, it.prototype.set = function(t, e) {
                        return this.__data__[t] = K && void 0 === e ? "__lodash_hash_undefined__" : e, this
                    }, ot.prototype.clear = function() {
                        this.__data__ = []
                    }, ot.prototype.delete = function(t) {
                        var e = this.__data__,
                            n = lt(e, t);
                        return !(n < 0 || (n == e.length - 1 ? e.pop() : z.call(e, n, 1), 0))
                    }, ot.prototype.get = function(t) {
                        var e = this.__data__,
                            n = lt(e, t);
                        return n < 0 ? void 0 : e[n][1]
                    }, ot.prototype.has = function(t) {
                        return lt(this.__data__, t) > -1
                    }, ot.prototype.set = function(t, e) {
                        var n = this.__data__,
                            r = lt(n, t);
                        return r < 0 ? n.push([t, e]) : n[r][1] = e, this
                    }, at.prototype.clear = function() {
                        this.__data__ = {
                            hash: new it,
                            map: new(G || ot),
                            string: new it
                        }
                    }, at.prototype.delete = function(t) {
                        return pt(this, t).delete(t)
                    }, at.prototype.get = function(t) {
                        return pt(this, t).get(t)
                    }, at.prototype.has = function(t) {
                        return pt(this, t).has(t)
                    }, at.prototype.set = function(t, e) {
                        return pt(this, t).set(t, e), this
                    }, st.prototype.clear = function() {
                        this.__data__ = new ot
                    }, st.prototype.delete = function(t) {
                        return this.__data__.delete(t)
                    }, st.prototype.get = function(t) {
                        return this.__data__.get(t)
                    }, st.prototype.has = function(t) {
                        return this.__data__.has(t)
                    }, st.prototype.set = function(t, e) {
                        var n = this.__data__;
                        if (n instanceof ot) {
                            var r = n.__data__;
                            if (!G || r.length < 199) return r.push([t, e]), this;
                            n = this.__data__ = new at(r)
                        }
                        return n.set(t, e), this
                    };
                    var gt = F ? S(F, Object) : function() {
                            return []
                        },
                        vt = function(t) {
                            return D.call(t)
                        };

                    function yt(t, e) {
                        return !!(e = null == e ? 9007199254740991 : e) && ("number" == typeof t || l.test(t)) && t > -1 && t % 1 == 0 && t < e
                    }

                    function bt(t) {
                        var e = t && t.constructor;
                        return t === ("function" == typeof e && e.prototype || x)
                    }

                    function wt(t) {
                        if (null != t) {
                            try {
                                return C.call(t)
                            } catch (t) {}
                            try {
                                return t + ""
                            } catch (t) {}
                        }
                        return ""
                    }

                    function _t(t, e) {
                        return t === e || t != t && e != e
                    }(W && "[object DataView]" != vt(new W(new ArrayBuffer(1))) || G && vt(new G) != a || $ && "[object Promise]" != vt($.resolve()) || Y && vt(new Y) != s || J && "[object WeakMap]" != vt(new J)) && (vt = function(t) {
                        var e = D.call(t),
                            n = "[object Object]" == e ? t.constructor : void 0,
                            r = n ? wt(n) : void 0;
                        if (r) switch (r) {
                            case X:
                                return "[object DataView]";
                            case Z:
                                return a;
                            case Q:
                                return "[object Promise]";
                            case tt:
                                return s;
                            case et:
                                return "[object WeakMap]"
                        }
                        return e
                    });
                    var Et = Array.isArray;

                    function St(t) {
                        return null != t && function(t) {
                            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
                        }(t.length) && !kt(t)
                    }
                    var At = U || function() {
                        return !1
                    };

                    function kt(t) {
                        var e = Lt(t) ? D.call(t) : "";
                        return e == i || e == o
                    }

                    function Lt(e) {
                        var n = t(e);
                        return !!e && ("object" == n || "function" == n)
                    }

                    function xt(t) {
                        return St(t) ? ct(t) : function(t) {
                            if (!bt(t)) return V(t);
                            var e = [];
                            for (var n in Object(t)) P.call(t, n) && "constructor" != n && e.push(n);
                            return e
                        }(t)
                    }
                    e.exports = function(t) {
                        return dt(t, !0, !0)
                    }
                })),
                function e(n, r) {
                    var i, s = new Set(["!doctype", "abbr", "address", "area", "article", "aside", "audio", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "doctype", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "math", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "param", "picture", "pre", "progress", "rb", "rp", "rt", "rtc", "ruby", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "ul", "var", "video", "wbr", "xml"]),
                        c = new Set(["a", "b", "i", "p", "q", "s", "u"]),
                        u = new Set([".", ",", "?", ";", ")", "…", '"', "»"]),
                        l = new Set(["script", "style", "xml"]),
                        d = {
                            attributes: []
                        },
                        f = null,
                        p = null,
                        m = [],
                        g = {},
                        v = {},
                        y = "",
                        b = null;

                    function w(t, e, r) {
                        if (Array.isArray(e.stripTogetherWithTheirContents) && e.stripTogetherWithTheirContents.includes(d.name))
                            if (Array.isArray(m) && m.some((function(e) {
                                    return e.name === d.name && e.lastClosingBracketAt < t
                                }))) {
                                for (var i = m.length; i--;)
                                    if (m[i].name === d.name) {
                                        u.has(n[t]) ? e.cb({
                                            tag: d,
                                            deleteFrom: m[i].lastOpeningBracketAt,
                                            deleteTo: t,
                                            insert: null,
                                            rangesArr: r,
                                            proposedReturn: [m[i].lastOpeningBracketAt, t, null]
                                        }) : e.cb({
                                            tag: d,
                                            deleteFrom: m[i].lastOpeningBracketAt,
                                            deleteTo: t,
                                            insert: "",
                                            rangesArr: r,
                                            proposedReturn: [m[i].lastOpeningBracketAt, t, ""]
                                        }), m.splice(i, 1);
                                        break
                                    }
                            } else m.push(d)
                    }

                    function E(t, e, n, r, i, o) {
                        var a = "";
                        if (n < i && (a += t.slice(n, i)), r > o + 1) {
                            var s = t.slice(o + 1, r);
                            s.includes("\n") && "<" === t[r] ? a += " " : a += s
                        }
                        if (!u.has(t[e]) && "!" !== t[e]) {
                            var c = a.match(/\n/g);
                            return Array.isArray(c) && c.length ? 1 === c.length ? "\n" : 2 === c.length ? "\n\n" : "\n\n\n" : " "
                        }
                        return ""
                    }

                    function S(t) {
                        if (t.dumpLinkHrefsNearby.enabled && Object.keys(v).length && v.tagName === d.name && d.lastOpeningBracketAt && (v.openingTagEnds && d.lastOpeningBracketAt > v.openingTagEnds || !v.openingTagEnds) && (i = !0), i) {
                            var e = t.dumpLinkHrefsNearby.putOnNewLine ? "\n\n" : "";
                            y = "".concat(e).concat(v.hrefValue).concat(e)
                        }
                    }
                    if ("string" != typeof n) throw new TypeError("string-strip-html/stripHtml(): [THROW_ID_01] Input must be string! Currently it's: ".concat(t(n).toLowerCase(), ", equal to:\n").concat(JSON.stringify(n, null, 4)));
                    if (!n || !n.trim()) return n;
                    if (null != r && !q(r)) throw new TypeError("string-strip-html/stripHtml(): [THROW_ID_02] Optional Options Object must be a plain object! Currently it's: ".concat(t(r).toLowerCase(), ", equal to:\n").concat(JSON.stringify(r, null, 4)));

                    function A() {
                        i && (v = {}, i = !1)
                    }
                    var k = {
                            ignoreTags: [],
                            onlyStripTags: [],
                            stripTogetherWithTheirContents: a(l),
                            skipHtmlDecoding: !1,
                            returnRangesOnly: !1,
                            trimOnlySpaces: !1,
                            dumpLinkHrefsNearby: {
                                enabled: !1,
                                putOnNewLine: !1,
                                wrapHeads: "",
                                wrapTails: ""
                            },
                            cb: null
                        },
                        L = o(o({}, k), r);
                    L.ignoreTags = te(L.ignoreTags, "opts.ignoreTags"), L.onlyStripTags = te(L.onlyStripTags, "opts.onlyStripTags");
                    var x = !!L.onlyStripTags.length;
                    if (L.onlyStripTags.length && L.ignoreTags.length && (L.onlyStripTags = Dt.apply(void 0, [L.onlyStripTags].concat(a(L.ignoreTags)))), q(L.dumpLinkHrefsNearby) || (L.dumpLinkHrefsNearby = o({}, k.dumpLinkHrefsNearby)), L.dumpLinkHrefsNearby = k.dumpLinkHrefsNearby, q(r) && Object.prototype.hasOwnProperty.call(r, "dumpLinkHrefsNearby") && null != r.dumpLinkHrefsNearby)
                        if (q(r.dumpLinkHrefsNearby)) L.dumpLinkHrefsNearby = o(o({}, k.dumpLinkHrefsNearby), r.dumpLinkHrefsNearby);
                        else if (r.dumpLinkHrefsNearby) throw new TypeError("string-strip-html/stripHtml(): [THROW_ID_04] Optional Options Object's key dumpLinkHrefsNearby was set to ".concat(t(r.dumpLinkHrefsNearby), ", equal to ").concat(JSON.stringify(r.dumpLinkHrefsNearby, null, 4), ". The only allowed value is a plain object. See the API reference."));
                    L.stripTogetherWithTheirContents ? "string" == typeof L.stripTogetherWithTheirContents && L.stripTogetherWithTheirContents.length > 0 && (L.stripTogetherWithTheirContents = [L.stripTogetherWithTheirContents]) : L.stripTogetherWithTheirContents = [];
                    var T = {};
                    if (L.stripTogetherWithTheirContents && Array.isArray(L.stripTogetherWithTheirContents) && L.stripTogetherWithTheirContents.length && !L.stripTogetherWithTheirContents.every((function(t, e) {
                            return "string" == typeof t || (T.el = t, T.i = e, !1)
                        }))) throw new TypeError("string-strip-html/stripHtml(): [THROW_ID_06] Optional Options Object's key stripTogetherWithTheirContents was set to contain not just string elements! For example, element at index ".concat(T.i, " has a value ").concat(T.el, " which is not string but ").concat(t(T.el).toLowerCase(), "."));
                    L.cb || (L.cb = function(t) {
                        var e = t.rangesArr,
                            n = t.proposedReturn;
                        e.push.apply(e, a(n))
                    });
                    var O, C = new _({
                        limitToBeAddedWhitespace: !0,
                        limitLinebreaksCount: 2
                    });
                    if (!L.skipHtmlDecoding)
                        for (; n !== Zt(n);) n = Zt(n);
                    L.trimOnlySpaces || (n = n.trim());
                    for (var P = 0, D = n.length; P < D; P++) {
                        if (Object.keys(d).length > 1 && d.lastClosingBracketAt && d.lastClosingBracketAt < P && " " !== n[P] && null === b && (b = P), ">" === n[P] && (!d || Object.keys(d).length < 2) && P > 1)
                            for (var I = P; I-- && (void 0 !== n[I - 1] && ">" !== n[I] || "break" !== function() {
                                    var t = void 0 === n[I - 1] ? I : I + 1,
                                        r = n.slice(t, P + 1);
                                    if (n !== "<".concat(tt(r.trim(), "/>"), ">") && a(s).some((function(t) {
                                            return tt(r.trim().split(" ").filter((function(t) {
                                                return t.trim()
                                            })).filter((function(t, e) {
                                                return 0 === e
                                            })), "/>").toLowerCase() === t
                                        })) && "" === e("<".concat(r.trim(), ">"), L)) {
                                        var i = E(n, P, t, P + 1, t, P + 1),
                                            o = P + 1;
                                        if (n[o] && !n[o].trim())
                                            for (var c = o; c < D; c++)
                                                if (n[c].trim()) {
                                                    o = c;
                                                    break
                                                }
                                        L.cb({
                                            tag: d,
                                            deleteFrom: t,
                                            deleteTo: o,
                                            insert: i,
                                            rangesArr: C,
                                            proposedReturn: [t, o, i]
                                        })
                                    }
                                    return "break"
                                }()););
                        if ("/" !== n[P] || d.quotes && d.quotes.value || !Number.isInteger(d.lastOpeningBracketAt) || Number.isInteger(d.lastClosingBracketAt) || (d.slashPresent = P), '"' === n[P] || "'" === n[P])
                            if (d.nameStarts && d.quotes && d.quotes.value && d.quotes.value === n[P]) {
                                g.valueEnds = P, g.value = n.slice(g.valueStarts, P), d.attributes.push(g), g = {}, d.quotes = void 0;
                                var N = void 0;
                                L.dumpLinkHrefsNearby.enabled && d.attributes.some((function(t) {
                                    if (t.name && "href" === t.name.toLowerCase()) return N = "".concat(L.dumpLinkHrefsNearby.wrapHeads || "").concat(t.value).concat(L.dumpLinkHrefsNearby.wrapTails || ""), !0
                                })) && (v = {
                                    tagName: d.name,
                                    hrefValue: N
                                })
                            } else !d.quotes && d.nameStarts && (d.quotes = {}, d.quotes.value = n[P], d.quotes.start = P, g.nameStarts && g.nameEnds && g.nameEnds < P && g.nameStarts < P && !g.valueStarts && (g.name = n.slice(g.nameStarts, g.nameEnds)));
                        if (!(void 0 === d.nameStarts || void 0 !== d.nameEnds || n[P].trim() && (O = n[P], /[-_A-Za-z0-9]/.test(O)))) {
                            if (d.nameEnds = P, d.name = n.slice(d.nameStarts, d.nameEnds + (">" !== n[P] && "/" !== n[P] && void 0 === n[P + 1] ? 1 : 0)), "!" !== n[d.nameStarts - 1] && !d.name.replace(/-/g, "").length || /^\d+$/.test(d.name[0])) {
                                d = {};
                                continue
                            }
                            if ("<" === n[P]) {
                                S(L);
                                var j = E(n, P, d.leftOuterWhitespace, P, d.lastOpeningBracketAt, P);
                                L.cb({
                                    tag: d,
                                    deleteFrom: d.leftOuterWhitespace,
                                    deleteTo: P,
                                    insert: "".concat(j).concat(y).concat(j),
                                    rangesArr: C,
                                    proposedReturn: [d.leftOuterWhitespace, P, "".concat(j).concat(y).concat(j)]
                                }), A(), w(P, L, C)
                            }
                        }
                        if (d.quotes && d.quotes.start && d.quotes.start < P && !d.quotes.end && g.nameEnds && g.equalsAt && !g.valueStarts && (g.valueStarts = P), d.quotes || !g.nameEnds || "=" !== n[P] || g.valueStarts || g.equalsAt || (g.equalsAt = P), !d.quotes && g.nameStarts && g.nameEnds && !g.valueStarts && n[P].trim() && "=" !== n[P] && (d.attributes.push(g), g = {}), d.quotes || !g.nameStarts || g.nameEnds || (n[P].trim() ? "=" === n[P] ? g.equalsAt || (g.nameEnds = P, g.equalsAt = P, g.name = n.slice(g.nameStarts, g.nameEnds)) : ("/" === n[P] || ">" === n[P] || "<" === n[P]) && (g.nameEnds = P, g.name = n.slice(g.nameStarts, g.nameEnds), d.attributes.push(g), g = {}) : (g.nameEnds = P, g.name = n.slice(g.nameStarts, g.nameEnds))), d.quotes || !(d.nameEnds < P) || n[P - 1].trim() || !n[P].trim() || "<>/!".includes(n[P]) || g.nameStarts || d.lastClosingBracketAt || (g.nameStarts = P), null !== d.lastOpeningBracketAt && d.lastOpeningBracketAt < P && "/" === n[P] && d.onlyPlausible && (d.onlyPlausible = !1), null !== d.lastOpeningBracketAt && d.lastOpeningBracketAt < P && "/" !== n[P] && (void 0 === d.onlyPlausible && (n[P].trim() && "<" !== n[P] || d.slashPresent ? d.onlyPlausible = !1 : d.onlyPlausible = !0), n[P].trim() && void 0 === d.nameStarts && "<" !== n[P] && "/" !== n[P] && ">" !== n[P] && "!" !== n[P] && (d.nameStarts = P, d.nameContainsLetters = !1)), d.nameStarts && !d.quotes && n[P].toLowerCase() !== n[P].toUpperCase() && (d.nameContainsLetters = !0), ">" === n[P] && void 0 !== d.lastOpeningBracketAt && (d.lastClosingBracketAt = P, b = null, Object.keys(g).length && (d.attributes.push(g), g = {}), L.dumpLinkHrefsNearby.enabled && v.tagName && !v.openingTagEnds && (v.openingTagEnds = P)), void 0 !== d.lastOpeningBracketAt)
                            if (void 0 === d.lastClosingBracketAt) {
                                if (d.lastOpeningBracketAt < P && "<" !== n[P] && (void 0 === n[P + 1] || "<" === n[P + 1]) && d.nameContainsLetters) {
                                    if (d.name = n.slice(d.nameStarts, d.nameEnds ? d.nameEnds : P + 1).toLowerCase(), L.ignoreTags.includes(d.name) || d.onlyPlausible && !s.has(d.name)) {
                                        d = {}, g = {};
                                        continue
                                    }
                                    if ((s.has(d.name) || c.has(d.name)) && (!1 === d.onlyPlausible || !0 === d.onlyPlausible && d.attributes.length) || void 0 === n[P + 1]) {
                                        S(L);
                                        var M = E(n, P, d.leftOuterWhitespace, P + 1, d.lastOpeningBracketAt, d.lastClosingBracketAt);
                                        L.cb({
                                            tag: d,
                                            deleteFrom: d.leftOuterWhitespace,
                                            deleteTo: P + 1,
                                            insert: "".concat(M).concat(y).concat(M),
                                            rangesArr: C,
                                            proposedReturn: [d.leftOuterWhitespace, P + 1, "".concat(M).concat(y).concat(M)]
                                        }), A(), w(P, L, C)
                                    }
                                }
                            } else if (P > d.lastClosingBracketAt && n[P].trim() || void 0 === n[P + 1]) {
                            var R = d.lastClosingBracketAt === P ? P + 1 : P;
                            if (L.trimOnlySpaces && R === D - 1 && null !== b && b < P && (R = b), !x && L.ignoreTags.includes(d.name) || x && !L.onlyStripTags.includes(d.name)) L.cb({
                                tag: d,
                                deleteFrom: null,
                                deleteTo: null,
                                insert: null,
                                rangesArr: C,
                                proposedReturn: []
                            }), d = {}, g = {};
                            else if (!d.onlyPlausible || 0 === d.attributes.length && d.name && (s.has(d.name.toLowerCase()) || c.has(d.name.toLowerCase())) || d.attributes && d.attributes.some((function(t) {
                                    return t.equalsAt
                                }))) {
                                var B = E(n, P, d.leftOuterWhitespace, R, d.lastOpeningBracketAt, d.lastClosingBracketAt);
                                y = "", i = !1, S(L);
                                var H = void 0;
                                H = "string" == typeof y && y.length ? "".concat(B).concat(y).concat("\n\n" === B ? "\n" : B) : B, 0 !== d.leftOuterWhitespace && Qt(n, R - 1) || (H = ""), L.cb({
                                    tag: d,
                                    deleteFrom: d.leftOuterWhitespace,
                                    deleteTo: R,
                                    insert: H,
                                    rangesArr: C,
                                    proposedReturn: [d.leftOuterWhitespace, R, H]
                                }), A(), w(P, L, C)
                            } else d = {};
                            ">" !== n[P] && (d = {})
                        }
                        if ("<" === n[P] && "<" !== n[P - 1]) {
                            if (">" === n[Qt(n, P)]) continue;
                            if (d.nameEnds && d.nameEnds < P && !d.lastClosingBracketAt && (!0 === d.onlyPlausible && d.attributes && d.attributes.length || !1 === d.onlyPlausible)) {
                                var z = E(n, P, d.leftOuterWhitespace, P, d.lastOpeningBracketAt, P);
                                L.cb({
                                    tag: d,
                                    deleteFrom: d.leftOuterWhitespace,
                                    deleteTo: P,
                                    insert: z,
                                    rangesArr: C,
                                    proposedReturn: [d.leftOuterWhitespace, P, z]
                                }), w(P, L, C), d = {}, g = {}
                            }
                            if (void 0 !== d.lastOpeningBracketAt && d.onlyPlausible && d.name && !d.quotes && (d.lastOpeningBracketAt = void 0, d.onlyPlausible = !1), !(void 0 !== d.lastOpeningBracketAt && d.onlyPlausible || d.quotes) && (d.lastOpeningBracketAt = P, d.slashPresent = !1, d.attributes = [], null === f ? d.leftOuterWhitespace = P : L.trimOnlySpaces && 0 === f ? d.leftOuterWhitespace = p || P : d.leftOuterWhitespace = f, "!--" === "".concat(n[P + 1]).concat(n[P + 2]).concat(n[P + 3]) || "![CDATA[" === "".concat(n[P + 1]).concat(n[P + 2]).concat(n[P + 3]).concat(n[P + 4]).concat(n[P + 5]).concat(n[P + 6]).concat(n[P + 7]).concat(n[P + 8]))) {
                                var F = !0;
                                "-" === n[P + 2] && (F = !1);
                                for (var U = void 0, V = P; V < D; V++)
                                    if ((!U && F && "]]>" === "".concat(n[V - 2]).concat(n[V - 1]).concat(n[V]) || !F && "--\x3e" === "".concat(n[V - 2]).concat(n[V - 1]).concat(n[V])) && (U = V), U && (U < V && n[V].trim() || void 0 === n[V + 1])) {
                                        var W = V;
                                        (void 0 === n[V + 1] && !n[V].trim() || ">" === n[V]) && (W += 1);
                                        var G = E(n, V, d.leftOuterWhitespace, W, d.lastOpeningBracketAt, U);
                                        L.cb({
                                            tag: d,
                                            deleteFrom: d.leftOuterWhitespace,
                                            deleteTo: W,
                                            insert: G,
                                            rangesArr: C,
                                            proposedReturn: [d.leftOuterWhitespace, W, G]
                                        }), P = V - 1, ">" === n[V] && (P = V), d = {}, g = {};
                                        break
                                    }
                            }
                        }
                        "" === n[P].trim() ? null === f && (f = P, void 0 !== d.lastOpeningBracketAt && d.lastOpeningBracketAt < P && d.nameStarts && d.nameStarts < d.lastOpeningBracketAt && P === d.lastOpeningBracketAt + 1 && !m.some((function(t) {
                            return t.name === d.name
                        })) && (d.onlyPlausible = !0, d.name = void 0, d.nameStarts = void 0)) : null !== f && (!d.quotes && g.equalsAt > f - 1 && g.nameEnds && g.equalsAt > g.nameEnds && '"' !== n[P] && "'" !== n[P] && (q(g) && d.attributes.push(g), g = {}, d.equalsSpottedAt = void 0), f = null), " " === n[P] ? null === p && (p = P) : null !== p && (p = null)
                    }
                    if (C.current()) {
                        if (L.returnRangesOnly) return C.current();
                        var $ = h(n, C.current());
                        return L.trimOnlySpaces ? tt($, " ") : $.trim()
                    }
                    return L.returnRangesOnly ? [] : L.trimOnlySpaces ? tt(n, " ") : n.trim()
                }
        }()
    }).call(this, n(10))
}, function(t, e, n) {
    var r, i;
    "undefined" != typeof window && window, void 0 === (i = "function" == typeof(r = function() {
        "use strict";

        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var n = this._events = this._events || {},
                    r = n[t] = n[t] || [];
                return -1 == r.indexOf(e) && r.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var n = this._onceEvents = this._onceEvents || {};
                return (n[t] = n[t] || {})[e] = !0, this
            }
        }, e.off = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var r = n.indexOf(e);
                return -1 != r && n.splice(r, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                n = n.slice(0), e = e || [];
                for (var r = this._onceEvents && this._onceEvents[t], i = 0; i < n.length; i++) {
                    var o = n[i];
                    r && r[o] && (this.off(t, o), delete r[o]), o.apply(this, e)
                }
                return this
            }
        }, e.allOff = function() {
            delete this._events, delete this._onceEvents
        }, t
    }) ? r.call(e, n, e, t) : r) || (t.exports = i)
}, function(t, e, n) {
    var r, i;
    /*!
     * Unipointer v2.3.0
     * base class for doing one thing with pointer event
     * MIT license
     */
    ! function(o, a) {
        r = [n(12)], void 0 === (i = function(t) {
            return function(t, e) {
                "use strict";

                function n() {}
                var r = n.prototype = Object.create(e.prototype);
                r.bindStartEvent = function(t) {
                    this._bindStartEvent(t, !0)
                }, r.unbindStartEvent = function(t) {
                    this._bindStartEvent(t, !1)
                }, r._bindStartEvent = function(e, n) {
                    var r = (n = void 0 === n || n) ? "addEventListener" : "removeEventListener",
                        i = "mousedown";
                    t.PointerEvent ? i = "pointerdown" : "ontouchstart" in t && (i = "touchstart"), e[r](i, this)
                }, r.handleEvent = function(t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t)
                }, r.getTouch = function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e];
                        if (n.identifier == this.pointerIdentifier) return n
                    }
                }, r.onmousedown = function(t) {
                    var e = t.button;
                    e && 0 !== e && 1 !== e || this._pointerDown(t, t)
                }, r.ontouchstart = function(t) {
                    this._pointerDown(t, t.changedTouches[0])
                }, r.onpointerdown = function(t) {
                    this._pointerDown(t, t)
                }, r._pointerDown = function(t, e) {
                    t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
                }, r.pointerDown = function(t, e) {
                    this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
                };
                var i = {
                    mousedown: ["mousemove", "mouseup"],
                    touchstart: ["touchmove", "touchend", "touchcancel"],
                    pointerdown: ["pointermove", "pointerup", "pointercancel"]
                };
                return r._bindPostStartEvents = function(e) {
                    if (e) {
                        var n = i[e.type];
                        n.forEach((function(e) {
                            t.addEventListener(e, this)
                        }), this), this._boundPointerEvents = n
                    }
                }, r._unbindPostStartEvents = function() {
                    this._boundPointerEvents && (this._boundPointerEvents.forEach((function(e) {
                        t.removeEventListener(e, this)
                    }), this), delete this._boundPointerEvents)
                }, r.onmousemove = function(t) {
                    this._pointerMove(t, t)
                }, r.onpointermove = function(t) {
                    t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
                }, r.ontouchmove = function(t) {
                    var e = this.getTouch(t.changedTouches);
                    e && this._pointerMove(t, e)
                }, r._pointerMove = function(t, e) {
                    this.pointerMove(t, e)
                }, r.pointerMove = function(t, e) {
                    this.emitEvent("pointerMove", [t, e])
                }, r.onmouseup = function(t) {
                    this._pointerUp(t, t)
                }, r.onpointerup = function(t) {
                    t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
                }, r.ontouchend = function(t) {
                    var e = this.getTouch(t.changedTouches);
                    e && this._pointerUp(t, e)
                }, r._pointerUp = function(t, e) {
                    this._pointerDone(), this.pointerUp(t, e)
                }, r.pointerUp = function(t, e) {
                    this.emitEvent("pointerUp", [t, e])
                }, r._pointerDone = function() {
                    this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone()
                }, r._pointerReset = function() {
                    this.isPointerDown = !1, delete this.pointerIdentifier
                }, r.pointerDone = function() {}, r.onpointercancel = function(t) {
                    t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
                }, r.ontouchcancel = function(t) {
                    var e = this.getTouch(t.changedTouches);
                    e && this._pointerCancel(t, e)
                }, r._pointerCancel = function(t, e) {
                    this._pointerDone(), this.pointerCancel(t, e)
                }, r.pointerCancel = function(t, e) {
                    this.emitEvent("pointerCancel", [t, e])
                }, n.getPointerPoint = function(t) {
                    return {
                        x: t.pageX,
                        y: t.pageY
                    }
                }, n
            }(o, t)
        }.apply(e, r)) || (t.exports = i)
    }(window)
}, function(t, e) {
    var n, r, i = t.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (t) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (t) {
            r = a
        }
    }();
    var c, u = [],
        l = !1,
        d = -1;

    function h() {
        l && c && (l = !1, c.length ? u = c.concat(u) : d = -1, u.length && f())
    }

    function f() {
        if (!l) {
            var t = s(h);
            l = !0;
            for (var e = u.length; e;) {
                for (c = u, u = []; ++d < e;) c && c[d].run();
                d = -1, e = u.length
            }
            c = null, l = !1,
                function(t) {
                    if (r === clearTimeout) return clearTimeout(t);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                    try {
                        r(t)
                    } catch (e) {
                        try {
                            return r.call(null, t)
                        } catch (e) {
                            return r.call(this, t)
                        }
                    }
                }(t)
        }
    }

    function p(t, e) {
        this.fun = t, this.array = e
    }

    function m() {}
    i.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        u.push(new p(t, e)), 1 !== u.length || l || s(f)
    }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(t) {
        return []
    }, i.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function() {
        return "/"
    }, i.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function() {
        return 0
    }
}, function(t, e, n) {
    var r = n(23);
    t.exports = function(t, e) {
        if (null == t) return {};
        var n, i, o = r(t, e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            for (i = 0; i < a.length; i++) n = a[i], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
        }
        return o
    }, t.exports.default = t.exports, t.exports.__esModule = !0
}, function(t, e) {
    t.exports = function(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }, t.exports.default = t.exports, t.exports.__esModule = !0
}, function(t, e, n) {
    var r, i;
    /*!
     * getSize v2.0.3
     * measure size of elements
     * MIT license
     */
    window, void 0 === (i = "function" == typeof(r = function() {
        "use strict";

        function t(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e
        }
        var e = "undefined" == typeof console ? function() {} : function(t) {
                console.error(t)
            },
            n = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            r = n.length;

        function i(t) {
            var n = getComputedStyle(t);
            return n || e("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), n
        }
        var o, a = !1;

        function s(e) {
            if (function() {
                    if (!a) {
                        a = !0;
                        var e = document.createElement("div");
                        e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                        var n = document.body || document.documentElement;
                        n.appendChild(e);
                        var r = i(e);
                        o = 200 == Math.round(t(r.width)), s.isBoxSizeOuter = o, n.removeChild(e)
                    }
                }(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var c = i(e);
                if ("none" == c.display) return function() {
                    for (var t = {
                            width: 0,
                            height: 0,
                            innerWidth: 0,
                            innerHeight: 0,
                            outerWidth: 0,
                            outerHeight: 0
                        }, e = 0; e < r; e++) t[n[e]] = 0;
                    return t
                }();
                var u = {};
                u.width = e.offsetWidth, u.height = e.offsetHeight;
                for (var l = u.isBorderBox = "border-box" == c.boxSizing, d = 0; d < r; d++) {
                    var h = n[d],
                        f = c[h],
                        p = parseFloat(f);
                    u[h] = isNaN(p) ? 0 : p
                }
                var m = u.paddingLeft + u.paddingRight,
                    g = u.paddingTop + u.paddingBottom,
                    v = u.marginLeft + u.marginRight,
                    y = u.marginTop + u.marginBottom,
                    b = u.borderLeftWidth + u.borderRightWidth,
                    w = u.borderTopWidth + u.borderBottomWidth,
                    _ = l && o,
                    E = t(c.width);
                !1 !== E && (u.width = E + (_ ? 0 : m + b));
                var S = t(c.height);
                return !1 !== S && (u.height = S + (_ ? 0 : g + w)), u.innerWidth = u.width - (m + b), u.innerHeight = u.height - (g + w), u.outerWidth = u.width + v, u.outerHeight = u.height + y, u
            }
        }
        return s
    }) ? r.call(e, n, e, t) : r) || (t.exports = i)
}, function(t, e) {
    var n = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'],
        r = n.join(","),
        i = "undefined" == typeof Element ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

    function o(t, e) {
        e = e || {};
        var n, o, s, c = [],
            d = [],
            h = t.querySelectorAll(r);
        for (e.includeContainer && i.call(t, r) && (h = Array.prototype.slice.apply(h)).unshift(t), n = 0; n < h.length; n++) a(o = h[n]) && (0 === (s = u(o)) ? c.push(o) : d.push({
            documentOrder: n,
            tabIndex: s,
            node: o
        }));
        return d.sort(l).map((function(t) {
            return t.node
        })).concat(c)
    }

    function a(t) {
        return !(!s(t) || function(t) {
            return function(t) {
                return d(t) && "radio" === t.type
            }(t) && ! function(t) {
                if (!t.name) return !0;
                var e = function(t) {
                    for (var e = 0; e < t.length; e++)
                        if (t[e].checked) return t[e]
                }(t.ownerDocument.querySelectorAll('input[type="radio"][name="' + t.name + '"]'));
                return !e || e === t
            }(t)
        }(t) || u(t) < 0)
    }

    function s(t) {
        return !(t.disabled || function(t) {
            return d(t) && "hidden" === t.type
        }(t) || function(t) {
            return null === t.offsetParent || "hidden" === getComputedStyle(t).visibility
        }(t))
    }
    o.isTabbable = function(t) {
        if (!t) throw new Error("No node provided");
        return !1 !== i.call(t, r) && a(t)
    }, o.isFocusable = function(t) {
        if (!t) throw new Error("No node provided");
        return !1 !== i.call(t, c) && s(t)
    };
    var c = n.concat("iframe").join(",");

    function u(t) {
        var e = parseInt(t.getAttribute("tabindex"), 10);
        return isNaN(e) ? function(t) {
            return "true" === t.contentEditable
        }(t) ? 0 : t.tabIndex : e
    }

    function l(t, e) {
        return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex
    }

    function d(t) {
        return "INPUT" === t.tagName
    }
    t.exports = o
}, function(t, e) {
    function n(e) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (t.exports = n = function(t) {
            return typeof t
        }, t.exports.default = t.exports, t.exports.__esModule = !0) : (t.exports = n = function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, t.exports.default = t.exports, t.exports.__esModule = !0), n(e)
    }
    t.exports = n, t.exports.default = t.exports, t.exports.__esModule = !0
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        i = s(n(45)),
        o = s(n(46)),
        a = s(n(48));

    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var c = void 0;
    e.default = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = (0, i.default)();
        if (c || (c = (0, o.default)(s)), e.events) throw new Error("Event handlers cannot be overwritten.");
        if ("string" == typeof t && !document.getElementById(t)) throw new Error('Element "' + t + '" does not exist.');
        e.events = a.default.proxyEvents(s);
        var u = new Promise((function(n) {
                "object" === (void 0 === t ? "undefined" : r(t)) && t.playVideo instanceof Function ? n(t) : c.then((function(r) {
                    var i = new r.Player(t, e);
                    return s.on("ready", (function() {
                        n(i)
                    })), null
                }))
            })),
            l = a.default.promisifyPlayer(u, n);
        return l.on = s.on, l.off = s.off, l
    }, t.exports = e.default
}, function(t, e, n) {
    "use strict";
    (function(t, n) { /*! @vimeo/player v2.15.0 | (c) 2021 Vimeo | MIT License | https://github.com/vimeo/player.js */
        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var o = void 0 !== t && "[object global]" === {}.toString.call(t);

        function a(t, e) {
            return 0 === t.indexOf(e.toLowerCase()) ? t : "".concat(e.toLowerCase()).concat(t.substr(0, 1).toUpperCase()).concat(t.substr(1))
        }

        function s(t) {
            return Boolean(t && 1 === t.nodeType && "nodeName" in t && t.ownerDocument && t.ownerDocument.defaultView)
        }

        function c(t) {
            return !isNaN(parseFloat(t)) && isFinite(t) && Math.floor(t) == t
        }

        function u(t) {
            return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(t)
        }

        function l() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = t.id,
                n = t.url,
                r = e || n;
            if (!r) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
            if (c(r)) return "https://vimeo.com/".concat(r);
            if (u(r)) return r.replace("http:", "https:");
            if (e) throw new TypeError("“".concat(e, "” is not a valid video id."));
            throw new TypeError("“".concat(r, "” is not a vimeo.com url."))
        }
        var d = void 0 !== Array.prototype.indexOf,
            h = "undefined" != typeof window && void 0 !== window.postMessage;
        if (!(o || d && h)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
        var f = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
        /*!
         * weakmap-polyfill v2.0.1 - ECMAScript6 WeakMap polyfill
         * https://github.com/polygonplanet/weakmap-polyfill
         * Copyright (c) 2015-2020 Polygon Planet <polygon.planet.aqua@gmail.com>
         * @license MIT
         */
        ! function(t) {
            if (!t.WeakMap) {
                var e = Object.prototype.hasOwnProperty,
                    n = function(t, e, n) {
                        Object.defineProperty ? Object.defineProperty(t, e, {
                            configurable: !0,
                            writable: !0,
                            value: n
                        }) : t[e] = n
                    };
                t.WeakMap = function() {
                    function t() {
                        if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'");
                        if (n(this, "_id", o("_WeakMap")), arguments.length > 0) throw new TypeError("WeakMap iterable is not supported")
                    }

                    function i(t, n) {
                        if (!r(t) || !e.call(t, "_id")) throw new TypeError(n + " method called on incompatible receiver " + typeof t)
                    }

                    function o(t) {
                        return t + "_" + a() + "." + a()
                    }

                    function a() {
                        return Math.random().toString().substring(2)
                    }
                    return n(t.prototype, "delete", (function(t) {
                        if (i(this, "delete"), !r(t)) return !1;
                        var e = t[this._id];
                        return !(!e || e[0] !== t) && (delete t[this._id], !0)
                    })), n(t.prototype, "get", (function(t) {
                        if (i(this, "get"), r(t)) {
                            var e = t[this._id];
                            return e && e[0] === t ? e[1] : void 0
                        }
                    })), n(t.prototype, "has", (function(t) {
                        if (i(this, "has"), !r(t)) return !1;
                        var e = t[this._id];
                        return !(!e || e[0] !== t)
                    })), n(t.prototype, "set", (function(t, e) {
                        if (i(this, "set"), !r(t)) throw new TypeError("Invalid value used as weak map key");
                        var o = t[this._id];
                        return o && o[0] === t ? (o[1] = e, this) : (n(t, this._id, [t, e]), this)
                    })), n(t, "_polyfill", !0), t
                }()
            }

            function r(t) {
                return Object(t) === t
            }
        }("undefined" != typeof self ? self : "undefined" != typeof window ? window : f);
        var p = function(t, e) {
                return t(e = {
                    exports: {}
                }, e.exports), e.exports
            }((function(t) {
                /*! Native Promise Only
                    v0.8.1 (c) Kyle Simpson
                    MIT License: http://getify.mit-license.org
                */
                var e, r, i;
                i = function() {
                    var t, e, r, i = Object.prototype.toString,
                        o = void 0 !== n ? function(t) {
                            return n(t)
                        } : setTimeout;
                    try {
                        Object.defineProperty({}, "x", {}), t = function(t, e, n, r) {
                            return Object.defineProperty(t, e, {
                                value: n,
                                writable: !0,
                                configurable: !1 !== r
                            })
                        }
                    } catch (e) {
                        t = function(t, e, n) {
                            return t[e] = n, t
                        }
                    }

                    function a(t, n) {
                        r.add(t, n), e || (e = o(r.drain))
                    }

                    function s(t) {
                        var e, n = typeof t;
                        return null == t || "object" != n && "function" != n || (e = t.then), "function" == typeof e && e
                    }

                    function c() {
                        for (var t = 0; t < this.chain.length; t++) u(this, 1 === this.state ? this.chain[t].success : this.chain[t].failure, this.chain[t]);
                        this.chain.length = 0
                    }

                    function u(t, e, n) {
                        var r, i;
                        try {
                            !1 === e ? n.reject(t.msg) : (r = !0 === e ? t.msg : e.call(void 0, t.msg)) === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (i = s(r)) ? i.call(r, n.resolve, n.reject) : n.resolve(r)
                        } catch (t) {
                            n.reject(t)
                        }
                    }

                    function l(t) {
                        var e, n = this;
                        if (!n.triggered) {
                            n.triggered = !0, n.def && (n = n.def);
                            try {
                                (e = s(t)) ? a((function() {
                                    var r = new f(n);
                                    try {
                                        e.call(t, (function() {
                                            l.apply(r, arguments)
                                        }), (function() {
                                            d.apply(r, arguments)
                                        }))
                                    } catch (t) {
                                        d.call(r, t)
                                    }
                                })): (n.msg = t, n.state = 1, n.chain.length > 0 && a(c, n))
                            } catch (t) {
                                d.call(new f(n), t)
                            }
                        }
                    }

                    function d(t) {
                        var e = this;
                        e.triggered || (e.triggered = !0, e.def && (e = e.def), e.msg = t, e.state = 2, e.chain.length > 0 && a(c, e))
                    }

                    function h(t, e, n, r) {
                        for (var i = 0; i < e.length; i++) ! function(i) {
                            t.resolve(e[i]).then((function(t) {
                                n(i, t)
                            }), r)
                        }(i)
                    }

                    function f(t) {
                        this.def = t, this.triggered = !1
                    }

                    function p(t) {
                        this.promise = t, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
                    }

                    function m(t) {
                        if ("function" != typeof t) throw TypeError("Not a function");
                        if (0 !== this.__NPO__) throw TypeError("Not a promise");
                        this.__NPO__ = 1;
                        var e = new p(this);
                        this.then = function(t, n) {
                            var r = {
                                success: "function" != typeof t || t,
                                failure: "function" == typeof n && n
                            };
                            return r.promise = new this.constructor((function(t, e) {
                                if ("function" != typeof t || "function" != typeof e) throw TypeError("Not a function");
                                r.resolve = t, r.reject = e
                            })), e.chain.push(r), 0 !== e.state && a(c, e), r.promise
                        }, this.catch = function(t) {
                            return this.then(void 0, t)
                        };
                        try {
                            t.call(void 0, (function(t) {
                                l.call(e, t)
                            }), (function(t) {
                                d.call(e, t)
                            }))
                        } catch (t) {
                            d.call(e, t)
                        }
                    }
                    r = function() {
                        var t, n, r;

                        function i(t, e) {
                            this.fn = t, this.self = e, this.next = void 0
                        }
                        return {
                            add: function(e, o) {
                                r = new i(e, o), n ? n.next = r : t = r, n = r, r = void 0
                            },
                            drain: function() {
                                var r = t;
                                for (t = n = e = void 0; r;) r.fn.call(r.self), r = r.next
                            }
                        }
                    }();
                    var g = t({}, "constructor", m, !1);
                    return m.prototype = g, t(g, "__NPO__", 0, !1), t(m, "resolve", (function(t) {
                        return t && "object" == typeof t && 1 === t.__NPO__ ? t : new this((function(e, n) {
                            if ("function" != typeof e || "function" != typeof n) throw TypeError("Not a function");
                            e(t)
                        }))
                    })), t(m, "reject", (function(t) {
                        return new this((function(e, n) {
                            if ("function" != typeof e || "function" != typeof n) throw TypeError("Not a function");
                            n(t)
                        }))
                    })), t(m, "all", (function(t) {
                        var e = this;
                        return "[object Array]" != i.call(t) ? e.reject(TypeError("Not an array")) : 0 === t.length ? e.resolve([]) : new e((function(n, r) {
                            if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function");
                            var i = t.length,
                                o = Array(i),
                                a = 0;
                            h(e, t, (function(t, e) {
                                o[t] = e, ++a === i && n(o)
                            }), r)
                        }))
                    })), t(m, "race", (function(t) {
                        var e = this;
                        return "[object Array]" != i.call(t) ? e.reject(TypeError("Not an array")) : new e((function(n, r) {
                            if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function");
                            h(e, t, (function(t, e) {
                                n(e)
                            }), r)
                        }))
                    })), m
                }, (r = f)[e = "Promise"] = r[e] || i(), t.exports && (t.exports = r[e])
            })),
            m = new WeakMap;

        function g(t, e, n) {
            var r = m.get(t.element) || {};
            e in r || (r[e] = []), r[e].push(n), m.set(t.element, r)
        }

        function v(t, e) {
            return (m.get(t.element) || {})[e] || []
        }

        function y(t, e, n) {
            var r = m.get(t.element) || {};
            if (!r[e]) return !0;
            if (!n) return r[e] = [], m.set(t.element, r), !0;
            var i = r[e].indexOf(n);
            return -1 !== i && r[e].splice(i, 1), m.set(t.element, r), r[e] && 0 === r[e].length
        }

        function b(t, e) {
            var n = m.get(t);
            m.set(e, n), m.delete(t)
        }
        var w = ["autopause", "autoplay", "background", "byline", "color", "controls", "dnt", "height", "id", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];

        function _(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return w.reduce((function(e, n) {
                var r = t.getAttribute("data-vimeo-".concat(n));
                return (r || "" === r) && (e[n] = "" === r ? 1 : r), e
            }), e)
        }

        function E(t, e) {
            var n = t.html;
            if (!e) throw new TypeError("An element must be provided");
            if (null !== e.getAttribute("data-vimeo-initialized")) return e.querySelector("iframe");
            var r = document.createElement("div");
            return r.innerHTML = n, e.appendChild(r.firstChild), e.setAttribute("data-vimeo-initialized", "true"), e.querySelector("iframe")
        }

        function S(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 ? arguments[2] : void 0;
            return new Promise((function(r, i) {
                if (!u(t)) throw new TypeError("“".concat(t, "” is not a vimeo.com url."));
                var o = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(t));
                for (var a in e) e.hasOwnProperty(a) && (o += "&".concat(a, "=").concat(encodeURIComponent(e[a])));
                var s = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
                s.open("GET", o, !0), s.onload = function() {
                    if (404 !== s.status)
                        if (403 !== s.status) try {
                            var e = JSON.parse(s.responseText);
                            if (403 === e.domain_status_code) return E(e, n), void i(new Error("“".concat(t, "” is not embeddable.")));
                            r(e)
                        } catch (t) {
                            i(t)
                        } else i(new Error("“".concat(t, "” is not embeddable.")));
                        else i(new Error("“".concat(t, "” was not found.")))
                }, s.onerror = function() {
                    var t = s.status ? " (".concat(s.status, ")") : "";
                    i(new Error("There was an error fetching the embed code from Vimeo".concat(t, ".")))
                }, s.send()
            }))
        }

        function A(t) {
            if ("string" == typeof t) try {
                t = JSON.parse(t)
            } catch (t) {
                return console.warn(t), {}
            }
            return t
        }

        function k(t, e, n) {
            if (t.element.contentWindow && t.element.contentWindow.postMessage) {
                var r = {
                    method: e
                };
                void 0 !== n && (r.value = n);
                var i = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
                i >= 8 && i < 10 && (r = JSON.stringify(r)), t.element.contentWindow.postMessage(r, t.origin)
            }
        }

        function L(t, e) {
            var n, r = [];
            if ((e = A(e)).event) {
                if ("error" === e.event) v(t, e.data.method).forEach((function(n) {
                    var r = new Error(e.data.message);
                    r.name = e.data.name, n.reject(r), y(t, e.data.method, n)
                }));
                r = v(t, "event:".concat(e.event)), n = e.data
            } else if (e.method) {
                var i = function(t, e) {
                    var n = v(t, e);
                    if (n.length < 1) return !1;
                    var r = n.shift();
                    return y(t, e, r), r
                }(t, e.method);
                i && (r.push(i), n = e.value)
            }
            r.forEach((function(e) {
                try {
                    if ("function" == typeof e) return void e.call(t, n);
                    e.resolve(n)
                } catch (t) {}
            }))
        }
        var x = new WeakMap,
            T = new WeakMap,
            q = {},
            O = function() {
                function t(e) {
                    var n = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (r(this, t), window.jQuery && e instanceof jQuery && (e.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), e = e[0]), "undefined" != typeof document && "string" == typeof e && (e = document.getElementById(e)), !s(e)) throw new TypeError("You must pass either a valid element or a valid id.");
                    if ("IFRAME" !== e.nodeName) {
                        var o = e.querySelector("iframe");
                        o && (e = o)
                    }
                    if ("IFRAME" === e.nodeName && !u(e.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed.");
                    if (x.has(e)) return x.get(e);
                    this._window = e.ownerDocument.defaultView, this.element = e, this.origin = "*";
                    var a = new p((function(t, r) {
                        if (n._onMessage = function(e) {
                                if (u(e.origin) && n.element.contentWindow === e.source) {
                                    "*" === n.origin && (n.origin = e.origin);
                                    var i = A(e.data);
                                    if (i && "error" === i.event && i.data && "ready" === i.data.method) {
                                        var o = new Error(i.data.message);
                                        return o.name = i.data.name, void r(o)
                                    }
                                    var a = i && "ready" === i.event,
                                        s = i && "ping" === i.method;
                                    if (a || s) return n.element.setAttribute("data-ready", "true"), void t();
                                    L(n, i)
                                }
                            }, n._window.addEventListener("message", n._onMessage), "IFRAME" !== n.element.nodeName) {
                            var o = _(e, i);
                            S(l(o), o, e).then((function(t) {
                                var r = E(t, e);
                                return n.element = r, n._originalElement = e, b(e, r), x.set(n.element, n), t
                            })).catch(r)
                        }
                    }));
                    if (T.set(this, a), x.set(this.element, this), "IFRAME" === this.element.nodeName && k(this, "ping"), q.isEnabled) {
                        var c = function() {
                            return q.exit()
                        };
                        q.on("fullscreenchange", (function() {
                            q.isFullscreen ? g(n, "event:exitFullscreen", c) : y(n, "event:exitFullscreen", c), n.ready().then((function() {
                                k(n, "fullscreenchange", q.isFullscreen)
                            }))
                        }))
                    }
                    return this
                }
                var e, n, o;
                return e = t, (n = [{
                    key: "callMethod",
                    value: function(t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return new p((function(r, i) {
                            return e.ready().then((function() {
                                g(e, t, {
                                    resolve: r,
                                    reject: i
                                }), k(e, t, n)
                            })).catch(i)
                        }))
                    }
                }, {
                    key: "get",
                    value: function(t) {
                        var e = this;
                        return new p((function(n, r) {
                            return t = a(t, "get"), e.ready().then((function() {
                                g(e, t, {
                                    resolve: n,
                                    reject: r
                                }), k(e, t)
                            })).catch(r)
                        }))
                    }
                }, {
                    key: "set",
                    value: function(t, e) {
                        var n = this;
                        return new p((function(r, i) {
                            if (t = a(t, "set"), null == e) throw new TypeError("There must be a value to set.");
                            return n.ready().then((function() {
                                g(n, t, {
                                    resolve: r,
                                    reject: i
                                }), k(n, t, e)
                            })).catch(i)
                        }))
                    }
                }, {
                    key: "on",
                    value: function(t, e) {
                        if (!t) throw new TypeError("You must pass an event name.");
                        if (!e) throw new TypeError("You must pass a callback function.");
                        if ("function" != typeof e) throw new TypeError("The callback must be a function.");
                        0 === v(this, "event:".concat(t)).length && this.callMethod("addEventListener", t).catch((function() {})), g(this, "event:".concat(t), e)
                    }
                }, {
                    key: "off",
                    value: function(t, e) {
                        if (!t) throw new TypeError("You must pass an event name.");
                        if (e && "function" != typeof e) throw new TypeError("The callback must be a function.");
                        y(this, "event:".concat(t), e) && this.callMethod("removeEventListener", t).catch((function(t) {}))
                    }
                }, {
                    key: "loadVideo",
                    value: function(t) {
                        return this.callMethod("loadVideo", t)
                    }
                }, {
                    key: "ready",
                    value: function() {
                        var t = T.get(this) || new p((function(t, e) {
                            e(new Error("Unknown player. Probably unloaded."))
                        }));
                        return p.resolve(t)
                    }
                }, {
                    key: "addCuePoint",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.callMethod("addCuePoint", {
                            time: t,
                            data: e
                        })
                    }
                }, {
                    key: "removeCuePoint",
                    value: function(t) {
                        return this.callMethod("removeCuePoint", t)
                    }
                }, {
                    key: "enableTextTrack",
                    value: function(t, e) {
                        if (!t) throw new TypeError("You must pass a language.");
                        return this.callMethod("enableTextTrack", {
                            language: t,
                            kind: e
                        })
                    }
                }, {
                    key: "disableTextTrack",
                    value: function() {
                        return this.callMethod("disableTextTrack")
                    }
                }, {
                    key: "pause",
                    value: function() {
                        return this.callMethod("pause")
                    }
                }, {
                    key: "play",
                    value: function() {
                        return this.callMethod("play")
                    }
                }, {
                    key: "requestFullscreen",
                    value: function() {
                        return q.isEnabled ? q.request(this.element) : this.callMethod("requestFullscreen")
                    }
                }, {
                    key: "exitFullscreen",
                    value: function() {
                        return q.isEnabled ? q.exit() : this.callMethod("exitFullscreen")
                    }
                }, {
                    key: "getFullscreen",
                    value: function() {
                        return q.isEnabled ? p.resolve(q.isFullscreen) : this.get("fullscreen")
                    }
                }, {
                    key: "requestPictureInPicture",
                    value: function() {
                        return this.callMethod("requestPictureInPicture")
                    }
                }, {
                    key: "exitPictureInPicture",
                    value: function() {
                        return this.callMethod("exitPictureInPicture")
                    }
                }, {
                    key: "getPictureInPicture",
                    value: function() {
                        return this.get("pictureInPicture")
                    }
                }, {
                    key: "unload",
                    value: function() {
                        return this.callMethod("unload")
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var t = this;
                        return new p((function(e) {
                            if (T.delete(t), x.delete(t.element), t._originalElement && (x.delete(t._originalElement), t._originalElement.removeAttribute("data-vimeo-initialized")), t.element && "IFRAME" === t.element.nodeName && t.element.parentNode && t.element.parentNode.removeChild(t.element), t.element && "DIV" === t.element.nodeName && t.element.parentNode) {
                                t.element.removeAttribute("data-vimeo-initialized");
                                var n = t.element.querySelector("iframe");
                                n && n.parentNode && n.parentNode.removeChild(n)
                            }
                            t._window.removeEventListener("message", t._onMessage), e()
                        }))
                    }
                }, {
                    key: "getAutopause",
                    value: function() {
                        return this.get("autopause")
                    }
                }, {
                    key: "setAutopause",
                    value: function(t) {
                        return this.set("autopause", t)
                    }
                }, {
                    key: "getBuffered",
                    value: function() {
                        return this.get("buffered")
                    }
                }, {
                    key: "getCameraProps",
                    value: function() {
                        return this.get("cameraProps")
                    }
                }, {
                    key: "setCameraProps",
                    value: function(t) {
                        return this.set("cameraProps", t)
                    }
                }, {
                    key: "getChapters",
                    value: function() {
                        return this.get("chapters")
                    }
                }, {
                    key: "getCurrentChapter",
                    value: function() {
                        return this.get("currentChapter")
                    }
                }, {
                    key: "getColor",
                    value: function() {
                        return this.get("color")
                    }
                }, {
                    key: "setColor",
                    value: function(t) {
                        return this.set("color", t)
                    }
                }, {
                    key: "getCuePoints",
                    value: function() {
                        return this.get("cuePoints")
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.get("currentTime")
                    }
                }, {
                    key: "setCurrentTime",
                    value: function(t) {
                        return this.set("currentTime", t)
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.get("duration")
                    }
                }, {
                    key: "getEnded",
                    value: function() {
                        return this.get("ended")
                    }
                }, {
                    key: "getLoop",
                    value: function() {
                        return this.get("loop")
                    }
                }, {
                    key: "setLoop",
                    value: function(t) {
                        return this.set("loop", t)
                    }
                }, {
                    key: "setMuted",
                    value: function(t) {
                        return this.set("muted", t)
                    }
                }, {
                    key: "getMuted",
                    value: function() {
                        return this.get("muted")
                    }
                }, {
                    key: "getPaused",
                    value: function() {
                        return this.get("paused")
                    }
                }, {
                    key: "getPlaybackRate",
                    value: function() {
                        return this.get("playbackRate")
                    }
                }, {
                    key: "setPlaybackRate",
                    value: function(t) {
                        return this.set("playbackRate", t)
                    }
                }, {
                    key: "getPlayed",
                    value: function() {
                        return this.get("played")
                    }
                }, {
                    key: "getQualities",
                    value: function() {
                        return this.get("qualities")
                    }
                }, {
                    key: "getQuality",
                    value: function() {
                        return this.get("quality")
                    }
                }, {
                    key: "setQuality",
                    value: function(t) {
                        return this.set("quality", t)
                    }
                }, {
                    key: "getSeekable",
                    value: function() {
                        return this.get("seekable")
                    }
                }, {
                    key: "getSeeking",
                    value: function() {
                        return this.get("seeking")
                    }
                }, {
                    key: "getTextTracks",
                    value: function() {
                        return this.get("textTracks")
                    }
                }, {
                    key: "getVideoEmbedCode",
                    value: function() {
                        return this.get("videoEmbedCode")
                    }
                }, {
                    key: "getVideoId",
                    value: function() {
                        return this.get("videoId")
                    }
                }, {
                    key: "getVideoTitle",
                    value: function() {
                        return this.get("videoTitle")
                    }
                }, {
                    key: "getVideoWidth",
                    value: function() {
                        return this.get("videoWidth")
                    }
                }, {
                    key: "getVideoHeight",
                    value: function() {
                        return this.get("videoHeight")
                    }
                }, {
                    key: "getVideoUrl",
                    value: function() {
                        return this.get("videoUrl")
                    }
                }, {
                    key: "getVolume",
                    value: function() {
                        return this.get("volume")
                    }
                }, {
                    key: "setVolume",
                    value: function(t) {
                        return this.set("volume", t)
                    }
                }]) && i(e.prototype, n), o && i(e, o), t
            }();
        o || (q = function() {
            var t = function() {
                    for (var t, e = [
                            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                            ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                            ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                            ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                        ], n = 0, r = e.length, i = {}; n < r; n++)
                        if ((t = e[n]) && t[1] in document) {
                            for (n = 0; n < t.length; n++) i[e[0][n]] = t[n];
                            return i
                        }
                    return !1
                }(),
                e = {
                    fullscreenchange: t.fullscreenchange,
                    fullscreenerror: t.fullscreenerror
                },
                n = {
                    request: function(e) {
                        return new Promise((function(r, i) {
                            var o = function t() {
                                n.off("fullscreenchange", t), r()
                            };
                            n.on("fullscreenchange", o);
                            var a = (e = e || document.documentElement)[t.requestFullscreen]();
                            a instanceof Promise && a.then(o).catch(i)
                        }))
                    },
                    exit: function() {
                        return new Promise((function(e, r) {
                            if (n.isFullscreen) {
                                var i = function t() {
                                    n.off("fullscreenchange", t), e()
                                };
                                n.on("fullscreenchange", i);
                                var o = document[t.exitFullscreen]();
                                o instanceof Promise && o.then(i).catch(r)
                            } else e()
                        }))
                    },
                    on: function(t, n) {
                        var r = e[t];
                        r && document.addEventListener(r, n)
                    },
                    off: function(t, n) {
                        var r = e[t];
                        r && document.removeEventListener(r, n)
                    }
                };
            return Object.defineProperties(n, {
                isFullscreen: {
                    get: function() {
                        return Boolean(document[t.fullscreenElement])
                    }
                },
                element: {
                    enumerable: !0,
                    get: function() {
                        return document[t.fullscreenElement]
                    }
                },
                isEnabled: {
                    enumerable: !0,
                    get: function() {
                        return Boolean(document[t.fullscreenEnabled])
                    }
                }
            }), n
        }(), function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                e = [].slice.call(t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
                n = function(t) {
                    "console" in window && console.error && console.error("There was an error creating an embed: ".concat(t))
                };
            e.forEach((function(t) {
                try {
                    if (null !== t.getAttribute("data-vimeo-defer")) return;
                    var e = _(t);
                    S(l(e), e, t).then((function(e) {
                        return E(e, t)
                    })).catch(n)
                } catch (t) {
                    n(t)
                }
            }))
        }(), function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
            if (!window.VimeoPlayerResizeEmbeds_) {
                window.VimeoPlayerResizeEmbeds_ = !0;
                var e = function(e) {
                    if (u(e.origin) && e.data && "spacechange" === e.data.event)
                        for (var n = t.querySelectorAll("iframe"), r = 0; r < n.length; r++)
                            if (n[r].contentWindow === e.source) {
                                n[r].parentElement.style.paddingBottom = "".concat(e.data.data[0].bottom, "px");
                                break
                            }
                };
                window.addEventListener("message", e)
            }
        }()), e.a = O
    }).call(this, n(10), n(56).setImmediate)
}, function(t, e, n) {
    (function(t, e, n) {
        ! function(t) {
            "use strict";
            var r, i = /^[a-z]+:/,
                o = /[-a-z0-9]+(\.[-a-z0-9])*:\d+/i,
                a = /\/\/(.*?)(?::(.*?))?@/,
                s = /^win/i,
                c = /:$/,
                u = /^\?/,
                l = /^#/,
                d = /(.*\/)/,
                h = /^\/{2,}/,
                f = /(^\/?)/,
                p = /'/g,
                m = /%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi,
                g = /%([cd][0-9a-f])%([89ab][0-9a-f])/gi,
                v = /%([0-7][0-9a-f])/gi,
                y = /\+/g,
                b = /^\w:$/,
                w = /[^/#?]/,
                _ = "undefined" == typeof window && void 0 !== e && !0,
                E = !_ && t.navigator && t.navigator.userAgent && ~t.navigator.userAgent.indexOf("MSIE"),
                S = _ ? t.require : null,
                A = {
                    protocol: "protocol",
                    host: "hostname",
                    port: "port",
                    path: "pathname",
                    query: "search",
                    hash: "hash"
                },
                k = {
                    ftp: 21,
                    gopher: 70,
                    http: 80,
                    https: 443,
                    ws: 80,
                    wss: 443
                };

            function L() {
                return _ ? r = r || "file://" + (n.platform.match(s) ? "/" : "") + S("fs").realpathSync(".") : "about:srcdoc" === document.location.href ? self.parent.document.location.href : document.location.href
            }

            function x(t) {
                return encodeURIComponent(t).replace(p, "%27")
            }

            function T(t) {
                return (t = (t = (t = t.replace(y, " ")).replace(m, (function(t, e, n, r) {
                    var i = parseInt(e, 16) - 224,
                        o = parseInt(n, 16) - 128;
                    if (0 == i && o < 32) return t;
                    var a = (i << 12) + (o << 6) + (parseInt(r, 16) - 128);
                    return 65535 < a ? t : String.fromCharCode(a)
                }))).replace(g, (function(t, e, n) {
                    var r = parseInt(e, 16) - 192;
                    if (r < 2) return t;
                    var i = parseInt(n, 16) - 128;
                    return String.fromCharCode((r << 6) + i)
                }))).replace(v, (function(t, e) {
                    return String.fromCharCode(parseInt(e, 16))
                }))
            }

            function q(t) {
                for (var e = t.split("&"), n = 0, r = e.length; n < r; n++) {
                    var i = e[n].split("="),
                        o = decodeURIComponent(i[0].replace(y, " "));
                    if (o) {
                        var a = void 0 !== i[1] ? T(i[1]) : null;
                        void 0 === this[o] ? this[o] = a : (this[o] instanceof Array || (this[o] = [this[o]]), this[o].push(a))
                    }
                }
            }

            function O(t, e) {
                ! function(t, e, n) {
                    var r, s, p;
                    e = e || L(), _ ? r = S("url").parse(e) : (r = document.createElement("a")).href = e;
                    var m, g, v = (g = {
                        path: !0,
                        query: !0,
                        hash: !0
                    }, (m = e) && i.test(m) && (g.protocol = !0, g.host = !0, o.test(m) && (g.port = !0), a.test(m) && (g.user = !0, g.pass = !0)), g);
                    for (s in p = e.match(a) || [], A) v[s] ? t[s] = r[A[s]] || "" : t[s] = "";
                    if (t.protocol = t.protocol.replace(c, ""), t.query = t.query.replace(u, ""), t.hash = T(t.hash.replace(l, "")), t.user = T(p[1] || ""), t.pass = T(p[2] || ""), t.port = k[t.protocol] == t.port || 0 == t.port ? "" : t.port, !v.protocol && w.test(e.charAt(0)) && (t.path = e.split("?")[0].split("#")[0]), !v.protocol && n) {
                        var y = new O(L().match(d)[0]),
                            b = y.path.split("/"),
                            x = t.path.split("/"),
                            C = ["protocol", "user", "pass", "host", "port"],
                            P = C.length;
                        for (b.pop(), s = 0; s < P; s++) t[C[s]] = y[C[s]];
                        for (;
                            ".." === x[0];) b.pop(), x.shift();
                        t.path = ("/" !== e.charAt(0) ? b.join("/") : "") + "/" + x.join("/")
                    }
                    t.path = t.path.replace(h, "/"), E && (t.path = t.path.replace(f, "/")), t.paths(t.paths()), t.query = new q(t.query)
                }(this, t, !e)
            }
            q.prototype.toString = function() {
                var t, e, n = "",
                    r = x;
                for (t in this) {
                    var i = this[t];
                    if (!(i instanceof Function || void 0 === i))
                        if (i instanceof Array) {
                            var o = i.length;
                            if (!o) {
                                n += (n ? "&" : "") + r(t) + "=";
                                continue
                            }
                            for (e = 0; e < o; e++) {
                                var a = i[e];
                                void 0 !== a && (n += n ? "&" : "", n += r(t) + (null === a ? "" : "=" + r(a)))
                            }
                        } else n += n ? "&" : "", n += r(t) + (null === i ? "" : "=" + r(i))
                }
                return n
            }, O.prototype.clearQuery = function() {
                for (var t in this.query) this.query[t] instanceof Function || delete this.query[t];
                return this
            }, O.prototype.queryLength = function() {
                var t = 0;
                for (var e in this.query) this.query[e] instanceof Function || t++;
                return t
            }, O.prototype.isEmptyQuery = function() {
                return 0 === this.queryLength()
            }, O.prototype.paths = function(t) {
                var e, n = "",
                    r = 0;
                if (t && t.length && t + "" !== t) {
                    for (this.isAbsolute() && (n = "/"), e = t.length; r < e; r++) t[r] = !r && b.test(t[r]) ? t[r] : x(t[r]);
                    this.path = n + t.join("/")
                }
                for (r = 0, e = (t = ("/" === this.path.charAt(0) ? this.path.slice(1) : this.path).split("/")).length; r < e; r++) t[r] = T(t[r]);
                return t
            }, O.prototype.encode = x, O.prototype.decode = T, O.prototype.isAbsolute = function() {
                return this.protocol || "/" === this.path.charAt(0)
            }, O.prototype.toString = function() {
                return (this.protocol && this.protocol + "://") + (this.user && x(this.user) + (this.pass && ":" + x(this.pass)) + "@") + (this.host && this.host) + (this.port && ":" + this.port) + (this.path && this.path) + (this.query.toString() && "?" + this.query) + (this.hash && "#" + x(this.hash))
            }, t[t.exports ? "exports" : "Url"] = O
        }(t.exports ? t : window)
    }).call(this, n(58)(t), n(10), n(14))
}, function(t, e) {
    t.exports = function(t, e) {
        if (null == t) return {};
        var n, r, i = {},
            o = Object.keys(t);
        for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i
    }, t.exports.default = t.exports, t.exports.__esModule = !0
}, function(t, e, n) {
    var r = n(16);
    t.exports = function(t) {
        if (Array.isArray(t)) return r(t)
    }, t.exports.default = t.exports, t.exports.__esModule = !0
}, function(t, e) {
    t.exports = function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }, t.exports.default = t.exports, t.exports.__esModule = !0
}, function(t, e, n) {
    var r = n(16);
    t.exports = function(t, e) {
        if (t) {
            if ("string" == typeof t) return r(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0
        }
    }, t.exports.default = t.exports, t.exports.__esModule = !0
}, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }, t.exports.default = t.exports, t.exports.__esModule = !0
}, function(t, e, n) {}, function(t, e, n) {
    var r, i, o;
    ! function(a, s) {
        if (a) {
            s = s.bind(null, a, a.document), t.exports ? s(n(3)) : (i = [n(3)], void 0 === (o = "function" == typeof(r = s) ? r.apply(e, i) : r) || (t.exports = o))
        }
    }("undefined" != typeof window ? window : 0, (function(t, e, n, r) {
        "use strict";
        var i, o = e.createElement("a").style,
            a = "objectFit" in o,
            s = /object-fit["']*\s*:\s*["']*(contain|cover)/,
            c = /object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/,
            u = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            l = /\(|\)|'/,
            d = {
                center: "center",
                "50% 50%": "center"
            };

        function h(t, r) {
            var o, a, s, c, d = n.cfg,
                h = function() {
                    var e = t.currentSrc || t.src;
                    e && a !== e && (a = e, c.backgroundImage = "url(" + (l.test(e) ? JSON.stringify(e) : e) + ")", o || (o = !0, n.rC(s, d.loadingClass), n.aC(s, d.loadedClass)))
                },
                f = function() {
                    n.rAF(h)
                };
            t._lazysizesParentFit = r.fit, t.addEventListener("lazyloaded", f, !0), t.addEventListener("load", f, !0), n.rAF((function() {
                var o = t,
                    a = t.parentNode;
                "PICTURE" == a.nodeName.toUpperCase() && (o = a, a = a.parentNode),
                    function(t) {
                        var e = t.previousElementSibling;
                        e && n.hC(e, i) && (e.parentNode.removeChild(e), t.style.position = e.getAttribute("data-position") || "", t.style.visibility = e.getAttribute("data-visibility") || "")
                    }(o), i || function() {
                        if (!i) {
                            var t = e.createElement("style");
                            i = n.cfg.objectFitClass || "lazysizes-display-clone", e.querySelector("head").appendChild(t)
                        }
                    }(), s = t.cloneNode(!1), c = s.style, s.addEventListener("load", (function() {
                        var t = s.currentSrc || s.src;
                        t && t != u && (s.src = u, s.srcset = "")
                    })), n.rC(s, d.loadedClass), n.rC(s, d.lazyClass), n.rC(s, d.autosizesClass), n.aC(s, d.loadingClass), n.aC(s, i), ["data-parent-fit", "data-parent-container", "data-object-fit-polyfilled", d.srcsetAttr, d.srcAttr].forEach((function(t) {
                        s.removeAttribute(t)
                    })), s.src = u, s.srcset = "", c.backgroundRepeat = "no-repeat", c.backgroundPosition = r.position, c.backgroundSize = r.fit, s.setAttribute("data-position", o.style.position), s.setAttribute("data-visibility", o.style.visibility), o.style.visibility = "hidden", o.style.position = "absolute", t.setAttribute("data-parent-fit", r.fit), t.setAttribute("data-parent-container", "prev"), t.setAttribute("data-object-fit-polyfilled", ""), t._objectFitPolyfilledDisplay = s, a.insertBefore(s, o), t._lazysizesParentFit && delete t._lazysizesParentFit, t.complete && h()
            }))
        }
        if (!a || !(a && "objectPosition" in o)) {
            var f = function(t) {
                if (t.detail.instance == n) {
                    var e = t.target,
                        r = function(t) {
                            var e = (getComputedStyle(t, null) || {}).fontFamily || "",
                                n = e.match(s) || "",
                                r = n && e.match(c) || "";
                            return r && (r = r[1]), {
                                fit: n && n[1] || "",
                                position: d[r] || r || "center"
                            }
                        }(e);
                    return !(!r.fit || a && "center" == r.position) && (h(e, r), !0)
                }
            };
            t.addEventListener("lazybeforesizes", (function(t) {
                if (t.detail.instance == n) {
                    var e = t.target;
                    null == e.getAttribute("data-object-fit-polyfilled") || e._objectFitPolyfilledDisplay || f(t) || n.rAF((function() {
                        e.removeAttribute("data-object-fit-polyfilled")
                    }))
                }
            })), t.addEventListener("lazyunveilread", f, !0), r && r.detail && f(r)
        }
    }))
}, function(t, e, n) {
    var r, i, o;
    ! function(a, s) {
        if (a) {
            s = s.bind(null, a, a.document), t.exports ? s(n(3)) : (i = [n(3)], void 0 === (o = "function" == typeof(r = s) ? r.apply(e, i) : r) || (t.exports = o))
        }
    }("undefined" != typeof window ? window : 0, (function(t, e, n) {
        "use strict";
        if (t.addEventListener) {
            var r = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
                i = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/,
                o = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,
                a = /^picture$/i,
                s = n.cfg,
                c = {
                    getParent: function(e, n) {
                        var r = e,
                            i = e.parentNode;
                        return n && "prev" != n || !i || !a.test(i.nodeName || "") || (i = i.parentNode), "self" != n && (r = "prev" == n ? e.previousElementSibling : n && (i.closest || t.jQuery) && (i.closest ? i.closest(n) : jQuery(i).closest(n)[0]) || i), r
                    },
                    getFit: function(t) {
                        var e, n, r = getComputedStyle(t, null) || {},
                            a = r.content || r.fontFamily,
                            s = {
                                fit: t._lazysizesParentFit || t.getAttribute("data-parent-fit")
                            };
                        return !s.fit && a && (e = a.match(i)) && (s.fit = e[1]), s.fit ? (!(n = t._lazysizesParentContainer || t.getAttribute("data-parent-container")) && a && (e = a.match(o)) && (n = e[1]), s.parent = c.getParent(t, n)) : s.fit = r.objectFit, s
                    },
                    getImageRatio: function(e) {
                        var n, i, o, c, u, l, d, h = e.parentNode,
                            f = h && a.test(h.nodeName || "") ? h.querySelectorAll("source, img") : [e];
                        for (n = 0; n < f.length; n++)
                            if (i = (e = f[n]).getAttribute(s.srcsetAttr) || e.getAttribute("srcset") || e.getAttribute("data-pfsrcset") || e.getAttribute("data-risrcset") || "", o = e._lsMedia || e.getAttribute("media"), o = s.customMedia[e.getAttribute("data-media") || o] || o, i && (!o || (t.matchMedia && matchMedia(o) || {}).matches)) {
                                (c = parseFloat(e.getAttribute("data-aspectratio"))) || ((u = i.match(r)) ? "w" == u[2] ? (l = u[1], d = u[3]) : (l = u[3], d = u[1]) : (l = e.getAttribute("width"), d = e.getAttribute("height")), c = l / d);
                                break
                            }
                        return c
                    },
                    calculateSize: function(t, e) {
                        var n, r, i, o = this.getFit(t),
                            a = o.fit,
                            s = o.parent;
                        return "width" == a || ("contain" == a || "cover" == a) && (r = this.getImageRatio(t)) ? (s ? e = s.clientWidth : s = t, i = e, "width" == a ? i = e : (n = e / s.clientHeight) && ("cover" == a && n < r || "contain" == a && n > r) && (i = e * (r / n)), i) : e
                    }
                };
            n.parentFit = c, e.addEventListener("lazybeforesizes", (function(t) {
                if (!t.defaultPrevented && t.detail.instance == n) {
                    var e = t.target;
                    t.detail.width = c.calculateSize(e, t.detail.width)
                }
            }))
        }
    }))
}, function(t, e, n) {
    var r, i, o;
    ! function(a, s) {
        s = s.bind(null, a, a.document), t.exports ? s(n(3)) : (i = [n(3)], void 0 === (o = "function" == typeof(r = s) ? r.apply(e, i) : r) || (t.exports = o))
    }(window, (function(t, e, n) {
        "use strict";
        var r, i, o = n.cfg,
            a = {
                string: 1,
                number: 1
            },
            s = /^\-*\+*\d+\.*\d*$/,
            c = /^picture$/i,
            u = /\s*\{\s*width\s*\}\s*/i,
            l = /\s*\{\s*height\s*\}\s*/i,
            d = /\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,
            h = /^\[.*\]|\{.*\}$/,
            f = /^(?:auto|\d+(px)?)$/,
            p = e.createElement("a"),
            m = e.createElement("img"),
            g = "srcset" in m && !("sizes" in m),
            v = !!t.HTMLPictureElement && !g;

        function y(e, n, r) {
            var o, a, u, l, f, p = t.getComputedStyle(e);
            if (r) {
                for (l in f = {}, r) f[l] = r[l];
                r = f
            } else a = e.parentNode, r = {
                isPicture: !(!a || !c.test(a.nodeName || ""))
            };
            for (o in u = function(t, n) {
                    var o = e.getAttribute("data-" + t);
                    if (!o) {
                        var a = p.getPropertyValue("--ls-" + t);
                        a && (o = a.trim())
                    }
                    if (o) {
                        if ("true" == o) o = !0;
                        else if ("false" == o) o = !1;
                        else if (s.test(o)) o = parseFloat(o);
                        else if ("function" == typeof i[t]) o = i[t](e, o);
                        else if (h.test(o)) try {
                            o = JSON.parse(o)
                        } catch (t) {}
                        r[t] = o
                    } else t in i && "function" != typeof i[t] && !r[t] ? r[t] = i[t] : n && "function" == typeof i[t] && (r[t] = i[t](e, o))
                }, i) u(o);
            return n.replace(d, (function(t, e) {
                e in r || u(e, !0)
            })), r
        }

        function b(t, n, o) {
            var s = 0,
                c = 0,
                h = o;
            if (t) {
                if ("container" === n.ratio) {
                    for (s = h.scrollWidth, c = h.scrollHeight; !(s && c || h === e);) s = (h = h.parentNode).scrollWidth, c = h.scrollHeight;
                    s && c && (n.ratio = n.traditionalRatio ? c / s : s / c)
                }
                var f, m, v;
                f = t, m = n, (v = []).srcset = [], m.absUrl && (p.setAttribute("href", f), f = p.href), f = ((m.prefix || "") + f + (m.postfix || "")).replace(d, (function(t, e) {
                    return a[typeof m[e]] ? m[e] : t
                })), m.widths.forEach((function(t) {
                    var e = m.widthmap[t] || t,
                        n = m.aspectratio || m.ratio,
                        r = !m.aspectratio && i.traditionalRatio,
                        o = {
                            u: f.replace(u, e).replace(l, n ? r ? Math.round(t * n) : Math.round(t / n) : ""),
                            w: t
                        };
                    v.push(o), v.srcset.push(o.c = o.u + " " + t + "w")
                })), (t = v).isPicture = n.isPicture, g && "IMG" == o.nodeName.toUpperCase() ? o.removeAttribute(r.srcsetAttr) : o.setAttribute(r.srcsetAttr, t.srcset.join(", ")), Object.defineProperty(o, "_lazyrias", {
                    value: t,
                    writable: !0
                })
            }
        }

        function w(t) {
            return t.getAttribute(t.getAttribute("data-srcattr") || i.srcAttr) || t.getAttribute(r.srcsetAttr) || t.getAttribute(r.srcAttr) || t.getAttribute("data-pfsrcset") || ""
        }! function() {
            var t, e = {
                prefix: "",
                postfix: "",
                srcAttr: "data-src",
                absUrl: !1,
                modifyOptions: function() {},
                widthmap: {},
                ratio: !1,
                traditionalRatio: !1,
                aspectratio: !1
            };
            for (t in (r = n && n.cfg).supportsType || (r.supportsType = function(t) {
                    return !t
                }), r.rias || (r.rias = {}), "widths" in (i = r.rias) || (i.widths = [], function(t) {
                    for (var e, n = 0; !e || e < 3e3;)(n += 5) > 30 && (n += 1), e = 36 * n, t.push(e)
                }(i.widths)), e) t in i || (i[t] = e[t])
        }(), addEventListener("lazybeforesizes", (function(t) {
            var e, o, a, s, c, l, d, h, p, m, g, E, S;
            if (t.detail.instance == n && (e = t.target, t.detail.dataAttr && !t.defaultPrevented && !i.disabled && (p = e.getAttribute(r.sizesAttr) || e.getAttribute("sizes")) && f.test(p))) {
                if (a = function(t, e) {
                        var r = y(t, e);
                        return i.modifyOptions.call(t, {
                            target: t,
                            details: r,
                            detail: r
                        }), n.fire(t, "lazyriasmodifyoptions", r), r
                    }(e, o = w(e)), g = u.test(a.prefix) || u.test(a.postfix), a.isPicture && (s = e.parentNode))
                    for (l = 0, d = (c = s.getElementsByTagName("source")).length; l < d; l++)(g || u.test(h = w(c[l]))) && (b(h, y(c[l], h, a), c[l]), E = !0);
                g || u.test(o) ? (b(o, a, e), E = !0) : E && ((S = []).srcset = [], S.isPicture = !0, Object.defineProperty(e, "_lazyrias", {
                    value: S,
                    writable: !0
                })), E && (v ? e.removeAttribute(r.srcAttr) : "auto" != p && (m = {
                    width: parseInt(p, 10)
                }, _({
                    target: e,
                    detail: m
                })))
            }
        }), !0);
        var _ = function() {
            var i = function(t, e) {
                    return t.w - e.w
                },
                a = function(t, e) {
                    var i;
                    return !t._lazyrias && n.pWS && (i = n.pWS(t.getAttribute(r.srcsetAttr || ""))).length && (Object.defineProperty(t, "_lazyrias", {
                        value: i,
                        writable: !0
                    }), e && t.parentNode && (i.isPicture = "PICTURE" == t.parentNode.nodeName.toUpperCase())), t._lazyrias
                },
                s = function(e, r) {
                    var o, s, c, u, l, d;
                    if ((l = e._lazyrias).isPicture && t.matchMedia)
                        for (s = 0, c = (o = e.parentNode.getElementsByTagName("source")).length; s < c; s++)
                            if (a(o[s]) && !o[s].getAttribute("type") && (!(u = o[s].getAttribute("media")) || (matchMedia(u) || {}).matches)) {
                                l = o[s]._lazyrias;
                                break
                            }
                    return (!l.w || l.w < r) && (l.w = r, l.d = function(e) {
                        var r = t.devicePixelRatio || 1,
                            i = n.getX && n.getX(e);
                        return Math.min(i || r, 2.4, r)
                    }(e), d = function(t) {
                        for (var e, n, r = t.length, i = t[r - 1], o = 0; o < r; o++)
                            if ((i = t[o]).d = i.w / t.w, i.d >= t.d) {
                                !i.cached && (e = t[o - 1]) && e.d > t.d - .13 * Math.pow(t.d, 2.2) && (n = Math.pow(e.d - .6, 1.6), e.cached && (e.d += .15 * n), e.d + (i.d - t.d) * n > t.d && (i = e));
                                break
                            }
                        return i
                    }(l.sort(i))), d
                },
                c = function(i) {
                    if (i.detail.instance == n) {
                        var u, l = i.target;
                        g || !(t.respimage || t.picturefill || o.pf) ? ("_lazyrias" in l || i.detail.dataAttr && a(l, !0)) && (u = s(l, i.detail.width)) && u.u && l._lazyrias.cur != u.u && (l._lazyrias.cur = u.u, u.cached = !0, n.rAF((function() {
                            l.setAttribute(r.srcAttr, u.u), l.setAttribute("src", u.u)
                        }))) : e.removeEventListener("lazybeforesizes", c)
                    }
                };
            return v ? c = function() {} : addEventListener("lazybeforesizes", c), c
        }()
    }))
}, function(t, e, n) {
    var r, i, o;
    ! function(a, s) {
        s = s.bind(null, a, a.document), t.exports ? s(n(3)) : (i = [n(3)], void 0 === (o = "function" == typeof(r = s) ? r.apply(e, i) : r) || (t.exports = o))
    }(window, (function(t, e, n) {
        "use strict";
        if (t.addEventListener) {
            var r = n.cfg,
                i = /\s+/g,
                o = /\s*\|\s+|\s+\|\s*/g,
                a = /^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/,
                s = /^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/,
                c = /\(|\)|'/,
                u = {
                    contain: 1,
                    cover: 1
                },
                l = function(t, e) {
                    if (e) {
                        var n = e.match(s);
                        n && n[1] ? t.setAttribute("type", n[1]) : t.setAttribute("media", r.customMedia[e] || e)
                    }
                },
                d = function(t) {
                    if (t.target._lazybgset) {
                        var e = t.target,
                            r = e._lazybgset,
                            i = e.currentSrc || e.src;
                        if (i) {
                            var o = c.test(i) ? JSON.stringify(i) : i,
                                a = n.fire(r, "bgsetproxy", {
                                    src: i,
                                    useSrc: o,
                                    fullSrc: null
                                });
                            a.defaultPrevented || (r.style.backgroundImage = a.detail.fullSrc || "url(" + a.detail.useSrc + ")")
                        }
                        e._lazybgsetLoading && (n.fire(r, "_lazyloaded", {}, !1, !0), delete e._lazybgsetLoading)
                    }
                };
            addEventListener("lazybeforeunveil", (function(t) {
                var s, c, u;
                !t.defaultPrevented && (s = t.target.getAttribute("data-bgset")) && (u = t.target, (c = e.createElement("img")).alt = "", c._lazybgsetLoading = !0, t.detail.firesLoad = !0, function(t, n, s) {
                    var c = e.createElement("picture"),
                        u = n.getAttribute(r.sizesAttr),
                        d = n.getAttribute("data-ratio"),
                        h = n.getAttribute("data-optimumx");
                    n._lazybgset && n._lazybgset.parentNode == n && n.removeChild(n._lazybgset), Object.defineProperty(s, "_lazybgset", {
                        value: n,
                        writable: !0
                    }), Object.defineProperty(n, "_lazybgset", {
                        value: c,
                        writable: !0
                    }), t = t.replace(i, " ").split(o), c.style.display = "none", s.className = r.lazyClass, 1 != t.length || u || (u = "auto"), t.forEach((function(t) {
                        var n, i = e.createElement("source");
                        u && "auto" != u && i.setAttribute("sizes", u), (n = t.match(a)) ? (i.setAttribute(r.srcsetAttr, n[1]), l(i, n[2]), l(i, n[3])) : i.setAttribute(r.srcsetAttr, t), c.appendChild(i)
                    })), u && (s.setAttribute(r.sizesAttr, u), n.removeAttribute(r.sizesAttr), n.removeAttribute("sizes")), h && s.setAttribute("data-optimumx", h), d && s.setAttribute("data-ratio", d), c.appendChild(s), n.appendChild(c)
                }(s, u, c), setTimeout((function() {
                    n.loader.unveil(c), n.rAF((function() {
                        n.fire(c, "_lazyloaded", {}, !0, !0), c.complete && d({
                            target: c
                        })
                    }))
                })))
            })), e.addEventListener("load", d, !0), t.addEventListener("lazybeforesizes", (function(t) {
                if (t.detail.instance == n && t.target._lazybgset && t.detail.dataAttr) {
                    var e = function(t) {
                        var e;
                        return e = (getComputedStyle(t) || {
                            getPropertyValue: function() {}
                        }).getPropertyValue("background-size"), !u[e] && u[t.style.backgroundSize] && (e = t.style.backgroundSize), e
                    }(t.target._lazybgset);
                    u[e] && (t.target._lazysizesParentFit = e, n.rAF((function() {
                        t.target.setAttribute("data-parent-fit", e), t.target._lazysizesParentFit && delete t.target._lazysizesParentFit
                    })))
                }
            }), !0), e.documentElement.addEventListener("lazybeforesizes", (function(t) {
                var e, r;
                !t.defaultPrevented && t.target._lazybgset && t.detail.instance == n && (t.detail.width = (e = t.target._lazybgset, r = n.gW(e, e.parentNode), (!e._lazysizesWidth || r > e._lazysizesWidth) && (e._lazysizesWidth = r), e._lazysizesWidth))
            }))
        }
    }))
}, function(t, e, n) {
    var r, i, o;
    ! function(a, s) {
        if (a) {
            s = s.bind(null, a, a.document), t.exports ? s(n(3)) : (i = [n(3)], void 0 === (o = "function" == typeof(r = s) ? r.apply(e, i) : r) || (t.exports = o))
        }
    }("undefined" != typeof window ? window : 0, (function(t, e, n) {
        "use strict";
        var r, i, o, a, s, c, u, l, d, h, f, p, m, g, v, y, b = n.cfg,
            w = e.createElement("img"),
            _ = "sizes" in w && "srcset" in w,
            E = /\s+\d+h/g,
            S = (i = /\s+(\d+)(w|h)\s+(\d+)(w|h)/, o = Array.prototype.forEach, function() {
                var t = e.createElement("img"),
                    r = function(t) {
                        var e, n, r = t.getAttribute(b.srcsetAttr);
                        r && (n = r.match(i)) && ((e = "w" == n[2] ? n[1] / n[3] : n[3] / n[1]) && t.setAttribute("data-aspectratio", e), t.setAttribute(b.srcsetAttr, r.replace(E, "")))
                    },
                    a = function(t) {
                        if (t.detail.instance == n) {
                            var e = t.target.parentNode;
                            e && "PICTURE" == e.nodeName && o.call(e.getElementsByTagName("source"), r), r(t.target)
                        }
                    },
                    s = function() {
                        t.currentSrc && e.removeEventListener("lazybeforeunveil", a)
                    };
                e.addEventListener("lazybeforeunveil", a), t.onload = s, t.onerror = s, t.srcset = "data:,a 1w 1h", t.complete && s()
            });
        (b.supportsType || (b.supportsType = function(t) {
            return !t
        }), t.HTMLPictureElement && _) ? !n.hasHDescriptorFix && e.msElementsFromPoint && (n.hasHDescriptorFix = !0, S()): t.picturefill || b.pf || (b.pf = function(e) {
            var n, i;
            if (!t.picturefill)
                for (n = 0, i = e.elements.length; n < i; n++) r(e.elements[n])
        }, l = function(t, e) {
            return t.w - e.w
        }, d = /^\s*\d+\.*\d*px\s*$/, s = /(([^,\s].[^\s]+)\s+(\d+)w)/g, c = /\s/, u = function(t, e, n, r) {
            a.push({
                c: e,
                u: n,
                w: 1 * r
            })
        }, f = function() {
            var t, n, i;
            f.init || (f.init = !0, addEventListener("resize", (n = e.getElementsByClassName("lazymatchmedia"), i = function() {
                var t, e;
                for (t = 0, e = n.length; t < e; t++) r(n[t])
            }, function() {
                clearTimeout(t), t = setTimeout(i, 66)
            })))
        }, p = function(e, r) {
            var i, o = e.getAttribute("srcset") || e.getAttribute(b.srcsetAttr);
            !o && r && (o = e._lazypolyfill ? e._lazypolyfill._set : e.getAttribute(b.srcAttr) || e.getAttribute("src")), e._lazypolyfill && e._lazypolyfill._set == o || (i = h(o || ""), r && e.parentNode && (i.isPicture = "PICTURE" == e.parentNode.nodeName.toUpperCase(), i.isPicture && t.matchMedia && (n.aC(e, "lazymatchmedia"), f())), i._set = o, Object.defineProperty(e, "_lazypolyfill", {
                value: i,
                writable: !0
            }))
        }, m = function(e) {
            return t.matchMedia ? (m = function(t) {
                return !t || (matchMedia(t) || {}).matches
            })(e) : !e
        }, g = function(e) {
            var r, i, o, a, s, c, u;
            if (p(a = e, !0), (s = a._lazypolyfill).isPicture)
                for (i = 0, o = (r = e.parentNode.getElementsByTagName("source")).length; i < o; i++)
                    if (b.supportsType(r[i].getAttribute("type"), e) && m(r[i].getAttribute("media"))) {
                        a = r[i], p(a), s = a._lazypolyfill;
                        break
                    }
            return s.length > 1 ? (u = a.getAttribute("sizes") || "", u = d.test(u) && parseInt(u, 10) || n.gW(e, e.parentNode), s.d = function(e) {
                var r = t.devicePixelRatio || 1,
                    i = n.getX && n.getX(e);
                return Math.min(i || r, 2.5, r)
            }(e), !s.src || !s.w || s.w < u ? (s.w = u, c = function(t) {
                for (var e, n, r = t.length, i = t[r - 1], o = 0; o < r; o++)
                    if ((i = t[o]).d = i.w / t.w, i.d >= t.d) {
                        !i.cached && (e = t[o - 1]) && e.d > t.d - .13 * Math.pow(t.d, 2.2) && (n = Math.pow(e.d - .6, 1.6), e.cached && (e.d += .15 * n), e.d + (i.d - t.d) * n > t.d && (i = e));
                        break
                    }
                return i
            }(s.sort(l)), s.src = c) : c = s.src) : c = s[0], c
        }, (v = function(t) {
            if (!_ || !t.parentNode || "PICTURE" == t.parentNode.nodeName.toUpperCase()) {
                var e = g(t);
                e && e.u && t._lazypolyfill.cur != e.u && (t._lazypolyfill.cur = e.u, e.cached = !0, t.setAttribute(b.srcAttr, e.u), t.setAttribute("src", e.u))
            }
        }).parse = h = function(t) {
            return a = [], (t = t.trim()).replace(E, "").replace(s, u), a.length || !t || c.test(t) || a.push({
                c: t,
                u: t,
                w: 99
            }), a
        }, r = v, b.loadedClass && b.loadingClass && (y = [], ['img[sizes$="px"][srcset].', "picture > img:not([srcset])."].forEach((function(t) {
            y.push(t + b.loadedClass), y.push(t + b.loadingClass)
        })), b.pf({
            elements: e.querySelectorAll(y.join(", "))
        })))
    }))
}, function(t, e, n) {
    var r, i;
    ! function(o, a) {
        "use strict";
        void 0 === (i = "function" == typeof(r = a) ? r.call(e, n, e, t) : r) || (t.exports = i)
    }(window, (function() {
        "use strict";
        var t = function() {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
                var r = e[n] + "MatchesSelector";
                if (t[r]) return r
            }
        }();
        return function(e, n) {
            return e[t](n)
        }
    }))
}, function(t, e, n) {
    var r, i;
    window, r = [n(17)], void 0 === (i = function(t) {
        return function(t, e) {
            "use strict";

            function n(t, e) {
                this.element = t, this.parent = e, this.create()
            }
            var r = n.prototype;
            return r.create = function() {
                this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), this.x = 0, this.shift = 0
            }, r.destroy = function() {
                this.unselect(), this.element.style.position = "";
                var t = this.parent.originSide;
                this.element.style[t] = "", this.element.removeAttribute("aria-hidden")
            }, r.getSize = function() {
                this.size = e(this.element)
            }, r.setPosition = function(t) {
                this.x = t, this.updateTarget(), this.renderPosition(t)
            }, r.updateTarget = r.setDefaultTarget = function() {
                var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
                this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
            }, r.renderPosition = function(t) {
                var e = this.parent.originSide;
                this.element.style[e] = this.parent.getPositionValue(t)
            }, r.select = function() {
                this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden")
            }, r.unselect = function() {
                this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true")
            }, r.wrapShift = function(t) {
                this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
            }, r.remove = function() {
                this.element.parentNode.removeChild(this.element)
            }, n
        }(0, t)
    }.apply(e, r)) || (t.exports = i)
}, function(t, e, n) {
    var r, i;
    window, void 0 === (i = "function" == typeof(r = function() {
        "use strict";

        function t(t) {
            this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0
        }
        var e = t.prototype;
        return e.addCell = function(t) {
            if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
                this.x = t.x;
                var e = this.isOriginLeft ? "marginLeft" : "marginRight";
                this.firstMargin = t.size[e]
            }
        }, e.updateTarget = function() {
            var t = this.isOriginLeft ? "marginRight" : "marginLeft",
                e = this.getLastCell(),
                n = e ? e.size[t] : 0,
                r = this.outerWidth - (this.firstMargin + n);
            this.target = this.x + this.firstMargin + r * this.parent.cellAlign
        }, e.getLastCell = function() {
            return this.cells[this.cells.length - 1]
        }, e.select = function() {
            this.parent.checkVisibility(), this.cells.forEach((function(t) {
                t.select()
            }))
        }, e.unselect = function() {
            this.cells.forEach((function(t) {
                t.unselect()
            }))
        }, e.getCellElements = function() {
            return this.cells.map((function(t) {
                return t.element
            }))
        }, t
    }) ? r.call(e, n, e, t) : r) || (t.exports = i)
}, function(t, e, n) {
    var r, i;
    window, r = [n(4)], void 0 === (i = function(t) {
        return function(t, e) {
            "use strict";
            var n = {
                startAnimation: function() {
                    this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
                },
                animate: function() {
                    this.applyDragForce(), this.applySelectedAttraction();
                    var t = this.x;
                    if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
                        var e = this;
                        requestAnimationFrame((function() {
                            e.animate()
                        }))
                    }
                },
                positionSlider: function() {
                    var t = this.x;
                    this.options.wrapAround && this.cells.length > 1 && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), this.setTranslateX(t, this.isAnimating), this.dispatchScrollEvent()
                },
                setTranslateX: function(t, e) {
                    t += this.cursorPosition, t = this.options.rightToLeft ? -t : t;
                    var n = this.getPositionValue(t);
                    this.slider.style.transform = e ? "translate3d(" + n + ",0,0)" : "translateX(" + n + ")"
                },
                dispatchScrollEvent: function() {
                    var t = this.slides[0];
                    if (t) {
                        var e = -this.x - t.target,
                            n = e / this.slidesWidth;
                        this.dispatchEvent("scroll", null, [n, e])
                    }
                },
                positionSliderAtSelected: function() {
                    this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
                },
                getPositionValue: function(t) {
                    return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
                },
                settle: function(t) {
                    !this.isPointerDown && Math.round(100 * this.x) == Math.round(100 * t) && this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex])), this.checkVisibility()
                },
                shiftWrapCells: function(t) {
                    var e = this.cursorPosition + t;
                    this._shiftCells(this.beforeShiftCells, e, -1);
                    var n = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
                    this._shiftCells(this.afterShiftCells, n, 1)
                },
                _shiftCells: function(t, e, n) {
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r],
                            o = e > 0 ? n : 0;
                        i.wrapShift(o), e -= i.size.outerWidth
                    }
                },
                _unshiftCells: function(t) {
                    if (t && t.length)
                        for (var e = 0; e < t.length; e++) t[e].wrapShift(0)
                },
                integratePhysics: function() {
                    this.x += this.velocity, this.velocity *= this.getFrictionFactor()
                },
                applyForce: function(t) {
                    this.velocity += t
                },
                getFrictionFactor: function() {
                    return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
                },
                getRestingPosition: function() {
                    return this.x + this.velocity / (1 - this.getFrictionFactor())
                },
                applyDragForce: function() {
                    if (this.isDraggable && this.isPointerDown) {
                        var t = this.dragX - this.x - this.velocity;
                        this.applyForce(t)
                    }
                },
                applySelectedAttraction: function() {
                    if ((!this.isDraggable || !this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
                        var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
                        this.applyForce(t)
                    }
                }
            };
            return n
        }(0, t)
    }.apply(e, r)) || (t.exports = i)
}, function(t, e, n) {
    var r, i;
    ! function(o, a) {
        r = [n(6), n(39), n(4)], void 0 === (i = function(t, e, n) {
            return function(t, e, n, r) {
                "use strict";
                r.extend(e.defaults, {
                    draggable: ">1",
                    dragThreshold: 3
                }), e.createMethods.push("_createDrag");
                var i = e.prototype;
                r.extend(i, n.prototype), i._touchActionValue = "pan-y";
                var o = "createTouch" in document,
                    a = !1;
                i._createDrag = function() {
                    this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), o && !a && (t.addEventListener("touchmove", (function() {})), a = !0)
                }, i.onActivateDrag = function() {
                    this.handles = [this.viewport], this.bindHandles(), this.updateDraggable()
                }, i.onDeactivateDrag = function() {
                    this.unbindHandles(), this.element.classList.remove("is-draggable")
                }, i.updateDraggable = function() {
                    ">1" == this.options.draggable ? this.isDraggable = this.slides.length > 1 : "onOverflow" === this.options.draggable ? this.isDraggable = this.viewport.scrollWidth > this.viewport.offsetWidth : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
                }, i.bindDrag = function() {
                    this.options.draggable = !0, this.updateDraggable()
                }, i.unbindDrag = function() {
                    this.options.draggable = !1, this.updateDraggable()
                }, i._uiChangeDrag = function() {
                    delete this.isFreeScrolling
                }, i.pointerDown = function(e, n) {
                    this.isDraggable ? this.okayPointerDown(e) && (this._pointerDownPreventDefault(e), this.pointerDownFocus(e), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = c(), t.addEventListener("scroll", this), this._pointerDownDefault(e, n)) : this._pointerDownDefault(e, n)
                }, i._pointerDownDefault = function(t, e) {
                    this.pointerDownPointer = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    }, this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e])
                };
                var s = {
                    INPUT: !0,
                    TEXTAREA: !0,
                    SELECT: !0
                };

                function c() {
                    return {
                        x: t.pageXOffset,
                        y: t.pageYOffset
                    }
                }
                return i.pointerDownFocus = function(t) {
                    s[t.target.nodeName] || this.focus()
                }, i._pointerDownPreventDefault = function(t) {
                    var e = "touchstart" == t.type,
                        n = "touch" == t.pointerType,
                        r = s[t.target.nodeName];
                    e || n || r || t.preventDefault()
                }, i.hasDragStarted = function(t) {
                    return Math.abs(t.x) > this.options.dragThreshold
                }, i.pointerUp = function(t, e) {
                    delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e)
                }, i.pointerDone = function() {
                    t.removeEventListener("scroll", this), delete this.pointerDownScroll
                }, i.dragStart = function(e, n) {
                    this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), t.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [n]))
                }, i.pointerMove = function(t, e) {
                    var n = this._dragPointerMove(t, e);
                    this.dispatchEvent("pointerMove", t, [e, n]), this._dragMove(t, e, n)
                }, i.dragMove = function(t, e, n) {
                    if (this.isDraggable) {
                        t.preventDefault(), this.previousDragX = this.dragX;
                        var r = this.options.rightToLeft ? -1 : 1;
                        this.options.wrapAround && (n.x %= this.slideableWidth);
                        var i = this.dragStartPosition + n.x * r;
                        if (!this.options.wrapAround && this.slides.length) {
                            var o = Math.max(-this.slides[0].target, this.dragStartPosition);
                            i = i > o ? .5 * (i + o) : i;
                            var a = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                            i = i < a ? .5 * (i + a) : i
                        }
                        this.dragX = i, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, n])
                    }
                }, i.dragEnd = function(t, e) {
                    if (this.isDraggable) {
                        this.options.freeScroll && (this.isFreeScrolling = !0);
                        var n = this.dragEndRestingSelect();
                        if (this.options.freeScroll && !this.options.wrapAround) {
                            var r = this.getRestingPosition();
                            this.isFreeScrolling = -r > this.slides[0].target && -r < this.getLastSlide().target
                        } else this.options.freeScroll || n != this.selectedIndex || (n += this.dragEndBoostSelect());
                        delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(n), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e])
                    }
                }, i.dragEndRestingSelect = function() {
                    var t = this.getRestingPosition(),
                        e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
                        n = this._getClosestResting(t, e, 1),
                        r = this._getClosestResting(t, e, -1);
                    return n.distance < r.distance ? n.index : r.index
                }, i._getClosestResting = function(t, e, n) {
                    for (var r = this.selectedIndex, i = 1 / 0, o = this.options.contain && !this.options.wrapAround ? function(t, e) {
                            return t <= e
                        } : function(t, e) {
                            return t < e
                        }; o(e, i) && (r += n, i = e, null !== (e = this.getSlideDistance(-t, r)));) e = Math.abs(e);
                    return {
                        distance: i,
                        index: r - n
                    }
                }, i.getSlideDistance = function(t, e) {
                    var n = this.slides.length,
                        i = this.options.wrapAround && n > 1,
                        o = i ? r.modulo(e, n) : e,
                        a = this.slides[o];
                    if (!a) return null;
                    var s = i ? this.slideableWidth * Math.floor(e / n) : 0;
                    return t - (a.target + s)
                }, i.dragEndBoostSelect = function() {
                    if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
                    var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
                        e = this.previousDragX - this.dragX;
                    return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0
                }, i.staticClick = function(t, e) {
                    var n = this.getParentCell(t.target),
                        r = n && n.element,
                        i = n && this.cells.indexOf(n);
                    this.dispatchEvent("staticClick", t, [e, r, i])
                }, i.onscroll = function() {
                    var t = c(),
                        e = this.pointerDownScroll.x - t.x,
                        n = this.pointerDownScroll.y - t.y;
                    (Math.abs(e) > 3 || Math.abs(n) > 3) && this._pointerDone()
                }, e
            }(o, t, e, n)
        }.apply(e, r)) || (t.exports = i)
    }(window)
}, function(t, e, n) {
    var r, i;
    /*!
     * Unidragger v2.3.1
     * Draggable base class
     * MIT license
     */
    ! function(o, a) {
        r = [n(13)], void 0 === (i = function(t) {
            return function(t, e) {
                "use strict";

                function n() {}
                var r = n.prototype = Object.create(e.prototype);
                r.bindHandles = function() {
                    this._bindHandles(!0)
                }, r.unbindHandles = function() {
                    this._bindHandles(!1)
                }, r._bindHandles = function(e) {
                    for (var n = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener", r = e ? this._touchActionValue : "", i = 0; i < this.handles.length; i++) {
                        var o = this.handles[i];
                        this._bindStartEvent(o, e), o[n]("click", this), t.PointerEvent && (o.style.touchAction = r)
                    }
                }, r._touchActionValue = "none", r.pointerDown = function(t, e) {
                    this.okayPointerDown(t) && (this.pointerDownPointer = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    }, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]))
                };
                var i = {
                        TEXTAREA: !0,
                        INPUT: !0,
                        SELECT: !0,
                        OPTION: !0
                    },
                    o = {
                        radio: !0,
                        checkbox: !0,
                        button: !0,
                        submit: !0,
                        image: !0,
                        file: !0
                    };
                return r.okayPointerDown = function(t) {
                    var e = i[t.target.nodeName],
                        n = o[t.target.type],
                        r = !e || n;
                    return r || this._pointerReset(), r
                }, r.pointerDownBlur = function() {
                    var t = document.activeElement;
                    t && t.blur && t != document.body && t.blur()
                }, r.pointerMove = function(t, e) {
                    var n = this._dragPointerMove(t, e);
                    this.emitEvent("pointerMove", [t, e, n]), this._dragMove(t, e, n)
                }, r._dragPointerMove = function(t, e) {
                    var n = {
                        x: e.pageX - this.pointerDownPointer.pageX,
                        y: e.pageY - this.pointerDownPointer.pageY
                    };
                    return !this.isDragging && this.hasDragStarted(n) && this._dragStart(t, e), n
                }, r.hasDragStarted = function(t) {
                    return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
                }, r.pointerUp = function(t, e) {
                    this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
                }, r._dragPointerUp = function(t, e) {
                    this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
                }, r._dragStart = function(t, e) {
                    this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(t, e)
                }, r.dragStart = function(t, e) {
                    this.emitEvent("dragStart", [t, e])
                }, r._dragMove = function(t, e, n) {
                    this.isDragging && this.dragMove(t, e, n)
                }, r.dragMove = function(t, e, n) {
                    t.preventDefault(), this.emitEvent("dragMove", [t, e, n])
                }, r._dragEnd = function(t, e) {
                    this.isDragging = !1, setTimeout(function() {
                        delete this.isPreventingClicks
                    }.bind(this)), this.dragEnd(t, e)
                }, r.dragEnd = function(t, e) {
                    this.emitEvent("dragEnd", [t, e])
                }, r.onclick = function(t) {
                    this.isPreventingClicks && t.preventDefault()
                }, r._staticClick = function(t, e) {
                    this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
                        delete this.isIgnoringMouseUp
                    }.bind(this), 400)))
                }, r.staticClick = function(t, e) {
                    this.emitEvent("staticClick", [t, e])
                }, n.getPointerPoint = e.getPointerPoint, n
            }(o, t)
        }.apply(e, r)) || (t.exports = i)
    }(window)
}, function(t, e, n) {
    var r, i;
    window, r = [n(6), n(13), n(4)], void 0 === (i = function(t, e, n) {
        return function(t, e, n, r) {
            "use strict";
            var i = "http://www.w3.org/2000/svg";

            function o(t, e) {
                this.direction = t, this.parent = e, this._create()
            }
            o.prototype = Object.create(n.prototype), o.prototype._create = function() {
                this.isEnabled = !0, this.isPrevious = -1 == this.direction;
                var t = this.parent.options.rightToLeft ? 1 : -1;
                this.isLeft = this.direction == t;
                var e = this.element = document.createElement("button");
                e.className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
                var n = this.createSVG();
                e.appendChild(n), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
            }, o.prototype.activate = function() {
                this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
            }, o.prototype.deactivate = function() {
                this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this)
            }, o.prototype.createSVG = function() {
                var t = document.createElementNS(i, "svg");
                t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");
                var e, n = document.createElementNS(i, "path"),
                    r = "string" == typeof(e = this.parent.options.arrowShape) ? e : "M " + e.x0 + ",50 L " + e.x1 + "," + (e.y1 + 50) + " L " + e.x2 + "," + (e.y2 + 50) + " L " + e.x3 + ",50  L " + e.x2 + "," + (50 - e.y2) + " L " + e.x1 + "," + (50 - e.y1) + " Z";
                return n.setAttribute("d", r), n.setAttribute("class", "arrow"), this.isLeft || n.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(n), t
            }, o.prototype.handleEvent = r.handleEvent, o.prototype.onclick = function() {
                if (this.isEnabled) {
                    this.parent.uiChange();
                    var t = this.isPrevious ? "previous" : "next";
                    this.parent[t]()
                }
            }, o.prototype.enable = function() {
                this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
            }, o.prototype.disable = function() {
                this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
            }, o.prototype.update = function() {
                var t = this.parent.slides;
                if (this.parent.options.wrapAround && t.length > 1) this.enable();
                else {
                    var e = t.length ? t.length - 1 : 0,
                        n = this.isPrevious ? 0 : e;
                    this[this.parent.selectedIndex == n ? "disable" : "enable"]()
                }
            }, o.prototype.destroy = function() {
                this.deactivate(), this.allOff()
            }, r.extend(e.defaults, {
                prevNextButtons: !0,
                arrowShape: {
                    x0: 10,
                    x1: 60,
                    y1: 50,
                    x2: 70,
                    y2: 40,
                    x3: 30
                }
            }), e.createMethods.push("_createPrevNextButtons");
            var a = e.prototype;
            return a._createPrevNextButtons = function() {
                this.options.prevNextButtons && (this.prevButton = new o(-1, this), this.nextButton = new o(1, this), this.on("activate", this.activatePrevNextButtons))
            }, a.activatePrevNextButtons = function() {
                this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
            }, a.deactivatePrevNextButtons = function() {
                this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
            }, e.PrevNextButton = o, e
        }(0, t, e, n)
    }.apply(e, r)) || (t.exports = i)
}, function(t, e, n) {
    var r, i;
    window, r = [n(6), n(13), n(4)], void 0 === (i = function(t, e, n) {
        return function(t, e, n, r) {
            "use strict";

            function i(t) {
                this.parent = t, this._create()
            }
            i.prototype = Object.create(n.prototype), i.prototype._create = function() {
                this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
            }, i.prototype.activate = function() {
                this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder)
            }, i.prototype.deactivate = function() {
                this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder)
            }, i.prototype.setDots = function() {
                var t = this.parent.slides.length - this.dots.length;
                t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t)
            }, i.prototype.addDots = function(t) {
                for (var e = document.createDocumentFragment(), n = [], r = this.dots.length, i = r + t, o = r; o < i; o++) {
                    var a = document.createElement("li");
                    a.className = "dot", a.setAttribute("aria-label", "Page dot " + (o + 1)), e.appendChild(a), n.push(a)
                }
                this.holder.appendChild(e), this.dots = this.dots.concat(n)
            }, i.prototype.removeDots = function(t) {
                this.dots.splice(this.dots.length - t, t).forEach((function(t) {
                    this.holder.removeChild(t)
                }), this)
            }, i.prototype.updateSelected = function() {
                this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"))
            }, i.prototype.onTap = i.prototype.onClick = function(t) {
                var e = t.target;
                if ("LI" == e.nodeName) {
                    this.parent.uiChange();
                    var n = this.dots.indexOf(e);
                    this.parent.select(n)
                }
            }, i.prototype.destroy = function() {
                this.deactivate(), this.allOff()
            }, e.PageDots = i, r.extend(e.defaults, {
                pageDots: !0
            }), e.createMethods.push("_createPageDots");
            var o = e.prototype;
            return o._createPageDots = function() {
                this.options.pageDots && (this.pageDots = new i(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
            }, o.activatePageDots = function() {
                this.pageDots.activate()
            }, o.updateSelectedPageDots = function() {
                this.pageDots.updateSelected()
            }, o.updatePageDots = function() {
                this.pageDots.setDots()
            }, o.deactivatePageDots = function() {
                this.pageDots.deactivate()
            }, e.PageDots = i, e
        }(0, t, e, n)
    }.apply(e, r)) || (t.exports = i)
}, function(t, e, n) {
    var r, i;
    window, r = [n(12), n(4), n(6)], void 0 === (i = function(t, e, n) {
        return function(t, e, n) {
            "use strict";

            function r(t) {
                this.parent = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this)
            }
            r.prototype = Object.create(t.prototype), r.prototype.play = function() {
                "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()))
            }, r.prototype.tick = function() {
                if ("playing" == this.state) {
                    var t = this.parent.options.autoPlay;
                    t = "number" == typeof t ? t : 3e3;
                    var e = this;
                    this.clear(), this.timeout = setTimeout((function() {
                        e.parent.next(!0), e.tick()
                    }), t)
                }
            }, r.prototype.stop = function() {
                this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange)
            }, r.prototype.clear = function() {
                clearTimeout(this.timeout)
            }, r.prototype.pause = function() {
                "playing" == this.state && (this.state = "paused", this.clear())
            }, r.prototype.unpause = function() {
                "paused" == this.state && this.play()
            }, r.prototype.visibilityChange = function() {
                this[document.hidden ? "pause" : "unpause"]()
            }, r.prototype.visibilityPlay = function() {
                this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay)
            }, e.extend(n.defaults, {
                pauseAutoPlayOnHover: !0
            }), n.createMethods.push("_createPlayer");
            var i = n.prototype;
            return i._createPlayer = function() {
                this.player = new r(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
            }, i.activatePlayer = function() {
                this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
            }, i.playPlayer = function() {
                this.player.play()
            }, i.stopPlayer = function() {
                this.player.stop()
            }, i.pausePlayer = function() {
                this.player.pause()
            }, i.unpausePlayer = function() {
                this.player.unpause()
            }, i.deactivatePlayer = function() {
                this.player.stop(), this.element.removeEventListener("mouseenter", this)
            }, i.onmouseenter = function() {
                this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
            }, i.onmouseleave = function() {
                this.player.unpause(), this.element.removeEventListener("mouseleave", this)
            }, n.Player = r, n
        }(t, e, n)
    }.apply(e, r)) || (t.exports = i)
}, function(t, e, n) {
    var r, i;
    window, r = [n(6), n(4)], void 0 === (i = function(t, e) {
        return function(t, e, n) {
            "use strict";
            var r = e.prototype;
            return r.insert = function(t, e) {
                var n = this._makeCells(t);
                if (n && n.length) {
                    var r = this.cells.length;
                    e = void 0 === e ? r : e;
                    var i = function(t) {
                            var e = document.createDocumentFragment();
                            return t.forEach((function(t) {
                                e.appendChild(t.element)
                            })), e
                        }(n),
                        o = e == r;
                    if (o) this.slider.appendChild(i);
                    else {
                        var a = this.cells[e].element;
                        this.slider.insertBefore(i, a)
                    }
                    if (0 === e) this.cells = n.concat(this.cells);
                    else if (o) this.cells = this.cells.concat(n);
                    else {
                        var s = this.cells.splice(e, r - e);
                        this.cells = this.cells.concat(n).concat(s)
                    }
                    this._sizeCells(n), this.cellChange(e, !0)
                }
            }, r.append = function(t) {
                this.insert(t, this.cells.length)
            }, r.prepend = function(t) {
                this.insert(t, 0)
            }, r.remove = function(t) {
                var e = this.getCells(t);
                if (e && e.length) {
                    var r = this.cells.length - 1;
                    e.forEach((function(t) {
                        t.remove();
                        var e = this.cells.indexOf(t);
                        r = Math.min(e, r), n.removeFrom(this.cells, t)
                    }), this), this.cellChange(r, !0)
                }
            }, r.cellSizeChange = function(t) {
                var e = this.getCell(t);
                if (e) {
                    e.getSize();
                    var n = this.cells.indexOf(e);
                    this.cellChange(n)
                }
            }, r.cellChange = function(t, e) {
                var n = this.selectedElement;
                this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();
                var r = this.getCell(n);
                r && (this.selectedIndex = this.getCellSlideIndex(r)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [t]), this.select(this.selectedIndex), e && this.positionSliderAtSelected()
            }, e
        }(0, t, e)
    }.apply(e, r)) || (t.exports = i)
}, function(t, e, n) {
    var r, i;
    window, r = [n(6), n(4)], void 0 === (i = function(t, e) {
        return function(t, e, n) {
            "use strict";
            e.createMethods.push("_createLazyload");
            var r = e.prototype;

            function i(t, e) {
                this.img = t, this.flickity = e, this.load()
            }
            return r._createLazyload = function() {
                this.on("select", this.lazyLoad)
            }, r.lazyLoad = function() {
                var t = this.options.lazyLoad;
                if (t) {
                    var e = "number" == typeof t ? t : 0,
                        r = this.getAdjacentCellElements(e),
                        o = [];
                    r.forEach((function(t) {
                        var e = function(t) {
                            if ("IMG" == t.nodeName) {
                                var e = t.getAttribute("data-flickity-lazyload"),
                                    r = t.getAttribute("data-flickity-lazyload-src"),
                                    i = t.getAttribute("data-flickity-lazyload-srcset");
                                if (e || r || i) return [t]
                            }
                            var o = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
                            return n.makeArray(o)
                        }(t);
                        o = o.concat(e)
                    })), o.forEach((function(t) {
                        new i(t, this)
                    }), this)
                }
            }, i.prototype.handleEvent = n.handleEvent, i.prototype.load = function() {
                this.img.addEventListener("load", this), this.img.addEventListener("error", this);
                var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
                    e = this.img.getAttribute("data-flickity-lazyload-srcset");
                this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset")
            }, i.prototype.onload = function(t) {
                this.complete(t, "flickity-lazyloaded")
            }, i.prototype.onerror = function(t) {
                this.complete(t, "flickity-lazyerror")
            }, i.prototype.complete = function(t, e) {
                this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                var n = this.flickity.getParentCell(this.img),
                    r = n && n.element;
                this.flickity.cellSizeChange(r), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, r)
            }, e.LazyLoader = i, e
        }(0, t, e)
    }.apply(e, r)) || (t.exports = i)
}, function(t, e, n) {
    "use strict";
    var r;
    /**
     * @link https://github.com/gajus/sister for the canonical source repository
     * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
     */
    r = function() {
        var t = {},
            e = {};
        return t.on = function(t, n) {
            var r = {
                name: t,
                handler: n
            };
            return e[t] = e[t] || [], e[t].unshift(r), r
        }, t.off = function(t) {
            var n = e[t.name].indexOf(t); - 1 !== n && e[t.name].splice(n, 1)
        }, t.trigger = function(t, n) {
            var r, i = e[t];
            if (i)
                for (r = i.length; r--;) i[r].handler(n)
        }, t
    }, t.exports = r
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r, i = n(47),
        o = (r = i) && r.__esModule ? r : {
            default: r
        };
    e.default = function(t) {
        return new Promise((function(e) {
            if (window.YT && window.YT.Player && window.YT.Player instanceof Function) e(window.YT);
            else {
                var n = "http:" === window.location.protocol ? "http:" : "https:";
                (0, o.default)(n + "//www.youtube.com/iframe_api", (function(e) {
                    e && t.trigger("error", e)
                }));
                var r = window.onYouTubeIframeAPIReady;
                window.onYouTubeIframeAPIReady = function() {
                    r && r(), e(window.YT)
                }
            }
        }))
    }, t.exports = e.default
}, function(t, e) {
    function n(t, e) {
        t.onload = function() {
            this.onerror = this.onload = null, e(null, t)
        }, t.onerror = function() {
            this.onerror = this.onload = null, e(new Error("Failed to load " + this.src), t)
        }
    }

    function r(t, e) {
        t.onreadystatechange = function() {
            "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, e(null, t))
        }
    }
    t.exports = function(t, e, i) {
        var o = document.head || document.getElementsByTagName("head")[0],
            a = document.createElement("script");
        "function" == typeof e && (i = e, e = {}), e = e || {}, i = i || function() {}, a.type = e.type || "text/javascript", a.charset = e.charset || "utf8", a.async = !("async" in e) || !!e.async, a.src = t, e.attrs && function(t, e) {
            for (var n in e) t.setAttribute(n, e[n])
        }(a, e.attrs), e.text && (a.text = "" + e.text), ("onload" in a ? n : r)(a, i), a.onload || n(a, i), o.appendChild(a)
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = s(n(49)),
        i = s(n(52)),
        o = s(n(53)),
        a = s(n(54));

    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var c = (0, r.default)("youtube-player"),
        u = {
            proxyEvents: function(t) {
                var e = {},
                    n = function(n) {
                        var r = "on" + n.slice(0, 1).toUpperCase() + n.slice(1);
                        e[r] = function(e) {
                            c('event "%s"', r, e), t.trigger(n, e)
                        }
                    },
                    r = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var s, u = o.default[Symbol.iterator](); !(r = (s = u.next()).done); r = !0) {
                        n(s.value)
                    }
                } catch (t) {
                    i = !0, a = t
                } finally {
                    try {
                        !r && u.return && u.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return e
            },
            promisifyPlayer: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = {},
                    r = function(r) {
                        e && a.default[r] ? n[r] = function() {
                            for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                            return t.then((function(t) {
                                var e = a.default[r],
                                    i = t.getPlayerState(),
                                    o = t[r].apply(t, n);
                                return e.stateChangeRequired || Array.isArray(e.acceptableStates) && -1 === e.acceptableStates.indexOf(i) ? new Promise((function(n) {
                                    t.addEventListener("onStateChange", (function r() {
                                        var i = t.getPlayerState(),
                                            o = void 0;
                                        "number" == typeof e.timeout && (o = setTimeout((function() {
                                            t.removeEventListener("onStateChange", r), n()
                                        }), e.timeout)), Array.isArray(e.acceptableStates) && -1 !== e.acceptableStates.indexOf(i) && (t.removeEventListener("onStateChange", r), clearTimeout(o), n())
                                    }))
                                })).then((function() {
                                    return o
                                })) : o
                            }))
                        } : n[r] = function() {
                            for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                            return t.then((function(t) {
                                return t[r].apply(t, n)
                            }))
                        }
                    },
                    o = !0,
                    s = !1,
                    c = void 0;
                try {
                    for (var u, l = i.default[Symbol.iterator](); !(o = (u = l.next()).done); o = !0) {
                        var d = u.value;
                        r(d)
                    }
                } catch (t) {
                    s = !0, c = t
                } finally {
                    try {
                        !o && l.return && l.return()
                    } finally {
                        if (s) throw c
                    }
                }
                return n
            }
        };
    e.default = u, t.exports = e.default
}, function(t, e, n) {
    (function(r) {
        function i() {
            var t;
            try {
                t = e.storage.debug
            } catch (t) {}
            return !t && void 0 !== r && "env" in r && (t = r.env.DEBUG), t
        }(e = t.exports = n(50)).log = function() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }, e.formatArgs = function(t) {
            var n = this.useColors;
            if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), !n) return;
            var r = "color: " + this.color;
            t.splice(1, 0, r, "color: inherit");
            var i = 0,
                o = 0;
            t[0].replace(/%[a-zA-Z%]/g, (function(t) {
                "%%" !== t && (i++, "%c" === t && (o = i))
            })), t.splice(o, 0, r)
        }, e.save = function(t) {
            try {
                null == t ? e.storage.removeItem("debug") : e.storage.debug = t
            } catch (t) {}
        }, e.load = i, e.useColors = function() {
            if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
            return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }, e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
            try {
                return window.localStorage
            } catch (t) {}
        }(), e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], e.formatters.j = function(t) {
            try {
                return JSON.stringify(t)
            } catch (t) {
                return "[UnexpectedJSONParseError]: " + t.message
            }
        }, e.enable(i())
    }).call(this, n(14))
}, function(t, e, n) {
    var r;

    function i(t) {
        function n() {
            if (n.enabled) {
                var t = n,
                    i = +new Date,
                    o = i - (r || i);
                t.diff = o, t.prev = r, t.curr = i, r = i;
                for (var a = new Array(arguments.length), s = 0; s < a.length; s++) a[s] = arguments[s];
                a[0] = e.coerce(a[0]), "string" != typeof a[0] && a.unshift("%O");
                var c = 0;
                a[0] = a[0].replace(/%([a-zA-Z%])/g, (function(n, r) {
                    if ("%%" === n) return n;
                    c++;
                    var i = e.formatters[r];
                    if ("function" == typeof i) {
                        var o = a[c];
                        n = i.call(t, o), a.splice(c, 1), c--
                    }
                    return n
                })), e.formatArgs.call(t, a);
                var u = n.log || e.log || console.log.bind(console);
                u.apply(t, a)
            }
        }
        return n.namespace = t, n.enabled = e.enabled(t), n.useColors = e.useColors(), n.color = function(t) {
            var n, r = 0;
            for (n in t) r = (r << 5) - r + t.charCodeAt(n), r |= 0;
            return e.colors[Math.abs(r) % e.colors.length]
        }(t), "function" == typeof e.init && e.init(n), n
    }(e = t.exports = i.debug = i.default = i).coerce = function(t) {
        return t instanceof Error ? t.stack || t.message : t
    }, e.disable = function() {
        e.enable("")
    }, e.enable = function(t) {
        e.save(t), e.names = [], e.skips = [];
        for (var n = ("string" == typeof t ? t : "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++) n[i] && ("-" === (t = n[i].replace(/\*/g, ".*?"))[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")))
    }, e.enabled = function(t) {
        var n, r;
        for (n = 0, r = e.skips.length; n < r; n++)
            if (e.skips[n].test(t)) return !1;
        for (n = 0, r = e.names.length; n < r; n++)
            if (e.names[n].test(t)) return !0;
        return !1
    }, e.humanize = n(51), e.names = [], e.skips = [], e.formatters = {}
}, function(t, e) {
    var n = 1e3,
        r = 6e4,
        i = 60 * r,
        o = 24 * i;

    function a(t, e, n) {
        if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
    }
    t.exports = function(t, e) {
        e = e || {};
        var s, c = typeof t;
        if ("string" === c && t.length > 0) return function(t) {
            if ((t = String(t)).length > 100) return;
            var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
            if (!e) return;
            var a = parseFloat(e[1]);
            switch ((e[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return 315576e5 * a;
                case "days":
                case "day":
                case "d":
                    return a * o;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return a * i;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return a * r;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return a * n;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return a;
                default:
                    return
            }
        }(t);
        if ("number" === c && !1 === isNaN(t)) return e.long ? a(s = t, o, "day") || a(s, i, "hour") || a(s, r, "minute") || a(s, n, "second") || s + " ms" : function(t) {
            if (t >= o) return Math.round(t / o) + "d";
            if (t >= i) return Math.round(t / i) + "h";
            if (t >= r) return Math.round(t / r) + "m";
            if (t >= n) return Math.round(t / n) + "s";
            return t + "ms"
        }(t);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"], t.exports = e.default
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"], t.exports = e.default
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r, i = n(55),
        o = (r = i) && r.__esModule ? r : {
            default: r
        };
    e.default = {
        pauseVideo: {
            acceptableStates: [o.default.ENDED, o.default.PAUSED],
            stateChangeRequired: !1
        },
        playVideo: {
            acceptableStates: [o.default.ENDED, o.default.PLAYING],
            stateChangeRequired: !1
        },
        seekTo: {
            acceptableStates: [o.default.ENDED, o.default.PLAYING, o.default.PAUSED],
            stateChangeRequired: !0,
            timeout: 3e3
        }
    }, t.exports = e.default
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        BUFFERING: 3,
        ENDED: 0,
        PAUSED: 2,
        PLAYING: 1,
        UNSTARTED: -1,
        VIDEO_CUED: 5
    }, t.exports = e.default
}, function(t, e, n) {
    (function(t) {
        var r = void 0 !== t && t || "undefined" != typeof self && self || window,
            i = Function.prototype.apply;

        function o(t, e) {
            this._id = t, this._clearFn = e
        }
        e.setTimeout = function() {
            return new o(i.call(setTimeout, r, arguments), clearTimeout)
        }, e.setInterval = function() {
            return new o(i.call(setInterval, r, arguments), clearInterval)
        }, e.clearTimeout = e.clearInterval = function(t) {
            t && t.close()
        }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
            this._clearFn.call(r, this._id)
        }, e.enroll = function(t, e) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = e
        }, e.unenroll = function(t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
        }, e._unrefActive = e.active = function(t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout((function() {
                t._onTimeout && t._onTimeout()
            }), e))
        }, n(57), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
    }).call(this, n(10))
}, function(t, e, n) {
    (function(t, e) {
        ! function(t, n) {
            "use strict";
            if (!t.setImmediate) {
                var r, i, o, a, s, c = 1,
                    u = {},
                    l = !1,
                    d = t.document,
                    h = Object.getPrototypeOf && Object.getPrototypeOf(t);
                h = h && h.setTimeout ? h : t, "[object process]" === {}.toString.call(t.process) ? r = function(t) {
                    e.nextTick((function() {
                        p(t)
                    }))
                } : ! function() {
                    if (t.postMessage && !t.importScripts) {
                        var e = !0,
                            n = t.onmessage;
                        return t.onmessage = function() {
                            e = !1
                        }, t.postMessage("", "*"), t.onmessage = n, e
                    }
                }() ? t.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(t) {
                    p(t.data)
                }, r = function(t) {
                    o.port2.postMessage(t)
                }) : d && "onreadystatechange" in d.createElement("script") ? (i = d.documentElement, r = function(t) {
                    var e = d.createElement("script");
                    e.onreadystatechange = function() {
                        p(t), e.onreadystatechange = null, i.removeChild(e), e = null
                    }, i.appendChild(e)
                }) : r = function(t) {
                    setTimeout(p, 0, t)
                } : (a = "setImmediate$" + Math.random() + "$", s = function(e) {
                    e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(a) && p(+e.data.slice(a.length))
                }, t.addEventListener ? t.addEventListener("message", s, !1) : t.attachEvent("onmessage", s), r = function(e) {
                    t.postMessage(a + e, "*")
                }), h.setImmediate = function(t) {
                    "function" != typeof t && (t = new Function("" + t));
                    for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                    var i = {
                        callback: t,
                        args: e
                    };
                    return u[c] = i, r(c), c++
                }, h.clearImmediate = f
            }

            function f(t) {
                delete u[t]
            }

            function p(t) {
                if (l) setTimeout(p, 0, t);
                else {
                    var e = u[t];
                    if (e) {
                        l = !0;
                        try {
                            ! function(t) {
                                var e = t.callback,
                                    n = t.args;
                                switch (n.length) {
                                    case 0:
                                        e();
                                        break;
                                    case 1:
                                        e(n[0]);
                                        break;
                                    case 2:
                                        e(n[0], n[1]);
                                        break;
                                    case 3:
                                        e(n[0], n[1], n[2]);
                                        break;
                                    default:
                                        e.apply(void 0, n)
                                }
                            }(e)
                        } finally {
                            f(t), l = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }).call(this, n(10), n(14))
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);

    function r(t, e) {
        this.container = function(t) {
            if (!(t instanceof Element)) throw new TypeError("Theme Sections: Attempted to load section. The section container provided is not a DOM element.");
            if (null === t.getAttribute("data-section-id")) throw new Error("Theme Sections: The section container provided does not have an id assigned to the data-section-id attribute.");
            return t
        }(t), this.id = t.getAttribute("data-section-id"), this.extensions = [], Object.assign(this, function(t) {
            if (void 0 !== t && "object" != typeof t || null === t) throw new TypeError("Theme Sections: The properties object provided is not a valid");
            return t
        }(e)), this.onLoad()
    }
    r.prototype = {
        onLoad: Function.prototype,
        onUnload: Function.prototype,
        onSelect: Function.prototype,
        onDeselect: Function.prototype,
        onBlockSelect: Function.prototype,
        onBlockDeselect: Function.prototype,
        extend: function(t) {
            this.extensions.push(t);
            var e = Object.assign({}, t);
            delete e.init, Object.assign(this, e), "function" == typeof t.init && t.init.apply(this)
        }
    }, "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function(t) {
            if (null == t) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                if (null != r)
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
            }
            return e
        },
        writable: !0,
        configurable: !0
    });
    window.Shopify = window.Shopify || {}, window.Shopify.theme = window.Shopify.theme || {}, window.Shopify.theme.sections = window.Shopify.theme.sections || {};
    var i = window.Shopify.theme.sections.registered = window.Shopify.theme.sections.registered || {},
        o = window.Shopify.theme.sections.instances = window.Shopify.theme.sections.instances || [];

    function a(t, e) {
        t = u(t), void 0 === e && (e = document.querySelectorAll("[data-section-type]")), e = l(e), t.forEach((function(t) {
            var n = i[t];
            void 0 !== n && (e = e.filter((function(e) {
                return !(s(e).length > 0) && (null !== e.getAttribute("data-section-type") && (e.getAttribute("data-section-type") !== t || (o.push(new n(e)), !1)))
            })))
        }))
    }

    function s(t) {
        var e = [];
        if (NodeList.prototype.isPrototypeOf(t) || Array.isArray(t)) var n = t[0];
        if (t instanceof Element || n instanceof Element) l(t).forEach((function(t) {
            e = e.concat(o.filter((function(e) {
                return e.container === t
            })))
        }));
        else if ("string" == typeof t || "string" == typeof n) {
            u(t).forEach((function(t) {
                e = e.concat(o.filter((function(e) {
                    return e.type === t
                })))
            }))
        }
        return e
    }

    function c(t) {
        for (var e, n = 0; n < o.length; n++)
            if (o[n].id === t) {
                e = o[n];
                break
            }
        return e
    }

    function u(t) {
        return "*" === t ? t = Object.keys(i) : "string" == typeof t ? t = [t] : t.constructor === r ? t = [t.prototype.type] : Array.isArray(t) && t[0].constructor === r && (t = t.map((function(t) {
            return t.prototype.type
        }))), t = t.map((function(t) {
            return t.toLowerCase()
        }))
    }

    function l(t) {
        return NodeList.prototype.isPrototypeOf(t) && t.length > 0 ? t = Array.prototype.slice.call(t) : NodeList.prototype.isPrototypeOf(t) && 0 === t.length || null === t ? t = [] : !Array.isArray(t) && t instanceof Element && (t = [t]), t
    }
    window.Shopify.designMode && (document.addEventListener("shopify:section:load", (function(t) {
        var e = t.detail.sectionId,
            n = t.target.querySelector('[data-section-id="' + e + '"]');
        null !== n && a(n.getAttribute("data-section-type"), n)
    })), document.addEventListener("shopify:section:unload", (function(t) {
        var e = t.detail.sectionId,
            n = t.target.querySelector('[data-section-id="' + e + '"]');
        "object" == typeof s(n)[0] && s(n).forEach((function(t) {
            var e = o.map((function(t) {
                return t.id
            })).indexOf(t.id);
            o.splice(e, 1), t.onUnload()
        }))
    })), document.addEventListener("shopify:section:select", (function(t) {
        var e = c(t.detail.sectionId);
        "object" == typeof e && e.onSelect(t)
    })), document.addEventListener("shopify:section:deselect", (function(t) {
        var e = c(t.detail.sectionId);
        "object" == typeof e && e.onDeselect(t)
    })), document.addEventListener("shopify:block:select", (function(t) {
        var e = c(t.detail.sectionId);
        "object" == typeof e && e.onBlockSelect(t)
    })), document.addEventListener("shopify:block:deselect", (function(t) {
        var e = c(t.detail.sectionId);
        "object" == typeof e && e.onBlockDeselect(t)
    })));
    /*!
     * slide-anim
     * https://github.com/yomotsu/slide-anim
     * (c) 2017 @yomotsu
     * Released under the MIT License.
     */
    var d = window,
        h = "function" == typeof d.Promise ? d.Promise : function(t) {
            var e = function() {};
            return t((function() {
                e()
            })), {
                then: function(t) {
                    e = t
                }
            }
        },
        f = [],
        p = {
            add: function(t, e, n, r) {
                var i = {
                    el: t,
                    defaultStyle: e,
                    timeoutId: n,
                    onCancelled: r
                };
                this.remove(t), f.push(i)
            },
            remove: function(t) {
                var e = p.findIndex(t);
                if (-1 !== e) {
                    var n = f[e];
                    clearTimeout(n.timeoutId), n.onCancelled(), f.splice(e, 1)
                }
            },
            find: function(t) {
                return f[p.findIndex(t)]
            },
            findIndex: function(t) {
                var e = -1;
                return f.some((function(n, r) {
                    return n.el === t && (e = r, !0)
                })), e
            }
        };

    function m(t, e) {
        return void 0 === e && (e = {}), new h((function(n) {
            if (-1 === p.findIndex(t)) {
                var r = y(t),
                    i = "number" == typeof e.endHeight,
                    o = e.display || "block",
                    a = e.duration || 400,
                    s = e.onCancelled || function() {},
                    c = t.getAttribute("style") || "",
                    u = window.getComputedStyle(t),
                    l = function(t, e) {
                        void 0 === e && (e = "block");
                        var n = t.getAttribute("style") || "",
                            r = window.getComputedStyle(t);
                        t.style.visibility = "hidden", t.style.display = e;
                        var i = w(r.getPropertyValue("width"));
                        t.style.position = "absolute", t.style.width = i + "px", t.style.height = "", t.style.minHeight = "", t.style.paddingTop = "", t.style.paddingBottom = "", t.style.borderTopWidth = "", t.style.borderBottomWidth = "";
                        var o = w(r.getPropertyValue("min-height")),
                            a = w(r.getPropertyValue("padding-top")),
                            s = w(r.getPropertyValue("padding-bottom")),
                            c = w(r.getPropertyValue("border-top-width")),
                            u = w(r.getPropertyValue("border-bottom-width")),
                            l = t.scrollHeight;
                        return t.setAttribute("style", n), {
                            height: l,
                            minHeight: o,
                            paddingTop: a,
                            paddingBottom: s,
                            borderTop: c,
                            borderBottom: u
                        }
                    }(t, o),
                    d = /border-box/.test(u.getPropertyValue("box-sizing")),
                    h = l.height,
                    f = l.minHeight,
                    m = l.paddingTop,
                    g = l.paddingBottom,
                    v = l.borderTop,
                    _ = l.borderBottom,
                    E = a + "ms",
                    S = "cubic-bezier( 0.19, 1, 0.22, 1 )",
                    A = ["height " + E + " " + S, "min-height " + E + " " + S, "padding " + E + " " + S, "border-width " + E + " " + S].join(),
                    k = r ? u.height : "0px",
                    L = r ? u.minHeight : "0px",
                    x = r ? u.paddingTop : "0px",
                    T = r ? u.paddingBottom : "0px",
                    q = r ? u.borderTopWidth : "0px",
                    O = r ? u.borderBottomWidth : "0px",
                    C = i ? e.endHeight + "px" : d ? h + v + _ + "px" : h - m - g + "px",
                    P = f + "px",
                    D = m + "px",
                    I = g + "px",
                    N = v + "px",
                    j = _ + "px";
                if (k !== C || x !== D || T !== I || q !== N || O !== j) {
                    requestAnimationFrame((function() {
                        t.style.height = k, t.style.minHeight = L, t.style.paddingTop = x, t.style.paddingBottom = T, t.style.borderTopWidth = q, t.style.borderBottomWidth = O, t.style.display = o, t.style.overflow = "hidden", t.style.visibility = "visible", t.style.transition = A, t.style.webkitTransition = A, requestAnimationFrame((function() {
                            t.style.height = C, t.style.minHeight = P, t.style.paddingTop = D, t.style.paddingBottom = I, t.style.borderTopWidth = N, t.style.borderBottomWidth = j
                        }))
                    }));
                    var M = setTimeout((function() {
                        b(t), t.style.display = o, i && (t.style.height = e.endHeight + "px", t.style.overflow = "hidden"), p.remove(t), n()
                    }), a);
                    p.add(t, c, M, s)
                } else n()
            }
        }))
    }

    function g(t, e) {
        return void 0 === e && (e = {}), new h((function(n) {
            if (-1 === p.findIndex(t)) {
                var r = y(t),
                    i = e.display || "block",
                    o = e.duration || 400,
                    a = e.onCancelled || function() {};
                if (r) {
                    var s = t.getAttribute("style") || "",
                        c = window.getComputedStyle(t),
                        u = /border-box/.test(c.getPropertyValue("box-sizing")),
                        l = w(c.getPropertyValue("min-height")),
                        d = w(c.getPropertyValue("padding-top")),
                        h = w(c.getPropertyValue("padding-bottom")),
                        f = w(c.getPropertyValue("border-top-width")),
                        m = w(c.getPropertyValue("border-bottom-width")),
                        g = t.scrollHeight,
                        v = o + "ms",
                        _ = "cubic-bezier( 0.19, 1, 0.22, 1 )",
                        E = ["height " + v + " " + _, "padding " + v + " " + _, "border-width " + v + " " + _].join(),
                        S = u ? g + f + m + "px" : g - d - h + "px",
                        A = l + "px",
                        k = d + "px",
                        L = h + "px",
                        x = f + "px",
                        T = m + "px";
                    requestAnimationFrame((function() {
                        t.style.height = S, t.style.minHeight = A, t.style.paddingTop = k, t.style.paddingBottom = L, t.style.borderTopWidth = x, t.style.borderBottomWidth = T, t.style.display = i, t.style.overflow = "hidden", t.style.transition = E, t.style.webkitTransition = E, requestAnimationFrame((function() {
                            t.style.height = "0", t.style.minHeight = "0", t.style.paddingTop = "0", t.style.paddingBottom = "0", t.style.borderTopWidth = "0", t.style.borderBottomWidth = "0"
                        }))
                    }));
                    var q = setTimeout((function() {
                        b(t), t.style.display = "none", p.remove(t), n()
                    }), o);
                    p.add(t, s, q, a)
                } else n()
            }
        }))
    }

    function v(t) {
        if (p.find(t)) {
            var e = window.getComputedStyle(t),
                n = e.height,
                r = e.paddingTop,
                i = e.paddingBottom,
                o = e.borderTopWidth,
                a = e.borderBottomWidth;
            b(t), t.style.height = n, t.style.paddingTop = r, t.style.paddingBottom = i, t.style.borderTopWidth = o, t.style.borderBottomWidth = a, t.style.overflow = "hidden", p.remove(t)
        }
    }

    function y(t) {
        return 0 !== t.offsetHeight
    }

    function b(t) {
        t.style.visibility = "", t.style.height = "", t.style.minHeight = "", t.style.paddingTop = "", t.style.paddingBottom = "", t.style.borderTopWidth = "", t.style.borderBottomWidth = "", t.style.overflow = "", t.style.transition = "", t.style.webkitTransition = ""
    }

    function w(t) {
        return +t.replace(/px/, "")
    }

    function _(t, e) {
        return void 0 === e && (e = document), e.querySelector(t)
    }

    function E(t, e) {
        return void 0 === e && (e = document), [].slice.call(e.querySelectorAll(t))
    }

    function S(t, e) {
        return Array.isArray(t) ? t.forEach(e) : e(t)
    }

    function A(t) {
        return function(e, n, r) {
            return S(e, (function(e) {
                return e[t + "EventListener"](n, r)
            }))
        }
    }

    function k(t, e, n) {
        return A("add")(t, e, n),
            function() {
                return A("remove")(t, e, n)
            }
    }

    function L(t) {
        return function(e) {
            var n = arguments;
            return S(e, (function(e) {
                var r;
                return (r = e.classList)[t].apply(r, [].slice.call(n, 1))
            }))
        }
    }

    function x(t) {
        L("add").apply(void 0, [t].concat([].slice.call(arguments, 1)))
    }

    function T(t) {
        L("remove").apply(void 0, [t].concat([].slice.call(arguments, 1)))
    }

    function q(t) {
        L("toggle").apply(void 0, [t].concat([].slice.call(arguments, 1)))
    }

    function O(t, e) {
        return t.classList.contains(e)
    }
    var C, P, D, I, N, j, M, R, B, H = ".accordion__label",
        z = function(t) {
            var e = E(H, t),
                n = [];
            e.forEach((function(t) {
                t.href = "#", n.push(k(t, "click", (function(t) {
                    return function(t) {
                        var e = t.currentTarget,
                            n = e.parentNode,
                            r = e.nextElementSibling;
                        t.preventDefault(), v(r), y(r) ? (g(r), n.setAttribute("data-open", !1), r.setAttribute("aria-hidden", !0)) : (m(r), n.setAttribute("data-open", !0), r.setAttribute("aria-hidden", !1))
                    }(t)
                })))
            }));
            return {
                unload: function() {
                    n.forEach((function(t) {
                        t.element.removeEventListener(t.action, t.function)
                    }))
                }
            }
        },
        F = [];

    function U(t, e) {
        return P = window.pageXOffset, I = window.pageYOffset, j = window.innerHeight, R = window.innerWidth, void 0 === D && (D = P), void 0 === N && (N = I), void 0 === B && (B = R), void 0 === M && (M = j), (e || I !== N || P !== D || j !== M || R !== B) && (function(t) {
            for (var e = 0; e < F.length; e++) F[e]({
                x: P,
                y: I,
                px: D,
                py: N,
                vh: j,
                pvh: M,
                vw: R,
                pvw: B
            }, t)
        }(t), D = P, N = I, M = j, B = R), requestAnimationFrame(U)
    }
    var V = function(t) {
            return F.indexOf(t) < 0 && F.push(t), C = C || U(performance.now()), {
                update: function() {
                    return U(performance.now(), !0), this
                },
                destroy: function() {
                    F.splice(F.indexOf(t), 1)
                }
            }
        },
        W = function(t) {
            if ("object" != typeof(e = t) || Array.isArray(e)) throw "state should be an object";
            var e
        },
        G = function(t, e, n, r) {
            return (i = t, i.reduce((function(t, e, n) {
                return t.indexOf(e) > -1 ? t : t.concat(e)
            }), [])).reduce((function(t, n) {
                return t.concat(e[n] || [])
            }), []).map((function(t) {
                return t(n, r)
            }));
            var i
        },
        $ = Z(),
        Y = $.on,
        J = $.emit,
        K = $.hydrate,
        X = $.getState;

    function Z(t) {
        void 0 === t && (t = {});
        var e = {};
        return {
            getState: function() {
                return Object.assign({}, t)
            },
            hydrate: function(n) {
                return W(n), Object.assign(t, n),
                    function() {
                        var r = ["*"].concat(Object.keys(n));
                        G(r, e, t)
                    }
            },
            on: function(t, n) {
                return (t = [].concat(t)).map((function(t) {
                        return e[t] = (e[t] || []).concat(n)
                    })),
                    function() {
                        return t.map((function(t) {
                            return e[t].splice(e[t].indexOf(n), 1)
                        }))
                    }
            },
            emit: function(n, r, i) {
                var o = ("*" === n ? [] : ["*"]).concat(n);
                (r = "function" == typeof r ? r(t) : r) && (W(r), Object.assign(t, r), o = o.concat(Object.keys(r))), G(o, e, t, i)
            }
        }
    }
    var Q, tt = ".header-container",
        et = "#header",
        nt = ".announcement-bar-section",
        rt = ".header__logo-wrapper",
        it = function(t) {
            var e = document.documentElement,
                n = null,
                r = null,
                i = null,
                o = null,
                a = null,
                s = null,
                c = !1,
                u = null,
                l = null,
                d = null,
                h = function() {
                    n = document.querySelector(tt), i = t.querySelector(et), o = t.querySelector(nt), a = o ? o.offsetHeight : 0, r = a + i.offsetHeight, t.querySelector(rt), s = t.querySelector(".header__logo-image img"), u = JSON.parse(i.dataset.transparentHeader)
                };
            h();
            var f = (window.innerWidth || document.documentElement.clientWidth) <= 960;
            l = V((function(t) {
                var e = t.vw;
                p("--header-height", a + i.offsetHeight);
                var n = e <= 960;
                n !== f && (f = n, m())
            }));
            var p = function(t, n) {
                    e.style.setProperty(t, "".concat(n, "px"))
                },
                m = function() {
                    h(), !s || s && s.complete ? g() : s.addEventListener("load", g, {
                        once: !0
                    })
                },
                g = function() {
                    c || (p("--header-initial-height", r), c = !0), p("--header-offset-height", r), e.classList.remove("header-transparent", "header-sticky"), e.classList.add(u ? "header-transparent" : "header-sticky"), y(v())
                },
                v = function() {
                    var t = {};
                    return t.stickyHeaderResetPosition = a ? 0 : 1, t.offsetHeight = a, t.scrollYToSticky = a || 1, t
                },
                y = function(t) {
                    var e = t.scrollYToSticky,
                        i = t.offsetHeight,
                        o = t.stickyHeaderResetPosition;
                    d && d.destroy(), (d = V((function(t) {
                        var s = t.y;
                        s < e ? (w(!1, n), a && b(n, o), p("--header-offset-height", r - s)) : s >= e && (w(!0, n), a && b(n, -i), p("--header-offset-height", r))
                    }))).update()
                },
                b = function(t, e) {
                    t.style.top = "".concat(e, "px")
                },
                w = function(t, n) {
                    t ? (e.classList.add("header-stuck"), n.classList.add("is-sticky"), i.classList.remove("header--transparent")) : (n.classList.remove("is-sticky"), e.classList.remove("header-stuck"), u && i.classList.add("header--transparent"))
                };
            Y("sticky-header:reload", (function() {
                l.update(), m(), J("headerChange", (function() {}))
            })), m();
            return {
                unload: function() {
                    l && l.destroy(), d && d.destroy()
                }
            }
        },
        ot = {
            added: "reviews:added"
        },
        at = {
            show: "headerOverlay:show",
            hide: "headerOverlay:hide",
            hiding: "headerOverlay:hiding"
        },
        st = {
            show: "drawerOverlay:show",
            hide: "drawerOverlay:hide",
            hiding: "drawerOverlay:hiding"
        },
        ct = ".header-overlay__inner",
        ut = "is-visible",
        lt = "is-active",
        dt = function(t) {
            var e = t,
                n = t.querySelector(ct),
                r = Y(at.show, (function() {
                    return o()
                })),
                i = Y(at.hide, (function() {
                    return a()
                })),
                o = function() {
                    K({
                        headerOverlayOpen: !0
                    }), e.classList.add(lt), setTimeout((function() {
                        n.classList.add(ut)
                    }), 10)
                },
                a = function() {
                    K({
                        headerOverlayOpen: !1
                    }), J(at.hiding), n.classList.remove(ut), setTimeout((function() {
                        e.classList.remove(lt)
                    }), 300)
                };
            return {
                unload: function() {
                    r(), i()
                }
            }
        },
        ht = ".drawer-overlay__inner",
        ft = "is-visible",
        pt = "is-active",
        mt = function(t) {
            var e = t,
                n = t.querySelector(ht),
                r = Y(st.show, (function() {
                    return o()
                })),
                i = Y(st.hide, (function() {
                    return a()
                })),
                o = function() {
                    e.classList.add(pt), setTimeout((function() {
                        n.classList.add(ft)
                    }), 10)
                },
                a = function() {
                    J(st.hiding), n.classList.remove(ft), setTimeout((function() {
                        e.classList.remove(pt)
                    }), 300)
                };
            e.addEventListener("click", a);
            return {
                unload: function() {
                    r(), i(), e.removeEventListener("click", a)
                }
            }
        },
        gt = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"],
        vt = gt.join(","),
        yt = "undefined" == typeof Element ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
        bt = function(t, e, n) {
            var r = Array.prototype.slice.apply(t.querySelectorAll(vt));
            return e && yt.call(t, vt) && r.unshift(t), r = r.filter(n)
        },
        wt = function(t) {
            var e = parseInt(t.getAttribute("tabindex"), 10);
            return isNaN(e) ? function(t) {
                return "true" === t.contentEditable
            }(t) ? 0 : "AUDIO" !== t.nodeName && "VIDEO" !== t.nodeName && "DETAILS" !== t.nodeName || null !== t.getAttribute("tabindex") ? t.tabIndex : 0 : e
        },
        _t = function(t, e) {
            return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex
        },
        Et = function(t) {
            return "INPUT" === t.tagName
        },
        St = function(t) {
            return function(t) {
                return Et(t) && "radio" === t.type
            }(t) && ! function(t) {
                if (!t.name) return !0;
                var e, n = t.form || t.ownerDocument,
                    r = function(t) {
                        return n.querySelectorAll('input[type="radio"][name="' + t + '"]')
                    };
                if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) e = r(window.CSS.escape(t.name));
                else try {
                    e = r(t.name)
                } catch (t) {
                    return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", t.message), !1
                }
                var i = function(t, e) {
                    for (var n = 0; n < t.length; n++)
                        if (t[n].checked && t[n].form === e) return t[n]
                }(e, t.form);
                return !i || i === t
            }(t)
        },
        At = function(t, e) {
            return !(e.disabled || function(t) {
                return Et(t) && "hidden" === t.type
            }(e) || function(t, e) {
                if ("hidden" === getComputedStyle(t).visibility) return !0;
                var n = yt.call(t, "details>summary:first-of-type") ? t.parentElement : t;
                if (yt.call(n, "details:not([open]) *")) return !0;
                if (e && "full" !== e) {
                    if ("non-zero-area" === e) {
                        var r = t.getBoundingClientRect(),
                            i = r.width,
                            o = r.height;
                        return 0 === i && 0 === o
                    }
                } else
                    for (; t;) {
                        if ("none" === getComputedStyle(t).display) return !0;
                        t = t.parentElement
                    }
                return !1
            }(e, t.displayCheck) || function(t) {
                return "DETAILS" === t.tagName && Array.prototype.slice.apply(t.children).some((function(t) {
                    return "SUMMARY" === t.tagName
                }))
            }(e))
        },
        kt = function(t, e) {
            return !(!At(t, e) || St(e) || wt(e) < 0)
        },
        Lt = gt.concat("iframe").join(","),
        xt = function(t, e) {
            if (e = e || {}, !t) throw new Error("No node provided");
            return !1 !== yt.call(t, Lt) && At(e, t)
        };
    /*!
     * focus-trap 6.4.0
     * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
     */
    function Tt(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function qt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }
    var Ot, Ct = (Ot = [], {
            activateTrap: function(t) {
                if (Ot.length > 0) {
                    var e = Ot[Ot.length - 1];
                    e !== t && e.pause()
                }
                var n = Ot.indexOf(t); - 1 === n || Ot.splice(n, 1), Ot.push(t)
            },
            deactivateTrap: function(t) {
                var e = Ot.indexOf(t); - 1 !== e && Ot.splice(e, 1), Ot.length > 0 && Ot[Ot.length - 1].unpause()
            }
        }),
        Pt = function(t) {
            return setTimeout(t, 0)
        },
        Dt = function(t, e) {
            var n = -1;
            return t.every((function(t, r) {
                return !e(t) || (n = r, !1)
            })), n
        },
        It = function(t) {
            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
            return "function" == typeof t ? t.apply(void 0, n) : t
        },
        Nt = function(t, e) {
            var n, r = document,
                i = function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? qt(Object(n), !0).forEach((function(e) {
                            Tt(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : qt(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }({
                    returnFocusOnDeactivate: !0,
                    escapeDeactivates: !0,
                    delayInitialFocus: !0
                }, e),
                o = {
                    containers: [],
                    tabbableGroups: [],
                    nodeFocusedBeforeActivation: null,
                    mostRecentlyFocusedNode: null,
                    active: !1,
                    paused: !1
                },
                a = function(t) {
                    return o.containers.some((function(e) {
                        return e.contains(t)
                    }))
                },
                s = function(t) {
                    var e = i[t];
                    if (!e) return null;
                    var n = e;
                    if ("string" == typeof e && !(n = r.querySelector(e))) throw new Error("`".concat(t, "` refers to no known node"));
                    if ("function" == typeof e && !(n = e())) throw new Error("`".concat(t, "` did not return a node"));
                    return n
                },
                c = function() {
                    var t;
                    if (null !== s("initialFocus")) t = s("initialFocus");
                    else if (a(r.activeElement)) t = r.activeElement;
                    else {
                        var e = o.tabbableGroups[0];
                        t = e && e.firstTabbableNode || s("fallbackFocus")
                    }
                    if (!t) throw new Error("Your focus-trap needs to have at least one focusable element");
                    return t
                },
                u = function() {
                    if (o.tabbableGroups = o.containers.map((function(t) {
                            var e, n, r, i = (n = [], r = [], bt(t, (e = e || {}).includeContainer, kt.bind(null, e)).forEach((function(t, e) {
                                var i = wt(t);
                                0 === i ? n.push(t) : r.push({
                                    documentOrder: e,
                                    tabIndex: i,
                                    node: t
                                })
                            })), r.sort(_t).map((function(t) {
                                return t.node
                            })).concat(n));
                            if (i.length > 0) return {
                                container: t,
                                firstTabbableNode: i[0],
                                lastTabbableNode: i[i.length - 1]
                            }
                        })).filter((function(t) {
                            return !!t
                        })), o.tabbableGroups.length <= 0 && !s("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")
                },
                l = function t(e) {
                    e !== r.activeElement && (e && e.focus ? (e.focus({
                        preventScroll: !!i.preventScroll
                    }), o.mostRecentlyFocusedNode = e, function(t) {
                        return t.tagName && "input" === t.tagName.toLowerCase() && "function" == typeof t.select
                    }(e) && e.select()) : t(c()))
                },
                d = function(t) {
                    a(t.target) || (It(i.clickOutsideDeactivates, t) ? n.deactivate({
                        returnFocus: i.returnFocusOnDeactivate && !xt(t.target)
                    }) : It(i.allowOutsideClick, t) || t.preventDefault())
                },
                h = function(t) {
                    var e = a(t.target);
                    e || t.target instanceof Document ? e && (o.mostRecentlyFocusedNode = t.target) : (t.stopImmediatePropagation(), l(o.mostRecentlyFocusedNode || c()))
                },
                f = function(t) {
                    if (!1 !== i.escapeDeactivates && function(t) {
                            return "Escape" === t.key || "Esc" === t.key || 27 === t.keyCode
                        }(t)) return t.preventDefault(), void n.deactivate();
                    (function(t) {
                        return "Tab" === t.key || 9 === t.keyCode
                    })(t) && function(t) {
                        u();
                        var e = null;
                        if (o.tabbableGroups.length > 0) {
                            var n = Dt(o.tabbableGroups, (function(e) {
                                return e.container.contains(t.target)
                            }));
                            if (n < 0) e = t.shiftKey ? o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : o.tabbableGroups[0].firstTabbableNode;
                            else if (t.shiftKey) {
                                var r = Dt(o.tabbableGroups, (function(e) {
                                    var n = e.firstTabbableNode;
                                    return t.target === n
                                }));
                                if (r < 0 && o.tabbableGroups[n].container === t.target && (r = n), r >= 0) {
                                    var i = 0 === r ? o.tabbableGroups.length - 1 : r - 1;
                                    e = o.tabbableGroups[i].lastTabbableNode
                                }
                            } else {
                                var a = Dt(o.tabbableGroups, (function(e) {
                                    var n = e.lastTabbableNode;
                                    return t.target === n
                                }));
                                if (a < 0 && o.tabbableGroups[n].container === t.target && (a = n), a >= 0) {
                                    var c = a === o.tabbableGroups.length - 1 ? 0 : a + 1;
                                    e = o.tabbableGroups[c].firstTabbableNode
                                }
                            }
                        } else e = s("fallbackFocus");
                        e && (t.preventDefault(), l(e))
                    }(t)
                },
                p = function(t) {
                    It(i.clickOutsideDeactivates, t) || a(t.target) || It(i.allowOutsideClick, t) || (t.preventDefault(), t.stopImmediatePropagation())
                },
                m = function() {
                    if (o.active) return Ct.activateTrap(n), Q = i.delayInitialFocus ? Pt((function() {
                        l(c())
                    })) : l(c()), r.addEventListener("focusin", h, !0), r.addEventListener("mousedown", d, {
                        capture: !0,
                        passive: !1
                    }), r.addEventListener("touchstart", d, {
                        capture: !0,
                        passive: !1
                    }), r.addEventListener("click", p, {
                        capture: !0,
                        passive: !1
                    }), r.addEventListener("keydown", f, {
                        capture: !0,
                        passive: !1
                    }), n
                },
                g = function() {
                    if (o.active) return r.removeEventListener("focusin", h, !0), r.removeEventListener("mousedown", d, !0), r.removeEventListener("touchstart", d, !0), r.removeEventListener("click", p, !0), r.removeEventListener("keydown", f, !0), n
                };
            return (n = {
                activate: function(t) {
                    if (o.active) return this;
                    u(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = r.activeElement;
                    var e = t && t.onActivate ? t.onActivate : i.onActivate;
                    return e && e(), m(), this
                },
                deactivate: function(t) {
                    if (!o.active) return this;
                    clearTimeout(Q), g(), o.active = !1, o.paused = !1, Ct.deactivateTrap(n);
                    var e = t && void 0 !== t.onDeactivate ? t.onDeactivate : i.onDeactivate;
                    return e && e(), (t && void 0 !== t.returnFocus ? t.returnFocus : i.returnFocusOnDeactivate) && Pt((function() {
                        var t;
                        l((t = o.nodeFocusedBeforeActivation, s("setReturnFocus") || t))
                    })), this
                },
                pause: function() {
                    return o.paused || !o.active || (o.paused = !0, g()), this
                },
                unpause: function() {
                    return o.paused && o.active ? (o.paused = !1, u(), m(), this) : this
                },
                updateContainerElements: function(t) {
                    var e = [].concat(t).filter(Boolean);
                    return o.containers = e.map((function(t) {
                        return "string" == typeof t ? r.querySelector(t) : t
                    })), o.active && u(), this
                }
            }).updateContainerElements(t), n
        },
        jt = n(7),
        Mt = {
            USD: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}} USD"
            },
            EUR: {
                money_format: "&euro;{{amount}}",
                money_with_currency_format: "&euro;{{amount}} EUR"
            },
            GBP: {
                money_format: "&pound;{{amount}}",
                money_with_currency_format: "&pound;{{amount}} GBP"
            },
            CAD: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}} CAD"
            },
            ALL: {
                money_format: "Lek {{amount}}",
                money_with_currency_format: "Lek {{amount}} ALL"
            },
            DZD: {
                money_format: "DA {{amount}}",
                money_with_currency_format: "DA {{amount}} DZD"
            },
            AOA: {
                money_format: "Kz{{amount}}",
                money_with_currency_format: "Kz{{amount}} AOA"
            },
            ARS: {
                money_format: "${{amount_with_comma_separator}}",
                money_with_currency_format: "${{amount_with_comma_separator}} ARS"
            },
            AMD: {
                money_format: "{{amount}} AMD",
                money_with_currency_format: "{{amount}} AMD"
            },
            AWG: {
                money_format: "Afl{{amount}}",
                money_with_currency_format: "Afl{{amount}} AWG"
            },
            AUD: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}} AUD"
            },
            BBD: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}} Bds"
            },
            AZN: {
                money_format: "m.{{amount}}",
                money_with_currency_format: "m.{{amount}} AZN"
            },
            BDT: {
                money_format: "Tk {{amount}}",
                money_with_currency_format: "Tk {{amount}} BDT"
            },
            BSD: {
                money_format: "BS${{amount}}",
                money_with_currency_format: "BS${{amount}} BSD"
            },
            BHD: {
                money_format: "{{amount}}0 BD",
                money_with_currency_format: "{{amount}}0 BHD"
            },
            BYR: {
                money_format: "Br {{amount}}",
                money_with_currency_format: "Br {{amount}} BYR"
            },
            BZD: {
                money_format: "BZ${{amount}}",
                money_with_currency_format: "BZ${{amount}} BZD"
            },
            BTN: {
                money_format: "Nu {{amount}}",
                money_with_currency_format: "Nu {{amount}} BTN"
            },
            BAM: {
                money_format: "KM {{amount_with_comma_separator}}",
                money_with_currency_format: "KM {{amount_with_comma_separator}} BAM"
            },
            BRL: {
                money_format: "R$ {{amount_with_comma_separator}}",
                money_with_currency_format: "R$ {{amount_with_comma_separator}} BRL"
            },
            BOB: {
                money_format: "Bs{{amount_with_comma_separator}}",
                money_with_currency_format: "Bs{{amount_with_comma_separator}} BOB"
            },
            BWP: {
                money_format: "P{{amount}}",
                money_with_currency_format: "P{{amount}} BWP"
            },
            BND: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}} BND"
            },
            BGN: {
                money_format: "{{amount}} лв",
                money_with_currency_format: "{{amount}} лв BGN"
            },
            MMK: {
                money_format: "K{{amount}}",
                money_with_currency_format: "K{{amount}} MMK"
            },
            KHR: {
                money_format: "KHR{{amount}}",
                money_with_currency_format: "KHR{{amount}}"
            },
            KYD: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}} KYD"
            },
            XAF: {
                money_format: "FCFA{{amount}}",
                money_with_currency_format: "FCFA{{amount}} XAF"
            },
            CLP: {
                money_format: "${{amount_no_decimals}}",
                money_with_currency_format: "${{amount_no_decimals}} CLP"
            },
            CNY: {
                money_format: "&#165;{{amount}}",
                money_with_currency_format: "&#165;{{amount}} CNY"
            },
            COP: {
                money_format: "${{amount_with_comma_separator}}",
                money_with_currency_format: "${{amount_with_comma_separator}} COP"
            },
            CRC: {
                money_format: "&#8353; {{amount_with_comma_separator}}",
                money_with_currency_format: "&#8353; {{amount_with_comma_separator}} CRC"
            },
            HRK: {
                money_format: "{{amount_with_comma_separator}} kn",
                money_with_currency_format: "{{amount_with_comma_separator}} kn HRK"
            },
            CZK: {
                money_format: "{{amount_with_comma_separator}} K&#269;",
                money_with_currency_format: "{{amount_with_comma_separator}} K&#269;"
            },
            DKK: {
                money_format: "{{amount_with_comma_separator}}",
                money_with_currency_format: "kr.{{amount_with_comma_separator}}"
            },
            DOP: {
                money_format: "RD$ {{amount}}",
                money_with_currency_format: "RD$ {{amount}}"
            },
            XCD: {
                money_format: "${{amount}}",
                money_with_currency_format: "EC${{amount}}"
            },
            EGP: {
                money_format: "LE {{amount}}",
                money_with_currency_format: "LE {{amount}} EGP"
            },
            ETB: {
                money_format: "Br{{amount}}",
                money_with_currency_format: "Br{{amount}} ETB"
            },
            XPF: {
                money_format: "{{amount_no_decimals_with_comma_separator}} XPF",
                money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} XPF"
            },
            FJD: {
                money_format: "${{amount}}",
                money_with_currency_format: "FJ${{amount}}"
            },
            GMD: {
                money_format: "D {{amount}}",
                money_with_currency_format: "D {{amount}} GMD"
            },
            GHS: {
                money_format: "GH&#8373;{{amount}}",
                money_with_currency_format: "GH&#8373;{{amount}}"
            },
            GTQ: {
                money_format: "Q{{amount}}",
                money_with_currency_format: "{{amount}} GTQ"
            },
            GYD: {
                money_format: "G${{amount}}",
                money_with_currency_format: "${{amount}} GYD"
            },
            GEL: {
                money_format: "{{amount}} GEL",
                money_with_currency_format: "{{amount}} GEL"
            },
            HNL: {
                money_format: "L {{amount}}",
                money_with_currency_format: "L {{amount}} HNL"
            },
            HKD: {
                money_format: "${{amount}}",
                money_with_currency_format: "HK${{amount}}"
            },
            HUF: {
                money_format: "{{amount_no_decimals_with_comma_separator}}",
                money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} Ft"
            },
            ISK: {
                money_format: "{{amount_no_decimals}} kr",
                money_with_currency_format: "{{amount_no_decimals}} kr ISK"
            },
            INR: {
                money_format: "Rs. {{amount}}",
                money_with_currency_format: "Rs. {{amount}}"
            },
            IDR: {
                money_format: "{{amount_with_comma_separator}}",
                money_with_currency_format: "Rp {{amount_with_comma_separator}}"
            },
            ILS: {
                money_format: "{{amount}} NIS",
                money_with_currency_format: "{{amount}} NIS"
            },
            JMD: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}} JMD"
            },
            JPY: {
                money_format: "&#165;{{amount_no_decimals}}",
                money_with_currency_format: "&#165;{{amount_no_decimals}} JPY"
            },
            JEP: {
                money_format: "&pound;{{amount}}",
                money_with_currency_format: "&pound;{{amount}} JEP"
            },
            JOD: {
                money_format: "{{amount}}0 JD",
                money_with_currency_format: "{{amount}}0 JOD"
            },
            KZT: {
                money_format: "{{amount}} KZT",
                money_with_currency_format: "{{amount}} KZT"
            },
            KES: {
                money_format: "KSh{{amount}}",
                money_with_currency_format: "KSh{{amount}}"
            },
            KWD: {
                money_format: "{{amount}}0 KD",
                money_with_currency_format: "{{amount}}0 KWD"
            },
            KGS: {
                money_format: "лв{{amount}}",
                money_with_currency_format: "лв{{amount}}"
            },
            LVL: {
                money_format: "Ls {{amount}}",
                money_with_currency_format: "Ls {{amount}} LVL"
            },
            LBP: {
                money_format: "L&pound;{{amount}}",
                money_with_currency_format: "L&pound;{{amount}} LBP"
            },
            LTL: {
                money_format: "{{amount}} Lt",
                money_with_currency_format: "{{amount}} Lt"
            },
            MGA: {
                money_format: "Ar {{amount}}",
                money_with_currency_format: "Ar {{amount}} MGA"
            },
            MKD: {
                money_format: "ден {{amount}}",
                money_with_currency_format: "ден {{amount}} MKD"
            },
            MOP: {
                money_format: "MOP${{amount}}",
                money_with_currency_format: "MOP${{amount}}"
            },
            MVR: {
                money_format: "Rf{{amount}}",
                money_with_currency_format: "Rf{{amount}} MRf"
            },
            MXN: {
                money_format: "$ {{amount}}",
                money_with_currency_format: "$ {{amount}} MXN"
            },
            MYR: {
                money_format: "RM{{amount}} MYR",
                money_with_currency_format: "RM{{amount}} MYR"
            },
            MUR: {
                money_format: "Rs {{amount}}",
                money_with_currency_format: "Rs {{amount}} MUR"
            },
            MDL: {
                money_format: "{{amount}} MDL",
                money_with_currency_format: "{{amount}} MDL"
            },
            MAD: {
                money_format: "{{amount}} dh",
                money_with_currency_format: "Dh {{amount}} MAD"
            },
            MNT: {
                money_format: "{{amount_no_decimals}} &#8366",
                money_with_currency_format: "{{amount_no_decimals}} MNT"
            },
            MZN: {
                money_format: "{{amount}} Mt",
                money_with_currency_format: "Mt {{amount}} MZN"
            },
            NAD: {
                money_format: "N${{amount}}",
                money_with_currency_format: "N${{amount}} NAD"
            },
            NPR: {
                money_format: "Rs{{amount}}",
                money_with_currency_format: "Rs{{amount}} NPR"
            },
            ANG: {
                money_format: "&fnof;{{amount}}",
                money_with_currency_format: "{{amount}} NA&fnof;"
            },
            NZD: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}} NZD"
            },
            NIO: {
                money_format: "C${{amount}}",
                money_with_currency_format: "C${{amount}} NIO"
            },
            NGN: {
                money_format: "&#8358;{{amount}}",
                money_with_currency_format: "&#8358;{{amount}} NGN"
            },
            NOK: {
                money_format: "kr {{amount_with_comma_separator}}",
                money_with_currency_format: "kr {{amount_with_comma_separator}} NOK"
            },
            OMR: {
                money_format: "{{amount_with_comma_separator}} OMR",
                money_with_currency_format: "{{amount_with_comma_separator}} OMR"
            },
            PKR: {
                money_format: "Rs.{{amount}}",
                money_with_currency_format: "Rs.{{amount}} PKR"
            },
            PGK: {
                money_format: "K {{amount}}",
                money_with_currency_format: "K {{amount}} PGK"
            },
            PYG: {
                money_format: "Gs. {{amount_no_decimals_with_comma_separator}}",
                money_with_currency_format: "Gs. {{amount_no_decimals_with_comma_separator}} PYG"
            },
            PEN: {
                money_format: "S/. {{amount}}",
                money_with_currency_format: "S/. {{amount}} PEN"
            },
            PHP: {
                money_format: "&#8369;{{amount}}",
                money_with_currency_format: "&#8369;{{amount}} PHP"
            },
            PLN: {
                money_format: "{{amount_with_comma_separator}} zl",
                money_with_currency_format: "{{amount_with_comma_separator}} zl PLN"
            },
            QAR: {
                money_format: "QAR {{amount_with_comma_separator}}",
                money_with_currency_format: "QAR {{amount_with_comma_separator}}"
            },
            RON: {
                money_format: "{{amount_with_comma_separator}} lei",
                money_with_currency_format: "{{amount_with_comma_separator}} lei RON"
            },
            RUB: {
                money_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",
                money_with_currency_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB"
            },
            RWF: {
                money_format: "{{amount_no_decimals}} RF",
                money_with_currency_format: "{{amount_no_decimals}} RWF"
            },
            WST: {
                money_format: "WS$ {{amount}}",
                money_with_currency_format: "WS$ {{amount}} WST"
            },
            SAR: {
                money_format: "{{amount}} SR",
                money_with_currency_format: "{{amount}} SAR"
            },
            STD: {
                money_format: "Db {{amount}}",
                money_with_currency_format: "Db {{amount}} STD"
            },
            RSD: {
                money_format: "{{amount}} RSD",
                money_with_currency_format: "{{amount}} RSD"
            },
            SCR: {
                money_format: "Rs {{amount}}",
                money_with_currency_format: "Rs {{amount}} SCR"
            },
            SGD: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}} SGD"
            },
            SYP: {
                money_format: "S&pound;{{amount}}",
                money_with_currency_format: "S&pound;{{amount}} SYP"
            },
            ZAR: {
                money_format: "R {{amount}}",
                money_with_currency_format: "R {{amount}} ZAR"
            },
            KRW: {
                money_format: "&#8361;{{amount_no_decimals}}",
                money_with_currency_format: "&#8361;{{amount_no_decimals}} KRW"
            },
            LKR: {
                money_format: "Rs {{amount}}",
                money_with_currency_format: "Rs {{amount}} LKR"
            },
            SEK: {
                money_format: "{{amount_no_decimals}} kr",
                money_with_currency_format: "{{amount_no_decimals}} kr SEK"
            },
            CHF: {
                money_format: "SFr. {{amount}}",
                money_with_currency_format: "SFr. {{amount}} CHF"
            },
            TWD: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}} TWD"
            },
            THB: {
                money_format: "{{amount}} &#xe3f;",
                money_with_currency_format: "{{amount}} &#xe3f; THB"
            },
            TZS: {
                money_format: "{{amount}} TZS",
                money_with_currency_format: "{{amount}} TZS"
            },
            TTD: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}} TTD"
            },
            TND: {
                money_format: "{{amount}}",
                money_with_currency_format: "{{amount}} DT"
            },
            TRY: {
                money_format: "{{amount}}TL",
                money_with_currency_format: "{{amount}}TL"
            },
            UGX: {
                money_format: "Ush {{amount_no_decimals}}",
                money_with_currency_format: "Ush {{amount_no_decimals}} UGX"
            },
            UAH: {
                money_format: "₴{{amount}}",
                money_with_currency_format: "₴{{amount}} UAH"
            },
            AED: {
                money_format: "Dhs. {{amount}}",
                money_with_currency_format: "Dhs. {{amount}} AED"
            },
            UYU: {
                money_format: "${{amount_with_comma_separator}}",
                money_with_currency_format: "${{amount_with_comma_separator}} UYU"
            },
            VUV: {
                money_format: "${{amount}}",
                money_with_currency_format: "${{amount}}VT"
            },
            VEF: {
                money_format: "Bs. {{amount_with_comma_separator}}",
                money_with_currency_format: "Bs. {{amount_with_comma_separator}} VEF"
            },
            VND: {
                money_format: "{{amount_no_decimals_with_comma_separator}}&#8363;",
                money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} VND"
            },
            XBT: {
                money_format: "{{amount_no_decimals}} BTC",
                money_with_currency_format: "{{amount_no_decimals}} BTC"
            },
            XOF: {
                money_format: "CFA{{amount}}",
                money_with_currency_format: "CFA{{amount}} XOF"
            },
            ZMW: {
                money_format: "K{{amount_no_decimals_with_comma_separator}}",
                money_with_currency_format: "ZMW{{amount_no_decimals_with_comma_separator}}"
            }
        },
        Rt = function(t) {
            return t.toLowerCase().split("").map((function(t, e) {
                return 0 === e ? t.toUpperCase() : t
            })).join("")
        },
        Bt = (function(t) {
            void 0 === t && (t = {});
            var e = Object.assign({}, {
                format: "money_with_currency_format",
                formats: {},
                storageKey: "shopify-currency"
            }, t);
            e.formats = Object.assign({}, Mt, e.formats);
            var n, r = (void 0 === (n = e.storageKey) && (n = "currency"), {
                key: n,
                read: function() {
                    return localStorage.getItem(n)
                },
                write: function(t) {
                    localStorage.setItem(n, t)
                },
                remove: function() {
                    localStorage.removeItem(n)
                }
            });

            function i(t) {
                r.write(t)
            }
        }("undefined" != typeof currencyOpts ? currencyOpts : {}), function(t) {
            return Object(jt.formatMoney)(t, theme.moneyFormat || "${{amount}}")
        }),
        Ht = n(15),
        zt = n.n(Ht);

    function Ft(t) {
        var e = t.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);
        return e ? e[1] : null
    }

    function Ut(t, e) {
        if (null === e) return t;
        if ("master" === e) return Vt(t);
        var n = t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
        if (n) {
            var r = t.split(n[0]),
                i = n[0];
            return Vt(r[0] + "_" + e + i)
        }
        return null
    }

    function Vt(t) {
        return t.replace(/http(s)?:/, "")
    }
    var Wt = n(0),
        Gt = n.n(Wt),
        $t = function(t) {
            var e = this,
                n = t.dataset.productOption,
                r = t.querySelectorAll("[data-product-swatch]"),
                i = this.container.querySelector("select#".concat(n));
            i.classList.add("hidden");
            var o = function(t) {
                t.preventDefault();
                var o = t.target,
                    a = Gt()(o.classList);
                if (a.includes("product-form__color-swatch") && !a.includes("selected")) {
                    var s = o.dataset.productSwatchOption;
                    r.forEach((function(t) {
                        return (e = t, function() {
                            for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
                            t.reduce((function(t, e) {
                                return t.concat("object" == typeof e ? Object.keys(e).map((function(t) {
                                    return [t, e[t]]
                                })) : [
                                    [e, !0]
                                ])
                            }), []).map((function(t) {
                                var n;
                                (n = e.classList)[t[1] ? "add" : "remove"].apply(n, t[0].split(" "))
                            }))
                        })({
                            selected: t.dataset.productSwatchOption === s
                        });
                        var e
                    })), e.container.querySelector(".product-form__color-swatches-selected").innerText = s, e.container.querySelector("select#".concat(n, ' [value="').concat(s, '"]')).selected = !0, i.dispatchEvent(new Event("change"))
                }
            };
            return t.addEventListener("click", o),
                function() {
                    return t.removeEventListener("click", o)
                }
        },
        Yt = function(t) {
            var e = this,
                n = this.container.querySelectorAll(t);
            if (!(n.length < 1)) {
                var r = [];
                return Gt()(n).forEach((function(t) {
                        return r.push($t.call(e, t))
                    })),
                    function() {
                        return r.forEach((function(t) {
                            return t()
                        }))
                    }
            }
        },
        Jt = function(t) {
            var e = function(e) {
                var n = e.target;
                Gt()(n.classList).includes("product-form__chip-input") && (t.querySelector(".product-form__chip-selected").innerText = n.value)
            };
            return t.addEventListener("click", e),
                function() {
                    return t.removeEventListener("click", e)
                }
        },
        Kt = function(t) {
            var e = this,
                n = this.container.querySelectorAll(t);
            if (!(n.length < 1)) {
                var r = [];
                return Gt()(n).forEach((function(t) {
                        return r.push(Jt.call(e, t))
                    })),
                    function() {
                        return r.forEach((function(t) {
                            return t()
                        }))
                    }
            }
        },
        Xt = function(t) {
            var e = this.container.querySelector(t),
                n = e.querySelector("[data-quantity-input]"),
                r = e.querySelector(".product-form__quantity-add-item"),
                i = e.querySelector(".product-form__quantity-subtract-item"),
                o = function(t) {
                    var e = t + "";
                    return e.length < 2 && (e = "0" + e), e
                };
            return r.addEventListener("click", (function() {
                    var t = parseInt(n.value) + 1;
                    n.value = o(t)
                })), i.addEventListener("click", (function() {
                    var t = parseInt(n.value);
                    if (1 !== t) {
                        var e = t - 1;
                        n.value = o(e)
                    }
                })),
                function() {}
        },
        Zt = {
            addButton: "[data-add-to-cart]",
            addButtonQuickShop: "[data-add-button]",
            addButtonText: "[data-add-to-cart-text]",
            comparePrice: "[data-compare-price]",
            comparePriceText: "[data-compare-text]",
            form: "[data-product-form]",
            imageById: function(t) {
                return "[data-image-id='".concat(t, "']")
            },
            imageWrapper: "[data-product-image-wrapper]",
            optionById: function(t) {
                return "[value='".concat(t, "']")
            },
            price: "[data-product-price]",
            thumb: "[data-product-single-thumbnail]",
            thumbById: function(t) {
                return "[data-thumbnail-id='".concat(t, "']")
            },
            thumbs: "[data-product-thumbnails]",
            variantSelect: "[data-variant-select]",
            zoom: "[data-product-zoom]",
            storeAvailability: "[data-store-availability-container]"
        },
        Qt = {
            formStatus: ".form-status"
        },
        te = function(t, e) {
            var n = t.querySelector(Zt.addButton),
                r = n.querySelector(Zt.addButtonText),
                i = n.dataset,
                o = i.langAvailable,
                a = i.langSoldOut,
                s = i.langUnavailable;
            e ? e.available ? (n.removeAttribute("disabled"), r.textContent = o) : (n.setAttribute("disabled", "disabled"), r.textContent = a) : (n.setAttribute("disabled", "disabled"), r.textContent = s)
        },
        ee = theme.strings.products,
        ne = Zt,
        re = "hide",
        ie = function(t, e) {
            t.querySelector(ne.comparePrice);
            var n = t.querySelectorAll("".concat(ne.comparePrice, ", ").concat(ne.comparePriceText)),
                r = Gt()(t.querySelectorAll(ne.price)),
                i = ee.product.unavailable;
            if (!e) return r.forEach((function(t) {
                return t.innerHTML = i
            })), n.forEach((function(t) {
                return t.innerHTML = ""
            })), void n.forEach((function(t) {
                return t.classList.add(re)
            }));
            r.forEach((function(t) {
                return t.innerHTML = Bt(e.price)
            })), e.compare_at_price > e.price ? (n.forEach((function(t) {
                return t.innerHTML = Bt(e.compare_at_price)
            })), n.forEach((function(t) {
                return t.classList.remove(re)
            }))) : (n.forEach((function(t) {
                return t.innerHTML = ""
            })), n.forEach((function(t) {
                return t.classList.add(re)
            })))
        },
        oe = Zt,
        ae = function(t, e) {
            var n = t.querySelector("".concat(oe.imageWrapper, " img"));
            n.srcset = "", n.src = e
        },
        se = function(t, e) {
            return e = e || {}, new Promise((function(n, r) {
                var i = new XMLHttpRequest,
                    o = [],
                    a = [],
                    s = {},
                    c = function() {
                        return {
                            ok: 2 == (i.status / 100 | 0),
                            statusText: i.statusText,
                            status: i.status,
                            url: i.responseURL,
                            text: function() {
                                return Promise.resolve(i.responseText)
                            },
                            json: function() {
                                return Promise.resolve(i.responseText).then(JSON.parse)
                            },
                            blob: function() {
                                return Promise.resolve(new Blob([i.response]))
                            },
                            clone: c,
                            headers: {
                                keys: function() {
                                    return o
                                },
                                entries: function() {
                                    return a
                                },
                                get: function(t) {
                                    return s[t.toLowerCase()]
                                },
                                has: function(t) {
                                    return t.toLowerCase() in s
                                }
                            }
                        }
                    };
                for (var u in i.open(e.method || "get", t, !0), i.onload = function() {
                        i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(t, e, n) {
                            o.push(e = e.toLowerCase()), a.push([e, n]), s[e] = s[e] ? s[e] + "," + n : n
                        })), n(c())
                    }, i.onerror = r, i.withCredentials = "include" == e.credentials, e.headers) i.setRequestHeader(u, e.headers[u]);
                i.send(e.body || null)
            }))
        },
        ce = function() {
            return JSON.parse(localStorage.getItem("cartItemOrder"))
        },
        ue = function(t) {
            return localStorage.setItem("cartItemOrder", t)
        };

    function le(t, e) {
        return pe().then((function(n) {
            for (var r = n.items, i = 0; i < r.length; i++)
                if (r[i].variant_id === parseInt(t)) return he(i + 1, e)
        }))
    }

    function de(t) {
        return ge() && ce() && function(t) {
            var e = ce(),
                n = e.indexOf(t);
            e.splice(n, 1), ue(JSON.stringify(e))
        }(t), le(t, 0)
    }

    function he(t, e) {
        return J("cart:updating"), se("".concat(theme.routes.cart.change, ".js"), {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                line: t,
                quantity: e
            })
        }).then((function(t) {
            return t.json()
        })).then((function(t) {
            return ge() && ce() && (t.items = me(t.items, ce())), K({
                cart: t
            }), J("cart:updated", {
                cart: t
            }), t
        }))
    }

    function fe(t) {
        return J("cart:updating"), se("".concat(theme.routes.cart.add, ".js"), {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Requested-With": "XMLHttpRequest"
            },
            body: ve(t)
        }).then((function(t) {
            return t.json()
        })).then((function(t) {
            return pe(t.id).then((function(e) {
                return K({
                    cart: e
                }), J("cart:updated"), {
                    item: t,
                    cart: e
                }
            }))
        }))
    }

    function pe(t) {
        return se("".concat(theme.routes.cart.base, ".js"), {
            method: "GET",
            credentials: "include"
        }).then((function(t) {
            return t.json()
        })).then((function(e) {
            if (ge()) {
                var n = e.items.map((function(t) {
                    return t.id
                }));
                if (ce() || ue(JSON.stringify(n)), t) {
                    var r = n.indexOf(t);
                    n.unshift(n.splice(r, 1)[0]), ue(JSON.stringify(n)), K({
                        newItemInCart: !0
                    })
                }
                e.items = me(e.items, n)
            }
            return e
        }))
    }

    function me(t, e) {
        return t.sort((function(t, n) {
            return e.indexOf(t.id) - e.indexOf(n.id)
        }))
    }

    function ge() {
        try {
            return localStorage.setItem("test", "test"), localStorage.removeItem("test"), !0
        } catch (t) {
            return !1
        }
    }
    /*!
     * Serialize all form data into a SearchParams string
     * (c) 2020 Chris Ferdinandi, MIT License, https://gomakethings.com
     * @param  {Node}   form The form to serialize
     * @return {String}      The serialized form data
     */
    function ve(t) {
        var e = [];
        return Array.prototype.slice.call(t.elements).forEach((function(t) {
            !t.name || t.disabled || ["file", "reset", "submit", "button"].indexOf(t.type) > -1 || ("select-multiple" !== t.type ? ["checkbox", "radio"].indexOf(t.type) > -1 && !t.checked || e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value)) : Array.prototype.slice.call(t.options).forEach((function(n) {
                n.selected && e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(n.value))
            })))
        })), e.join("&")
    }
    var ye = function(t) {
            return Object(jt.formatMoney)(t, window.theme.moneyFormat || "${{amount}}")
        },
        be = function(t) {
            return function(e) {
                return fetch("".concat(window.theme.routes.products, "/").concat(t, ".js")).then((function(t) {
                    return t.json()
                })).then((function(t) {
                    return e(t)
                })).catch((function(t) {
                    return console.log(t.message)
                }))
            }
        },
        we = function(t, e) {
            if ("string" != typeof t) throw new TypeError("Theme Sections: The first argument for .register must be a string that specifies the type of the section being registered");
            if (void 0 !== i[t]) throw new Error('Theme Sections: A section of type "' + t + '" has already been registered. You cannot register the same section type twice');

            function n(t) {
                r.call(this, t, e)
            }
            return n.constructor = r, n.prototype = Object.create(r.prototype), n.prototype.type = t, i[t] = n
        },
        _e = theme.strings.products,
        Ee = "[data-unit-price-container]",
        Se = "[data-unit-price]",
        Ae = "[data-unit-base]",
        ke = "unit-price--available",
        Le = function(t, e) {
            var n = E(Ee, t),
                r = E(Se, t),
                i = E(Ae, t);
            q(n, ke, void 0 !== e.unit_price), e.unit_price && (qe(r, ye(e.unit_price)), qe(i, Te(e.unit_price_measurement)))
        },
        xe = function(t, e) {
            if (t && e) {
                var n = _e.product.unitPrice;
                return '\n      <div class="unit-price '.concat(ke, '">\n        <dt>\n          <span class="visually-hidden visually-hidden--inline">').concat(n, '</span>\n        </dt>\n        <dd class="unit-price__price">\n          <span data-unit-price>').concat(ye(t), '</span><span aria-hidden="true">/</span><span class="visually-hidden">').concat(_e.product.unitPriceSeparator, "&nbsp;</span><span data-unit-base>").concat(Te(e), "</span>\n        </dd>\n      </div>\n    ")
            }
            return ""
        },
        Te = function(t) {
            return 1 === t.reference_value ? t.reference_unit : t.reference_value + t.reference_unit
        },
        qe = function(t, e) {
            t.forEach((function(t) {
                return t.innerText = e
            }))
        },
        Oe = function(t) {
            return "[data-media-id='".concat(t, "']")
        },
        Ce = "[data-product-media-wrapper]",
        Pe = "[data-in-your-space]",
        De = "hidden",
        Ie = ["variant_id", "product_title", "original_line_price", "price", "variant_title", "line_level_discount_allocations", "options_with_values", "product_has_only_default_variant", "image", "url", "quantity", "unit_price", "unit_price_measurement", "selling_plan_allocation"],
        Ne = ["handle", "title", "url", "featured_image"];

    function je(t, e) {
      console.log(t);
        var n = t.variant_id,
            r = t.product_title,
            i = (t.original_line_price, t.price),
            o = (t.variant_title, t.line_level_discount_allocations),
            a = t.options_with_values,
            s = t.product_has_only_default_variant,
            c = t.image,
            u = t.url,
            l = t.quantity,
            d = t.unit_price,
            h = t.unit_price_measurement,
            f = t.selling_plan_allocation,
            p = (zt()(t, Ie), c && Ut(c.replace("." + Ft(c), ""), "200x")),
            m = "";
        l > 1 && (m = "x ".concat(l));
        var g = "",
            v = l > 9 ? l : "0".concat(l);
        s || a.forEach((function(t) {
            var e = "\n        <div>\n          ".concat(t.name, ": ").concat(t.value, "\n        </div>\n      ");
            g += e
        }));
        var y = f ? '<p class="type-body-regular mt0 mb0">'.concat(f.selling_plan.name, "</p>") : "";
        return `
  <div class='cart__item${e ? " cart__item--highlight" : ""}' data-component='quickCartItem' data-id=${n}>
    <div class="cart__item-content">
      <div class='quick-cart__image'>
        ${p ? `
          <a href='${u}'>
            <img src='${p}' />
          </a>
        ` : '<div class="placeholder"></div>'}
      </div>
      <div class='c-text quick-cart__product-details justify-between'>
    
      

        <div>
          <h4 class="ma0">
            <a href='${u}'>${r}</a>
          </h4>
          <span class="quick-cart__product-price">
            <span class="quick-cart__product-price-value">
              ${Bt(i)} <span>${m}</span>
            </span>
            ${xe(d, h)}
            ${function(t) {
              if (Boolean(t.length)) {
                var e = t.map(function(t) {
                  var e = t.amount,
                      n = t.discount_application.title;
                  return `<li>${n} (-${Bt(e)})</li>`;
                });
                return `
                  <ul class="quick-cart__item-discounts">
                    ${e.join('')}
                  </ul>
                `;
              }
              return "";
            }(o)}
            ${y}
          </span>
          ${g}
        </div>
      </div>
    </div>
    <div class='quick-cart__item-bottom'>
      <div class='quick-cart__quantity'>
        <button type="button" class='quick-cart__quantity-button js-remove-single px05'>
          <svg width="10" height="2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1h8" stroke="currentColor" stroke-linecap="square"/>
          </svg>
        </button>
        <div class='quick-cart__item-total js-single-quantity'>${v}</div>
        <button type="button" class='quick-cart__quantity-button js-add-single px05'>
          <svg width="11" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 0v11M0 5.5h11" stroke="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
`;

    }
    var Me = function() {
            return JSON.parse(localStorage.getItem("recentlyViewed"))
        },
        Re = function(t) {
            return localStorage.setItem("recentlyViewed", t)
        },
        Be = function(t) {
            var e = [];
            null !== Me() ? ((e = Me().filter((function(e) {
                return e.id !== t.id
            }))).unshift(t), Re(JSON.stringify(e.slice(0, 20)))) : null === Me() && (e.push(t), Re(JSON.stringify(e)))
        },
        He = function() {
            return Me()
        },
        ze = function(t) {
            var e = t.querySelector(".js-remove-single"),
                n = t.querySelector(".js-add-single"),
                r = t.querySelector(".js-single-quantity").innerHTML,
                i = t.getAttribute("data-id");
            e.addEventListener("click", (function(t) {
                t.preventDefault(), 1 === r ? de(i) : le(i, parseInt(r) - 1)
            })), n.addEventListener("click", (function(t) {
                t.preventDefault(), le(i, parseInt(r) + 1)
            }))
        };

    function Fe(t) {
        return t.length > 0 ? t.reduce((function(t, e) {
            return t += function(t) {
                t.handle;
                var e = t.title,
                    n = t.url,
                    r = t.featured_image,
                    i = zt()(t, Ne),
                    o = r && Ut(r.replace("." + Ft(r), ""), "200x");
                return '\n    <div class="cart__item justify-around">\n      <div class="cart__item-content">\n        <div class="quick-cart__image">\n          '.concat(o ? "\n              <a href='".concat(n, "'>\n                <img src='").concat(o, "' />\n              </a>\n            ") : '<div class="placeholder"></div>', '\n        </div>\n        <div class="quick-cart__product-details">\n          <a href="').concat(n, '">\n            <h3 class="ma0">').concat(e, '</h3>\n          </a>\n          <span class="quick-cart__product-price">').concat(Bt(i.price), "</span>\n        </div>\n      </div>\n    </div>\n  ")
            }(e)
        }), "") : '<p class="quick-cart__empty-state">'.concat(general.products.no_recently_viewed, "</p>")
    }
    var Ue = ".cart__item",
        Ve = function(t) {
            var e = Nt(t, {
                    allowOutsideClick: !0
                }),
                n = t.querySelector(".js-discounts"),
                r = t.querySelector(".js-subtotal"),
                i = t.querySelector(".js-items"),
                o = t.querySelector(".js-footer"),
                a = t.querySelector(".js-close"),
                s = i.innerHTML,
                c = t.querySelector(".js-tab-link-cart"),
                u = t.querySelector(".js-tab-link-recent"),
                l = t.querySelector(".js-tab-link-quick-shop"),
                d = function(t) {
                    var e, a = t.cart_level_discount_applications;
                    c.classList.add("active"), l.classList.remove("active"), u.classList.remove("active"), i.innerHTML = (e = t.items).length > 0 ? e.reduce((function(t, e) {
                        var n = X().newItemInCart;
                        return n && K({
                            newItemInCart: !1
                        }), t += je(e, n)
                    }), "") : '<p class="quick-cart__empty-state">'.concat(theme.strings.cart.general.empty, "</p>");
                    var s = i.querySelectorAll(Ue);
                    s.length && s.forEach((function(t) {
                        ze(t)
                    })), He() && u.classList.remove("hide"), n.innerHTML = function(t) {
                        return t.length > 0 ? "\n    <div>\n      ".concat(t.map((function(t) {
                            var e = t.title,
                                n = t.total_allocated_amount;
                            return "<div>".concat(e, " (-").concat(Bt(n), ")</div>")
                        })), "\n    </div>\n  ") : ""
                    }(a), t.items.length > 0 ? o.classList.add("active") : o.classList.remove("active"), Boolean(a.length > 0) ? n.classList.add("active") : n.classList.remove("active"), r && (r.innerHTML = Bt(t.total_price))
                },
                h = function(n, r) {
                    t.classList.add("is-visible"), J("drawerOverlay:show"), t.classList.add("is-active"), i.innerHTML = s, X().quickShopProduct && t.classList.add("has-quick-shop-product"), setTimeout((function() {
                        e.activate(), r ? (l.classList.add("active"), setTimeout(m(), 10)) : (c.classList.add("active"), setTimeout(d(n), 10))
                    }), 50)
                },
                f = function() {
                    var n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    n && J("drawerOverlay:hide"), t.classList.remove("is-visible"), l.classList.remove("active"), u.classList.remove("active"), c.classList.remove("active"), t.classList.remove("has-quick-shop-product"), setTimeout((function() {
                        e.deactivate(), K({
                            cartOpen: !1,
                            quickShopProduct: null
                        })
                    }), 50)
                },
                p = Y("drawerOverlay:hiding", (function() {
                    return f(!1)
                })),
                m = function() {
                    l.classList.add("active"), c.classList.remove("active"), u.classList.remove("active"), o.classList.remove("active"), i.innerHTML = "", i.appendChild(X().quickShopProduct)
                },
                g = function(t) {
                    X().cartOpen && ("Escape" == t.key || 27 === t.keyCode && drawerOpen) && f()
                };
            d(X().cart), c.addEventListener("click", (function(t) {
                return t.preventDefault() || function() {
                    c.classList.add("active"), u.classList.remove("active"), l.classList.remove("active");
                    var t = X().cart;
                    d(t)
                }()
            })), u.addEventListener("click", (function(t) {
                return t.preventDefault() || void((e = He()) && (c.classList.remove("active"), l.classList.remove("active"), u.classList.add("active"), o.classList.remove("active"), i.innerHTML = Fe(e)));
                var e
            })), l.addEventListener("click", (function(t) {
                return t.preventDefault() || m()
            })), a.addEventListener("click", f), Y("cart:toggle", (function(t) {
                var e = t.cart,
                    n = t.cartOpen,
                    r = t.quickShopProduct;
                n ? h(e, r) : f()
            })), Y("cart:updated", (function(e) {
                var n = e.cartOpen,
                    r = e.cart;
                t.classList.remove("has-quick-shop-product"), n ? d(r) : (K({
                    cartOpen: !0
                }), h(r))
            })), window.addEventListener("keydown", g);
            return {
                unload: function() {
                    window.removeEventListener("keydown", g), p()
                },
                open: h
            }
        },
        We = "is-visible",
        Ge = "[data-modal-close]",
        $e = ".modal__content",
        Ye = ".accordion",
        Je = function(t) {
            var e = Nt(t, {
                    allowOutsideClick: !0
                }),
                n = _($e, t),
                r = null,
                i = [k(_(Ge, t), "click", (function(t) {
                    t.preventDefault(), c()
                })), k(t, "keydown", (function(t) {
                    27 === t.keyCode && c()
                })), Y("drawerOverlay:hiding", (function() {
                    return c(!1)
                })), Y("modal:open", (function(t, e) {
                    var n = e.modalContent;
                    o(n), s()
                }))],
                o = function(t) {
                    var e = t.cloneNode(!0);
                    n.innerHTML = "", n.appendChild(e), a()
                },
                a = function() {
                    var t = n.querySelector(Ye);
                    t && (r = z(t))
                },
                s = function() {
                    x(t, We), e.activate(), J("drawerOverlay:show")
                },
                c = function() {
                    var r = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    n.innerHTML = "", e.deactivate(), r && J("drawerOverlay:hide"), T(t, We)
                };
            return {
                unload: function() {
                    i.forEach((function(t) {
                        return t()
                    })), r && r.unload()
                }
            }
        },
        Ke = "is-visible",
        Xe = "[data-store-availability-close]",
        Ze = "[data-store-availability-product]",
        Qe = "[data-store-list-container]",
        tn = function(t) {
            var e = Nt(t, {
                    allowOutsideClick: !0
                }),
                n = _(Ze, t),
                r = _(Qe, t),
                i = [k(_(Xe, t), "click", (function(t) {
                    t.preventDefault(), l()
                })), k(t, "keydown", (function(t) {
                    27 === t.keyCode && l()
                })), Y("drawerOverlay:hiding", (function() {
                    return l(!1)
                })), Y("availability:showMore", (function(t) {
                    var e = t.product,
                        r = t.variant,
                        i = t.storeList;
                    n.innerHTML = a(e, r), o(i), u()
                }))],
                o = function(t) {
                    r.innerHTML = "", r.appendChild(t)
                },
                a = function(t, e) {
                    var n = t.featured_image,
                        r = t.title,
                        i = e.title,
                        o = e.featured_image,
                        a = e.price,
                        c = e.unit_price,
                        u = e.unit_price_measurement,
                        l = s(n, o);
                    return '\n      <div class="store-availbility-flyout__product-card type-body-regular">\n        '.concat(l ? "\n            <div class='store-availbility-flyout__product-card-image'>\n              <img src='".concat(l, "' alt='").concat(r, "'/>\n            </div>\n          ") : "", "\n        <div class='store-availbility-flyout__product-card-details'>\n          <div>\n            <h4 class=\"ma0\">\n              <span>").concat(r, '</span>\n            </h4>\n            <div class="store-availbility-flyout__product-price-wrapper">\n              <span class="store-availbility-flyout__product-price">').concat(Bt(a), "</span>\n              ").concat(xe(c, u), '\n            </div>\n            <div class="store-availbility-flyout__product-card-options">\n              ').concat(i, "\n            </div>\n          </div>\n        </div>\n      </div>\n    ")
                },
                s = function(t, e) {
                    return t || e ? c(e ? e.src : t) : ""
                },
                c = function(t) {
                    return Ut(t.replace("." + Ft(t), ""), "200x")
                },
                u = function() {
                    x(t, Ke), t.setAttribute("aria-hidden", "false"), e.activate(), J("drawerOverlay:show")
                },
                l = function() {
                    var n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    e.deactivate(), n && J("drawerOverlay:hide"), T(t, Ke), t.setAttribute("aria-hidden", "true")
                };
            return {
                unload: function() {
                    i.forEach((function(t) {
                        return t()
                    }))
                }
            }
        },
        en = (n(28), n(29), n(30), n(31), n(32), n(3), n(33), ".selectors-form"),
        nn = "[data-disclosure-list]",
        rn = "[data-disclosure-toggle]",
        on = "[data-disclosure-input]",
        an = "[data-disclosure-option]",
        sn = "disclosure-list--visible";

    function cn(t, e) {
        return t.map((function(t) {
            return t.contains(e)
        })).filter(Boolean)
    }
    var un = function(t, e) {
            var n = e.querySelector(en),
                r = t.querySelector(nn),
                i = t.querySelector(rn),
                o = t.querySelector(on),
                a = t.querySelectorAll(an);

            function s(t) {
                t.preventDefault();
                var e = t.currentTarget.dataset.value;
                o.value = e, n.submit()
            }

            function c(e) {
                0 === cn([t], e.relatedTarget).length && f()
            }

            function u(e) {
                var n = cn([t], e.relatedTarget).length > 0;
                r.classList.contains(sn) && !n && f()
            }

            function l(t) {
                27 === t.which && (f(), i.focus())
            }

            function d(t) {
                r.classList.toggle(sn);
                var e = r.classList.contains(sn);
                t.currentTarget.setAttribute("aria-expanded", e), e && J("navitem:closeOthers")
            }

            function h(e) {
                var n = cn([t], e.target).length > 0;
                r.classList.contains(sn) && !n && f()
            }

            function f() {
                i.setAttribute("aria-expanded", !1), r.classList.remove(sn)
            }
            a.forEach((function(t) {
                return t.addEventListener("click", s)
            })), i.addEventListener("click", d), i.addEventListener("focusout", c), r.addEventListener("focusout", u), t.addEventListener("keyup", l), document.addEventListener("click", h);
            return {
                unload: function() {
                    a.forEach((function(t) {
                        return t.removeEventListener("click", s)
                    })), i.removeEventListener("click", d), i.removeEventListener("focusout", c), r.removeEventListener("focusout", u), t.removeEventListener("keyup", l), document.removeEventListener("click", h)
                }
            }
        },
        ln = "[data-disclosure]";
    we("footer", {
        crossBorder: {},
        onLoad: function() {
            var t = this,
                e = this.container.querySelectorAll(ln);
            e && e.forEach((function(e) {
                var n = e.dataset.disclosure;
                t.crossBorder[n] = un(e, t.container)
            }))
        },
        onUnload: function() {
            var t = this;
            Object.keys(this.crossBorder).forEach((function(e) {
                t.crossBorder[e].unload()
            }))
        }
    });
    var dn = "nav__menu--active",
        hn = "[data-navmenu-trigger]",
        fn = "[data-nav-submenu]",
        pn = ".header__nav",
        mn = ".nav__link",
        gn = ".nav__link-parent",
        vn = ".nav__item-parent",
        yn = ".nav--depth-1",
        bn = ".quick-search__trigger",
        wn = ".header__icon--account",
        _n = ".header__logo-image",
        En = function(t) {
            var e = t.querySelector(".header"),
                n = e.classList.contains("header--detect-menu-length"),
                r = null,
                i = t.querySelector(pn).querySelector(yn),
                o = i.querySelectorAll("".concat(yn, " > li:not(").concat(vn, ") > ").concat(mn)),
                a = t.querySelector(_n),
                s = t.querySelector(bn),
                c = t.querySelector("".concat(wn, " > a")),
                u = t.querySelectorAll("".concat(hn, " > ").concat(gn)),
                l = [],
                d = function(t, e, n) {
                    t.addEventListener(e, n, !0), l.push({
                        element: t,
                        action: e,
                        func: n
                    })
                },
                h = function(t) {
                    X().headerOverlayOpen && (t.target.matches("[data-navigation-dropdown-trigger], [data-navigation-dropdown-trigger] *") || t.target.matches("[data-navigation-dropdown], [data-navigation-dropdown] *") || (m(), b()))
                },
                f = function(t) {
                    t.preventDefault();
                    var e = t.currentTarget.parentNode,
                        n = e.querySelector(fn);
                    g(n) ? y(e) : (J("headerOverlay:show"), v(e))
                },
                p = function(t) {
                    // t.preventDefault()
                },
                m = function() {
                    J("headerOverlay:hide")
                },
                g = function(t) {
                    return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
                },
                v = function(t) {
                    t.parentNode.classList.contains("nav--depth-2") ? t.parentNode.querySelectorAll(hn).forEach((function(t) {
                        return y(t)
                    })) : b();
                    var e = t.querySelector(fn),
                        n = t.querySelector(mn);
                    e.classList.add("visible"), n.classList.add(dn), n.setAttribute("aria-expanded", !0)
                },
                y = function(t) {
                    var e = t.querySelector(fn),
                        n = t.querySelector(mn);
                    t.parentNode.classList.contains("nav--depth-2") || m(), e.classList.remove("visible"), n.classList.remove(dn), n.setAttribute("aria-expanded", !1)
                },
                b = function() {
                    t.classList.remove(), t.querySelectorAll(hn).forEach((function(t) {
                        var e = t.querySelector(fn),
                            n = t.querySelector(mn);
                        e.classList.remove("visible"), n.classList.remove(dn), n.setAttribute("aria-expanded", !1)
                    }))
                },
                w = function() {
                    var t = i.scrollLeft;
                    document.documentElement.style.setProperty("--navigation-scroll-offset", "".concat(t, "px"))
                },
                _ = function() {
                    if (i.scrollWidth > i.clientWidth) {
                        if (e.classList.contains("header--always-mobile")) return;
                        e.classList.add("header--always-mobile"), e.classList.remove("header--default")
                    }
                };
            n && (r = V((function(t) {
                t.vw > 960 && _()
            })), _()), d(document, "click", h), u.forEach((function(t) {
                d(t, "focusin", f), d(t, "mousedown", f), d(t, "click", p)
            })), o.forEach((function(t) {
                d(t, "focus", m), d(t, "focus", b)
            })), a && (d(a, "focus", b), d(a, "focus", m)), s && (d(s, "focus", b), d(s, "focus", m)), c && (d(c, "focus", b), d(c, "focus", m)), d(i, "scroll", w);
            return {
                unload: function() {
                    l.forEach((function(t) {
                        t.element.removeEventListener(t.action, t.function)
                    })), r && r.destroy()
                },
                closeAll: b
            }
        };

    function Sn() {
        var t = Error.call(this);
        return t.name = "Server error", t.message = "Something went wrong on the server", t.status = 500, t
    }

    function An(t) {
        var e = Error.call(this);
        return e.name = "Not found", e.message = "Not found", e.status = t, e
    }

    function kn() {
        var t = Error.call(this);
        return t.name = "Server error", t.message = "Something went wrong on the server", t.status = 500, t
    }

    function Ln(t) {
        var e = Error.call(this);
        return e.name = "Content-Type error", e.message = "Content-Type was not provided or is of wrong type", e.status = t, e
    }

    function xn(t) {
        var e = Error.call(this);
        return e.name = "JSON parse error", e.message = "JSON syntax error", e.status = t, e
    }

    function Tn(t, e, n, r) {
        var i = Error.call(this);
        return i.name = e, i.message = n, i.status = t, i.retryAfter = r, i
    }

    function qn(t, e, n) {
        var r = Error.call(this);
        return r.name = e, r.message = n, r.status = t, r
    }

    function On(t, e, n) {
        var r = Error.call(this);
        return r.name = e, r.message = n, r.status = t, r
    }

    function Cn() {
        this.events = {}
    }

    function Pn(t) {
        this.eventName = t, this.callbacks = []
    }

    function Dn(t) {
        this._store = {}, this._keys = [], t && t.bucketSize ? this.bucketSize = t.bucketSize : this.bucketSize = 20
    }

    function In(t, e) {
        var n = "";
        return e = e || null, Object.keys(t).forEach((function(r) {
            var i = r + "=";
            switch (e && (i = e + "[" + r + "]"), function(t) {
                return Object.prototype.toString.call(t).slice(8, -1).toLowerCase()
            }(t[r])) {
                case "object":
                    n += In(t[r], e ? i : r);
                    break;
                case "array":
                    n += i + "=" + t[r].join(",") + "&";
                    break;
                default:
                    e && (i += "="), n += i + encodeURIComponent(t[r]) + "&"
            }
        })), n
    }
    Cn.prototype.on = function(t, e) {
        var n = this.events[t];
        n || (n = new Pn(t), this.events[t] = n), n.registerCallback(e)
    }, Cn.prototype.off = function(t, e) {
        var n = this.events[t];
        n && n.callbacks.indexOf(e) > -1 && (n.unregisterCallback(e), 0 === n.callbacks.length && delete this.events[t])
    }, Cn.prototype.dispatch = function(t, e) {
        var n = this.events[t];
        n && n.fire(e)
    }, Pn.prototype.registerCallback = function(t) {
        this.callbacks.push(t)
    }, Pn.prototype.unregisterCallback = function(t) {
        var e = this.callbacks.indexOf(t);
        e > -1 && this.callbacks.splice(e, 1)
    }, Pn.prototype.fire = function(t) {
        this.callbacks.slice(0).forEach((function(e) {
            e(t)
        }))
    }, Dn.prototype.set = function(t, e) {
        if (this.count() >= this.bucketSize) {
            var n = this._keys.splice(0, 1);
            this.delete(n)
        }
        return this._keys.push(t), this._store[t] = e, this._store
    }, Dn.prototype.get = function(t) {
        return this._store[t]
    }, Dn.prototype.has = function(t) {
        return Boolean(this._store[t])
    }, Dn.prototype.count = function() {
        return Object.keys(this._store).length
    }, Dn.prototype.delete = function(t) {
        var e = Boolean(this._store[t]);
        return delete this._store[t], e && !this._store[t]
    };
    var Nn, jn, Mn, Rn = (Nn = function(t, e, n, r, i) {
        var o = new XMLHttpRequest,
            a = t + "/suggest.json";
        o.onreadystatechange = function() {
            if (o.readyState !== XMLHttpRequest.DONE);
            else {
                var t = o.getResponseHeader("Content-Type");
                if (o.status >= 500) return void i(new kn);
                if (404 === o.status) return void i(new An(o.status));
                if ("string" != typeof t || null === t.toLowerCase().match("application/json")) return void i(new Ln(o.status));
                if (417 === o.status) {
                    try {
                        var e = JSON.parse(o.responseText);
                        i(new qn(o.status, e.message, e.description))
                    } catch (t) {
                        i(new xn(o.status))
                    }
                    return
                }
                if (422 === o.status) {
                    try {
                        var a = JSON.parse(o.responseText);
                        i(new On(o.status, a.message, a.description))
                    } catch (t) {
                        i(new xn(o.status))
                    }
                    return
                }
                if (429 === o.status) {
                    try {
                        var s = JSON.parse(o.responseText);
                        i(new Tn(o.status, s.message, s.description, o.getResponseHeader("Retry-After")))
                    } catch (t) {
                        i(new xn(o.status))
                    }
                    return
                }
                if (200 === o.status) {
                    try {
                        var c = JSON.parse(o.responseText);
                        c.query = n, r(c)
                    } catch (t) {
                        i(new xn(o.status))
                    }
                    return
                }
                try {
                    var u = JSON.parse(o.responseText);
                    i(new Sn(o.status, u.message, u.description))
                } catch (t) {
                    i(new xn(o.status))
                }
            }
        }, o.open("get", a + "?q=" + encodeURIComponent(n) + "&" + e), o.setRequestHeader("Content-Type", "application/json"), o.send()
    }, jn = 10, Mn = null, function() {
        var t = this,
            e = arguments;
        clearTimeout(Mn), Mn = setTimeout((function() {
            Mn = null, Nn.apply(t, e)
        }), jn || 0)
    });

    function Bn(t) {
        if (!t) throw new TypeError("No config object was specified");
        var e = t;
        this._retryAfter = null, this._currentQuery = null, this.dispatcher = new Cn, this.cache = new Dn({
            bucketSize: 40
        }), this.searchPath = e.search_path || "/search", e.search_path && delete e.search_path, this.configParams = In(e)
    }

    function Hn(t) {
        return "string" != typeof t ? null : t.trim().replace(" ", "-").toLowerCase()
    }

    function zn(t, e) {
        if (null === e) return t;
        if ("master" === e) return Fn(t);
        const n = t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
        if (n) {
            const r = t.split(n[0]),
                i = n[0];
            return Fn(`${r[0]}_${e}${i}`)
        }
        return null
    }

    function Fn(t) {
        return t.replace(/http(s)?:/, "")
    }
    Bn.SEARCH_PATH = "/search", Bn.TYPES = {
        PRODUCT: "product",
        PAGE: "page",
        ARTICLE: "article",
        COLLECTION: "collection"
    }, Bn.FIELDS = {
        AUTHOR: "author",
        BODY: "body",
        PRODUCT_TYPE: "product_type",
        TAG: "tag",
        TITLE: "title",
        VARIANTS_BARCODE: "variants.barcode",
        VARIANTS_SKU: "variants.sku",
        VARIANTS_TITLE: "variants.title",
        VENDOR: "vendor"
    }, Bn.UNAVAILABLE_PRODUCTS = {
        SHOW: "show",
        HIDE: "hide",
        LAST: "last"
    }, Bn.prototype.query = function(t) {
        try {
            ! function(t) {
                var e;
                if (null == t) throw (e = new TypeError("'query' is missing")).type = "argument", e;
                if ("string" != typeof t) throw (e = new TypeError("'query' is not a string")).type = "argument", e
            }(t)
        } catch (t) {
            return void this.dispatcher.dispatch("error", t)
        }
        if ("" === t) return this;
        this._currentQuery = Hn(t);
        var e = this.cache.get(this._currentQuery);
        return e ? (this.dispatcher.dispatch("success", e), this) : (Rn(this.searchPath, this.configParams, t, function(t) {
            this.cache.set(Hn(t.query), t), Hn(t.query) === this._currentQuery && (this._retryAfter = null, this.dispatcher.dispatch("success", t))
        }.bind(this), function(t) {
            t.retryAfter && (this._retryAfter = t.retryAfter), this.dispatcher.dispatch("error", t)
        }.bind(this)), this)
    }, Bn.prototype.on = function(t, e) {
        return this.dispatcher.on(t, e), this
    }, Bn.prototype.off = function(t, e) {
        return this.dispatcher.off(t, e), this
    };
    var Un = n(11),
        Vn = n.n(Un),
        Wn = window.theme.strings,
        Gn = {
            limit: 4,
            show_articles: !0,
            show_pages: !0,
            show_products: !0,
            show_price: !0,
            show_vendor: !1
        },
        $n = function(t) {
            var e = t.opts,
                n = Object.assign(Gn, e),
                r = n.limit,
                i = n.show_articles,
                o = n.show_pages,
                a = n.show_products,
                s = n.show_price,
                c = n.show_vendor,
                u = Z({
                    count: 0
                }),
                l = u.emit,
                d = u.getState,
                h = u.hydrate,
                f = u.on,
                p = new Bn({
                    resources: {
                        type: [i && Bn.TYPES.ARTICLE, o && Bn.TYPES.PAGE, a && Bn.TYPES.PRODUCT].filter(Boolean),
                        limit: r,
                        options: {
                            unavailable_products: "last",
                            fields: [Bn.FIELDS.TITLE, Bn.FIELDS.PRODUCT_TYPE, Bn.FIELDS.VARIANTS_TITLE]
                        }
                    }
                });

            function m(t, e, n) {
                var r = '<div class="quick-search__header type-heading-meta overline">'.concat(e, "</div>");
                return t.length >= 1 ? r + t.map(n).join("") : ""
            }

            function g(t) {
                var e = t.url,
                    n = t.image,
                    r = t.heading,
                    i = t.subheading,
                    o = d().query,
                    a = new RegExp("(" + o + ")", "gi"),
                    s = r.replace(a, '<span class="hl">$1</span>'),
                    c = i.replace(a, '<span class="hl">$1</span>'),
                    u = n ? '<img class="image__img lazyload" data-src="'.concat(zn(n, "120x"), '" />') : '\n  <svg xmlns="http://www.w3.org/2000/svg">\n    <rect width="100%" height="100%" fill="transparent"/>\n    <svg\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n      preserveAspectRatio="none"\n    >\n      <text id="ok_text"\n        x="50%"\n        y="50%"\n        text-anchor="middle"\n        alignment-baseline="middle"\n        fill="currentColor"\n      >\n        Abc\n      </text>\n    </svg>\n  </svg>\n';
                return '\n      <a class="quick-search__result" href="'.concat(e, '">\n        <div class="quick-search__result-image">').concat(u, '</div>\n        <div class="quick-search__result-details">\n          <div class="quick-search__result-heading type-body-regular">').concat(s, '</div>\n          <div class="quick-search__result-subheading type-body-small">').concat(c, "</div>\n        </div>\n      </a>\n    ")
            }
            return f("search", (function(t, e) {
                var n = e.query;
                return p.query(n)
            })), p.on("success", (function(t) {
                var e = t.query,
                    n = t.resources.results;
                h({
                    query: e
                });
                var r = function(t, e) {
                    var n = t.articles,
                        r = t.pages,
                        i = t.products;
                    if (!n.length && !r.length && !i.length) return '\n        <div class="quick-search__no-results">\n          '.concat(Wn.search.no_results, " &ldquo;").concat(e, "&rdquo;\n        </div>\n      ");
                    var o = "";
                    i && (o += m(i, Wn.search.headings.products, (function(t) {
                        var e = t.url,
                            n = t.image,
                            r = t.title,
                            i = t.price,
                            o = t.vendor,
                            a = Bt(i * Shopify.currency.rate * 100);
                        return g({
                            url: e,
                            image: n,
                            heading: r,
                            subheading: [c && o, s && Vn()(a)].filter(Boolean).join(" • ")
                        })
                    })));
                    r && (o += m(r, Wn.search.headings.pages, (function(t) {
                        var e = t.url,
                            n = t.image,
                            r = t.title,
                            i = t.body;
                        return g({
                            url: e,
                            image: n,
                            heading: r,
                            subheading: Vn()(i)
                        })
                    })));
                    n && (o += m(n, Wn.search.headings.articles, (function(t) {
                        var e = t.url,
                            n = t.image,
                            r = t.title,
                            i = t.body;
                        return g({
                            url: e,
                            image: n,
                            heading: r,
                            subheading: Vn()(i)
                        })
                    })));
                    var a = '\n      <div class="quick-search__view-all accent">\n        <button type="submit">'.concat(Wn.search.view_all, " &rarr;</button>\n      </div>\n    ");
                    return o + a
                }(n, e);
                l("success", {
                    markup: r,
                    query: e
                })
            })), p.on("error", (function(t) {})), {
                on: f,
                query: function(t) {
                    l("search", null, {
                        query: t
                    })
                }
            }
        },
        Yn = ".quick-search__trigger",
        Jn = ".search__overlay",
        Kn = ".search__input",
        Xn = ".search__input-clear",
        Zn = ".search__input-close",
        Qn = ".search__results",
        tr = "[data-settings]",
        er = "is-active",
        nr = "has-active-query",
        rr = "has-suggestions",
        ir = function(t) {
            var e = t.container,
                n = e.querySelector(tr),
                r = e.querySelector(Yn),
                i = e.querySelector(Jn),
                o = e.querySelector(Kn),
                a = e.querySelector(Xn),
                s = e.querySelector(Zn),
                c = e.querySelector(Qn),
                u = [],
                l = JSON.parse(n.innerHTML),
                d = $n({
                    opts: l
                });
            d.on("success", (function(t) {
                var n = t.markup;
                e.classList.add(rr), c.innerHTML = n
            }));
            var h = function(t, e, n) {
                    t.addEventListener(e, n, !0), u.push({
                        element: t,
                        action: e,
                        func: n
                    })
                },
                f = function(t) {
                    t.preventDefault(), e.classList.remove(er)
                },
                p = function(t) {
                    e.classList.contains(er) && 27 === t.keyCode && f(t)
                },
                m = function(t) {
                    t.preventDefault(), o.value = "", g(t), o.focus()
                },
                g = function(t) {
                    var n = t.target.value;
                    if (!n) return e.classList.remove(nr), void e.classList.remove(rr);
                    e.classList.add(nr), (l.show_products || l.show_pages || l.show_articles) && d.query(n)
                };
            return h(r, "click", (function(t) {
                t.preventDefault(), e.classList.add(er), o.focus()
            })), h(i, "click", f), h(document, "keydown", p), h(o, "input", g), h(s, "click", f), h(a, "click", m), {
                unload: function() {
                    u.forEach((function(t) {
                        t.element.removeEventListener(t.action, t.function)
                    }))
                }
            }
        },
        or = {
            update: null,
            begin: null,
            loopBegin: null,
            changeBegin: null,
            change: null,
            changeComplete: null,
            loopComplete: null,
            complete: null,
            loop: 1,
            direction: "normal",
            autoplay: !0,
            timelineOffset: 0
        },
        ar = {
            duration: 1e3,
            delay: 0,
            endDelay: 0,
            easing: "easeOutElastic(1, .5)",
            round: 0
        },
        sr = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"],
        cr = {
            CSS: {},
            springs: {}
        };

    function ur(t, e, n) {
        return Math.min(Math.max(t, e), n)
    }

    function lr(t, e) {
        return t.indexOf(e) > -1
    }

    function dr(t, e) {
        return t.apply(null, e)
    }
    var hr = {
        arr: function(t) {
            return Array.isArray(t)
        },
        obj: function(t) {
            return lr(Object.prototype.toString.call(t), "Object")
        },
        pth: function(t) {
            return hr.obj(t) && t.hasOwnProperty("totalLength")
        },
        svg: function(t) {
            return t instanceof SVGElement
        },
        inp: function(t) {
            return t instanceof HTMLInputElement
        },
        dom: function(t) {
            return t.nodeType || hr.svg(t)
        },
        str: function(t) {
            return "string" == typeof t
        },
        fnc: function(t) {
            return "function" == typeof t
        },
        und: function(t) {
            return void 0 === t
        },
        nil: function(t) {
            return hr.und(t) || null === t
        },
        hex: function(t) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
        },
        rgb: function(t) {
            return /^rgb/.test(t)
        },
        hsl: function(t) {
            return /^hsl/.test(t)
        },
        col: function(t) {
            return hr.hex(t) || hr.rgb(t) || hr.hsl(t)
        },
        key: function(t) {
            return !or.hasOwnProperty(t) && !ar.hasOwnProperty(t) && "targets" !== t && "keyframes" !== t
        }
    };

    function fr(t) {
        var e = /\(([^)]+)\)/.exec(t);
        return e ? e[1].split(",").map((function(t) {
            return parseFloat(t)
        })) : []
    }

    function pr(t, e) {
        var n = fr(t),
            r = ur(hr.und(n[0]) ? 1 : n[0], .1, 100),
            i = ur(hr.und(n[1]) ? 100 : n[1], .1, 100),
            o = ur(hr.und(n[2]) ? 10 : n[2], .1, 100),
            a = ur(hr.und(n[3]) ? 0 : n[3], .1, 100),
            s = Math.sqrt(i / r),
            c = o / (2 * Math.sqrt(i * r)),
            u = c < 1 ? s * Math.sqrt(1 - c * c) : 0,
            l = c < 1 ? (c * s - a) / u : -a + s;

        function d(t) {
            var n = e ? e * t / 1e3 : t;
            return n = c < 1 ? Math.exp(-n * c * s) * (1 * Math.cos(u * n) + l * Math.sin(u * n)) : (1 + l * n) * Math.exp(-n * s), 0 === t || 1 === t ? t : 1 - n
        }
        return e ? d : function() {
            var e = cr.springs[t];
            if (e) return e;
            for (var n = 0, r = 0;;)
                if (1 === d(n += 1 / 6)) {
                    if (++r >= 16) break
                } else r = 0;
            var i = n * (1 / 6) * 1e3;
            return cr.springs[t] = i, i
        }
    }

    function mr(t) {
        return void 0 === t && (t = 10),
            function(e) {
                return Math.ceil(ur(e, 1e-6, 1) * t) * (1 / t)
            }
    }
    var gr, vr, yr = function() {
            function t(t, e) {
                return 1 - 3 * e + 3 * t
            }

            function e(t, e) {
                return 3 * e - 6 * t
            }

            function n(t) {
                return 3 * t
            }

            function r(r, i, o) {
                return ((t(i, o) * r + e(i, o)) * r + n(i)) * r
            }

            function i(r, i, o) {
                return 3 * t(i, o) * r * r + 2 * e(i, o) * r + n(i)
            }
            return function(t, e, n, o) {
                if (0 <= t && t <= 1 && 0 <= n && n <= 1) {
                    var a = new Float32Array(11);
                    if (t !== e || n !== o)
                        for (var s = 0; s < 11; ++s) a[s] = r(.1 * s, t, n);
                    return function(i) {
                        return t === e && n === o || 0 === i || 1 === i ? i : r(c(i), e, o)
                    }
                }

                function c(e) {
                    for (var o = 0, s = 1; 10 !== s && a[s] <= e; ++s) o += .1;
                    --s;
                    var c = o + .1 * ((e - a[s]) / (a[s + 1] - a[s])),
                        u = i(c, t, n);
                    return u >= .001 ? function(t, e, n, o) {
                        for (var a = 0; a < 4; ++a) {
                            var s = i(e, n, o);
                            if (0 === s) return e;
                            e -= (r(e, n, o) - t) / s
                        }
                        return e
                    }(e, c, t, n) : 0 === u ? c : function(t, e, n, i, o) {
                        var a, s, c = 0;
                        do {
                            (a = r(s = e + (n - e) / 2, i, o) - t) > 0 ? n = s : e = s
                        } while (Math.abs(a) > 1e-7 && ++c < 10);
                        return s
                    }(e, o, o + .1, t, n)
                }
            }
        }(),
        br = (gr = {
            linear: function() {
                return function(t) {
                    return t
                }
            }
        }, vr = {
            Sine: function() {
                return function(t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                }
            },
            Circ: function() {
                return function(t) {
                    return 1 - Math.sqrt(1 - t * t)
                }
            },
            Back: function() {
                return function(t) {
                    return t * t * (3 * t - 2)
                }
            },
            Bounce: function() {
                return function(t) {
                    for (var e, n = 4; t < ((e = Math.pow(2, --n)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            },
            Elastic: function(t, e) {
                void 0 === t && (t = 1), void 0 === e && (e = .5);
                var n = ur(t, 1, 10),
                    r = ur(e, .1, 2);
                return function(t) {
                    return 0 === t || 1 === t ? t : -n * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - r / (2 * Math.PI) * Math.asin(1 / n)) * (2 * Math.PI) / r)
                }
            }
        }, ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach((function(t, e) {
            vr[t] = function() {
                return function(t) {
                    return Math.pow(t, e + 2)
                }
            }
        })), Object.keys(vr).forEach((function(t) {
            var e = vr[t];
            gr["easeIn" + t] = e, gr["easeOut" + t] = function(t, n) {
                return function(r) {
                    return 1 - e(t, n)(1 - r)
                }
            }, gr["easeInOut" + t] = function(t, n) {
                return function(r) {
                    return r < .5 ? e(t, n)(2 * r) / 2 : 1 - e(t, n)(-2 * r + 2) / 2
                }
            }, gr["easeOutIn" + t] = function(t, n) {
                return function(r) {
                    return r < .5 ? (1 - e(t, n)(1 - 2 * r)) / 2 : (e(t, n)(2 * r - 1) + 1) / 2
                }
            }
        })), gr);

    function wr(t, e) {
        if (hr.fnc(t)) return t;
        var n = t.split("(")[0],
            r = br[n],
            i = fr(t);
        switch (n) {
            case "spring":
                return pr(t, e);
            case "cubicBezier":
                return dr(yr, i);
            case "steps":
                return dr(mr, i);
            default:
                return dr(r, i)
        }
    }

    function _r(t) {
        try {
            return document.querySelectorAll(t)
        } catch (t) {
            return
        }
    }

    function Er(t, e) {
        for (var n = t.length, r = arguments.length >= 2 ? arguments[1] : void 0, i = [], o = 0; o < n; o++)
            if (o in t) {
                var a = t[o];
                e.call(r, a, o, t) && i.push(a)
            }
        return i
    }

    function Sr(t) {
        return t.reduce((function(t, e) {
            return t.concat(hr.arr(e) ? Sr(e) : e)
        }), [])
    }

    function Ar(t) {
        return hr.arr(t) ? t : (hr.str(t) && (t = _r(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t])
    }

    function kr(t, e) {
        return t.some((function(t) {
            return t === e
        }))
    }

    function Lr(t) {
        var e = {};
        for (var n in t) e[n] = t[n];
        return e
    }

    function xr(t, e) {
        var n = Lr(t);
        for (var r in t) n[r] = e.hasOwnProperty(r) ? e[r] : t[r];
        return n
    }

    function Tr(t, e) {
        var n = Lr(t);
        for (var r in e) n[r] = hr.und(t[r]) ? e[r] : t[r];
        return n
    }

    function qr(t) {
        return hr.rgb(t) ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e = t)) ? "rgba(" + n[1] + ",1)" : e : hr.hex(t) ? function(t) {
            var e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(t, e, n, r) {
                    return e + e + n + n + r + r
                })),
                n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return "rgba(" + parseInt(n[1], 16) + "," + parseInt(n[2], 16) + "," + parseInt(n[3], 16) + ",1)"
        }(t) : hr.hsl(t) ? function(t) {
            var e, n, r, i = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),
                o = parseInt(i[1], 10) / 360,
                a = parseInt(i[2], 10) / 100,
                s = parseInt(i[3], 10) / 100,
                c = i[4] || 1;

            function u(t, e, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
            }
            if (0 == a) e = n = r = s;
            else {
                var l = s < .5 ? s * (1 + a) : s + a - s * a,
                    d = 2 * s - l;
                e = u(d, l, o + 1 / 3), n = u(d, l, o), r = u(d, l, o - 1 / 3)
            }
            return "rgba(" + 255 * e + "," + 255 * n + "," + 255 * r + "," + c + ")"
        }(t) : void 0;
        var e, n
    }

    function Or(t) {
        var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);
        if (e) return e[1]
    }

    function Cr(t, e) {
        return hr.fnc(t) ? t(e.target, e.id, e.total) : t
    }

    function Pr(t, e) {
        return t.getAttribute(e)
    }

    function Dr(t, e, n) {
        if (kr([n, "deg", "rad", "turn"], Or(e))) return e;
        var r = cr.CSS[e + n];
        if (!hr.und(r)) return r;
        var i = document.createElement(t.tagName),
            o = t.parentNode && t.parentNode !== document ? t.parentNode : document.body;
        o.appendChild(i), i.style.position = "absolute", i.style.width = 100 + n;
        var a = 100 / i.offsetWidth;
        o.removeChild(i);
        var s = a * parseFloat(e);
        return cr.CSS[e + n] = s, s
    }

    function Ir(t, e, n) {
        if (e in t.style) {
            var r = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
                i = t.style[e] || getComputedStyle(t).getPropertyValue(r) || "0";
            return n ? Dr(t, i, n) : i
        }
    }

    function Nr(t, e) {
        return hr.dom(t) && !hr.inp(t) && (!hr.nil(Pr(t, e)) || hr.svg(t) && t[e]) ? "attribute" : hr.dom(t) && kr(sr, e) ? "transform" : hr.dom(t) && "transform" !== e && Ir(t, e) ? "css" : null != t[e] ? "object" : void 0
    }

    function jr(t) {
        if (hr.dom(t)) {
            for (var e, n = t.style.transform || "", r = /(\w+)\(([^)]*)\)/g, i = new Map; e = r.exec(n);) i.set(e[1], e[2]);
            return i
        }
    }

    function Mr(t, e, n, r) {
        var i = lr(e, "scale") ? 1 : 0 + function(t) {
                return lr(t, "translate") || "perspective" === t ? "px" : lr(t, "rotate") || lr(t, "skew") ? "deg" : void 0
            }(e),
            o = jr(t).get(e) || i;
        return n && (n.transforms.list.set(e, o), n.transforms.last = e), r ? Dr(t, o, r) : o
    }

    function Rr(t, e, n, r) {
        switch (Nr(t, e)) {
            case "transform":
                return Mr(t, e, r, n);
            case "css":
                return Ir(t, e, n);
            case "attribute":
                return Pr(t, e);
            default:
                return t[e] || 0
        }
    }

    function Br(t, e) {
        var n = /^(\*=|\+=|-=)/.exec(t);
        if (!n) return t;
        var r = Or(t) || 0,
            i = parseFloat(e),
            o = parseFloat(t.replace(n[0], ""));
        switch (n[0][0]) {
            case "+":
                return i + o + r;
            case "-":
                return i - o + r;
            case "*":
                return i * o + r
        }
    }

    function Hr(t, e) {
        if (hr.col(t)) return qr(t);
        if (/\s/g.test(t)) return t;
        var n = Or(t),
            r = n ? t.substr(0, t.length - n.length) : t;
        return e ? r + e : r
    }

    function zr(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
    }

    function Fr(t) {
        for (var e, n = t.points, r = 0, i = 0; i < n.numberOfItems; i++) {
            var o = n.getItem(i);
            i > 0 && (r += zr(e, o)), e = o
        }
        return r
    }

    function Ur(t) {
        if (t.getTotalLength) return t.getTotalLength();
        switch (t.tagName.toLowerCase()) {
            case "circle":
                return function(t) {
                    return 2 * Math.PI * Pr(t, "r")
                }(t);
            case "rect":
                return function(t) {
                    return 2 * Pr(t, "width") + 2 * Pr(t, "height")
                }(t);
            case "line":
                return function(t) {
                    return zr({
                        x: Pr(t, "x1"),
                        y: Pr(t, "y1")
                    }, {
                        x: Pr(t, "x2"),
                        y: Pr(t, "y2")
                    })
                }(t);
            case "polyline":
                return Fr(t);
            case "polygon":
                return function(t) {
                    var e = t.points;
                    return Fr(t) + zr(e.getItem(e.numberOfItems - 1), e.getItem(0))
                }(t)
        }
    }

    function Vr(t, e) {
        var n = e || {},
            r = n.el || function(t) {
                for (var e = t.parentNode; hr.svg(e) && hr.svg(e.parentNode);) e = e.parentNode;
                return e
            }(t),
            i = r.getBoundingClientRect(),
            o = Pr(r, "viewBox"),
            a = i.width,
            s = i.height,
            c = n.viewBox || (o ? o.split(" ") : [0, 0, a, s]);
        return {
            el: r,
            viewBox: c,
            x: c[0] / 1,
            y: c[1] / 1,
            w: a,
            h: s,
            vW: c[2],
            vH: c[3]
        }
    }

    function Wr(t, e, n) {
        function r(n) {
            void 0 === n && (n = 0);
            var r = e + n >= 1 ? e + n : 0;
            return t.el.getPointAtLength(r)
        }
        var i = Vr(t.el, t.svg),
            o = r(),
            a = r(-1),
            s = r(1),
            c = n ? 1 : i.w / i.vW,
            u = n ? 1 : i.h / i.vH;
        switch (t.property) {
            case "x":
                return (o.x - i.x) * c;
            case "y":
                return (o.y - i.y) * u;
            case "angle":
                return 180 * Math.atan2(s.y - a.y, s.x - a.x) / Math.PI
        }
    }

    function Gr(t, e) {
        var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
            r = Hr(hr.pth(t) ? t.totalLength : t, e) + "";
        return {
            original: r,
            numbers: r.match(n) ? r.match(n).map(Number) : [0],
            strings: hr.str(t) || e ? r.split(n) : []
        }
    }

    function $r(t) {
        return Er(t ? Sr(hr.arr(t) ? t.map(Ar) : Ar(t)) : [], (function(t, e, n) {
            return n.indexOf(t) === e
        }))
    }

    function Yr(t) {
        var e = $r(t);
        return e.map((function(t, n) {
            return {
                target: t,
                id: n,
                total: e.length,
                transforms: {
                    list: jr(t)
                }
            }
        }))
    }

    function Jr(t, e) {
        var n = Lr(e);
        if (/^spring/.test(n.easing) && (n.duration = pr(n.easing)), hr.arr(t)) {
            var r = t.length;
            2 === r && !hr.obj(t[0]) ? t = {
                value: t
            } : hr.fnc(e.duration) || (n.duration = e.duration / r)
        }
        var i = hr.arr(t) ? t : [t];
        return i.map((function(t, n) {
            var r = hr.obj(t) && !hr.pth(t) ? t : {
                value: t
            };
            return hr.und(r.delay) && (r.delay = n ? 0 : e.delay), hr.und(r.endDelay) && (r.endDelay = n === i.length - 1 ? e.endDelay : 0), r
        })).map((function(t) {
            return Tr(t, n)
        }))
    }

    function Kr(t, e) {
        var n = [],
            r = e.keyframes;
        for (var i in r && (e = Tr(function(t) {
                for (var e = Er(Sr(t.map((function(t) {
                        return Object.keys(t)
                    }))), (function(t) {
                        return hr.key(t)
                    })).reduce((function(t, e) {
                        return t.indexOf(e) < 0 && t.push(e), t
                    }), []), n = {}, r = function(r) {
                        var i = e[r];
                        n[i] = t.map((function(t) {
                            var e = {};
                            for (var n in t) hr.key(n) ? n == i && (e.value = t[n]) : e[n] = t[n];
                            return e
                        }))
                    }, i = 0; i < e.length; i++) r(i);
                return n
            }(r), e)), e) hr.key(i) && n.push({
            name: i,
            tweens: Jr(e[i], t)
        });
        return n
    }

    function Xr(t, e) {
        var n;
        return t.tweens.map((function(r) {
            var i = function(t, e) {
                    var n = {};
                    for (var r in t) {
                        var i = Cr(t[r], e);
                        hr.arr(i) && 1 === (i = i.map((function(t) {
                            return Cr(t, e)
                        }))).length && (i = i[0]), n[r] = i
                    }
                    return n.duration = parseFloat(n.duration), n.delay = parseFloat(n.delay), n
                }(r, e),
                o = i.value,
                a = hr.arr(o) ? o[1] : o,
                s = Or(a),
                c = Rr(e.target, t.name, s, e),
                u = n ? n.to.original : c,
                l = hr.arr(o) ? o[0] : u,
                d = Or(l) || Or(c),
                h = s || d;
            return hr.und(a) && (a = u), i.from = Gr(l, h), i.to = Gr(Br(a, l), h), i.start = n ? n.end : 0, i.end = i.start + i.delay + i.duration + i.endDelay, i.easing = wr(i.easing, i.duration), i.isPath = hr.pth(o), i.isPathTargetInsideSVG = i.isPath && hr.svg(e.target), i.isColor = hr.col(i.from.original), i.isColor && (i.round = 1), n = i, i
        }))
    }
    var Zr = {
        css: function(t, e, n) {
            return t.style[e] = n
        },
        attribute: function(t, e, n) {
            return t.setAttribute(e, n)
        },
        object: function(t, e, n) {
            return t[e] = n
        },
        transform: function(t, e, n, r, i) {
            if (r.list.set(e, n), e === r.last || i) {
                var o = "";
                r.list.forEach((function(t, e) {
                    o += e + "(" + t + ") "
                })), t.style.transform = o
            }
        }
    };

    function Qr(t, e) {
        Yr(t).forEach((function(t) {
            for (var n in e) {
                var r = Cr(e[n], t),
                    i = t.target,
                    o = Or(r),
                    a = Rr(i, n, o, t),
                    s = Br(Hr(r, o || Or(a)), a),
                    c = Nr(i, n);
                Zr[c](i, n, s, t.transforms, !0)
            }
        }))
    }

    function ti(t, e) {
        return Er(Sr(t.map((function(t) {
            return e.map((function(e) {
                return function(t, e) {
                    var n = Nr(t.target, e.name);
                    if (n) {
                        var r = Xr(e, t),
                            i = r[r.length - 1];
                        return {
                            type: n,
                            property: e.name,
                            animatable: t,
                            tweens: r,
                            duration: i.end,
                            delay: r[0].delay,
                            endDelay: i.endDelay
                        }
                    }
                }(t, e)
            }))
        }))), (function(t) {
            return !hr.und(t)
        }))
    }

    function ei(t, e) {
        var n = t.length,
            r = function(t) {
                return t.timelineOffset ? t.timelineOffset : 0
            },
            i = {};
        return i.duration = n ? Math.max.apply(Math, t.map((function(t) {
            return r(t) + t.duration
        }))) : e.duration, i.delay = n ? Math.min.apply(Math, t.map((function(t) {
            return r(t) + t.delay
        }))) : e.delay, i.endDelay = n ? i.duration - Math.max.apply(Math, t.map((function(t) {
            return r(t) + t.duration - t.endDelay
        }))) : e.endDelay, i
    }
    var ni = 0;
    var ri = [],
        ii = function() {
            var t;

            function e(n) {
                for (var r = ri.length, i = 0; i < r;) {
                    var o = ri[i];
                    o.paused ? (ri.splice(i, 1), r--) : (o.tick(n), i++)
                }
                t = i > 0 ? requestAnimationFrame(e) : void 0
            }
            return "undefined" != typeof document && document.addEventListener("visibilitychange", (function() {
                    ai.suspendWhenDocumentHidden && (oi() ? t = cancelAnimationFrame(t) : (ri.forEach((function(t) {
                        return t._onDocumentVisibility()
                    })), ii()))
                })),
                function() {
                    t || oi() && ai.suspendWhenDocumentHidden || !(ri.length > 0) || (t = requestAnimationFrame(e))
                }
        }();

    function oi() {
        return !!document && document.hidden
    }

    function ai(t) {
        void 0 === t && (t = {});
        var e, n = 0,
            r = 0,
            i = 0,
            o = 0,
            a = null;

        function s(t) {
            var e = window.Promise && new Promise((function(t) {
                return a = t
            }));
            return t.finished = e, e
        }
        var c = function(t) {
            var e = xr(or, t),
                n = xr(ar, t),
                r = Kr(n, t),
                i = Yr(t.targets),
                o = ti(i, r),
                a = ei(o, n),
                s = ni;
            return ni++, Tr(e, {
                id: s,
                children: [],
                animatables: i,
                animations: o,
                duration: a.duration,
                delay: a.delay,
                endDelay: a.endDelay
            })
        }(t);
        s(c);

        function u() {
            var t = c.direction;
            "alternate" !== t && (c.direction = "normal" !== t ? "normal" : "reverse"), c.reversed = !c.reversed, e.forEach((function(t) {
                return t.reversed = c.reversed
            }))
        }

        function l(t) {
            return c.reversed ? c.duration - t : t
        }

        function d() {
            n = 0, r = l(c.currentTime) * (1 / ai.speed)
        }

        function h(t, e) {
            e && e.seek(t - e.timelineOffset)
        }

        function f(t) {
            for (var e = 0, n = c.animations, r = n.length; e < r;) {
                var i = n[e],
                    o = i.animatable,
                    a = i.tweens,
                    s = a.length - 1,
                    u = a[s];
                s && (u = Er(a, (function(e) {
                    return t < e.end
                }))[0] || u);
                for (var l = ur(t - u.start - u.delay, 0, u.duration) / u.duration, d = isNaN(l) ? 1 : u.easing(l), h = u.to.strings, f = u.round, p = [], m = u.to.numbers.length, g = void 0, v = 0; v < m; v++) {
                    var y = void 0,
                        b = u.to.numbers[v],
                        w = u.from.numbers[v] || 0;
                    y = u.isPath ? Wr(u.value, d * b, u.isPathTargetInsideSVG) : w + d * (b - w), f && (u.isColor && v > 2 || (y = Math.round(y * f) / f)), p.push(y)
                }
                var _ = h.length;
                if (_) {
                    g = h[0];
                    for (var E = 0; E < _; E++) {
                        h[E];
                        var S = h[E + 1],
                            A = p[E];
                        isNaN(A) || (g += S ? A + S : A + " ")
                    }
                } else g = p[0];
                Zr[i.type](o.target, i.property, g, o.transforms), i.currentValue = g, e++
            }
        }

        function p(t) {
            c[t] && !c.passThrough && c[t](c)
        }

        function m(t) {
            var d = c.duration,
                m = c.delay,
                g = d - c.endDelay,
                v = l(t);
            c.progress = ur(v / d * 100, 0, 100), c.reversePlayback = v < c.currentTime, e && function(t) {
                if (c.reversePlayback)
                    for (var n = o; n--;) h(t, e[n]);
                else
                    for (var r = 0; r < o; r++) h(t, e[r])
            }(v), !c.began && c.currentTime > 0 && (c.began = !0, p("begin")), !c.loopBegan && c.currentTime > 0 && (c.loopBegan = !0, p("loopBegin")), v <= m && 0 !== c.currentTime && f(0), (v >= g && c.currentTime !== d || !d) && f(d), v > m && v < g ? (c.changeBegan || (c.changeBegan = !0, c.changeCompleted = !1, p("changeBegin")), p("change"), f(v)) : c.changeBegan && (c.changeCompleted = !0, c.changeBegan = !1, p("changeComplete")), c.currentTime = ur(v, 0, d), c.began && p("update"), t >= d && (r = 0, c.remaining && !0 !== c.remaining && c.remaining--, c.remaining ? (n = i, p("loopComplete"), c.loopBegan = !1, "alternate" === c.direction && u()) : (c.paused = !0, c.completed || (c.completed = !0, p("loopComplete"), p("complete"), !c.passThrough && "Promise" in window && (a(), s(c)))))
        }
        return c.reset = function() {
            var t = c.direction;
            c.passThrough = !1, c.currentTime = 0, c.progress = 0, c.paused = !0, c.began = !1, c.loopBegan = !1, c.changeBegan = !1, c.completed = !1, c.changeCompleted = !1, c.reversePlayback = !1, c.reversed = "reverse" === t, c.remaining = c.loop, e = c.children;
            for (var n = o = e.length; n--;) c.children[n].reset();
            (c.reversed && !0 !== c.loop || "alternate" === t && 1 === c.loop) && c.remaining++, f(c.reversed ? c.duration : 0)
        }, c._onDocumentVisibility = d, c.set = function(t, e) {
            return Qr(t, e), c
        }, c.tick = function(t) {
            i = t, n || (n = i), m((i + (r - n)) * ai.speed)
        }, c.seek = function(t) {
            m(l(t))
        }, c.pause = function() {
            c.paused = !0, d()
        }, c.play = function() {
            c.paused && (c.completed && c.reset(), c.paused = !1, ri.push(c), d(), ii())
        }, c.reverse = function() {
            u(), c.completed = !c.reversed, d()
        }, c.restart = function() {
            c.reset(), c.play()
        }, c.remove = function(t) {
            ci($r(t), c)
        }, c.reset(), c.autoplay && c.play(), c
    }

    function si(t, e) {
        for (var n = e.length; n--;) kr(t, e[n].animatable.target) && e.splice(n, 1)
    }

    function ci(t, e) {
        var n = e.animations,
            r = e.children;
        si(t, n);
        for (var i = r.length; i--;) {
            var o = r[i],
                a = o.animations;
            si(t, a), a.length || o.children.length || r.splice(i, 1)
        }
        n.length || r.length || e.pause()
    }
    ai.version = "3.2.1", ai.speed = 1, ai.suspendWhenDocumentHidden = !0, ai.running = ri, ai.remove = function(t) {
        for (var e = $r(t), n = ri.length; n--;) {
            ci(e, ri[n])
        }
    }, ai.get = Rr, ai.set = Qr, ai.convertPx = Dr, ai.path = function(t, e) {
        var n = hr.str(t) ? _r(t)[0] : t,
            r = e || 100;
        return function(t) {
            return {
                property: t,
                el: n,
                svg: Vr(n),
                totalLength: Ur(n) * (r / 100)
            }
        }
    }, ai.setDashoffset = function(t) {
        var e = Ur(t);
        return t.setAttribute("stroke-dasharray", e), e
    }, ai.stagger = function(t, e) {
        void 0 === e && (e = {});
        var n = e.direction || "normal",
            r = e.easing ? wr(e.easing) : null,
            i = e.grid,
            o = e.axis,
            a = e.from || 0,
            s = "first" === a,
            c = "center" === a,
            u = "last" === a,
            l = hr.arr(t),
            d = l ? parseFloat(t[0]) : parseFloat(t),
            h = l ? parseFloat(t[1]) : 0,
            f = Or(l ? t[1] : t) || 0,
            p = e.start || 0 + (l ? d : 0),
            m = [],
            g = 0;
        return function(t, e, v) {
            if (s && (a = 0), c && (a = (v - 1) / 2), u && (a = v - 1), !m.length) {
                for (var y = 0; y < v; y++) {
                    if (i) {
                        var b = c ? (i[0] - 1) / 2 : a % i[0],
                            w = c ? (i[1] - 1) / 2 : Math.floor(a / i[0]),
                            _ = b - y % i[0],
                            E = w - Math.floor(y / i[0]),
                            S = Math.sqrt(_ * _ + E * E);
                        "x" === o && (S = -_), "y" === o && (S = -E), m.push(S)
                    } else m.push(Math.abs(a - y));
                    g = Math.max.apply(Math, m)
                }
                r && (m = m.map((function(t) {
                    return r(t / g) * g
                }))), "reverse" === n && (m = m.map((function(t) {
                    return o ? t < 0 ? -1 * t : -t : Math.abs(g - t)
                })))
            }
            return p + (l ? (h - d) / g : d) * (Math.round(100 * m[e]) / 100) + f
        }
    }, ai.timeline = function(t) {
        void 0 === t && (t = {});
        var e = ai(t);
        return e.duration = 0, e.add = function(n, r) {
            var i = ri.indexOf(e),
                o = e.children;

            function a(t) {
                t.passThrough = !0
            }
            i > -1 && ri.splice(i, 1);
            for (var s = 0; s < o.length; s++) a(o[s]);
            var c = Tr(n, xr(ar, t));
            c.targets = c.targets || t.targets;
            var u = e.duration;
            c.autoplay = !1, c.direction = e.direction, c.timelineOffset = hr.und(r) ? u : Br(r, u), a(e), e.seek(c.timelineOffset);
            var l = ai(c);
            a(l), o.push(l);
            var d = ei(o, t);
            return e.delay = d.delay, e.endDelay = d.endDelay, e.duration = d.duration, e.seek(0), e.reset(), e.autoplay && e.play(), e
        }, e
    }, ai.easing = wr, ai.penner = br, ai.random = function(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t
    };
    var ui = ai;
    var li = !1;
    if ("undefined" != typeof window) {
        var di = {
            get passive() {
                li = !0
            }
        };
        window.addEventListener("testPassive", null, di), window.removeEventListener("testPassive", null, di)
    }
    var hi = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1),
        fi = [],
        pi = !1,
        mi = -1,
        gi = void 0,
        vi = void 0,
        yi = function(t) {
            return fi.some((function(e) {
                return !(!e.options.allowTouchMove || !e.options.allowTouchMove(t))
            }))
        },
        bi = function(t) {
            var e = t || window.event;
            return !!yi(e.target) || (e.touches.length > 1 || (e.preventDefault && e.preventDefault(), !1))
        },
        wi = function() {
            void 0 !== vi && (document.body.style.paddingRight = vi, vi = void 0), void 0 !== gi && (document.body.style.overflow = gi, gi = void 0)
        },
        _i = function(t, e) {
            if (t) {
                if (!fi.some((function(e) {
                        return e.targetElement === t
                    }))) {
                    var n = {
                        targetElement: t,
                        options: e || {}
                    };
                    fi = [].concat(function(t) {
                        if (Array.isArray(t)) {
                            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                            return n
                        }
                        return Array.from(t)
                    }(fi), [n]), hi ? (t.ontouchstart = function(t) {
                        1 === t.targetTouches.length && (mi = t.targetTouches[0].clientY)
                    }, t.ontouchmove = function(e) {
                        1 === e.targetTouches.length && function(t, e) {
                            var n = t.targetTouches[0].clientY - mi;
                            !yi(t.target) && (e && 0 === e.scrollTop && n > 0 || function(t) {
                                return !!t && t.scrollHeight - t.scrollTop <= t.clientHeight
                            }(e) && n < 0 ? bi(t) : t.stopPropagation())
                        }(e, t)
                    }, pi || (document.addEventListener("touchmove", bi, li ? {
                        passive: !1
                    } : void 0), pi = !0)) : function(t) {
                        if (void 0 === vi) {
                            var e = !!t && !0 === t.reserveScrollBarGap,
                                n = window.innerWidth - document.documentElement.clientWidth;
                            e && n > 0 && (vi = document.body.style.paddingRight, document.body.style.paddingRight = n + "px")
                        }
                        void 0 === gi && (gi = document.body.style.overflow, document.body.style.overflow = "hidden")
                    }(e)
                }
            } else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")
        },
        Ei = function(t) {
            t ? (fi = fi.filter((function(e) {
                return e.targetElement !== t
            })), hi ? (t.ontouchstart = null, t.ontouchmove = null, pi && 0 === fi.length && (document.removeEventListener("touchmove", bi, li ? {
                passive: !1
            } : void 0), pi = !1)) : fi.length || wi()) : console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")
        },
        Si = n(18),
        Ai = n.n(Si);

    function ki(t) {
        var e = t.onfocus,
            n = document.createElement("div");
        return n.style.cssText = "\n    width: 1px;\n    height: 0px;\n    padding: 0px;\n    overflow: hidden;\n    position: fixed;\n    top: 1px;\n    left: 1px;\n  ", n.onfocus = e, n.setAttribute("tabindex", "0"), n.setAttribute("aria-hidden", "true"), n.setAttribute("data-lockbox", ""), n
    }
    var Li = "active",
        xi = "visible",
        Ti = function(t) {
            var e = t.querySelector("form"),
                n = t.querySelector("[data-input]"),
                r = t.querySelector("[data-close]"),
                i = t.querySelector("[data-results]"),
                o = t.querySelector("[data-settings]"),
                a = function() {};
            r.addEventListener("click", d), t.addEventListener("keydown", l), n.addEventListener("input", u);
            var s = JSON.parse(o.innerHTML),
                c = $n({
                    opts: s
                });

            function u(t) {
                "" === t.target.value && i.classList.remove(xi), (s.show_products || s.show_pages || s.show_articles) && c.query(t.target.value)
            }

            function l(t) {
                27 === t.keyCode && d()
            }

            function d(e) {
                e && e.preventDefault(), t.classList.remove(xi), setTimeout((function() {
                    t.classList.remove(Li), Ei(t), a()
                }), 350)
            }
            return c.on("success", (function(t) {
                var e = t.markup;
                i.classList.add(xi), i.innerHTML = e
            })), {
                open: function() {
                    t.classList.add(Li), setTimeout((function() {
                        a = function(t) {
                            if (t) {
                                var e, n, r = document.activeElement,
                                    i = Ai()(t);
                                if (!t.querySelector("[data-lockbox]")) {
                                    e = ki({
                                        onfocus: function() {
                                            var t = i[i.length - 1];
                                            t && t.focus()
                                        }
                                    }), n = ki({
                                        onfocus: function() {
                                            var t = i[0];
                                            t && t.focus()
                                        }
                                    }), t.insertBefore(e, t.children[0]), t.appendChild(n);
                                    var o = i[0];
                                    o && o.focus()
                                }
                                return function() {
                                    t.removeChild(e), t.removeChild(n), r.focus()
                                }
                            }
                        }(e), _i(t), t.classList.add(xi), n.focus()
                    }), 50)
                },
                close: d,
                destroy: function() {
                    d(), r.addEventListener("click", d), t.removeEventListener("keydown", l), n.removeEventListener("input", u)
                }
            }
        },
        qi = "[data-overlay]",
        Oi = "[data-list-item]",
        Ci = "[data-item]",
        Pi = "[data-all-links]",
        Di = "[data-main]",
        Ii = "[data-primary-container]",
        Ni = "[data-footer]",
        ji = "[data-close-drawer]",
        Mi = ".drawer-menu__form",
        Ri = "[data-locale-input]",
        Bi = "[data-currency-input]",
        Hi = "[data-quick-search]",
        zi = "active",
        Fi = "visible",
        Ui = function(t) {
            return ui({
                targets: t,
                translateX: [40, 0],
                opacity: [0, 1],
                easing: "cubicBezier(.5, .05, .1, .3)",
                duration: 180,
                delay: ui.stagger(80, {
                    start: 250
                }),
                complete: function() {
                    t.forEach((function(t) {
                        return t.style.removeProperty("transform")
                    }))
                }
            })
        },
        Vi = function(t) {
            return t + 8 + "px"
        },
        Wi = function(t) {
            var e = 0,
                n = 0,
                r = Nt(t, {
                    allowOutsideClick: !0
                }),
                i = t.querySelector(qi);
            i.addEventListener("click", y);
            var o = t.querySelector(Hi),
                a = Ti(o),
                s = t.querySelector("[data-search]");
            s.addEventListener("click", g);
            var c = t.querySelector(Pi),
                u = t.querySelector(Di),
                l = t.querySelector(Ii),
                d = t.querySelector(Mi),
                h = t.querySelector(Ri),
                f = t.querySelector(Bi),
                p = t.querySelector(ji);
            p.addEventListener("click", y);
            var m = t.querySelectorAll(Ci);

            function g(t) {
                t.preventDefault(), a.open()
            }

            function v(t) {
                switch (t.preventDefault(), t.currentTarget.dataset.item) {
                    case "link":
                        y(), window.location = t.currentTarget.href;
                        break;
                    case "parent":
                        ! function(t) {
                            t.preventDefault();
                            var e = t.currentTarget.nextElementSibling;
                            e.classList.add(Fi), u.style.height = Vi(e.offsetHeight);
                            var r = e.querySelectorAll(":scope > ".concat(Oi));
                            Ui(r), b(n += 1)
                        }(t);
                        break;
                    case "back":
                        ! function(t) {
                            t.preventDefault();
                            var e = t.currentTarget.closest(Oi).closest("ul");
                            u.style.height = Vi(e.offsetHeight), t.currentTarget.closest("ul").classList.remove(Fi), b(n -= 1)
                        }(t);
                        break;
                    case "secondary":
                        ! function(t) {
                            t.preventDefault(), w(1);
                            var e = t.currentTarget.nextElementSibling;
                            e.classList.add(Fi);
                            var n = e.querySelectorAll(":scope > ".concat(Oi));
                            Ui(n)
                        }(t);
                        break;
                    case "secondaryHeading":
                        ! function(t) {
                            t.preventDefault(), w(0), t.currentTarget.closest("ul").classList.remove(Fi)
                        }(t);
                        break;
                    case "locale":
                        S(t);
                        break;
                    case "currency":
                        A(t)
                }
            }

            function y(e) {
                e && e.preventDefault(), r.deactivate(), t.classList.remove(Fi), setTimeout((function() {
                    t.classList.remove(zi), Ei(t)
                }), 350)
            }

            function b(t) {
                n = t, l.setAttribute("data-depth", t)
            }

            function w(t) {
                e = t, c.setAttribute("data-depth", t)
            }

            function _(t, e) {
                var n = t.currentTarget.dataset.value;
                e.value = n, y(), d.submit()
            }

            function E(e) {
                t.classList.contains(Fi) && ("Escape" == e.key || 27 === e.keyCode && drawerOpen) && y()
            }
            m.forEach((function(t) {
                return t.addEventListener("click", v)
            }));
            var S = function(t) {
                    return _(t, h)
                },
                A = function(t) {
                    return _(t, f)
                };
            return window.addEventListener("keydown", E), {
                close: y,
                destroy: function() {
                    i.removeEventListener("click", y), p.removeEventListener("click", y), s.removeEventListener("click", g), m.forEach((function(t) {
                        return t.removeEventListener("click", v)
                    })), Ei(t), window.removeEventListener("keydown", E)
                },
                open: function() {
                    t.classList.add(zi), setTimeout((function() {
                        r.activate(), t.classList.add(Fi), _i(t, {
                            allowTouchMove: function(t) {
                                for (; t && t !== document.body;) {
                                    if (null !== t.getAttribute("scroll-lock-ignore")) return !0;
                                    t = t.parentNode
                                }
                            }
                        });
                        var i = t.querySelectorAll("".concat(Ii, " > ").concat(Oi, ", ").concat(Ni, " > li, ").concat(Ni, " > form > li"));
                        0 === e && 0 === n && (u.style.height = Vi(l.offsetHeight), Ui(i))
                    }), 50)
                }
            }
        },
        Gi = ".js-cart-count",
        $i = ".js-cart-drawer-toggle",
        Yi = ".quick-cart__indicator-inner",
        Ji = ".header__icon--currency",
        Ki = ".header__icon--language",
        Xi = "[data-disclosure]",
        Zi = "[data-drawer-menu]";
    we("header", {
        crossBorder: {},
        onLoad: function() {
            var t = this,
                e = document.querySelector(Zi);
            this.menu = Wi(e), this.menuButton = this.container.querySelector("#mobile-nav");
            var n = this.container.querySelector(Gi),
                r = this.container.querySelectorAll($i);
            this.navigation = En(this.container), this.navigationCloseHandler = Y("navitem:closeOthers", (function() {
                t.navigation.closeAll()
            })), this.menuButton.addEventListener("click", this._openMenu.bind(this)), Y("cart:updated", (function(t) {
                var e = n.querySelector(Yi);
                e.innerHTML = t.cart.item_count, e.classList.toggle("quick-cart--cart-has-item", t.cart.item_count)
            }));
            for (var i = 0; i < r.length; i++) r[i].addEventListener("click", (function(t) {
                t.preventDefault(), J("cart:toggle", (function(t) {
                    return {
                        cartOpen: !t.cartOpen
                    }
                }))
            }));
            this.quickSearch = this.container.querySelector(".quick-search"), this.predictiveSearch = ir({
                container: this.quickSearch
            }), this._initDisclosure()
        },
        _openMenu: function(t) {
            t.preventDefault(), this.menu.open()
        },
        _showHeaderOverlay: function(t) {
            "true" === t.target.ariaExpanded ? J("headerOverlay:show") : J("headerOverlay:hide")
        },
        _initDisclosure: function() {
            var t = this.container.querySelector(Ki),
                e = this.container.querySelector(Ji);
            if (t) {
                this.languageTrigger = t.querySelector(Xi);
                var n = this.languageTrigger.dataset.disclosure;
                this.crossBorder[n] = un(this.languageTrigger, t), this.languageTrigger.addEventListener("click", this._showHeaderOverlay)
            }
            if (e) {
                this.currencyTrigger = e.querySelector(Xi);
                var r = this.currencyTrigger.dataset.disclosure;
                this.crossBorder[r] = un(this.currencyTrigger, e), this.currencyTrigger.addEventListener("click", this._showHeaderOverlay)
            }
        },
        onSelect: function() {
            J("sticky-header:reload", (function() {}))
        },
        onBlockSelect: function(t) {
            t.target
        },
        onUnload: function() {
            var t = this;
            this.menu.destroy(), this.predictiveSearch.unload(), this.navigation.unload(), this.navigationCloseHandler(), this.currencyTrigger && this.currencyTrigger.removeEventListener("click", this._showHeaderOverlay), this.languageTrigger && this.languageTrigger.removeEventListener("click", this._showHeaderOverlay), Object.keys(this.crossBorder).forEach((function(e) {
                t.crossBorder[e].unload()
            }))
        }
    });
    var Qi = n(5),
        to = n.n(Qi),
        eo = function() {
            return JSON.parse(localStorage.getItem("exitIntent"))
        },
        no = function(t) {
            return localStorage.setItem("exitIntent", t)
        };
    we("exit-intent", {
        onLoad: function() {
            var t = this;
            this.closeBtn = this.container.querySelector("[data-close-icon]");
            var e = parseInt(this.container.dataset.mobileLandingTimeout);
            eo() || (to()() ? setTimeout((function() {
                t.showPopup()
            }), e) : document.body.addEventListener("mouseout", (function e(n) {
                n.relatedTarget || n.toElement || (t.showPopup(), document.body.removeEventListener("mouseout", e))
            })), this.closeBtn.addEventListener("click", (function(e) {
                e.preventDefault(), t.hidePopup(), no(!0)
            })))
        },
        showPopup: function() {
            var t = this;
            this.container.classList.add("animating"), setTimeout((function() {
                t.container.classList.add("visible")
            }), 250)
        },
        hidePopup: function() {
            var t = this;
            this.container.classList.remove("visible"), this.container.classList.add("hidden"), setTimeout((function() {
                t.container.classList.remove("animating")
            }), 250)
        },
        onSelect: function() {
            this.showPopup()
        },
        onDeselect: function() {
            this.hidePopup()
        },
        onUnload: function() {
            this.closeBtn.removeEventListener("click", close)
        }
    });
    var ro = n(2),
        io = n.n(ro),
        oo = n(1),
        ao = n.n(oo),
        so = function(t) {
            var e = [];
            ! function n() {
                var r = e.filter((function(t) {
                    var e = t.el.clientHeight;
                    if (t.size.height !== e) return t.size.height = e, !0
                })).map((function(t) {
                    return t.el
                }));
                r.length > 0 && t(r), window.requestAnimationFrame(n)
            }();
            return {
                unload: function() {
                    e = []
                },
                observe: function(t) {
                    if (!e.some((function(e) {
                            return e.el === t
                        }))) {
                        var n = {
                            el: t,
                            size: {
                                height: t.clientHeight
                            }
                        };
                        e.push(n)
                    }
                },
                unobserve: function(t) {
                    e = e.filter((function(e) {
                        return e.el !== t
                    }))
                }
            }
        };

    function co(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function uo(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? co(Object(n), !0).forEach((function(e) {
                io()(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : co(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }
    var lo = {
            adaptiveHeight: !1,
            pageDots: !1,
            prevNextButtons: !1,
            wrapAround: !0,
            draggable: !1
        },
        ho = ".announcement-bar",
        fo = "is-active",
        po = "--announcement-height";
    we("announcement-bar", {
        onLoad: function() {
            this.announcements = this.container.querySelectorAll(ho);
            var t = this.container.dataset.timing;
            lo.autoPlay = parseInt(t), this._init(), this._setAnnouncementVars()
        },
        _init: function() {
            var t = this;
            this.slideshow = new ao.a(this.container, uo(uo({}, lo), {}, {
                on: {
                    ready: function() {
                        t._setAnnouncementVars()
                    },
                    change: function(e) {
                        t.announcements.forEach((function(t, n) {
                            t.classList.toggle(fo, n === e)
                        }))
                    }
                }
            })), this.resizeObserver = so((function() {
                J("sticky-header:reload", (function() {})), t._setRootVar(po, t.container.offsetHeight)
            })), this.resizeObserver.observe(this.container)
        },
        _setRootVar: function(t, e) {
            document.documentElement.style.setProperty(t, "".concat(e, "px"))
        },
        _setAnnouncementVars: function() {
            this._setRootVar(po, this.announcements.length ? this.container.offsetHeight : 0)
        },
        onSelect: function() {
            J("sticky-header:reload", (function() {})), this._setAnnouncementVars()
        },
        onBlockSelect: function(t) {
            var e = t.target;
            this.slideshow.pausePlayer(), this.slideshow.select(e.dataset.index)
        },
        onBlockDeselect: function() {
            this.slideshow.unpausePlayer()
        },
        onUnload: function() {
            this.slideshow.destroy(), this.resizeObserver.disconnect()
        }
    });
    var mo = function() {
            return window.matchMedia("(max-width: 38em)").matches
        },
        go = function() {
            return window.matchMedia("(min-width: 60em)").matches
        };

    function vo(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function yo(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? vo(Object(n), !0).forEach((function(e) {
                io()(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : vo(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }
    var bo = io()({
            carousel: "[data-carousel]",
            slides: ".carousel__slide",
            carouselWraps: "carousel--columns-wrap-around",
            textBlock: ".text-block",
            nextButton: ".carousel__next-button",
            previousButton: ".carousel__previous-button"
        }, "textBlock", ".text-block"),
        wo = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = e.carouselPosition,
                r = void 0 === n ? "bottom" : n,
                i = null,
                o = t.dataset,
                a = o.textPosition,
                s = o.textAlignment,
                c = "middle" === a,
                u = t.classList.contains(bo.carouselWraps),
                l = t.querySelector(bo.previousButton),
                d = t.querySelector(bo.nextButton),
                h = t.querySelector(bo.carousel),
                f = t.querySelectorAll(bo.slides),
                p = t.querySelector(bo.textBlock),
                m = function() {
                    var t = {
                        adaptiveHeight: !1,
                        wrapAround: !1,
                        contain: !0,
                        cellAlign: "left",
                        prevNextButtons: !1,
                        pageDots: !1,
                        initialIndex: 0
                    };
                    u ? t.wrapAround = !0 : u || "right" != s || (t.initialIndex = f.length - 1, t.cellAlign = "right"), i = new ao.a(h, yo(yo({}, t), {}, {
                        on: {
                            ready: function() {
                                y()
                            },
                            scroll: function(t) {
                                c && g(t), u || v(t)
                            }
                        }
                    })), i.resize(), setTimeout((function() {
                        b(i.size.height)
                    }), 1e3)
                },
                g = function(t) {
                    if (p) {
                        var e = 100 * t;
                        "left" == s ? p.classList.toggle("out-of-view", e > 1) : "right" == s && p.classList.toggle("out-of-view", e < 99)
                    }
                },
                v = function(t) {
                    var e = 100 * t;
                    l.disabled = e < 1, d.disabled = e > 99
                },
                y = function() {
                    l.addEventListener("click", _), d.addEventListener("click", w), u || "right" != s ? u || (l.disabled = !0) : d.disabled = !0
                },
                b = function(e) {
                    var n = e / 2 - d.clientHeight / 2 + parseFloat(window.getComputedStyle(t).getPropertyValue("padding-top"));
                    d.style[r] = "".concat(n, "px"), l.style[r] = "".concat(n, "px"), d.classList.remove("hidden"), l.classList.remove("hidden")
                },
                w = function() {
                    i.next()
                },
                _ = function() {
                    i.previous()
                };
            m();
            var E = function() {
                    i.destroy(), l.removeEventListener("click", _), d.removeEventListener("click", w)
                },
                S = function(t) {
                    i.select(t)
                };
            return {
                unload: E,
                goToSlide: S
            }
        },
        _o = function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                r = !1,
                i = 0,
                o = 0,
                a = null;
            e && (a = ui({
                targets: e,
                opacity: io()({
                    value: 1,
                    duration: 1e3,
                    delay: ui.stagger(200),
                    easing: "easeInOutSine"
                }, "delay", n),
                autoplay: !1
            }));
            var s = {
                    root: null,
                    rootMargin: "0px",
                    threshold: 0
                },
                c = new IntersectionObserver(u, s);

            function u(e) {
                e.forEach((function(e) {
                    var n = e.boundingClientRect.y,
                        a = e.intersectionRatio,
                        s = e.isIntersecting;
                    s && !r && (r = !0, l()), n < i ? a > o && s && l() : n > i && !s && a < o && t.classList.remove("in-view"), i = n, o = a
                }))
            }

            function l() {
                a && a.play(), t.classList.add("in-view"), c.disconnect()
            }
            c.observe(t);
            var d = function() {
                c.disconnect()
            };
            return {
                unload: d
            }
        },
        Eo = {
            carousel: "[data-carousel]",
            animatedSlides: ".animates"
        };

    function So() {
        this.entries = []
    }

    function Ao(t, e) {
        ko(t);
        var n = function(t, e) {
            ko(t),
                function(t) {
                    if (!Array.isArray(t)) throw new TypeError(t + " is not an array.");
                    if (0 === t.length) return [];
                    if (!t[0].hasOwnProperty("name")) throw new Error(t[0] + "does not contain name key.");
                    if ("string" != typeof t[0].name) throw new TypeError("Invalid value type passed for name of option " + t[0].name + ". Value should be string.")
                }(e);
            var n = [];
            return e.forEach((function(e) {
                for (var r = 0; r < t.options.length; r++)
                    if (t.options[r].name.toLowerCase() === e.name.toLowerCase()) {
                        n[r] = e.value;
                        break
                    }
            })), n
        }(t, e);
        return function(t, e) {
            return ko(t),
                function(t) {
                    if (Array.isArray(t) && "object" == typeof t[0]) throw new Error(t + "is not a valid array of options.")
                }(e), t.variants.filter((function(t) {
                    return e.every((function(e, n) {
                        return t.options[n] === e
                    }))
                }))[0] || null
        }(t, n)
    }

    function ko(t) {
        if ("object" != typeof t) throw new TypeError(t + " is not an object.");
        if (0 === Object.keys(t).length && t.constructor === Object) throw new Error(t + " is empty.")
    }
    we("blog-posts", {
        onLoad: function() {
            this.animatedSlides = this.container.querySelectorAll(Eo.animatedSlides), this.carouselContainer = this.container.querySelector(Eo.carouselContainer), this.animatedSlides.length > 1 && (this.carousel = wo(this.container)), this.animatedSlides.length && (this.scrollAnimation = _o(this.container, this.animatedSlides))
        },
        onUnload: function() {
            this.carousel && this.carousel.unload(), this.animatedSlides.length && this.scrollAnimation.unload()
        }
    }), So.prototype.add = function(t, e, n) {
        this.entries.push({
            element: t,
            event: e,
            fn: n
        }), t.addEventListener(e, n)
    }, So.prototype.removeAll = function() {
        this.entries = this.entries.filter((function(t) {
            return t.element.removeEventListener(t.event, t.fn), !1
        }))
    };
    var Lo = '[name="id"]',
        xo = '[name^="options"]',
        To = '[name="quantity"]',
        qo = '[name^="properties"]';

    function Oo(t, e) {
        return /variant=/.test(t) ? t.replace(/(variant=)[^&]+/, "$1" + e) : /\?/.test(t) ? t.concat("&variant=").concat(e) : t.concat("?variant=").concat(e)
    }

    function Co(t, e, n) {
        this.element = t, this.product = function(t) {
            if ("object" != typeof t) throw new TypeError(t + " is not an object.");
            if (void 0 === t.variants[0].options) throw new TypeError("Product object is invalid. Make sure you use the product object that is output from {{ product | json }} or from the http://[your-product-url].js route");
            return t
        }(e), n = n || {}, this._listeners = new So, this._listeners.add(this.element, "submit", this._onSubmit.bind(this, n)), this.optionInputs = this._initInputs(xo, n.onOptionChange), this.quantityInputs = this._initInputs(To, n.onQuantityChange), this.propertyInputs = this._initInputs(qo, n.onPropertyChange)
    }
    Co.prototype.destroy = function() {
        this._listeners.removeAll()
    }, Co.prototype.options = function() {
        return t = this.optionInputs, e = function(t) {
            return t.name = /(?:^(options\[))(.*?)(?:\])/.exec(t.name)[2], t
        }, t.reduce((function(t, n) {
            return (n.checked || "radio" !== n.type && "checkbox" !== n.type) && t.push(e({
                name: n.name,
                value: n.value
            })), t
        }), []);
        var t, e
    }, Co.prototype.variant = function() {
        return Ao(this.product, this.options())
    }, Co.prototype.properties = function() {
        var t, e, n = (t = this.propertyInputs, e = function(t) {
            return /(?:^(properties\[))(.*?)(?:\])/.exec(t)[2]
        }, t.reduce((function(t, n) {
            return (n.checked || "radio" !== n.type && "checkbox" !== n.type) && (t[e(n.name)] = n.value), t
        }), {}));
        return 0 === Object.entries(n).length ? null : n
    }, Co.prototype.quantity = function() {
        return this.quantityInputs[0] ? Number.parseInt(this.quantityInputs[0].value, 10) : 1
    }, Co.prototype._setIdInputValue = function(t) {
        var e = this.element.querySelector(Lo);
        e || ((e = document.createElement("input")).type = "hidden", e.name = "id", this.element.appendChild(e)), e.value = t.toString()
    }, Co.prototype._onSubmit = function(t, e) {
        e.dataset = this._getProductFormEventData(), this._setIdInputValue(e.dataset.variant.id), t.onFormSubmit && t.onFormSubmit(e)
    }, Co.prototype._onFormEvent = function(t) {
        return void 0 === t ? Function.prototype : function(e) {
            e.dataset = this._getProductFormEventData(), t(e)
        }.bind(this)
    }, Co.prototype._initInputs = function(t, e) {
        return Array.prototype.slice.call(this.element.querySelectorAll(t)).map(function(t) {
            return this._listeners.add(t, "change", this._onFormEvent(e)), t
        }.bind(this))
    }, Co.prototype._getProductFormEventData = function() {
        return {
            options: this.options(),
            variant: this.variant(),
            properties: this.properties(),
            quantity: this.quantity()
        }
    };
    var Po = n(19),
        Do = n.n(Po),
        Io = '[name^="options"]',
        No = '[name="quantity"]',
        jo = '[name^="properties"]',
        Mo = {
            variantSelector: '[name="id"]'
        };

    function Ro(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = Object.assign({}, Mo, n),
            i = Bo(e),
            o = [],
            a = function(t, e, n) {
                t.addEventListener(e, n, !0), o.push({
                    element: t,
                    action: e,
                    func: n
                })
            },
            s = function() {
                return Ho(g, (function(t) {
                    return t.name = /(?:^(options\[))(.*?)(?:\])/.exec(t.name)[2], t
                }))
            },
            c = function() {
                return Ao(i, s())
            },
            u = function() {
                var t = zo(y, (function(t) {
                    return /(?:^(properties\[))(.*?)(?:\])/.exec(t)[2]
                }));
                return 0 === Object.entries(t).length ? null : t
            },
            l = function() {
                return v[0] ? Number.parseInt(v[0].value, 10) : 1
            },
            d = function() {
                return {
                    options: s(),
                    variant: c(),
                    properties: u(),
                    quantity: l()
                }
            },
            h = function(t) {
                if (void 0 !== t) return function(e) {
                    e.dataset = d(), t(e)
                }
            },
            f = function(e) {
                var n = t.querySelector(r.variantSelector);
                n || ((n = document.createElement("input")).type = "hidden", n.name = "id", t.appendChild(n)), n.value = e.toString()
            },
            p = function(t) {
                t.dataset = d(), f(t.dataset.variant.id), r.onFormSubmit && r.onFormSubmit(t)
            },
            m = function(e, n) {
                return Gt()(t.querySelectorAll(e)).map((function(t) {
                    return a(t, "change", h(n)), t
                }))
            };
        a(t, "submit", p);
        var g = m(Io, r.onOptionChange),
            v = m(No, r.onQuantityChange),
            y = m(jo, r.onPropertyChange),
            b = function() {
                o.forEach((function(t) {
                    t.element.removeEventListener(t.action, t.function)
                }))
            };
        return {
            getVariant: c,
            destroy: b
        }
    }

    function Bo(t) {
        if ("object" !== Do()(t)) throw new TypeError(t + " is not an object.");
        if (void 0 === t.variants[0].options) throw new TypeError("Product object is invalid. Make sure you use the product object that is output from {{ product | json }} or from the http://[your-product-url].js route");
        return t
    }

    function Ho(t, e) {
        return t.reduce((function(t, n) {
            return (n.checked || "radio" !== n.type && "checkbox" !== n.type) && t.push(e({
                name: n.name,
                value: n.value
            })), t
        }), [])
    }

    function zo(t, e) {
        return t.reduce((function(t, n) {
            return (n.checked || "radio" !== n.type && "checkbox" !== n.type) && (t[e(n.name)] = n.value), t
        }), {})
    }
    var Fo = n(8),
        Uo = n.n(Fo),
        Vo = "[data-store-availability-drawer-trigger]",
        Wo = "[data-store-availability-list-content]",
        Go = function(t, e, n) {
            var r = null,
                i = n,
                o = new Uo.a(t),
                a = function(e) {
                    i = e;
                    var n = "".concat(t.dataset.baseUrl, "/variants/").concat(e.id, "/?section_id=store-availability");
                    t.innerHTML = "", fetch(n).then((function(t) {
                        return t.text()
                    })).then((function(e) {
                        "" !== e.trim() && (t.innerHTML = e, t.innerHTML = t.firstElementChild.innerHTML, r = _(Wo, t))
                    }))
                };
            a(n), o.on("click", Vo, (function(t) {
                t.preventDefault(), J("availability:showMore", (function() {
                    return {
                        product: e,
                        variant: i,
                        storeList: r
                    }
                }))
            }));
            return {
                unload: function() {
                    t.innerHTML = ""
                },
                update: a
            }
        },
        $o = theme.strings.products,
        Yo = "hide",
        Jo = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.dataset,
                r = n.productHandle,
                i = n.ajaxEnabled,
                o = Zt,
                a = t.querySelector(o.storeAvailability),
                s = function(e) {
                    if ("true" === i) {
                        e.preventDefault();
                        var n = e.dataset,
                            r = (n.variant, n.properties, n.quantity, t.querySelector(o.addButton));
                        r.classList.add("bttn--loading"), fe(t).then((function() {
                            r.classList.remove("bttn--loading")
                        }))
                    }
                },
                c = {
                    isProductPage: !1,
                    isFeaturedProduct: !1,
                    onOptionChange: function(t) {
                        return y(t)
                    },
                    onFormSubmit: s,
                    container: t
                },
                u = Object.assign(c, e),
                l = u.isProductPage,
                d = u.isFeaturedProduct,
                h = u.onOptionChange,
                f = u.onFormSubmit,
                p = u.container,
                m = null,
                g = null,
                v = be(r);
            v((function(e) {
                m = Ro(t, e, {
                    variantSelector: "#variant-selector",
                    onOptionChange: h,
                    onFormSubmit: f
                }), l && Be(e);
                var n = m.getVariant();
                a && n && (g = Go(a, e, n))
            }));
            var y = function(e) {
                    var n = e.dataset.variant;
                    if (!n) return te(t), b(n), void(g && a && g.unload());
                    var r = Oo(window.location.href, n.id);
                    if (window.history.replaceState({
                            path: r
                        }, "", r), b(n), t.querySelector("".concat(o.variantSelect, " ").concat(o.optionById(n.id))).selected = !0, t.dispatchEvent(new Event("change")), te(t, n), Le(p, n), l && n.featured_media)
                        if (window.matchMedia("(min-width: 60em)").matches) {
                            var i = document.querySelector('[data-media-id="'.concat(n.featured_media.id, '"]'));
                            if (document.querySelector(".product-thumbnails")) {
                                var s = document.querySelector('[data-thumbnail-id="'.concat(n.featured_media.id, '"]')),
                                    c = document.querySelectorAll(".product-thumbnails__item-link"),
                                    u = document.querySelectorAll(".media-wrapper");
                                c.forEach((function(t) {
                                    return t.classList.remove("active")
                                })), u.forEach((function(t) {
                                    return t.classList.add("hidden")
                                })), i && i.classList.remove("hidden"), s && s.classList.add("active")
                            } else i && i.scrollIntoView({
                                behavior: "smooth"
                            })
                        } else J("product:mediaSelect", (function() {
                            return {
                                selectedMedia: n.featured_media.position - 1
                            }
                        }));
                    d && n.featured_media && (p.querySelectorAll("[data-media-id]").forEach((function(t) {
                        t.classList.add("hidden")
                    })), p.querySelector('[data-media-id="'.concat(n.featured_media.id, '"]')).classList.remove("hidden"));
                    (g && d || g && l) && g.update(n)
                },
                b = function(e) {
                    var n = p || t,
                        r = n.querySelectorAll(o.price),
                        i = n.querySelectorAll(o.comparePrice),
                        a = $o.product.unavailable;
                    if (!e) return r.forEach((function(t) {
                        return t.innerHTML = a
                    })), i.forEach((function(t) {
                        return t.innerHTML = ""
                    })), void i.forEach((function(t) {
                        return t.classList.add(Yo)
                    }));
                    r.forEach((function(t) {
                        return t.innerHTML = ye(e.price)
                    })), e.compare_at_price > e.price ? (i.forEach((function(t) {
                        return t.innerHTML = ye(e.compare_at_price)
                    })), i.forEach((function(t) {
                        return t.classList.remove(Yo)
                    }))) : (i.forEach((function(t) {
                        return t.innerHTML = ""
                    })), i.forEach((function(t) {
                        return t.classList.add(Yo)
                    })))
                },
                w = function() {
                    m.destroy()
                };
            return {
                unload: w
            }
        },
        Ko = Zt,
        Xo = function(t) {
            var e = t.querySelector(".product-item__images"),
                n = t.querySelector(".quick-shop"),
                r = t.querySelector(".product-item__quick-shop-button"),
                i = null;

            function o(t) {
                t.target.querySelector(".not-first").classList.add("visible")
            }

            function a(t) {
                t.target.querySelector(".not-first").classList.remove("visible")
            }

            function s(t) {
                t.preventDefault();
                var e, r = n.querySelector(Ko.form),
                    o = r.dataset.productHandle;
                (e = o, function(t) {
                    return fetch("/products/".concat(e, ".js")).then((function(t) {
                        return t.json()
                    })).then((function(e) {
                        return t(e)
                    })).catch((function(t) {
                        return console.log(t.message)
                    }))
                })((function(t) {
                    Jo(r, {
                        onOptionChange: function(t) {
                            return function(t) {
                                var e = t.dataset.variant;
                                if (!e) return te(n), void ie(n, e);
                                n.querySelector("".concat(Ko.variantSelect, " ").concat(Ko.optionById(e.id))).selected = !0, e.featured_media ? ae(n, e.featured_image.src) : ae(n, i), ie(n, e), te(n, e), Le(n, e)
                            }(t)
                        }
                    }), i = t.featured_image, J("cart:toggle", (function(t) {
                        return {
                            cartOpen: !t.cartOpen,
                            quickShopProduct: n
                        }
                    }))
                }))
            }
            e && (e.addEventListener("mouseover", o), e.addEventListener("mouseout", a)), r && r.addEventListener("click", s);
            return {
                unload: function() {
                    e && (e.removeEventListener("mouseover", o), e.removeEventListener("mouseout", a)), r && r.removeEventListener("click", s)
                }
            }
        },
        Zo = function(t, e) {
            var n = Gt()(e),
                r = t.dataset,
                i = r.textPosition,
                o = r.textAlignment,
                a = "top" === i;
            return t.classList.contains("carousel--columns-wrap-around") && a ? n.unshift(n.pop()) : a || "right" != o || n.reverse(), n
        },
        Qo = {
            carousel: "[data-carousel]",
            animatedSlides: ".animates",
            products: ".product-item"
        };
    we("collection-list", {
        onLoad: function() {
            var t = this;
            this.animatedSlides = this.container.querySelectorAll(Qo.animatedSlides), this.carouselContainer = this.container.querySelector(Qo.carouselContainer), this.carousel = wo(this.container);
            var e = this.container.querySelectorAll(Qo.products);
            this.productItems = [], e.forEach((function(e) {
                t.productItems.push(Xo(e))
            })), this.animatedSlides.length && this._initScrollAnimation(Zo(this.container, this.animatedSlides))
        },
        _initScrollAnimation: function(t) {
            var e = "top" === this.container.dataset.textPosition ? 0 : 750;
            this.scrollAnimation = _o(this.container, t, e)
        },
        onBlockSelect: function(t) {
            var e = t.target;
            this.carousel.goToSlide(e.dataset.index)
        },
        onUnload: function() {
            this.carousel.unload(), this.productItems.forEach((function(t) {
                return t.unload()
            })), this.animatedSlides.length && this.scrollAnimation.unload()
        }
    });
    var ta = ".animates";
    we("collection-list-grid", {
        onLoad: function() {
            this.animatedItems = this.container.querySelectorAll(ta), this.animatedItems.length && (this.scrollAnimation = _o(this.container, this.animatedItems))
        },
        onUnload: function() {
            this.animatedItems.length && this.scrollAnimation.unload()
        }
    }), we("custom-content", {
        onLoad: function() {},
        onUnload: function() {}
    });
    var ea = ".featured-collection__slides",
        na = ".animates",
        ra = ".product-item";
    we("featured-collection", {
        onLoad: function() {
            var t = this;
            this.animatedSlides = this.container.querySelectorAll(na), this.carouselContainer = this.container.querySelector(ea), this.carousel = wo(this.container);
            var e = this.container.querySelectorAll(ra);
            this.productItems = [], e.forEach((function(e) {
                t.productItems.push(Xo(e))
            })), this.animatedSlides.length && this._initScrollAnimation(Zo(this.container, this.animatedSlides))
        },
        _initScrollAnimation: function(t) {
            var e = "top" === this.container.dataset.textPosition ? 0 : 750;
            this.scrollAnimation = _o(this.container, t, e)
        },
        onBlockSelect: function(t) {
            var e = t.target;
            this.carousel.goToSlide(e.dataset.index)
        },
        onUnload: function() {
            this.carousel.unload(), this.productItems.forEach((function(t) {
                return t.unload()
            })), this.animatedSlides.length && this.scrollAnimation.unload()
        }
    });
    var ia = ".product-item",
        oa = ".animates";

    function aa(t) {
        var e = window,
            n = e.Shopify,
            r = e.YT,
            i = E("[data-interactive]", t);
        if (i.length) {
            var o = ["video", "model", "external_video"],
                a = null,
                s = !1,
                c = {};
            return s && i.forEach(u), window.Shopify.loadFeatures([{
                name: "model-viewer-ui",
                version: "1.0"
            }, {
                name: "shopify-xr",
                version: "1.0"
            }, {
                name: "video-ui",
                version: "1.0"
            }], (function() {
                s = !0, "YT" in window && Boolean(r.loaded) ? i.forEach(u) : window.onYouTubeIframeAPIReady = function() {
                    i.forEach(u)
                }
            })), {
                pauseActiveMedia: l
            }
        }

        function u(t) {
            var e = t.dataset,
                i = e.mediaId,
                s = e.mediaType;
            if (s && o.includes(s) && !Object.keys(c).includes(i)) {
                var u = {
                    id: i,
                    type: s,
                    container: t,
                    media: t.children[0]
                };
                switch (u.type) {
                    case "video":
                        u.player = new n.Plyr(u.media, {
                            loop: {
                                active: "true" == t.dataset.loop
                            }
                        });
                        break;
                    case "external_video":
                        u.player = new r.Player(u.media);
                        break;
                    case "model":
                        u.viewer = new n.ModelViewerUI(_("model-viewer", t)), k(_(".model-poster", t), "click", (function(t) {
                            t.preventDefault(),
                                function(t) {
                                    l(t), t.viewer.play(), x(t.container, "model-active"), a = t, setTimeout((function() {
                                        _("model-viewer", t.container).focus()
                                    }), 300)
                                }(u)
                        }))
                }
                c[i] = u, u.player && ("video" === u.type ? u.player.on("playing", (function() {
                    l(u), a = u
                })) : "external_video" === u.type && u.player.addEventListener("onStateChange", (function(t) {
                    1 === t.data && (l(u), a = u)
                })))
            }
        }

        function l(t) {
            if (a && t != a) return a.player ? ("video" === a.type ? a.player.pause() : "external_video" === a.type && a.player.pauseVideo(), void(a = null)) : void(a.viewer && (T(a.container, "model-active"), a.viewer.pause(), a = null))
        }
    }
    we("featured-collection-grid", {
        onLoad: function() {
            var t = this;
            this.animatedItems = this.container.querySelectorAll(oa);
            var e = this.container.querySelectorAll(ia);
            this.productItems = [], e.forEach((function(e) {
                t.productItems.push(Xo(e))
            })), this.animatedItems.length && (this.scrollAnimation = _o(this.container, this.animatedItems))
        },
        onUnload: function() {
            this.productItems.forEach((function(t) {
                return t.unload()
            })), this.animatedItems.length && this.scrollAnimation.unload()
        }
    });
    var sa = "[data-variant-popup-trigger]",
        ca = function(t) {
            var e = new Uo.a(t);
            return e.on("click", sa, (function(e) {
                e.preventDefault();
                var n = e.target.dataset.modalContentId,
                    r = _("#".concat(n), t);
                J("modal:open", null, {
                    modalContent: r
                })
            })), {
                unload: function() {
                    e.destroy()
                }
            }
        },
        ua = theme.strings.products,
        la = "[data-product-swatches]",
        da = "[data-product-chips]",
        ha = ".product-form__quantity",
        fa = ".share",
        pa = ".featured-product__meta-inner",
        ma = ".featured-product__description",
        ga = ".accordion",
        va = "[data-product-form]";
    we("featured-product", {
        onLoad: function() {
            this.media = aa(this.container);
            var t = this.container.querySelector(va);
            t && (this.productForm = Jo(t, {
                isProductPage: !1,
                isFeaturedProduct: !0,
                container: this.container
            }), this.swatches = Yt.call(this, la), this.chips = Kt.call(this, da), this.quantityInput = Xt.call(this, ha), this.variantPopup = ca(this.container)), this.productDetails = this.container.querySelector(pa), this._checkForAccordions()
        },
        _checkForAccordions: function() {
            var t = this.container.querySelector(ma);
            if (t) {
                var e = t.querySelector(ga),
                    n = this.container.querySelector(fa);
                n && e && this._appendSharingToAccordion(n, e)
            }
        },
        _appendSharingToAccordion: function(t, e) {
            var n = t.outerHTML,
                r = ua.product.share_heading,
                i = '\n      <div class="accordion product__share-accordion">\n        <div class="accordion__group">\n          <a class="accordion__label">'.concat(r, ' </a>\n          <div class="accordion__text">').concat(n, "</div>\n        </div>\n      </div>\n    ");
            e.insertAdjacentHTML("afterend", i);
            var o = this.container.querySelector(".product__share-accordion");
            this.accordion = z(o)
        },
        onUnload: function() {
            this.swatches && this.swatches(), this.chips && this.chips(), this.quantityInput && this.quantityInput(), this.productForm && this.productForm.unload(), this.accordion && this.accordion.unload(), this.variantPopup && this.variantPopup.unload()
        }
    });
    var ya = theme.strings.accessibility,
        ba = function() {
            return window.matchMedia("(prefers-reduced-motion: reduce)").matches
        };

    function wa(t) {
        var e = _(".video-pause", t),
            n = t.getElementsByTagName("VIDEO")[0];
        if (e && n) {
            var r = k(e, "click", (function(t) {
                t.preventDefault(), n.paused ? (n.play(), e.innerText = ya.pause_video) : (n.pause(), e.innerText = ya.play_video)
            }));
            return function() {
                return r()
            }
        }
    }
    var _a = ".image",
        Ea = ".image-with-text__text-block",
        Sa = ".image-with-text__video";
    we("image-with-text", {
        animationObserver: null,
        videoHandler: null,
        onLoad: function() {
            this.textBlock = this.container.querySelector(Ea), this.image = this.container.querySelector(_a);
            var t = this.container.querySelector(Sa),
                e = this.container.dataset.animationEnabled;
            this.observerOptions = {
                root: null,
                rootMargin: "0px",
                threshold: 0
            }, "true" === e && this.image && (this._onScroll = this._onScroll.bind(this), this._updateTextPosition = this._updateTextPosition.bind(this), this._updateImageScale = this._updateImageScale.bind(this), this._initAnimationObserver()), this.scrollAnimation = _o(this.container), t && (this.videoHandler = wa(this.container))
        },
        _initAnimationObserver: function() {
            !0 === Shopify.designMode || ba() || (this.animationObserver = new IntersectionObserver(this._handleAnimation.bind(this), this.observerOptions), this.animationObserver.observe(this.container))
        },
        _handleAnimation: function(t) {
            var e = this;
            t.forEach((function(t) {
                t.isIntersecting ? window.addEventListener("scroll", e._onScroll, {
                    capture: !0,
                    passive: !0
                }) : window.removeEventListener("scroll", e._onScroll, {
                    capture: !0,
                    passive: !0
                })
            }))
        },
        _onScroll: function() {
            this.containerHeight = this.container.clientHeight, this.scrollOffset = this._getoffsetTop(this.container), this.windowHeight = window.innerHeight || document.documentElement.clientHeight, this.containerPosition = window.scrollY - this.scrollOffset + this.windowHeight, go() ? requestAnimationFrame(this._updateTextPosition) : this.textBlock.style.transform = "translateY(0px)", requestAnimationFrame(this._updateImageScale)
        },
        _updateTextPosition: function() {
            var t = (this.containerHeight + this.windowHeight) / 2;
            this.textBlock.style.transform = "translateY(".concat(.15 * (this.containerPosition - t), "px)")
        },
        _updateImageScale: function() {
            this.image.style.transform = "scale(".concat(1 + 15e-5 * this.containerPosition, ")")
        },
        _getoffsetTop: function(t) {
            var e = t.getBoundingClientRect(),
                n = window.pageYOffset || document.documentElement.scrollTop;
            return e.top + n
        },
        onUnload: function() {
            this.animationObserver && this.animationObserver.disconnect(), this.videoHandler && this.videoHandler(), this.scrollAnimation.unload()
        }
    }), we("newsletter", {
        onLoad: function() {
            var t, e;
            t = this.container, (e = _(Qt.formStatus, t)) && _("[data-form-status]", e).focus(), this.scrollAnimation = _o(this.container)
        },
        onUnload: function() {
            this.scrollAnimation.unload()
        }
    });
    var Aa = {
            prevNextButtons: !1,
            adaptiveHeight: !1,
            pageDots: !1,
            cellAlign: "left"
        },
        ka = "product-recommendations--static",
        La = ".product-recommendations__inner",
        xa = ".product-recommendations__products",
        Ta = ".product-item";
    we("product-recommendations", {
        onLoad: function() {
            this._getProductRecommendations()
        },
        _getProductRecommendations: function() {
            var t = this,
                e = this.container.querySelector(La),
                n = e.dataset,
                r = n.productId,
                i = n.limit,
                o = "".concat(window.theme.routes.productRecommendations, "?section_id=").concat(ka, "&limit=").concat(i, "&product_id=").concat(r),
                a = new XMLHttpRequest;
            a.open("GET", o), a.onload = function() {
                if (a.status >= 200 && a.status < 300) {
                    var n = document.createElement("div");
                    n.innerHTML = a.response, e.parentElement.innerHTML = n.querySelector(".product-recommendations").innerHTML, t._initProductItems(), t._initSlider()
                }
            }, a.send()
        },
        _initProductItems: function() {
            var t = this,
                e = this.container.querySelectorAll(Ta);
            this.productItems = [], e.forEach((function(e) {
                t.productItems.push(Xo(e))
            }))
        },
        _initSlider: function() {
            var t = this.container.querySelector(xa);
            this.slider = new ao.a(t, Aa), this.slider.resize()
        },
        onUnload: function() {
            this.productItems.forEach((function(t) {
                return t.unload()
            })), this.slider.destroy()
        }
    });
    var qa = function(t, e) {
            var n = document.body.dataset.zoomAnimationEnabled;
            if (!0 !== Shopify.designMode && !ba() && "false" !== n) {
                var r = !1,
                    i = null,
                    o = null,
                    a = null,
                    s = new IntersectionObserver((function(t) {
                        t.forEach((function(t) {
                            t.isIntersecting ? window.addEventListener("scroll", c, {
                                capture: !0,
                                passive: !0
                            }) : window.removeEventListener("scroll", c, {
                                capture: !0,
                                passive: !0
                            })
                        }))
                    }), {
                        root: null,
                        rootMargin: "0px",
                        threshold: 0
                    });
                s.observe(t);
                return {
                    unload: function() {
                        s.disconnect()
                    }
                }
            }

            function c() {
                var e, n;
                t.clientHeight, e = t.getBoundingClientRect(), n = window.pageYOffset || document.documentElement.scrollTop, i = e.top + n, (o = window.innerHeight || document.documentElement.clientHeight) > i && (r = !0, o = 0), a = window.scrollY - i + o, requestAnimationFrame(u)
            }

            function u() {
                r && a > 0 ? e.style.transform = "scale(".concat(1 + 15e-5 * a, ")") : r || (e.style.transform = "scale(".concat(1 + 15e-5 * a, ")"))
            }
        },
        Oa = function(t) {
            var e = document.body;
            if (e.classList.contains("template-index")) return e.querySelector(".section-dynamic") === t.parentNode
        },
        Ca = ".page-dot",
        Pa = function(t, e, n) {
            var r = E(Ca, t),
                i = [];
            r.forEach((function(t) {
                i.push(k(t, "click", (function(t) {
                    return o(t)
                })))
            }));
            var o = function(t) {
                if (t.preventDefault(), !t.target.classList.contains("is-selected"))
                    if (n > 2) {
                        var r = t.target.dataset.slideIndex;
                        e.select(r)
                    } else t.target.classList.contains("next") ? e.next() : e.previous()
            };
            return {
                update: function(t) {
                    r.forEach((function(t) {
                        return T(t, "is-selected")
                    })), x(n > 2 ? r[t] : r[t % 2], "is-selected")
                },
                unload: function() {
                    i.forEach((function(t) {
                        return t()
                    }))
                }
            }
        };

    function Da(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }
    var Ia = ".js-slideshow",
        Na = ".slideshow__slide",
        ja = ".slideshow__image",
        Ma = ".slideshow__image--desktop",
        Ra = ".slideshow__image--mobile",
        Ba = ".slideshow__video";

    function Ha(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }
    we("slideshow", {
        slideshow: null,
        events: [],
        onLoad: function() {
            var t = this;
            this.slideshowContainer = _(Ia, this.container), this.slides = E(Na, this.container), this.slideImagesDesktop = E(Ma, this.container), this.slideImagesMobile = E(Ra, this.container), this.videoElements = [];
            var e = document.documentElement.style;
            this.transformProp = "string" == typeof e.transform ? "transform" : "WebkitTransform", Oa(this.container) && x(this.container, "first-full-height"), this._initSlideshow(), to()() || ba() || (this.observedItems = this.slides.forEach((function(t) {
                var e = t.querySelector(ja);
                return qa(t, e)
            }))), this.slides.forEach((function(e) {
                var n = e.querySelector(Ba);
                n && (t.events.push(wa(e)), t.videoElements.push(n))
            })), this.autoPlayListeners = [k(window, "click", (function() {
                return t._handleAutoPlay()
            })), k(window, "touchstart", (function() {
                return t._handleAutoPlay()
            }))]
        },
        _initSlideshow: function() {
            var t = this,
                e = {
                    percentPosition: !0,
                    wrapAround: !0,
                    prevNextButtons: !1,
                    adaptiveHeight: !0,
                    pageDots: !1
                },
                n = this.container.dataset,
                r = n.timer,
                i = n.slideCount;
            e.autoPlay = parseInt(r), this.slides.length > 1 ? (this.slideshow = new ao.a(this.slideshowContainer, function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Da(Object(n), !0).forEach((function(e) {
                        io()(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Da(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }({}, e)), this.pageDots = Pa(this.container, this.slideshow, i), this.slideshow.on("scroll", (function() {
                ba() || t.slideshow.slides.forEach((function(e, n) {
                    t._handleSlideScroll(e, n)
                }))
            })), this.slideshow.on("select", (function() {
                t.pageDots.update(t.slideshow.selectedIndex)
            }))) : 1 === this.slides.length && this.slides[0].classList.add("is-selected")
        },
        _handleSlideScroll: function(t, e) {
            var n;
            n = mo() ? this.slideImagesMobile[e] : this.slideImagesDesktop[e];
            var r = 0;
            r = 0 === e ? Math.abs(this.slideshow.x) > this.slideshow.slidesWidth ? this.slideshow.slidesWidth + this.slideshow.x + this.slideshow.slides[this.slideshow.slides.length - 1].outerWidth + t.target : t.target + this.slideshow.x : e === this.slideshow.slides.length - 1 && Math.abs(this.slideshow.x) + this.slideshow.slides[e].outerWidth < this.slideshow.slidesWidth ? t.target - this.slideshow.slidesWidth + this.slideshow.x - this.slideshow.slides[e].outerWidth : t.target + this.slideshow.x, n.style[this.transformProp] = "translateX(" + -1 * r / 2 + "px)"
        },
        _handleAutoPlay: function() {
            this.videoElements.forEach((function(t) {
                t.playing || t.play()
            })), this.autoPlayListeners.forEach((function(t) {
                return t()
            }))
        },
        onUnload: function() {
            this.slideshow && (this.slideshow.destroy(), this.pageDots.unload()), this.atBreakpointChange.unload(), this.events.forEach((function(t) {
                return t()
            }))
        },
        onBlockSelect: function(t) {
            var e = t.target;
            this.slideshow && (this.slideshow.pausePlayer(), this.slideshow.select(e.dataset.index, !0, !0))
        },
        onBlockDeselect: function() {
            this.slideshow && this.slideshow.unpausePlayer()
        }
    });
    var za = ".slideshow-split__slideshow",
        Fa = ".slideshow-split__slide",
        Ua = ".image__img",
        Va = ".slideshow-split__underlay",
        Wa = ".slideshow-split__video";
    we("slideshow-split", {
        events: [],
        onLoad: function() {
            var t = this;
            this.slideshowContainer = _(za, this.container), this.slides = E(Fa, this.container), this.videoElements = [];
            var e = _(Va, this.container);
            Oa(this.container) && x(this.container, "first-full-height"), this.slides.length > 1 && (this._initSlideshow(), function(t, e) {
                for (var n = t.getElementsByTagName("img"), r = n.length, i = 0, o = 0; o < r; o++) n[o].onload = function() {
                    ++i === r && e()
                }
            }(this.container, (function() {
                return e.classList.remove("hide")
            }))), this.scrollAnimation = _o(this.container), to()() || ba() || (this.observedItems = this.slides.forEach((function(t) {
                t.querySelectorAll(Ua).forEach((function(e) {
                    qa(t, e)
                }))
            }))), this.slides.forEach((function(e) {
                var n = e.querySelector(Wa);
                n && (t.events.push(wa(e)), t.videoElements.push(n))
            })), this.autoPlayListeners = [k(window, "click", (function() {
                return t._handleAutoPlay()
            })), k(window, "touchstart", (function() {
                return t._handleAutoPlay()
            }))]
        },
        _initSlideshow: function() {
            var t = this,
                e = {
                    percentPosition: !0,
                    wrapAround: !0,
                    prevNextButtons: !1,
                    adaptiveHeight: !1,
                    pageDots: !1,
                    cellAlign: "left"
                },
                n = this.container.dataset,
                r = n.timer,
                i = n.slideCount;
            e.autoPlay = parseInt(r), this.slideshow = new ao.a(this.slideshowContainer, function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ha(Object(n), !0).forEach((function(e) {
                        io()(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ha(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }({}, e)), this.pageDots = Pa(this.container, this.slideshow, i), this.slideshow.on("select", (function() {
                t.pageDots.update(t.slideshow.selectedIndex)
            })), setTimeout((function() {
                t.slideshow.resize()
            }), 100)
        },
        _handleAutoPlay: function() {
            this.videoElements.forEach((function(t) {
                t.playing || t.play()
            })), this.autoPlayListeners.forEach((function(t) {
                return t()
            }))
        },
        onUnload: function() {
            this.slideshow && this.slideshow.destroy(), this.scrollAnimation.unload(), this.events.forEach((function(t) {
                return t()
            }))
        },
        onBlockSelect: function(t) {
            var e = t.target;
            this.slideshow && (this.slideshow.pausePlayer(), this.slideshow.select(e.dataset.index))
        },
        onBlockDeselect: function() {
            this.slideshow && this.slideshow.unpausePlayer()
        }
    });
    var Ga = n(20),
        $a = n.n(Ga),
        Ya = n(21),
        Ja = ".video__overlay",
        Ka = ".video__player",
        Xa = "[data-video-trigger]";
    we("video", {
        videoType: null,
        videoPlayer: null,
        onLoad: function() {
            this._initPlayer(), this.scrollAnimation = _o(this.container)
        },
        _initPlayer: function() {
            var t = this.container.dataset,
                e = t.videoId,
                n = t.videoType;
            if (e && n) {
                var r = this.container.querySelector(Ja),
                    i = this.container.querySelector(Ka);
                this.button = this.container.querySelector(Xa), this.video = function(t, e) {
                    void 0 === e && (e = {});
                    var n, r = e.id,
                        i = e.playerEl,
                        o = e.type;
                    if (r && o) {
                        var a = Z(),
                            s = a.on,
                            c = a.emit;
                        return "youtube" === o ? ((n = $a()(i)).loadVideoById({
                            videoId: r,
                            suggestedQuality: "large"
                        }), n.stopVideo(), n.on("stateChange", (function(t) {
                            1 === t.data ? c("play") : 2 === t.data && c("pause")
                        })), n.on("ready", (function() {
                            c("ready"), u()
                        }))) : "vimeo" === o && ((n = new Ya.a(i, {
                            id: r
                        })).on("play", (function() {
                            return c("play")
                        })), n.on("pause", (function() {
                            return c("pause")
                        })), n.ready().then((function() {
                            c("ready"), u()
                        }))), {
                            destroy: function() {},
                            on: s,
                            pause: function() {
                                "youtube" === o ? n.pauseVideo() : "vimeo" === o && n.pause()
                            },
                            play: function() {
                                "youtube" === o ? n.playVideo() : "vimeo" === o && n.play()
                            }
                        }
                    }

                    function u() {
                        var e = _("iframe", t),
                            n = e.height / e.width * 100,
                            r = e.parentNode;
                        e.height = "100%", e.width = "100%", "youtube" === o ? r.style.paddingTop = n + "%" : "vimeo" === o && (r.parentNode.style.paddingTop = n + "%"), c("resized")
                    }
                }(this.container, {
                    id: e,
                    type: n,
                    playerEl: i
                }), this.video.on("play", (function() {
                    r.classList.remove("visible")
                })), this.button && this.button.addEventListener("click", this._playVideo.bind(this))
            }
        },
        _playVideo: function(t) {
            t.preventDefault(), this.video.play()
        },
        onUnload: function() {
            this.video && this.video.destroy(), this.button && this.button.removeEventListener("click", this.video.play), this.scrollAnimation.unload()
        }
    });
    var Za = {
        prevNextButtons: !1,
        adaptiveHeight: !1,
        wrapAround: !0,
        pageDots: !1,
        cellAlign: "center",
        draggable: !1,
        fade: !0
    };
    we("quote", {
        listeners: [],
        onLoad: function() {
            var t = this.container.dataset.timer;
            Za.autoPlay = parseInt(t);
            var e = _(".quote__container", this.container);
            this.slideshow = new ao.a(e, Za), this.scrollAnimation = _o(this.container), this._initNavigation()
        },
        _initNavigation: function() {
            var t = this,
                e = _(".carousel__next-button", this.container),
                n = _(".carousel__previous-button", this.container);
            this.listeners.push(k(n, "click", (function() {
                return t.slideshow.previous()
            }))), this.listeners.push(k(e, "click", (function() {
                return t.slideshow.next()
            })))
        },
        onBlockSelect: function(t) {
            var e = t.target;
            this.slideshow.select(e.dataset.index), this.slideshow.pausePlayer()
        },
        onBlockDeselect: function() {
            this.slideshow.unpausePlayer()
        },
        onUnload: function() {
            this.slideshow.destroy(), this.scrollAnimation.unload(), this.listeners.forEach((function(t) {
                return t()
            }))
        }
    });
    var Qa = ".gallery__slides",
        ts = ".animates";
    we("gallery", {
        onLoad: function() {
            this.animatedSlides = this.container.querySelectorAll(ts), this.carouselContainer = this.container.querySelector(Qa), this.carousel = wo(this.container), this.animatedSlides.length && this._initScrollAnimation(Zo(this.container, this.animatedSlides))
        },
        _initScrollAnimation: function(t) {
            var e = "top" === this.container.dataset.textPosition ? 0 : 750;
            this.scrollAnimation = _o(this.container, t, e)
        },
        onBlockSelect: function(t) {
            var e = t.target;
            this.carousel.goToSlide(e.dataset.index)
        },
        onUnload: function() {
            this.carousel.unload(), this.animatedSlides.length && this.scrollAnimation.unload()
        }
    });
    var es = n(9),
        ns = n.n(es),
        rs = ".location__map-container",
        is = ".location__map-element";
    we("location", {
        onLoad: function() {
            this._initMap(), this.scrollAnimation = _o(this.container)
        },
        _initMap: function() {
            var t = this;
            this.mapContainer = this.container.querySelector(rs);
            var e = null,
                n = null;
            if (this.mapContainer && (e = this.mapContainer.dataset.address, n = this.mapContainer.dataset.apiKey), n && e) {
                var r = this.container.dataset.sectionId,
                    i = document.querySelector("#map-styles-".concat(r)),
                    o = JSON.parse(i.innerHTML);
                ns.a.KEY = n, ns.a.VERSION = "3.34", ns.a.LIBRARIES = ["geocoding-api"], ns.a.load((function(n) {
                    (new n.maps.Geocoder).geocode({
                        address: e
                    }, (function(r, i) {
                        if (0 === r.length) return console.error("Google Maps Geocoding failed, reason: ".concat(i));
                        var a = r[0].geometry.location,
                            s = {
                                lat: a.lat(),
                                lng: a.lng()
                            };
                        t.mapContainer.classList.add("active");
                        var c = new n.maps.Map(t.container.querySelector(is), {
                            center: s,
                            zoom: 12,
                            styles: o.styles
                        });
                        new n.maps.Marker({
                            position: s,
                            map: c
                        }).addListener("click", (function() {
                            window.open("https://www.google.com/maps/place/" + e)
                        }))
                    }))
                }))
            }
        },
        onUnload: function() {
            ns.a.release(), this.scrollAnimation.unload()
        }
    });
    var os = ".testimonials__slides",
        as = ".animates";
    we("testimonials", {
        onLoad: function() {
            this.animatedSlides = this.container.querySelectorAll(as), this.carouselContainer = this.container.querySelector(os), this.carousel = wo(this.container), this.animatedSlides.length && this._initScrollAnimation(Zo(this.container, this.animatedSlides))
        },
        _initScrollAnimation: function(t) {
            var e = "top" === this.container.dataset.textPosition ? 0 : 750;
            this.scrollAnimation = _o(this.container, t, e)
        },
        onBlockSelect: function(t) {
            var e = t.target;
            this.carousel.goToSlide(e.dataset.index)
        },
        onUnload: function() {
            this.carousel.unload(), this.animatedSlides.length && this.scrollAnimation.unload()
        }
    });
    var ss = ".collage__item",
        cs = ".collage__item-inner",
        us = ".collage__video";
    we("collage", {
        observedItems: null,
        onLoad: function() {
            var t = this;
            this.collageItems = this.container.querySelectorAll(ss), this.videoHandlers = [], this.observedItems = this.collageItems.forEach((function(t) {
                var e = t.querySelector(cs);
                return qa(t, e)
            })), this.scrollAnimation = _o(this.container, this.collageItems), this.collageItems.forEach((function(e) {
                e.querySelector(us) && t.videoHandlers.push(wa(e))
            }))
        },
        onUnload: function() {
            this.observedItems && this.observedItems.forEach((function(t) {
                return t.unload()
            })), this.scrollAnimation.unload(), this.videoHandlers.forEach((function(t) {
                return t()
            }))
        },
        onBlockSelect: function(t) {
            var e = t.target.getBoundingClientRect().top + window.pageYOffset - 15;
            window.scrollTo({
                top: e,
                behavior: "smooth"
            })
        }
    });
    var ls = ".animates";
    we("text-columns-with-images", {
        animationPlayedOnLoad: !1,
        onLoad: function() {
            this.animatedItems = this.container.querySelectorAll(ls), this.scrollAnimation = _o(this.container, this.animatedItems)
        },
        onUnload: function() {
            this.scrollAnimation.unload()
        }
    }), we("rich-text", {
        onLoad: function() {
            this.scrollAnimation = _o(this.container)
        },
        onUnload: function() {
            this.scrollAnimation.unload()
        }
    }), we("cart", {
        onLoad: function() {},
        onUnload: function() {}
    });
    var ds = theme.strings.products,
        hs = ".spr-summary-starrating",
        fs = ".spr-summary-actions-togglereviews",
        ps = function(t) {
            var e = t.querySelector("[data-reviews-close]"),
                n = Nt(t, {
                    allowOutsideClick: !0
                });
            e.addEventListener("click", c);
            var r = t.querySelector(hs),
                i = t.querySelector(fs),
                o = ds.product.write_review;
            if (i) {
                var a = i.innerText;
                o = "".concat(a.match(/\d+/g), " ").concat(ds.product.total_reviews)
            }
            J(ot.added, (function() {
                return {
                    starRating: r,
                    totalReviews: o
                }
            }));
            var s = Y("drawerOverlay:hiding", (function() {
                return c(!1)
            }));
            window.addEventListener("keydown", (function(e) {
                if (!t.classList.contains("is-visible")) return;
                ("Escape" == e.key || 27 === e.keyCode && drawerOpen) && c()
            }));
            var c = function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                e && J("drawerOverlay:hide"), t.classList.remove("is-visible"), setTimeout((function() {
                    n.deactivate()
                }), 50)
            };
            return {
                unload: function() {
                    e.removeEventListener("click", c()), s()
                },
                open: function() {
                    t.classList.add("is-visible"), J("drawerOverlay:show");
                    var e = t.querySelector(".spr-summary-actions-togglereviews");
                    e && (e.tabIndex = -1), setTimeout((function() {
                        n.activate()
                    }), 50)
                }
            }
        },
        ms = "[data-reviews-drawer]",
        gs = ".product__reviews",
        vs = ".product__reviews-stars",
        ys = ".product__reviews-trigger",
        bs = function(t) {
            var e = t.querySelectorAll(gs),
                n = t.querySelector(ms),
                r = t.querySelectorAll(ys),
                i = function(t) {
                    t.preventDefault(), a.open()
                };
            r.forEach((function(t) {
                t.addEventListener("click", i)
            }));
            var o = Y(ot.added, (function(t) {
                    var n, i = t.starRating;
                    ! function(t) {
                        r.forEach((function(e) {
                            e.innerText = t
                        }))
                    }(t.totalReviews), n = i, e.forEach((function(t) {
                        var e = t.querySelector(vs);
                        if (n) {
                            var r = n.cloneNode(!0);
                            e.classList.remove("hidden"), e.appendChild(r)
                        }
                    })), e.forEach((function(t) {
                        t.classList.remove("hidden")
                    }))
                })),
                a = ps(n);
            return {
                unload: function() {
                    o(), a.unload(), r.forEach((function(t) {
                        t.removeEventListener("click", i)
                    }))
                }
            }
        };

    function ws(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function _s(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? ws(Object(n), !0).forEach((function(e) {
                io()(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ws(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }
    var Es = theme.strings.products,
        Ss = ".product-page-wrapper",
        As = ".product__media",
        ks = ".media__image",
        Ls = "[data-product-swatches]",
        xs = "[data-product-chips]",
        Ts = ".product-form__quantity",
        qs = ".share",
        Os = ".product__meta-inner",
        Cs = ".product__description",
        Ps = ".accordion",
        Ds = "[data-product-form]",
        Is = ".product__media-action-button",
        Ns = "[data-product-thumbnail]",
        js = {
            adaptiveHeight: !1,
            arrowShape: "M27.64 51.03 42.52 35.13 45.43 37.89 34.83 49.09 71.63 49.09 71.63 53.09 34.83 53.09 45.25 64.12 42.52 67.05 27.64 51.03z",
            pageDots: !1,
            watchCSS: !0
        };
    we("product", {
        onLoad: function() {
            var t = this;
            this.container.classList.add("product--loaded"), this.media = aa(this.container);
            var e = this.container.querySelector(Ds),
                n = this.container.querySelector(".product__view-in-space");
            to()() && Boolean(n) && n.classList.add("visible"), this.productForm = Jo(e, {
                isProductPage: !0,
                container: this.container
            }), this.swatches = Yt.call(this, Ls), this.chips = Kt.call(this, xs), this.quantityInput = Xt.call(this, Ts), this.sectionWrapper = document.querySelector(Ss), this.productDetails = this.container.querySelector(Os), this.variantPopup = ca(this.container), window.SPRCallbacks = {}, window.SPRCallbacks.onReviewsLoad = function() {
                t.reviews || (t.reviews = bs(t.container))
            }, this._initLightbox(), this._initThumbnails(), this._initSlider(), this._checkForAccordions(), this._initHeightObserver(), this._wrapTables(), this.mediaUpateListener = Y("product:mediaSelect", (function(e) {
                var n = e.selectedMedia;
                return t.carousel.select(n)
            })), document.body.classList.remove("product--full-width"), this.container.classList.contains("product--full-width") && document.body.classList.add("product--full-width")
        },
        _initThumbnails: function() {
            var t = this;
            this.productThumbs = this.container.querySelectorAll(Ns), this.productThumbs.forEach((function(e) {
                e.addEventListener("click", t._handleThumbClick.bind(t))
            }))
        },
        _handleThumbClick: function(t) {
            t.preventDefault();
            var e = t.currentTarget.dataset;
            this.productThumbs.forEach((function(t) {
                    return t.classList.remove("active")
                })), t.currentTarget.classList.add("active"),
                function(t, e) {
                    var n = _(Ce + Oe(e), t),
                        r = _(".media", n),
                        i = E("".concat(Ce, ":not(").concat(Oe(e), ")"), t);
                    T(n, De);
                    var o = _(Pe, t);
                    o && "model" === r.dataset.mediaType && o.setAttribute("data-shopify-model3d-id", r.dataset.mediaId), i.forEach((function(t) {
                        return x(t, De)
                    }))
                }(this.container, e.thumbnailId)
        },
        _initLightbox: function() {
            var t = this;
            this.images = this.container.querySelectorAll(ks), this.lightboxTrigger = this.container.querySelector(Is);
            var e = this.container.querySelector("[data-lightbox]");
            this.lightbox = function(t) {
                var e = [k(_("[data-close]", t), "click", (function(t) {
                        t.preventDefault(), r()
                    })), k(t, "keydown", (function(t) {
                        27 === t.keyCode && r()
                    }))],
                    n = Nt(t);

                function r() {
                    T(t, "visible"), setTimeout((function() {
                        T(t, "active"), Ei(), n.deactivate()
                    }), 300)
                }
                return {
                    destroy: function() {
                        e.forEach((function(t) {
                            return t()
                        }))
                    },
                    open: function(e) {
                        x(t, "active"), setTimeout((function() {
                            if (x(t, "visible"), _i(), n.activate(), e) {
                                var r = _('[data-id="'.concat(e, '"]'), t);
                                r && r.scrollIntoView()
                            }
                        }), 50)
                    }
                }
            }(e), this.images.forEach((function(e) {
                e.addEventListener("click", t._handleImageClick.bind(t))
            })), this.lightboxTrigger && this.lightboxTrigger.addEventListener("click", this.lightbox.open)
        },
        _handleImageClick: function(t) {
            t.preventDefault(), this.lightbox.open(t.currentTarget.dataset.open), this.media && this.media.pauseActiveMedia()
        },
        _initSlider: function() {
            var t = this,
                e = this.container.querySelector(As),
                n = e.querySelectorAll(".media-wrapper");
            js.wrapAround = n.length > 2, this.carousel = new ao.a(e, _s(_s({}, js), {}, {
                on: {
                    ready: function() {
                        this.selectedElement.querySelector('[data-media-type="model"]') && this.unbindDrag()
                    },
                    change: function() {
                        t.carousel.selectedElement.querySelector('[data-media-type="model"]') ? t.carousel.unbindDrag() : t.carousel.bindDrag()
                    }
                }
            }))
        },
        _checkForAccordions: function() {
            var t = this.container.querySelector(Cs).querySelector(Ps),
                e = this.container.querySelector(qs);
            e && t && this._appendSharingToAccordion(e, t)
        },
        _appendSharingToAccordion: function(t, e) {
            var n = t.outerHTML,
                r = Es.product.share_heading,
                i = '\n      <div class="accordion product__share-accordion">\n        <div class="accordion__group">\n          <a class="accordion__label">'.concat(r, ' </a>\n          <div class="accordion__text">').concat(n, "</div>\n        </div>\n      </div>\n    ");
            e.insertAdjacentHTML("afterend", i);
            var o = this.container.querySelector(".product__share-accordion");
            this.accordion = z(o)
        },
        _initHeightObserver: function() {
            var t = this;
            this._handleSectionHeight(), this.heightObserver = so((function() {
                t._handleSectionHeight()
            })), this.heightObserver.observe(this.productDetails)
        },
        _handleSectionHeight: function() {
            this.detailsHeight = this.productDetails.clientHeight, this.viewportHeight = window.innerHeight || document.documentElement.clientHeight, this._setSectionWrapperHeight()
        },
        _setSectionWrapperHeight: function() {
            this._setRootVar("--product-page-height", go() ? "".concat(this.detailsHeight, "px") : "unset")
        },
        _wrapTables: function() {
            this.container.querySelectorAll("table").forEach((function(t) {
                var e = document.createElement("div");
                e.classList.add("rte-table"), t.parentNode.insertBefore(e, t), e.appendChild(t)
            }))
        },
        _setRootVar: function(t, e) {
            document.documentElement.style.setProperty(t, "".concat(e))
        },
        onUnload: function() {
            var t = this;
            this.lightbox.destroy(), this.reviews && this.reviews.unload(), this.swatches && this.swatches(), this.chips && this.chips(), this.quantityInput && this.quantityInput(), this.productForm.unload(), this.carousel.destroy(), this.accordion && this.accordion.unload(), this.heightObserver.unload(), this.mediaUpateListener(), this.variantPopup.unload(), this.images.forEach((function(e) {
                e.removeEventListener("click", t._handleImageClick)
            })), this.lightboxTrigger && this.lightboxTrigger.removeEventListener("click", this.lightbox.open)
        }
    });
    var Ms = n(22),
        Rs = n.n(Ms);
    /* @preserve
     * https://github.com/Elkfox/Ajaxinate
     * Copyright (c) 2017 Elkfox Co Pty Ltd (elkfox.com)
     * MIT License (do not remove above copyright!)
     */
    function Bs(t) {
        const e = t || {};
        this.settings = Object.assign({
            method: "scroll",
            container: "#AjaxinateContainer",
            pagination: "#AjaxinatePagination",
            offset: 0,
            loadingText: "Loading",
            callback: null
        }, e), this.addScrollListeners = this.addScrollListeners.bind(this), this.addClickListener = this.addClickListener.bind(this), this.checkIfPaginationInView = this.checkIfPaginationInView.bind(this), this.preventMultipleClicks = this.preventMultipleClicks.bind(this), this.removeClickListener = this.removeClickListener.bind(this), this.removeScrollListener = this.removeScrollListener.bind(this), this.removePaginationElement = this.removePaginationElement.bind(this), this.destroy = this.destroy.bind(this), this.containerElement = document.querySelector(this.settings.container), this.paginationElement = document.querySelector(this.settings.pagination), this.initialize()
    }
    Bs.prototype.initialize = function() {
        if (!this.containerElement) return;
        ({
            click: this.addClickListener,
            scroll: this.addScrollListeners
        })[this.settings.method]()
    }, Bs.prototype.addScrollListeners = function() {
        this.paginationElement && (document.addEventListener("scroll", this.checkIfPaginationInView), window.addEventListener("resize", this.checkIfPaginationInView), window.addEventListener("orientationchange", this.checkIfPaginationInView))
    }, Bs.prototype.addClickListener = function() {
        this.paginationElement && (this.nextPageLinkElement = this.paginationElement.querySelector("a"), this.clickActive = !0, void 0 !== this.nextPageLinkElement && null !== this.nextPageLinkElement && this.nextPageLinkElement.addEventListener("click", this.preventMultipleClicks))
    }, Bs.prototype.preventMultipleClicks = function(t) {
        t.preventDefault(), this.clickActive && (this.nextPageLinkElement.innerText = this.settings.loadingText, this.nextPageUrl = this.nextPageLinkElement.href, this.clickActive = !1, this.loadMore())
    }, Bs.prototype.checkIfPaginationInView = function() {
        const t = this.paginationElement.getBoundingClientRect().top - this.settings.offset,
            e = this.paginationElement.getBoundingClientRect().bottom + this.settings.offset;
        t <= window.innerHeight && e >= 0 && (this.nextPageLinkElement = this.paginationElement.querySelector("a"), this.removeScrollListener(), this.nextPageLinkElement && (this.nextPageLinkElement.innerText = this.settings.loadingText, this.nextPageUrl = this.nextPageLinkElement.href, this.loadMore()))
    }, Bs.prototype.loadMore = function() {
        this.request = new XMLHttpRequest, this.request.onreadystatechange = function() {
            if (!this.request.responseXML) return;
            if (4 === !this.request.readyState || 200 === !this.request.status) return;
            const t = this.request.responseXML.querySelectorAll(this.settings.container)[0],
                e = this.request.responseXML.querySelectorAll(this.settings.pagination)[0];
            this.containerElement.insertAdjacentHTML("beforeend", t.innerHTML), void 0 === e ? this.removePaginationElement() : (this.paginationElement.innerHTML = e.innerHTML, this.settings.callback && "function" == typeof this.settings.callback && this.settings.callback(this.request.responseXML), this.initialize())
        }.bind(this), this.request.open("GET", this.nextPageUrl), this.request.responseType = "document", this.request.send()
    }, Bs.prototype.removeClickListener = function() {
        this.nextPageLinkElement.removeEventListener("click", this.preventMultipleClicks)
    }, Bs.prototype.removePaginationElement = function() {
        this.paginationElement.innerHTML = "", this.destroy()
    }, Bs.prototype.removeScrollListener = function() {
        document.removeEventListener("scroll", this.checkIfPaginationInView), window.removeEventListener("resize", this.checkIfPaginationInView), window.removeEventListener("orientationchange", this.checkIfPaginationInView)
    }, Bs.prototype.destroy = function() {
        return {
            click: this.removeClickListener,
            scroll: this.removeScrollListener
        }[this.settings.method](), this
    };

    function Hs() {
        try {
            return localStorage.setItem("test", "test"), localStorage.removeItem("test"), !0
        } catch (t) {
            return !1
        }
    }
    var zs = function(t) {
            return J("collection:filters:add", null, {
                tags: t
            })
        },
        Fs = function(t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return J("collection:filters:remove", null, {
                tags: t,
                fetch: e
            })
        },
        Us = function(t) {
            return J("collection:sort:set", null, {
                method: t
            })
        },
        Vs = function() {
            return J("collection:sort:clear", null)
        },
        Ws = function(t) {
            return Y("collection:filters:remove", t)
        },
        Gs = function(t) {
            return Y("collection:sort:set", t)
        },
        $s = function(t) {
            return Y("collection:sort:clear", t)
        },
        Ys = function(t) {
            return Y("collection:clear", t)
        },
        Js = "active",
        Ks = "closed",
        Xs = function() {
            return function(t) {
                if (Hs()) return JSON.parse(localStorage.getItem("neon_" + t))
            }("closed_sidebar_groups") || []
        },
        Zs = function(t) {
            return function(t, e) {
                if (Hs()) return localStorage.setItem("neon_" + t, e)
            }("closed_sidebar_groups", JSON.stringify(t))
        },
        Qs = "[data-heading]",
        tc = "[data-tag]",
        ec = "[data-sort]",
        nc = function(t) {
            return '[data-group="'.concat(t, '"]')
        },
        rc = "[data-filter]",
        ic = "[data-filter-flyout]",
        oc = "[data-button]",
        ac = "[data-filter-wash]",
        sc = "[data-tag]",
        cc = "[data-sort]",
        uc = "[data-close-icon]",
        lc = "active",
        dc = ".product-item",
        hc = ".collection__infinite-container",
        fc = ".collection__infinite-trigger",
        pc = "[data-sidebar]",
        mc = "[data-partial]";
    we("collection", {
        infiniteScroll: null,
        onLoad: function() {
            var t, e = this,
                n = this.container.dataset,
                r = n.collectionItemCount,
                i = n.paginationType;
            parseInt(r) && (this.paginationType = i, this.paginated = "paginated" === this.paginationType, this.infiniteScrollTrigger = _(fc, this.container), this.collection = function(t) {
                var e = new Rs.a(t || window.location.href),
                    n = e.paths().indexOf("collections") > 0 ? 3 : 2;

                function r(t) {
                    var r = e.paths().slice(0, n);
                    e.paths([].concat(r, [t]))
                }

                function i() {
                    var t = e.paths().filter(Boolean);
                    return t[n] ? t[n].split(" ") : []
                }
                return {
                    getState: function() {
                        return {
                            handle: e.paths()[1],
                            page: Number(e.query.page) || 1,
                            sort_by: e.query.sort_by || null,
                            tags: i(),
                            url: e.toString().replace(/%20/g, "+")
                        }
                    },
                    addTags: function(t, n) {
                        return r([].concat(i(), t).filter((function(t, e, n) {
                            return n.indexOf(t) == e
                        })).join(" ")), delete e.query.page, n(this.getState())
                    },
                    removeTags: function(t, n) {
                        return r(i().filter((function(e) {
                            return !t.includes(e)
                        })).join(" ")), delete e.query.page, n(this.getState())
                    },
                    setSort: function(t, n) {
                        return e.query.sort_by = t, n(this.getState())
                    },
                    clearSort: function(t) {
                        return delete e.query.sort_by, t(this.getState())
                    },
                    clearAll: function(t) {
                        return delete e.query.sort_by, r(""), t(this.getState())
                    }
                }
            }(window.location.href), this.sidebar = function(t) {
                if (!t) return Function();
                var e = E(tc, t),
                    n = E(ec, t),
                    r = k(t, "click", (function(t) {
                        t.preventDefault();
                        var e = t.target.dataset,
                            n = e.heading,
                            r = e.tag,
                            i = e.sort;
                        r && (X().tags.includes(r) ? Fs([r]) : zs([r]));
                        i && (X().sort_by === i ? Vs() : Us(i));
                        if (n) {
                            var o = t.target.nextElementSibling;
                            v(o);
                            var a = Xs();
                            y(o) ? (x(t.target, Ks), g(o), Zs([].concat(Gt()(a), [n]))) : (T(t.target, Ks), m(o), Zs(a.filter((function(t) {
                                return t !== n
                            }))))
                        }
                    })),
                    i = Y("tags", (function(t) {
                        var n = t.tags;
                        return e.forEach((function(t) {
                            return q(t.parentElement, Js, n.includes(t.dataset.tag))
                        }))
                    })),
                    o = Y("sort_by", (function(t) {
                        var e = t.sort_by;
                        return n.forEach((function(t) {
                            return q(t.parentElement, Js, t.dataset.sort === e)
                        }))
                    }));
                return Xs().forEach((function(e) {
                        var n = _(nc(e), t);
                        n && (x(_(Qs, n), Ks), g(n.querySelector("ul"), {
                            duration: 1
                        }))
                    })),
                    function() {
                        r(), i(), o()
                    }
            }(this.container.querySelector(pc)), this.filtering = function(t) {
                var e = E(ic, t),
                    n = _(ac, t),
                    r = E(sc, t),
                    i = E('[data-filter-flyout="__sort"] '.concat(cc)),
                    o = null,
                    a = [k(E(rc, t), "click", (function(e) {
                        e.preventDefault();
                        var r = e.currentTarget.dataset.filter,
                            i = _('[data-filter-flyout="'.concat(r, '"]'), t);
                        (o = Nt(i, {
                            allowOutsideClick: !0
                        })).activate(), x(n, lc), x(i, lc), _i(t, {
                            allowTouchMove: function(t) {
                                for (; t && t !== document.body;) {
                                    if (null !== t.getAttribute("data-scroll-lock-ignore")) return !0;
                                    t = t.parentNode
                                }
                            },
                            reserveScrollBarGap: !0
                        })
                    })), k(r, "click", (function(t) {
                        t.preventDefault(), q(t.target.parentNode, lc)
                    })), k(i, "click", (function(t) {
                        if (t.preventDefault(), O(t.currentTarget.parentNode, lc)) return;
                        i.forEach((function(e) {
                            return q(e.parentNode, lc, e === t.currentTarget)
                        }))
                    })), k(n, "click", u), k(E(oc, t), "click", (function(t) {
                        t.preventDefault();
                        var e = t.currentTarget.dataset.button,
                            n = t.currentTarget.closest(ic);
                        if ("__sort" === n.dataset.filterFlyout) {
                            if ("clear" === e && T(i.map((function(t) {
                                    return t.parentNode
                                })), lc), "apply" === e) {
                                var r = _(".".concat(lc), n);
                                return r ? Us(r.firstElementChild.dataset.sort) : Vs(), void u()
                            }
                        } else {
                            var o = E(sc, n);
                            if ("clear" === e && T(o.map((function(t) {
                                    return t.parentNode
                                })), lc), "apply" === e) {
                                var a = [],
                                    s = [];
                                o.forEach((function(t) {
                                    var e = t.parentNode,
                                        n = t.dataset.tag;
                                    O(e, lc) ? a.push(n) : s.push(n)
                                })), s.length > 0 && Fs(s, a.length <= 0), a.length > 0 && zs(a), u()
                            }
                        }
                    })), k(E(uc, t), "click", u)],
                    s = Y("tags", (function(t) {
                        var e = t.tags;
                        return r.forEach((function(t) {
                            return q(t.parentElement, lc, e.includes(t.dataset.tag))
                        }))
                    })),
                    c = Y("sort_by", (function(t) {
                        var e = t.sort_by;
                        return i.forEach((function(t) {
                            return q(t.parentElement, lc, t.dataset.sort === e)
                        }))
                    }));

                function u(r) {
                    r && r.preventDefault(), o && o.deactivate(), T([].concat(Gt()(e), [n]), lc), Ei(t)
                }
                return function() {
                    s(), c(), a.forEach((function(t) {
                        return t()
                    }))
                }
            }(this.container), K(this.collection.getState()), this.partial = _(mc, this.container), this.subscriptions = [(t = function(t, n) {
                var r = n.tags;
                return e.collection.addTags(r, (function(t) {
                    e._renderView(t.url), K(t)()
                }))
            }, Y("collection:filters:add", t)), Ws((function(t, n) {
                var r = n.tags,
                    i = n.fetch;
                e.collection.removeTags(r, (function(t) {
                    i && (e._renderView(t.url), K(t)())
                }))
            })), Gs((function(t, n) {
                var r = n.method;
                e.collection.setSort(r, (function(t) {
                    e._renderView(t.url), K(t)()
                }))
            })), $s((function() {
                e.collection.clearSort((function(t) {
                    e._renderView(t.url), K(t)()
                }))
            })), Ys((function() {
                e.collection.clearAll((function(t) {
                    e._renderView(t.url), K(t)()
                }))
            }))], this.delegate = new Uo.a(this.partial), this.delegate.on("click", '[data-pill="filter"]',
                (function(t) {
                    t.preventDefault();
                    var e = t.target.dataset.tag;
                    Fs([e])
                })), this.delegate.on("click", '[data-pill="sort"]', (function(t) {
                t.preventDefault(), Vs()
            })), this.delegate.on("click", "[data-clear]", (function(t) {
                t.preventDefault(), J("collection:clear")
            })), this.delegate.on("click", "[data-pagination]", (function(t) {
                t.preventDefault(), e._renderView(t.target.href)
            })), this._initInfiniteScroll(), this._initProductItems(), this.collectionUpdatedHanlder = Y("collection:updated", (function() {
                e.productItems.forEach((function(t) {
                    return t.unload()
                })), e._initProductItems()
            })))
            window.bmInitCollectionQuickView = Xo
        },
        _initInfiniteScroll: function() {
            if (!this.paginated) {
                var t = {
                    container: hc,
                    pagination: fc,
                    loadingText: "Loading...",
                    callback: function() {
                        return J("collection:updated")
                    }
                };
                "click" === this.paginationType && (t.method = "click"), Bs.prototype.loadMore = function() {
                    this.request = new XMLHttpRequest, this.request.onreadystatechange = function() {
                        if (4 === this.request.readyState && 200 === this.request.status) {
                            var t = (new DOMParser).parseFromString(this.request.responseText, "text/html"),
                                e = t.querySelectorAll(this.settings.container)[0],
                                n = t.querySelectorAll(this.settings.pagination)[0];
                            this.containerElement.insertAdjacentHTML("beforeend", e.innerHTML), this.paginationElement.innerHTML = n.innerHTML, this.settings.callback && "function" == typeof this.settings.callback && this.settings.callback(this.request.responseXML), this.initialize()
                        }
                    }.bind(this), this.request.open("GET", this.nextPageUrl, !1), this.request.send()
                }, this.infiniteScroll = new Bs(t)
            }
        },
        _initProductItems: function() {
            var t = this,
                e = this.container.querySelectorAll(dc);
            this.productItems = [], e.forEach((function(e) {
                t.productItems.push(Xo(e))
            }))
        },
        _renderView: function(t) {
            var e = this,
                n = _(".collection__loading", this.container);
            x(n, "is-active"), fetch(t, {
                credentials: "include"
            }).then((function(t) {
                return t.text()
            })).then((function(r) {
                window.history.pushState({}, "", t);
                var i = (new window.DOMParser).parseFromString(r, "text/html"),
                    o = _(mc, i).innerHTML;
                e.partial.innerHTML = o, e.paginated || (e.infiniteScrollTrigger.innerHTML = "", e._initInfiniteScroll()), T(n, "is-active"), J("collection:updated")
            }))
        },
        onUnload: function() {
            this.infiniteScroll && this.infiniteScroll.destroy(), this.productItems.forEach((function(t) {
                return t.unload()
            })), this.sidebar(), this.filtering(), this.delegate.off(), this.subscriptions.forEach((function(t) {
                return t()
            })), this.collectionUpdatedHanlder()
        }
    });
    var gc = "#RecoverPassword",
        vc = "#RecoverPasswordForm",
        yc = "#HideRecoverPasswordLink",
        bc = "#CustomerLoginForm",
        wc = ".reset-password-success",
        _c = "#ResetSuccess";

    function Ec(t) {
        if ("string" != typeof t) throw new TypeError(t + " is not a string.");
        this.countryOptions = t
    }

    function Sc(t, e) {
        return t.querySelector('option[value="' + e + '"]')
    }

    function Ac(t, e, n) {
        var r = Sc(t, n),
            i = JSON.parse(r.getAttribute("data-provinces"));
        return e.options.length = 0, i.length && function(t, e) {
            var n = t.getAttribute("data-default");
            e.forEach((function(e) {
                var n = document.createElement("option");
                n.value = e[0], n.textContent = e[1], t.appendChild(n)
            })), n && Sc(t, n) && (t.value = n)
        }(e, i), i
    }
    we("login", {
        onLoad: function() {
            this.recoverPasswordLink = this.container.querySelector(gc), this.hideRecoverPasswordLink = this.container.querySelector(yc), this.customerLoginForm = this.container.querySelector(bc), this._onShowHidePasswordForm = this._onShowHidePasswordForm.bind(this), this.recoverPasswordLink && (this._checkUrlHash(), this._resetPasswordSuccess(), this.recoverPasswordLink.addEventListener("click", this._onShowHidePasswordForm), this.hideRecoverPasswordLink.addEventListener("click", this._onShowHidePasswordForm))
        },
        _onShowHidePasswordForm: function(t) {
            t.preventDefault(), this._toggleRecoverPasswordForm()
        },
        _checkUrlHash: function() {
            "#recover" === window.location.hash && this._toggleRecoverPasswordForm()
        },
        _toggleRecoverPasswordForm: function() {
            this.container.querySelector(vc).classList.toggle("hide"), this.customerLoginForm.classList.toggle("hide")
        },
        _resetPasswordSuccess: function() {
            var t = this.container.querySelector(wc),
                e = this.container.querySelector(_c);
            t && e.classList.remove("hide")
        },
        onUnload: function() {}
    }), Ec.prototype.build = function(t, e, n) {
        if ("object" != typeof t) throw new TypeError(t + " is not a object.");
        if ("object" != typeof e) throw new TypeError(e + " is not a object.");
        var r = t.getAttribute("data-default");
        if (n = n || {}, t.innerHTML = this.countryOptions, t.value = r, r && Sc(t, r)) {
            var i = Ac(t, e, r);
            n.onCountryChange && n.onCountryChange(i, e, t)
        }
        t.addEventListener("change", (function(r) {
            var i = r.target,
                o = i.value,
                a = Ac(i, e, o);
            n.onCountryChange && n.onCountryChange(a, e, t)
        })), n.onProvinceChange && e.addEventListener("change", n.onProvinceChange)
    };
    var kc = "[data-address]",
        Lc = "[data-address-toggle]",
        xc = "[data-address-country]",
        Tc = "[data-address-province]",
        qc = "[data-address-province-wrapper]",
        Oc = "[data-address-form]",
        Cc = "[data-address-delete-form]";
    we("addresses", {
        onLoad: function() {
            var t = this,
                e = this.container.querySelectorAll(kc);
            if (e.length) {
                var n = new Ec(window.theme.allCountryOptionTags);
                e.forEach((function(e) {
                    t._initializeAddressForm(n, e)
                }))
            }
        },
        _initializeAddressForm: function(t, e) {
            var n = e.querySelector(xc),
                r = e.querySelector(Tc),
                i = e.querySelector(qc),
                o = e.querySelector(Oc),
                a = e.querySelector(Cc);
            t.build(n, r, {
                onCountryChange: function(t) {
                    return i.classList.toggle("hide", !t.length)
                }
            }), e.querySelectorAll(Lc).forEach((function(t) {
                t.addEventListener("click", (function() {
                    o.classList.toggle("hide")
                }))
            })), a && a.addEventListener("submit", (function(t) {
                var e = a.getAttribute("data-confirm-message");
                window.confirm(e || "Are you sure you wish to delete this address?") || t.preventDefault()
            }))
        },
        onUnload: function() {}
    }), we("page", {
        onLoad: function() {},
        onUnload: function() {}
    });
    var Pc = "[data-js-toggle]";
    if (we("password", {
            onLoad: function() {
                var t = this;
                this.toggleButton = this.container.querySelector(Pc), this.toggleButton.addEventListener("click", (function(e) {
                    return t.toggleView(e)
                }))
            },
            onUnload: function() {
                var t = this;
                this.toggleButton.removeEventListener("click", (function(e) {
                    return t.toggleView(e)
                }))
            },
            toggleView: function(t) {
                t.preventDefault(), this.container.classList.toggle("welcome")
            }
        }), document.addEventListener("DOMContentLoaded", (function() {
            a("*"), pe().then((function(t) {
                K({
                    cart: t
                });
                var e = document.querySelector("[data-cart-drawer]");
                Ve(e)
            }))
        })), window.SHA = "unknown", !0 === Shopify.designMode) document.documentElement.classList.add("theme-editor");
    else {
        var Dc = document.querySelector(".theme-editor-scroll-offset");
        Dc && Dc.remove()
    }
    var Ic = document.querySelectorAll(".accordion");

    function Nc(t) {
        9 === t.keyCode && (document.body.classList.add("user-is-tabbing"), window.removeEventListener("keydown", Nc), window.addEventListener("mousedown", jc))
    }

    function jc() {
        document.body.classList.remove("user-is-tabbing"), window.removeEventListener("mousedown", jc), window.addEventListener("keydown", Nc)
    }
    Ic.length && Ic.forEach((function(t) {
        z(t)
    })), it(document.querySelector(".header-container")), dt(document.querySelector("[data-header-overlay]")), mt(document.querySelector("[data-drawer-overlay]")), Je(document.querySelector("[data-modal]")), tn(document.querySelector("[data-store-availability-drawer]")), window.addEventListener("keydown", Nc);
    var Mc = function() {
        var t = document.querySelector("meta[name=viewport]");
        if (null !== t) {
            var e = t.getAttribute("content"),
                n = /maximum\-scale=[0-9\.]+/g;
            e = n.test(e) ? e.replace(n, "maximum-scale=1.0") : [e, "maximum-scale=1.0"].join(", "), t.setAttribute("content", e)
        }
    };
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && Mc(), document.querySelectorAll("table").forEach((function(t) {
        var e = document.createElement("div");
        e.classList.add("rte-table"), t.parentNode.insertBefore(e, t), e.appendChild(t)
    }))
}]);
