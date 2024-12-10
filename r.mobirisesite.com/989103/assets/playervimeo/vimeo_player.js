/*! @vimeo/player v2.15.3 | (c) 2021 Vimeo | MIT License | https://github.com/vimeo/player.js */ ! function(r, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : ((r = "undefined" != typeof globalThis ? globalThis : r || self).Vimeo = r.Vimeo || {}, r.Vimeo.Player = t())
}(this, function() {
    function r(c, b) {
        for (var a = 0; a < b.length; a++) {
            var d = b[a];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            "value" in d && (d.writable = !0);
            Object.defineProperty(c, d.key, d)
        }
    }

    function t(c, b) {
        return 0 === c.indexOf(b.toLowerCase()) ? c : "".concat(b.toLowerCase()).concat(c.substr(0,
            1).toUpperCase()).concat(c.substr(1))
    }

    function y(c) {
        return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(c)
    }

    function K(c) {
        var b = 0 < arguments.length && void 0 !== c ? c : {},
            a = b.id,
            b = b.url,
            b = a || b;
        if (!b) throw Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
        if (!isNaN(parseFloat(b)) && isFinite(b) && Math.floor(b) == b) return "https://vimeo.com/".concat(b);
        if (y(b)) return b.replace("http:", "https:");
        if (a) throw new TypeError("\u201c".concat(a,
            "\u201d is not a valid video id."));
        throw new TypeError("\u201c".concat(b, "\u201d is not a vimeo.com url."));
    }

    function v() {
        if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'");
        if (m(this, "_id", "_WeakMap_" + Math.random().toString().substring(2) + "." + Math.random().toString().substring(2)), 0 < arguments.length) throw new TypeError("WeakMap iterable is not supported");
    }

    function B(c, b) {
        if (Object(c) !== c || !L.call(c, "_id")) throw new TypeError(b + " method called on incompatible receiver " + typeof c);
    }

    function z(c, b, a) {
        var d = n.get(c.element) || {};
        b in d || (d[b] = []);
        d[b].push(a);
        n.set(c.element, d)
    }

    function C(c, b) {
        return (n.get(c.element) || {})[b] || []
    }

    function D(c, b, a) {
        var d = n.get(c.element) || {};
        if (!d[b]) return !0;
        if (!a) return d[b] = [], n.set(c.element, d), !0;
        a = d[b].indexOf(a);
        return -1 !== a && d[b].splice(a, 1), n.set(c.element, d), d[b] && 0 === d[b].length
    }

    function M(c, b) {
        return T.reduce(function(a, b) {
                var e = c.getAttribute("data-vimeo-".concat(b));
                return !e && "" !== e || (a[b] = "" === e ? 1 : e), a
            }, 1 < arguments.length && void 0 !==
            b ? b : {})
    }

    function F(c, b) {
        var a = c.html;
        if (!b) throw new TypeError("An element must be provided");
        if (null !== b.getAttribute("data-vimeo-initialized")) return b.querySelector("iframe");
        var d = document.createElement("div");
        return d.innerHTML = a, b.appendChild(d.firstChild), b.setAttribute("data-vimeo-initialized", "true"), b.querySelector("iframe")
    }

    function N(c, b, a) {
        var d = 1 < arguments.length && void 0 !== b ? b : {},
            e = 2 < arguments.length ? a : void 0;
        return new Promise(function(a, b) {
            if (!y(c)) throw new TypeError("\u201c".concat(c,
                "\u201d is not a vimeo.com url."));
            var x = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(c)),
                h;
            for (h in d) d.hasOwnProperty(h) && (x += "&".concat(h, "=").concat(encodeURIComponent(d[h])));
            var q = new("XDomainRequest" in window ? XDomainRequest : XMLHttpRequest);
            q.open("GET", x, !0);
            q.onload = function() {
                if (404 !== q.status)
                    if (403 !== q.status) try {
                        var d = JSON.parse(q.responseText);
                        if (403 === d.domain_status_code) return F(d, e), void b(Error("\u201c".concat(c, "\u201d is not embeddable.")));
                        a(d)
                    } catch (g) {
                        b(g)
                    } else b(Error("\u201c".concat(c,
                        "\u201d is not embeddable.")));
                    else b(Error("\u201c".concat(c, "\u201d was not found.")))
            };
            q.onerror = function() {
                var a = q.status ? " (".concat(q.status, ")") : "";
                b(Error("There was an error fetching the embed code from Vimeo".concat(a, ".")))
            };
            q.send()
        })
    }

    function O(c) {
        if ("string" == typeof c) try {
            c = JSON.parse(c)
        } catch (b) {
            return console.warn(b), {}
        }
        return c
    }

    function A(c, b, a) {
        var d, e;
        c.element.contentWindow && c.element.contentWindow.postMessage && (d = {
            method: b
        }, void 0 !== a && (d.value = a), 8 <= (e = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,
            "$1"))) && 10 > e && (d = JSON.stringify(d)), c.element.contentWindow.postMessage(d, c.origin))
    }

    function U(c, b) {
        var a, d, e = [];
        (b = O(b)).event ? ("error" === b.event && C(c, b.data.method).forEach(function(a) {
            var d = Error(b.data.message);
            d.name = b.data.name;
            a.reject(d);
            D(c, b.data.method, a)
        }), e = C(c, "event:".concat(b.event)), a = b.data) : !b.method || (d = function(a, b) {
            var c = C(a, b);
            if (1 > c.length) return !1;
            c = c.shift();
            return D(a, b, c), c
        }(c, b.method)) && (e.push(d), a = b.value);
        e.forEach(function(b) {
            try {
                if ("function" == typeof b) return void b.call(c,
                    a);
                b.resolve(a)
            } catch (d) {}
        })
    }
    var P = "undefined" != typeof global && "[object global]" === {}.toString.call(global),
        G = void 0 !== Array.prototype.indexOf,
        V = "undefined" != typeof window && void 0 !== window.postMessage;
    if (!(P || G && V)) throw Error("Sorry, the Vimeo Player API is not available in this browser.");
    var Q, L, m, E = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    (Q = "undefined" != typeof self ? self : "undefined" != typeof window ?
        window : E).WeakMap || (L = Object.prototype.hasOwnProperty, m = function(c, b, a) {
        Object.defineProperty ? Object.defineProperty(c, b, {
            configurable: !0,
            writable: !0,
            value: a
        }) : c[b] = a
    }, Q.WeakMap = (m(v.prototype, "delete", function(c) {
        if (B(this, "delete"), Object(c) !== c) return !1;
        var b = c[this._id];
        return !(!b || b[0] !== c) && (delete c[this._id], !0)
    }), m(v.prototype, "get", function(c) {
        if (B(this, "get"), Object(c) === c) {
            var b = c[this._id];
            return b && b[0] === c ? b[1] : void 0
        }
    }), m(v.prototype, "has", function(c) {
        if (B(this, "has"), Object(c) !== c) return !1;
        var b = c[this._id];
        return !(!b || b[0] !== c)
    }), m(v.prototype, "set", function(c, b) {
        if (B(this, "set"), Object(c) !== c) throw new TypeError("Invalid value used as weak map key");
        var a = c[this._id];
        return a && a[0] === c ? a[1] = b : m(c, this._id, [c, b]), this
    }), m(v, "_polyfill", !0), v));
    var R, p = (function(c) {
            E.Promise = E.Promise || function() {
                function b(a, b) {
                    this.fn = a;
                    this.self = b;
                    this.next = void 0
                }

                function a(a, b) {
                    m.add(a, b);
                    H = H || t(m.drain)
                }

                function c(a) {
                    var b, d = typeof a;
                    return null == a || "object" != d && "function" != d || (b = a.then), "function" ==
                        typeof b && b
                }

                function e() {
                    for (var a = 0; a < this.chain.length; a++) {
                        var b = 1 === this.state ? this.chain[a].success : this.chain[a].failure,
                            e = this.chain[a],
                            f = void 0,
                            g = void 0;
                        try {
                            !1 === b ? e.reject(this.msg) : (f = !0 === b ? this.msg : b.call(void 0, this.msg)) === e.promise ? e.reject(TypeError("Promise-chain cycle")) : (g = c(f)) ? g.call(f, e.resolve, e.reject) : e.resolve(f)
                        } catch (h) {
                            e.reject(h)
                        }!0
                    }
                    this.chain.length = 0
                }

                function f(b) {
                    var S, g = this;
                    if (!g.triggered) {
                        g.triggered = !0;
                        g.def && (g = g.def);
                        try {
                            (S = c(b)) ? a(function() {
                                var a = new n(g);
                                try {
                                    S.call(b, function() {
                                        f.apply(a, arguments)
                                    }, function() {
                                        h.apply(a, arguments)
                                    })
                                } catch (c) {
                                    h.call(a, c)
                                }
                            }): (g.msg = b, g.state = 1, 0 < g.chain.length && a(e, g))
                        } catch (W) {
                            h.call(new n(g), W)
                        }
                    }
                }

                function h(b) {
                    var c = this;
                    c.triggered || (c.triggered = !0, c.def && (c = c.def), c.msg = b, c.state = 2, 0 < c.chain.length && a(e, c))
                }

                function x(a, b, c, d) {
                    for (var e = 0; e < b.length; e++) ! function(e) {
                        a.resolve(b[e]).then(function(a) {
                            c(e, a)
                        }, d)
                    }(e)
                }

                function n(a) {
                    this.def = a;
                    this.triggered = !1
                }

                function q(a) {
                    this.promise = a;
                    this.state = 0;
                    this.triggered = !1;
                    this.chain = [];
                    this.msg = void 0
                }

                function w(b) {
                    if ("function" != typeof b) throw TypeError("Not a function");
                    if (0 !== this.__NPO__) throw TypeError("Not a promise");
                    this.__NPO__ = 1;
                    var c = new q(this);
                    this.then = function(b, d) {
                        var g = {
                            success: "function" != typeof b || b,
                            failure: "function" == typeof d && d
                        };
                        return g.promise = new this.constructor(function(a, b) {
                            if ("function" != typeof a || "function" != typeof b) throw TypeError("Not a function");
                            g.resolve = a;
                            g.reject = b
                        }), c.chain.push(g), 0 !== c.state && a(e, c), g.promise
                    };
                    this.catch =
                        function(a) {
                            return this.then(void 0, a)
                        };
                    try {
                        b.call(void 0, function(a) {
                            f.call(c, a)
                        }, function(a) {
                            h.call(c, a)
                        })
                    } catch (d) {
                        h.call(c, d)
                    }
                }
                var g, H, m, p, k, l, r = Object.prototype.toString,
                    t = "undefined" != typeof setImmediate ? function(a) {
                        return setImmediate(a)
                    } : setTimeout;
                try {
                    Object.defineProperty({}, "x", {}), g = function(a, b, c, d) {
                        return Object.defineProperty(a, b, {
                            value: c,
                            writable: !0,
                            configurable: !1 !== d
                        })
                    }
                } catch (v) {
                    g = function(a, b, c) {
                        return a[b] = c, a
                    }
                }
                var u = g({}, "constructor", w, !(m = {
                    add: function(a, c) {
                        l = new b(a, c);
                        k ? k.next =
                            l : p = l;
                        k = l;
                        l = void 0
                    },
                    drain: function() {
                        var a = p;
                        for (p = k = H = void 0; a;) a.fn.call(a.self), a = a.next
                    }
                }));
                return g(w.prototype = u, "__NPO__", 0, !1), g(w, "resolve", function(a) {
                    return a && "object" == typeof a && 1 === a.__NPO__ ? a : new this(function(b, c) {
                        if ("function" != typeof b || "function" != typeof c) throw TypeError("Not a function");
                        b(a)
                    })
                }), g(w, "reject", function(a) {
                    return new this(function(b, c) {
                        if ("function" != typeof b || "function" != typeof c) throw TypeError("Not a function");
                        c(a)
                    })
                }), g(w, "all", function(a) {
                    var b = this;
                    return "[object Array]" !=
                        r.call(a) ? b.reject(TypeError("Not an array")) : 0 === a.length ? b.resolve([]) : new b(function(c, d) {
                            if ("function" != typeof c || "function" != typeof d) throw TypeError("Not a function");
                            var e = a.length,
                                g = Array(e),
                                f = 0;
                            x(b, a, function(a, b) {
                                g[a] = b;
                                ++f === e && c(g)
                            }, d)
                        })
                }), g(w, "race", function(a) {
                    var b = this;
                    return "[object Array]" != r.call(a) ? b.reject(TypeError("Not an array")) : new b(function(c, d) {
                        if ("function" != typeof c || "function" != typeof d) throw TypeError("Not a function");
                        x(b, a, function(a, b) {
                            c(b)
                        }, d)
                    })
                }), w
            }();
            c.exports &&
                (c.exports = E.Promise)
        }(R = {
            exports: {}
        }), R.exports),
        n = new WeakMap,
        T = "autopause autoplay background byline color controls dnt height id loop maxheight maxwidth muted playsinline portrait responsive speed texttrack title transparent url width".split(" "),
        k, I, l, u = new WeakMap,
        J = new WeakMap,
        h = {},
        G = function() {
            function c(a) {
                var b, e, f = this,
                    l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                if (!(this instanceof c)) throw new TypeError("Cannot call a class as a function");
                if (!0, window.jQuery && a instanceof jQuery && (1 < a.length && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), a = a[0]), "undefined" != typeof document && "string" == typeof a && (a = document.getElementById(a)), b = a, !Boolean(b && 1 === b.nodeType && "nodeName" in b && b.ownerDocument && b.ownerDocument.defaultView)) throw new TypeError("You must pass either a valid element or a valid id.");
                if ("IFRAME" === a.nodeName || (e = a.querySelector("iframe")) && (a = e), "IFRAME" === a.nodeName && !y(a.getAttribute("src") ||
                        "")) throw Error("The player element passed isn\u2019t a Vimeo embed.");
                if (u.has(a)) return u.get(a);
                this._window = a.ownerDocument.defaultView;
                this.element = a;
                this.origin = "*";
                var k;
                b = new p(function(b, c) {
                    var d;
                    f._onMessage = function(a) {
                        if (y(a.origin) && f.element.contentWindow === a.source) {
                            "*" === f.origin && (f.origin = a.origin);
                            if ((a = O(a.data)) && "error" === a.event && a.data && "ready" === a.data.method) {
                                var d = Error(a.data.message);
                                return d.name = a.data.name, void c(d)
                            }
                            d = a && "ping" === a.method;
                            if (a && "ready" === a.event || d) return f.element.setAttribute("data-ready",
                                "true"), void b();
                            U(f, a)
                        }
                    };
                    f._window.addEventListener("message", f._onMessage);
                    "IFRAME" !== f.element.nodeName && N(K(d = M(a, l)), d, a).then(function(b) {
                        var c, d, e = F(b, a);
                        return f.element = e, f._originalElement = a, c = a, d = n.get(c), n.set(e, d), n.delete(c), u.set(f.element, f), b
                    }).catch(c)
                });
                return J.set(this, b), u.set(this.element, this), "IFRAME" === this.element.nodeName && A(this, "ping"), h.isEnabled && (k = function() {
                    return h.exit()
                }, h.on("fullscreenchange", function() {
                    (h.isFullscreen ? z : D)(f, "event:exitFullscreen", k);
                    f.ready().then(function() {
                        A(f,
                            "fullscreenchange", h.isFullscreen)
                    })
                })), this
            }
            var b;
            return b = [{
                    key: "callMethod",
                    value: function(a, b) {
                        var c = this,
                            f = 1 < arguments.length && void 0 !== b ? b : {};
                        return new p(function(b, d) {
                            return c.ready().then(function() {
                                z(c, a, {
                                    resolve: b,
                                    reject: d
                                });
                                A(c, a, f)
                            }).catch(d)
                        })
                    }
                }, {
                    key: "get",
                    value: function(a) {
                        var b = this;
                        return new p(function(c, f) {
                            return a = t(a, "get"), b.ready().then(function() {
                                z(b, a, {
                                    resolve: c,
                                    reject: f
                                });
                                A(b, a)
                            }).catch(f)
                        })
                    }
                }, {
                    key: "set",
                    value: function(a, b) {
                        var c = this;
                        return new p(function(f, h) {
                            if (a = t(a,
                                    "set"), null == b) throw new TypeError("There must be a value to set.");
                            return c.ready().then(function() {
                                z(c, a, {
                                    resolve: f,
                                    reject: h
                                });
                                A(c, a, b)
                            }).catch(h)
                        })
                    }
                }, {
                    key: "on",
                    value: function(a, b) {
                        if (!a) throw new TypeError("You must pass an event name.");
                        if (!b) throw new TypeError("You must pass a callback function.");
                        if ("function" != typeof b) throw new TypeError("The callback must be a function.");
                        0 === C(this, "event:".concat(a)).length && this.callMethod("addEventListener", a).catch(function() {});
                        z(this, "event:".concat(a),
                            b)
                    }
                }, {
                    key: "off",
                    value: function(a, b) {
                        if (!a) throw new TypeError("You must pass an event name.");
                        if (b && "function" != typeof b) throw new TypeError("The callback must be a function.");
                        D(this, "event:".concat(a), b) && this.callMethod("removeEventListener", a).catch(function(a) {})
                    }
                }, {
                    key: "loadVideo",
                    value: function(a) {
                        return this.callMethod("loadVideo", a)
                    }
                }, {
                    key: "ready",
                    value: function() {
                        var a = J.get(this) || new p(function(a, b) {
                            b(Error("Unknown player. Probably unloaded."))
                        });
                        return p.resolve(a)
                    }
                }, {
                    key: "addCuePoint",
                    value: function(a, b) {
                        return this.callMethod("addCuePoint", {
                            time: a,
                            data: 1 < arguments.length && void 0 !== b ? b : {}
                        })
                    }
                }, {
                    key: "removeCuePoint",
                    value: function(a) {
                        return this.callMethod("removeCuePoint", a)
                    }
                }, {
                    key: "enableTextTrack",
                    value: function(a, b) {
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
                },
                {
                    key: "play",
                    value: function() {
                        return this.callMethod("play")
                    }
                }, {
                    key: "requestFullscreen",
                    value: function() {
                        return h.isEnabled ? h.request(this.element) : this.callMethod("requestFullscreen")
                    }
                }, {
                    key: "exitFullscreen",
                    value: function() {
                        return h.isEnabled ? h.exit() : this.callMethod("exitFullscreen")
                    }
                }, {
                    key: "getFullscreen",
                    value: function() {
                        return h.isEnabled ? p.resolve(h.isFullscreen) : this.get("fullscreen")
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
                        var a = this;
                        return new p(function(b) {
                            var c;
                            J.delete(a);
                            u.delete(a.element);
                            a._originalElement && (u.delete(a._originalElement), a._originalElement.removeAttribute("data-vimeo-initialized"));
                            a.element && "IFRAME" === a.element.nodeName && a.element.parentNode && (a.element.parentNode.parentNode &&
                                a._originalElement && a._originalElement !== a.element.parentNode ? a.element.parentNode.parentNode.removeChild(a.element.parentNode) : a.element.parentNode.removeChild(a.element));
                            a.element && "DIV" === a.element.nodeName && a.element.parentNode && (a.element.removeAttribute("data-vimeo-initialized"), (c = a.element.querySelector("iframe")) && c.parentNode && (c.parentNode.parentNode && a._originalElement && a._originalElement !== c.parentNode ? c.parentNode.parentNode.removeChild(c.parentNode) : c.parentNode.removeChild(c)));
                            a._window.removeEventListener("message",
                                a._onMessage);
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
                }, {
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
                },
                {
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
                },
                {
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
                },
                {
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
                },
                {
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
            ], r(c.prototype, b), c
        }();
    return P || (k = function() {
            for (var c, b = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "),
                        "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                    ],
                    a = 0, d = b.length, e = {}; a < d; a++)
                if ((c = b[a]) && c[1] in document) {
                    for (a = 0; a < c.length; a++) e[b[0][a]] = c[a];
                    return e
                }
            return !1
        }(), I = {
            fullscreenchange: k.fullscreenchange,
            fullscreenerror: k.fullscreenerror
        }, l = {
            request: function(c) {
                return new Promise(function(b, a) {
                    function d() {
                        l.off("fullscreenchange", d);
                        b()
                    }
                    l.on("fullscreenchange", d);
                    var e = (c = c || document.documentElement)[k.requestFullscreen]();
                    e instanceof Promise && e.then(d).catch(a)
                })
            },
            exit: function() {
                return new Promise(function(c, b) {
                    var a, d;
                    l.isFullscreen ? (a = function f() {
                        l.off("fullscreenchange",
                            f);
                        c()
                    }, l.on("fullscreenchange", a), (d = document[k.exitFullscreen]()) instanceof Promise && d.then(a).catch(b)) : c()
                })
            },
            on: function(c, b) {
                var a = I[c];
                a && document.addEventListener(a, b)
            },
            off: function(c, b) {
                var a = I[c];
                a && document.removeEventListener(a, b)
            }
        }, Object.defineProperties(l, {
            isFullscreen: {
                get: function() {
                    return Boolean(document[k.fullscreenElement])
                }
            },
            element: {
                enumerable: !0,
                get: function() {
                    return document[k.fullscreenElement]
                }
            },
            isEnabled: {
                enumerable: !0,
                get: function() {
                    return Boolean(document[k.fullscreenEnabled])
                }
            }
        }),
        h = l,
        function(c) {
            function b(a) {
                "console" in window && console.error && console.error("There was an error creating an embed: ".concat(a))
            }[].slice.call((0 < arguments.length && void 0 !== c ? c : document).querySelectorAll("[data-vimeo-id], [data-vimeo-url]")).forEach(function(a) {
                try {
                    if (null === a.getAttribute("data-vimeo-defer")) {
                        var c = M(a);
                        N(K(c), c, a).then(function(b) {
                            return F(b, a)
                        }).catch(b)
                    }
                } catch (e) {
                    b(e)
                }
            })
        }(),
        function(c) {
            var b = 0 < arguments.length && void 0 !== c ? c : document;
            window.VimeoPlayerResizeEmbeds_ || (window.VimeoPlayerResizeEmbeds_ = !0, window.addEventListener("message", function(a) {
                if (y(a.origin) && a.data && "spacechange" === a.data.event)
                    for (var c = b.querySelectorAll("iframe"), e = 0; e < c.length; e++)
                        if (c[e].contentWindow === a.source) {
                            c[e].parentElement.style.paddingBottom = "".concat(a.data.data[0].bottom, "px");
                            break
                        }
            }))
        }()), G
});