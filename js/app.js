(() => {
    "use strict";
    var t, n, o = {
            142: (t, n, o) => {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.Character = void 0;
                var i = o(98);
                n.Character = function t() {
                    var n = this;
                    this.characterClass = ".donut", this.annotationClass = ".annotation", this.annotationXPos = 50, this.annotationYPos = 320, this.isRunning = !1, this.isJumping = !1, this.isWin = !1, this.characterPosition = 0, this.run = function() {
                        !1 === n.isRunning && (n.donut.classList.add("running"), n.isRunning = setInterval((function() {
                            var o = n.collide(n.donut, window.terrain.rock);
                            if (n.isWin || o) n.stop(), n.annotate("Ouch!"), n.donut.style.left = "0px", n.characterAnnotation.style.left = n.annotationXPos + "px", window.character = new t, window.terrain = new i.Terrain;
                            else {
                                var e = parseInt(n.getProp("left"));
                                n.characterPosition = e;
                                var r = e + 50;
                                e >= 1020 ? (n.stop(), n.isWin = !0, n.characterAnnotation.style.left = n.annotationXPos + "px", n.donut.style.left = "0px", window.character = new t, window.terrain = new i.Terrain, setTimeout((function() {
                                    n.annotate("Yay!")
                                }), 10)) : (n.characterAnnotation.style.left = r + 2 + "px", n.donut.style.left = e + 2 + "px")
                            }
                        }), 10))
                    }, this.stop = function() {
                        !1 !== n.isRunning && (clearInterval(n.isRunning), n.isRunning = !1, n.donut.classList.remove("running"))
                    }, this.jump = function() {
                        if (!1 === n.isJumping) {
                            var t, o = window.terrain.rockSize + 90,
                                i = t = parseInt(n.getProp("bottom")),
                                e = !1;
                            n.isJumping = setInterval((function() {
                                var r = parseInt(n.donut.style.bottom);
                                i <= t && t <= i + o && !e ? (t = t + 15 >= i + o ? r + 2 : r + 3, n.donut.style.bottom = t + "px", n.characterAnnotation.style.bottom = t + 160 + "px", r + 2 >= i + o && (e = !0)) : i < t && e ? (t = t - 30 >= i ? r - 4 : r - 3, n.characterAnnotation.style.bottom = t + 160 + "px", n.donut.style.bottom = t + "px") : (clearInterval(n.isJumping), n.isJumping = !1, n.characterAnnotation.style.bottom = i + 160 + "px", n.donut.style.bottom = i + "px")
                            }), 10)
                        }
                    }, this.annotate = function(t) {
                        n.characterAnnotation.style.opacity = "1", n.characterAnnotation.querySelector(".annotation-wrapper").innerText = t, setTimeout((function() {
                            n.characterAnnotation.style.opacity = "0"
                        }), 5e3)
                    }, this.getProp = function(t) {
                        return getComputedStyle(n.donut).getPropertyValue(t)
                    }, this.collide = function(t, n) {
                        var o = t.getBoundingClientRect(),
                            i = n.getBoundingClientRect();
                        return !(o.top - 20 > i.bottom + 30 || o.right - 20 < i.left + 30 || o.bottom - 20 < i.top + 30 || o.left - 20 > i.right - 50)
                    }, this.donut = document.querySelector(this.characterClass), this.characterAnnotation = document.querySelector(this.annotationClass)
                }
            },
            98: (t, n) => {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.Terrain = void 0;
                n.Terrain = function() {
                    this.rockMinOffset = 270, this.rockMaxOffset = 920, this.minRockSize = 40, this.maxRockSize = 85, this.rockClass = ".rock", this.rockPosition = 0, this.rockSize = 0, this.getRandomPosition = function(t, n) {
                        return t = Math.ceil(t), n = Math.floor(n), Math.floor(Math.random() * (n - t) + t)
                    }, this.rock = document.querySelector(this.rockClass), this.rockPosition = this.getRandomPosition(this.rockMinOffset, this.rockMaxOffset), this.rockSize = this.getRandomPosition(this.minRockSize, this.maxRockSize), this.rock.style.left = this.rockPosition.toString() + "px", this.rock.style.width = this.rockSize.toString() + "px", this.rock.style.height = this.rockSize.toString() + "px"
                }
            }
        },
        i = {};

    function e(t) {
        if (i[t]) return i[t].exports;
        var n = i[t] = {
            exports: {}
        };
        return o[t](n, n.exports, e), n.exports
    }
    t = e(98), n = e(142), document.addEventListener("DOMContentLoaded", (function() {
        window.character = new n.Character, window.terrain = new t.Terrain, document.addEventListener("keyup", (function(t) {
            "Space" === t.code && window.character.jump(), "KeyS" === t.code && window.character.stop(), "KeyD" === t.code && window.character.run()
        }))
    }))
})();