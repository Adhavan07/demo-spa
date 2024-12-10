/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.12.7
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
/******/
(function(d) {
    function e(f) {
        if (a[f]) return a[f].exports;
        var g = a[f] = {
            i: f,
            l: !1,
            exports: {}
        };
        d[f].call(g.exports, g, g.exports, e);
        g.l = !0;
        return g.exports
    }
    var a = {};
    e.m = d;
    e.c = a;
    e.d = function(f, a, d) {
        e.o(f, a) || Object.defineProperty(f, a, {
            enumerable: !0,
            get: d
        })
    };
    e.r = function(f) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(f, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(f, "__esModule", {
            value: !0
        })
    };
    e.t = function(f, a) {
        a & 1 && (f = e(f));
        if (a & 8 || a & 4 && "object" === typeof f && f && f.__esModule) return f;
        var d = Object.create(null);
        e.r(d);
        Object.defineProperty(d, "default", {
            enumerable: !0,
            value: f
        });
        if (a & 2 && "string" != typeof f)
            for (var r in f) e.d(d, r, function(a) {
                return f[a]
            }.bind(null, r));
        return d
    };
    e.n = function(a) {
        var d = a && a.__esModule ? function() {
            return a["default"]
        } : function() {
            return a
        };
        e.d(d, "a", d);
        return d
    };
    e.o = function(a, d) {
        return Object.prototype.hasOwnProperty.call(a, d)
    };
    e.p = "";
    return e(e.s = 10)
})([, , function(d, e) {
    d.exports = function(a) {
        "complete" === document.readyState || "interactive" === document.readyState ?
            a.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function() {
                "interactive" === document.readyState && a.call()
            }) : document.addEventListener && document.addEventListener("DOMContentLoaded", a)
    }
}, function(d, e, a) {
    e = a(4);
    d.exports = "undefined" !== typeof window ? window : "undefined" !== typeof e ? e : "undefined" !== typeof self ? self : {}
}, function(d, e) {
    function a(f) {
        "@babel/helpers - typeof";
        a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(a) {
            return typeof a
        } : function(a) {
            return a &&
                "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        };
        return a(f)
    }
    var f;
    f = function() {
        return this
    }();
    try {
        f = f || (new Function("return this"))()
    } catch (g) {
        "object" === ("undefined" === typeof window ? "undefined" : a(window)) && (f = window)
    }
    d.exports = f
}, , , , , , function(d, e, a) {
    d.exports = a(11)
}, function(d, e, a) {
    function f(a) {
        "@babel/helpers - typeof";
        f = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(a) {
            return typeof a
        } : function(a) {
            return a && "function" === typeof Symbol &&
                a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        };
        return f(a)
    }
    a.r(e);
    d = a(2);
    d = a.n(d);
    var g = a(3);
    a.n(g);
    var m = a(12),
        r = g.window.jarallax;
    g.window.jarallax = m["default"];
    g.window.jarallax.noConflict = function() {
        g.window.jarallax = r;
        return this
    };
    if ("undefined" !== typeof g.jQuery) {
        a = function() {
            for (var a = arguments.length, d = Array(a), e = 0; e < a; e++) d[e] = arguments[e];
            Array.prototype.unshift.call(d, this);
            a = m["default"].apply(g.window, d);
            return "object" !== f(a) ? a : this
        };
        a.constructor = m["default"].constructor;
        var v = g.jQuery.fn.jarallax;
        g.jQuery.fn.jarallax = a;
        g.jQuery.fn.jarallax.noConflict = function() {
            g.jQuery.fn.jarallax = v;
            return this
        }
    }
    d()(function() {
        Object(m["default"])(document.querySelectorAll("[data-jarallax]"))
    })
}, function(d, e, a) {
    function f(a, l) {
        var c, b;
        b = Array.isArray(a) ? a : void 0;
        if (!b)
            if (b = a && ("undefined" !== typeof Symbol && a[Symbol.iterator] || a["@@iterator"]), null == b) b = void 0;
            else {
                var k = [],
                    d = !0,
                    f = !1,
                    e;
                try {
                    for (b = b.call(a); !(d = (c = b.next()).done) && (k.push(c.value), !l || k.length !== l); d = !0);
                } catch (h) {
                    f = !0, e = h
                } finally {
                    try {
                        if (!d && null != b["return"]) b["return"]()
                    } finally {
                        if (f) throw e;
                    }
                }
                b = k
            }
        if (!(c = b)) a: {
            if (a) {
                if ("string" === typeof a) {
                    c = g(a, l);
                    break a
                }
                c = Object.prototype.toString.call(a).slice(8, -1);
                "Object" === c && a.constructor && (c = a.constructor.name);
                if ("Map" === c || "Set" === c) {
                    c = Array.from(a);
                    break a
                }
                if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) {
                    c = g(a, l);
                    break a
                }
            }
            c = void 0
        }
        if (!c) throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        return c
    }

    function g(a, l) {
        if (null == l || l > a.length) l = a.length;
        for (var c = 0, b = Array(l); c < l; c++) b[c] = a[c];
        return b
    }

    function m(a) {
        "@babel/helpers - typeof";
        m = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(a) {
            return typeof a
        } : function(a) {
            return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        };
        return m(a)
    }

    function r(a, l) {
        for (var c = 0; c < l.length; c++) {
            var b = l[c];
            b.enumerable = b.enumerable || !1;
            b.configurable = !0;
            "value" in b && (b.writable = !0);
            Object.defineProperty(a,
                b.key, b)
        }
    }

    function v(a, l, c) {
        l && r(a.prototype, l);
        c && r(a, c);
        return a
    }

    function u() {
        C ? (!t && document.body && (t = document.createElement("div"), t.style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(t)), h = (t ? t.clientHeight : 0) || p.window.innerHeight || document.documentElement.clientHeight) : h = p.window.innerHeight || document.documentElement.clientHeight
    }

    function B(a) {
        for (var l = []; null !== a.parentElement;) a = a.parentElement, 1 === a.nodeType && l.push(a);
        return l
    }

    function y() {
        q.length &&
            (q.forEach(function(a, l) {
                var c = a.instance,
                    b = a.oldData,
                    k = c.$item.getBoundingClientRect(),
                    k = {
                        width: k.width,
                        height: k.height,
                        top: k.top,
                        bottom: k.bottom,
                        wndW: p.window.innerWidth,
                        wndH: h
                    },
                    d = !b || b.wndW !== k.wndW || b.wndH !== k.wndH || b.width !== k.width || b.height !== k.height,
                    b = d || !b || b.top !== k.top || b.bottom !== k.bottom;
                q[l].oldData = k;
                if (d) c.onResize();
                if (b) c.onScroll()
            }), p.window.requestAnimationFrame(y))
    }
    a.r(e);
    d = a(2);
    d = a.n(d);
    var p = a(3);
    a.n(p);
    var n = p.window.navigator,
        D = -1 < n.userAgent.indexOf("MSIE ") || -1 < n.userAgent.indexOf("Trident/") ||
        -1 < n.userAgent.indexOf("Edge/"),
        C = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(n.userAgent),
        w = function() {
            for (var a = ["transform", "WebkitTransform", "MozTransform"], l = document.createElement("div"), c = 0; c < a.length; c += 1)
                if (l && void 0 !== l.style[a[c]]) return a[c];
            return !1
        }(),
        t, h;
    u();
    p.window.addEventListener("resize", u);
    p.window.addEventListener("orientationchange", u);
    p.window.addEventListener("load", u);
    d()(function() {
        u({
            type: "dom-loaded"
        })
    });
    var q = [],
        x = 0,
        A = function() {
            function a(l,
                c) {
                if (!(this instanceof a)) throw new TypeError("Cannot call a class as a function");
                var b = this;
                b.instanceID = x;
                x += 1;
                b.$item = l;
                b.defaults = {
                    type: "scroll",
                    speed: .5,
                    imgSrc: null,
                    imgElement: ".jarallax-img",
                    imgSize: "cover",
                    imgPosition: "50% 50%",
                    imgRepeat: "no-repeat",
                    keepImg: !1,
                    elementInViewport: null,
                    zIndex: -100,
                    disableParallax: !1,
                    disableVideo: !1,
                    videoSrc: null,
                    videoStartTime: 0,
                    videoEndTime: 0,
                    videoVolume: 0,
                    videoLoop: !0,
                    videoPlayOnlyVisible: !0,
                    videoLazyLoading: !0,
                    onScroll: null,
                    onInit: null,
                    onDestroy: null,
                    onCoverImage: null
                };
                var k = b.$item.dataset || {},
                    d = {};
                Object.keys(k).forEach(function(a) {
                    var c = a.substr(0, 1).toLowerCase() + a.substr(1);
                    c && "undefined" !== typeof b.defaults[c] && (d[c] = k[a])
                });
                b.options = b.extend({}, b.defaults, d, c);
                b.pureOptions = b.extend({}, b.options);
                Object.keys(b.options).forEach(function(a) {
                    "true" === b.options[a] ? b.options[a] = !0 : "false" === b.options[a] && (b.options[a] = !1)
                });
                b.options.speed = Math.min(2, Math.max(-1, parseFloat(b.options.speed)));
                "string" === typeof b.options.disableParallax && (b.options.disableParallax =
                    new RegExp(b.options.disableParallax));
                if (b.options.disableParallax instanceof RegExp) {
                    var e = b.options.disableParallax;
                    b.options.disableParallax = function() {
                        return e.test(n.userAgent)
                    }
                }
                "function" !== typeof b.options.disableParallax && (b.options.disableParallax = function() {
                    return !1
                });
                "string" === typeof b.options.disableVideo && (b.options.disableVideo = new RegExp(b.options.disableVideo));
                if (b.options.disableVideo instanceof RegExp) {
                    var h = b.options.disableVideo;
                    b.options.disableVideo = function() {
                        return h.test(n.userAgent)
                    }
                }
                "function" !==
                typeof b.options.disableVideo && (b.options.disableVideo = function() {
                    return !1
                });
                var g = b.options.elementInViewport;
                g && "object" === m(g) && "undefined" !== typeof g.length && (g = f(g, 1)[0]);
                g instanceof Element || (g = null);
                b.options.elementInViewport = g;
                b.image = {
                    src: b.options.imgSrc || null,
                    $container: null,
                    useImgTag: !1,
                    position: /iPad|iPhone|iPod|Android/.test(n.userAgent) ? "absolute" : "fixed"
                };
                b.initImg() && b.canInitParallax() && b.init()
            }
            v(a, [{
                    key: "css",
                    value: function(a, c) {
                        if ("string" === typeof c) return p.window.getComputedStyle(a).getPropertyValue(c);
                        c.transform && w && (c[w] = c.transform);
                        Object.keys(c).forEach(function(b) {
                            a.style[b] = c[b]
                        });
                        return a
                    }
                }, {
                    key: "extend",
                    value: function(a) {
                        for (var c = arguments.length, b = Array(1 < c ? c - 1 : 0), k = 1; k < c; k++) b[k - 1] = arguments[k];
                        a = a || {};
                        Object.keys(b).forEach(function(c) {
                            b[c] && Object.keys(b[c]).forEach(function(k) {
                                a[k] = b[c][k]
                            })
                        });
                        return a
                    }
                }, {
                    key: "getWindowData",
                    value: function() {
                        return {
                            width: p.window.innerWidth || document.documentElement.clientWidth,
                            height: h,
                            y: document.documentElement.scrollTop
                        }
                    }
                }, {
                    key: "initImg",
                    value: function() {
                        var a =
                            this.options.imgElement;
                        a && "string" === typeof a && (a = this.$item.querySelector(a));
                        a instanceof Element || (this.options.imgSrc ? (a = new Image, a.src = this.options.imgSrc) : a = null);
                        a && (this.options.keepImg ? this.image.$item = a.cloneNode(!0) : (this.image.$item = a, this.image.$itemParent = a.parentNode), this.image.useImgTag = !0);
                        if (this.image.$item) return !0;
                        null === this.image.src && (this.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", this.image.bgImage = this.css(this.$item, "background-image"));
                        return !(!this.image.bgImage || "none" === this.image.bgImage)
                    }
                }, {
                    key: "canInitParallax",
                    value: function() {
                        return w && !this.options.disableParallax()
                    }
                }, {
                    key: "init",
                    value: function() {
                        var a = {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                overflow: "hidden"
                            },
                            c = {
                                pointerEvents: "none",
                                transformStyle: "preserve-3d",
                                backfaceVisibility: "hidden",
                                willChange: "transform,opacity"
                            };
                        if (!this.options.keepImg) {
                            var b = this.$item.getAttribute("style");
                            b && this.$item.setAttribute("data-jarallax-original-styles", b);
                            this.image.useImgTag &&
                                (b = this.image.$item.getAttribute("style")) && this.image.$item.setAttribute("data-jarallax-original-styles", b)
                        }
                        "static" === this.css(this.$item, "position") && this.css(this.$item, {
                            position: "relative"
                        });
                        "auto" === this.css(this.$item, "z-index") && this.css(this.$item, {
                            zIndex: 0
                        });
                        this.image.$container = document.createElement("div");
                        this.css(this.image.$container, a);
                        this.css(this.image.$container, {
                            "z-index": this.options.zIndex
                        });
                        D && this.css(this.image.$container, {
                            opacity: .9999
                        });
                        this.image.$container.setAttribute("id",
                            "jarallax-container-".concat(this.instanceID));
                        this.$item.appendChild(this.image.$container);
                        this.image.useImgTag ? c = this.extend({
                            "object-fit": this.options.imgSize,
                            "object-position": this.options.imgPosition,
                            "font-family": "object-fit: ".concat(this.options.imgSize, "; object-position: ").concat(this.options.imgPosition, ";"),
                            "max-width": "none"
                        }, a, c) : (this.image.$item = document.createElement("div"), this.image.src && (c = this.extend({
                            "background-position": this.options.imgPosition,
                            "background-size": this.options.imgSize,
                            "background-repeat": this.options.imgRepeat,
                            "background-image": this.image.bgImage || 'url("'.concat(this.image.src, '")')
                        }, a, c)));
                        if ("opacity" === this.options.type || "scale" === this.options.type || "scale-opacity" === this.options.type || 1 === this.options.speed) this.image.position = "absolute";
                        "fixed" === this.image.position && (a = B(this.$item).filter(function(a) {
                            a = p.window.getComputedStyle(a);
                            var b = a["-webkit-transform"] || a["-moz-transform"] || a.transform,
                                c = /(auto|scroll)/;
                            return b && "none" !== b || c.test(a.overflow + a["overflow-y"] +
                                a["overflow-x"])
                        }), this.image.position = a.length ? "absolute" : "fixed");
                        c.position = this.image.position;
                        this.css(this.image.$item, c);
                        this.image.$container.appendChild(this.image.$item);
                        this.onResize();
                        this.onScroll(!0);
                        this.options.onInit && this.options.onInit.call(this);
                        "none" !== this.css(this.$item, "background-image") && this.css(this.$item, {
                            "background-image": "none"
                        });
                        this.addToParallaxList()
                    }
                }, {
                    key: "addToParallaxList",
                    value: function() {
                        q.push({
                            instance: this
                        });
                        1 === q.length && p.window.requestAnimationFrame(y)
                    }
                },
                {
                    key: "removeFromParallaxList",
                    value: function() {
                        var a = this;
                        q.forEach(function(c, b) {
                            c.instance.instanceID === a.instanceID && q.splice(b, 1)
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.removeFromParallaxList();
                        var a = this.$item.getAttribute("data-jarallax-original-styles");
                        this.$item.removeAttribute("data-jarallax-original-styles");
                        a ? this.$item.setAttribute("style", a) : this.$item.removeAttribute("style");
                        if (this.image.useImgTag) {
                            var c = this.image.$item.getAttribute("data-jarallax-original-styles");
                            this.image.$item.removeAttribute("data-jarallax-original-styles");
                            c ? this.image.$item.setAttribute("style", a) : this.image.$item.removeAttribute("style");
                            this.image.$itemParent && this.image.$itemParent.appendChild(this.image.$item)
                        }
                        this.$clipStyles && this.$clipStyles.parentNode.removeChild(this.$clipStyles);
                        this.image.$container && this.image.$container.parentNode.removeChild(this.image.$container);
                        this.options.onDestroy && this.options.onDestroy.call(this);
                        delete this.$item.jarallax
                    }
                }, {
                    key: "clipContainer",
                    value: function() {
                        if ("fixed" === this.image.position) {
                            var a = this.image.$container.getBoundingClientRect(),
                                c = a.width,
                                a = a.height;
                            this.$clipStyles || (this.$clipStyles = document.createElement("style"), this.$clipStyles.setAttribute("type", "text/css"), this.$clipStyles.setAttribute("id", "jarallax-clip-".concat(this.instanceID)), (document.head || document.getElementsByTagName("head")[0]).appendChild(this.$clipStyles));
                            c = "#jarallax-container-".concat(this.instanceID, " {\n            clip: rect(0 ").concat(c, "px ").concat(a, "px 0);\n            clip: rect(0, ").concat(c, "px, ").concat(a, "px, 0);\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        }");
                            this.$clipStyles.styleSheet ? this.$clipStyles.styleSheet.cssText = c : this.$clipStyles.innerHTML = c
                        }
                    }
                }, {
                    key: "coverImage",
                    value: function() {
                        var a = this.image.$container.getBoundingClientRect(),
                            c = a.height,
                            b = this.options.speed,
                            k = "scroll" === this.options.type || "scroll-opacity" === this.options.type,
                            d = 0,
                            f = c,
                            e = 0;
                        k && (0 > b ? (d = b * Math.max(c, h), h < c && (d -= b * (c - h))) : d = b * (c + h), f = 1 < b ? Math.abs(d - h) : 0 > b ? d / b + Math.abs(d) : f + (h - c) * (1 - b), d /= 2);
                        this.parallaxScrollDistance = d;
                        e = k ? (h - f) / 2 : (c - f) / 2;
                        this.css(this.image.$item, {
                            height: "".concat(f,
                                "px"),
                            marginTop: "".concat(e, "px"),
                            left: "fixed" === this.image.position ? "".concat(a.left, "px") : "0",
                            width: "".concat(a.width, "px")
                        });
                        this.options.onCoverImage && this.options.onCoverImage.call(this);
                        return {
                            image: {
                                height: f,
                                marginTop: e
                            },
                            container: a
                        }
                    }
                }, {
                    key: "isVisible",
                    value: function() {
                        return this.isElementInViewport || !1
                    }
                }, {
                    key: "onScroll",
                    value: function(a) {
                        var c = this.$item.getBoundingClientRect(),
                            b = c.top,
                            d = c.height,
                            f = {},
                            e = c;
                        this.options.elementInViewport && (e = this.options.elementInViewport.getBoundingClientRect());
                        this.isElementInViewport = 0 <= e.bottom && 0 <= e.right && e.top <= h && e.left <= p.window.innerWidth;
                        if (a || this.isElementInViewport) {
                            a = Math.max(0, b);
                            var e = Math.max(0, d + b),
                                g = Math.max(0, -b),
                                z = Math.max(0, b + d - h),
                                m = Math.max(0, d - (b + d - h)),
                                r = Math.max(0, -b + h - d),
                                q = 1 - (h - b) / (h + d) * 2,
                                n = 1;
                            d < h ? n = 1 - (g || z) / d : e <= h ? n = e / h : m <= h && (n = m / h);
                            if ("opacity" === this.options.type || "scale-opacity" === this.options.type || "scroll-opacity" === this.options.type) f.transform = "translate3d(0,0,0)", f.opacity = n;
                            if ("scale" === this.options.type || "scale-opacity" ===
                                this.options.type) d = 1, d = 0 > this.options.speed ? d - this.options.speed * n : d + this.options.speed * (1 - n), f.transform = "scale(".concat(d, ") translate3d(0,0,0)");
                            if ("scroll" === this.options.type || "scroll-opacity" === this.options.type) d = this.parallaxScrollDistance * q, "absolute" === this.image.position && (d -= b), f.transform = "translate3d(0,".concat(d, "px,0)");
                            this.css(this.image.$item, f);
                            this.options.onScroll && this.options.onScroll.call(this, {
                                section: c,
                                beforeTop: a,
                                beforeTopEnd: e,
                                afterTop: g,
                                beforeBottom: z,
                                beforeBottomEnd: m,
                                afterBottom: r,
                                visiblePercent: n,
                                fromViewportCenter: q
                            })
                        }
                    }
                }, {
                    key: "onResize",
                    value: function() {
                        this.coverImage();
                        this.clipContainer()
                    }
                }
            ]);
            return a
        }();
    a = function(a, d) {
        if ("object" === ("undefined" === typeof HTMLElement ? "undefined" : m(HTMLElement)) ? a instanceof HTMLElement : a && "object" === m(a) && null !== a && 1 === a.nodeType && "string" === typeof a.nodeName) a = [a];
        for (var c = a.length, b = 0, e, f = arguments.length, g = Array(2 < f ? f - 2 : 0), h = 2; h < f; h++) g[h - 2] = arguments[h];
        for (b; b < c; b += 1)
            if ("object" === m(d) || "undefined" === typeof d ? a[b].jarallax ||
                (a[b].jarallax = new A(a[b], d)) : a[b].jarallax && (e = a[b].jarallax[d].apply(a[b].jarallax, g)), "undefined" !== typeof e) return e;
        return a
    };
    a.constructor = A;
    e["default"] = a
}]);