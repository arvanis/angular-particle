(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['angular-particle'] = {}),global.core,global.common));
}(this, (function (exports,core,common) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ParticlesComponent = /** @class */ (function () {
    function ParticlesComponent() {
        this.width = 100;
        this.height = 100;
        this.style = {};
    }
    ParticlesComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'particles',
                    template: "\n        <div [ngStyle]=\"style\" class=\"particles-container\">\n            <canvas d-particles [params]=\"params\" [style.width.%]=\"width\" [style.height.%]=\"height\"></canvas>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    ParticlesComponent.ctorParameters = function () { return []; };
    ParticlesComponent.propDecorators = {
        width: [{ type: core.Input }],
        height: [{ type: core.Input }],
        params: [{ type: core.Input }],
        style: [{ type: core.Input }]
    };
    return ParticlesComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @typedef {?} */
/** @type {?} */
var hexToRgb = function (hex) {
    /** @type {?} */
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });
    /** @type {?} */
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};
/** @type {?} */
var clamp = function (number, min, max) {
    return Math.min(Math.max(number, min), max);
};
/** @type {?} */
var isInArray = function (value, array) {
    return array.indexOf(value) > -1;
};
/** @type {?} */
var deepExtend = function (destination, source) {
    for (var property in source) {
        if (source[property] &&
            source[property].constructor &&
            source[property].constructor === Object) {
            destination[property] = destination[property] || {};
            deepExtend(destination[property], source[property]);
        }
        else {
            destination[property] = source[property];
        }
    }
    return destination;
};
/** @type {?} */
var getColor = function (colorObject) {
    /** @type {?} */
    var color = {};
    if (typeof (colorObject) == 'object') {
        if (colorObject instanceof Array) {
            /** @type {?} */
            var selectedColor = colorObject[Math.floor(Math.random() * colorObject.length)];
            color.rgb = hexToRgb(selectedColor);
        }
        else {
            var r = colorObject.r, g = colorObject.g, b = colorObject.b;
            if (r !== undefined && g !== undefined && b !== undefined) {
                color.rgb = { r: r, g: g, b: b };
            }
            else {
                var h = colorObject.h, s = colorObject.s, l = colorObject.l;
                if (h !== undefined && g !== undefined && b !== undefined) {
                    color.hsl = { h: h, s: s, l: l };
                }
            }
        }
    }
    else if (colorObject == 'random') {
        color.rgb = {
            r: (Math.floor(Math.random() * 255) + 1),
            g: (Math.floor(Math.random() * 255) + 1),
            b: (Math.floor(Math.random() * 255) + 1)
        };
    }
    else if (typeof (colorObject) == 'string') {
        color.rgb = hexToRgb(colorObject);
    }
    return color;
};
/** @type {?} */
var getDefaultParams = function () {
    return {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#FFF'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: '',
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#FFF',
                opacity: 0.6,
                width: 1,
                shadow: {
                    enable: false,
                    blur: 5,
                    color: 'lime'
                }
            },
            move: {
                enable: true,
                speed: 3,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: true,
                attract: {
                    enable: false,
                    rotateX: 3000,
                    rotateY: 3000
                }
            },
            array: []
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: 0.4
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: true
    };
};
/**
 * @param {?} params
 * @param {?} tmp
 * @return {?}
 */
function loadImg(params, tmp) {
    var particles = this.params.particles;
    tmp.img_error = undefined;
    if (particles.shape.type == 'image' && particles.shape.image.src != '') {
        if (tmp.img_type == 'svg') {
            /** @type {?} */
            var xhr_1 = new XMLHttpRequest();
            xhr_1.open('GET', particles.shape.image.src);
            xhr_1.onreadystatechange = function (data) {
                if (xhr_1.readyState == 4) {
                    if (xhr_1.status == 200) {
                        tmp.source_svg = data.currentTarget.response;
                        if (tmp.source_svg == undefined) {
                            /** @type {?} */
                            var check = void 0;
                            tmp.checkAnimFrame = requestAnimationFrame(check);
                        }
                    }
                    else {
                        tmp.img_error = true;
                        throw "Error : image not found";
                    }
                }
            };
            xhr_1.send();
        }
        else {
            /** @type {?} */
            var img_1 = new Image();
            img_1.addEventListener('load', function () {
                tmp.img_obj = img_1;
                cancelAnimationFrame(tmp.checkAnimFrame);
            });
            img_1.src = particles.shape.image.src;
        }
    }
    else {
        tmp.img_error = true;
        throw "Error : no image.src";
    }
}
/**
 * @param {?} particle
 * @param {?} tmp
 * @return {?}
 */
function createSvgImg(particle, tmp) {
    /** @type {?} */
    var svgXml = tmp.source_svg;
    /** @type {?} */
    var rgbHex = /#([0-9A-F]{3,6})/gi;
    /** @type {?} */
    var coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
        /** @type {?} */
        var color_value;
        if (particle.color.rgb) {
            var _a = particle.color.rgb, r_1 = _a.r, g_1 = _a.g, b_1 = _a.b;
            color_value = "rgba( " + r_1 + ", " + g_1 + ", " + b_1 + ", " + particle.opacity + " )";
        }
        else {
            var _b = particle.color.hsl, h = _b.h, s = _b.s, l = _b.l;
            color_value = "rgba( " + h + ", " + s + ", " + l + ", " + particle.opacity + " )";
        }
        return color_value;
    });
    /** @type {?} */
    var svg = new Blob([coloredSvgXml], {
        type: 'image/svg+xml;charset=utf-8'
    });
    /** @type {?} */
    var DOMURL = window.URL || window;
    /** @type {?} */
    var url = DOMURL.createObjectURL(svg);
    /** @type {?} */
    var img = new Image();
    img.addEventListener('load', function () {
        particle.img.obj = img;
        particle.img.loaded = true;
        DOMURL.revokeObjectURL(url);
        tmp.count_svg++;
    });
    img.src = url;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CanvasManager = /** @class */ (function () {
    function CanvasManager(_canvasParams, _params, _tmpParams) {
        this._canvasParams = _canvasParams;
        this._params = _params;
        this._tmpParams = _tmpParams;
        this._onWindowResize = this._onWindowResize.bind(this);
        this._retinaInit();
        this._canvasSize();
        this.particlesManager = new ParticlesManager(this._canvasParams, this._params, this._tmpParams);
        this.particlesManager.particlesCreate();
        this._densityAutoParticles();
        var particles = this._params.particles;
        particles.line_linked.color_rgb_line = hexToRgb(particles.line_linked.color);
    }
    /**
     * @return {?}
     */
    CanvasManager.prototype.cancelAnimation = /**
     * @return {?}
     */
    function () {
        if (!this._tmpParams.drawAnimFrame) {
            return;
        }
        cancelAnimationFrame(this._tmpParams.drawAnimFrame);
        this._tmpParams.drawAnimFrame = null;
    };
    /**
     * @return {?}
     */
    CanvasManager.prototype.draw = /**
     * @return {?}
     */
    function () {
        var particles = this._params.particles;
        if (particles.shape.type === 'image') {
            if (this._tmpParams.img_type === 'svg') {
                if (this._tmpParams.count_svg >= particles.number.value) {
                    this.particlesManager.particlesDraw();
                    if (!particles.move.enable) {
                        cancelAnimationFrame(this._tmpParams.drawAnimFrame);
                    }
                    else {
                        this._tmpParams.drawAnimFrame = requestAnimationFrame(this.draw.bind(this));
                    }
                }
                else {
                    if (!this._tmpParams.img_error) {
                        this._tmpParams.drawAnimFrame = requestAnimationFrame(this.draw.bind(this));
                    }
                }
            }
            else {
                if (this._tmpParams.img_obj !== undefined) {
                    this.particlesManager.particlesDraw();
                    if (!particles.move.enable) {
                        cancelAnimationFrame(this._tmpParams.drawAnimFrame);
                    }
                    else {
                        this._tmpParams.drawAnimFrame = requestAnimationFrame(this.draw.bind(this));
                    }
                }
                else {
                    if (!this._tmpParams.img_error) {
                        this._tmpParams.drawAnimFrame = requestAnimationFrame(this.draw.bind(this));
                    }
                }
            }
        }
        else {
            this.particlesManager.particlesDraw();
            if (!particles.move.enable) {
                cancelAnimationFrame(this._tmpParams.drawAnimFrame);
            }
            else {
                this._tmpParams.drawAnimFrame = requestAnimationFrame(this.draw.bind(this));
            }
        }
    };
    /**
     * @return {?}
     */
    CanvasManager.prototype._densityAutoParticles = /**
     * @return {?}
     */
    function () {
        var particles = this._params.particles;
        if (particles.number.density.enable) {
            /** @type {?} */
            var area = this._canvasParams.el.width * this._canvasParams.el.height / 1000;
            if (this._tmpParams.retina) {
                area = area / (this._canvasParams.pxratio * 2);
            }
            /** @type {?} */
            var nb_particles = area * particles.number.value / particles.number.density.value_area;
            /** @type {?} */
            var missing_particles = particles.array.length - nb_particles;
            if (missing_particles < 0) {
                this.particlesManager.pushParticles(Math.abs(missing_particles));
            }
            else {
                this.particlesManager.removeParticles(missing_particles);
            }
        }
    };
    /**
     * @return {?}
     */
    CanvasManager.prototype._retinaInit = /**
     * @return {?}
     */
    function () {
        if (this._params.retina_detect && window.devicePixelRatio > 1) {
            this._canvasParams.pxratio = window.devicePixelRatio;
            this._tmpParams.retina = true;
            this._canvasParams.width = this._canvasParams.el.offsetWidth * this._canvasParams.pxratio;
            this._canvasParams.height = this._canvasParams.el.offsetHeight * this._canvasParams.pxratio;
            this._params.particles.size.value = this._tmpParams.obj.size_value * this._canvasParams.pxratio;
            this._params.particles.size.anim.speed = this._tmpParams.obj.size_anim_speed * this._canvasParams.pxratio;
            this._params.particles.move.speed = this._tmpParams.obj.move_speed * this._canvasParams.pxratio;
            this._params.particles.line_linked.distance = this._tmpParams.obj.line_linked_distance * this._canvasParams.pxratio;
            this._params.interactivity.modes.grab.distance = this._tmpParams.obj.mode_grab_distance * this._canvasParams.pxratio;
            this._params.interactivity.modes.bubble.distance = this._tmpParams.obj.mode_bubble_distance * this._canvasParams.pxratio;
            this._params.particles.line_linked.width = this._tmpParams.obj.line_linked_width * this._canvasParams.pxratio;
            this._params.interactivity.modes.bubble.size = this._tmpParams.obj.mode_bubble_size * this._canvasParams.pxratio;
            this._params.interactivity.modes.repulse.distance = this._tmpParams.obj.mode_repulse_distance * this._canvasParams.pxratio;
        }
        else {
            this._canvasParams.pxratio = 1;
            this._tmpParams.retina = false;
        }
    };
    /**
     * @return {?}
     */
    CanvasManager.prototype._canvasClear = /**
     * @return {?}
     */
    function () {
        this._canvasParams.ctx.clearRect(0, 0, this._canvasParams.width, this._canvasParams.height);
    };
    /**
     * @return {?}
     */
    CanvasManager.prototype._canvasPaint = /**
     * @return {?}
     */
    function () {
        this._canvasParams.ctx.fillRect(0, 0, this._canvasParams.width, this._canvasParams.height);
    };
    /**
     * @return {?}
     */
    CanvasManager.prototype._canvasSize = /**
     * @return {?}
     */
    function () {
        this._canvasParams.el.width = this._canvasParams.width;
        this._canvasParams.el.height = this._canvasParams.height;
        if (this._params && this._params.interactivity.events.resize) {
            window.addEventListener('resize', this._onWindowResize);
        }
    };
    /**
     * @return {?}
     */
    CanvasManager.prototype._onWindowResize = /**
     * @return {?}
     */
    function () {
        this._canvasParams.width = this._canvasParams.el.offsetWidth;
        this._canvasParams.height = this._canvasParams.el.offsetHeight;
        if (this._tmpParams.retina) {
            this._canvasParams.width *= this._canvasParams.pxratio;
            this._canvasParams.height *= this._canvasParams.pxratio;
        }
        this._canvasParams.el.width = this._canvasParams.width;
        this._canvasParams.el.height = this._canvasParams.height;
        if (!this._params.particles.move.enable) {
            this.particlesManager.particlesEmpty();
            this.particlesManager.particlesCreate();
            this.particlesManager.particlesDraw();
            this._densityAutoParticles();
        }
        this._densityAutoParticles();
    };
    return CanvasManager;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ParticlesManager = /** @class */ (function () {
    function ParticlesManager(_canvasParams, _params, _tmpParams) {
        this._canvasParams = _canvasParams;
        this._params = _params;
        this._tmpParams = _tmpParams;
        this._interaction = new ParticleInteraction();
    }
    /**
     * @return {?}
     */
    ParticlesManager.prototype.particlesCreate = /**
     * @return {?}
     */
    function () {
        var _a = this._params.particles, color = _a.color, opacity = _a.opacity;
        for (var i = 0; i < this._params.particles.number.value; i++) {
            this._params.particles.array.push(new Particle(this._canvasParams, this._params, this._tmpParams, color, opacity.value));
        }
    };
    /**
     * @return {?}
     */
    ParticlesManager.prototype._particlesUpdate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @typedef {?} */
        this._params.particles.array.forEach(function (particle, i) {
            if (_this._params.particles.move.enable) {
                /** @type {?} */
                var ms = _this._params.particles.move.speed / 2;
                particle.x += particle.vx * ms;
                particle.y += particle.vy * ms;
            }
            if (_this._params.particles.opacity.anim.enable) {
                if (particle.opacity_status === true) {
                    if (particle.opacity >= _this._params.particles.opacity.value)
                        particle.opacity_status = false;
                    particle.opacity += particle.vo;
                }
                else {
                    if (particle.opacity <= _this._params.particles.opacity.anim.opacity_min)
                        particle.opacity_status = true;
                    particle.opacity -= particle.vo;
                }
                if (particle.opacity < 0)
                    particle.opacity = 0;
            }
            if (_this._params.particles.size.anim.enable) {
                if (particle.size_status == true) {
                    if (particle.radius >= _this._params.particles.size.value)
                        particle.size_status = false;
                    particle.radius += particle.vs;
                }
                else {
                    if (particle.radius <= _this._params.particles.size.anim.size_min)
                        particle.size_status = true;
                    particle.radius -= particle.vs;
                }
                if (particle.radius < 0)
                    particle.radius = 0;
            }
            /** @type {?} */
            var new_pos;
            if (_this._params.particles.move.out_mode == 'bounce') {
                new_pos = {
                    x_left: particle.radius,
                    x_right: _this._canvasParams.width,
                    y_top: particle.radius,
                    y_bottom: _this._canvasParams.height
                };
            }
            else {
                new_pos = {
                    x_left: -particle.radius,
                    x_right: _this._canvasParams.width + particle.radius,
                    y_top: -particle.radius,
                    y_bottom: _this._canvasParams.height + particle.radius
                };
            }
            if (particle.x - particle.radius > _this._canvasParams.width) {
                particle.x = new_pos.x_left;
                particle.y = Math.random() * _this._canvasParams.height;
            }
            else if (particle.x + particle.radius < 0) {
                particle.x = new_pos.x_right;
                particle.y = Math.random() * _this._canvasParams.height;
            }
            if (particle.y - particle.radius > _this._canvasParams.height) {
                particle.y = new_pos.y_top;
                particle.x = Math.random() * _this._canvasParams.width;
            }
            else if (particle.y + particle.radius < 0) {
                particle.y = new_pos.y_bottom;
                particle.x = Math.random() * _this._canvasParams.width;
            }
            switch (_this._params.particles.move.out_mode) {
                case 'bounce':
                    if (particle.x + particle.radius > _this._canvasParams.width)
                        particle.vx = -particle.vx;
                    else if (particle.x - particle.radius < 0)
                        particle.vx = -particle.vx;
                    if (particle.y + particle.radius > _this._canvasParams.height)
                        particle.vy = -particle.vy;
                    else if (particle.y - particle.radius < 0)
                        particle.vy = -particle.vy;
                    break;
            }
            if (isInArray('grab', _this._params.interactivity.events.onhover.mode)) {
                _this._grabParticle(particle);
            }
            if (isInArray('bubble', _this._params.interactivity.events.onhover.mode) ||
                isInArray('bubble', _this._params.interactivity.events.onclick.mode)) {
                _this._bubbleParticle(particle);
            }
            if (isInArray('repulse', _this._params.interactivity.events.onhover.mode) ||
                isInArray('repulse', _this._params.interactivity.events.onclick.mode)) {
                _this._repulseParticle(particle);
            }
            if (_this._params.particles.line_linked.enable || _this._params.particles.move.attract.enable) {
                for (var j = i + 1; j < _this._params.particles.array.length; j++) {
                    /** @type {?} */
                    var link = _this._params.particles.array[j];
                    if (_this._params.particles.line_linked.enable)
                        _this._interaction.linkParticles(particle, link, _this._params, _this._canvasParams);
                    if (_this._params.particles.move.attract.enable)
                        _this._interaction.attractParticles(particle, link, _this._params);
                    if (_this._params.particles.move.bounce)
                        _this._interaction.bounceParticles(particle, link);
                }
            }
        });
    };
    /**
     * @return {?}
     */
    ParticlesManager.prototype.particlesDraw = /**
     * @return {?}
     */
    function () {
        this._canvasParams.ctx.clearRect(0, 0, this._canvasParams.width, this._canvasParams.height);
        this._particlesUpdate();
        this._params.particles.array.forEach(function (particle) {
            particle.draw();
        });
    };
    /**
     * @return {?}
     */
    ParticlesManager.prototype.particlesEmpty = /**
     * @return {?}
     */
    function () {
        this._params.particles.array = [];
    };
    /**
     * @param {?} nb
     * @return {?}
     */
    ParticlesManager.prototype.removeParticles = /**
     * @param {?} nb
     * @return {?}
     */
    function (nb) {
        this._params.particles.array.splice(0, nb);
        if (!this._params.particles.move.enable) {
            this.particlesDraw();
        }
    };
    /**
     * @param {?} nb
     * @param {?=} pos
     * @return {?}
     */
    ParticlesManager.prototype.pushParticles = /**
     * @param {?} nb
     * @param {?=} pos
     * @return {?}
     */
    function (nb, pos) {
        this._tmpParams.pushing = true;
        for (var i = 0; i < nb; i++) {
            this._params.particles.array.push(new Particle(this._canvasParams, this._params, this._tmpParams, this._params.particles.color, this._params.particles.opacity.value, {
                x: pos ? pos.pos_x : Math.random() * this._canvasParams.width,
                y: pos ? pos.pos_y : Math.random() * this._canvasParams.height
            }));
            if (i == nb - 1) {
                if (!this._params.particles.move.enable) {
                    this.particlesDraw();
                }
                this._tmpParams.pushing = false;
            }
        }
    };
    /**
     * @param {?} particle
     * @return {?}
     */
    ParticlesManager.prototype._bubbleParticle = /**
     * @param {?} particle
     * @return {?}
     */
    function (particle) {
        var _this = this;
        if (this._params.interactivity.events.onhover.enable &&
            isInArray('bubble', this._params.interactivity.events.onhover.mode)) {
            /** @type {?} */
            var dx_mouse = particle.x - this._params.interactivity.mouse.pos_x;
            /** @type {?} */
            var dy_mouse = particle.y - this._params.interactivity.mouse.pos_y;
            /** @type {?} */
            var dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
            /** @type {?} */
            var ratio = 1 - dist_mouse / this._params.interactivity.modes.bubble.distance;
            /** @type {?} */
            var init = function () {
                particle.opacity_bubble = particle.opacity;
                particle.radius_bubble = particle.radius;
            };
            if (dist_mouse <= this._params.interactivity.modes.bubble.distance) {
                if (ratio >= 0 && this._params.interactivity.status == 'mousemove') {
                    if (this._params.interactivity.modes.bubble.size != this._params.particles.size.value) {
                        if (this._params.interactivity.modes.bubble.size > this._params.particles.size.value) {
                            /** @type {?} */
                            var size = particle.radius + (this._params.interactivity.modes.bubble.size * ratio);
                            if (size >= 0) {
                                particle.radius_bubble = size;
                            }
                        }
                        else {
                            /** @type {?} */
                            var dif = particle.radius - this._params.interactivity.modes.bubble.size;
                            /** @type {?} */
                            var size = particle.radius - (dif * ratio);
                            if (size > 0) {
                                particle.radius_bubble = size;
                            }
                            else {
                                particle.radius_bubble = 0;
                            }
                        }
                    }
                    if (this._params.interactivity.modes.bubble.opacity != this._params.particles.opacity.value) {
                        if (this._params.interactivity.modes.bubble.opacity > this._params.particles.opacity.value) {
                            /** @type {?} */
                            var opacity = this._params.interactivity.modes.bubble.opacity * ratio;
                            if (opacity > particle.opacity && opacity <= this._params.interactivity.modes.bubble.opacity) {
                                particle.opacity_bubble = opacity;
                            }
                        }
                        else {
                            /** @type {?} */
                            var opacity = particle.opacity - (this._params.particles.opacity.value - this._params.interactivity.modes.bubble.opacity) * ratio;
                            if (opacity < particle.opacity && opacity >= this._params.interactivity.modes.bubble.opacity) {
                                particle.opacity_bubble = opacity;
                            }
                        }
                    }
                }
            }
            else {
                init();
            }
            if (this._params.interactivity.status == 'mouseleave') {
                init();
            }
        }
        else if (this._params.interactivity.events.onclick.enable &&
            isInArray('bubble', this._params.interactivity.events.onclick.mode)) {
            if (this._tmpParams.bubble_clicking) {
                /** @type {?} */
                var dx_mouse = particle.x - this._params.interactivity.mouse.click_pos_x;
                /** @type {?} */
                var dy_mouse = particle.y - this._params.interactivity.mouse.click_pos_y;
                /** @type {?} */
                var dist_mouse_1 = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
                /** @type {?} */
                var time_spent_1 = (new Date().getTime() - this._params.interactivity.mouse.click_time) / 1000;
                if (time_spent_1 > this._params.interactivity.modes.bubble.duration) {
                    this._tmpParams.bubble_duration_end = true;
                }
                if (time_spent_1 > this._params.interactivity.modes.bubble.duration * 2) {
                    this._tmpParams.bubble_clicking = false;
                    this._tmpParams.bubble_duration_end = false;
                }
                /** @type {?} */
                var process = function (bubble_param, particles_param, p_obj_bubble, p_obj, id) {
                    if (bubble_param != particles_param) {
                        if (!_this._tmpParams.bubble_duration_end) {
                            if (dist_mouse_1 <= _this._params.interactivity.modes.bubble.distance) {
                                /** @type {?} */
                                var obj = void 0;
                                if (p_obj_bubble != undefined) {
                                    obj = p_obj_bubble;
                                }
                                else {
                                    obj = p_obj;
                                }
                                if (obj != bubble_param) {
                                    /** @type {?} */
                                    var value = p_obj - (time_spent_1 * (p_obj - bubble_param) / _this._params.interactivity.modes.bubble.duration);
                                    if (id == 'size')
                                        particle.radius_bubble = value;
                                    if (id == 'opacity')
                                        particle.opacity_bubble = value;
                                }
                            }
                            else {
                                if (id == 'size')
                                    particle.radius_bubble = undefined;
                                if (id == 'opacity')
                                    particle.opacity_bubble = undefined;
                            }
                        }
                        else {
                            if (p_obj_bubble != undefined) {
                                /** @type {?} */
                                var value_tmp = p_obj - (time_spent_1 * (p_obj - bubble_param) / _this._params.interactivity.modes.bubble.duration);
                                /** @type {?} */
                                var dif = bubble_param - value_tmp;
                                /** @type {?} */
                                var value = bubble_param + dif;
                                if (id == 'size')
                                    particle.radius_bubble = value;
                                if (id == 'opacity')
                                    particle.opacity_bubble = value;
                            }
                        }
                    }
                };
                if (this._tmpParams.bubble_clicking) {
                    process(this._params.interactivity.modes.bubble.size, this._params.particles.size.value, particle.radius_bubble, particle.radius, 'size');
                    process(this._params.interactivity.modes.bubble.opacity, this._params.particles.opacity.value, particle.opacity_bubble, particle.opacity, 'opacity');
                }
            }
        }
    };
    /**
     * @param {?} particle
     * @return {?}
     */
    ParticlesManager.prototype._repulseParticle = /**
     * @param {?} particle
     * @return {?}
     */
    function (particle) {
        var _this = this;
        if (this._params.interactivity.events.onhover.enable &&
            isInArray('repulse', this._params.interactivity.events.onhover.mode) &&
            this._params.interactivity.status == 'mousemove') {
            /** @type {?} */
            var dx_mouse = particle.x - this._params.interactivity.mouse.pos_x;
            /** @type {?} */
            var dy_mouse = particle.y - this._params.interactivity.mouse.pos_y;
            /** @type {?} */
            var dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
            /** @type {?} */
            var normVec = { x: dx_mouse / dist_mouse, y: dy_mouse / dist_mouse };
            /** @type {?} */
            var repulseRadius = this._params.interactivity.modes.repulse.distance;
            /** @type {?} */
            var velocity = 100;
            /** @type {?} */
            var repulseFactor = clamp((1 / repulseRadius) * (-1 * Math.pow(dist_mouse / repulseRadius, 2) + 1) * repulseRadius * velocity, 0, 50);
            /** @type {?} */
            var pos = {
                x: particle.x + normVec.x * repulseFactor,
                y: particle.y + normVec.y * repulseFactor
            };
            if (this._params.particles.move.out_mode == 'bounce') {
                if (pos.x - particle.radius > 0 && pos.x + particle.radius < this._canvasParams.width)
                    particle.x = pos.x;
                if (pos.y - particle.radius > 0 && pos.y + particle.radius < this._canvasParams.height)
                    particle.y = pos.y;
            }
            else {
                particle.x = pos.x;
                particle.y = pos.y;
            }
        }
        else if (this._params.interactivity.events.onclick.enable &&
            isInArray('repulse', this._params.interactivity.events.onclick.mode)) {
            if (!this._tmpParams.repulse_finish) {
                this._tmpParams.repulse_count++;
                if (this._tmpParams.repulse_count == this._params.particles.array.length)
                    this._tmpParams.repulse_finish = true;
            }
            if (this._tmpParams.repulse_clicking) {
                /** @type {?} */
                var repulseRadius = Math.pow(this._params.interactivity.modes.repulse.distance / 6, 3);
                /** @type {?} */
                var dx_1 = this._params.interactivity.mouse.click_pos_x - particle.x;
                /** @type {?} */
                var dy_1 = this._params.interactivity.mouse.click_pos_y - particle.y;
                /** @type {?} */
                var d = dx_1 * dx_1 + dy_1 * dy_1;
                /** @type {?} */
                var force_1 = -repulseRadius / d * 1;
                /** @type {?} */
                var process = function () {
                    /** @type {?} */
                    var f = Math.atan2(dy_1, dx_1);
                    particle.vx = force_1 * Math.cos(f);
                    particle.vy = force_1 * Math.sin(f);
                    if (_this._params.particles.move.out_mode == 'bounce') {
                        /** @type {?} */
                        var pos = {
                            x: particle.x + particle.vx,
                            y: particle.y + particle.vy
                        };
                        if (pos.x + particle.radius > _this._canvasParams.width)
                            particle.vx = -particle.vx;
                        else if (pos.x - particle.radius < 0)
                            particle.vx = -particle.vx;
                        if (pos.y + particle.radius > _this._canvasParams.height)
                            particle.vy = -particle.vy;
                        else if (pos.y - particle.radius < 0)
                            particle.vy = -particle.vy;
                    }
                };
                if (d <= repulseRadius) {
                    process();
                }
            }
            else {
                if (this._tmpParams.repulse_clicking == false) {
                    particle.vx = particle.vx_i;
                    particle.vy = particle.vy_i;
                }
            }
        }
    };
    /**
     * @param {?} particle
     * @return {?}
     */
    ParticlesManager.prototype._grabParticle = /**
     * @param {?} particle
     * @return {?}
     */
    function (particle) {
        var _a = this._params, interactivity = _a.interactivity, particles = _a.particles;
        if (interactivity.events.onhover.enable &&
            interactivity.status == 'mousemove') {
            /** @type {?} */
            var dx_mouse = particle.x - interactivity.mouse.pos_x;
            /** @type {?} */
            var dy_mouse = particle.y - interactivity.mouse.pos_y;
            /** @type {?} */
            var dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
            if (dist_mouse <= interactivity.modes.grab.distance) {
                var grab = interactivity.modes.grab;
                /** @type {?} */
                var opacity_line = grab.line_linked.opacity - (dist_mouse / (1 / grab.line_linked.opacity)) / grab.distance;
                if (opacity_line > 0) {
                    /** @type {?} */
                    var color_line = particles.line_linked.color_rgb_line;
                    var r = color_line.r, g = color_line.g, b = color_line.b;
                    this._canvasParams.ctx.strokeStyle = "rgba( " + r + ", " + g + ", " + b + ", " + opacity_line + " )";
                    this._canvasParams.ctx.lineWidth = particles.line_linked.width;
                    this._canvasParams.ctx.beginPath();
                    this._canvasParams.ctx.moveTo(particle.x, particle.y);
                    this._canvasParams.ctx.lineTo(interactivity.mouse.pos_x, interactivity.mouse.pos_y);
                    this._canvasParams.ctx.stroke();
                    this._canvasParams.ctx.closePath();
                }
            }
        }
    };
    return ParticlesManager;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Particle = /** @class */ (function () {
    function Particle(_canvasParams, _params, _tmpParams, color, opacity, position) {
        this._canvasParams = _canvasParams;
        this._params = _params;
        this._tmpParams = _tmpParams;
        this._setupSize();
        this._setupPosition(position);
        this._setupColor(color);
        this._setupOpacity();
        this._setupAnimation();
    }
    /**
     * @return {?}
     */
    Particle.prototype._setupSize = /**
     * @return {?}
     */
    function () {
        this.radius = (this._params.particles.size.random ? Math.random() : 1) * this._params.particles.size.value;
        if (this._params.particles.size.anim.enable) {
            this.size_status = false;
            this.vs = this._params.particles.size.anim.speed / 100;
            if (!this._params.particles.size.anim.sync)
                this.vs = this.vs * Math.random();
        }
    };
    /**
     * @param {?=} position
     * @return {?}
     */
    Particle.prototype._setupPosition = /**
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        this.x = position ? position.x : Math.random() * this._canvasParams.width;
        this.y = position ? position.y : Math.random() * this._canvasParams.height;
        if (this.x > this._canvasParams.width - this.radius * 2) {
            this.x = this.x - this.radius;
        }
        else if (this.x < this.radius * 2) {
            this.x = this.x + this.radius;
        }
        if (this.y > this._canvasParams.height - this.radius * 2) {
            this.y = this.y - this.radius;
        }
        else if (this.y < this.radius * 2) {
            this.y = this.y + this.radius;
        }
        if (this._params.particles.move.bounce) {
            this._checkOverlap(this, position);
        }
    };
    /**
     * @param {?} p1
     * @param {?=} position
     * @return {?}
     */
    Particle.prototype._checkOverlap = /**
     * @param {?} p1
     * @param {?=} position
     * @return {?}
     */
    function (p1, position) {
        var _this = this;
        var particles = this._params.particles;
        particles.array.forEach(function (particle) {
            /** @type {?} */
            var p2 = particle;
            /** @type {?} */
            var dx = p1.x - p2.x;
            /** @type {?} */
            var dy = p1.y - p2.y;
            /** @type {?} */
            var dist = Math.sqrt(dx * dx + dy * dy);
            if (dist <= p1.radius + p2.radius) {
                p1.x = position ? position.x : Math.random() * _this._canvasParams.width;
                p1.y = position ? position.y : Math.random() * _this._canvasParams.height;
                _this._checkOverlap(p1);
            }
        });
    };
    /**
     * @param {?=} color
     * @return {?}
     */
    Particle.prototype._setupColor = /**
     * @param {?=} color
     * @return {?}
     */
    function (color) {
        this.color = getColor(color.value);
    };
    /**
     * @return {?}
     */
    Particle.prototype._setupOpacity = /**
     * @return {?}
     */
    function () {
        this.opacity = (this._params.particles.opacity.random ? Math.random() : 1) * this._params.particles.opacity.value;
        if (this._params.particles.opacity.anim.enable) {
            this.opacity_status = false;
            this.vo = this._params.particles.opacity.anim.speed / 100;
            if (!this._params.particles.opacity.anim.sync) {
                this.vo = this.vo * Math.random();
            }
        }
    };
    /**
     * @return {?}
     */
    Particle.prototype._setupAnimation = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var velbase = null;
        switch (this._params.particles.move.direction) {
            case 'top':
                velbase = { x: 0, y: -1 };
                break;
            case 'top-right':
                velbase = { x: 0.5, y: -0.5 };
                break;
            case 'right':
                velbase = { x: 1, y: 0 };
                break;
            case 'bottom-right':
                velbase = { x: 0.5, y: 0.5 };
                break;
            case 'bottom':
                velbase = { x: 0, y: 1 };
                break;
            case 'bottom-left':
                velbase = { x: -0.5, y: 1 };
                break;
            case 'left':
                velbase = { x: -1, y: 0 };
                break;
            case 'top-left':
                velbase = { x: -0.5, y: -0.5 };
                break;
            default:
                velbase = { x: 0, y: 0 };
                break;
        }
        if (this._params.particles.move.straight) {
            this.vx = velbase.x;
            this.vy = velbase.y;
            if (this._params.particles.move.random) {
                this.vx = this.vx * (Math.random());
                this.vy = this.vy * (Math.random());
            }
        }
        else {
            this.vx = velbase.x + Math.random() - 0.5;
            this.vy = velbase.y + Math.random() - 0.5;
        }
        this.vx_i = this.vx;
        this.vy_i = this.vy;
        /** @type {?} */
        var shape_type = this._params.particles.shape.type;
        if (typeof (shape_type) === 'object') {
            if (shape_type instanceof Array) {
                /** @type {?} */
                var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
                this.shape = shape_selected;
            }
        }
        else {
            this.shape = shape_type;
        }
        if (this.shape === 'image') {
            /** @type {?} */
            var sh = this._params.particles.shape;
            this.img = {
                src: sh.image.src,
                ratio: sh.image.width / sh.image.height
            };
            if (!this.img.ratio) {
                this.img.ratio = 1;
            }
            if (this._tmpParams.img_type === 'svg' && this._tmpParams.source_svg !== undefined) {
                createSvgImg(this, this._tmpParams);
                if (this._tmpParams.pushing) {
                    this.img.loaded = false;
                }
            }
        }
    };
    /**
     * @param {?} c
     * @param {?} startX
     * @param {?} startY
     * @param {?} sideLength
     * @param {?} sideCountNumerator
     * @param {?} sideCountDenominator
     * @return {?}
     */
    Particle.prototype._drawShape = /**
     * @param {?} c
     * @param {?} startX
     * @param {?} startY
     * @param {?} sideLength
     * @param {?} sideCountNumerator
     * @param {?} sideCountDenominator
     * @return {?}
     */
    function (c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator) {
        /** @type {?} */
        var sideCount = sideCountNumerator * sideCountDenominator;
        /** @type {?} */
        var decimalSides = sideCountNumerator / sideCountDenominator;
        /** @type {?} */
        var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
        /** @type {?} */
        var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;
        c.save();
        c.beginPath();
        c.translate(startX, startY);
        c.moveTo(0, 0);
        for (var i = 0; i < sideCount; i++) {
            c.lineTo(sideLength, 0);
            c.translate(sideLength, 0);
            c.rotate(interiorAngle);
        }
        c.fill();
        c.restore();
    };
    /**
     * @return {?}
     */
    Particle.prototype.draw = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var particles = this._params.particles;
        /** @type {?} */
        var radius;
        if (this.radius_bubble !== undefined) {
            radius = this.radius_bubble;
        }
        else {
            radius = this.radius;
        }
        /** @type {?} */
        var opacity;
        if (this.opacity_bubble !== undefined) {
            opacity = this.opacity_bubble;
        }
        else {
            opacity = this.opacity;
        }
        /** @type {?} */
        var color_value;
        if (this.color.rgb) {
            var _a = this.color.rgb, r = _a.r, g = _a.g, b = _a.b;
            color_value = "rgba( " + r + ", " + g + ", " + b + ", " + opacity + " )";
        }
        else {
            var _b = this.color.hsl, h = _b.h, s = _b.s, l = _b.l;
            color_value = "hsla( " + h + ", " + s + ", " + l + ", " + opacity + " )";
        }
        this._canvasParams.ctx.fillStyle = color_value;
        this._canvasParams.ctx.beginPath();
        switch (this.shape) {
            case 'circle':
                this._canvasParams.ctx.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
                break;
            case 'edge':
                this._canvasParams.ctx.rect(this.x - radius, this.y - radius, radius * 2, radius * 2);
                break;
            case 'triangle':
                this._drawShape(this._canvasParams.ctx, this.x - radius, this.y + radius / 1.66, radius * 2, 3, 2);
                break;
            case 'polygon':
                this._drawShape(this._canvasParams.ctx, this.x - radius / (this._params.particles.shape.polygon.nb_sides / 3.5), this.y - radius / (2.66 / 3.5), radius * 2.66 / (this._params.particles.shape.polygon.nb_sides / 3), this._params.particles.shape.polygon.nb_sides, 1);
                break;
            case 'star':
                this._drawShape(this._canvasParams.ctx, this.x - radius * 2 / (this._params.particles.shape.polygon.nb_sides / 4), this.y - radius / (2 * 2.66 / 3.5), radius * 2 * 2.66 / (this._params.particles.shape.polygon.nb_sides / 3), this._params.particles.shape.polygon.nb_sides, 2);
                break;
            case 'image':
                /** @type {?} */
                var draw = function (img_obj) {
                    _this._canvasParams.ctx.drawImage(img_obj, _this.x - radius, _this.y - radius, radius * 2, radius * 2 / _this.img.ratio);
                };
                /** @type {?} */
                var img_obj = void 0;
                if (this._tmpParams.img_type === 'svg') {
                    img_obj = this.img.obj;
                }
                else {
                    img_obj = this._tmpParams.img_obj;
                }
                if (img_obj) {
                    draw(img_obj);
                }
                break;
        }
        this._canvasParams.ctx.closePath();
        if (this._params.particles.shape.stroke.width > 0) {
            this._canvasParams.ctx.strokeStyle = this._params.particles.shape.stroke.color;
            this._canvasParams.ctx.lineWidth = this._params.particles.shape.stroke.width;
            this._canvasParams.ctx.stroke();
        }
        this._canvasParams.ctx.fill();
    };
    return Particle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ParticleInteraction = /** @class */ (function () {
    function ParticleInteraction() {
    }
    /**
     * @param {?} p1
     * @param {?} p2
     * @param {?} params
     * @param {?} canvasParams
     * @return {?}
     */
    ParticleInteraction.prototype.linkParticles = /**
     * @param {?} p1
     * @param {?} p2
     * @param {?} params
     * @param {?} canvasParams
     * @return {?}
     */
    function (p1, p2, params, canvasParams) {
        /** @type {?} */
        var dx = p1.x - p2.x;
        /** @type {?} */
        var dy = p1.y - p2.y;
        /** @type {?} */
        var dist = Math.sqrt(dx * dx + dy * dy);
        var line_linked = params.particles.line_linked;
        if (dist <= params.particles.line_linked.distance) {
            /** @type {?} */
            var opacity_line = params.particles.line_linked.opacity - (dist / (1 / params.particles.line_linked.opacity)) / params.particles.line_linked.distance;
            if (opacity_line > 0) {
                /** @type {?} */
                var color_line = params.particles.line_linked.color_rgb_line;
                var r = color_line.r, g = color_line.g, b = color_line.b;
                canvasParams.ctx.save();
                canvasParams.ctx.strokeStyle = "rgba( " + r + ", " + g + ", " + b + ", " + opacity_line + " )";
                canvasParams.ctx.lineWidth = params.particles.line_linked.width;
                canvasParams.ctx.beginPath();
                if (line_linked.shadow.enable) {
                    canvasParams.ctx.shadowBlur = line_linked.shadow.blur;
                    canvasParams.ctx.shadowColor = line_linked.shadow.color;
                }
                canvasParams.ctx.moveTo(p1.x, p1.y);
                canvasParams.ctx.lineTo(p2.x, p2.y);
                canvasParams.ctx.stroke();
                canvasParams.ctx.closePath();
                canvasParams.ctx.restore();
            }
        }
    };
    /**
     * @param {?} p1
     * @param {?} p2
     * @param {?} params
     * @return {?}
     */
    ParticleInteraction.prototype.attractParticles = /**
     * @param {?} p1
     * @param {?} p2
     * @param {?} params
     * @return {?}
     */
    function (p1, p2, params) {
        /** @type {?} */
        var dx = p1.x - p2.x;
        /** @type {?} */
        var dy = p1.y - p2.y;
        /** @type {?} */
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist <= params.particles.line_linked.distance) {
            /** @type {?} */
            var ax = dx / (params.particles.move.attract.rotateX * 1000);
            /** @type {?} */
            var ay = dy / (params.particles.move.attract.rotateY * 1000);
            p1.vx -= ax;
            p1.vy -= ay;
            p2.vx += ax;
            p2.vy += ay;
        }
    };
    /**
     * @param {?} p1
     * @param {?} p2
     * @return {?}
     */
    ParticleInteraction.prototype.bounceParticles = /**
     * @param {?} p1
     * @param {?} p2
     * @return {?}
     */
    function (p1, p2) {
        /** @type {?} */
        var dx = p1.x - p2.x;
        /** @type {?} */
        var dy = p1.y - p2.y;
        /** @type {?} */
        var dist = Math.sqrt(dx * dx + dy * dy);
        /** @type {?} */
        var dist_p = p1.radius + p2.radius;
        if (dist <= dist_p) {
            p1.vx = -p1.vx;
            p1.vy = -p1.vy;
            p2.vx = -p2.vx;
            p2.vy = -p2.vy;
        }
    };
    return ParticleInteraction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ParticlesDirective = /** @class */ (function () {
    function ParticlesDirective(el) {
        this.el = el;
        this._tmpParams = {};
    }
    Object.defineProperty(ParticlesDirective.prototype, "params", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var defaultParams = getDefaultParams();
            this._params = deepExtend(defaultParams, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ParticlesDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (!this._canvasManager) {
            return;
        }
        this._canvasManager.cancelAnimation();
    };
    /**
     * @return {?}
     */
    ParticlesDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._canvasParams = {
            el: this.el.nativeElement,
            ctx: this.el.nativeElement.getContext('2d'),
            width: this.el.nativeElement.offsetWidth,
            height: this.el.nativeElement.offsetHeight
        };
        this._tmpParams.obj = {
            size_value: this._params.particles.size.value,
            size_anim_speed: this._params.particles.size.anim.speed,
            move_speed: this._params.particles.move.speed,
            line_linked_distance: this._params.particles.line_linked.distance,
            line_linked_width: this._params.particles.line_linked.width,
            mode_grab_distance: this._params.interactivity.modes.grab.distance,
            mode_bubble_distance: this._params.interactivity.modes.bubble.distance,
            mode_bubble_size: this._params.interactivity.modes.bubble.size,
            mode_repulse_distance: this._params.interactivity.modes.repulse.distance
        };
        this._params.interactivity.el = (this._params.interactivity.detect_on == 'window') ? window : this._canvasParams.el;
        if (isInArray('image', this._params.particles.shape.type)) {
            this._tmpParams.img_type = this._params.particles.shape.image.src.substr(this._params.particles.shape.image.src.length - 3);
            loadImg(this._params, this._tmpParams);
        }
        this._canvasManager = new CanvasManager(this._canvasParams, this._params, this._tmpParams);
        this._canvasManager.draw();
    };
    /**
     * Mouse move event
     * @param event
     */
    /**
     * Mouse move event
     * @param {?} event
     * @return {?}
     */
    ParticlesDirective.prototype.onMouseMove = /**
     * Mouse move event
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var interactivity = this._params.interactivity;
        if (interactivity.events.onhover.enable ||
            interactivity.events.onclick.enable) {
            /** @type {?} */
            var pos = void 0;
            if (interactivity.el == window) {
                pos = {
                    x: event.clientX,
                    y: event.clientY
                };
            }
            else {
                pos = {
                    x: event.offsetX || event.clientX,
                    y: event.offsetY || event.clientY
                };
            }
            interactivity.mouse.pos_x = pos.x;
            interactivity.mouse.pos_y = pos.y;
            if (this._tmpParams.retina) {
                interactivity.mouse.pos_x *= this._canvasParams.pxratio;
                interactivity.mouse.pos_y *= this._canvasParams.pxratio;
            }
            interactivity.status = 'mousemove';
        }
    };
    /**
     * Mouse leave event
     */
    /**
     * Mouse leave event
     * @return {?}
     */
    ParticlesDirective.prototype.onMouseLeave = /**
     * Mouse leave event
     * @return {?}
     */
    function () {
        var interactivity = this._params.interactivity;
        if (interactivity.events.onhover.enable ||
            interactivity.events.onclick.enable) {
            interactivity.mouse.pos_x = null;
            interactivity.mouse.pos_y = null;
            interactivity.status = 'mouseleave';
        }
    };
    /**
     * Click event
     */
    /**
     * Click event
     * @return {?}
     */
    ParticlesDirective.prototype.onClick = /**
     * Click event
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this._params, interactivity = _a.interactivity, particles = _a.particles;
        if (interactivity.events.onclick.enable) {
            interactivity.mouse.click_pos_x = interactivity.mouse.pos_x;
            interactivity.mouse.click_pos_y = interactivity.mouse.pos_y;
            interactivity.mouse.click_time = new Date().getTime();
            switch (interactivity.events.onclick.mode) {
                case 'push':
                    if (particles.move.enable) {
                        this._canvasManager.particlesManager.pushParticles(interactivity.modes.push.particles_nb, interactivity.mouse);
                    }
                    else {
                        if (interactivity.modes.push.particles_nb == 1) {
                            this._canvasManager.particlesManager.pushParticles(interactivity.modes.push.particles_nb, interactivity.mouse);
                        }
                        else if (interactivity.modes.push.particles_nb > 1) {
                            this._canvasManager.particlesManager.pushParticles(interactivity.modes.push.particles_nb);
                        }
                    }
                    break;
                case 'remove':
                    this._canvasManager.particlesManager.removeParticles(interactivity.modes.remove.particles_nb);
                    break;
                case 'bubble':
                    this._tmpParams.bubble_clicking = true;
                    break;
                case 'repulse':
                    this._tmpParams.repulse_clicking = true;
                    this._tmpParams.repulse_count = 0;
                    this._tmpParams.repulse_finish = false;
                    setTimeout(function () {
                        _this._tmpParams.repulse_clicking = false;
                    }, interactivity.modes.repulse.duration * 1000);
                    break;
            }
        }
    };
    ParticlesDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[d-particles]'
                },] },
    ];
    /** @nocollapse */
    ParticlesDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    ParticlesDirective.propDecorators = {
        params: [{ type: core.Input }],
        onMouseMove: [{ type: core.HostListener, args: ['mousemove', ['$event'],] }],
        onMouseLeave: [{ type: core.HostListener, args: ['mouseleave',] }],
        onClick: [{ type: core.HostListener, args: ['click',] }]
    };
    return ParticlesDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ParticlesModule = /** @class */ (function () {
    function ParticlesModule() {
    }
    ParticlesModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        ParticlesComponent,
                        ParticlesDirective
                    ],
                    exports: [
                        ParticlesComponent,
                        ParticlesDirective
                    ]
                },] },
    ];
    return ParticlesModule;
}());

exports.ParticlesModule = ParticlesModule;
exports.ParticlesComponent = ParticlesComponent;
exports.ParticlesDirective = ParticlesDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
