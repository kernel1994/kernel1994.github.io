/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
(function(window) {

    'use strict';

    // taken from mo.js demos
    function isIOSSafari() {
        var userAgent;
        userAgent = window.navigator.userAgent;
        return userAgent.match(/iPad/i) || userAgent.match(/iPhone/i);
    };

    // taken from mo.js demos
    function isTouch() {
        var isIETouch;
        isIETouch = navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        return [].indexOf.call(window, 'ontouchstart') >= 0 || isIETouch;
    };

    // taken from mo.js demos
    var isIOS = isIOSSafari(),
    clickHandler = isIOS || isTouch() ? 'touchstart': 'click';

    function extend(a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    }

    function Animocon(el, options) {
        this.el = el;
        this.options = extend({},
        this.options);
        extend(this.options, options);

        this.checked = false;

        this.timeline = new mojs.Timeline();

        for (var i = 0,
        len = this.options.tweens.length; i < len; ++i) {
            this.timeline.add(this.options.tweens[i]);
        }

        var self = this;
        this.el.addEventListener(clickHandler,
        function() {
            self.options.onCheck();
            self.timeline.replay();
        });
    }

    Animocon.prototype.options = {
        tweens: [new mojs.Burst({})],
        onCheck: function() {
            return false;
        },
        onUnCheck: function() {
            return false;
        }
    };

    // grid items:
    var items = [].slice.call(document.querySelectorAll('ol.grid > .grid__item'));

    function init() {
        /* Icon 17 */
        var el17 = items[0].querySelector('button.icobutton'),
        el17SVG = el17.querySelector('svg');
        var translationCurve17 = mojs.easing.path('M0,100 C0,72 10,-0.1 50,0 C89.6,0.1 100,72 100,100');
        new Animocon(el17, {
            tweens: [
            // burst animation (line1)
            new mojs.Burst({
                parent: el17,
                left: '65%',
                top: '40%',
                count: 5,
                radius: {
                    40 : 120
                },
                angle: 69,
                degree: 17,
                children: {
                    shape: 'line',
                    scale: 1,
                    radius: {
                        20 : 0
                    },
                    stroke: ['#bf62a6', '#f28c33', '#f5d63d', '#79c267', '#78c5d6'],
                    duration: 600,
                    easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                },
            }),
            // burst animation (circles)
            new mojs.Burst({
                parent: el17,
                left: '65%',
                top: '40%',
                count: 4,
                radius: {
                    20 : 50
                },
                degree: 20,
                angle: 70,
                opacity: 0.6,
                children: {
                    fill: ['#bf62a6', '#f28c33', '#f5d63d', '#79c267', '#78c5d6'],
                    scale: 1,
                    radius: {
                        'rand(5,20)': 0
                    },
                    isSwirl: true,
                    swirlSize: 4,
                    duration: 1600,
                    delay: [0, 350, 200, 150, 400],
                    easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                }
            }),
            // icon scale animation
            new mojs.Tween({
                duration: 800,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
                onUpdate: function(progress) {
                    var translationProgress = translationCurve17(progress);
                    el17SVG.style.WebkitTransform = el17SVG.style.transform = 'translate3d(' + -20 * translationProgress + '%,0,0)';
                }
            })],
            onCheck: function() {
                el17SVG.style.fill = '#F198CA';
            },
            onUnCheck: function() {
                el17SVG.style.fill = '#C0C1C3';
            }
        });
        /* Icon 17 */

        // bursts when hovering the mo.js link
        var molinkEl = document.getElementById('link-id'),
        moTimeline = new mojs.Timeline(),
        moburst1 = new mojs.Burst({
            parent: molinkEl,
            count: 6,
            left: '0%',
            top: '-30%',
            radius: {
                0 : 60
            },
            children: {
                fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
                duration: 1300,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
            }
        }),
        moburst2 = new mojs.Burst({
            parent: molinkEl,
            left: '-100%',
            top: '20%',
            count: 14,
            radius: {
                0 : 120
            },
            children: {
                fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
                duration: 1600,
                delay: 100,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
            }
        }),
        moburst3 = new mojs.Burst({
            parent: molinkEl,
            left: '130%',
            top: '-30%',
            count: 8,
            radius: {
                0 : 90
            },
            children: {
                fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
                duration: 1500,
                delay: 200,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
            }
        }),
        moburst4 = new mojs.Burst({
            parent: molinkEl,
            left: '-20%',
            top: '-110%',
            count: 14,
            radius: {
                0 : 60
            },
            children: {
                fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
                duration: 2000,
                delay: 300,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
            }
        }),
        moburst5 = new mojs.Burst({
            parent: molinkEl,
            count: 12,
            left: '30%',
            top: '-60%',
            radius: {
                0 : 60
            },
            children: {
                fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
                duration: 1400,
                delay: 400,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
            }
        });

        moTimeline.add(moburst1, moburst2, moburst3, moburst4, moburst5);
        
        setInterval(function () {
        	moTimeline.replay();
        }, 2000);
        // molinkEl.addEventListener('mouseenter',
        // function() {
        //     moTimeline.replay();
        // });
    }

    init();

})(window);
