/*! @vimeo/player v2.14.1 | (c) 2020 Vimeo | MIT License | https://github.com/vimeo/player.js */
(function(q, u) {
    "object" === typeof exports && "undefined" !== typeof module ? module.exports = u() : "function" === typeof define && define.amd ? define(u) : (q = "undefined" !== typeof globalThis ? globalThis : q || self, q.Vimeo = q.Vimeo || {}, q.Vimeo.Player = u())
})(this, function() {
    function q(c, a) {
        for (var b = 0; b < a.length; b++) {
            var d = a[b];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            "value" in d && (d.writable = !0);
            Object.defineProperty(c, d.key, d)
        }
    }

    function u(c, a, b) {
        a && q(c.prototype, a);
        b && q(c, b);
        return c
    }

    function G(c, a) {
        return 0 === c.indexOf(a.toLowerCase()) ?
            c : "".concat(a.toLowerCase()).concat(c.substr(0, 1).toUpperCase()).concat(c.substr(1))
    }

    function w(c) {
        return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(c)
    }

    function H() {
        var c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            a = c.id,
            c = c.url,
            c = a || c;
        if (!c) throw Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
        if (!isNaN(parseFloat(c)) && isFinite(c) && Math.floor(c) == c) return "https://vimeo.com/".concat(c);
        if (w(c)) return c.replace("http:",
            "https:");
        if (a) throw new TypeError("\u201c".concat(a, "\u201d is not a valid video id."));
        throw new TypeError("\u201c".concat(c, "\u201d is not a vimeo.com url."));
    }

    function x(c, a, b) {
        var d = p.get(c.element) || {};
        a in d || (d[a] = []);
        d[a].push(b);
        p.set(c.element, d)
    }

    function z(c, a) {
        return (p.get(c.element) || {})[a] || []
    }

    function A(c, a, b) {
        var d = p.get(c.element) || {};
        if (!d[a]) return !0;
        if (!b) return d[a] = [], p.set(c.element, d), !0;
        b = d[a].indexOf(b); - 1 !== b && d[a].splice(b, 1);
        p.set(c.element, d);
        return d[a] && 0 === d[a].length
    }

    function N(c, a) {
        var b = z(c, a);
        if (1 > b.length) return !1;
        b = b.shift();
        A(c, a, b);
        return b
    }

    function I(c) {
        return O.reduce(function(a, b) {
            var d = c.getAttribute("data-vimeo-".concat(b));
            if (d || "" === d) a[b] = "" === d ? 1 : d;
            return a
        }, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {})
    }

    function B(c, a) {
        var b = c.html;
        if (!a) throw new TypeError("An element must be provided");
        if (null !== a.getAttribute("data-vimeo-initialized")) return a.querySelector("iframe");
        var d = document.createElement("div");
        d.innerHTML = b;
        a.appendChild(d.firstChild);
        a.setAttribute("data-vimeo-initialized", "true");
        return a.querySelector("iframe")
    }

    function J(c) {
        var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            b = 2 < arguments.length ? arguments[2] : void 0;
        return new Promise(function(d, e) {
            if (!w(c)) throw new TypeError("\u201c".concat(c, "\u201d is not a vimeo.com url."));
            var f = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(c)),
                m;
            for (m in a) a.hasOwnProperty(m) && (f += "&".concat(m, "=").concat(encodeURIComponent(a[m])));
            var k = "XDomainRequest" in
                window ? new XDomainRequest : new XMLHttpRequest;
            k.open("GET", f, !0);
            k.onload = function() {
                if (404 === k.status) e(Error("\u201c".concat(c, "\u201d was not found.")));
                else if (403 === k.status) e(Error("\u201c".concat(c, "\u201d is not embeddable.")));
                else try {
                    var a = JSON.parse(k.responseText);
                    403 === a.domain_status_code ? (B(a, b), e(Error("\u201c".concat(c, "\u201d is not embeddable.")))) : d(a)
                } catch (f) {
                    e(f)
                }
            };
            k.onerror = function() {
                var a = k.status ? " (".concat(k.status, ")") : "";
                e(Error("There was an error fetching the embed code from Vimeo".concat(a,
                    ".")))
            };
            k.send()
        })
    }

    function Q() {
        var c = function(a) {
            "console" in window && console.error && console.error("There was an error creating an embed: ".concat(a))
        };
        [].slice.call((0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : document).querySelectorAll("[data-vimeo-id], [data-vimeo-url]")).forEach(function(a) {
            try {
                if (null === a.getAttribute("data-vimeo-defer")) {
                    var b = I(a),
                        d = H(b);
                    J(d, b, a).then(function(b) {
                        return B(b, a)
                    }).catch(c)
                }
            } catch (e) {
                c(e)
            }
        })
    }

    function R() {
        var c = 0 < arguments.length && void 0 !== arguments[0] ?
            arguments[0] : document;
        window.VimeoPlayerResizeEmbeds_ || (window.VimeoPlayerResizeEmbeds_ = !0, window.addEventListener("message", function(a) {
            if (w(a.origin) && a.data && "spacechange" === a.data.event)
                for (var b = c.querySelectorAll("iframe"), d = 0; d < b.length; d++)
                    if (b[d].contentWindow === a.source) {
                        b[d].parentElement.style.paddingBottom = "".concat(a.data.data[0].bottom, "px");
                        break
                    }
        }))
    }

    function K(c) {
        if ("string" === typeof c) try {
            c = JSON.parse(c)
        } catch (a) {
            return console.warn(a), {}
        }
        return c
    }

    function y(c, a, b) {
        c.element.contentWindow &&
            c.element.contentWindow.postMessage && (a = {
                method: a
            }, void 0 !== b && (a.value = b), b = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1")), 8 <= b && 10 > b && (a = JSON.stringify(a)), c.element.contentWindow.postMessage(a, c.origin))
    }

    function S(c, a) {
        a = K(a);
        var b = [],
            d;
        if (a.event) "error" === a.event && z(c, a.data.method).forEach(function(b) {
            var d = Error(a.data.message);
            d.name = a.data.name;
            b.reject(d);
            A(c, a.data.method, b)
        }), b = z(c, "event:".concat(a.event)), d = a.data;
        else if (a.method) {
            var e = N(c, a.method);
            e && (b.push(e), d = a.value)
        }
        b.forEach(function(a) {
            try {
                "function" === typeof a ? a.call(c, d) : a.resolve(d)
            } catch (b) {}
        })
    }

    function T() {
        var c = function() {
                for (var a, b = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),
                        "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                    ], c = 0, m = b.length, k = {}; c < m; c++)
                    if ((a = b[c]) && a[1] in document) {
                        for (c = 0; c < a.length; c++) k[b[0][c]] = a[c];
                        return k
                    }
                return !1
            }(),
            a = {
                fullscreenchange: c.fullscreenchange,
                fullscreenerror: c.fullscreenerror
            },
            b = {
                request: function(a) {
                    return new Promise(function(e,
                        f) {
                        var m = function t() {
                            b.off("fullscreenchange", t);
                            e()
                        };
                        b.on("fullscreenchange", m);
                        a = a || document.documentElement;
                        var k = a[c.requestFullscreen]();
                        k instanceof Promise && k.then(m).catch(f)
                    })
                },
                exit: function() {
                    return new Promise(function(a, e) {
                        if (b.isFullscreen) {
                            var f = function P() {
                                b.off("fullscreenchange", P);
                                a()
                            };
                            b.on("fullscreenchange", f);
                            var m = document[c.exitFullscreen]();
                            m instanceof Promise && m.then(f).catch(e)
                        } else a()
                    })
                },
                on: function(b, c) {
                    var f = a[b];
                    f && document.addEventListener(f, c)
                },
                off: function(b, c) {
                    var f =
                        a[b];
                    f && document.removeEventListener(f, c)
                }
            };
        Object.defineProperties(b, {
            isFullscreen: {
                get: function() {
                    return Boolean(document[c.fullscreenElement])
                }
            },
            element: {
                enumerable: !0,
                get: function() {
                    return document[c.fullscreenElement]
                }
            },
            isEnabled: {
                enumerable: !0,
                get: function() {
                    return Boolean(document[c.fullscreenEnabled])
                }
            }
        });
        return b
    }
    var L = "undefined" !== typeof global && "[object global]" === {}.toString.call(global),
        C = "undefined" !== typeof Array.prototype.indexOf,
        U = "undefined" !== typeof window && "undefined" !== typeof window.postMessage;
    if (!(L || C && U)) throw Error("Sorry, the Vimeo Player API is not available in this browser.");
    var M = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};
    (function(c) {
        if (!c.WeakMap) {
            var a = Object.prototype.hasOwnProperty,
                b = function(a, b, c) {
                    Object.defineProperty ? Object.defineProperty(a, b, {
                        configurable: !0,
                        writable: !0,
                        value: c
                    }) : a[b] = c
                };
            c.WeakMap = function() {
                function c() {
                    if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'");
                    b(this, "_id", "_WeakMap_" + Math.random().toString().substring(2) + "." + Math.random().toString().substring(2));
                    if (0 < arguments.length) throw new TypeError("WeakMap iterable is not supported");
                }

                function e(b, c) {
                    if (Object(b) !== b || !a.call(b, "_id")) throw new TypeError(c + " method called on incompatible receiver " + typeof b);
                }
                b(c.prototype, "delete", function(a) {
                    e(this, "delete");
                    if (Object(a) !== a) return !1;
                    var b = a[this._id];
                    return b && b[0] === a ? (delete a[this._id], !0) : !1
                });
                b(c.prototype, "get", function(a) {
                    e(this, "get");
                    if (Object(a) === a) {
                        var b = a[this._id];
                        if (b && b[0] === a) return b[1]
                    }
                });
                b(c.prototype, "has", function(a) {
                    e(this, "has");
                    if (Object(a) !== a) return !1;
                    var b = a[this._id];
                    return b && b[0] === a ? !0 : !1
                });
                b(c.prototype, "set", function(a, c) {
                    e(this, "set");
                    if (Object(a) !== a) throw new TypeError("Invalid value used as weak map key");
                    var d = a[this._id];
                    if (d && d[0] === a) return d[1] = c, this;
                    b(a, this._id, [a, c]);
                    return this
                });
                b(c, "_polyfill", !0);
                return c
            }()
        }
    })("undefined" !== typeof self ? self : "undefined" !== typeof window ? window : M);
    var r =
        function(c, a) {
            return a = {
                exports: {}
            }, c(a, a.exports), a.exports
        }(function(c) {
            (function(a, b, d) {
                b[a] = b[a] || d();
                c.exports && (c.exports = b[a])
            })("Promise", M, function() {
                function a(a, b) {
                    p.add(a, b);
                    E || (E = r(p.drain))
                }

                function b(a) {
                    var b, c = typeof a;
                    null == a || "object" != c && "function" != c || (b = a.then);
                    return "function" == typeof b ? b : !1
                }

                function c() {
                    for (var a = 0; a < this.chain.length; a++) {
                        var d = 1 === this.state ? this.chain[a].success : this.chain[a].failure,
                            g = this.chain[a],
                            e = void 0,
                            f = void 0;
                        try {
                            !1 === d ? g.reject(this.msg) : (e = !0 ===
                                d ? this.msg : d.call(void 0, this.msg), e === g.promise ? g.reject(TypeError("Promise-chain cycle")) : (f = b(e)) ? f.call(e, g.resolve, g.reject) : g.resolve(e))
                        } catch (n) {
                            g.reject(n)
                        }
                    }
                    this.chain.length = 0
                }

                function e(D) {
                    var h, g = this;
                    if (!g.triggered) {
                        g.triggered = !0;
                        g.def && (g = g.def);
                        try {
                            (h = b(D)) ? a(function() {
                                var a = new k(g);
                                try {
                                    h.call(D, function() {
                                        e.apply(a, arguments)
                                    }, function() {
                                        f.apply(a, arguments)
                                    })
                                } catch (b) {
                                    f.call(a, b)
                                }
                            }): (g.msg = D, g.state = 1, 0 < g.chain.length && a(c, g))
                        } catch (n) {
                            f.call(new k(g), n)
                        }
                    }
                }

                function f(b) {
                    var h =
                        this;
                    h.triggered || (h.triggered = !0, h.def && (h = h.def), h.msg = b, h.state = 2, 0 < h.chain.length && a(c, h))
                }

                function m(a, b, c, d) {
                    for (var e = 0; e < b.length; e++)(function(e) {
                        a.resolve(b[e]).then(function(a) {
                            c(e, a)
                        }, d)
                    })(e)
                }

                function k(a) {
                    this.def = a;
                    this.triggered = !1
                }

                function l(a) {
                    this.promise = a;
                    this.state = 0;
                    this.triggered = !1;
                    this.chain = [];
                    this.msg = void 0
                }

                function t(b) {
                    if ("function" != typeof b) throw TypeError("Not a function");
                    if (0 !== this.__NPO__) throw TypeError("Not a promise");
                    this.__NPO__ = 1;
                    var h = new l(this);
                    this.then =
                        function(b, e) {
                            var g = {
                                success: "function" == typeof b ? b : !0,
                                failure: "function" == typeof e ? e : !1
                            };
                            g.promise = new this.constructor(function(a, b) {
                                if ("function" != typeof a || "function" != typeof b) throw TypeError("Not a function");
                                g.resolve = a;
                                g.reject = b
                            });
                            h.chain.push(g);
                            0 !== h.state && a(c, h);
                            return g.promise
                        };
                    this["catch"] = function(a) {
                        return this.then(void 0, a)
                    };
                    try {
                        b.call(void 0, function(a) {
                            e.call(h, a)
                        }, function(a) {
                            f.call(h, a)
                        })
                    } catch (g) {
                        f.call(h, g)
                    }
                }
                var n, E, p, q = Object.prototype.toString,
                    r = "undefined" != typeof setImmediate ?
                    function(a) {
                        return setImmediate(a)
                    } : setTimeout;
                try {
                    Object.defineProperty({}, "x", {}), n = function(a, b, c, d) {
                        return Object.defineProperty(a, b, {
                            value: c,
                            writable: !0,
                            configurable: !1 !== d
                        })
                    }
                } catch (v) {
                    n = function(a, b, c) {
                        a[b] = c;
                        return a
                    }
                }
                p = function() {
                    function a(b, c) {
                        this.fn = b;
                        this.self = c;
                        this.next = void 0
                    }
                    var b, c, d;
                    return {
                        add: function(e, f) {
                            d = new a(e, f);
                            c ? c.next = d : b = d;
                            c = d;
                            d = void 0
                        },
                        drain: function() {
                            var a = b;
                            for (b = c = E = void 0; a;) a.fn.call(a.self), a = a.next
                        }
                    }
                }();
                var u = n({}, "constructor", t, !1);
                t.prototype = u;
                n(u, "__NPO__",
                    0, !1);
                n(t, "resolve", function(a) {
                    return a && "object" == typeof a && 1 === a.__NPO__ ? a : new this(function(b, c) {
                        if ("function" != typeof b || "function" != typeof c) throw TypeError("Not a function");
                        b(a)
                    })
                });
                n(t, "reject", function(a) {
                    return new this(function(b, c) {
                        if ("function" != typeof b || "function" != typeof c) throw TypeError("Not a function");
                        c(a)
                    })
                });
                n(t, "all", function(a) {
                    var b = this;
                    return "[object Array]" != q.call(a) ? b.reject(TypeError("Not an array")) : 0 === a.length ? b.resolve([]) : new b(function(c, d) {
                        if ("function" != typeof c ||
                            "function" != typeof d) throw TypeError("Not a function");
                        var e = a.length,
                            f = Array(e),
                            n = 0;
                        m(b, a, function(a, b) {
                            f[a] = b;
                            ++n === e && c(f)
                        }, d)
                    })
                });
                n(t, "race", function(a) {
                    var b = this;
                    return "[object Array]" != q.call(a) ? b.reject(TypeError("Not an array")) : new b(function(c, d) {
                        if ("function" != typeof c || "function" != typeof d) throw TypeError("Not a function");
                        m(b, a, function(a, b) {
                            c(b)
                        }, d)
                    })
                });
                return t
            })
        }),
        p = new WeakMap,
        O = "autopause autoplay background byline color controls dnt height id loop maxheight maxwidth muted playsinline portrait responsive speed texttrack title transparent url width".split(" "),
        v = new WeakMap,
        F = new WeakMap,
        l = {},
        C = function() {
            function c(a) {
                var b = this,
                    d = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                if (!(this instanceof c)) throw new TypeError("Cannot call a class as a function");
                window.jQuery && a instanceof jQuery && (1 < a.length && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), a = a[0]);
                "undefined" !== typeof document && "string" === typeof a && (a = document.getElementById(a));
                if (!Boolean(a && 1 === a.nodeType &&
                        "nodeName" in a && a.ownerDocument && a.ownerDocument.defaultView)) throw new TypeError("You must pass either a valid element or a valid id.");
                if ("IFRAME" !== a.nodeName) {
                    var e = a.querySelector("iframe");
                    e && (a = e)
                }
                if ("IFRAME" === a.nodeName && !w(a.getAttribute("src") || "")) throw Error("The player element passed isn\u2019t a Vimeo embed.");
                if (v.has(a)) return v.get(a);
                this._window = a.ownerDocument.defaultView;
                this.element = a;
                this.origin = "*";
                e = new r(function(c, e) {
                    b._onMessage = function(a) {
                        if (w(a.origin) && b.element.contentWindow ===
                            a.source)
                            if ("*" === b.origin && (b.origin = a.origin), (a = K(a.data)) && "error" === a.event && a.data && "ready" === a.data.method) {
                                var d = Error(a.data.message);
                                d.name = a.data.name;
                                e(d)
                            } else d = a && "ping" === a.method, a && "ready" === a.event || d ? (b.element.setAttribute("data-ready", "true"), c()) : S(b, a)
                    };
                    b._window.addEventListener("message", b._onMessage);
                    if ("IFRAME" !== b.element.nodeName) {
                        var f = I(a, d),
                            l = H(f);
                        J(l, f, a).then(function(c) {
                            var d = B(c, a);
                            b.element = d;
                            var e = b._originalElement = a,
                                f = p.get(e);
                            p.set(d, f);
                            p.delete(e);
                            v.set(b.element,
                                b);
                            return c
                        }).catch(e)
                    }
                });
                F.set(this, e);
                v.set(this.element, this);
                "IFRAME" === this.element.nodeName && y(this, "ping");
                if (l.isEnabled) {
                    var f = function() {
                        return l.exit()
                    };
                    l.on("fullscreenchange", function() {
                        l.isFullscreen ? x(b, "event:exitFullscreen", f) : A(b, "event:exitFullscreen", f);
                        b.ready().then(function() {
                            y(b, "fullscreenchange", l.isFullscreen)
                        })
                    })
                }
                return this
            }
            u(c, [{
                    key: "callMethod",
                    value: function(a) {
                        var b = this,
                            c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        return new r(function(e, f) {
                            return b.ready().then(function() {
                                x(b,
                                    a, {
                                        resolve: e,
                                        reject: f
                                    });
                                y(b, a, c)
                            }).catch(f)
                        })
                    }
                }, {
                    key: "get",
                    value: function(a) {
                        var b = this;
                        return new r(function(c, e) {
                            a = G(a, "get");
                            return b.ready().then(function() {
                                x(b, a, {
                                    resolve: c,
                                    reject: e
                                });
                                y(b, a)
                            }).catch(e)
                        })
                    }
                }, {
                    key: "set",
                    value: function(a, b) {
                        var c = this;
                        return new r(function(e, f) {
                            a = G(a, "set");
                            if (void 0 === b || null === b) throw new TypeError("There must be a value to set.");
                            return c.ready().then(function() {
                                x(c, a, {
                                    resolve: e,
                                    reject: f
                                });
                                y(c, a, b)
                            }).catch(f)
                        })
                    }
                }, {
                    key: "on",
                    value: function(a, b) {
                        if (!a) throw new TypeError("You must pass an event name.");
                        if (!b) throw new TypeError("You must pass a callback function.");
                        if ("function" !== typeof b) throw new TypeError("The callback must be a function.");
                        0 === z(this, "event:".concat(a)).length && this.callMethod("addEventListener", a).catch(function() {});
                        x(this, "event:".concat(a), b)
                    }
                }, {
                    key: "off",
                    value: function(a, b) {
                        if (!a) throw new TypeError("You must pass an event name.");
                        if (b && "function" !== typeof b) throw new TypeError("The callback must be a function.");
                        A(this, "event:".concat(a), b) && this.callMethod("removeEventListener",
                            a).catch(function(a) {})
                    }
                }, {
                    key: "loadVideo",
                    value: function(a) {
                        return this.callMethod("loadVideo", a)
                    }
                }, {
                    key: "ready",
                    value: function() {
                        var a = F.get(this) || new r(function(a, c) {
                            c(Error("Unknown player. Probably unloaded."))
                        });
                        return r.resolve(a)
                    }
                }, {
                    key: "addCuePoint",
                    value: function(a) {
                        return this.callMethod("addCuePoint", {
                            time: a,
                            data: 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
                        })
                    }
                }, {
                    key: "removeCuePoint",
                    value: function(a) {
                        return this.callMethod("removeCuePoint", a)
                    }
                }, {
                    key: "enableTextTrack",
                    value: function(a,
                        b) {
                        if (!a) throw new TypeError("You must pass a language.");
                        return this.callMethod("enableTextTrack", {
                            language: a,
                            kind: b
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
                        return l.isEnabled ? l.request(this.element) : this.callMethod("requestFullscreen")
                    }
                }, {
                    key: "exitFullscreen",
                    value: function() {
                        return l.isEnabled ?
                            l.exit() : this.callMethod("exitFullscreen")
                    }
                }, {
                    key: "getFullscreen",
                    value: function() {
                        return l.isEnabled ? r.resolve(l.isFullscreen) : this.get("fullscreen")
                    }
                }, {
                    key: "unload",
                    value: function() {
                        return this.callMethod("unload")
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var a = this;
                        return new r(function(b) {
                            F.delete(a);
                            v.delete(a.element);
                            a._originalElement && (v.delete(a._originalElement), a._originalElement.removeAttribute("data-vimeo-initialized"));
                            a.element && "IFRAME" === a.element.nodeName && a.element.parentNode && a.element.parentNode.removeChild(a.element);
                            if (a.element && "DIV" === a.element.nodeName && a.element.parentNode) {
                                a.element.removeAttribute("data-vimeo-initialized");
                                var c = a.element.querySelector("iframe");
                                c && c.parentNode && c.parentNode.removeChild(c)
                            }
                            a._window.removeEventListener("message", a._onMessage);
                            b()
                        })
                    }
                }, {
                    key: "getAutopause",
                    value: function() {
                        return this.get("autopause")
                    }
                }, {
                    key: "setAutopause",
                    value: function(a) {
                        return this.set("autopause", a)
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
                },
                {
                    key: "setCameraProps",
                    value: function(a) {
                        return this.set("cameraProps", a)
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
                    value: function(a) {
                        return this.set("color", a)
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
                    value: function(a) {
                        return this.set("currentTime", a)
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
                    value: function(a) {
                        return this.set("loop", a)
                    }
                }, {
                    key: "setMuted",
                    value: function(a) {
                        return this.set("muted", a)
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
                    value: function(a) {
                        return this.set("playbackRate", a)
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
                    value: function(a) {
                        return this.set("quality", a)
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
                },
                {
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
                    value: function(a) {
                        return this.set("volume", a)
                    }
                }
            ]);
            return c
        }();
    L || (l = T(), Q(), R());
    return C
});