// Constants
var CIRCLE_RADIUS = 50;
var CIRCLE_DIAMETER = CIRCLE_RADIUS * 2;
var SPACING = 5;
var ANGLE_START = 30;
var CANVAS_HEIGHT = 320;
var CANVAS_WIDTH = 320;

var LEFT_0 = TOP_0 = -CIRCLE_RADIUS;
var LEFT_1 = TOP_1 = LEFT_0 + SPACING + CIRCLE_DIAMETER;
var LEFT_2 = TOP_2 = LEFT_1 + SPACING + CIRCLE_DIAMETER;
var LEFT_3 = TOP_3 = LEFT_2 + SPACING + CIRCLE_DIAMETER;
var LEFT_4 = TOP_4 = LEFT_3 + SPACING + CIRCLE_DIAMETER;
var TOP_NEG1 = TOP_0 - SPACING - CIRCLE_DIAMETER;
var TOP_5 = TOP_4 + SPACING + CIRCLE_DIAMETER;

// Colors
var COLOR_SKY = '#E4F8FF';
var COLOR_GROUND = 'LightGreen';
var COLOR_BORDER = '#F0F8FF';

// Stage
var stage;

// Popcorn
var pop;
var popCanPlay = false;

// Menu
var menuWrapper;

// Animation
var animationWrapper;
var mainTimeline;

// Gallery Page
var galleryPageWrapper;
var galleryWrapper;
var COLOR_BUTTON_DISABLED = 'lightGrey';
var COLOR_BUTTON_ENABLED = '#E2E2FF';
var COLOR_BUTTON_DISABLED_CONTENT = 'darkGrey';
var COLOR_BUTTON_ENABLED_CONTENT = '#9797FF';
var PAGE_SIZE = 3;
var currentPage = 1;

// for debugging
var DEBUG = false;

function init() {
    stage = new createjs.Stage('canvas');

    // Ticker
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);

    loadAudio();

    var borders = new createjs.Shape();
    borders.graphics.beginFill(COLOR_BORDER)
        .rect(0, 0, SPACING, CANVAS_HEIGHT)
        .endFill().beginFill(COLOR_BORDER)
        .rect(3 * (SPACING + CIRCLE_DIAMETER), 0, SPACING, CANVAS_HEIGHT)
        .endFill().beginFill(COLOR_BORDER)
        .rect(0, 0, CANVAS_WIDTH, SPACING)
        .endFill().beginFill(COLOR_BORDER)
        .rect(0, 3 * (SPACING + CIRCLE_DIAMETER), CANVAS_WIDTH, SPACING);
    stage.addChild(borders);

    renderMenu();

    if (DEBUG) {
        var gridLinesColor = COLOR_BORDER;
        var gridLines = new createjs.Shape();
        gridLines.graphics.beginFill(gridLinesColor)
            .rect(0, 0, SPACING, CANVAS_HEIGHT)
            .endFill().beginFill(gridLinesColor)
            .rect(SPACING + CIRCLE_DIAMETER, 0, SPACING, CANVAS_HEIGHT)
            .endFill().beginFill(gridLinesColor)
            .rect(2 * (SPACING + CIRCLE_DIAMETER), 0, SPACING, CANVAS_HEIGHT)
            .endFill().beginFill(gridLinesColor)
            .rect(3 * (SPACING + CIRCLE_DIAMETER), 0, SPACING, CANVAS_HEIGHT)
            .endFill().beginFill(gridLinesColor)
            .rect(0, 0, CANVAS_WIDTH, SPACING)
            .endFill().beginFill(gridLinesColor)
            .rect(0, SPACING + CIRCLE_DIAMETER, CANVAS_WIDTH, SPACING)
            .endFill().beginFill(gridLinesColor)
            .rect(0, 2 * (SPACING + CIRCLE_DIAMETER), CANVAS_WIDTH, SPACING)
            .endFill().beginFill(gridLinesColor)
            .rect(0, 3 * (SPACING + CIRCLE_DIAMETER), CANVAS_WIDTH, SPACING);
        stage.addChild(gridLines);
    }
}

function loadAudio() {
    pop = Popcorn("#audio");
    pop.load();

    var request = new XMLHttpRequest();
    request.open('GET', 'audio/Antsy_Pants_-_Tree_Hugger.txt', true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var lrcArr = parseLrc(request.responseText);

            var lrc, lrcNext;
            for (var i = 0; i < lrcArr.length; i++) {
                lrc = lrcArr[i];
                lrcNext = lrcArr[i + 1];

                if (lrcNext) {
                    pop.footnote({
                        start: lrc.starttime,
                        end: lrcNext.starttime,
                        text: lrc.line,
                        target: 'lyrics'
                    });
                }
            }
            console.log(lrcArr);

            pop.on('canplay', function () {
                popCanPlay = true;
                // hide #loading
//                var loading = document.getElementById('loading');
//                loading.style.display = 'none';
//
//                // show #btn-start
//                var btnStart = document.getElementById('btn-start');
//                btnStart.style.display = '';
//
//                btnStart.addEventListener("click", function () {
//                    // hide #btn-start
//                    btnStart.style.display = 'none';
//
//                    // Add class 'loaded' to container
//                    var container = document.getElementsByClassName('container')[0];
//                    if (container.classList) {
//                        container.classList.add('loaded');
//                    }
//                    else {
//                        container.className += ' loaded';
//                    }
//
//                    // start
//                    pop.play();
//                });
            });
            pop.on('ended', function () {
                setTimeout(function () {
                    stage.removeChild(animationWrapper);
                    renderMenu()
                }, 200);
            });
        } else {
            console.log('request reached server but error is returned.');
        }
    };

    request.onerror = function () {
        console.log('request.onerror');
    };

    request.send();

    function parseLrc(rawLrc) {
        var lrcArr = [];

        var lrcAllRegex = /(\[[0-9.:\[\]]*\])+(.*)/;
        var timeRegex = /\[([0-9]+):([0-9.]+)\]/;
        var rawLrcArray = rawLrc.split(/[\r\n]/);

        for (var i = 0; i < rawLrcArray.length; i++) {
            // handle lrc
            var lrc = lrcAllRegex.exec(rawLrcArray[i]);

            if (lrc && lrc[0]) {
                var times = lrc[1].replace(/\]\[/g, "],[").split(",");

                for (var j = 0; j < times.length; j++) {
                    var time = timeRegex.exec(times[j]);
                    if (time && time[0]) {
                        lrcArr.push({ "starttime": parseInt(time[1], 10) * 60 + parseFloat(time[2]), "line": lrc[2] });
                    }
                    ;
                }
                ;
            }
            ;
        }
        ;

        //sort lrcArr
        lrcArr.sort(function (a, b) {
            return a.starttime - b.starttime;
        });

        return lrcArr;
    }
}

// Render
function renderMenu() {
    if (!menuWrapper) {
        menuWrapper = new createjs.Container();
    }
    if (!stage.getChildByName('menuWrapper')) {
        stage.addChild(menuWrapper);
    }
    menuWrapper.removeAllChildren();

    var btnPlayWrapper = new createjs.Container();
    btnPlayWrapper.x = LEFT_1 + CIRCLE_RADIUS;
    btnPlayWrapper.y = TOP_2;

    var btnPlay = new createjs.Shape();
    var arrowLength = 20;
    btnPlay.graphics.beginFill(COLOR_BUTTON_ENABLED)
        .drawCircle(0, 0, CIRCLE_RADIUS)
        .endFill().beginFill(COLOR_BUTTON_ENABLED_CONTENT)
        .setStrokeStyle(4, "round", "round")
        .beginStroke(COLOR_BUTTON_ENABLED_CONTENT)
        .moveTo(arrowLength, 0)
        .lineTo(Math.round(-arrowLength * Math.cos(60 * Math.PI / 180)), Math.round(-arrowLength * Math.sin(60 * Math.PI / 180)))
        .lineTo(Math.round(-arrowLength * Math.cos(60 * Math.PI / 180)), Math.round(arrowLength * Math.sin(60 * Math.PI / 180)))
        .closePath();

    btnPlayWrapper.addChild(btnPlay);
    btnPlayWrapper.addEventListener('click', function () {
        stage.removeChild(menuWrapper);
        renderAnim();
    });
    menuWrapper.addChild(btnPlayWrapper);

    var btnBrowseWrapper = new createjs.Container();
    btnBrowseWrapper.x = LEFT_3 - CIRCLE_RADIUS;
    btnBrowseWrapper.y = TOP_2;

    var btnBrowse = new createjs.Shape();
    btnBrowse.graphics.beginFill('pink')
        .drawCircle(0, 0, CIRCLE_RADIUS);
    btnBrowseWrapper.addChild(btnBrowse);
    btnBrowseWrapper.addEventListener('click', function () {
        stage.removeChild(menuWrapper);
        renderGalleryPage();
    });
    menuWrapper.addChild(btnBrowseWrapper);
}

function renderAnim() {
    if (!animationWrapper) {
        animationWrapper = new createjs.Container();
    }
    if (!stage.getChildByName('animationWrapper')) {
        stage.addChild(animationWrapper);
    }
    animationWrapper.removeAllChildren();

    if (popCanPlay && pop) {
        pop.play();
    }

    var flowerObjs = getFlowerTimeline(LEFT_2, TOP_2);
    var flowerTimeline = flowerObjs[0];
    var container1 = flowerObjs[1];

    var treeObjs = getTreeTimeline(LEFT_4, TOP_2);
    var treeTimeline = treeObjs[0];
    var container2 = treeObjs[1];

    var transitionTimeline = new TimelineMax();
    transitionTimeline
        .add('transition')
        .to(container1, .5, {x: LEFT_0, ease: Circ.easeOut}, 'transition')
        .to(container2, .5, {x: LEFT_2, ease: Circ.easeOut}, 'transition');

    var springObjs = getSpringTimeline(0, 0);
    var springTimeline = springObjs[0];
    var springContainer = springObjs[1];

    var summerObjs = getSummerTimeline(0, 0);
    var summerTimeline = summerObjs[0];
    var summerContainer = summerObjs[1];

    var autumnObjs = getAutumnTimeline(0, 0);
    var autumnTimeline = autumnObjs[0];
    var autumnContainer = autumnObjs[1];

    var winterObjs = getWinterTimeline(0, 0);
    var winterTimeline = winterObjs[0];
    var winterContainer = winterObjs[1];

    container2.addChildAt(springContainer, 0);
    container2.addChildAt(summerContainer, 0);
    container2.addChildAt(autumnContainer, 0);
    container2.addChildAt(winterContainer, 0);

    var dist = 1.5 * CIRCLE_RADIUS;
    var subContainerDuration = .7;

    var transitionSeasonTimeline = new TimelineMax();
    transitionSeasonTimeline
        .add('transition1', '+=1')
        .to(springContainer, subContainerDuration, {
            x: -dist,
            y: -dist,
            delay: subContainerDuration,
            ease: Power3.easeIn
        }, 'transition1')
        .to(summerContainer, subContainerDuration, {
            x: dist,
            y: -dist,
            delay: 1.5 * subContainerDuration,
            ease: Power3.easeIn
        }, 'transition1')
        .to(autumnContainer, subContainerDuration, {
            x: -dist,
            y: dist,
            delay: 2 * subContainerDuration,
            ease: Power3.easeIn
        }, 'transition1')
        .to(winterContainer, subContainerDuration, {
            x: dist,
            y: dist,
            delay: 2.5 * subContainerDuration,
            ease: Power3.easeIn
        }, 'transition1')
        .add('reverse', '+=1')
        .to(springContainer, .3, {
            x: 0,
            y: 0,
            ease: Power3.easeOut
        }, 'reverse')
        .to(summerContainer, .3, {
            x: 0,
            y: 0,
            ease: Power3.easeOut
        }, 'reverse')
        .to(autumnContainer, .3, {
            x: 0,
            y: 0,
            ease: Power3.easeOut
        }, 'reverse')
        .to(winterContainer, .3, {
            x: 0,
            y: 0,
            ease: Power3.easeOut,
            onComplete: function () {
                // remove all seasons' animation
                springTimeline.stop();
                summerTimeline.stop();
                autumnTimeline.stop();
                winterTimeline.stop();
            }
        }, 'reverse')
    ;

    var catObjs = getCatTimeline(LEFT_4, TOP_2);
    var catTimeline = catObjs[0];
    var container3 = catObjs[1];

    var transitionTimeline2 = new TimelineMax();
    transitionTimeline2
        .add('transition')
        .to(container2, .5, {x: LEFT_0, ease: Circ.easeOut}, 'transition')
        .to(container3, .5, {x: LEFT_2, ease: Circ.easeOut}, 'transition');

    var turtleObjs = getTurtleTimeline(LEFT_4, TOP_2);
    var turtleTimeline = turtleObjs[0];
    var container4 = turtleObjs[1];
    var turtleWrapper = turtleObjs[2];

    var transitionTimeline3 = new TimelineMax();
    transitionTimeline3
        .add('transition3')
        .to(container3, .5, {x: LEFT_0, ease: Circ.easeOut}, 'transition3')
        .to(container4, .5, {x: LEFT_2, ease: Circ.easeOut}, 'transition3');

    var container4a = new createjs.Container();
    container4a.x = LEFT_2;
    container4a.y = TOP_NEG1;
    var sky = new createjs.Shape();
    sky.graphics.beginFill('lightBlue')
        .drawCircle(0, 0, CIRCLE_RADIUS);
    container4a.addChild(sky);

    var cloudObjs1 = getCloudTimeline(LEFT_1, TOP_0);
    var container4b = cloudObjs1[1];
    var cloudObjs2 = getCloudTimeline(LEFT_3, TOP_NEG1);
    var container4c = cloudObjs2[1];

    var transitionTimeline4 = new TimelineMax();
    transitionTimeline4
        .add('transition4')
        .to(container4, 1, {y: TOP_4, ease: Power0.easeNone}, 'transition4')
        .to(turtleWrapper, 1, {y: -(TOP_4 - TOP_2), ease: Power0.easeNone}, 'transition4')
        .to(container4a, .4, {y: TOP_2, ease: Power0.easeNone}, 'transition4')
        .to(container4b, 2, {y: TOP_5, ease: Power0.easeNone}, 'transition4')
        .to(container4c, 2, {y: TOP_4, ease: Power0.easeNone}, 'transition4');

    var roofTopObjs = getRoofTopTimeline(LEFT_4, TOP_3);
    var container5 = roofTopObjs[1];
    var transitionTimeline5 = new TimelineMax();

    transitionTimeline5
        .add('transition5')
        .to(container5, 3, {x: LEFT_0, ease: Power0.easeNone}, 'transition5');

    animationWrapper.addChild(container1);
    animationWrapper.addChild(container2);
    animationWrapper.addChild(container3);
    animationWrapper.addChild(container4);
    animationWrapper.addChildAt(container4a, animationWrapper.getNumChildren() - 1);
    animationWrapper.addChild(container4b);
    animationWrapper.addChild(container4c);
    animationWrapper.addChild(container5);

    mainTimeline = new TimelineMax({paused: true});
    mainTimeline
        .add(flowerTimeline, '+=19')
        .add(transitionTimeline, '+=0.4')
        .add('tree', '+=0')
        .add(treeTimeline, 'tree')
        .add(transitionSeasonTimeline, 'tree')
        .add(transitionTimeline2, '+=0.2')
        .add(catTimeline, '+=0')
        .add(transitionTimeline3, '+=0.2')
        .add(turtleTimeline, '+=0')
        .add(transitionTimeline4, '+=0.5')
        .add(transitionTimeline5, '+=0.8')
        .play();
}

function renderGalleryPage() {
    if (!galleryPageWrapper) {
        galleryPageWrapper = new createjs.Container();
    }
    if (!stage.getChildByName('galleryPageWrapper')) {
        stage.addChild(galleryPageWrapper);
    }
    galleryPageWrapper.removeAllChildren();

    _renderGallery();
    _renderBtnPrev();
    _renderBtnHome();
    _renderBtnNext();
}

function _renderGallery() {
    galleryWrapper = galleryPageWrapper.getChildByName('galleryWrapper');

    if (!galleryWrapper) {
        galleryWrapper = new createjs.Container();
        galleryPageWrapper.addChild(galleryWrapper);
    }

    switch (currentPage) {
        case 1:
            var flowerObjs = getFlowerTimeline(LEFT_1, TOP_1);
            _processTimelineObjs(flowerObjs);

            var treeObjs = getTreeTimeline(LEFT_2, TOP_1);
            _processTimelineObjs(treeObjs);

            var springObjs = getSpringTimeline(LEFT_3, TOP_1);
            _processTimelineObjs(springObjs);

            var summerObjs = getSummerTimeline(LEFT_1, TOP_2);
            _processTimelineObjs(summerObjs);

            var autumnObjs = getAutumnTimeline(LEFT_2, TOP_2);
            _processTimelineObjs(autumnObjs);

            var winterObjs = getWinterTimeline(LEFT_3, TOP_2);
            _processTimelineObjs(winterObjs);

            break;
        case 2:
            var catObjs = getCatTimeline(LEFT_1, TOP_1);
            _processTimelineObjs(catObjs);

            var turtleObjs = getTurtleTimeline(LEFT_2, TOP_1);
            _processTimelineObjs(turtleObjs);

            var cloudObjs = getCloudTimeline(LEFT_3, TOP_1);
            _processTimelineObjs(cloudObjs);

            var roofTopObjs = getRoofTopTimeline(LEFT_1, TOP_2);
            _processTimelineObjs(roofTopObjs);

            break;
        case 3:
            break;
        default:
            break;
    }

    function _processTimelineObjs(objs) {
        var timeline = objs[0];
        var container = objs[1];
        galleryWrapper.addChild(container);
        timeline.eventCallback('onComplete', function () {
            this.restart();
        });
        timeline.play();
    }
}

function _renderBtnPrev() {
    var enabled = currentPage > 1;

    var btnPrevWrapper = new createjs.Container();
    btnPrevWrapper.x = LEFT_1;
    btnPrevWrapper.y = TOP_3;
    btnPrevWrapper.addEventListener('click', function () {
        if (enabled) {
            currentPage--;
            renderGalleryPage();
        }
    });

    var btnPrev = new createjs.Shape();
    btnPrev.graphics.beginFill(enabled ? COLOR_BUTTON_ENABLED : COLOR_BUTTON_DISABLED)
        .drawCircle(0, 0, CIRCLE_RADIUS * 3 / 4)
        .setStrokeStyle(4, "round", "round")
        .beginStroke(enabled ? COLOR_BUTTON_ENABLED_CONTENT : COLOR_BUTTON_DISABLED_CONTENT)
        .moveTo(6, -12)
        .lineTo(-12, 0)
        .lineTo(6, 12)
        .closePath()
        .endStroke()

    btnPrevWrapper.addChild(btnPrev);
    galleryPageWrapper.addChild(btnPrevWrapper);
}

function _renderBtnNext() {
    var enabled = currentPage < PAGE_SIZE;

    var btnNextWrapper = new createjs.Container();
    btnNextWrapper.x = LEFT_3;
    btnNextWrapper.y = TOP_3;
    btnNextWrapper.addEventListener('click', function () {
        if (enabled) {
            currentPage++;
            renderGalleryPage();
        }
    });

    var btnNext = new createjs.Shape();
    btnNext.graphics.beginFill(enabled ? COLOR_BUTTON_ENABLED : COLOR_BUTTON_DISABLED)
        .drawCircle(0, 0, CIRCLE_RADIUS * 3 / 4)
        .setStrokeStyle(4, "round", "round")
        .beginStroke(enabled ? COLOR_BUTTON_ENABLED_CONTENT : COLOR_BUTTON_DISABLED_CONTENT)
        .moveTo(-6, -12)
        .lineTo(12, 0)
        .lineTo(-6, 12)
        .closePath()
        .endStroke();
    btnNextWrapper.addChild(btnNext);
    galleryPageWrapper.addChild(btnNextWrapper);
}

function _renderBtnHome() {
    var btnHomeWrapper = new createjs.Container();
    btnHomeWrapper.x = LEFT_2;
    btnHomeWrapper.y = TOP_3;
    btnHomeWrapper.addEventListener('click', function () {
        stage.removeChild(galleryPageWrapper);
        // reset to page 1
        currentPage = 1;
        renderMenu();
    });

    var btnHome = new createjs.Shape();
    btnHome.graphics.beginFill(COLOR_BUTTON_ENABLED)
        .drawCircle(0, 0, CIRCLE_RADIUS * 3 / 4)
        .endFill()
        .setStrokeStyle(4, "round", "round")
        .beginStroke(COLOR_BUTTON_ENABLED_CONTENT)
        .moveTo(-9, -3)
        .lineTo(-9, 9)
        .lineTo(9, 9)
        .lineTo(9, -3)
        .lineTo(0, -10.5)
        .closePath();

    btnHomeWrapper.addChild(btnHome);
    galleryPageWrapper.addChild(btnHomeWrapper);
}

// Timelines
function getFlowerTimeline(x, y) {
    var flowerTimeline = new TimelineMax();

    var container1 = new createjs.Container();
    container1.x = x;
    container1.y = y;

    var segmentGround = new createjs.Shape();
    segmentGround.angle = 90;
    segmentGround.fill = COLOR_GROUND;

    var segmentSky = new createjs.Shape();
    segmentSky.angle = ANGLE_START;
    segmentSky.alpha = 0;
    segmentSky.fill = COLOR_SKY;

    var flowerWrapper = new createjs.Container();
    flowerWrapper.y = -5;

    var flowerStem = new createjs.Shape();
    flowerStem.graphics.beginFill('green');
    var flowerStemCmd = flowerStem.graphics.rect(-2, 30, 4, 0).command;
    flowerWrapper.addChild(flowerStem);

    var flowerLeaves = new createjs.Shape();
    flowerLeaves.graphics.beginFill('green');
    var flowerLeavesCmd = flowerLeaves.graphics
        .drawEllipse(0, 18, 0, 6)
        .command;
    var flowerLeavesCmd2 = flowerLeaves.graphics
        .drawEllipse(0, 17, 0, 6)
        .command;
    flowerWrapper.addChild(flowerLeaves);

    var flower = new createjs.Shape();
    flower.graphics.beginFill('yellow');
    var flowerCmd = flower.graphics
        .drawCircle(0, 0, 0)
        .command;
    flowerWrapper.addChild(flower);

    var flowerEyes = new createjs.Shape();
    flowerEyes.graphics
        .beginFill('black')
        .drawCircle(-4, 0, 2)
        .endFill().beginFill('black')
        .drawCircle(4, 0, 2);
    flowerWrapper.addChild(flowerEyes);

    var petalColor = 'hotpink';
    var petalRadius = 6;
    var petalDuration = .15;

    var petal1 = new createjs.Shape();
    petal1.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
    flowerWrapper.addChildAt(petal1, 1); // add at index 1 as flowerStem should be at index 0

    var petal2 = new createjs.Shape();
    petal2.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
    flowerWrapper.addChildAt(petal2, 1);

    var petal3 = new createjs.Shape();
    petal3.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
    flowerWrapper.addChildAt(petal3, 1);

    var petal4 = new createjs.Shape();
    petal4.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
    flowerWrapper.addChildAt(petal4, 1);

    var petal5 = new createjs.Shape();
    petal5.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
    flowerWrapper.addChildAt(petal5, 1);

    flowerTimeline
        .add('initial')
        .set(segmentGround, {angle: 90}, 'initial')
        .set(segmentSky, {angle: ANGLE_START, alpha: 0}, 'initial')
        .set(flowerStemCmd, {h: 0}, 'initial')
        .set(flowerCmd, {radius: 0}, 'initial')
        .set(flowerLeavesCmd, {w: 0}, 'initial')
        .set(flowerLeavesCmd2, {w: 0}, 'initial')
        .set(flowerEyes, {alpha: 0}, 'initial')
        .set(petal1, {alpha: 0, x: 0, y: 0}, 'initial')
        .set(petal2, {alpha: 0, x: 0, y: 0}, 'initial')
        .set(petal3, {alpha: 0, x: 0, y: 0}, 'initial')
        .set(petal4, {alpha: 0, x: 0, y: 0}, 'initial')
        .set(petal5, {alpha: 0, x: 0, y: 0}, 'initial')
        .to(segmentGround, .4, {
            angle: ANGLE_START,
            ease: Power2.easeIn,
            onUpdate: changeSegment,
            onUpdateParams: ["{self}"]
        })
        .add("segmentGroundComplete")
        .add("flowerStemCmdComplete", "+=0.3")
        .add("flowerCmdComplete", "+=0.5")
        .set(segmentSky, {alpha: 1})
        .to(flowerStemCmd, .3, { h: -30 }, "segmentGroundComplete")
        .to(segmentSky, 1.2, {
            angle: -180,
            ease: Power2.easeOut,
            onUpdate: changeSegment,
            onUpdateParams: ["{self}"]
        }, "segmentGroundComplete")
        .to(flowerCmd, .2, {
            radius: 8,
            ease: Back.easeOut.config(2)
        }, "flowerStemCmdComplete")
        .to(flowerLeavesCmd, .2, {
            w: -10,
            ease: Back.easeOut.config(2)
        }, "flowerStemCmdComplete")
        .to(flowerLeavesCmd2, .2, {
            w: 10,
            ease: Back.easeOut.config(2)
        }, "flowerStemCmdComplete")
        .set([flowerEyes, petal1, petal2, petal3, petal4, petal5], {alpha: 1}, 'flowerCmdComplete')
        .to(petal1, petalDuration, {x: 0, y: -11, ease: Back.easeOut.config(1)}, 'flowerCmdComplete')
        .to(petal2, petalDuration, {x: 8, y: -4, delay: .5 * petalDuration, ease: Back.easeOut.config(1)}, 'flowerCmdComplete')
        .to(petal3, petalDuration, {x: 6, y: 7, delay: 1.5 * petalDuration, ease: Back.easeOut.config(1)}, 'flowerCmdComplete')
        .to(petal4, petalDuration, {x: -6, y: 7, delay: 2.5 * petalDuration, ease: Back.easeOut.config(1)}, 'flowerCmdComplete')
        .to(petal5, petalDuration, {x: -8, y: -4, delay: 3.5 * petalDuration, ease: Back.easeOut.config(1)}, 'flowerCmdComplete');

    function changeSegment(e) {
        var segment = e.target;
        var angleFromCenter = 90 - segment.angle;
        var startAngle = (90 - angleFromCenter) * Math.PI / 180;
        var endAngle = (90 + angleFromCenter) * Math.PI / 180;

        segment.graphics.clear();
        segment.graphics.beginFill(segment.fill)
            .arc(0, 0, CIRCLE_RADIUS, startAngle, endAngle);
    }

    container1.addChild(segmentSky);
    container1.addChild(segmentGround);
    container1.addChild(flowerWrapper);

    return [flowerTimeline, container1];
}

function getTreeTimeline(x, y) {
    var treeTimeline = new TimelineMax();

    var container2 = new createjs.Container();
    container2.x = x;
    container2.y = y;

    var segmentGround2 = new createjs.Shape();
    segmentGround2.graphics.beginFill(COLOR_GROUND)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    container2.addChild(segmentGround2);

    var segmentSky2 = new createjs.Shape();
    segmentSky2.graphics.beginFill(COLOR_SKY)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    container2.addChild(segmentSky2);

    var treeWrapper = new createjs.Container();
    var tree = new createjs.Shape();
    tree.graphics.beginFill('green');
    var treeCmd = tree.graphics.drawCircle(0, 0, 10).command;

    treeWrapper.addChild(tree);
    container2.addChild(treeWrapper);

    treeTimeline
        .to(treeCmd, 2, {radius: 20, ease: Power2.easeIn});

    return [treeTimeline, container2];
}

function getSpringTimeline(x, y) {
    var springTimeline = new TimelineMax();

    var springContainer = new createjs.Container();
    springContainer.x = x;
    springContainer.y = y;

    var groundFill = '#59AE6B';
    var skyFill = '#AEE7FB';

    var segmentGround = new createjs.Shape();
    segmentGround.graphics.beginFill(groundFill)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    springContainer.addChild(segmentGround);

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(skyFill)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    springContainer.addChild(segmentSky);


    return [springTimeline, springContainer];
}

function getSummerTimeline(x, y) {
    var summerTimeline = new TimelineMax();

    var summerContainer = new createjs.Container();
    summerContainer.x = x;
    summerContainer.y = y;

    var groundFill = '#FFFFB7';
    var skyFill = '#C6FFEA';

    var segmentGround = new createjs.Shape();
    segmentGround.graphics.beginFill(groundFill)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    summerContainer.addChild(segmentGround);

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(skyFill)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    summerContainer.addChild(segmentSky);

    return [summerTimeline, summerContainer];
}

function getAutumnTimeline(x, y) {
    var autumnTimeline = new TimelineMax();

    var autumnContainer = new createjs.Container();
    autumnContainer.x = x;
    autumnContainer.y = y;

    var groundFill = '#EB6907';
    var skyFill = '#FAA105';

    var segmentGround = new createjs.Shape();
    segmentGround.graphics.beginFill(groundFill)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    autumnContainer.addChild(segmentGround);

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(skyFill)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    autumnContainer.addChild(segmentSky);

    return [autumnTimeline, autumnContainer];
}

function getWinterTimeline(x, y) {
    var snowTreeTimeline = new TimelineMax();
    snowTreeTimeline.add('snow');

    var snowTreeContainer = new createjs.Container();
    snowTreeContainer.x = x;
    snowTreeContainer.y = y;

    var groundFill = '#E1F0EB';
    var skyFill = '#322F40';

    var segmentGround = new createjs.Shape();
    segmentGround.graphics.beginFill(groundFill)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    snowTreeContainer.addChild(segmentGround);

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(skyFill)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    snowTreeContainer.addChild(segmentSky);

    var snowTreeWrapper = new createjs.Container();
    var snowTree = new createjs.Shape();
    snowTree.graphics
        .beginFill('white')
        .lineTo(-12, -5)
        .lineTo(0, -20)
        .lineTo(12, -5)
        .endFill().beginFill('white')
        .lineTo(-14, 5)
        .lineTo(0, -10)
        .lineTo(14, 5)
        .endFill().beginFill('white')
        .lineTo(-16, 15)
        .lineTo(0, 0)
        .lineTo(16, 15)
        .endFill().beginFill('white')
        .lineTo(-18, 25)
        .lineTo(0, 10)
        .lineTo(18, 25);
    snowTreeWrapper.addChild(snowTree);

    var snows = [];
    var snowWrapper = new createjs.Container();
    var snowSize = 3;

    for (var i = 0; i < 9; i++) {
        var snow = new createjs.Shape();
        snow.alpha = 0;
        snow.graphics
            .beginFill('white')
            .drawCircle(0, 0, snowSize);
        snows.push(snow);
        snowWrapper.addChild(snow);
    }

    function tweenSnow(snow) {
        var _random = Math.random();
        var _x = 0;
        if (_random <= 0.45) {
            _x = getRandomInt(-25, -10);
        }
        else if (_random <= 0.9) {
            _x = getRandomInt(10, 25);
        }
        else {
            _x = getRandomInt(-9, 9);
        }

        createjs.Tween
            .get(snow, {override: true})
            .to({alpha: 0}, 100)
            .wait(getRandomInt(0, 2000))
            .to({alpha: getRandomArbitrary(0.5, 0.9), x: _x, y: getRandomInt(-55, -50)}, 0)
            .to({y: 24}, getRandomInt(2500, 3000), createjs.Ease.linear)
            .call(function () {
                tweenSnow(snow);
            });

//        function randomX() {
//            var _random = Math.random();
//            if (_random <= 0.45) {
//                return getRandomInt(-25, -10);
//            }
//            else if (_random <= 0.9) {
//                return getRandomInt(10, 25);
//            }
//            else {
//                return getRandomInt(-9, 9);
//            }
//        }

//        snowTreeTimeline
//            .delay(getRandomArbitrary(0, 2))
//            .set(snow, {alpha: getRandomArbitrary(0.5, 0.9), x: randomX(), y: getRandomInt(-55, -50)}, 'snow')
//            .to(snow, getRandomArbitrary(2.5, 3), {y: 24, onComplete: function () {
//                tweenSnow(snow);
//            }});
    }

    snows.forEach(function (snow) {
        tweenSnow(snow);
    });

    snowTreeWrapper.addChild(snowWrapper);
    snowTreeContainer.addChild(snowTreeWrapper);

    return [snowTreeTimeline, snowTreeContainer];
}

function getCatTimeline(x, y) {
    var catTimeline = new TimelineMax();

    var catContainer = new createjs.Container();
    catContainer.x = x;
    catContainer.y = y;

    var segmentGround = new createjs.Shape();
    segmentGround.graphics.beginFill(COLOR_GROUND)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    catContainer.addChild(segmentGround);

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(COLOR_SKY)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    catContainer.addChild(segmentSky);

    var catWrapper = new createjs.Container();
    var catHead = new createjs.Shape();
    catHead.graphics.beginFill('#fff').drawEllipse(-15, 5, 30, 25);
    catWrapper.addChild(catHead);

    var catEyes = new createjs.Shape();
    catEyes.graphics.beginFill('black')
        .drawCircle(-10, 14, 2)
        .drawCircle(2, 14, 2)
        .beginFill('pink')
        .drawEllipse(-13, 17, 5, 2)
        .drawEllipse(-1, 17, 5, 2);
    catWrapper.addChild(catEyes);

    var catEars = new createjs.Shape();
    catEars.graphics
        .beginFill('#fff')
        .moveTo(-15, 14)
        .lineTo(-10, 0)
        .lineTo(-1, 7)
        .closePath()
        .moveTo(15, 14)
        .lineTo(10, 0)
        .lineTo(1, 7)
        .closePath();
    catWrapper.addChild(catEars);

    var beeWrapper = new createjs.Container();
    var bee = new createjs.Shape();
    bee.graphics
        .beginFill('yellow')
        .drawEllipse(-45, -20, 16, 12);

    beeWrapper.addChild(bee);

    catContainer.addChild(catWrapper);
    catContainer.addChild(beeWrapper);

    var beeDuration = .3;
    catTimeline
        .to(bee, beeDuration * 6, {x: 70, ease: Power0.easeNone}, 0)
        .to(bee, beeDuration, {y: -5, ease: Sine.easeOut}, 0)
        .to(bee, beeDuration, {y: 0, ease: Sine.easeIn}, beeDuration)
        .to(bee, beeDuration, {y: 5, ease: Sine.easeOut}, 2 * beeDuration)
        .to(bee, beeDuration, {y: 0, ease: Sine.easeIn}, 3 * beeDuration)
        .to(bee, beeDuration, {y: -5, ease: Sine.easeOut}, 4 * beeDuration)
        .to(bee, beeDuration, {y: 0, ease: Sine.easeIn}, 5 * beeDuration)
        .to(catEyes, beeDuration * 6, {x: 7, ease: Power0.easeNone}, 0)
        .to(catEyes, beeDuration, {y: -1, ease: Sine.easeOut}, 0)
        .to(catEyes, beeDuration, {y: 0, ease: Sine.easeIn}, beeDuration)
        .to(catEyes, beeDuration, {y: 1, ease: Sine.easeOut}, 2 * beeDuration)
        .to(catEyes, beeDuration, {y: 0, ease: Sine.easeOut}, 3 * beeDuration)
        .to(catEyes, beeDuration, {y: -1, ease: Sine.easeOut}, 4 * beeDuration)
        .to(catEyes, beeDuration, {y: 0, ease: Sine.easeOut}, 5 * beeDuration)
    ;

    return [catTimeline, catContainer];
}

function getTurtleTimeline(x, y) {
    var turtleTimeline = new TimelineMax();

    var turtleContainer = new createjs.Container();
    turtleContainer.x = x;
    turtleContainer.y = y;

    var segmentGround = new createjs.Shape();
    segmentGround.graphics.beginFill(COLOR_GROUND)
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);
    turtleContainer.addChild(segmentGround);

    var segmentSky = new createjs.Shape();
    segmentSky.graphics.beginFill(COLOR_SKY)
        .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);
    turtleContainer.addChild(segmentSky);

    var turtleWrapper = new createjs.Container();
    var turtle = new createjs.Shape();
    turtle.graphics.beginFill('green').drawCircle(0, 15, 12);
    turtleWrapper.addChild(turtle);
    turtleContainer.addChild(turtleWrapper);

    return [turtleTimeline, turtleContainer, turtleWrapper];
}

function getCloudTimeline(x, y) {
    var cloudTimeline = new TimelineMax();

    var cloudContainer = new createjs.Container();
    cloudContainer.x = x;
    cloudContainer.y = y;

    var sky = new createjs.Shape();
    sky.graphics.beginFill('lightBlue')
        .drawCircle(0, 0, CIRCLE_RADIUS);
    cloudContainer.addChild(sky);

    var cloud = new createjs.Shape();
    cloud.graphics
        .beginFill('white')
        .drawCircle(-20, 5, 13)
        .endFill()
        .beginFill('white')
        .drawCircle(-5, 12, 12)
        .endFill()
        .beginFill('white')
        .drawCircle(9, 12, 10)
        .endFill()
        .beginFill('white')
        .drawCircle(20, 4, 12)
        .endFill()
        .beginFill('white')
        .drawCircle(-7, -9, 14)
        .endFill()
        .beginFill('white')
        .drawCircle(13, -11, 10)
        .endFill()
        .beginFill('white')
        // filler
        .drawCircle(0, 5, 15)
    ;
    cloudContainer.addChild(cloud);

    return [cloudTimeline, cloudContainer];
}

function getRoofTopTimeline(x, y) {
    var roofTopTimeline = new TimelineMax();

    var roofTopContainer = new createjs.Container();
    roofTopContainer.x = x;
    roofTopContainer.y = y;

    var sky = new createjs.Shape();
    sky.graphics.beginFill('lightBlue')
        .drawCircle(0, 0, CIRCLE_RADIUS);
    roofTopContainer.addChild(sky);

    var roofTop = new createjs.Shape();
    roofTop.graphics.beginFill('pink')
        .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180)
        .endFill().beginFill('#fff')
        .rect(10, 8, 16, 17)
        .endFill().beginFill('pink')
        .rect(8, 5, 20, 5);
    roofTopContainer.addChild(roofTop);

    var smoke = new createjs.Shape();
    smoke.graphics.beginFill('white');
    var smokeCmd = smoke.graphics
//        .drawEllipse(13, 5, 10, 3)
        .drawEllipse(18, 5, 5, 0)
        .command;

    var smoke2 = new createjs.Shape();
    smoke2.graphics.beginFill('white');
    var smokeCmd2 = smoke.graphics
        .drawEllipse(18, 5, 5, 0)
        .command;

    var smoke3 = new createjs.Shape();
    smoke3.graphics.beginFill('white');
    var smokeCmd3 = smoke.graphics
        .drawEllipse(18, 5, 5, 0)
        .command;

    roofTopContainer.addChild(smoke);
    roofTopContainer.addChild(smoke2);
    roofTopContainer.addChild(smoke3);

    roofTopTimeline
        .to(smokeCmd, 4, {
            x: 13,
            y: -16,
            w: 18,
            h: 5,
            ease: Power1.easeIn,
            repeat: -1
        }, 0)
        .to(smokeCmd2, 4, {
            x: 13,
            y: -16,
            w: 18,
            h: 5,
            ease: Power1.easeIn,
            repeat: -1
        }, 1.3)
        .to(smokeCmd3, 4, {
            x: 13,
            y: -16,
            w: 18,
            h: 5,
            ease: Power1.easeIn,
            repeat: -1
        }, 2.6);
    return [roofTopTimeline, roofTopContainer];
}

// Utilities
/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}