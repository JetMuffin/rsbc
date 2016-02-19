(function(a) {
    a.fn.carousel = function(b) {
        b = a.extend({
            prev: null,
            next: null,
            mousewheel: false,
            stopByMouseover: true,
            delay: 800,
            speed: 1000,
            range: 100,
            easing: null,
            vertical: false,
            direction: null,
            loop: true,
            visible: 4,
            start: 0,
            scroll: 1,
            before: null,
            after: null,
            type: null
        },
        b || {});
        if (!b.type) {
            return this.each(function(n) {
                var m = a(this),
                t = 0,
                z = 0,
                p;
                var q = a(this).children(),
                c = q.children(),
                f = c.length,
                u = m.width(),
                s = m.height(),
                h = c.eq(0).outerWidth(true),
                g = c.eq(0).outerHeight(true);
                var o = b.scroll;
                m.css({
                    overflow: "hidden"
                });
                if (b.vertical) {
                    o += parseInt(s / (c.length * g));
                    z = g * f;
                    q.height((o + 1) * z);
                    m.css("height", s)
                } else {
                    c.css({
                        "float": "left"
                    });
                    o += parseInt(u / (c.length * h));
                    t = h * f;
                    q.width((o + 1) * t);
                    m.css("width", u)
                }
                var y = function() {
                    var B = c.clone();
                    for (var A = 0; A < o; A++) {
                        B.clone().appendTo(q)
                    }
                };
                y();
                var x;
                var v = function() {
                    q.animate({
                        "margin-left": "-=" + (b.scroll * h)
                    },
                    b.speed,
                    function() {
                        var B = Math.abs(parseInt(q.css("margin-left")));
                        if (B + (b.scroll * h) + u >= (o + 1) * t) {
                            var A = parseInt(B / t);
                            q.css("margin-left", -(B - A * t))
                        }
                        x = false
                    })
                };
                var w = function() {
                    var C = parseInt(q.css("margin-left"));
                    var A = Math.abs(parseInt(q.css("margin-left")));
                    if (A - (b.scroll * h) <= 0 || C >= 0) {
                        var B = parseInt(b.scroll * h / t) + 1;
                        q.css("margin-left", -B * t - A)
                    }
                    q.animate({
                        "margin-left": "+=" + (b.scroll * h)
                    },
                    b.speed,
                    function() {
                        x = false
                    })
                };
                var e = function() {
                    q.animate({
                        "margin-top": "-=" + b.scroll * g
                    },
                    b.speed,
                    function() {
                        var B = Math.abs(parseInt(q.css("margin-top")));
                        if (B + (b.scroll * g) + s >= (o + 1) * z) {
                            var A = parseInt(B / z);
                            q.css("margin-top", -(B - A * z))
                        }
                        x = false
                    })
                };
                var r = function() {
                    var C = parseInt(q.css("margin-top"));
                    var B = Math.abs(C);
                    if (B - (b.scroll * g) <= 0 || C >= 0) {
                        var A = parseInt(b.scroll * g / z) + 1;
                        q.css("margin-top", -A * z - B)
                    }
                    q.animate({
                        "margin-top": "+=" + b.scroll * g
                    },
                    b.speed,
                    function() {
                        x = false
                    })
                };
                var d = function() {
                    if (b.vertical) {
                        p = setInterval(function() {
                            if (b.direction && b.direction == "s") {
                                r()
                            } else {
                                e()
                            }
                        },
                        b.speed + b.delay)
                    } else {
                        p = setInterval(function() {
                            if (b.direction && b.direction == "w") {
                                w()
                            } else {
                                v()
                            }
                        },
                        b.speed + b.delay)
                    }
                };
                d();
                if (b.prev) {
                    a(b.prev).hover(function() {
                        clearInterval(p);
                        a(this).unbind("click").click(function() {
                            if (x) {
                                return false
                            }
                            x = true;
                            if (b.vertical) {
                                if (b.direction && b.direction == "s") {
                                    e()
                                } else {
                                    r()
                                }
                            } else {
                                if (b.direction && b.direction == "w") {
                                    v()
                                } else {
                                    w()
                                }
                            }
                        })
                    },
                    function() {
                        clearInterval(p);
                        d()
                    })
                }
                if (b.next) {
                    a(b.next).hover(function() {
                        clearInterval(p);
                        a(this).unbind("click").click(function() {
                            if (x) {
                                return false
                            }
                            x = true;
                            if (b.vertical) {
                                if (b.direction && b.direction == "s") {
                                    r()
                                } else {
                                    e()
                                }
                            } else {
                                if (b.direction && b.direction == "w") {
                                    w()
                                } else {
                                    v()
                                }
                            }
                        })
                    },
                    function() {
                        clearInterval(p);
                        d()
                    })
                }
                if (b.stopByMouseover) {
                    m.hover(function() {
                        clearInterval(p)
                    },
                    function() {
                        d()
                    })
                }
            })
        } else {
            if (b.type == "ceaseless") {
                return this.each(function(p) {
                    var s = a(this),
                    n = 0,
                    q = 0,
                    d;
                    var r = a("ul", a(this)),
                    w = a("li", r),
                    e = s.width(),
                    u = s.height(),
                    o = 2;
                    s.css({
                        overflow: "hidden"
                    });
                    if (b.vertical) {
                        o = parseInt(u / (w.length * w.eq(0).outerHeight(true))) + 1;
                        w.each(function() {
                            q += parseInt(a(this).outerHeight(true))
                        });
                        r.height((o + 1) * q);
                        s.css("height", u)
                    } else {
                        w.css({
                            "float": "left"
                        });
                        o = parseInt(e / (w.length * w.eq(0).outerWidth(true))) + 1;
                        w.each(function() {
                            n += parseInt(a(this).outerWidth(true))
                        });
                        r.width((o + 1) * n + 10);
                        s.css("width", e)
                    }
                    var v = r.children("li").clone();
                    for (var m = 0; m < o; m++) {
                        v.clone().appendTo(r)
                    }
                    var h = function() {
                        d = setInterval(function() {
                            s.animate({
                                scrollLeft: "+=" + 1
                            },
                            0);
                            var x = s.scrollLeft();
                            if (x + e >= (o + 1) * n) {
                                s.scrollLeft(x - n)
                            }
                        },
                        b.speed)
                    };
                    var g = function() {
                        d = setInterval(function() {
                            s.animate({
                                scrollLeft: "-=" + 1
                            },
                            0);
                            var x = s.scrollLeft();
                            if (x <= 0) {
                                s.scrollLeft(n)
                            }
                        },
                        b.speed)
                    };
                    var f = function() {
                        d = setInterval(function() {
                            s.animate({
                                scrollTop: "+=" + 1
                            },
                            0);
                            var x = s.scrollTop();
                            if (x + u >= (o + 1) * q) {
                                s.scrollTop(x - q)
                            }
                        },
                        b.speed)
                    };
                    var c = function() {
                        d = setInterval(function() {
                            s.animate({
                                scrollTop: "-=" + 1
                            },
                            0);
                            var x = s.scrollTop();
                            if (x <= 0) {
                                s.scrollTop(q)
                            }
                        },
                        b.speed)
                    };
                    var t = function() {
                        if (b.vertical) {
                            if (b.direction && b.direction == "s") {
                                c()
                            } else {
                                f()
                            }
                        } else {
                            if (b.direction && b.direction == "w") {
                                g()
                            } else {
                                h()
                            }
                        }
                    };
                    t();
                    if (b.prev) {
                        a(b.prev).hover(function() {
                            clearInterval(d);
                            if (b.vertical) {
                                if (b.direction && b.direction == "s") {
                                    f()
                                } else {
                                    c()
                                }
                            } else {
                                if (b.direction && b.direction == "w") {
                                    h()
                                } else {
                                    g()
                                }
                            }
                        },
                        function() {
                            clearInterval(d);
                            t()
                        })
                    }
                    if (b.next) {
                        a(b.next).hover(function() {
                            clearInterval(d);
                            if (b.vertical) {
                                if (b.direction && b.direction == "s") {
                                    c()
                                } else {
                                    f()
                                }
                            } else {
                                if (b.direction && b.direction == "w") {
                                    g()
                                } else {
                                    h()
                                }
                            }
                        },
                        function() {
                            clearInterval(d);
                            t()
                        })
                    }
                    if (b.stopByMouseover) {
                        s.hover(function() {
                            clearInterval(d)
                        },
                        function() {
                            t()
                        })
                    }
                })
            }
        }
    }
})(jQuery);